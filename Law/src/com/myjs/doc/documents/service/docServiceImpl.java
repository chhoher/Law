package com.myjs.doc.documents.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.FilesUploads;
import com.myjs.commons.NumberUtil;
import com.myjs.commons.SaveParameter;
import com.myjs.doc.borrow.model.LDocBorrowHistory;
import com.myjs.doc.borrow.model.LDocBorrowList;
import com.myjs.doc.documents.Dao.docDao;
import com.myjs.doc.borrow.Dao.docBorrowDao;
import com.myjs.doc.documents.model.LDocCashiercheck;
import com.myjs.doc.documents.model.LDocCashiercheckRela;
import com.myjs.doc.documents.model.LDocCentitlement;
import com.myjs.doc.documents.model.LDocCentitlementRela;
import com.myjs.doc.documents.model.LDocCentitlementSourceDoc;
import com.myjs.doc.documents.model.LDocClaimsdocs;
import com.myjs.doc.documents.model.LDocClaimsdocsRela;
import com.myjs.doc.documents.model.LDocCourtDoc;
import com.myjs.doc.documents.model.LDocCourtDocBuiltTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocCashierCheckRela;
import com.myjs.doc.documents.model.LDocCourtDocCoOwnedRela;
import com.myjs.doc.documents.model.LDocCourtDocCoOwnedTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocDebtContinueRela;
import com.myjs.doc.documents.model.LDocCourtDocDebtDocRela;
import com.myjs.doc.documents.model.LDocCourtDocDetailRela;
import com.myjs.doc.documents.model.LDocCourtDocDirtTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocDistributionRela;
import com.myjs.doc.documents.model.LDocCourtDocFileRela;
import com.myjs.doc.documents.model.LDocCourtDocHeirTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocLawTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocMortgageeTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocOtherRela;
import com.myjs.doc.documents.model.LDocCourtDocRecoveryRela;
import com.myjs.doc.documents.model.LDocCourtDocRela;
import com.myjs.doc.documents.model.LDocCourtDocThingDebtRela;
import com.myjs.doc.documents.model.LDocCourtDocThingThirdRela;
import com.myjs.doc.documents.model.LDocCourtDocTranscriptsRela;
import com.myjs.doc.documents.model.LDocDebts;
import com.myjs.doc.documents.model.LDocDebtsRela;
import com.myjs.doc.documents.model.LDocFiledocs;
import com.myjs.doc.documents.model.LDocImgfileTemp;
import com.myjs.doc.documents.model.LDocInfo;
import com.myjs.doc.documents.model.LDocOtherdocs;
import com.myjs.doc.documents.model.printDocInfo;
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
	private docBorrowDao docBorrowDao;
	
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

	public docBorrowDao getDocBorrowDao() {
		return docBorrowDao;
	}

	public void setDocBorrowDao(docBorrowDao docBorrowDao) {
		this.docBorrowDao = docBorrowDao;
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
		
		// add By Jia 2017-08-15 先判斷docNo 和 legalCaseId
		if(docNo != null && !docNo.equals("")){
			// 文件編號有輸入以文管相關table 查詢
			return docDao.findCaseByDocInfo(caseId, debtorName, debtorId, docNo, legalCaseId, isCheck);
			
		}else{
			if(legalCaseId != null && !legalCaseId.equals("")){
				// 文件編號沒輸入，但有法院案號以文管相關table 查詢
				return docDao.findCaseByDocInfo(caseId, debtorName, debtorId, docNo, legalCaseId, isCheck);
			}else{
				// 以SMAERT DB 為主
				return recordcheckformDao.findCaseByproperties(caseId, debtorName, debtorId, docNo, legalCaseId, isCheck);
			}
		}
		
	}

	@SuppressWarnings("unchecked")
	public String findDocaddSelectOption() throws Exception{
		
		//查詢SMART DB 內的債權人
		List<LSysVariable> LSysVariableListBankName = docDao.findAllBankName();//債權人
		
		//各分類原債權人
		Map<?, ?> LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d8872216b0001");//原債權人 台新銀行
		List<LSysVariable> LSysVariableListTSBOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d88729da50004");//原債權人 遠東銀行
		List<LSysVariable> LSysVariableListFEIOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d8874c7650006");//原債權人 新光銀行
		List<LSysVariable> LSysVariableListSKOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d8875cd9a0008");//原債權人 元大AMC
		List<LSysVariable> LSysVariableListYTOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d8878932c001e");//原債權人 第一AMC
		List<LSysVariable> LSysVariableListFIOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d887948d30021");//原債權人 台新資產
		List<LSysVariable> LSysVariableListTSAOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d887bd4470035");//原債權人 台灣金聯
		List<LSysVariable> LSysVariableListTAMCOOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d887eca64004f");//原債權人 歐力士AMC
		List<LSysVariable> LSysVariableListORIXOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d887f349b0051");//原債權人 明台產險
		List<LSysVariable> LSysVariableListMTOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d883098015d888026600058");//原債權人 旺旺友聯
		List<LSysVariable> LSysVariableListUNOldBankName = (List<LSysVariable>) LSysVariableMap.get("list");
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c8074d5015c8076afcd0000");
		List<LSysVariable> LSysVariableListDocStatus = (List<LSysVariable>) LSysVariableMap.get("list"); //文件狀態
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c812434015c812e92070000");
		List<LSysVariable> LSysVariableListTypeOne = (List<LSysVariable>) LSysVariableMap.get("list");//文件類別
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f763e015d4f872ea90004");
		List<LSysVariable> LSysVariableListCourtDocTypeOne = (List<LSysVariable>) LSysVariableMap.get("list");//法院文文件類別
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c8a7b56015c8aa8dfed0000");
		List<LSysVariable> LSysVariableListTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//文件項目
		
		List<LSysVariable> LSysVariableListCourtDocTypeTwo = new ArrayList<LSysVariable>();//02法院文文件項目
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4f94c99f0000");
		List<LSysVariable> LSysVariableListCourtDocImmovablesTypeTwo = new ArrayList<LSysVariable>();//法院文-不動產 文件項目
		List<LSysVariable> realLSysVariableListCourtDocImmovablesTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-不動產 文件項目
		LSysVariableListCourtDocImmovablesTypeTwo.addAll(realLSysVariableListCourtDocImmovablesTypeTwo);
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4fbcecff000a");
		List<LSysVariable> LSysVariableListCourtDocCenTypeTwo = new ArrayList<LSysVariable>();//法院文-取執 文件項目
		List<LSysVariable> realLSysVariableListCourtDocCenTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-取執 文件項目
		LSysVariableListCourtDocCenTypeTwo.addAll(realLSysVariableListCourtDocCenTypeTwo);
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4fc47fb5000e");
		List<LSysVariable> LSysVariableListCourtDocDebtTypeTwo = new ArrayList<LSysVariable>();//法院文-金錢債權 文件項目
		List<LSysVariable> realLSysVariableListCourtDocDebtTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-金錢債權 文件項目
		LSysVariableListCourtDocDebtTypeTwo.addAll(realLSysVariableListCourtDocDebtTypeTwo);
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4fc5a22f0013");
		List<LSysVariable> LSysVariableListCourtDocCommonsTypeTwo = new ArrayList<LSysVariable>();//法院文-共用 文件項目
		List<LSysVariable> realLSysVariableListCourtDocCommonsTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-共用 文件項目
		LSysVariableListCourtDocCommonsTypeTwo.addAll(realLSysVariableListCourtDocCommonsTypeTwo);
		
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocImmovablesTypeTwo);
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocCenTypeTwo);
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocDebtTypeTwo);
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		
		LSysVariableListCourtDocImmovablesTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		LSysVariableListCourtDocCenTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		LSysVariableListCourtDocDebtTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		
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
		jsonResponse.add("TSBOldBankName", gson.toJsonTree(LSysVariableListTSBOldBankName));
		jsonResponse.add("FEIOldBankName", gson.toJsonTree(LSysVariableListFEIOldBankName));
		jsonResponse.add("SKOldBankName", gson.toJsonTree(LSysVariableListSKOldBankName));
		jsonResponse.add("YTOldBankName", gson.toJsonTree(LSysVariableListYTOldBankName));
		jsonResponse.add("FIOldBankName", gson.toJsonTree(LSysVariableListFIOldBankName));
		jsonResponse.add("TSAOldBankName", gson.toJsonTree(LSysVariableListTSAOldBankName));
		jsonResponse.add("TAMCOOldBankName", gson.toJsonTree(LSysVariableListTAMCOOldBankName));
		jsonResponse.add("ORIXOldBankName", gson.toJsonTree(LSysVariableListORIXOldBankName));
		jsonResponse.add("MTOldBankName", gson.toJsonTree(LSysVariableListMTOldBankName));
		jsonResponse.add("UNOldBankName", gson.toJsonTree(LSysVariableListUNOldBankName));
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

		// add By Jia 2017-08-11 回傳DocInfo
		List<LDocInfo> returnDocInfo = new ArrayList<LDocInfo>();
		
		// 執行名義儲存start
		List<LDocCentitlement> centitlementItems = gson.fromJson(centitlementJson, new TypeToken<List<LDocCentitlement>>(){}.getType());

		if(centitlementItems != null){
			
			for(int i = 0;i < centitlementItems.size();i ++){
				String SourceString = "";
				LDocInfo LDocInfo = new LDocInfo();
				
				centitlementItems.get(i).setInfoId(docInfoId);
				centitlementItems.get(i).setCreateDatetime(nowDatetime);
				centitlementItems.get(i).setCreateUserId(loginMemdb.getMemno());
				centitlementItems.get(i).setCreateUserName(loginMemdb.getMemnm());
				centitlementItems.get(i).setCaseId(case_id);
				
				docDao.save(centitlementItems.get(i));
				
				for(int j = 0;j < centitlementItems.get(i).getCentitlementSourceDoc().size();j ++){
					centitlementItems.get(i).getCentitlementSourceDoc().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
					docDao.save(centitlementItems.get(i).getCentitlementSourceDoc().get(j));
					if(centitlementItems.get(i).getCentitlementSourceDoc().get(j).getCourtYearCourt() != null && !centitlementItems.get(i).getCentitlementSourceDoc().get(j).getCourtYearCourt().equals("null")
							&& !centitlementItems.get(i).getCentitlementSourceDoc().get(j).getCourtYearCourt().equals("")){
						SourceString += centitlementItems.get(i).getCentitlementSourceDoc().get(j).getCourtYearCourtName() + centitlementItems.get(i).getCentitlementSourceDoc().get(j).getCourtYearYear() + "年" +
								centitlementItems.get(i).getCentitlementSourceDoc().get(j).getCourtYearTxt() + "字" + centitlementItems.get(i).getCentitlementSourceDoc().get(j).getCourtYearCaseId() + "號" +
								centitlementItems.get(i).getCentitlementSourceDoc().get(j).getCourtYearShare() + "股" + "/</br>";
					}
				}
				LDocInfo.setCentitlementSourceDoc(centitlementItems.get(i).getCentitlementSourceDoc());
				for(int j = 0;j < centitlementItems.get(i).getCentitlementRelationPerson().size();j ++){
					centitlementItems.get(i).getCentitlementRelationPerson().get(j).setCentitlementId(centitlementItems.get(i).getCentitlementId());
					docDao.save(centitlementItems.get(i).getCentitlementRelationPerson().get(j));
				}
				LDocInfo.setCentitlementRelationPerson(centitlementItems.get(i).getCentitlementRelationPerson());
				LDocInfo.setBankName(centitlementItems.get(i).getBankName());
				LDocInfo.setProdName(centitlementItems.get(i).getgProdName());
				LDocInfo.setCaseId(centitlementItems.get(i).getCaseId());
				LDocInfo.setDebtName(centitlementItems.get(i).getDebtName());
				LDocInfo.setID(centitlementItems.get(i).getDebtID());
				LDocInfo.setDocCode("A" + centitlementItems.get(i).getCentitlementId());
				LDocInfo.setTypeOne(centitlementItems.get(i).getDisTypeOne());
				LDocInfo.setTypeTwo(centitlementItems.get(i).getDisTypeTwo());
				LDocInfo.setDocStatus(centitlementItems.get(i).getDisDocStatus());
				LDocInfo.setCourtYearCourt(centitlementItems.get(i).getDisCourtYearCourt() + 
						centitlementItems.get(i).getCourtYearYear() + "年" + centitlementItems.get(i).getCourtYearTxt() + "字" + 
						centitlementItems.get(i).getCourtYearCaseId() + "號" + centitlementItems.get(i).getCourtYearShare() + "股");
				LDocInfo.setSourceDoc(SourceString);
				LDocInfo.setSendDate(DateTimeFormat.getDateTimeString(centitlementItems.get(i).getSendDate(), "yyyy-MM-dd"));
				LDocInfo.setNewSendDate(centitlementItems.get(i).getNewSendDate() != null ? DateTimeFormat.getDateTimeString(centitlementItems.get(i).getNewSendDate(), "yyyy-MM-dd") : "");
				LDocInfo.setRemark(centitlementItems.get(i).getRemark() != null ?centitlementItems.get(i).getRemark() : "");
				LDocInfo.setRowNum("0");
				
				LDocInfo.setReport("");
				LDocInfo.setEdit("");
				LDocInfo.setPay("");
				LDocInfo.setSendReport("");
				LDocInfo.setExecutionDate("");
				LDocInfo.setToCourtDate("");
				LDocInfo.setDocType("A");
				LDocInfo.setDocId(centitlementItems.get(i).getCentitlementId() + "");
				LDocInfo.setTempCount(centitlementItems.get(i).getTempCount());
				
				returnDocInfo.add(LDocInfo);
			}
		
		}
		// 執行名義儲存end
		
		// 法院文儲存start
		List<LDocCourtDoc> courtDocItems = gson.fromJson(courtDocJson, new TypeToken<List<LDocCourtDoc>>(){}.getType());

		if(courtDocItems != null){
			for(int i = 0;i < courtDocItems.size();i ++){
				
				LDocInfo LDocInfo = new LDocInfo();
				
				courtDocItems.get(i).setInfoId(docInfoId);
				courtDocItems.get(i).setCreateDatetime(nowDatetime);
				courtDocItems.get(i).setCreateUserId(loginMemdb.getMemno());
				courtDocItems.get(i).setCreateUserName(loginMemdb.getMemnm());
				courtDocItems.get(i).setCaseId(case_id);
				
				String report = "", edit = "", pay = "", sendReport = "";
				if(courtDocItems.get(i).getApplyDebtDays() != 0 || courtDocItems.get(i).getRepayDays() != 0 || courtDocItems.get(i).getUseDays() != 0 ||
						courtDocItems.get(i).getOpinionDays() != 0 || courtDocItems.get(i).getAccountDays() != 0 || courtDocItems.get(i).getPleaseDays() != 0 ||
						courtDocItems.get(i).getReportOther() != null || courtDocItems.get(i).getReportOtherDays() != 0 || courtDocItems.get(i).getReportDescription() != null){
					report = "V";
					courtDocItems.get(i).setHasReport("Y");
				}else{
					courtDocItems.get(i).setHasReport("N");
				}
				if(courtDocItems.get(i).getTranscriptsDays() != 0 || courtDocItems.get(i).getTranscriptsRemark() != null || courtDocItems.get(i).getTranscriptsRelationPerson() != null ||
						courtDocItems.get(i).getCoOwnedTranscriptsDays() != 0 || courtDocItems.get(i).getCoOwnedTranscriptsRemark() != null || courtDocItems.get(i).getCoOwnedTranscriptsRelationPerson() != null ||
						courtDocItems.get(i).getMortgageeTranscriptsDays() != 0 || courtDocItems.get(i).getMortgageeTranscriptsRemark() != null || courtDocItems.get(i).getMortgageeTranscriptsRelationPerson() != null ||
						courtDocItems.get(i).getLawTranscriptsDays() != 0 || courtDocItems.get(i).getLawTranscriptsRemark() != null || courtDocItems.get(i).getLawTranscriptsRelationPerson() != null ||
						courtDocItems.get(i).getHeirTranscriptsDays() != 0 || courtDocItems.get(i).getHeirTranscriptsRemark() != null || courtDocItems.get(i).getHeirTranscriptsRelationPerson() != null ||
						courtDocItems.get(i).getDirtTranscriptsDays() != 0 || courtDocItems.get(i).getDirtTranscriptsRemark() != null || courtDocItems.get(i).getDirtTranscriptsRelationPerson() != null ||
						courtDocItems.get(i).getBuiltTranscriptsDays() != 0 || courtDocItems.get(i).getBuiltTranscriptsRemark() != null || courtDocItems.get(i).getBuiltTranscriptsRelationPerson() != null ||
						courtDocItems.get(i).getDistributionDays() != 0 || courtDocItems.get(i).getDistributionRemark() != null || courtDocItems.get(i).getDistributionRelationPerson() != null ||
						courtDocItems.get(i).getThingThirdDays() != 0 || courtDocItems.get(i).getThingThirdRemark() != null || courtDocItems.get(i).getThingThirdRelationPerson() != null ||
						courtDocItems.get(i).getThingDebtDays() != 0 || courtDocItems.get(i).getThingDebtRemark() != null || courtDocItems.get(i).getThingDebtRelationPerson() != null ||
						courtDocItems.get(i).getCoOwnedDays() != 0 || courtDocItems.get(i).getCoOwnedRemark() != null || courtDocItems.get(i).getCoOwnedRelationPerson() != null ||
						courtDocItems.get(i).getDebtDocDays() != 0 || courtDocItems.get(i).getDebtDocRemark() != null || courtDocItems.get(i).getDebtDocRelationPerson() != null ||
						courtDocItems.get(i).getDetailDays() != 0 || courtDocItems.get(i).getDetailRemark() != null || courtDocItems.get(i).getDetailRelationPerson() != null ||
						courtDocItems.get(i).getFileDays() != 0 || courtDocItems.get(i).getFileRemark() != null || courtDocItems.get(i).getFileRelationPerson() != null ||
						courtDocItems.get(i).getDebtContinueDays() != 0 || courtDocItems.get(i).getDebtContinueRemark() != null || courtDocItems.get(i).getDebtContinueRelationPerson() != null ||
						courtDocItems.get(i).getCashierCheckDays() != 0 || courtDocItems.get(i).getCashierCheckRemark() != null || courtDocItems.get(i).getCashierCheckRelationPerson() != null ||
						courtDocItems.get(i).getRecoveryRemark() != null || courtDocItems.get(i).getRecoveryRelationPerson() != null ||
						courtDocItems.get(i).getOtherDays() != 0 || courtDocItems.get(i).getOtherValues() != null || courtDocItems.get(i).getOtherRemark() != null ||
						courtDocItems.get(i).getEdit() != null){
					edit = "V";
					courtDocItems.get(i).setHasEdit("Y");
				}else{
					courtDocItems.get(i).setHasEdit("N");
				}
				if(courtDocItems.get(i).getProgramCost() != 0 || courtDocItems.get(i).getProgramDays() != 0 || 
						courtDocItems.get(i).getLegalActionCost() != 0 || courtDocItems.get(i).getLegalActionDays() != 0 ||
						courtDocItems.get(i).getExcuteCost() != 0 || courtDocItems.get(i).getExcuteDays() != 0 ||
						courtDocItems.get(i).getReplacementCost() != 0 || courtDocItems.get(i).getReplacementDays() != 0 ||
						courtDocItems.get(i).getSectorCost() != 0 || courtDocItems.get(i).getSectorDays() != 0 ||
						courtDocItems.get(i).getValuationCost() != 0 || courtDocItems.get(i).getValuationDays() != 0 ||
						courtDocItems.get(i).getRebirthCost() != 0 || courtDocItems.get(i).getRebirthDays() != 0 ||
						courtDocItems.get(i).getMeasureCost() != 0 || courtDocItems.get(i).getMeasureDays() != 0 ||
						courtDocItems.get(i).getSaveCost() != 0 || courtDocItems.get(i).getSaveDays() != 0 ||
						courtDocItems.get(i).getCentralizedCost() != 0 || courtDocItems.get(i).getCentralizedDays() != 0 ||
						courtDocItems.get(i).getInsuranceCost() != 0 || courtDocItems.get(i).getInsuranceDays() != 0 ||
						courtDocItems.get(i).getPostCost() != 0 || courtDocItems.get(i).getPostDays() != 0){
					pay = "V";
					courtDocItems.get(i).setHasPay("Y");
				}else{
					courtDocItems.get(i).setHasPay("N");
				}
				if(courtDocItems.get(i).getPublishDays() != 0 || courtDocItems.get(i).getPublishObject() != null || 
						courtDocItems.get(i).getPublishRemark() != null || courtDocItems.get(i).getPublishThings() != null){
					sendReport = "V";
					courtDocItems.get(i).setHasSendReport("Y");
				}else{
					courtDocItems.get(i).setHasSendReport("N");
				}
				
				docDao.save(courtDocItems.get(i));
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocRelationPerson().get(j));
				}
				LDocInfo.setCourtDocRelationPerson(courtDocItems.get(i).getCourtDocRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocTranscriptsRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocTranscriptsRelationPerson().get(j));
				}
				LDocInfo.setCourtDocTranscriptsRelationPerson(courtDocItems.get(i).getCourtDocTranscriptsRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocCoOwnedTranscriptsRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocCoOwnedTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocCoOwnedTranscriptsRelationPerson().get(j));
				}
				LDocInfo.setCourtDocCoOwnedTranscriptsRelationPerson(courtDocItems.get(i).getCourtDocCoOwnedTranscriptsRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocMortgageeTranscriptsRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocMortgageeTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocMortgageeTranscriptsRelationPerson().get(j));
				}
				LDocInfo.setCourtDocMortgageeTranscriptsRelationPerson(courtDocItems.get(i).getCourtDocMortgageeTranscriptsRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocLawTranscriptsRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocLawTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocLawTranscriptsRelationPerson().get(j));
				}
				LDocInfo.setCourtDocLawTranscriptsRelationPerson(courtDocItems.get(i).getCourtDocLawTranscriptsRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocHeirTranscriptsRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocHeirTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocHeirTranscriptsRelationPerson().get(j));
				}
				LDocInfo.setCourtDocHeirTranscriptsRelationPerson(courtDocItems.get(i).getCourtDocHeirTranscriptsRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocDirtTranscriptsRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocDirtTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocDirtTranscriptsRelationPerson().get(j));
				}
				LDocInfo.setCourtDocDirtTranscriptsRelationPerson(courtDocItems.get(i).getCourtDocDirtTranscriptsRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocBuiltTranscriptsRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocBuiltTranscriptsRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocBuiltTranscriptsRelationPerson().get(j));
				}
				LDocInfo.setCourtDocBuiltTranscriptsRelationPerson(courtDocItems.get(i).getCourtDocBuiltTranscriptsRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocDistributionRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocDistributionRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocDistributionRelationPerson().get(j));
				}
				LDocInfo.setCourtDocDistributionRelationPerson(courtDocItems.get(i).getCourtDocDistributionRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocThingThirdRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocThingThirdRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocThingThirdRelationPerson().get(j));
				}
				LDocInfo.setCourtDocThingThirdRelationPerson(courtDocItems.get(i).getCourtDocThingThirdRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocThingDebtRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocThingDebtRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocThingDebtRelationPerson().get(j));
				}
				LDocInfo.setCourtDocThingDebtRelationPerson(courtDocItems.get(i).getCourtDocThingDebtRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocCoOwnedRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocCoOwnedRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocCoOwnedRelationPerson().get(j));
				}
				LDocInfo.setCourtDocCoOwnedRelationPerson(courtDocItems.get(i).getCourtDocCoOwnedRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocDebtDocRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocDebtDocRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocDebtDocRelationPerson().get(j));
				}
				LDocInfo.setCourtDocDebtDocRelationPerson(courtDocItems.get(i).getCourtDocDebtDocRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocDetailRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocDetailRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocDetailRelationPerson().get(j));
				}
				LDocInfo.setCourtDocDetailRelationPerson(courtDocItems.get(i).getCourtDocDetailRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocFileRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocFileRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocFileRelationPerson().get(j));
				}
				LDocInfo.setCourtDocFileRelationPerson(courtDocItems.get(i).getCourtDocFileRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocDebtContinueRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocDebtContinueRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocDebtContinueRelationPerson().get(j));
				}
				LDocInfo.setCourtDocDebtContinueRelationPerson(courtDocItems.get(i).getCourtDocDebtContinueRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocCashierCheckRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocCashierCheckRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocCashierCheckRelationPerson().get(j));
				}
				LDocInfo.setCourtDocCashierCheckRelationPerson(courtDocItems.get(i).getCourtDocCashierCheckRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocRecoveryRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocRecoveryRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocRecoveryRelationPerson().get(j));
				}
				LDocInfo.setCourtDocRecoveryRelationPerson(courtDocItems.get(i).getCourtDocRecoveryRelationPerson());
				
				for(int j = 0;j < courtDocItems.get(i).getCourtDocOtherRelationPerson().size();j ++){
					courtDocItems.get(i).getCourtDocOtherRelationPerson().get(j).setCourtDocId(courtDocItems.get(i).getCourtDocId());
					docDao.save(courtDocItems.get(i).getCourtDocOtherRelationPerson().get(j));
				}
				LDocInfo.setCourtDocOtherRelationPerson(courtDocItems.get(i).getCourtDocOtherRelationPerson());
				
				LDocInfo.setBankName(courtDocItems.get(i).getBankName());
				LDocInfo.setProdName(courtDocItems.get(i).getgProdName());
				LDocInfo.setCaseId(courtDocItems.get(i).getCaseId());
				LDocInfo.setDebtName(courtDocItems.get(i).getDebtName());
				LDocInfo.setID(courtDocItems.get(i).getDebtID());
				LDocInfo.setDocCode("B" + courtDocItems.get(i).getCourtDocId());
				LDocInfo.setTypeOne(courtDocItems.get(i).getDisTypeOne());
				LDocInfo.setTypeTwo(courtDocItems.get(i).getDisTypeTwo());
				LDocInfo.setDocStatus(courtDocItems.get(i).getDisDocStatus());
				LDocInfo.setCourtYearCourt(courtDocItems.get(i).getDisCourtYearCourt() + 
						courtDocItems.get(i).getCourtYearYear() + "年" + courtDocItems.get(i).getCourtYearTxt() + "字" +
						courtDocItems.get(i).getCourtYearCaseId() + "號" + courtDocItems.get(i).getCourtYearShare() + "股");
				LDocInfo.setSendDate("");
				LDocInfo.setNewSendDate("");
				LDocInfo.setRemark("");
				
				
				
				
				LDocInfo.setReport(report);
				LDocInfo.setEdit(edit);
				LDocInfo.setPay(pay);
				LDocInfo.setSendReport(sendReport);
				if(courtDocItems.get(i).getExecutionDate() != null){
					LDocInfo.setExecutionDate(DateTimeFormat.getDateTimeString(courtDocItems.get(i).getExecutionDate(), "yyyy-MM-dd") + " " + courtDocItems.get(i).getExecutionTime());
				}else{
					LDocInfo.setExecutionDate("");
				}
				if(courtDocItems.get(i).getToCourtDate() != null){
					LDocInfo.setToCourtDate(DateTimeFormat.getDateTimeString(courtDocItems.get(i).getToCourtDate(), "yyyy-MM-dd") + " " + courtDocItems.get(i).getToCourtTime());
				}else{
					LDocInfo.setToCourtDate("");
				}
				LDocInfo.setSourceDoc("");
				LDocInfo.setRemark("");
				LDocInfo.setRowNum("0");
				LDocInfo.setDocType("B");
				LDocInfo.setDocId(courtDocItems.get(i).getCourtDocId() + "");
				LDocInfo.setTempCount(courtDocItems.get(i).getTempCount());
				returnDocInfo.add(LDocInfo);
				
			}
		}
		// 法院文儲存end
		
		
		// 本票儲存start
		List<LDocCashiercheck> cashiercheckItems = gson.fromJson(saveCashierCheck, new TypeToken<List<LDocCashiercheck>>(){}.getType());

		if(cashiercheckItems != null){
			for(int i = 0;i < cashiercheckItems.size();i ++){
				LDocInfo LDocInfo = new LDocInfo();
				cashiercheckItems.get(i).setInfoId(docInfoId);
				cashiercheckItems.get(i).setCreateDatetime(nowDatetime);
				cashiercheckItems.get(i).setCreateUserId(loginMemdb.getMemno());
				cashiercheckItems.get(i).setCreateUserName(loginMemdb.getMemnm());
				cashiercheckItems.get(i).setCaseId(case_id);
				
				docDao.save(cashiercheckItems.get(i));

				for(int j = 0;j < cashiercheckItems.get(i).getCashiercheckRelationPerson().size();j ++){
					cashiercheckItems.get(i).getCashiercheckRelationPerson().get(j).setCashiercheckId(cashiercheckItems.get(i).getCashiercheckId());
					docDao.save(cashiercheckItems.get(i).getCashiercheckRelationPerson().get(j));
				}
				
				LDocInfo.setCashiercheckRelationPerson(cashiercheckItems.get(i).getCashiercheckRelationPerson());
				
				LDocInfo.setBankName(cashiercheckItems.get(i).getBankName());
				LDocInfo.setProdName(cashiercheckItems.get(i).getgProdName());
				LDocInfo.setCaseId(cashiercheckItems.get(i).getCaseId());
				LDocInfo.setDebtName(cashiercheckItems.get(i).getDebtName());
				LDocInfo.setID(cashiercheckItems.get(i).getDebtID());
				LDocInfo.setDocCode("C" + cashiercheckItems.get(i).getCashiercheckId());
				LDocInfo.setTypeOne(cashiercheckItems.get(i).getDisTypeOne());
				LDocInfo.setTypeTwo(cashiercheckItems.get(i).getDisTypeTwo());
				LDocInfo.setDocStatus(cashiercheckItems.get(i).getDisDocStatus());
				LDocInfo.setRemark("");
				LDocInfo.setRowNum("0");
				LDocInfo.setReport("");
				LDocInfo.setEdit("");
				LDocInfo.setPay("");
				LDocInfo.setSendReport("");
				LDocInfo.setCourtYearCourt("");
				LDocInfo.setSendDate("");
				LDocInfo.setNewSendDate("");
				LDocInfo.setExecutionDate("");
				LDocInfo.setToCourtDate("");
				LDocInfo.setSourceDoc("");
				LDocInfo.setDocType("C");
				LDocInfo.setDocId(cashiercheckItems.get(i).getCashiercheckId() + "");
				LDocInfo.setTempCount(cashiercheckItems.get(i).getTempCount());
				returnDocInfo.add(LDocInfo);
			}
		}
		// 本票儲存end
		
		// 債讓儲存start
		List<LDocDebts> debtsItems = gson.fromJson(saveDebts, new TypeToken<List<LDocDebts>>(){}.getType());

		if(debtsItems != null){
			for(int i = 0;i < debtsItems.size();i ++){
				
				LDocInfo LDocInfo = new LDocInfo();
				
				debtsItems.get(i).setInfoId(docInfoId);
				debtsItems.get(i).setCreateDatetime(nowDatetime);
				debtsItems.get(i).setCreateUserId(loginMemdb.getMemno());
				debtsItems.get(i).setCreateUserName(loginMemdb.getMemnm());
				debtsItems.get(i).setCaseId(case_id);
				
				docDao.save(debtsItems.get(i));
				
				for(int j = 0;j < debtsItems.get(i).getDebtsRelationPerson().size();j ++){
					debtsItems.get(i).getDebtsRelationPerson().get(j).setDebtsId(debtsItems.get(i).getDebtsId());
					docDao.save(debtsItems.get(i).getDebtsRelationPerson().get(j));
				}
				
				LDocInfo.setDebtsRelationPerson(debtsItems.get(i).getDebtsRelationPerson());
				
				LDocInfo.setBankName(debtsItems.get(i).getBankName());
				LDocInfo.setProdName(debtsItems.get(i).getgProdName());
				LDocInfo.setCaseId(debtsItems.get(i).getCaseId());
				LDocInfo.setDebtName(debtsItems.get(i).getDebtName());
				LDocInfo.setID(debtsItems.get(i).getDebtID());
				LDocInfo.setDocCode("D" + debtsItems.get(i).getDebtsId());
				LDocInfo.setTypeOne(debtsItems.get(i).getDisTypeOne());
				LDocInfo.setTypeTwo(debtsItems.get(i).getDisTypeTwo());
				LDocInfo.setDocStatus(debtsItems.get(i).getDisDocStatus());
				LDocInfo.setRemark("");
				LDocInfo.setRowNum("0");
				LDocInfo.setReport("");
				LDocInfo.setEdit("");
				LDocInfo.setPay("");
				LDocInfo.setSendReport("");
				LDocInfo.setCourtYearCourt("");
				LDocInfo.setSendDate("");
				LDocInfo.setNewSendDate("");
				LDocInfo.setSourceDoc("");
				LDocInfo.setExecutionDate("");
				LDocInfo.setToCourtDate("");
				LDocInfo.setDocType("D");
				LDocInfo.setDocId(debtsItems.get(i).getDebtsId() + "");
				LDocInfo.setTempCount(debtsItems.get(i).getTempCount());
				returnDocInfo.add(LDocInfo);
			}
		}
		// 債讓儲存end
		
		// 債權文件儲存start
		List<LDocClaimsdocs> claimsdocsItems = gson.fromJson(saveClaimsdoc, new TypeToken<List<LDocClaimsdocs>>(){}.getType());

		if(claimsdocsItems != null){
			for(int i = 0;i < claimsdocsItems.size();i ++){
				
				LDocInfo LDocInfo = new LDocInfo();
				
				claimsdocsItems.get(i).setInfoId(docInfoId);
				claimsdocsItems.get(i).setCreateDatetime(nowDatetime);
				claimsdocsItems.get(i).setCreateUserId(loginMemdb.getMemno());
				claimsdocsItems.get(i).setCreateUserName(loginMemdb.getMemnm());
				claimsdocsItems.get(i).setCaseId(case_id);
				
				docDao.save(claimsdocsItems.get(i));
				
				for(int j = 0;j < claimsdocsItems.get(i).getClaimsRelationPerson().size();j ++){
					claimsdocsItems.get(i).getClaimsRelationPerson().get(j).setClaimsdocsId(claimsdocsItems.get(i).getClaimsdocsId());
					docDao.save(claimsdocsItems.get(i).getClaimsRelationPerson().get(j));
				}
				
				LDocInfo.setClaimsRelationPerson(claimsdocsItems.get(i).getClaimsRelationPerson());// 債權文件相對人
				
				LDocInfo.setBankName(claimsdocsItems.get(i).getBankName());
				LDocInfo.setProdName(claimsdocsItems.get(i).getgProdName());
				LDocInfo.setCaseId(claimsdocsItems.get(i).getCaseId());
				LDocInfo.setDebtName(claimsdocsItems.get(i).getDebtName());
				LDocInfo.setID(claimsdocsItems.get(i).getDebtID());
				LDocInfo.setDocCode("E" + claimsdocsItems.get(i).getClaimsdocsId());
				LDocInfo.setTypeOne(claimsdocsItems.get(i).getDisTypeOne());
				LDocInfo.setTypeTwo(claimsdocsItems.get(i).getDisTypeTwo());
				LDocInfo.setDocStatus(claimsdocsItems.get(i).getDisDocStatus());
				LDocInfo.setRemark("");
				LDocInfo.setRowNum("0");
				LDocInfo.setReport("");
				LDocInfo.setEdit("");
				LDocInfo.setPay("");
				LDocInfo.setSendReport("");
				LDocInfo.setCourtYearCourt("");
				LDocInfo.setSendDate("");
				LDocInfo.setNewSendDate("");
				LDocInfo.setSourceDoc("");
				LDocInfo.setExecutionDate("");
				LDocInfo.setToCourtDate("");
				LDocInfo.setDocType("E");
				LDocInfo.setDocId(claimsdocsItems.get(i).getClaimsdocsId() + "");
				LDocInfo.setTempCount(claimsdocsItems.get(i).getTempCount());
				returnDocInfo.add(LDocInfo);
			}
		}
		// 債權文件儲存end
		
		// 卷宗儲存start
		List<LDocFiledocs> filedocsItems = gson.fromJson(saveFiledoc, new TypeToken<List<LDocFiledocs>>(){}.getType());

		if(filedocsItems != null){
			for(int i = 0;i < filedocsItems.size();i ++){
				
				LDocInfo LDocInfo = new LDocInfo();
				
				filedocsItems.get(i).setInfoId(docInfoId);
				filedocsItems.get(i).setCreateDatetime(nowDatetime);
				filedocsItems.get(i).setCreateUserId(loginMemdb.getMemno());
				filedocsItems.get(i).setCreateUserName(loginMemdb.getMemnm());
				filedocsItems.get(i).setCaseId(case_id);
				docDao.save(filedocsItems.get(i));
				
				LDocInfo.setBankName(filedocsItems.get(i).getBankName());
				LDocInfo.setProdName(filedocsItems.get(i).getgProdName());
				LDocInfo.setCaseId(filedocsItems.get(i).getCaseId());
				LDocInfo.setDebtName(filedocsItems.get(i).getDebtName());
				LDocInfo.setID(filedocsItems.get(i).getDebtID());
				LDocInfo.setDocCode("F" + filedocsItems.get(i).getFiledocsId());
				LDocInfo.setTypeOne(filedocsItems.get(i).getDisTypeOne());
				LDocInfo.setTypeTwo(filedocsItems.get(i).getDisTypeTwo());
				LDocInfo.setDocStatus(filedocsItems.get(i).getDisDocStatus());
				LDocInfo.setRemark("");
				LDocInfo.setRowNum("0");
				LDocInfo.setReport("");
				LDocInfo.setEdit("");
				LDocInfo.setPay("");
				LDocInfo.setSendReport("");
				LDocInfo.setCourtYearCourt("");
				LDocInfo.setSendDate("");
				LDocInfo.setNewSendDate("");
				LDocInfo.setSourceDoc("");
				LDocInfo.setExecutionDate("");
				LDocInfo.setToCourtDate("");
				LDocInfo.setDocType("F");
				LDocInfo.setDocId(filedocsItems.get(i).getFiledocsId() + "");
				LDocInfo.setTempCount(filedocsItems.get(i).getTempCount());
				returnDocInfo.add(LDocInfo);
			}
		}
		// 卷宗儲存end
		
		// 其他儲存start
		
		List<LDocOtherdocs> otherdocsItems = gson.fromJson(saveOtherdoc, new TypeToken<List<LDocOtherdocs>>(){}.getType());
		if(otherdocsItems != null){
			for(int i = 0;i < otherdocsItems.size();i ++){
				
				LDocInfo LDocInfo = new LDocInfo();
				
				otherdocsItems.get(i).setInfoId(docInfoId);
				otherdocsItems.get(i).setCreateDatetime(nowDatetime);
				otherdocsItems.get(i).setCreateUserId(loginMemdb.getMemno());
				otherdocsItems.get(i).setCreateUserName(loginMemdb.getMemnm());
				otherdocsItems.get(i).setCaseId(case_id);
				docDao.save(otherdocsItems.get(i));

				LDocInfo.setBankName(otherdocsItems.get(i).getBankName());
				LDocInfo.setProdName(otherdocsItems.get(i).getgProdName());
				LDocInfo.setCaseId(otherdocsItems.get(i).getCaseId());
				LDocInfo.setDebtName(otherdocsItems.get(i).getDebtName());
				LDocInfo.setID(otherdocsItems.get(i).getDebtID());
				LDocInfo.setDocCode("G" + otherdocsItems.get(i).getOtherdocsId());
				LDocInfo.setTypeOne(otherdocsItems.get(i).getDisTypeOne());
				LDocInfo.setTypeTwo(otherdocsItems.get(i).getDisTypeTwo());
				LDocInfo.setDocStatus(otherdocsItems.get(i).getDisDocStatus());
				LDocInfo.setRemark("");
				LDocInfo.setRowNum("0");
				LDocInfo.setReport("");
				LDocInfo.setEdit("");
				LDocInfo.setPay("");
				LDocInfo.setSendReport("");
				LDocInfo.setCourtYearCourt("");
				LDocInfo.setSendDate("");
				LDocInfo.setNewSendDate("");
				LDocInfo.setSourceDoc("");
				LDocInfo.setExecutionDate("");
				LDocInfo.setToCourtDate("");
				LDocInfo.setDocType("G");
				LDocInfo.setDocId(otherdocsItems.get(i).getOtherdocsId() + "");
				LDocInfo.setTempCount(otherdocsItems.get(i).getTempCount());
				returnDocInfo.add(LDocInfo);
			}
		}
		// 其他儲存end
		
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.addProperty("success", "success");
		jsonResponse.addProperty("msg", "儲存成功");
		jsonResponse.add("responseDocInfo", gson.toJsonTree(returnDocInfo));
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
	
	public JsonObject loadCaseDocsByCaseId(String caseId) throws Exception{
		// add By Jia 2017-08-16 查詢前先查影像檔，並把資料寫入暫存table 之後再delete掉
		Properties properties = new Properties();
		String propertiesFile = "Law.properties";
		ClassLoader classLoader = getClass().getClassLoader();
		properties.load(classLoader.getResourceAsStream(propertiesFile));
		String imgFilePath = properties.getProperty("doc.docSystem.imgFilepath");
		File a = new File(imgFilePath + NumberUtil.addZeroForNum(caseId, 8));
		String[] filenames;
		String fullpath = a.getAbsolutePath();
		
		String uuid = UUID.randomUUID().toString(); // 生成UUID
			      
		if(a.isDirectory()){
			filenames=a.list();
			for (int i = 0 ; i < filenames.length ; i++){         
				File tempFile = new File(fullpath + "\\" + filenames[i]);
				LDocImgfileTemp tempimgFile = new LDocImgfileTemp();
				if(tempFile.isDirectory()){
					log.debug("目錄:" + filenames[i]);
				}else{
					tempimgFile.setCaseId(Integer.valueOf(caseId));
					tempimgFile.setImgTempId(uuid);
					tempimgFile.setOutput(filenames[i]);
					log.debug("檔案:" + filenames[i]);
					docDao.save(tempimgFile);
				}
			}
		}else{
			log.debug("[" + a + "]不是目錄");
		}

		
		List<LDocInfo> ListLDocInfo = docDao.findDocByCaseId(caseId);
		
		// 查詢完後刪除Temp資料
		docDao.deleteById(uuid);
		
		JsonObject jsonResponse = new JsonObject();
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		jsonResponse.add("responseCaseInfo", gson.toJsonTree(ListLDocInfo));
		return jsonResponse;
	}
	
	@SuppressWarnings("unchecked")
	public String findDocSysSelectOption() throws Exception{
		Map<?, ?> LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d5efd74015d5f3c86c30001");
		List<LSysVariable> LSysVariableListBackReason = (List<LSysVariable>) LSysVariableMap.get("list"); //退件原因
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c9b8c95015c9b9528290012");
		List<LSysVariable> LSysVariableListCourt = (List<LSysVariable>) LSysVariableMap.get("list");//地院
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c8074d5015c8076afcd0000");
		List<LSysVariable> LSysVariableListDocStatus = (List<LSysVariable>) LSysVariableMap.get("list");//文管狀態
		
		Gson gson = new Gson();
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.add("backReason", gson.toJsonTree(LSysVariableListBackReason));
		jsonResponse.add("court", gson.toJsonTree(LSysVariableListCourt));
		jsonResponse.add("docStatus", gson.toJsonTree(LSysVariableListDocStatus));
		
		return jsonResponse.toString();
	}

	public String saveBorrowDocs(String saveBorrowString, String saveBorrowHistoryInfo, VEIPMemdb loginUser, String caseId) throws Exception{
		Gson gson = new Gson();
		Date nowDatetime = new Date();
		// 新增申調List
		List<LDocBorrowList> LDocBorrowList = gson.fromJson(saveBorrowString, new TypeToken<List<LDocBorrowList>>(){}.getType());
		// 歷史紀錄
		List<LDocBorrowHistory> LDocBorrowHistoryList = gson.fromJson(saveBorrowHistoryInfo, new TypeToken<List<LDocBorrowHistory>>(){}.getType());
		for(int i = 0; i < LDocBorrowList.size();i ++){
			// 申調清單
			String borrowinfo = LDocBorrowList.get(i).getBorrowInfo();
			borrowinfo = DateTimeFormat.getTWNowDate(nowDatetime) + borrowinfo + loginUser.getMemnm();
			LDocBorrowList.get(i).setBorrowInfo(borrowinfo);
			LDocBorrowList.get(i).setBorrowUserId(loginUser.getMemno());
			LDocBorrowList.get(i).setBorrowUserName(loginUser.getMemnm());
			LDocBorrowList.get(i).setBorrowDatetime(nowDatetime);
			LDocBorrowList.get(i).setModifyUserId(loginUser.getMemno());
			LDocBorrowList.get(i).setModifyUserName(loginUser.getMemnm());
			LDocBorrowList.get(i).setModifyDatetime(nowDatetime);
			LDocBorrowList.get(i).setIsClose("N");
			updateDocStatus(LDocBorrowList.get(i).getDocCode(), "8aa2e72a5c8074d5015c807765af0003");
			docBorrowDao.save(LDocBorrowList.get(i));

			// 歷史紀錄
			LDocBorrowHistoryList.get(i).setBorrowDocId(LDocBorrowList.get(i).getBorrowDocId());
			LDocBorrowHistoryList.get(i).setBorrowUserName(loginUser.getMemnm());
			LDocBorrowHistoryList.get(i).setBorrowUserId(loginUser.getMemno());
			LDocBorrowHistoryList.get(i).setBorrowDatetime(nowDatetime);
			LDocBorrowHistoryList.get(i).setDocStatus("8aa2e72a5c8074d5015c807765af0003");
			
			docBorrowDao.save(LDocBorrowHistoryList.get(i));
		}

		
		JsonObject jsonResponse = loadCaseDocsByCaseId(caseId);
		jsonResponse.addProperty("success", "success");
		jsonResponse.addProperty("msg", "申調成功");
		return jsonResponse.toString();
	}
	
	public String printDocsInfo(String printDocInfoString, String uploadPath) throws Exception{
		Gson gson = new Gson();
		List<printDocInfo> printDocInfo = gson.fromJson(printDocInfoString, new TypeToken<List<printDocInfo>>(){}.getType());
		
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
                context.putVar("LDocInfo", printDocInfo);
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
	
	@SuppressWarnings("unchecked")
	public String findDocSumSelectOption() throws Exception{
		Map<?, ?> LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c8074d5015c8076afcd0000");
		List<LSysVariable> LSysVariableListDocStatus = (List<LSysVariable>) LSysVariableMap.get("list"); //文件狀態
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5c812434015c812e92070000");
		List<LSysVariable> LSysVariableListTypeOne = (List<LSysVariable>) LSysVariableMap.get("list");//文件類別
		
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

		List<LSysVariable> LSysVariableListCourtDocTypeTwo = new ArrayList<LSysVariable>();//02法院文文件項目
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4f94c99f0000");
		List<LSysVariable> LSysVariableListCourtDocImmovablesTypeTwo = new ArrayList<LSysVariable>();//法院文-不動產 文件項目
		List<LSysVariable> realLSysVariableListCourtDocImmovablesTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-不動產 文件項目
		LSysVariableListCourtDocImmovablesTypeTwo.addAll(realLSysVariableListCourtDocImmovablesTypeTwo);
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4fbcecff000a");
		List<LSysVariable> LSysVariableListCourtDocCenTypeTwo = new ArrayList<LSysVariable>();//法院文-取執 文件項目
		List<LSysVariable> realLSysVariableListCourtDocCenTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-取執 文件項目
		LSysVariableListCourtDocCenTypeTwo.addAll(realLSysVariableListCourtDocCenTypeTwo);
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4fc47fb5000e");
		List<LSysVariable> LSysVariableListCourtDocDebtTypeTwo = new ArrayList<LSysVariable>();//法院文-金錢債權 文件項目
		List<LSysVariable> realLSysVariableListCourtDocDebtTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-金錢債權 文件項目
		LSysVariableListCourtDocDebtTypeTwo.addAll(realLSysVariableListCourtDocDebtTypeTwo);
		
		LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d4f8922015d4fc5a22f0013");
		List<LSysVariable> LSysVariableListCourtDocCommonsTypeTwo = new ArrayList<LSysVariable>();//法院文-共用 文件項目
		List<LSysVariable> realLSysVariableListCourtDocCommonsTypeTwo = (List<LSysVariable>) LSysVariableMap.get("list");//法院文-共用 文件項目
		LSysVariableListCourtDocCommonsTypeTwo.addAll(realLSysVariableListCourtDocCommonsTypeTwo);
		
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocImmovablesTypeTwo);
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocCenTypeTwo);
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocDebtTypeTwo);
		LSysVariableListCourtDocTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		
		LSysVariableListCourtDocImmovablesTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		LSysVariableListCourtDocCenTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		LSysVariableListCourtDocDebtTypeTwo.addAll(LSysVariableListCourtDocCommonsTypeTwo);
		
		List<LSysVariable> LSysVariableListTypeTwo = new ArrayList<LSysVariable>();//All 文件項目
		LSysVariableListTypeTwo.addAll(LSysVariableListCentitlementTypeTwo);
		LSysVariableListTypeTwo.addAll(LSysVariableListCourtDocTypeTwo);
		LSysVariableListTypeTwo.addAll(LSysVariableListCashierCheckTypeTwo);
		LSysVariableListTypeTwo.addAll(LSysVariableListDebtsTypeTwo);
		LSysVariableListTypeTwo.addAll(LSysVariableListClaimDocTypeTwo);
		LSysVariableListTypeTwo.addAll(LSysVariableListFileTypeTwo);
		LSysVariableListTypeTwo.addAll(LSysVariableListOtherTypeTwo);
		
		Gson gson = new Gson();
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.add("DocStatus", gson.toJsonTree(LSysVariableListDocStatus));
		jsonResponse.add("TypeOne", gson.toJsonTree(LSysVariableListTypeOne));
		jsonResponse.add("TypeTwo", gson.toJsonTree(LSysVariableListTypeTwo));
		jsonResponse.add("courtDocTypeTwo", gson.toJsonTree(LSysVariableListCourtDocTypeTwo));// 法院文All
		jsonResponse.add("courtDocImmovablesTypeTwo", gson.toJsonTree(LSysVariableListCourtDocImmovablesTypeTwo));// 法院文不動產
		jsonResponse.add("courtDocCenTypeTwo", gson.toJsonTree(LSysVariableListCourtDocCenTypeTwo));// 法院文取執
		jsonResponse.add("courtDocDebtTypeTwo", gson.toJsonTree(LSysVariableListCourtDocDebtTypeTwo));// 法院文金錢債權
		jsonResponse.add("centitlementTypeTwo", gson.toJsonTree(LSysVariableListCentitlementTypeTwo));
		jsonResponse.add("cashierCheckTypeTwo", gson.toJsonTree(LSysVariableListCashierCheckTypeTwo));
		jsonResponse.add("debtsTypeTwo", gson.toJsonTree(LSysVariableListDebtsTypeTwo));
		jsonResponse.add("claimDocTypeTwo", gson.toJsonTree(LSysVariableListClaimDocTypeTwo));
		jsonResponse.add("fileTypeTwo", gson.toJsonTree(LSysVariableListFileTypeTwo));
		jsonResponse.add("otherTypeTwo", gson.toJsonTree(LSysVariableListOtherTypeTwo));
		return jsonResponse.toString();
	}

	public String updateDocStatus(String docId, String docStatus) throws Exception{
		JsonObject jsonResponse = new JsonObject();
		if(docId != null && !docId.equals("")){
			if(docId.indexOf("A") >= 0){
				docDao.saveToUpdateDocStatus("L_DOC_CENTITLEMENT","'" + docStatus + "'",docId.substring(1));
			}
			if(docId.indexOf("B") >= 0){
				docDao.saveToUpdateDocStatus("L_DOC_COURT_DOC","'" + docStatus + "'",docId.substring(1));
			}
			if(docId.indexOf("C") >= 0){
				docDao.saveToUpdateDocStatus("L_DOC_CASHIERCHECK","'" + docStatus + "'",docId.substring(1));
			}
			if(docId.indexOf("D") >= 0){
				docDao.saveToUpdateDocStatus("L_DOC_DEBTS","'" + docStatus + "'",docId.substring(1));
			}
			if(docId.indexOf("E") >= 0){
				docDao.saveToUpdateDocStatus("L_DOC_CLAIMSDOC","'" + docStatus + "'",docId.substring(1));
			}
			if(docId.indexOf("F") >= 0){
				docDao.saveToUpdateDocStatus("L_DOC_FILEDOCS","'" + docStatus + "'",docId.substring(1));
			}
			if(docId.indexOf("G") >= 0){
				docDao.saveToUpdateDocStatus("L_DOC_OTHERDOCS","'" + docStatus + "'",docId.substring(1));
			}

			jsonResponse.addProperty("success", "success");
			jsonResponse.addProperty("msg", "狀態更改成功");
		}
		return jsonResponse.toString();
	}
	
	public String downloadImgFile(String caseId, String fileName, String path) throws Exception{
		JsonObject jsonResponse = new JsonObject();
		Properties properties = new Properties();
		String propertiesFile = "Law.properties";
		ClassLoader classLoader = getClass().getClassLoader();
		properties.load(classLoader.getResourceAsStream(propertiesFile));
		String imgFilePath = properties.getProperty("doc.docSystem.imgFilepath");
		File imgFile = new File(imgFilePath + NumberUtil.addZeroForNum(caseId, 8) + "\\" + fileName);
		
		File[] fileList = new File[1];
		fileList[0] = imgFile;
		
		FilesUploads FilesUploads = new FilesUploads();
		String uuid = UUID.randomUUID().toString(); // 生成UUID
		FilesUploads.fileUpload(fileList, path + "\\temp\\" + uuid, fileName);

		jsonResponse.addProperty("imguuid", uuid);
		jsonResponse.addProperty("imgFileName", fileName);
		
		return jsonResponse.toString();
	}
	
	public String findDocByTypeAndId(String docType, String docId) throws Exception{
		JsonObject jsonResponse = new JsonObject();
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		if(docType != null && !docType.equals("")){
			if(docType.equals("A")){
				LDocCentitlement LDocCentitlement = docDao.findCenById(docId);
				List<LDocCentitlementRela> LDocCentitlementRela = docDao.findCenRelaById(docId);
				List<LDocCentitlementSourceDoc> LDocCentitlementSourceDoc = docDao.findCenSourceDocById(docId);
				LDocCentitlement.setCentitlementRelationPerson(LDocCentitlementRela);
				LDocCentitlement.setCentitlementSourceDoc(LDocCentitlementSourceDoc);
				jsonResponse.add("cenDoc", gson.toJsonTree(LDocCentitlement));
			}else	if(docType.equals("B")){
				LDocCourtDoc LDocCourtDoc = docDao.findCourtDocById(docId);
				List<LDocCourtDocRela> LDocCourtDocRela = docDao.findCourtDocRelaById(docId);
				List<LDocCourtDocTranscriptsRela> LDocCourtDocTranscriptsRela = docDao.findCourtDocTransciptsRelaById(docId);
				List<LDocCourtDocCoOwnedTranscriptsRela> LDocCourtDocCoOwnedTranscriptsRela = docDao.findCourtDocCoOwnedTransciptsRelaById(docId);
				List<LDocCourtDocMortgageeTranscriptsRela> LDocCourtDocMortgageeTranscriptsRela = docDao.findCourtDocMortgageeTranscriptsRelaById(docId);
				List<LDocCourtDocLawTranscriptsRela> LDocCourtDocLawTranscriptsRela = docDao.findCourtDocLawTranscriptsRelaById(docId);
				List<LDocCourtDocHeirTranscriptsRela> LDocCourtDocHeirTranscriptsRela = docDao.findCourtDocHeirTranscriptsRelaById(docId);
				List<LDocCourtDocDirtTranscriptsRela> LDocCourtDocDirtTranscriptsRela = docDao.findCourtDocDirtTranscriptsRelaById(docId);
				List<LDocCourtDocBuiltTranscriptsRela> LDocCourtDocBuiltTranscriptsRela = docDao.findCourtDocBuiltTranscriptsRelaById(docId);
				List<LDocCourtDocDistributionRela> LDocCourtDocDistributionRela = docDao.findCourtDocDistributionRelaById(docId);
				List<LDocCourtDocThingThirdRela> LDocCourtDocThingThirdRela = docDao.findCourtDocThingThirdRelaById(docId);
				List<LDocCourtDocThingDebtRela> LDocCourtDocThingDebtRela = docDao.findCourtDocThingDebtRelaById(docId);
				List<LDocCourtDocCoOwnedRela> LDocCourtDocCoOwnedRela = docDao.findCourtDocCoOwnedRelaById(docId);
				List<LDocCourtDocDebtDocRela> LDocCourtDocDebtDocRela = docDao.findCourtDocDebtDocRelaById(docId);
				List<LDocCourtDocDetailRela> LDocCourtDocDetailRela = docDao.findCourtDocDetailRelaById(docId);
				List<LDocCourtDocFileRela> LDocCourtDocFileRela = docDao.findCourtDocFileRelaById(docId);
				List<LDocCourtDocDebtContinueRela> LDocCourtDocDebtContinueRela = docDao.findCourtDocDebtContinueRelaById(docId);
				List<LDocCourtDocCashierCheckRela> LDocCourtDocCashierCheckRela = docDao.findCourtDocCashierCheckRelaById(docId);
				List<LDocCourtDocRecoveryRela> LDocCourtDocRecoveryRela = docDao.findCourtDocRecoveryRelaById(docId);
				List<LDocCourtDocOtherRela> LDocCourtDocOtherRela = docDao.findCourtDocOtherRelaById(docId);
				LDocCourtDoc.setCourtDocRelationPerson(LDocCourtDocRela);
				LDocCourtDoc.setCourtDocTranscriptsRelationPerson(LDocCourtDocTranscriptsRela);
				LDocCourtDoc.setCourtDocMortgageeTranscriptsRelationPerson(LDocCourtDocMortgageeTranscriptsRela);
				LDocCourtDoc.setCourtDocCoOwnedTranscriptsRelationPerson(LDocCourtDocCoOwnedTranscriptsRela);
				LDocCourtDoc.setCourtDocLawTranscriptsRelationPerson(LDocCourtDocLawTranscriptsRela);
				LDocCourtDoc.setCourtDocHeirTranscriptsRelationPerson(LDocCourtDocHeirTranscriptsRela);
				LDocCourtDoc.setCourtDocDirtTranscriptsRelationPerson(LDocCourtDocDirtTranscriptsRela);
				LDocCourtDoc.setCourtDocBuiltTranscriptsRelationPerson(LDocCourtDocBuiltTranscriptsRela);
				LDocCourtDoc.setCourtDocDistributionRelationPerson(LDocCourtDocDistributionRela);
				LDocCourtDoc.setCourtDocThingThirdRelationPerson(LDocCourtDocThingThirdRela);
				LDocCourtDoc.setCourtDocThingDebtRelationPerson(LDocCourtDocThingDebtRela);
				LDocCourtDoc.setCourtDocCoOwnedRelationPerson(LDocCourtDocCoOwnedRela);
				LDocCourtDoc.setCourtDocDebtDocRelationPerson(LDocCourtDocDebtDocRela);
				LDocCourtDoc.setCourtDocDetailRelationPerson(LDocCourtDocDetailRela);
				LDocCourtDoc.setCourtDocFileRelationPerson(LDocCourtDocFileRela);
				LDocCourtDoc.setCourtDocDebtContinueRelationPerson(LDocCourtDocDebtContinueRela);
				LDocCourtDoc.setCourtDocCashierCheckRelationPerson(LDocCourtDocCashierCheckRela);
				LDocCourtDoc.setCourtDocRecoveryRelationPerson(LDocCourtDocRecoveryRela);
				LDocCourtDoc.setCourtDocOtherRelationPerson(LDocCourtDocOtherRela);
				jsonResponse.add("courtDocDoc", gson.toJsonTree(LDocCourtDoc));
			}else if(docType.equals("C")){
				LDocCashiercheck LDocCashiercheck = docDao.findCashierCheckById(docId);
				List<LDocCashiercheckRela> LDocCashiercheckRela = docDao.findCashierCheckRelaById(docId);
				LDocCashiercheck.setCashiercheckRelationPerson(LDocCashiercheckRela);
				jsonResponse.add("cashierCheckDoc", gson.toJsonTree(LDocCashiercheck));
			}else if(docType.equals("D")){
				LDocDebts LDocDebts = docDao.findDebtsById(docId);
				List<LDocDebtsRela> LDocDebtsRela = docDao.findDebtsRelaById(docId);
				LDocDebts.setDebtsRelationPerson(LDocDebtsRela);
				jsonResponse.add("debtsDoc", gson.toJsonTree(LDocDebts));
			}else	if(docType.equals("E")){
				LDocClaimsdocs LDocClaimsdocs = docDao.findClaimDocsById(docId);
				List<LDocClaimsdocsRela> LDocClaimsdocsRela = docDao.findClaimDocsRelaById(docId);
				LDocClaimsdocs.setClaimsRelationPerson(LDocClaimsdocsRela);
				jsonResponse.add("claimsdocsDoc", gson.toJsonTree(LDocClaimsdocs));
			}else	if(docType.equals("F")){
				LDocFiledocs LDocFiledocs = docDao.findFileById(docId);
				jsonResponse.add("fileDoc", gson.toJsonTree(LDocFiledocs));
			}else	if(docType.equals("G")){
				LDocOtherdocs LDocOtherdocs = docDao.findOtherById(docId);
				jsonResponse.add("otherDoc", gson.toJsonTree(LDocOtherdocs));
			}
		}
		return jsonResponse.toString();
	}
}
