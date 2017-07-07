package com.myjs.cek.recordcheckform.Action;

import com.myjs.commons.AbstractAction;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.JsonUtil;
import com.myjs.sys.user.model.VEIPMemdb;
import com.myjs.sys.variable.model.LSysVariable;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.cek.recordcheckform.model.LCekRecordCheckform;
import com.myjs.cek.recordcheckform.model.LCekRecordFile;
import com.myjs.cek.recordcheckform.model.LCekRecordSigned;
import com.myjs.cek.recordcheckform.model.LCekRecordSignedStep;
import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.cek.recordcheckform.service.recordcheckformService;
import com.myjs.sys.variable.service.variableService;

/**
 * 實作表單申請主要頁面
 * 
 * @author JiaJia
 *
 */
public class recordcheckformAction extends AbstractAction {
	private static final Logger log = LogManager.getLogger(recordcheckformAction.class);

	private static final long serialVersionUID = 893653924462901499L;

	private recordcheckformService recordcheckformService;
	private variableService variableService;
	
	public recordcheckformService getRecordcheckformService() {
		return recordcheckformService;
	}

	public void setRecordcheckformService(recordcheckformService recordcheckformService) {
		this.recordcheckformService = recordcheckformService;
	}
	
	public variableService getVariableService() {
		return variableService;
	}

	public void setVariableService(variableService variableService) {
		this.variableService = variableService;
	}

