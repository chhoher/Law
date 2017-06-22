package com.myjs.doc.documents.service;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.SaveParameter;
import com.myjs.doc.documents.Dao.docDao;
import com.myjs.doc.documents.model.LDocOtherdocs;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
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
			String legalCaseId) throws Exception{
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

	@SuppressWarnings("unchecked")
	public String findDocaddSelectOption() throws Exception{
		Map<?, ?> LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c8074d5015c8076afcd0000");
		List<LSysVariable> LSysVariableListDocStatus = (List<LSysVariable>) LSysVariableMap.get("list"); //文件狀態
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c812434015c812e92070000");
		List<LSysVariable> LSysVariableListTypeOne = (List<LSysVariable>) LSysVariableMap.get("list");//文件類別
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c8a7b56015c8aa8dfed0000");
		List<LSysVariable> LSysVariableListTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//文件項目
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c9b8c95015c9b8eee900000");
		List<LSysVariable> LSysVariableListBankName = (List<LSysVariable>) LSysVariableMap.get("list");//債權人
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c9b8c95015c9b9274670009");
		List<LSysVariable> LSysVariableListOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");//原債權人
//		LSysVariableMap = (Map) SaveParameter.AllParameter.get("8aa2e72a5c812434015c812e92070000");
//		List<LSysVariable> LSysVariableListTypeOne = (List<LSysVariable>) LSysVariableMap.get("list");//相對人
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c9b8c95015c9b9528290012");
		List<LSysVariable> LSysVariableListCourtYearCourt = (List<LSysVariable>) LSysVariableMap.get("list");//文件類別
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5ca5db32015ca5de11d00000");
		List<LSysVariable> LSysVariableListOtherTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//文件項目(其他)
		Gson gson = new Gson();
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.add("DocStatus", gson.toJsonTree(LSysVariableListDocStatus));
		jsonResponse.add("TypeOne", gson.toJsonTree(LSysVariableListTypeOne));
		jsonResponse.add("TypeTwo", gson.toJsonTree(LSysVariableListTypeTwo));
		jsonResponse.add("BankName", gson.toJsonTree(LSysVariableListBankName));
		jsonResponse.add("OldBankName", gson.toJsonTree(LSysVariableListOldBankName));
		jsonResponse.add("CourtYearCourt", gson.toJsonTree(LSysVariableListCourtYearCourt));
		jsonResponse.add("otherTypeTwo", gson.toJsonTree(LSysVariableListOtherTypeTwo));
		jsonResponse.addProperty("nowDate", DateTimeFormat.getNowDate());
		return jsonResponse.toString();
	}
	
	public String saveaddDoc(String saveDocInfo, String saveOtherdoc) throws Exception{
			Gson gson = new Gson();
			
			List<LDocOtherdocs> docsItems = gson.fromJson(saveOtherdoc, new TypeToken<List<LDocOtherdocs>>(){}.getType());
	
			for(int i = 0;i < docsItems.size();i ++){
				System.out.println(docsItems.get(i).getBankName());
			}

		return null;
	}
}
