package com.myjs.cek.recordcheckform.service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

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
import com.myjs.commons.FilesUploads;
import com.myjs.commons.MailSenderInfo;
import com.myjs.commons.MailUtil;

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

	public List<LCekRecordCheckform> findByProperty(String startDate, String endDate, String applyUserId, String status, VEIPMemdb loginUser){
		log.debug("LCekRecordCheckform findByProperty start");
		try{
			//判斷登入人的身分是否為主管級
			//若不是主管級的，只能查詢自己的表單
			if(loginUser.getMemadm().equals("N")){
				return recordcheckformDao.findbyproperties(startDate,	endDate, loginUser.getMemno(), status);
			}else{
				return recordcheckformDao.findbyproperties(startDate,	endDate, applyUserId, status);
			}
		}catch(Exception e){
			log.error("LCekRecordCheckform findByProperty error msg ==>", e);
		}
		return null;
		
	}
	
	public LCekSignedCaseInfo findCaseByCaseId(String caseId){
		return recordcheckformDao.findCaseByCaseId(caseId);
	}
	
	public List<LCekSignedRelaInfo> findRelaByCaseId(String caseId){
		return recordcheckformDao.findRelaByCaseId(caseId);
	}
	
	public String saveSignedform(LCekRecordSigned LCekRecordSigned, LCekRecordCheckform LCekRecordCheckform, 
			String type, List<LCekRecordFile> LCekRecordFile, String userId, String[] saveselectOhterFiles, String[] stepPay){
		//type = 1 表示暫存
		if(type.equals("1")){ 
			
			LCekRecordCheckform.setStatus(Integer.valueOf(type));
			LCekRecordSigned.setStatus(Integer.valueOf(type));
			
			VEIPMemdb applyUser = memdbDao.findbyuserId(LCekRecordSigned.getApplyUserId());// 申請人
			
			LCekRecordSigned.setApplyUserId(applyUser.getMemno());
			LCekRecordSigned.setApplyUserName(applyUser.getMemnm());
			LCekRecordSigned.setReceivedUserId(applyUser.getMemno());
			LCekRecordSigned.setReceivedUserName(applyUser.getMemnm());
			
			if(LCekRecordSigned.getSignedId() != null && !LCekRecordSigned.getSignedId().equals("null")){
				recordcheckformDao.merge(LCekRecordSigned);
			}else{
				recordcheckformDao.save(LCekRecordSigned);
			}
			
			LCekRecordSignedStep LCekRecordSignedStep = new LCekRecordSignedStep();
			LCekRecordSignedStep.setSignedId(LCekRecordSigned.getSignedId());
			LCekRecordSignedStep.setNumStepPay(stepPay);
			recordcheckformDao.save(LCekRecordSignedStep);
			
			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			LCekRecordCheckform.setReceivedUserId(LCekRecordSigned.getApplyUserId());
			LCekRecordCheckform.setModifyUserId(LCekRecordSigned.getApplyUserId());
			recordcheckformDao.save(LCekRecordCheckform);
			
			for(int i = 0; i < LCekRecordFile.size(); i ++){
				LCekRecordFile.get(i).setRecordCheckformId(LCekRecordCheckform.getRecordCheckformId());
				LCekRecordFile.get(i).setModifyUserId(LCekRecordSigned.getApplyUserId());
				recordcheckformDao.saveRecordFile(LCekRecordFile.get(i));
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
			
			VEIPMemdb applyUser = memdbDao.findbyuserId(LCekRecordSigned.getApplyUserId());// 申請人
			VEIPMemdb adminUser = memdbDao.findbyMemno(applyUser.getAdmno1());// 申請人的主管
			
			LCekRecordSigned.setApplyUserId(applyUser.getMemno());
			LCekRecordSigned.setApplyUserName(applyUser.getMemnm());
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
			LCekRecordSignedStep.setNumStepPay(stepPay);
			recordcheckformDao.save(LCekRecordSignedStep);
			
			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			LCekRecordCheckform.setModifyUserId(LCekRecordSigned.getApplyUserId());
			
			
			recordcheckformDao.save(LCekRecordCheckform);

//			String[] fileNames = new String[LCekRecordFile.size()];
			ArrayList<String> fileNames = new ArrayList<String>();
					
			if(LCekRecordFile.size() > 0){
				for(int i = 0; i < LCekRecordFile.size(); i ++){
					LCekRecordFile.get(i).setRecordCheckformId(LCekRecordCheckform.getRecordCheckformId());
					LCekRecordFile.get(i).setModifyUserId(LCekRecordSigned.getApplyUserId());
					recordcheckformDao.saveRecordFile(LCekRecordFile.get(i));
					fileNames.add(LCekRecordFile.get(i).getFilePath() + "\\" + LCekRecordFile.get(i).getFileName());
//					fileNames[i] = LCekRecordFile.get(i).getFilePath() + "\\" + LCekRecordFile.get(i).getFileName();
				}
			}else{
				List<LCekRecordFile> LCekRecordFileList = recordcheckformDao.findbysignedId(LCekRecordSigned.getSignedId());
				for(int i = 0;i < LCekRecordFileList.size();i++){
					fileNames.add(LCekRecordFileList.get(i).getFilePath() + "\\" + LCekRecordFileList.get(i).getFileName());
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
			}
			
			//寄送Mail start
			 
			MailUtil sendMail = new MailUtil();
			MailSenderInfo sendMailcontent = new MailSenderInfo("2354@mytf.com.tw", adminUser.getMemmail(), "劉家嘉", 
					"簽呈信件", "鏈接地址：<a href=http://localhost:8080/Law/pages/cek/signedform.jsp?signedId=" + LCekRecordSigned.getSignedId()+ "&userId=" + adminUser.getUserID() + "&type=2&caseId="+ LCekRecordSigned.getCaseId() +">"+"減免簽呈連結", null);
			sendMail.sendHtmlMail(sendMailcontent, fileNames);
			//寄送Mail end
		
		//type = 3 表示退件
		}else if(type.equals("3")){ 

			LCekRecordCheckform.setStatus(Integer.valueOf(type));
			LCekRecordSigned.setStatus(Integer.valueOf(type));
			VEIPMemdb applyUser = memdbDao.findbyMemno(LCekRecordSigned.getApplyUserId());// 申請人
			VEIPMemdb adminUser = memdbDao.findbyMemno(applyUser.getAdmno1());// 申請人的主管
			
			//退回至申請人，receivedUser須改為申請人
			LCekRecordSigned.setApplyUserId(applyUser.getMemno());
			LCekRecordSigned.setApplyUserName(applyUser.getMemnm());
			LCekRecordSigned.setReceivedUserId(applyUser.getMemno());//送至主管，receivedUser須改為主管
			LCekRecordSigned.setReceivedUserName(applyUser.getMemnm());//送至主管，receivedUser須改為主管
			LCekRecordCheckform.setReceivedUserId(applyUser.getMemno());
			LCekRecordCheckform.setModifyUserId(adminUser.getMemno());
			
			log.debug("LCekRecordSigned.getSignedId() = {}", LCekRecordSigned.getSignedId());
			if(LCekRecordSigned.getSignedId() != null && !LCekRecordSigned.getSignedId().equals("null")){
				recordcheckformDao.merge(LCekRecordSigned);
			}else{
				recordcheckformDao.save(LCekRecordSigned);
			}
			
			LCekRecordSignedStep LCekRecordSignedStep = new LCekRecordSignedStep();
			LCekRecordSignedStep.setSignedId(LCekRecordSigned.getSignedId());
			LCekRecordSignedStep.setNumStepPay(stepPay);
			recordcheckformDao.save(LCekRecordSignedStep);
			
			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			
			recordcheckformDao.save(LCekRecordCheckform);

			ArrayList<String> fileNames = new ArrayList<String>();
			
			if(LCekRecordFile.size() > 0){
				for(int i = 0; i < LCekRecordFile.size(); i ++){
					LCekRecordFile.get(i).setRecordCheckformId(LCekRecordCheckform.getRecordCheckformId());
					LCekRecordFile.get(i).setModifyUserId(adminUser.getMemno());
					recordcheckformDao.saveRecordFile(LCekRecordFile.get(i));
					fileNames.add(LCekRecordFile.get(i).getFilePath() + "\\" + LCekRecordFile.get(i).getFileName());
				}
			}else{
				List<LCekRecordFile> LCekRecordFileList = recordcheckformDao.findbysignedId(LCekRecordSigned.getSignedId());
				for(int i = 0;i < LCekRecordFileList.size();i++){
					fileNames.add(LCekRecordFileList.get(i).getFilePath() + "\\" + LCekRecordFileList.get(i).getFileName());
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
			}
			
			//寄送Mail start
			 
			MailUtil sendMail = new MailUtil();
			MailSenderInfo sendMailcontent = new MailSenderInfo("2354@mytf.com.tw", applyUser.getMemmail(), "劉家嘉", 
					"簽呈信件", "退回簽呈 鏈接地址：<a href=http://localhost:8080/Law/pages/cek/signedform.jsp?signedId=" + LCekRecordSigned.getSignedId()+ "&userId=" + applyUser.getUserID() + "&type=3&caseId="+ LCekRecordSigned.getCaseId() +">"+"退回簽呈", null);
			sendMail.sendHtmlMail(sendMailcontent, fileNames);
			//寄送Mail end
		
		//type = 4 表示主管審核，業主審核中
		}else if(type.equals("4")){ 

			LCekRecordCheckform.setStatus(Integer.valueOf(type));
			LCekRecordSigned.setStatus(Integer.valueOf(type));
			VEIPMemdb applyUser = memdbDao.findbyMemno(LCekRecordSigned.getApplyUserId());// 申請人
			VEIPMemdb contactPerson = memdbDao.findContactPersonByBankName(LCekRecordSigned.getBankName());// 客戶關係科
			VEIPMemdb adminUser = memdbDao.findbyMemno(applyUser.getAdmno1());// 申請人的主管
			
			LCekRecordSigned.setApplyUserId(applyUser.getMemno());
			LCekRecordSigned.setApplyUserName(applyUser.getMemnm());
			//業主審核，receivedUser須改為窗口(窗口要抓table對應人員)
			LCekRecordSigned.setReceivedUserId(contactPerson.getMemno());
			LCekRecordSigned.setReceivedUserName(contactPerson.getMemnm());
			LCekRecordCheckform.setReceivedUserId(contactPerson.getMemno());
			LCekRecordCheckform.setModifyUserId(adminUser.getMemno());
			
			log.debug("LCekRecordSigned.getSignedId() = {}", LCekRecordSigned.getSignedId());
			if(LCekRecordSigned.getSignedId() != null && !LCekRecordSigned.getSignedId().equals("null")){
				recordcheckformDao.merge(LCekRecordSigned);
			}else{
				recordcheckformDao.save(LCekRecordSigned);
			}
			
			LCekRecordSignedStep LCekRecordSignedStep = new LCekRecordSignedStep();
			LCekRecordSignedStep.setSignedId(LCekRecordSigned.getSignedId());
			LCekRecordSignedStep.setNumStepPay(stepPay);
			recordcheckformDao.save(LCekRecordSignedStep);
			
			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			
			recordcheckformDao.save(LCekRecordCheckform);
			
			ArrayList<String> fileNames = new ArrayList<String>();
			
			if(LCekRecordFile.size() > 0){
				for(int i = 0; i < LCekRecordFile.size(); i ++){
					LCekRecordFile.get(i).setRecordCheckformId(LCekRecordCheckform.getRecordCheckformId());
					LCekRecordFile.get(i).setModifyUserId(adminUser.getMemno());
					recordcheckformDao.saveRecordFile(LCekRecordFile.get(i));
					fileNames.add(LCekRecordFile.get(i).getFilePath() + "\\" + LCekRecordFile.get(i).getFileName());
				}
			}else{
				List<LCekRecordFile> LCekRecordFileList = recordcheckformDao.findbysignedId(LCekRecordSigned.getSignedId());
				for(int i = 0;i < LCekRecordFileList.size();i++){
					fileNames.add(LCekRecordFileList.get(i).getFilePath() + "\\" + LCekRecordFileList.get(i).getFileName());
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
			}
			
			//寄送Mail start
			 
			MailUtil sendMail = new MailUtil();
			MailSenderInfo sendMailcontent = new MailSenderInfo("2354@mytf.com.tw", contactPerson.getMemmail(), "劉家嘉", 
					"簽呈信件", "核准簽呈 鏈接地址：<a href=http://localhost:8080/Law/pages/cek/signedform.jsp?signedId=" + LCekRecordSigned.getSignedId()+ "&userId=" + contactPerson.getUserID() + "&type=4&caseId="+ LCekRecordSigned.getCaseId() +">"+"核准簽呈", null);
			sendMail.sendHtmlMail(sendMailcontent, fileNames);
			//寄送Mail end
		
		//type = 5 表示結案，看業主審核結果為何，更改備註，以及業主同意不同意。
		}else if(type.equals("5")){ 

			LCekRecordCheckform.setStatus(Integer.valueOf(type));
			LCekRecordSigned.setStatus(Integer.valueOf(type));
			VEIPMemdb applyUser = memdbDao.findbyMemno(LCekRecordSigned.getApplyUserId());// 申請人
			VEIPMemdb contactPerson = memdbDao.findContactPersonByBankName(LCekRecordSigned.getBankName());// 客戶關係科
			
			LCekRecordSigned.setApplyUserId(applyUser.getMemno());
			LCekRecordSigned.setApplyUserName(applyUser.getMemnm());
			//業主審核，receivedUser須改為窗口(窗口要抓table對應人員)
			LCekRecordSigned.setReceivedUserId(applyUser.getMemno());
			LCekRecordSigned.setReceivedUserName(applyUser.getMemnm());
			LCekRecordCheckform.setReceivedUserId(applyUser.getMemno());
			LCekRecordCheckform.setModifyUserId(contactPerson.getMemno());
			
			log.debug("LCekRecordSigned.getSignedId() = {}", LCekRecordSigned.getSignedId());
			if(LCekRecordSigned.getSignedId() != null && !LCekRecordSigned.getSignedId().equals("null")){
				recordcheckformDao.merge(LCekRecordSigned);
			}else{
				recordcheckformDao.save(LCekRecordSigned);
			}
			
			LCekRecordSignedStep LCekRecordSignedStep = new LCekRecordSignedStep();
			LCekRecordSignedStep.setSignedId(LCekRecordSigned.getSignedId());
			LCekRecordSignedStep.setNumStepPay(stepPay);
			recordcheckformDao.save(LCekRecordSignedStep);
			
			VEIPMemdb adminUser = memdbDao.findbyMemno(applyUser.getAdmno1());// 申請人的主管

			LCekRecordCheckform.setMappingtableId(LCekRecordSigned.getSignedId());
			recordcheckformDao.save(LCekRecordCheckform);
			ArrayList<String> fileNames = new ArrayList<String>();
			
			if(LCekRecordFile.size() > 0){
				for(int i = 0; i < LCekRecordFile.size(); i ++){
					LCekRecordFile.get(i).setRecordCheckformId(LCekRecordCheckform.getRecordCheckformId());
					LCekRecordFile.get(i).setModifyUserId(contactPerson.getMemno());
					recordcheckformDao.saveRecordFile(LCekRecordFile.get(i));
					fileNames.add(LCekRecordFile.get(i).getFilePath() + "\\" + LCekRecordFile.get(i).getFileName());
				}
			}else{
				List<LCekRecordFile> LCekRecordFileList = recordcheckformDao.findbysignedId(LCekRecordSigned.getSignedId());
				for(int i = 0;i < LCekRecordFileList.size();i++){
					fileNames.add(LCekRecordFileList.get(i).getFilePath() + "\\" + LCekRecordFileList.get(i).getFileName());
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
			}
			
			//寄送Mail start
			 
			MailUtil sendMail = new MailUtil();
			MailSenderInfo sendMailcontent = new MailSenderInfo("2354@mytf.com.tw", adminUser.getMemmail(), "劉家嘉", 
					"簽呈信件", "結案簽呈 鏈接地址：<a href=http://localhost:8080/Law/pages/cek/signedform.jsp?signedId=" + LCekRecordSigned.getSignedId()+ "&userId=" + applyUser.getUserID() + "&type=5&caseId="+ LCekRecordSigned.getCaseId() +">"+"結案簽呈", null);
			sendMail.sendHtmlMail(sendMailcontent, fileNames);
			sendMailcontent = new MailSenderInfo("2354@mytf.com.tw", adminUser.getMemmail(), "劉家嘉", 
					"簽呈信件", "結案簽呈 鏈接地址：<a href=http://localhost:8080/Law/pages/cek/signedform.jsp?signedId=" + LCekRecordSigned.getSignedId()+ "&userId=" + adminUser.getUserID() + "&type=5&caseId="+ LCekRecordSigned.getCaseId() +">"+"結案簽呈", null);
			sendMail.sendHtmlMail(sendMailcontent, fileNames);
			//寄送Mail end
		
		}
		return "";
	}
	
	public LCekRecordSigned findRecordSignedById(String signedId){
		return recordcheckformDao.findRecordSignedById(signedId);
	}
	
	public LCekRecordSignedStep findRecordSignedStepById(String signedId){
		return recordcheckformDao.findRecordSignedStepById(signedId);
	}
	
	// add By Jia 2017-04-25
	// 回傳檔案路徑提供下載
	public JsonObject downloadSignedFile(String fileTypeOne,String fileTypeTwo, String signedId){
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();
		try{
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

					MapFileList.add(lcekfile);

				}
			}
			jsonResponse.add("MapFileList", gson.toJsonTree(MapFileList));
		}catch(Exception e){
			log.error("downloadSignedFile error msg ==>", e);
		}
		return jsonResponse;
	}
	
	public JsonObject findOtherFilesByCaseId(String signedId,String caseId,String type, String userId){
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();
		List<LSysFile> MapFileList = new ArrayList<LSysFile>();
		try{
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
		}catch(Exception e){
			log.error("findOtherFilesByCaseId error msg ==>", e);
		}
		return jsonResponse;
	}
}
