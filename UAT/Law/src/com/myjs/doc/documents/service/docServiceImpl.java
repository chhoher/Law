package com.myjs.doc.documents.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.doc.documents.Dao.docDao;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.myjs.cek.recordcheckform.Dao.recordcheckformDao;
import com.myjs.sys.variable.Dao.variableDao;
import com.myjs.sys.variable.model.LSysVariable;

public class docServiceImpl implements docService{
	private static final Logger log = LogManager.getLogger(docServiceImpl.class);
	private recordcheckformDao recordcheckformDao;
	private variableDao variableDao;
	private docDao docDao;
	
	public recordcheckformDao getRecordcheckformDao() {
		return recordcheckformDao;
	}

	public void setRecordcheckformDao(recordcheckformDao recordcheckformDao) {
		this.recordcheckformDao = recordcheckformDao;
	}

	public docDao getDocDao() {
		return docDao;
	}

	public void setDocDao(docDao docDao) {
		this.docDao = docDao;
	}

	public variableDao getVariableDao() {
		return variableDao;
	}

	public void setVariableDao(variableDao variableDao) {
		this.variableDao = variableDao;
	}

	public List<LCekSignedCaseInfo> findByProperty(String caseId, String debtorName, String debtorId, String docNo,
			String legalCaseId){
		LSysVariable LSysVariable = variableDao.findVariablebyId("SYSTEM01");//TODO Add By Jia 2017-05-11 未來加入propertise內來設定 固定帶這個
		boolean isCheck = false;
		log.debug("=查核機制 value == {}", LSysVariable.getVariableValue());
		if(LSysVariable.getVariableValue().equals("Y")){
			isCheck = true;
		}else{
			isCheck = false;
		}
		return recordcheckformDao.findCaseByproperties(caseId, debtorName, debtorId, docNo, legalCaseId, isCheck);
	}
	
	public String findDocaddSelectOption(){
		List<LSysVariable> LSysVariableList = variableDao.findVariablesubbyproperties("8aa2e72a5c8074d5015c8076afcd0000");//文件狀態
		List<LSysVariable> LSysVariableListTypeOne = variableDao.findVariablesubbyproperties("8aa2e72a5c812434015c812e92070000");//文件類別
		Gson gson = new Gson();
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.add("DocStatus", gson.toJsonTree(LSysVariableList));
		jsonResponse.add("TypeOne", gson.toJsonTree(LSysVariableListTypeOne));
		return jsonResponse.toString();
	}
}
