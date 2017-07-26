package com.myjs.cek.recordcheckform.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.cek.recordcheckform.Dao.recordcheckformDao;
import com.myjs.sys.file.Dao.fileDao;
import com.myjs.sys.user.Dao.memdbDao;
import com.myjs.sys.file.model.LSysFile;
import com.myjs.sys.user.model.VEIPMemdb;
import com.myjs.cek.recordcheckform.model.LCekRecordCheckform;
import com.myjs.cek.recordcheckform.model.LCekRecordFile;
import com.myjs.cek.recordcheckform.model.LCekRecordOtherfile;
import com.myjs.cek.recordcheckform.model.LCekRecordSigned;
import com.myjs.cek.recordcheckform.model.LCekRecordSignedStep;
import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.FilesUploads;
import com.myjs.commons.JsonUtil;
import com.myjs.commons.MailSenderInfo;
import com.myjs.commons.MailUtil;
import com.myjs.commons.NumberUtil;

public class recordcheckformServiceImpl implements recordcheckformService{
	private static final Logger log = LogManager.getLogger(recordcheckformServiceImpl.class);

	private recordcheckformDao recordcheckformDao;
	private fileDao fileDao;
	private memdbDao memdbDao;

	public recordcheckformDao getRecordcheckformDao() {
		return recordcheckformDao;
	}

	public void setRecordcheckformDao(recordcheckformDao recordcheckformDao) {
		this.recordcheckformDao = recordcheckformDao;
	}
	
	public fileDao getFileDao() {
		return fileDao;
	}

	public void setFileDao(fileDao fileDao) {
		this.fileDao = fileDao;
	}

	public memdbDao getMemdbDao() {
		return memdbDao;
	}

	public void setMemdbDao(memdbDao memdbDao) {
		this.memdbDao = memdbDao;
	}

	public List<LCekRecordCheckform> findByProperty(String startDate, String endDate, String applyUserId, String status, VEIPMemdb loginUser, String roleIds) throws Exception{
		log.debug("LCekRecordCheckform findByProperty start");
		//判斷登入人的身分是否為主管級，
		//用角色來判斷 {roleId:8aa2e72a5c77b459015c77b80d350000	roleCode:sign01	roleName:簽呈可覆核主管}
		//用角色來判斷 {roleId:8aa2e72a5c77b459015c77b8e8960002	roleCode:sign02	roleName:簽呈可結案窗口}
		//若不是主管級的，只能查詢自己的表單
		if(roleIds.indexOf("8aa2e72a5c77b459015c77b80d350000") < 0){
			if(roleIds.indexOf("8aa2e72a5c77b459015c77b8e8960002") < 0){
				return recordcheckformDao.findbyproperties(startDate,	endDate, loginUser.getMemno(), status, null);
			}else{
				return recordcheckformDao.findbyproperties(startDate,	endDate, applyUserId, status, loginUser.getMemno());
			}
		}else{
			//查詢時變成查received有他的紀錄
			return recordcheckformDao.findbyproperties(startDate,	endDate, applyUserId, status, loginUser.getMemno());
		}
	}
	
	public LCekSignedCaseInfo findCaseByCaseId(String caseId) throws Exception{
		return recordcheckformDao.findCaseByCaseId(caseId);
	}
	
	public List<LCekSignedRelaInfo> findRelaByCaseId(String caseId) throws Exception{
		return recordcheckformDao.findRelaByCaseId(caseId);
	}
	
