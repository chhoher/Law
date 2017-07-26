package com.myjs.doc.documents.service;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.SaveParameter;
import com.myjs.doc.documents.Dao.docDao;
import com.myjs.doc.documents.model.LDocBorrowHistory;
import com.myjs.doc.documents.model.LDocCashiercheck;
import com.myjs.doc.documents.model.LDocCentitlement;
import com.myjs.doc.documents.model.LDocClaimsdocs;
import com.myjs.doc.documents.model.LDocCourtDoc;
import com.myjs.doc.documents.model.LDocDebts;
import com.myjs.doc.documents.model.LDocFiledocs;
import com.myjs.doc.documents.model.LDocInfo;
import com.myjs.doc.documents.model.LDocOtherdocs;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
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
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f763e015d4f872ea90004");
		List<LSysVariable> LSysVariableListCourtDocTypeOne = (List<LSysVariable>) LSysVariableMap.get("list");//法院文文件類別
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c8a7b56015c8aa8dfed0000");
		List<LSysVariable> LSysVariableListTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//文件項目
		
		List<LSysVariable> LSysVariableListCourtDocTypeTwo = new ArrayList<LSysVariable>();//02法院文文件項目
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4f94c99f0000");
		List<LSysVariable> LSysVariableListCourtDocImmovablesTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-不動產 文件項目
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4fbcecff000a");
		List<LSysVariable> LSysVariableListCourtDocCenTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-取執 文件項目
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4fc47fb5000e");
		List<LSysVariable> LSysVariableListCourtDocDebtTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-金錢債權 文件項目
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4fc5a22f0013");
		List<LSysVariable> LSysVariableListCourtDocCommonsTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-共用 文件項目
		
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocImmovablesTypeTwo);
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocCenTypeTwo);
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocDebtTypeTwo);
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		
		LSysVariableListCourtDocImmovablesTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		LSysVariableListCourtDocCenTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		LSysVariableListCourtDocDebtTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c9b8c95015c9b8eee900000");
		List<LSysVariable> LSysVariableListBankName = (List<LSysVariable>) LSysVariableMap.get("list");//債權人
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c9b8c95015c9b9274670009");
		List<LSysVariable> LSysVariableListOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");//原債權人
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c9b8c95015c9b9528290012");
		List<LSysVariable> LSysVariableListCourtYearCourt = (List<LSysVariable>) LSysVariableMap.get("list");//地院
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d0bba28015d0bc3ae4a0002");
		List<LSysVariable> LSysVariableListCentitlementTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//文件項目(執行名義)
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
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d0bcf99015d0bd2563b0001");
		List<LSysVariable> LSysVariableListSourceDoc = (List<LSysVariable>) LSysVariableMap.get("list");//原始憑證項目(all)
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d53321f015d53527af30004");
		List<LSysVariable> LSysVariableListPublishObject = (List<LSysVariable>) LSysVariableMap.get("list");//登報內外
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d53321f015d5353656c0007");
		List<LSysVariable> LSysVariableListPublishThings = (List<LSysVariable>) LSysVariableMap.get("list");//登報項目
		Gson gson = new Gson();
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.add("DocStatus", gson.toJsonTree(LSysVariableListDocStatus));
		jsonResponse.add("TypeOne", gson.toJsonTree(LSysVariableListTypeOne));
		jsonResponse.add("courtDocTypeOne", gson.toJsonTree(LSysVariableListCourtDocTypeOne));// 法院文-文件類型
		jsonResponse.add("TypeTwo", gson.toJsonTree(LSysVariableListTypeTwo));
		jsonResponse.add("courtDocTypeTwo", gson.toJsonTree(LSysVariableListCourtDocTypeTwo));// 法院文All
		jsonResponse.add("courtDocImmovablesTypeTwo", gson.toJsonTree(LSysVariableListCourtDocImmovablesTypeTwo));// 法院文不動產
		jsonResponse.add("courtDocCenTypeTwo", gson.toJsonTree(LSysVariableListCourtDocCenTypeTwo));// 法院文取執
		jsonResponse.add("courtDocDebtTypeTwo", gson.toJsonTree(LSysVariableListCourtDocDebtTypeTwo));// 法院文金錢債權
		jsonResponse.add("BankName", gson.toJsonTree(LSysVariableListBankName));
		jsonResponse.add("OldBankName", gson.toJsonTree(LSysVariableListOldBankName));
		jsonResponse.add("CourtYearCourt", gson.toJsonTree(LSysVariableListCourtYearCourt));
		jsonResponse.add("centitlementTypeTwo", gson.toJsonTree(LSysVariableListCentitlementTypeTwo));
		jsonResponse.add("cashierCheckTypeTwo", gson.toJsonTree(LSysVariableListCashierCheckTypeTwo));
		jsonResponse.add("debtsTypeTwo", gson.toJsonTree(LSysVariableListDebtsTypeTwo));
		jsonResponse.add("claimDocTypeTwo", gson.toJsonTree(LSysVariableListClaimDocTypeTwo));
		jsonResponse.add("fileTypeTwo", gson.toJsonTree(LSysVariableListFileTypeTwo));
		jsonResponse.add("otherTypeTwo", gson.toJsonTree(LSysVariableListOtherTypeTwo));
		jsonResponse.add("SourceDoc", gson.toJsonTree(LSysVariableListSourceDoc));
		jsonResponse.add("PublishObject", gson.toJsonTree(LSysVariableListPublishObject));
		jsonResponse.add("PublishThings", gson.toJsonTree(LSysVariableListPublishThings));
		jsonResponse.addProperty("nowDate", DateTimeFormat.getNowDate());
		return jsonResponse.toString();
	}
	
	public String saveaddDoc(String docInfoId, VEIPMemdb loginMemdb, String caseId, String saveDocInfo,
			String centitlementJson, String courtDocJson, String saveCashierCheck, String saveDebts, 
			String saveClaimsdoc, String saveFiledoc, String saveOtherdoc) throws Exception{
		Date nowDatetime = new Date();
		Gson gson = new Gson();
		int case_id = Integer.parseInt(caseId);

		// 執行名義儲存start
		List<LDocCentitlement> centitlementItems = gson.fromJson(centitlementJson, new TypeToken<List<LDocCentitlement>>(){}.getType());

		for(int i = 0;i < centitlementItems.size();i ++){
			centitlementItems.get(i).setInfoId(docInfoId);
			centitlementItems.get(i).setCreateDatetime(nowDatetime);
			centitlementItems.get(i).setCreateUserId(loginMemdb.getMemno());
			centitlementItems.get(i).setCaseId(case_id);
			
			docDao.save(centitlementItems.get(i));
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementSourceDoc().size();j ++){
				centitlementItems.get(i).getCentitlementSourceDoc().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementSourceDoc().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementTranscriptsRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementTranscriptsRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementCoOwnedTranscriptsRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementCoOwnedTranscriptsRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementCoOwnedTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementMortgageeTranscriptsRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementMortgageeTranscriptsRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementMortgageeTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementLawTranscriptsRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementLawTranscriptsRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementLawTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementHeirTranscriptsRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementHeirTranscriptsRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementHeirTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementDirtTranscriptsRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementDirtTranscriptsRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementDirtTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementBuiltTranscriptsRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementBuiltTranscriptsRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementBuiltTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementDistributionRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementDistributionRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementDistributionRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementThingThirdRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementThingThirdRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementThingThirdRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementThingDebtRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementThingDebtRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementThingDebtRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementCoOwnedRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementCoOwnedRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementCoOwnedRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementDebtDocRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementDebtDocRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementDebtDocRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementDetailRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementDetailRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementDetailRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementFileRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementFileRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementFileRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementDebtContinueRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementDebtContinueRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementDebtContinueRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementCashierCheckRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementCashierCheckRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementCashierCheckRelationPerson().get(j));
			}
			
			for(int j = 0;j < centitlementItems.get(i).getCentitlementOtherRelationPerson().size();j ++){
				centitlementItems.get(i).getCentitlementOtherRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
				docDao.save(centitlementItems.get(i).getCentitlementOtherRelationPerson().get(j));
			}
		}
		// 執行名義儲存end
		
		// 法院文儲存start
		List<LDocCourtDoc> courtDocItems = gson.fromJson(courtDocJson, new TypeToken<List<LDocCourtDoc>>(){}.getType());

		for(int i = 0;i < courtDocItems.size();i ++){
			courtDocItems.get(i).setInfoId(docInfoId);
			courtDocItems.get(i).setCreateDatetime(nowDatetime);
			courtDocItems.get(i).setCreateUserId(loginMemdb.getMemno());
			courtDocItems.get(i).setCaseId(case_id);
			
			docDao.save(courtDocItems.get(i));
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocTranscriptsRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocCoOwnedTranscriptsRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocCoOwnedTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocCoOwnedTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocMortgageeTranscriptsRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocMortgageeTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocMortgageeTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocLawTranscriptsRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocLawTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocLawTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocHeirTranscriptsRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocHeirTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocHeirTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocDirtTranscriptsRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocDirtTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocDirtTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocBuiltTranscriptsRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocBuiltTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocBuiltTranscriptsRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocDistributionRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocDistributionRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocDistributionRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocThingThirdRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocThingThirdRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocThingThirdRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocThingDebtRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocThingDebtRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocThingDebtRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocCoOwnedRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocCoOwnedRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocCoOwnedRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocDebtDocRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocDebtDocRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocDebtDocRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocDetailRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocDetailRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocDetailRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocFileRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocFileRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocFileRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocDebtContinueRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocDebtContinueRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocDebtContinueRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocCashierCheckRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocCashierCheckRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocCashierCheckRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocRecoveryRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocRecoveryRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocRecoveryRelationPerson().get(j));
			}
			
			for(int j = 0;j < courtDocItems.get(i).getCourtDocOtherRelationPerson().size();j ++){
				courtDocItems.get(i).getCourtDocOtherRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
				docDao.save(courtDocItems.get(i).getCourtDocOtherRelationPerson().get(j));
			}
		}
		// 執行名義儲存end
		
		
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
		
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.addProperty("success", "success");
		jsonResponse.addProperty("msg", "儲存成功");
		return jsonResponse.toString();
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
	
	public String loadCaseDocsByCaseId(String caseId) throws Exception{
		List<LDocInfo> ListLDocInfo = docDao.findDocByCaseId(caseId);
		JsonObject jsonResponse = new JsonObject();
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		jsonResponse.add("responseCaseInfo", gson.toJsonTree(ListLDocInfo));
		return jsonResponse.toString();
	}
	
	@SuppressWarnings("unchecked")
	public String findDocSysSelectOption() throws Exception{
		Map<?, ?> LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d5efd74015d5f3c86c30001");
		List<LSysVariable> LSysVariableListBackReason = (List<LSysVariable>) LSysVariableMap.get("list"); //退件原因
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c9b8c95015c9b9528290012");
		List<LSysVariable> LSysVariableListCourt = (List<LSysVariable>) LSysVariableMap.get("list");//地院
		
		Gson gson = new Gson();
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.add("backReason", gson.toJsonTree(LSysVariableListBackReason));
		jsonResponse.add("court", gson.toJsonTree(LSysVariableListCourt));
		return jsonResponse.toString();
	}

	public String saveBorrowDocs(String saveBorrowString) throws Exception{
		Gson gson = new Gson();
		List<LDocBorrowHistory> LDocBorrowHistoryList = gson.fromJson(saveBorrowString, new TypeToken<List<LDocBorrowHistory>>(){}.getType());
		for(int i = 0; i < LDocBorrowHistoryList.size();i ++){
			docDao.save(LDocBorrowHistoryList.get(i));
		}
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.addProperty("success", "success");
		jsonResponse.addProperty("msg", "申調成功");
		return jsonResponse.toString();
	}
	
	public String printBorrowDocs(String printBorrowString, String uploadPath) throws Exception{
		Gson gson = new Gson();
		List<LDocBorrowHistory> LDocBorrowHistory = gson.fromJson(printBorrowString, new TypeToken<List<LDocBorrowHistory>>(){}.getType());
		
		// 進行套表
		log.debug("套表開始");
		Properties properties = new Properties();
		String propertiesFile = "Law.properties";
		ClassLoader classLoader = getClass().getClassLoader();
		properties.load(classLoader.getResourceAsStream(propertiesFile));
		String filePath = properties.getProperty("doc.docSystem.printexcel.path");
		String fileName = properties.getProperty("doc.docSystem.printexcel.name");
		String fileUrl = classLoader.getResource(filePath).getPath();
		log.debug("檔案路徑 = {}", fileUrl + fileName);
		
		String outputDatetime = DateTimeFormat.getNowDateNum();
		String outputString = uploadPath + "/docSys/" + outputDatetime + fileName;
		log.debug("outputString = {}", outputString);
		
		try(InputStream is = new FileInputStream(fileUrl + fileName)) {
        	log.debug("is = {}", is);
            try (OutputStream os = new FileOutputStream(outputString)) {
                Context context = new Context();
                context.putVar("LDocBorrowHistory", LDocBorrowHistory);
                JxlsHelper.getInstance().processTemplate(is, os, context);
            }
        }
			        
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.addProperty("success", "success");
		jsonResponse.addProperty("downloadPath", "../upload/docSys/" + outputDatetime +"docSystem.xls");
		return jsonResponse.toString();
	}
	
	public String querySumDocs() throws Exception{
		List<LDocInfo> ListLDocInfo = docDao.findSumDoc();
		JsonObject jsonResponse = new JsonObject();
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		jsonResponse.add("responseLDocSumInfo", gson.toJsonTree(ListLDocInfo));
		return jsonResponse.toString();
	}
}
