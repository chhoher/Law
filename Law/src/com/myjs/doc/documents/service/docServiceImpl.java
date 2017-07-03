package com.myjs.doc.documents.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.SaveParameter;
import com.myjs.doc.documents.Dao.docDao;
import com.myjs.doc.documents.model.LDocCashiercheck;
import com.myjs.doc.documents.model.LDocClaimsdocs;
import com.myjs.doc.documents.model.LDocDebts;
import com.myjs.doc.documents.model.LDocFiledocs;
import com.myjs.doc.documents.model.LDocInfo;
import com.myjs.doc.documents.model.LDocOtherdocs;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import com.myjs.cek.recordcheckform.Dao.recordcheckformDao;
import com.myjs.sys.user.model.VEIPMemdb;
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
		List<LSysVariable> LSysVariableListCourtYearCourt = (List<LSysVariable>) LSysVariableMap.get("list");//地院
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5cf6c4f2015cf6d2cec1000a");
		List<LSysVariable> LSysVariableListCashierCheckTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//文件項目(本票)
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c9b8c95015c9baa8103002e");
		List<LSysVariable> LSysVariableListDebtsTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//文件項目(債讓)
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5ce6dd58015ce76baff80008");
		List<LSysVariable> LSysVariableListClaimDocTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//文件項目(債權文件)
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5cd26484015cd2b513cf0003");
		List<LSysVariable> LSysVariableListFileTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//文件項目(卷宗)
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
		jsonResponse.add("cashierCheckTypeTwo", gson.toJsonTree(LSysVariableListCashierCheckTypeTwo));
		jsonResponse.add("debtsTypeTwo", gson.toJsonTree(LSysVariableListDebtsTypeTwo));
		jsonResponse.add("claimDocTypeTwo", gson.toJsonTree(LSysVariableListClaimDocTypeTwo));
		jsonResponse.add("fileTypeTwo", gson.toJsonTree(LSysVariableListFileTypeTwo));
		jsonResponse.add("otherTypeTwo", gson.toJsonTree(LSysVariableListOtherTypeTwo));
		jsonResponse.addProperty("nowDate", DateTimeFormat.getNowDate());
		return jsonResponse.toString();
	}
	
	public String saveaddDoc(String docInfoId, VEIPMemdb loginMemdb, String caseId, String saveDocInfo,
			String saveCashierCheck, String saveDebts, String saveClaimsdoc, String saveFiledoc, String saveOtherdoc) throws Exception{
		Date nowDatetime = new Date();
		Gson gson = new Gson();
		int case_id = Integer.parseInt(caseId);

		// 本票儲存start
		List<LDocCashiercheck> cashiercheckItems = gson.fromJson(saveCashierCheck, new TypeToken<List<LDocCashiercheck>>(){}.getType());

		for(int i = 0;i < cashiercheckItems.size();i ++){
			cashiercheckItems.get(i).setInfoId(docInfoId);
			cashiercheckItems.get(i).setCreateDatetime(nowDatetime);
			cashiercheckItems.get(i).setCreateUserId(loginMemdb.getMemno());
			cashiercheckItems.get(i).setCaseId(case_id);
			
			docDao.save(cashiercheckItems.get(i));
			
			for(int j = 0;j < cashiercheckItems.get(i).getCashiercheckRelationPerson().size();j ++){
				cashiercheckItems.get(i).getCashiercheckRelationPerson().get(j).setCashiercheckId(cashiercheckItems.get(i).getCashiercheckId());
				docDao.save(cashiercheckItems.get(i).getCashiercheckRelationPerson().get(j));
			}
		}
		// 本票儲存end
		
		// 債讓儲存start
		List<LDocDebts> debtsItems = gson.fromJson(saveDebts, new TypeToken<List<LDocDebts>>(){}.getType());

		for(int i = 0;i < debtsItems.size();i ++){
			debtsItems.get(i).setInfoId(docInfoId);
			debtsItems.get(i).setCreateDatetime(nowDatetime);
			debtsItems.get(i).setCreateUserId(loginMemdb.getMemno());
			debtsItems.get(i).setCaseId(case_id);
			
			docDao.save(debtsItems.get(i));
			
			for(int j = 0;j < debtsItems.get(i).getDebtsRelationPerson().size();j ++){
				debtsItems.get(i).getDebtsRelationPerson().get(j).setDebtsId(debtsItems.get(i).getDebtsId());
				docDao.save(debtsItems.get(i).getDebtsRelationPerson().get(j));
			}
		}
		// 債讓儲存end
		
		// 債權文件儲存start
		List<LDocClaimsdocs> claimsdocsItems = gson.fromJson(saveClaimsdoc, new TypeToken<List<LDocClaimsdocs>>(){}.getType());

		for(int i = 0;i < claimsdocsItems.size();i ++){
			claimsdocsItems.get(i).setInfoId(docInfoId);
			claimsdocsItems.get(i).setCreateDatetime(nowDatetime);
			claimsdocsItems.get(i).setCreateUserId(loginMemdb.getMemno());
			claimsdocsItems.get(i).setCaseId(case_id);
			
			docDao.save(claimsdocsItems.get(i));
			
			for(int j = 0;j < claimsdocsItems.get(i).getClaimsRelationPerson().size();j ++){
				claimsdocsItems.get(i).getClaimsRelationPerson().get(j).setClaimsdocsId(claimsdocsItems.get(i).getClaimsdocsId());
				docDao.save(claimsdocsItems.get(i).getClaimsRelationPerson().get(j));
			}
		}
		// 債權文件儲存end
		
		// 卷宗儲存start
		List<LDocFiledocs> filedocsItems = gson.fromJson(saveFiledoc, new TypeToken<List<LDocFiledocs>>(){}.getType());

		for(int i = 0;i < filedocsItems.size();i ++){
			filedocsItems.get(i).setInfoId(docInfoId);
			filedocsItems.get(i).setCreateDatetime(nowDatetime);
			filedocsItems.get(i).setCreateUserId(loginMemdb.getMemno());
			filedocsItems.get(i).setCaseId(case_id);
			docDao.save(filedocsItems.get(i));
		}
		// 卷宗儲存end
		
		// 其他儲存start
		List<LDocOtherdocs> otherdocsItems = gson.fromJson(saveOtherdoc, new TypeToken<List<LDocOtherdocs>>(){}.getType());

		for(int i = 0;i < otherdocsItems.size();i ++){
			otherdocsItems.get(i).setInfoId(docInfoId);
			otherdocsItems.get(i).setCreateDatetime(nowDatetime);
			otherdocsItems.get(i).setCreateUserId(loginMemdb.getMemno());
			otherdocsItems.get(i).setCaseId(case_id);
			docDao.save(otherdocsItems.get(i));
		}
		// 其他儲存end
		
		return null;
	}

	public String saveaddDocInfo(VEIPMemdb loginUser, String caseId) throws Exception{
		int case_id = Integer.parseInt(caseId);
		LDocInfo LDocInfo = new LDocInfo(null, case_id, loginUser.getMemnm(), new Date());
		boolean flag = docDao.save(LDocInfo);
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.addProperty("success", flag);
		jsonResponse.addProperty("docInfoId", LDocInfo.getDocInfoId());
		return jsonResponse.toString();
	}
	
	public List<LCekSignedRelaInfo> findRelaByCaseId(String caseId) throws Exception{
		return recordcheckformDao.findRelaByCaseId(caseId);
	}
}