	public String saveSignedform(LCekRecordSigned LCekRecordSigned, LCekRecordCheckform LCekRecordCheckform, 
			String type, VEIPMemdb loginUser, String[] saveselectOhterFiles, String[] stepPay, String[] stepPayStartDate, 
			String[] stepPayEndDate, String[] saveUploadFilesIds, String[] saveUploadFilesPathName) throws Exception{
		//type = 1 表示暫存
		if(type.equals("1")){ 
			
			LCekRecordCheckform.setStatus(Integer.valueOf(type));
			LCekRecordSigned.setStatus(Integer.valueOf(type));
			
			if(LCekRecordSigned.getSignedId() != null && !LCekRecordSigned.getSignedId().equals("null")){
				recordcheckformDao.merge(LCekRecordSigned);
			}else{
				recordcheckformDao.save(LCekRecordSigned);
			}
			
			LCekRecordSignedStep LCekRecordSignedStep = new LCekRecordSignedStep();
			LCekRecordSignedStep.setSignedId(LCekRecordSigned.getSignedId());
			
			if(stepPay != null){
				LCekRecordSignedStep.setNumStepPay(stepPay, stepPayStartDate, stepPayEndDate);
				recordcheckformDao.save(LCekRecordSignedStep);
			}
			
			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			recordcheckformDao.save(LCekRecordCheckform);
			
			String updatefileIds = "";
			if(saveUploadFilesIds != null){
				for(int i = 0; i < saveUploadFilesIds.length; i ++){
					updatefileIds += ("'" + saveUploadFilesIds[i] + "',");
				}
				updatefileIds = updatefileIds.substring(0,updatefileIds.length()-1);
				recordcheckformDao.updateLCekRecordFile(LCekRecordCheckform.getRecordCheckformId(), updatefileIds);
			}
			
			if(saveselectOhterFiles != null){
				for(int i = 0; i < saveselectOhterFiles.length; i++){
					File file = new File(saveselectOhterFiles[i]); 
					LCekRecordOtherfile  LCekRecordOtherfile = new LCekRecordOtherfile(LCekRecordSigned.getSignedId(), 
							file.getName(), saveselectOhterFiles[i], "Y");
					recordcheckformDao.saveRecordOtherfile(LCekRecordOtherfile);
				}
			}
			
		//type = 2 表示送出主管審核中
		}else if(type.equals("2")){ 
			
			LCekRecordCheckform.setStatus(Integer.valueOf(type));
			LCekRecordSigned.setStatus(Integer.valueOf(type));
			
			VEIPMemdb adminUser = memdbDao.findbyMemno(loginUser.getAdmno1());// 申請人的主管
			
			LCekRecordSigned.setReceivedUserId(adminUser.getMemno());//送至主管，receivedUser須改為主管
			LCekRecordSigned.setReceivedUserName(adminUser.getMemnm());//送至主管，receivedUser須改為主管
			LCekRecordCheckform.setReceivedUserId(adminUser.getMemno());
			
			log.debug("LCekRecordSigned.getSignedId() = {}", LCekRecordSigned.getSignedId());
			if(LCekRecordSigned.getSignedId() != null && !LCekRecordSigned.getSignedId().equals("null")){
				recordcheckformDao.merge(LCekRecordSigned);
			}else{
				recordcheckformDao.save(LCekRecordSigned);
			}
			
			LCekRecordSignedStep LCekRecordSignedStep = new LCekRecordSignedStep();
			LCekRecordSignedStep.setSignedId(LCekRecordSigned.getSignedId());
			
			if(stepPay != null){
				LCekRecordSignedStep.setNumStepPay(stepPay, stepPayStartDate, stepPayEndDate);
				recordcheckformDao.save(LCekRecordSignedStep);
			}
			
			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			LCekRecordCheckform.setModifyUserId(LCekRecordSigned.getApplyUserId());
			
			
			recordcheckformDao.save(LCekRecordCheckform);

//			String[] fileNames = new String[LCekRecordFile.size()];
			ArrayList<String> fileNames = new ArrayList<String>();
					
			String updatefileIds = "";
			if(saveUploadFilesIds != null){
				for(int i = 0; i < saveUploadFilesIds.length; i ++){
					updatefileIds += ("'" + saveUploadFilesIds[i] + "',");
				}
				updatefileIds = updatefileIds.substring(0,updatefileIds.length()-1);
				recordcheckformDao.updateLCekRecordFile(LCekRecordCheckform.getRecordCheckformId(), updatefileIds);
			}
			
			if(saveUploadFilesPathName != null){
				for(int i = 0; i < saveUploadFilesPathName.length; i++){
					fileNames.add(saveUploadFilesPathName[i]);
				}
			}
			
			if(saveselectOhterFiles != null){
				for(int i = 0; i < saveselectOhterFiles.length; i++){
					File file = new File(saveselectOhterFiles[i]); 
					LCekRecordOtherfile  LCekRecordOtherfile = new LCekRecordOtherfile(LCekRecordSigned.getSignedId(), 
							file.getName(), saveselectOhterFiles[i], "Y");
					recordcheckformDao.saveRecordOtherfile(LCekRecordOtherfile);
					fileNames.add(saveselectOhterFiles[i]);
				}
			}else{
				List<LCekRecordOtherfile> LCekRecordOtherfileList = recordcheckformDao.findSelectedOtherFiles(LCekRecordSigned.getSignedId());
				for(LCekRecordOtherfile map:LCekRecordOtherfileList){
					fileNames.add(map.getFilePath());
				}
			}
			
			//寄送Mail start
			 
			MailUtil sendMail = new MailUtil();
			MailSenderInfo sendMailcontent = new MailSenderInfo("9999@mytf.com.tw", adminUser.getMemmail(), null, loginUser.getMemmail(), null, "", 
					"【" + LCekRecordSigned.getBankName() + "】" + NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + 
					" 簽呈申請待簽核通知函", "主管，您好：</br>" + LCekRecordSigned.getApplyUserName() + " 申請" + 
					NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + "【" + LCekRecordSigned.getType() + 
					"】簽呈，目前簽呈已送您簽核中，</br>煩請審核，謝謝！</br><a href=http://jsam01:8080/Law/pages/cek/signedform.jsp?signedId=" +
					LCekRecordSigned.getSignedId()+ "&type=2&LoginInSigned=true&caseId="+ LCekRecordSigned.getCaseId() +">"+"減免簽呈連結", null);
			sendMail.sendHtmlMail(sendMailcontent, fileNames);
			//寄送Mail end
		
		//type = 3 表示退件
		}else if(type.equals("3")){ 

			LCekRecordCheckform.setStatus(Integer.valueOf(type));
			LCekRecordSigned.setStatus(Integer.valueOf(type));
			VEIPMemdb applyUser = memdbDao.findbyMemno(LCekRecordSigned.getApplyUserId());// 申請人
			
			//退回至申請人，receivedUser須改為申請人
			LCekRecordSigned.setApplyUserId(applyUser.getMemno());
			LCekRecordSigned.setApplyUserName(applyUser.getMemnm());
			LCekRecordSigned.setReceivedUserId(applyUser.getMemno());//退回申請人，receivedUser須改為申請人
			LCekRecordSigned.setReceivedUserName(applyUser.getMemnm());//退回申請人，receivedUser須改為申請人
			LCekRecordCheckform.setReceivedUserId(applyUser.getMemno());
			
			log.debug("LCekRecordSigned.getSignedId() = {}", LCekRecordSigned.getSignedId());
			if(LCekRecordSigned.getSignedId() != null && !LCekRecordSigned.getSignedId().equals("null")){
				recordcheckformDao.merge(LCekRecordSigned);
			}else{
				recordcheckformDao.save(LCekRecordSigned);
			}
			
			LCekRecordSignedStep LCekRecordSignedStep = new LCekRecordSignedStep();
			LCekRecordSignedStep.setSignedId(LCekRecordSigned.getSignedId());
			
			if(stepPay != null){
				LCekRecordSignedStep.setNumStepPay(stepPay, stepPayStartDate, stepPayEndDate);
				recordcheckformDao.save(LCekRecordSignedStep);
			}
			
			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			
			recordcheckformDao.save(LCekRecordCheckform);

			ArrayList<String> fileNames = new ArrayList<String>();
			
			String updatefileIds = "";
			if(saveUploadFilesIds != null){
				for(int i = 0; i < saveUploadFilesIds.length; i ++){
					updatefileIds += ("'" + saveUploadFilesIds[i] + "',");
				}
				updatefileIds = updatefileIds.substring(0,updatefileIds.length()-1);
				recordcheckformDao.updateLCekRecordFile(LCekRecordCheckform.getRecordCheckformId(), updatefileIds);
			}
			
			if(saveUploadFilesPathName != null){
				for(int i = 0; i < saveUploadFilesPathName.length; i++){
					fileNames.add(saveUploadFilesPathName[i]);
				}
			}
			
			if(saveselectOhterFiles != null){
				for(int i = 0; i < saveselectOhterFiles.length; i++){
					File file = new File(saveselectOhterFiles[i]); 
					LCekRecordOtherfile  LCekRecordOtherfile = new LCekRecordOtherfile(LCekRecordSigned.getSignedId(), 
							file.getName(), saveselectOhterFiles[i], "Y");
					recordcheckformDao.saveRecordOtherfile(LCekRecordOtherfile);
					fileNames.add(saveselectOhterFiles[i]);
				}
			}else{
				List<LCekRecordOtherfile> LCekRecordOtherfileList = recordcheckformDao.findSelectedOtherFiles(LCekRecordSigned.getSignedId());
				for(LCekRecordOtherfile map:LCekRecordOtherfileList){
					fileNames.add(map.getFilePath());
				}
			}
			
			//寄送Mail start
			 
			MailUtil sendMail = new MailUtil();
			MailSenderInfo sendMailcontent = new MailSenderInfo("9999@mytf.com.tw", applyUser.getMemmail(), null, loginUser.getMemmail(), null, "", 
					"【" + LCekRecordSigned.getBankName() + "】" + NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + 
					" 簽呈退回通知函", "您好：</br>" + LCekRecordSigned.getApplyUserName() + " 申請" + 
					NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + "【" + LCekRecordSigned.getType() + 
					"】簽呈，主管審核不通過-" + LCekRecordSigned.getBackMark() + "，</br>，謝謝！</br><a href=http://jsam01:8080/Law/pages/cek/signedform.jsp?signedId=" + 
					LCekRecordSigned.getSignedId()+ "&type=3&LoginInSigned=true&caseId="+ LCekRecordSigned.getCaseId() +">"+"減免簽呈連結", null);
			sendMail.sendHtmlMail(sendMailcontent, fileNames);
			//寄送Mail end
			recordcheckformDao.insertCaseNote(LCekRecordSigned.getCaseId(), "簽呈由" + loginUser.getMemnm() + "主管退回，退回原因:" + LCekRecordSigned.getBackMark());
			
		//type = 4 表示主管審核，業主審核中
		}else if(type.equals("4")){ 

			LCekRecordCheckform.setStatus(Integer.valueOf(type));
			LCekRecordSigned.setStatus(Integer.valueOf(type));
			VEIPMemdb applyUser = memdbDao.findbyMemno(LCekRecordSigned.getApplyUserId());// 申請人
			VEIPMemdb contactPerson = memdbDao.findContactPersonByBankName(LCekRecordSigned.getBankName());// 客戶關係科
			
			LCekRecordSigned.setApplyUserId(applyUser.getMemno());
			LCekRecordSigned.setApplyUserName(applyUser.getMemnm());
			//業主審核，receivedUser須改為窗口(窗口要抓table對應人員)
			LCekRecordSigned.setReceivedUserId(contactPerson.getMemno());
			LCekRecordSigned.setReceivedUserName(contactPerson.getMemnm());
			LCekRecordCheckform.setReceivedUserId(contactPerson.getMemno());
			LCekRecordCheckform.setModifyUserId(loginUser.getMemno());
			
			log.debug("LCekRecordSigned.getSignedId() = {}", LCekRecordSigned.getSignedId());
			if(LCekRecordSigned.getSignedId() != null && !LCekRecordSigned.getSignedId().equals("null")){
				recordcheckformDao.merge(LCekRecordSigned);
			}else{
				recordcheckformDao.save(LCekRecordSigned);
			}
			
			LCekRecordSignedStep LCekRecordSignedStep = new LCekRecordSignedStep();
			LCekRecordSignedStep.setSignedId(LCekRecordSigned.getSignedId());
			
			if(stepPay != null){
				LCekRecordSignedStep.setNumStepPay(stepPay, stepPayStartDate, stepPayEndDate);
				recordcheckformDao.save(LCekRecordSignedStep);
			}
			
			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			
			recordcheckformDao.save(LCekRecordCheckform);
			
			ArrayList<String> fileNames = new ArrayList<String>();
			
			String updatefileIds = "";
			if(saveUploadFilesIds != null){
				for(int i = 0; i < saveUploadFilesIds.length; i ++){
					updatefileIds += ("'" + saveUploadFilesIds[i] + "',");
				}
				updatefileIds = updatefileIds.substring(0,updatefileIds.length()-1);
				recordcheckformDao.updateLCekRecordFile(LCekRecordCheckform.getRecordCheckformId(), updatefileIds);
			}
			
			if(saveUploadFilesPathName != null){
				for(int i = 0; i < saveUploadFilesPathName.length; i++){
					fileNames.add(saveUploadFilesPathName[i]);
				}
			}
			
			if(saveselectOhterFiles != null){
				for(int i = 0; i < saveselectOhterFiles.length; i++){
					File file = new File(saveselectOhterFiles[i]); 
					LCekRecordOtherfile  LCekRecordOtherfile = new LCekRecordOtherfile(LCekRecordSigned.getSignedId(), 
							file.getName(), saveselectOhterFiles[i], "Y");
					recordcheckformDao.saveRecordOtherfile(LCekRecordOtherfile);
					fileNames.add(saveselectOhterFiles[i]);
				}
			}else{
				List<LCekRecordOtherfile> LCekRecordOtherfileList = recordcheckformDao.findSelectedOtherFiles(LCekRecordSigned.getSignedId());
				for(LCekRecordOtherfile map:LCekRecordOtherfileList){
					fileNames.add(map.getFilePath());
				}
			}
			
			//寄送Mail start 
			 
			MailUtil sendMail = new MailUtil();
			MailSenderInfo sendMailcontent = new MailSenderInfo("9999@mytf.com.tw", contactPerson.getMemmail(), null, loginUser.getMemmail(), applyUser.getMemmail(), "", 
					"【" + LCekRecordSigned.getBankName() + "】" + NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + 
					" 簽呈送業主審核通知函", "客服窗口，您好：</br>" + LCekRecordSigned.getApplyUserName() + " 申請" + 
					NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + "【" + LCekRecordSigned.getType() + 
					"】簽呈，主管已簽准，</br>煩請協助送業主審核，謝謝！</br><a href=http://jsam01:8080/Law/pages/cek/signedform.jsp?signedId=" + LCekRecordSigned.getSignedId()+ 
					"&type=4&LoginInSigned=true&caseId="+ LCekRecordSigned.getCaseId() +">"+"減免簽呈連結", null);
			sendMail.sendHtmlMail(sendMailcontent, fileNames);
			//寄送Mail end
			recordcheckformDao.insertCaseNote(LCekRecordSigned.getCaseId(), "簽呈由" + loginUser.getMemnm() + "主管審核通過，已轉由" + contactPerson.getMemnm() + "窗口處理中");
			
		//type = 5 表示結案，看業主審核結果為何，更改備註，以及業主同意不同意。
		}else if(type.equals("5")){ 

			LCekRecordCheckform.setStatus(Integer.valueOf(type));
			LCekRecordSigned.setStatus(Integer.valueOf(type));
			VEIPMemdb applyUser = memdbDao.findbyMemno(LCekRecordSigned.getApplyUserId());// 申請人
			
			LCekRecordSigned.setApplyUserId(applyUser.getMemno());
			LCekRecordSigned.setApplyUserName(applyUser.getMemnm());
			//業主審核，receivedUser須改為窗口(窗口要抓table對應人員)
			LCekRecordSigned.setReceivedUserId(applyUser.getMemno());
			LCekRecordSigned.setReceivedUserName(applyUser.getMemnm());
			LCekRecordCheckform.setReceivedUserId(applyUser.getMemno());
			LCekRecordCheckform.setModifyUserId(loginUser.getMemno());
			
			log.debug("LCekRecordSigned.getSignedId() = {}", LCekRecordSigned.getSignedId());
			if(LCekRecordSigned.getSignedId() != null && !LCekRecordSigned.getSignedId().equals("null")){
				recordcheckformDao.merge(LCekRecordSigned);
			}else{
				recordcheckformDao.save(LCekRecordSigned);
			}
			
			LCekRecordSignedStep LCekRecordSignedStep = new LCekRecordSignedStep();
			LCekRecordSignedStep.setSignedId(LCekRecordSigned.getSignedId());
			
			if(stepPay != null){
				LCekRecordSignedStep.setNumStepPay(stepPay, stepPayStartDate, stepPayEndDate);
				recordcheckformDao.save(LCekRecordSignedStep);
			}
			
			VEIPMemdb adminUser = memdbDao.findbyMemno(applyUser.getAdmno1());// 申請人的主管

			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			recordcheckformDao.save(LCekRecordCheckform);
			ArrayList<String> fileNames = new ArrayList<String>();
			
			String updatefileIds = "";
			if(saveUploadFilesIds != null){
				for(int i = 0; i < saveUploadFilesIds.length; i ++){
					updatefileIds += ("'" + saveUploadFilesIds[i] + "',");
				}
				updatefileIds = updatefileIds.substring(0,updatefileIds.length()-1);
				recordcheckformDao.updateLCekRecordFile(LCekRecordCheckform.getRecordCheckformId(), updatefileIds);
			}
			
			if(saveUploadFilesPathName != null){
				for(int i = 0; i < saveUploadFilesPathName.length; i++){
					fileNames.add(saveUploadFilesPathName[i]);
				}
			}

			if(saveselectOhterFiles != null){
				for(int i = 0; i < saveselectOhterFiles.length; i++){
					File file = new File(saveselectOhterFiles[i]); 
					LCekRecordOtherfile  LCekRecordOtherfile = new LCekRecordOtherfile(LCekRecordSigned.getSignedId(), 
							file.getName(), saveselectOhterFiles[i], "Y");
					recordcheckformDao.saveRecordOtherfile(LCekRecordOtherfile);
					fileNames.add(saveselectOhterFiles[i]);
				}
			}else{
				List<LCekRecordOtherfile> LCekRecordOtherfileList = recordcheckformDao.findSelectedOtherFiles(LCekRecordSigned.getSignedId());
				for(LCekRecordOtherfile map:LCekRecordOtherfileList){
					fileNames.add(map.getFilePath());
				}
			}
			
			//寄送Mail start
			String bankResult = "";
			String smartNote = "";
			if(LCekRecordSigned.getOwnerAgree().equals("Y")){
				String dateTime = DateTimeFormat.getDateTimeString(LCekRecordSigned.getPaytimeEnd(),"yyyy-MM-dd");
				bankResult = "業主同意";
				smartNote = "簽呈業主同意：" + dateTime + "前，以總金額" + LCekRecordSigned.getAmmountSum() + "，" + LCekRecordSigned.getType() + "。" + LCekRecordSigned.getRemark();
			}else{
				bankResult = "業主不同意-" + LCekRecordSigned.getRemark();
				smartNote = "簽呈業主不同意：退件原因" + LCekRecordSigned.getRemark();
			}
			
			MailUtil sendMail = new MailUtil();
			MailSenderInfo sendMailcontent = new MailSenderInfo("9999@mytf.com.tw", adminUser.getMemmail(), applyUser.getMemmail(), null, null, "劉家嘉", 
					"【" + LCekRecordSigned.getBankName() + "】" + NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + 
					" 送簽結果通知函", "您好：</br>" + LCekRecordSigned.getApplyUserName() + " 申請" + 
					NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + "【" + LCekRecordSigned.getType() + 
					"】簽呈，" + bankResult + "，</br>謝謝！</br><a href=http://jsam01:8080/Law/pages/cek/signedform.jsp?signedId=" + LCekRecordSigned.getSignedId()+ 
					"&type=5&LoginInSigned=true&caseId="+ LCekRecordSigned.getCaseId() +">"+"減免簽呈連結", null);
			sendMail.sendHtmlMail(sendMailcontent, fileNames);
//			sendMailcontent = new MailSenderInfo("9999@mytf.com.tw", adminUser.getMemmail(), "劉家嘉", 
//					"【" + LCekRecordSigned.getBankName() + "】" + NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + 
//					" 送簽結果通知函", "您好：</br>" + LCekRecordSigned.getApplyUserName() + " 申請" + 
//					NumberUtil.addZeroForNum(LCekRecordSigned.getCaseId() + "", 8) + " / " + LCekRecordSigned.getPayer() + "【" + LCekRecordSigned.getType() + 
//					"】簽呈，" + bankResult + "，</br>謝謝！</br><a href=http://jsam01:8080/Law/pages/cek/signedform.jsp?signedId=" + LCekRecordSigned.getSignedId()+ 
//					"&userId=" + adminUser.getUserID() + "&type=5&caseId="+ LCekRecordSigned.getCaseId() +">"+"減免簽呈連結", null);
//			sendMail.sendHtmlMail(sendMailcontent, fileNames);
			//寄送Mail end
			
			recordcheckformDao.insertCaseNote(LCekRecordSigned.getCaseId(), smartNote);
			
		}
		return "";
	}
	
