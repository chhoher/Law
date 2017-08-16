package com.myjs.doc.documents.Action;

import java.io.IOException;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.doc.documents.service.docService;
import com.myjs.sys.user.model.VEIPMemdb;
import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.commons.AbstractAction;

public class docAction extends AbstractAction {

	private static final long serialVersionUID = -8355626774003201809L;

	private static final Logger log = LogManager.getLogger(docAction.class);

	private docService docService;
	
	public docService getDocService() {
		return docService;
	}


	public void setDocService(docService docService) {
		this.docService = docService;
	}

	/**
	 * add By Jia 2017-06-27
	 * 讀取案件資料
	 * @return
	 */
	public String loadCaseInfo() {
		try {
			log.debug("loadCaseInfo start");
			String caseId = super.getRequest().getParameter("iptsearchcaseId"),
					userId = super.getRequest().getParameter("userId"),
					debtorName = super.getRequest().getParameter("iptsearchdebtorName"),
					debtorId = super.getRequest().getParameter("iptsearchdebtorID"),
					docNo = super.getRequest().getParameter("iptsearchdocNo"),
					legalCaseId = super.getRequest().getParameter("iptsearchLawCaseId");
			log.debug(
					"caseId = {}, userId = {}, customerName = {}, customerId = {} ," + "docNo = {} , legalCaseId = {}",
					caseId, userId, debtorName, debtorId, docNo, legalCaseId);

			List<LCekSignedCaseInfo> LCekSignedCaseInfoList = docService.findByProperty(caseId, debtorName,
					debtorId, docNo, legalCaseId);

			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LCekSignedCaseInfoList));
			jsonResponse.addProperty("loginUserRoleIds", getSessionLoginUserRoles());
			String responseLCekSignedCaseInfoList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekSignedCaseInfoList);
			printToResponse(responseLCekSignedCaseInfoList);
		} catch (Exception e) {
			sendException(e);
			log.error("loadCaseInfo error ms=>", e);
		}
		return NONE;
	}
	
	public String loadCaseRela(){
		try{
			log.debug("=====loadCaseRela start=====");
			String caseId = super.getRequest().getParameter("iptsearchcaseId");
			//用caseId 去查詢目前案件的關係人
			List<LCekSignedRelaInfo> LCekSignedRelaInfo = docService.findRelaByCaseId(caseId);

			JsonObject jsonResponse = new JsonObject();
			Gson gson = new Gson();
			jsonResponse.add("Reladata", gson.toJsonTree(LCekSignedRelaInfo));
			log.debug("responsedata = {}", jsonResponse.toString());
			printToResponse(jsonResponse.toString());
		}catch(Exception e){
			sendException(e);
			log.error("loadCaseRela error msd=>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-06-07 
	 * 初始化下拉選單
	 */
	public String initSelectOption(){
		try{
			log.debug("=====initSelectOption start=====");
			String returnValue = docService.findDocaddSelectOption();
			
			log.debug("returnValue = {}", returnValue);
			printToResponse(returnValue);
		}catch(Exception e){
			sendException(e);
			log.error("initSelectOption error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-06-14
	 * 儲存新增文件
	 */
	public String saveaddDoc(){
		try{
			log.debug("=====saveaddDoc start=====");
			String caseId = super.getRequest().getParameter("caseId"),
					docInfoId = super.getRequest().getParameter("docInfoId"),
					docinfoJson = super.getRequest().getParameter("returnOther"),
					centitlementJson = super.getRequest().getParameter("returnCentitlement"),
					courtDocJson = super.getRequest().getParameter("returnCourtDoc"),
					cashiercheckJson = super.getRequest().getParameter("returnCashierCheck"),
					debtsJson = super.getRequest().getParameter("returnDebts"),
					claimsdocsJson = super.getRequest().getParameter("returnClaim"),
					filedocsJson = super.getRequest().getParameter("returnFile"),
					otherdocsJson = super.getRequest().getParameter("returnOther");
			log.debug("caseId = {}, docInfoId = {}", caseId, docInfoId);
			log.debug("centitlementJson = {}", centitlementJson);
			log.debug("courtDocJson = {}", courtDocJson);
			log.debug("cashiercheckJson = {}", cashiercheckJson);
			log.debug("debtsJson = {}", debtsJson);
			log.debug("claimsdocsJson = {}", claimsdocsJson);
			log.debug("file = {}", filedocsJson);
			log.debug("other = {}", otherdocsJson);
			String response = docService.saveaddDoc(docInfoId, getSessionLoginUser(), caseId, docinfoJson,
					centitlementJson, courtDocJson, cashiercheckJson, debtsJson, claimsdocsJson, filedocsJson, otherdocsJson);
			log.debug("response = {}", response);
			printToResponse(response);
			
		}catch(Exception e){
			sendException(e);
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.addProperty("success", "error");
			jsonResponse.addProperty("msg", "儲存失敗");
			try {
				printToResponse(jsonResponse.toString());
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			log.error("saveaddDoc error msg===>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-06-22
	 * 載入需修改的文件，若是新增的則給一組UUID
	 */
	public String initaddDoc(){
		try{
			String infoId = super.getRequest().getParameter("infoId"),
					caseId = super.getRequest().getParameter("caseId");
			if(infoId != null && !infoId.equals("") && !infoId.equals("undefined")){
				// select table L_DOC_INFO
			}else{
				// insert table L_DOC_INFO 並取回ID
				String response = docService.saveaddDocInfo(getSessionLoginUser(), caseId);
				printToResponse(response);
			}
		}catch(Exception e){
			sendException(e);
			log.error("initaddDoc error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-07-18
	 * 載入該案件所有文件
	 */
	public String loadCaseDocs(){
		try{
			log.debug("loadCaseDocs start");
			String caseId = super.getRequest().getParameter("caseId");
			log.debug("caseId = {}", caseId);
			String response = docService.loadCaseDocsByCaseId(caseId).toString();
			log.debug("responseString = {}", response);
			printToResponse(response);
		}catch(Exception e){
			sendException(e);
			log.error("loadCaseDocs error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-07-21
	 * 將文管系統的下拉選項初始化
	 */
	public String initSelectedForDocSys(){
		try{
			log.debug("=====initSelectedForDocSys start=====");
			String returnValue = docService.findDocSysSelectOption();
			
			log.debug("returnValue = {}", returnValue);
			printToResponse(returnValue);
		}catch(Exception e){
			sendException(e);
			log.error("initSelectedForDocSys error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-07-21
	 * 申調文件
	 */
	public String saveBorrowDocs(){
		try{
			log.debug("=====saveBorrowDocs start=====");
			String saveBorrowString = super.getRequest().getParameter("saveBorrowInfo"),
//					docCode = super.getRequest().getParameter("docCodes"),
					caseId = super.getRequest().getParameter("caseId");
			
			log.debug("saveBorrowString = {}, docCode = {}, caseId = {}", saveBorrowString, caseId);
			
			VEIPMemdb loginUser = getSessionLoginUser();
			String response = docService.saveBorrowDocs(saveBorrowString, loginUser, caseId);//申調
			
			log.debug("response = {}", response);
			printToResponse(response);
		}catch(Exception e){
			sendException(e);
			log.error("saveBorrowDocs error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-07-24
	 * 匯出excel申調的資訊
	 */
	public String printBorrowDocs(){
		try{
			log.debug("printBorrowDocs start");
			String printBorrowString = super.getRequest().getParameter("printBorrowInfo");
			
			log.debug("printBorrowString = {}", printBorrowString);
			String response = docService.printBorrowDocs(printBorrowString, getpath());
			
			log.debug("response = {}", response);
			printToResponse(response);
		}catch(Exception e){
			sendException(e);
			log.error("printBorrowDocs error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-07-26
	 * 查詢文管總表
	 */
	public String queryDocSumTable(){
		try{
			log.debug("queryDocSumTable start");
			
			String response = docService.querySumDocs();
			
			log.debug("response = {}", response);
			printToResponse(response);
			
		}catch(Exception e){
			sendException(e);
			log.error("queryDocSumTable error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-07-27 
	 * 初始化文管總表下拉選單和複選
	 */
	public String initdocSumSelectOption(){
		try{
			log.debug("=====initdocSumSelectOption start=====");
			String returnValue = docService.findDocSumSelectOption();
			
			log.debug("returnValue = {}", returnValue);
			printToResponse(returnValue);
		}catch(Exception e){
			sendException(e);
			log.error("initdocSumSelectOption error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-08-15
	 * 將影像檔複製回來後下載
	 */
	public String downloadImgFile(){
		try{
			log.debug("=====downloadImgFile start=====");
			String caseId = super.getRequest().getParameter("rowCaseId"),
					fileName = super.getRequest().getParameter("fileName");
			String path = getpath();
			String returndownloadImgFile = docService.downloadImgFile(caseId, fileName, path);
			
			log.debug("returndownloadImgFile = {}", returndownloadImgFile);
			printToResponse(returndownloadImgFile);
		}catch(Exception e){
			sendException(e);
			log.error("downloadImgFile error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-08-15
	 * 修改選擇文件的狀態
	 */
	public String updateDocStatus(){
		try{
			log.debug("=====updateDocStatus start=====");
			String docId = super.getRequest().getParameter("docId"),
					updateDocStatus = super.getRequest().getParameter("updateDocStatus");
			
			log.debug("docId = {}, updateDocStatus = {}", docId, updateDocStatus);
			String returnValue = docService.updateDocStatus(docId, updateDocStatus);
			
			log.debug("returnValue = {}", returnValue);
			printToResponse(returnValue);
		}catch(Exception e){
			sendException(e);
			log.error("updateDocStatus error msg==>", e);
		}
		return NONE;
	}
}