	/**
	 * 查詢表單紀錄
	 * @return
	 */
	public String findRecordCheckform() {
		try {
			log.debug("findCekForm start");
			log.debug("===== checkform info =====");
			String iptsearchrecordcheckformCreateDateS = super.getRequest()
					.getParameter("iptsearchrecordcheckformCreateDateS");
			String iptsearchrecordcheckformCreateDateE = super.getRequest()
					.getParameter("iptsearchrecordcheckformCreateDateE");
			String iptsearchrecordcheckformApplyUserId = super.getRequest()
					.getParameter("iptsearchrecordcheckformApplyUserId");
			String iptsearchrecordcheckStatus = super.getRequest().getParameter("iptsearchrecordcheckStatus");
			
			VEIPMemdb loginUser = getSessionLoginUser();
			
			log.debug("iptsearchrecordcheckformCreateDateS = {} ,iptsearchrecordcheckformCreateDateE = {} ,"
					+ "iptsearchrecordcheckformApplyUserId = {}, iptsearchrecordcheckStatus = {}",
					iptsearchrecordcheckformCreateDateS, iptsearchrecordcheckformCreateDateE,
					iptsearchrecordcheckformApplyUserId, iptsearchrecordcheckStatus);

			List<LCekRecordCheckform> LCekCheckformList = recordcheckformService.findByProperty(
					iptsearchrecordcheckformCreateDateS, iptsearchrecordcheckformCreateDateE,
					iptsearchrecordcheckformApplyUserId, iptsearchrecordcheckStatus, loginUser, getSessionLoginUserRoles());
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LCekCheckformList));
			String responseLCekCheckformList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekCheckformList);
			printToResponse(responseLCekCheckformList);
		} catch (Exception e) {
			sendException(e);
			log.error("findCekForm error ms=>", e);
		}
		log.debug("findCekForm end");
		return NONE;
	}

	/**
	 * 新增申請表單(簽呈) 需帶入caseId,userId
	 * 
	 * @return
	 */
	public String initSignedForm() {
		try {
			log.debug("initSignedForm start");
			String caseId = super.getRequest().getParameter("caseId"),
					signedId = super.getRequest().getParameter("signedId");
			log.debug("caseId = {}, signedId = {}", caseId, signedId);
			
			VEIPMemdb loginUser = getSessionLoginUser(); //當前登入的人
			JsonObject json = new JsonObject();
			
			//宣告LCekSignedCaseInfo(案件資訊)及LCekSignedRelaInfo(相關人)
			LCekSignedCaseInfo LCekSignedCaseInfo = null;
			List<LCekSignedRelaInfo> LCekSignedRelaInfo = null;

			//宣告LCekRecordSigned(存在該DB的案件資訊)
			LCekRecordSigned LCekRecordSigned = null ;
			LCekRecordSignedStep LCekRecordSignedStep = null ;
			boolean hasOldRecord = false;//當true表示有儲存過案件
			boolean canUse = false;//當true表示有儲存過案件
			if(signedId != null && !signedId.equals("") && !signedId.equals("null")){
				LCekRecordSigned = recordcheckformService.findRecordSignedById(signedId);
				LCekRecordSignedStep = recordcheckformService.findRecordSignedStepById(signedId);
				if(LCekRecordSigned != null){
					hasOldRecord = true;
				}
				if(LCekRecordSigned != null && loginUser.getMemno().equals(LCekRecordSigned.getReceivedUserId())){
					canUse = true;
				}
			}else{//如果是新案從SMART DB將資料帶入
				//用caseId 去查詢目前案件的資料
				LCekSignedCaseInfo = recordcheckformService.findCaseByCaseId(caseId);
				canUse = true;
			}
			//用caseId 去查詢目前案件的關係人
			LCekSignedRelaInfo = recordcheckformService.findRelaByCaseId(caseId);
			
			LSysVariable LSysVariable = new LSysVariable();
			LSysVariable.setVariableType("8aa2e72a5b23004b015b2355d0d9000a");
			List<LSysVariable> variableList = variableService.findVariableSubByProperty(LSysVariable);
			//組傳回前端的JSON
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LCekSignedCaseInfo));
			jsonResponse.add("Reladata", gson.toJsonTree(LCekSignedRelaInfo));
			jsonResponse.add("signedType", gson.toJsonTree(variableList));
			json.addProperty("nowDate", DateTimeFormat.getNowDate());
			json.addProperty("hasOldRecord", hasOldRecord);
			json.addProperty("canUse", canUse);
			jsonResponse.add("recordSigned", gson.toJsonTree(LCekRecordSigned));
			jsonResponse.add("recordSignedStep", gson.toJsonTree(LCekRecordSignedStep));
			jsonResponse.add("otherInfo", json);
			
			String responseLCekSignedCaseInfo = jsonResponse.toString();
			log.debug("responsedata = {}", responseLCekSignedCaseInfo);
			printToResponse(responseLCekSignedCaseInfo);
		} catch (Exception e) {
			sendException(e);
			log.error("initSignedForm error ms=>", e);
		}
		return NONE;
	}
	
	/**
	 * 儲存暫存簽呈資料
	 * 
	 */
	public String saveSigned(){
		try {
			log.debug("saveSigned start");
			log.debug("===== Signed info =====");
			
			String savecaseId = super.getRequest().getParameter("savecaseId"),
					savecaseBankName = super.getRequest().getParameter("savecaseBankName"),
					savecaseProductName = super.getRequest().getParameter("savecaseProductName"),
					savecaseRela = super.getRequest().getParameter("savecaseRela"),
					savecaseRelaRole = super.getRequest().getParameter("savecaseRelaRole"),
					savecaseType = super.getRequest().getParameter("savecaseType"),
					savecasePeriods = super.getRequest().getParameter("savecasePeriods"),
					savecasePayStartDate = super.getRequest().getParameter("savecasePayStartDate"),
					savecasePayEndDate = super.getRequest().getParameter("savecasePayEndDate"),
					savecaseAmount = super.getRequest().getParameter("savecaseAmount"),
					savecaseSumAmount = super.getRequest().getParameter("savecaseSumAmount"),
					type = super.getRequest().getParameter("type"),
					signedId = super.getRequest().getParameter("signedId"),
					saveapplyUserId = super.getRequest().getParameter("saveapplyUserId"),
					savecaseBackmark = super.getRequest().getParameter("savecaseBackmark"),
					saveownerAgree1 = super.getRequest().getParameter("saveownerAgree1"),
					saveownerAgree2 = super.getRequest().getParameter("saveownerAgree2"),
					saveRemark = super.getRequest().getParameter("saveRemark"),
					filepathdate = super.getRequest().getParameter("filepathdate"),
					signedfileuploadName = super.getRequest().getParameter("signedfileuploadName");
			String[] fileIds = super.getRequest().getParameterValues("fileIds[]"),
					saveselectOhterFiles = super.getRequest().getParameterValues("saveselectOhterFiles[]"),
					stepPay = super.getRequest().getParameterValues("stepPay[]");
					
			String saveownerAgree = "";
			if(saveownerAgree1 != null && !saveownerAgree1.equals("")){
				if(saveownerAgree1.equals("Y")){
					saveownerAgree = "Y";
				}
			}
			if(saveownerAgree2 != null && !saveownerAgree2.equals("")){
				if(saveownerAgree2.equals("N")){
					saveownerAgree = "N";
				}
			}
			
			log.debug("savecaseId = {}, savecaseBankName = {} , savecaseProductName = {} , savecaseRela = {} , "
					+ "savecaseRelaRole = {} , savecaseType = {} , savecasePeriods = {} , savecasePayStartDate = {} , "
					+ "savecasePayEndDate = {} , savecaseAmount = {} , savecaseSumAmount = {}, signedId = {} , "
					+ "filepathdate = {} , signedfileuploadName = {} , saveapplyUserId = {} , saveownerAgree = {} , saveRemark = {}", 
					savecaseId, savecaseBankName, savecaseProductName, savecaseRela, savecaseRelaRole, savecaseType, 
					savecasePeriods, savecasePayStartDate, savecasePayEndDate, savecaseAmount, savecaseSumAmount,
					signedId, filepathdate, signedfileuploadName, saveapplyUserId, saveownerAgree, saveRemark);
			
			int caseid = Integer.valueOf(savecaseId);
			int caseAmount = 0;
			if(savecaseAmount != null && !savecaseAmount.equals("")){
				caseAmount = Integer.valueOf(savecaseAmount);
			}
			int caseSumAmount = 0;
			if(savecaseSumAmount != null && !savecaseSumAmount.equals("")){
				caseSumAmount = Integer.valueOf(savecaseSumAmount);
			}
			int casePeriods = 0;
			if(savecasePeriods != null && !savecasePeriods.equals("")){
				casePeriods = Integer.valueOf(savecasePeriods);
			}

			Date casePayStartDate = new Date();
			if(savecasePayStartDate != null && !savecasePayStartDate.equals("")){
				casePayStartDate = DateTimeFormat.getTime(savecasePayStartDate + " 00:00:00");
			}
			Date casePayEndDate = new Date();
			if(savecasePayEndDate != null && !savecasePayEndDate.equals("")){
				casePayEndDate = DateTimeFormat.getTime(savecasePayEndDate + " 00:00:00");
			}

			Date createdate = new Date();
			Date modifydate = createdate;
			
			String signedID = null;
			if(signedId != null && !signedId.equals("") && !signedId.equals("null")){
				signedID = signedId;
			}

			VEIPMemdb loginUser = getSessionLoginUser();
			
			LCekRecordSigned LCekRecordSigned = new LCekRecordSigned(signedID, caseid, savecaseBankName, savecaseProductName, savecaseRela,
					savecaseRelaRole, savecaseType, casePeriods, casePayStartDate, casePayEndDate, caseAmount,
					caseSumAmount, createdate, 1, savecaseBackmark, loginUser.getMemno(), loginUser.getMemno(), 
					createdate, loginUser.getMemnm(), loginUser.getMemnm(), saveownerAgree, saveRemark);
			
			ArrayList<LCekRecordFile> LCekRecordFile = new ArrayList<LCekRecordFile>();
			
			if(signedfileuploadName != null){
				String[] signedfileuploadNames = signedfileuploadName.split(",");
				for(int i = 0; i < signedfileuploadNames.length ;i++){
					String file = "";
					if(fileIds != null){
						file = fileIds[0];
					}
					LCekRecordFile addLCekRecordFile = new LCekRecordFile(null, file, signedfileuploadNames[i].trim(), getpath() + "\\modify\\" + filepathdate, modifydate, loginUser.getMemno(), null);
					LCekRecordFile.add(addLCekRecordFile);
				}
			}
			
			LCekRecordCheckform LCekRecordCheckform = new LCekRecordCheckform(null, "8aa2e72a5b23004b015b234c17ee0009", "flowsub_01",
					1, loginUser.getMemno(), modifydate, LCekRecordSigned.getSignedId(), loginUser.getMemno());
			
			recordcheckformService.saveSignedform(LCekRecordSigned, LCekRecordCheckform, type, LCekRecordFile, loginUser, saveselectOhterFiles, stepPay);
			JsonObject json = new JsonObject();
			json.addProperty("success", "success");
			json.addProperty("msg", "簽呈已暫存");
			json.addProperty("signedId", LCekRecordSigned.getSignedId());
			log.debug("saveSigned end {}", json);
			printToResponse(json.toString());
			
		} catch (Exception e) {
			sendException(e);
			log.error("saveSigned error ms=>", e);
		}
		return NONE;
	}
	
	/**
	 * 送出簽呈資料(至主管)
	 * status改為2
	 * 寄出信件
	 */
	public String submitSigned(){
		try {
			log.debug("saveSigned start");
			log.debug("===== Signed info =====");
			
			String savecaseId = super.getRequest().getParameter("savecaseId"),
					savecaseBankName = super.getRequest().getParameter("savecaseBankName"),
					savecaseProductName = super.getRequest().getParameter("savecaseProductName"),
					savecaseRela = super.getRequest().getParameter("savecaseRela"),
					savecaseRelaRole = super.getRequest().getParameter("savecaseRelaRole"),
					savecaseType = super.getRequest().getParameter("savecaseType"),
					savecasePeriods = super.getRequest().getParameter("savecasePeriods"),
					savecasePayStartDate = super.getRequest().getParameter("savecasePayStartDate"),
					savecasePayEndDate = super.getRequest().getParameter("savecasePayEndDate"),
					savecaseAmount = super.getRequest().getParameter("savecaseAmount"),
					savecaseSumAmount = super.getRequest().getParameter("savecaseSumAmount"),
					type = super.getRequest().getParameter("type"),
					signedId = super.getRequest().getParameter("signedId"),
					saveapplyUserId = super.getRequest().getParameter("saveapplyUserId"),
					savecaseBackmark = super.getRequest().getParameter("savecaseBackmark"),
					saveownerAgree1 = super.getRequest().getParameter("saveownerAgree1"),
					saveownerAgree2 = super.getRequest().getParameter("saveownerAgree2"),
					saveRemark = super.getRequest().getParameter("saveRemark"),
					filepathdate = super.getRequest().getParameter("filepathdate"),
					signedfileuploadName = super.getRequest().getParameter("signedfileuploadName");
				String[] fileIds = super.getRequest().getParameterValues("fileIds[]"),
						saveselectOhterFiles = super.getRequest().getParameterValues("saveselectOhterFiles[]"),
						stepPay = super.getRequest().getParameterValues("stepPay[]");
					
				String saveownerAgree = "";
				if(saveownerAgree1 != null && !saveownerAgree1.equals("")){
					if(saveownerAgree1.equals("Y")){
						saveownerAgree = "Y";
					}
				}
				if(saveownerAgree2 != null && !saveownerAgree2.equals("")){
					if(saveownerAgree2.equals("N")){
						saveownerAgree = "N";
					}
				}
					
			log.debug("savecaseId = {}, savecaseBankName = {} , savecaseProductName = {} , savecaseRela = {} , "
					+ "savecaseRelaRole = {} , savecaseType = {} , savecasePeriods = {} , savecasePayStartDate = {} , "
					+ "savecasePayEndDate = {} , savecaseAmount = {} , savecaseSumAmount = {} , "
					+ "signedId = {} , saveapplyUserId = {} , saveownerAgree = {} , saveRemark = {}", 
					savecaseId, savecaseBankName, savecaseProductName, savecaseRela, savecaseRelaRole, savecaseType, 
					savecasePeriods, savecasePayStartDate, savecasePayEndDate, savecaseAmount, savecaseSumAmount, signedId, saveapplyUserId, saveownerAgree, saveRemark);
			
			int caseid = Integer.valueOf(savecaseId);
			int caseAmount = 0;
			if(savecaseAmount != null && !savecaseAmount.equals("")){
				caseAmount = Integer.valueOf(savecaseAmount);
			}
			int caseSumAmount = 0;
			if(savecaseSumAmount != null && !savecaseSumAmount.equals("")){
				caseSumAmount = Integer.valueOf(savecaseSumAmount);
			}
			int casePeriods = 0;
			if(savecasePeriods != null && !savecasePeriods.equals("")){
				casePeriods = Integer.valueOf(savecasePeriods);
			}

			Date casePayStartDate = new Date();
			if(savecasePayStartDate != null && !savecasePayStartDate.equals("")){
				casePayStartDate = DateTimeFormat.getTime(savecasePayStartDate + " 00:00:00");
			}
			Date casePayEndDate = new Date();
			if(savecasePayEndDate != null && !savecasePayEndDate.equals("")){
				casePayEndDate = DateTimeFormat.getTime(savecasePayEndDate + " 00:00:00");
			}

			Date createdate = new Date();
			Date modifydate = createdate;
			
			String signedID = null;
			if(signedId != null && !signedId.equals("")){
				signedID = signedId;
			}
			
			VEIPMemdb loginUser = getSessionLoginUser();
			
			LCekRecordSigned LCekRecordSigned = new LCekRecordSigned(signedID, caseid, savecaseBankName, savecaseProductName, savecaseRela,
					savecaseRelaRole, savecaseType, casePeriods, casePayStartDate, casePayEndDate, caseAmount,
					caseSumAmount, createdate, 2, savecaseBackmark, loginUser.getMemno(), null, createdate, loginUser.getMemnm(), null, saveownerAgree, saveRemark);

			ArrayList<LCekRecordFile> LCekRecordFile = new ArrayList<LCekRecordFile>();
			
			if(signedfileuploadName != null){
				String[] signedfileuploadNames = signedfileuploadName.split(",");
				for(int i = 0; i < signedfileuploadNames.length ;i++){
					String file = "";
					if(fileIds != null){
						file = fileIds[0];
					}
					LCekRecordFile addLCekRecordFile = new LCekRecordFile(null, file, signedfileuploadNames[i].trim(), getpath() + "\\modify\\" + filepathdate, modifydate, loginUser.getMemno(), null);
					LCekRecordFile.add(addLCekRecordFile);
				}
			}
			
			LCekRecordCheckform LCekRecordCheckform = new LCekRecordCheckform(null, "8aa2e72a5b23004b015b234c17ee0009", "flowsub_02",
					2, loginUser.getMemno(), modifydate, LCekRecordSigned.getSignedId(), null);
			
			recordcheckformService.saveSignedform(LCekRecordSigned, LCekRecordCheckform, type, LCekRecordFile, loginUser, saveselectOhterFiles, stepPay);
			
			String result = JsonUtil.ajaxResultSuccess("簽呈已送出").toString();
			log.debug("saveSigned end {}", result);
			printToResponse(result);
			
		} catch (Exception e) {
			sendException(e);
			log.error("saveSigned error ms=>", e);
		}
		return NONE;
	}
	
	/**
	 * 退回簽呈資料(至申請人)
	 * status改為3
	 * 寄出信件
	 */
	public String backSigned(){
		try {
			log.debug("backSigned start");
			log.debug("===== Signed info =====");
			
			String savecaseId = super.getRequest().getParameter("savecaseId"),
					savecaseBankName = super.getRequest().getParameter("savecaseBankName"),
					savecaseProductName = super.getRequest().getParameter("savecaseProductName"),
					savecaseRela = super.getRequest().getParameter("savecaseRela"),
					savecaseRelaRole = super.getRequest().getParameter("savecaseRelaRole"),
					savecaseType = super.getRequest().getParameter("savecaseType"),
					savecasePeriods = super.getRequest().getParameter("savecasePeriods"),
					savecasePayStartDate = super.getRequest().getParameter("savecasePayStartDate"),
					savecasePayEndDate = super.getRequest().getParameter("savecasePayEndDate"),
					savecaseAmount = super.getRequest().getParameter("savecaseAmount"),
					savecaseSumAmount = super.getRequest().getParameter("savecaseSumAmount"),
					type = super.getRequest().getParameter("type"),
					signedId = super.getRequest().getParameter("signedId"),
					savecaseBackmark = super.getRequest().getParameter("savecaseBackmark"),
					saveapplyUserId = super.getRequest().getParameter("saveapplyUserId"),
					saveownerAgree1 = super.getRequest().getParameter("saveownerAgree1"),
					saveownerAgree2 = super.getRequest().getParameter("saveownerAgree2"),
					saveRemark = super.getRequest().getParameter("saveRemark"),
					filepathdate = super.getRequest().getParameter("filepathdate"),
					signedfileuploadName = super.getRequest().getParameter("signedfileuploadName");
			String[] fileIds = super.getRequest().getParameterValues("fileIds[]"),
					stepPay = super.getRequest().getParameterValues("stepPay[]");
			
			String saveownerAgree = "";
			if(saveownerAgree1 != null && !saveownerAgree1.equals("")){
				if(saveownerAgree1.equals("Y")){
					saveownerAgree = "Y";
				}
			}
			if(saveownerAgree2 != null && !saveownerAgree2.equals("")){
				if(saveownerAgree2.equals("N")){
					saveownerAgree = "N";
				}
			}
					
			log.debug("savecaseId = {}, savecaseBankName = {} , savecaseProductName = {} , savecaseRela = {} , "
					+ "savecaseRelaRole = {} , savecaseType = {} , savecasePeriods = {} , savecasePayStartDate = {} , "
					+ "savecasePayEndDate = {} , savecaseAmount = {} , savecaseSumAmount = {} , "
					+ "signedId = {} , savecaseBackmark = {} , saveapplyUserId = {} , saveownerAgree = {} , saveRemark = {}", 
					savecaseId, savecaseBankName, savecaseProductName, savecaseRela, savecaseRelaRole, savecaseType, 
					savecasePeriods, savecasePayStartDate, savecasePayEndDate, savecaseAmount, savecaseSumAmount, 
					signedId, savecaseBackmark,saveapplyUserId, saveownerAgree, saveRemark);
			
			int caseid = Integer.valueOf(savecaseId);
			int caseAmount = 0;
			if(savecaseAmount != null && !savecaseAmount.equals("")){
				caseAmount = Integer.valueOf(savecaseAmount);
			}
			int caseSumAmount = 0;
			if(savecaseSumAmount != null && !savecaseSumAmount.equals("")){
				caseSumAmount = Integer.valueOf(savecaseSumAmount);
			}
			int casePeriods = 0;
			if(savecasePeriods != null && !savecasePeriods.equals("")){
				casePeriods = Integer.valueOf(savecasePeriods);
			}

			Date casePayStartDate = new Date();
			if(savecasePayStartDate != null && !savecasePayStartDate.equals("")){
				casePayStartDate = DateTimeFormat.getTime(savecasePayStartDate + " 00:00:00");
			}
			Date casePayEndDate = new Date();
			if(savecasePayEndDate != null && !savecasePayEndDate.equals("")){
				casePayEndDate = DateTimeFormat.getTime(savecasePayEndDate + " 00:00:00");
			}

			Date createdate = new Date();
			Date modifydate = createdate;
			
			String signedID = null;
			if(signedId != null && !signedId.equals("")){
				signedID = signedId;
			}
			LCekRecordSigned LCekRecordSigned = new LCekRecordSigned(signedID, caseid, savecaseBankName, savecaseProductName, savecaseRela,
					savecaseRelaRole, savecaseType, casePeriods, casePayStartDate, casePayEndDate, caseAmount,
					caseSumAmount, createdate, Integer.valueOf(type), savecaseBackmark, saveapplyUserId, null, createdate, null, null, saveownerAgree, saveRemark);

			ArrayList<LCekRecordFile> LCekRecordFile = new ArrayList<LCekRecordFile>();
			
			VEIPMemdb loginUser = getSessionLoginUser();
			
			if(signedfileuploadName != null){
				String[] signedfileuploadNames = signedfileuploadName.split(",");
				for(int i = 0; i < signedfileuploadNames.length ;i++){
					String file = "";
					if(fileIds != null){
						file = fileIds[0];
					}
					LCekRecordFile addLCekRecordFile = new LCekRecordFile(null, file, signedfileuploadNames[i].trim(), getpath() + "\\modify\\" + filepathdate, modifydate, loginUser.getMemno(), null);
					LCekRecordFile.add(addLCekRecordFile);
				}
			}
			
			LCekRecordCheckform LCekRecordCheckform = new LCekRecordCheckform(null, "8aa2e72a5b23004b015b234c17ee0009", "flowsub_03",
					Integer.valueOf(type), loginUser.getMemno(), modifydate, LCekRecordSigned.getSignedId(), null);
			
			recordcheckformService.saveSignedform(LCekRecordSigned, LCekRecordCheckform, type, LCekRecordFile, loginUser, null, stepPay);
			
			String result = JsonUtil.ajaxResultSuccess("簽呈已退回").toString();
			if(type.equals("4")){
				result = JsonUtil.ajaxResultSuccess("簽呈已核准").toString();
			}else if(type.equals("5")){
				result = JsonUtil.ajaxResultSuccess("簽呈已儲存").toString();
			}
			log.debug("backSigned end {}", result);
			printToResponse(result);
			
		} catch (Exception e) {
			sendException(e);
			log.error("backSigned error ms=>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-04-28 把表單合在一起寫，歸類比較清楚
	 * 簽呈的表單暫存、送出、退回、審核、儲存結案控制
	 * 暫存:type=1,status=1
	 * 送出:type=2,status=2
	 * 退回:type=3,status=3
	 * 審核:type=4,status=4
	 * 結案:type=5,status=5
	 */
	public String sendSignedForm(){
		try {
			log.debug("sendSignedForm start");
			log.debug("===== Signed info =====");
			String savecaseId = super.getRequest().getParameter("savecaseId"),
					savecaseBankName = super.getRequest().getParameter("savecaseBankName"),
					savecaseProductName = super.getRequest().getParameter("savecaseProductName"),
					savecaseRela = super.getRequest().getParameter("savecaseRela"),
					savecaseRelaRole = super.getRequest().getParameter("savecaseRelaRole"),
					savecaseType = super.getRequest().getParameter("savecaseType"),
					savecasePeriods = super.getRequest().getParameter("savecasePeriods"),
					savecasePayStartDate = super.getRequest().getParameter("savecasePayStartDate"),
					savecasePayEndDate = super.getRequest().getParameter("savecasePayEndDate"),
					savecaseAmount = super.getRequest().getParameter("savecaseAmount"),
					savecaseSumAmount = super.getRequest().getParameter("savecaseSumAmount"),
					type = super.getRequest().getParameter("type"),
					signedId = super.getRequest().getParameter("signedId"),
					saveapplyUserId = super.getRequest().getParameter("saveapplyUserId"),
					savecaseBackmark = super.getRequest().getParameter("savecaseBackmark"),
					saveownerAgree1 = super.getRequest().getParameter("saveownerAgree1"),
					saveownerAgree2 = super.getRequest().getParameter("saveownerAgree2"),
					saveRemark = super.getRequest().getParameter("saveRemark"),
					filepathdate = super.getRequest().getParameter("filepathdate"),
					signedfileuploadName = super.getRequest().getParameter("signedfileuploadName");
			String[] fileIds = super.getRequest().getParameterValues("fileIds[]"),
					stepPay = super.getRequest().getParameterValues("stepPay[]");
					
			String saveownerAgree = "";
			if(saveownerAgree1 != null && !saveownerAgree1.equals("")){
				if(saveownerAgree1.equals("Y")){
					saveownerAgree = "Y";
				}
			}
			if(saveownerAgree2 != null && !saveownerAgree2.equals("")){
				if(saveownerAgree2.equals("N")){
					saveownerAgree = "N";
				}
			}
			
			log.debug("savecaseId = {}, savecaseBankName = {} , savecaseProductName = {} , savecaseRela = {} , "
					+ "savecaseRelaRole = {} , savecaseType = {} , savecasePeriods = {} , savecasePayStartDate = {} , "
					+ "savecasePayEndDate = {} , savecaseAmount = {} , savecaseSumAmount = {} ,"
					+ "signedId = {} , saveapplyUserId = {} , saveownerAgree = {} , saveRemark = {}", 
					savecaseId, savecaseBankName, savecaseProductName, savecaseRela, savecaseRelaRole, savecaseType, 
					savecasePeriods, savecasePayStartDate, savecasePayEndDate, savecaseAmount, savecaseSumAmount, 
					signedId, saveapplyUserId, saveownerAgree, saveRemark);
			
			int caseid = Integer.valueOf(savecaseId);
			int caseAmount = 0;
			if(savecaseAmount != null && !savecaseAmount.equals("")){
				caseAmount = Integer.valueOf(savecaseAmount);
			}
			int caseSumAmount = 0;
			if(savecaseSumAmount != null && !savecaseSumAmount.equals("")){
				caseSumAmount = Integer.valueOf(savecaseSumAmount);
			}
			int casePeriods = 0;
			if(savecasePeriods != null && !savecasePeriods.equals("")){
				casePeriods = Integer.valueOf(savecasePeriods);
			}

			Date casePayStartDate = new Date();
			if(savecasePayStartDate != null && !savecasePayStartDate.equals("")){
				casePayStartDate = DateTimeFormat.getTime(savecasePayStartDate + " 00:00:00");
			}
			Date casePayEndDate = new Date();
			if(savecasePayEndDate != null && !savecasePayEndDate.equals("")){
				casePayEndDate = DateTimeFormat.getTime(savecasePayEndDate + " 00:00:00");
			}

			Date createdate = new Date();
			Date modifydate = createdate;
			
			String signedID = null;
			if(signedId != null && !signedId.equals("")){
				signedID = signedId;
			}
			LCekRecordSigned LCekRecordSigned = new LCekRecordSigned(signedID, caseid, savecaseBankName, savecaseProductName, savecaseRela,
					savecaseRelaRole, savecaseType, casePeriods, casePayStartDate, casePayEndDate, caseAmount,
					caseSumAmount, createdate, 3, savecaseBackmark, saveapplyUserId, null,createdate, null, null, saveownerAgree, saveRemark);

			ArrayList<LCekRecordFile> LCekRecordFile = new ArrayList<LCekRecordFile>();
			
			VEIPMemdb loginUser = getSessionLoginUser();
			
			if(signedfileuploadName != null){
				String[] signedfileuploadNames = signedfileuploadName.split(",");
				for(int i = 0; i < signedfileuploadNames.length ;i++){
					String file = "";
					if(fileIds != null){
						file = fileIds[0];
					}
					LCekRecordFile addLCekRecordFile = new LCekRecordFile(null, file, signedfileuploadNames[i].trim(), getpath() + "\\modify\\" + filepathdate, modifydate, loginUser.getMemno(), null);
					LCekRecordFile.add(addLCekRecordFile);
				}
			}
			
			LCekRecordCheckform LCekRecordCheckform = new LCekRecordCheckform(null, "8aa2e72a5b23004b015b234c17ee0009", "flowsub_03",
					Integer.valueOf(type), loginUser.getMemno(), modifydate, LCekRecordSigned.getSignedId(), null);
			
			recordcheckformService.saveSignedform(LCekRecordSigned, LCekRecordCheckform, type, LCekRecordFile, loginUser, null, stepPay);
			
			String result = JsonUtil.ajaxResultSuccess("簽呈已退回").toString();
			log.debug("sendSignedForm end {}", result);
			printToResponse(result);
			
		} catch (Exception e) {
			sendException(e);
			log.error("sendSignedForm error ms=>", e);
		}
		return NONE;
	}
	
	public String downloadSignedFile(){
		try{
			log.debug("===== signedFileType info =====");
			String fileTypeOne = super.getRequest().getParameter("fileTypeOne"),
					fileTypeTwo = super.getRequest().getParameter("fileTypeTwo"),
					signedId = super.getRequest().getParameter("signedId");
			
			log.debug("套表將要用的值帶入");
			String savecaseId = super.getRequest().getParameter("savecaseId"),
					savecaseBankName = super.getRequest().getParameter("savecaseBankName"),
					savecaseProductName = super.getRequest().getParameter("savecaseProductName"),
					savecaseRela = super.getRequest().getParameter("savecaseRela"),
					savecaseRelaRole = super.getRequest().getParameter("savecaseRelaRole"),
					savecaseType = super.getRequest().getParameter("savecaseType"),
					savecasePeriods = super.getRequest().getParameter("savecasePeriods"),
					savecasePayStartDate = super.getRequest().getParameter("savecasePayStartDate"),
					savecasePayEndDate = super.getRequest().getParameter("savecasePayEndDate"),
					savecaseAmount = super.getRequest().getParameter("savecaseAmount"),
					savecaseSumAmount = super.getRequest().getParameter("savecaseSumAmount"),
					saveapplyUserId = super.getRequest().getParameter("saveapplyUserId"),
					savecaseCreateDate = super.getRequest().getParameter("savecaseCreateDate"),
					savepayerID = super.getRequest().getParameter("savepayerID");
					
			log.debug("savecaseId = {}, savecaseBankName = {}, savecaseProductName = {}, savecaseRela = {},"
					+ "savecaseRelaRole = {}, savecaseType = {}, savecasePeriods = {}, savecasePayStartDate = {},"
					+ "savecasePayEndDate = {}, savecaseAmount = {}, savecaseSumAmount = {},"
					+ "saveapplyUserId = {} , savecaseCreateDate = {}, savepayerID = {}"
					, savecaseId, savecaseBankName, savecaseProductName, savecaseRela, savecaseRelaRole, savecaseType, 
					savecasePeriods, savecasePayStartDate, savecasePayEndDate, savecaseAmount, savecaseSumAmount,
					saveapplyUserId, savecaseCreateDate, savepayerID);
			

			int caseid = Integer.valueOf(savecaseId);
			int caseAmount = 0;
			if(savecaseAmount != null && !savecaseAmount.equals("")){
				caseAmount = Integer.valueOf(savecaseAmount);
			}
			int caseSumAmount = 0;
			if(savecaseSumAmount != null && !savecaseSumAmount.equals("")){
				caseSumAmount = Integer.valueOf(savecaseSumAmount);
			}
			int casePeriods = 0;
			if(savecasePeriods != null && !savecasePeriods.equals("")){
				casePeriods = Integer.valueOf(savecasePeriods);
			}
			Date casePayStartDate = new Date();
			if(savecasePayStartDate != null && !savecasePayStartDate.equals("")){
				casePayStartDate = DateTimeFormat.getTime(savecasePayStartDate + " 00:00:00");
			}
			Date casePayEndDate = new Date();
			if(savecasePayEndDate != null && !savecasePayEndDate.equals("")){
				casePayEndDate = DateTimeFormat.getTime(savecasePayEndDate + " 00:00:00");
			}
			Date caseCreateDate = new Date();
			if(savecasePayEndDate != null && !savecasePayEndDate.equals("")){
				caseCreateDate = DateTimeFormat.getTime(savecaseCreateDate + " 00:00:00");
			}

			LCekRecordSigned LCekRecordSigned = new LCekRecordSigned(signedId, caseid, savecaseBankName, savecaseProductName, savecaseRela,
					savecaseRelaRole, savecaseType, casePeriods, casePayStartDate, casePayEndDate, caseAmount,
					caseSumAmount, caseCreateDate, 0, "", saveapplyUserId,"", caseCreateDate,"applyUserName","",	"", "");
			LCekRecordSigned.setPayerId(savepayerID);
			
			log.debug("fileTypeOne = {} , fileTypeTwo = {} , signedId = {}", fileTypeOne, fileTypeTwo, signedId);
			String MapFileList = recordcheckformService.downloadSignedFile(fileTypeOne,fileTypeTwo, signedId, LCekRecordSigned).toString();
			log.debug("MapFileList = {}", MapFileList);
			printToResponse(MapFileList);
		}catch(Exception e){
			sendException(e);
			log.error("downloadSignedFile error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * add by Jia 2017-05-19 新增選擇其他附件
	 * @return
	 */
	public String selectedSigned(){
		try{
			log.debug("===== selectedFile info =====");
			String caseId = super.getRequest().getParameter("selectedcaseId"),
				type = super.getRequest().getParameter("type"),
				signedId = super.getRequest().getParameter("signedId");
			
			log.debug("caseId = {} , type = {}", caseId, type);
			VEIPMemdb loginUser = getSessionLoginUser();
			String MapFileList = recordcheckformService.findOtherFilesByCaseId(signedId, caseId, type, loginUser.getMemno()).toString();
			log.debug("MapFileList = {}", MapFileList);
			printToResponse(MapFileList);
		}catch(Exception e){
			sendException(e);
			log.error("selectedSigned error msg==>", e);
		}
		return NONE;
	}
}