	public LCekRecordSigned findRecordSignedById(String signedId) throws Exception{
		return recordcheckformDao.findRecordSignedById(signedId);
	}
	
	public LCekRecordSignedStep findRecordSignedStepById(String signedId) throws Exception{
		return recordcheckformDao.findRecordSignedStepById(signedId);
	}
	
	// add By Jia 2017-04-25
	// 回傳檔案路徑提供下載
	public JsonObject downloadSignedFile(String fileTypeOne,String fileTypeTwo, String signedId, LCekRecordSigned lcs) throws Exception{
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();
		log.debug("===== downloadSignedFile =====");
		List<LSysFile> MapFileList = new ArrayList<LSysFile>();
		if(signedId != null && !signedId.equals("") && !signedId.equals("null")){
			List<Map<String, Object>> fileList = fileDao.findfilePathBySignedId(signedId);
			for (Map<?, ?> map : fileList) {

				LSysFile lcekfile = new LSysFile();
				lcekfile.setFileId((String) map.get("record_file_id"));
				lcekfile.setFileName((String) map.get("file_name"));
				lcekfile.setFilePath((String) map.get("file_path"));

				MapFileList.add(lcekfile);

			}
		}else{
			List<Map<String, Object>> fileList = fileDao.findfilePathByTypes(fileTypeOne, fileTypeTwo);
			
			for (Map<?, ?> map : fileList) {

				LSysFile lcekfile = new LSysFile();
				lcekfile.setFileId((String) map.get("file_id"));
				lcekfile.setFileName((String) map.get("file_name"));
				lcekfile.setFilePath((String) map.get("file_path"));

				// 進行套表
				log.debug("套表開始");
				log.debug("檔案路徑 = {}", lcekfile.getFilePath() + "\\" + lcekfile.getFileName());
				List<LCekRecordSigned> LCekRecordSigned = new ArrayList<LCekRecordSigned>();
//					LCekRecordSigned LCekRecordSigned1 = new LCekRecordSigned(null , 2740584, "京城銀行", "京城銀行信用卡_Y2", "張淑茹",
//							"CM", "分期清償", 10, new Date(), new Date(), 25000,
//							250000, new Date(), 0, "", "00345",
//							"123124", new Date(),"jia","jia",
//							"y", "");
				VEIPMemdb applyUser = memdbDao.findbyMemno(lcs.getApplyUserId());// 申請人
				lcs.setApplyUserName(applyUser.getMemnm());
				lcs.setCaseNo(NumberUtil.addZeroForNum(lcs.getCaseId() + "", 8));
				LCekRecordSigned.add(lcs);
		        try(InputStream is = new FileInputStream(lcekfile.getFilePath() + "\\" + lcekfile.getFileName())) {
		        	log.debug("is = {}", is);
		            try (OutputStream os = new FileOutputStream(lcekfile.getFilePath() + "/New" + lcekfile.getFileName())) {
		                Context context = new Context();
		                context.putVar("LCekRecordSigned", LCekRecordSigned);
		                JxlsHelper.getInstance().processTemplate(is, os, context);
		            }
		        }
		        
				lcekfile.setFileId((String) map.get("file_id"));
				lcekfile.setFileName("New" + lcekfile.getFileName());
				lcekfile.setFilePath((String) map.get("file_path"));

				MapFileList.add(lcekfile);
			}
		}
		jsonResponse.add("MapFileList", gson.toJsonTree(MapFileList));
		return jsonResponse;
	}
	
	// add By Jia 2017-07-07
	// 回傳需套印檔案路徑提供下載
	public JsonObject downloadOverPrintSignedFile(String fileTypeOne,String fileTypeTwo, String signedId, LCekRecordSigned lcs) throws Exception{
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();
		log.debug("===== downloadSignedFile =====");
		List<LSysFile> MapFileList = new ArrayList<LSysFile>();
		List<Map<String, Object>> fileList = fileDao.findfilePathByTypes(fileTypeOne, fileTypeTwo);
		
		for (Map<?, ?> map : fileList) {

			LSysFile lcekfile = new LSysFile();
			lcekfile.setFileId((String) map.get("file_id"));
			lcekfile.setFileName((String) map.get("file_name"));
			lcekfile.setFilePath((String) map.get("file_path"));

			// 進行套表
			log.debug("套表開始");
			log.debug("檔案路徑 = {}", lcekfile.getFilePath() + "\\" + lcekfile.getFileName());
			List<LCekRecordSigned> LCekRecordSigned = new ArrayList<LCekRecordSigned>();
//						LCekRecordSigned LCekRecordSigned1 = new LCekRecordSigned(null , 2740584, "京城銀行", "京城銀行信用卡_Y2", "張淑茹",
//								"CM", "分期清償", 10, new Date(), new Date(), 25000,
//								250000, new Date(), 0, "", "00345",
//								"123124", new Date(),"jia","jia",
//								"y", "");
			VEIPMemdb applyUser = memdbDao.findbyMemno(lcs.getApplyUserId());// 申請人
			lcs.setApplyUserName(applyUser.getMemnm());
			lcs.setCaseNo(NumberUtil.addZeroForNum(lcs.getCaseId() + "", 8));
			LCekRecordSigned.add(lcs);
	        try(InputStream is = new FileInputStream(lcekfile.getFilePath() + "\\" + lcekfile.getFileName())) {
	        	log.debug("is = {}", is);
	            try (OutputStream os = new FileOutputStream(lcekfile.getFilePath() + "/New" + lcekfile.getFileName())) {
	                Context context = new Context();
	                context.putVar("LCekRecordSigned", LCekRecordSigned);
	                JxlsHelper.getInstance().processTemplate(is, os, context);
	            }
	        }
	        
			lcekfile.setFileId((String) map.get("file_id"));
			lcekfile.setFileName("New" + lcekfile.getFileName());
			lcekfile.setFilePath((String) map.get("file_path"));

			MapFileList.add(lcekfile);
		}
	
		jsonResponse.add("MapFileList", gson.toJsonTree(MapFileList));
		return jsonResponse;
	}
	
	// add By Jia 2017-07-10
		// 查詢已上傳檔案
		public JsonObject selectedSignedFiles(String signedId) throws Exception{
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			log.debug("===== downloadSignedFile =====");
			List<LCekRecordFile> MapFileList = new ArrayList<LCekRecordFile>();
			if(signedId != null && !signedId.equals("") && !signedId.equals("null")){
				List<Map<String, Object>> fileList = fileDao.findfilePathBySignedId(signedId);
				for (Map<?, ?> map : fileList) {

					LCekRecordFile lcekfile = new LCekRecordFile();
					lcekfile.setRecordFileId((String) map.get("record_file_id"));
					lcekfile.setFileName((String) map.get("file_name"));
					lcekfile.setFilePath((String) map.get("file_path"));
					
					String pathAndName = (String) map.get("file_path") + "\\" + (String) map.get("file_name");
					pathAndName = pathAndName.replace("\\", "/");
					
					lcekfile.setVoPathName(pathAndName);

					MapFileList.add(lcekfile);

				}
			}
			jsonResponse.add("MapFileList", gson.toJsonTree(MapFileList));
			return jsonResponse;
		}
	
	public JsonObject findOtherFilesByCaseId(String signedId,String caseId,String type, String userId) throws Exception{
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();
		List<LSysFile> MapFileList = new ArrayList<LSysFile>();
		log.debug("===== findOtherFilesByCaseId =====");
		if(signedId != null && !signedId.equals("") && !signedId.equals("null")){
			List<Map<String, Object>> fileList = fileDao.findSelectOtherFileBySignedId(signedId);
			for (Map<?, ?> map : fileList) {
				LSysFile lcekfile = new LSysFile();
				lcekfile.setFileName((String) map.get("file_name"));
				lcekfile.setFilePath((String) map.get("file_path"));
				lcekfile.setV(((String) map.get("Isselected")).equals("Y") ? "1":"0");
				MapFileList.add(lcekfile);
			}
			if(type.equals("1")){
				FilesUploads fileupload = new FilesUploads();
				List<LSysFile> MapFileListAll = new ArrayList<LSysFile>();
				MapFileListAll = fileupload.findAllFiles(caseId);
				for(int i = 0;i < MapFileList.size(); i++){
					for(int j = 0;j < MapFileListAll.size(); j++){
						if(MapFileListAll.get(j).getFileName().equals(MapFileList.get(i).getFileName())){
							MapFileListAll.get(j).setV("1");
						}
					}
				}
				MapFileList = MapFileListAll;
			}
		}else{
			FilesUploads fileupload = new FilesUploads();
			MapFileList = fileupload.findAllFiles(caseId);
		}
		jsonResponse.add("data", gson.toJsonTree(MapFileList));
		return jsonResponse;
	}

	@Override
	public String deleteSelectSignedFile(String recordFileId) throws Exception {
		String result = "";
		log.debug("===== deleteSelectSignedFile =====");
		if(recordFileId != null && !recordFileId.equals("") && !recordFileId.equals("null")){
			boolean flag = recordcheckformDao.deleteLCekRecordFile(recordFileId);
			if (flag) {
				result = JsonUtil.ajaxResultSuccess("已刪除簽呈").toString();
			} else {
				result = JsonUtil.ajaxResultSuccess("刪除簽呈失敗").toString();
			}
		}
		return result;
	}
}
