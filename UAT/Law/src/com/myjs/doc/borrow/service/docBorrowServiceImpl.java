package com.myjs.doc.borrow.service;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;

import com.myjs.commons.DateTimeFormat;
import com.myjs.commons.SaveParameter;
import com.myjs.doc.documents.Dao.docDao;
import com.myjs.doc.borrow.Dao.docBorrowDao;
import com.myjs.sys.user.Dao.memdbDao;
import com.myjs.sys.user.model.VEIPMemdb;
import com.myjs.doc.borrow.model.LDocBorrowList;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import com.myjs.sys.variable.model.LSysVariable;

public class docBorrowServiceImpl implements docBorrowService{
	private static final Logger log = LogManager.getLogger(docBorrowServiceImpl.class);
	private docDao docDao;
	private docBorrowDao docBorrowDao;
	private memdbDao memdbDao;
	public docDao getDocDao() {
		return docDao;
	}

	public void setDocDao(docDao docDao) {
		this.docDao = docDao;
	}

	public docBorrowDao getDocBorrowDao() {
		return docBorrowDao;
	}

	public void setDocBorrowDao(docBorrowDao docBorrowDao) {
		this.docBorrowDao = docBorrowDao;
	}
	
	
	public memdbDao getMemdbDao() {
		return memdbDao;
	}

	public void setMemdbDao(memdbDao memdbDao) {
		this.memdbDao = memdbDao;
	}

	@SuppressWarnings("unchecked")
	public String findMoveDocSelectOption() throws Exception{
		
		log.debug("findMoveDocSelectOption start");
		
		//查詢SMART DB 內的債權人
		List<LSysVariable> LSysVariableListBankName = docDao.findAllBankName();//債權人
		
		List<LSysVariable> isO_CList = new ArrayList<LSysVariable>();// 是否庫存
		LSysVariable isO = new LSysVariable("O","庫存");
		LSysVariable isC = new LSysVariable("C","退案");
		isO_CList.add(isO);
		isO_CList.add(isC);

		Map<?, ?> LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d5efd74015d5f3c86c30001");
		List<LSysVariable> LSysVariableListBorrowReason = (List<LSysVariable>) LSysVariableMap.get("list");//申調原因
		
		List<LSysVariable> borrowStatus = new ArrayList<LSysVariable>(); //借調狀態
		LSysVariable bs0 = new LSysVariable("0","申請借調");
		LSysVariable bs1 = new LSysVariable("1","取消借調");
		borrowStatus.add(bs0);
		borrowStatus.add(bs1);
		
		Gson gson = new Gson();
		JsonObject jsonResponse = new JsonObject();
		
		jsonResponse.add("bankName", gson.toJsonTree(LSysVariableListBankName));
		jsonResponse.add("O_C", gson.toJsonTree(isO_CList));
		jsonResponse.add("borrowReason", gson.toJsonTree(LSysVariableListBorrowReason));
		jsonResponse.add("borrowStatus", gson.toJsonTree(borrowStatus));
		
		return jsonResponse.toString();
	}
	
	public String findMoveDoc(int type, String caseId, String bankName, String isInStore, String debtName, 
			String borrowReason, String docStatus, String ID, String borrowStartDate, 
			String borrowEndDate, String docCode, String borrowUserName) throws Exception{
		
		//用申請人姓名讀取ID
		VEIPMemdb borrowUserId = memdbDao.findbyuserName(borrowUserName);
		String borrowUserNo = "";
		if(borrowUserId != null){
			borrowUserNo = borrowUserId.getMemno();
		}
		
		log.debug("borrowUserId = {}, borrowUserName = {}",	borrowUserNo, borrowUserName);
		List<LDocBorrowList> ListLDocInfo = docBorrowDao.findBorrowDoc(type, caseId, bankName, isInStore, debtName, 
				borrowReason, docStatus, ID, borrowStartDate, borrowEndDate, docCode, borrowUserNo);
		JsonObject jsonResponse = new JsonObject();
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
		jsonResponse.add("responseLDocBorrow", gson.toJsonTree(ListLDocInfo));
		return jsonResponse.toString();
	}
	
	public String printMoveDocs(String type, String printMoveDocString, String uploadPath) throws Exception{


		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		List<LDocBorrowList> LDocBorrowList = gson.fromJson(printMoveDocString, new TypeToken<List<LDocBorrowList>>(){}.getType());
		
		// 進行套表
		log.debug("套表開始");
		Properties properties = new Properties();
		String propertiesFile = "Law.properties";
		ClassLoader classLoader = getClass().getClassLoader();
		properties.load(classLoader.getResourceAsStream(propertiesFile));
		String typeName = "";
		if(type != null && !type.equals("")){
			if(type.equals("0")){
				typeName = "moveDoc";
			}else if(type.equals("1")){
				typeName = "moveCheckDoc";
			}else if(type.equals("2")){
				typeName = "applyBorrow";
			}	
		}
		String filePath = properties.getProperty("doc." + typeName + ".printexcel.path");
		String fileName = properties.getProperty("doc." + typeName + ".printexcel.name");
		String fileUrl = classLoader.getResource(filePath).getPath();
		log.debug("檔案路徑 = {}", fileUrl + fileName);
		
		String outputDatetime = DateTimeFormat.getNowDateNum();
		String outputString = uploadPath + "/" + typeName + "/" + outputDatetime + fileName;
		log.debug("outputString = {}", outputString);
		
		try(InputStream is = new FileInputStream(fileUrl + fileName)) {
        	log.debug("is = {}", is);
            try (OutputStream os = new FileOutputStream(outputString)) {
                Context context = new Context();
                context.putVar("LDocBorrowList", LDocBorrowList);
                JxlsHelper.getInstance().processTemplate(is, os, context);
            }
        }
			        
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.addProperty("success", "success");
		jsonResponse.addProperty("downloadPath", "../upload/" + typeName + "/" + outputDatetime + typeName + ".xls");
		return jsonResponse.toString();
	}
	
	public String saveMoveDocs(String saveType,String saveCentitlementDocIds, String saveCourtDocDocIds, 
			String saveCashierCheckDocIds, String saveDebtsDocIds, String saveClaimsDocDocIds, 
			String saveFileDocDocIds, String saveOtherDocIds, String saveBorrowDocIds) throws Exception{
		
		log.debug("saveMoveDocs start");
		log.debug("saveMoveDocs type = {}", saveType);
		JsonObject jsonResponse = new JsonObject();
		
		saveBorrowDocIds = saveBorrowDocIds.replaceAll("\\Q[\\E", "");
		saveBorrowDocIds = saveBorrowDocIds.replaceAll("\\Q]\\E", "");
		saveBorrowDocIds = saveBorrowDocIds.replaceAll("\"", "'");
		
		saveCentitlementDocIds = saveCentitlementDocIds.replaceAll("\\Q[\\E", "");
		saveCentitlementDocIds = saveCentitlementDocIds.replaceAll("\\Q]\\E", "");
		saveCentitlementDocIds = saveCentitlementDocIds.replaceAll("\"", "'");
		
		saveCourtDocDocIds = saveCourtDocDocIds.replaceAll("\\Q[\\E", "");
		saveCourtDocDocIds = saveCourtDocDocIds.replaceAll("\\Q]\\E", "");
		saveCourtDocDocIds = saveCourtDocDocIds.replaceAll("\"", "'");
		
		saveCashierCheckDocIds = saveCashierCheckDocIds.replaceAll("\\Q[\\E", "");
		saveCashierCheckDocIds = saveCashierCheckDocIds.replaceAll("\\Q]\\E", "");
		saveCashierCheckDocIds = saveCashierCheckDocIds.replaceAll("\"", "'");
		
		saveDebtsDocIds = saveDebtsDocIds.replaceAll("\\Q[\\E", "");
		saveDebtsDocIds = saveDebtsDocIds.replaceAll("\\Q]\\E", "");
		saveDebtsDocIds = saveDebtsDocIds.replaceAll("\"", "'");
		
		saveClaimsDocDocIds = saveClaimsDocDocIds.replaceAll("\\Q[\\E", "");
		saveClaimsDocDocIds = saveClaimsDocDocIds.replaceAll("\\Q]\\E", "");
		saveClaimsDocDocIds = saveClaimsDocDocIds.replaceAll("\"", "'");
		
		saveFileDocDocIds = saveFileDocDocIds.replaceAll("\\Q[\\E", "");
		saveFileDocDocIds = saveFileDocDocIds.replaceAll("\\Q]\\E", "");
		saveFileDocDocIds = saveFileDocDocIds.replaceAll("\"", "'");
		
		saveOtherDocIds = saveOtherDocIds.replaceAll("\\Q[\\E", "");
		saveOtherDocIds = saveOtherDocIds.replaceAll("\\Q]\\E", "");
		saveOtherDocIds = saveOtherDocIds.replaceAll("\"", "'");
		
		log.debug("saveBorrowDocIds = {}", saveBorrowDocIds);
		//確定調出
		if(saveType.equals("0")){
			if(saveBorrowDocIds != null && !saveBorrowDocIds.equals("")){
				docBorrowDao.saveToUpdateBorrowListStatus(saveBorrowDocIds,"2" ,"");
			}
			
			if(saveCentitlementDocIds != null && !saveCentitlementDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CENTITLEMENT","'8aa2e72a5c8074d5015c80777e400004'",saveCentitlementDocIds);
			}
			
			if(saveCourtDocDocIds != null && !saveCourtDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_COURT_DOC","'8aa2e72a5c8074d5015c80777e400004'",saveCourtDocDocIds);
			}
			
			if(saveCashierCheckDocIds != null && !saveCashierCheckDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CASHIERCHECK","'8aa2e72a5c8074d5015c80777e400004'",saveCashierCheckDocIds);
			}
			
			if(saveDebtsDocIds != null && !saveDebtsDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_DEBTS","'8aa2e72a5c8074d5015c80777e400004'",saveDebtsDocIds);
			}

			if(saveClaimsDocDocIds != null && !saveClaimsDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CLAIMSDOC","'8aa2e72a5c8074d5015c80777e400004'",saveClaimsDocDocIds);
			}

			if(saveFileDocDocIds != null && !saveFileDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_FILEDOCS","'8aa2e72a5c8074d5015c80777e400004'",saveFileDocDocIds);
			}

			if(saveOtherDocIds != null && !saveOtherDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_OTHERDOCS","'8aa2e72a5c8074d5015c80777e400004'",saveOtherDocIds);
			}
			
			jsonResponse.addProperty("success", "success");
			jsonResponse.addProperty("msg", "確定調卷");
		}else if(saveType.equals("1") || saveType.equals("3")){// 1 : 取消借調(文管科使用), 3 : 取消調卷 

			if(saveBorrowDocIds != null && !saveBorrowDocIds.equals("")){
				if(saveType.equals("1")){
					docBorrowDao.saveToUpdateBorrowListStatus(saveBorrowDocIds,"1" ,"");
				}else if(saveType.equals("3")){
					docBorrowDao.saveToUpdateBorrowListStatus(saveBorrowDocIds,"4" ,"");
				}
			}
			
			if(saveCentitlementDocIds != null && !saveCentitlementDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CENTITLEMENT","'8aa2e72a5c8074d5015c8076cfe50001'",saveCentitlementDocIds);
			}
			
			if(saveCourtDocDocIds != null && !saveCourtDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_COURT_DOC","'8aa2e72a5c8074d5015c8076cfe50001'",saveCourtDocDocIds);
			}
			
			if(saveCashierCheckDocIds != null && !saveCashierCheckDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CASHIERCHECK","'8aa2e72a5c8074d5015c8076cfe50001'",saveCashierCheckDocIds);
			}
			
			if(saveDebtsDocIds != null && !saveDebtsDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_DEBTS","'8aa2e72a5c8074d5015c8076cfe50001'",saveDebtsDocIds);
			}

			if(saveClaimsDocDocIds != null && !saveClaimsDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CLAIMSDOC","'8aa2e72a5c8074d5015c8076cfe50001'",saveClaimsDocDocIds);
			}

			if(saveFileDocDocIds != null && !saveFileDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_FILEDOCS","'8aa2e72a5c8074d5015c8076cfe50001'",saveFileDocDocIds);
			}

			if(saveOtherDocIds != null && !saveOtherDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_OTHERDOCS","'8aa2e72a5c8074d5015c8076cfe50001'",saveOtherDocIds);
			}
			
			jsonResponse.addProperty("success", "success");
			if(saveType.equals("1")){
				jsonResponse.addProperty("msg", "取消借調");
			}else if(saveType.equals("3")){
				jsonResponse.addProperty("msg", "取消調卷");
			}
		}else if(saveType.equals("2")){// 調卷簽收

			if(saveBorrowDocIds != null && !saveBorrowDocIds.equals("")){
				docBorrowDao.saveToUpdateBorrowListStatus(saveBorrowDocIds,"3" , "");
			}
			
			if(saveCentitlementDocIds != null && !saveCentitlementDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CENTITLEMENT","'8aa2e72a5c8074d5015c8077a2180005'",saveCentitlementDocIds);
			}
			
			if(saveCourtDocDocIds != null && !saveCourtDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_COURT_DOC","'8aa2e72a5c8074d5015c8077a2180005'",saveCourtDocDocIds);
			}
			
			if(saveCashierCheckDocIds != null && !saveCashierCheckDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CASHIERCHECK","'8aa2e72a5c8074d5015c8077a2180005'",saveCashierCheckDocIds);
			}
			
			if(saveDebtsDocIds != null && !saveDebtsDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_DEBTS","'8aa2e72a5c8074d5015c8077a2180005'",saveDebtsDocIds);
			}

			if(saveClaimsDocDocIds != null && !saveClaimsDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CLAIMSDOC","'8aa2e72a5c8074d5015c8077a2180005'",saveClaimsDocDocIds);
			}

			if(saveFileDocDocIds != null && !saveFileDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_FILEDOCS","'8aa2e72a5c8074d5015c8077a2180005'",saveFileDocDocIds);
			}

			if(saveOtherDocIds != null && !saveOtherDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_OTHERDOCS","'8aa2e72a5c8074d5015c8077a2180005'",saveOtherDocIds);
			}
			
			jsonResponse.addProperty("success", "success");
			jsonResponse.addProperty("msg", "已簽收");
		}
		
		return jsonResponse.toString();
	}
	
	@SuppressWarnings("unchecked")
	public String findMoveCheckDocSelectOption() throws Exception{
		
		log.debug("findMoveCheckDocSelectOption start");
		
		//查詢SMART DB 內的債權人
		List<LSysVariable> LSysVariableListBankName = docDao.findAllBankName();//債權人

		Map<?, ?> LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get("8aa2e72a5d5efd74015d5f3c86c30001");
		List<LSysVariable> LSysVariableListBorrowReason = (List<LSysVariable>) LSysVariableMap.get("list");//申調原因
		
		Gson gson = new Gson();
		JsonObject jsonResponse = new JsonObject();
		
		jsonResponse.add("bankName", gson.toJsonTree(LSysVariableListBankName));
		jsonResponse.add("borrowReason", gson.toJsonTree(LSysVariableListBorrowReason));
		
		return jsonResponse.toString();
	}
		
	public String saveCancelDocs(String saveType,String saveCancelReason, String saveCentitlementDocIds, 
			String saveCourtDocDocIds, String saveCashierCheckDocIds, String saveDebtsDocIds, 
			String saveClaimsDocDocIds, String saveFileDocDocIds, String saveOtherDocIds, String saveBorrowDocIds) 
					throws Exception{
		
		log.debug("saveCancelMoveDocs start");
		log.debug("saveCancelMoveDocs type = {}", saveType);
		JsonObject jsonResponse = new JsonObject();
		
		saveCancelReason = saveCancelReason.replaceAll("\\Q[\\E", "");
		saveCancelReason = saveCancelReason.replaceAll("\\Q]\\E", "");
		saveCancelReason = saveCancelReason.replaceAll("\"", "'");

		saveBorrowDocIds = saveBorrowDocIds.replaceAll("\\Q[\\E", "");
		saveBorrowDocIds = saveBorrowDocIds.replaceAll("\\Q]\\E", "");
		saveBorrowDocIds = saveBorrowDocIds.replaceAll("\"", "'");
		
		saveCentitlementDocIds = saveCentitlementDocIds.replaceAll("\\Q[\\E", "");
		saveCentitlementDocIds = saveCentitlementDocIds.replaceAll("\\Q]\\E", "");
		saveCentitlementDocIds = saveCentitlementDocIds.replaceAll("\"", "'");
		
		saveCourtDocDocIds = saveCourtDocDocIds.replaceAll("\\Q[\\E", "");
		saveCourtDocDocIds = saveCourtDocDocIds.replaceAll("\\Q]\\E", "");
		saveCourtDocDocIds = saveCourtDocDocIds.replaceAll("\"", "'");
		
		saveCashierCheckDocIds = saveCashierCheckDocIds.replaceAll("\\Q[\\E", "");
		saveCashierCheckDocIds = saveCashierCheckDocIds.replaceAll("\\Q]\\E", "");
		saveCashierCheckDocIds = saveCashierCheckDocIds.replaceAll("\"", "'");
		
		saveDebtsDocIds = saveDebtsDocIds.replaceAll("\\Q[\\E", "");
		saveDebtsDocIds = saveDebtsDocIds.replaceAll("\\Q]\\E", "");
		saveDebtsDocIds = saveDebtsDocIds.replaceAll("\"", "'");
		
		saveClaimsDocDocIds = saveClaimsDocDocIds.replaceAll("\\Q[\\E", "");
		saveClaimsDocDocIds = saveClaimsDocDocIds.replaceAll("\\Q]\\E", "");
		saveClaimsDocDocIds = saveClaimsDocDocIds.replaceAll("\"", "'");
		
		saveFileDocDocIds = saveFileDocDocIds.replaceAll("\\Q[\\E", "");
		saveFileDocDocIds = saveFileDocDocIds.replaceAll("\\Q]\\E", "");
		saveFileDocDocIds = saveFileDocDocIds.replaceAll("\"", "'");
		
		saveOtherDocIds = saveOtherDocIds.replaceAll("\\Q[\\E", "");
		saveOtherDocIds = saveOtherDocIds.replaceAll("\\Q]\\E", "");
		saveOtherDocIds = saveOtherDocIds.replaceAll("\"", "'");
		
		
		
		log.debug("saveCancelReason={}, saveCentitlementDocIds={}, saveCourtDocDocIds={}, saveCashierCheckDocIds={},"
				+ "saveDebtsDocIds={}, saveClaimsDocDocIds={}, saveDebtsDocIds={}, saveClaimsDocDocIds={},"
				+ "saveFileDocDocIds={}, saveOtherDocIds  ={}, saveBorrowDocIds = {} ,", 
				saveCancelReason, saveCentitlementDocIds, saveCourtDocDocIds, saveCashierCheckDocIds, saveDebtsDocIds,
				saveClaimsDocDocIds, saveFileDocDocIds, saveOtherDocIds, saveBorrowDocIds);
		
	
		
		//狀態改為取消借調
		if(saveType.equals("0")){
			
				
			if(saveBorrowDocIds != null && !saveBorrowDocIds.equals("")){
					docBorrowDao.saveToUpdateBorrowListStatus(saveBorrowDocIds,"4", saveCancelReason);
			}
		
			if(saveCentitlementDocIds != null && !saveCentitlementDocIds.equals("") && saveCentitlementDocIds.isEmpty() != true){
				docDao.saveToUpdateDocStatus("L_DOC_CENTITLEMENT","'8a8081f75ddfcd9e015de3f07b3c0038'",saveCentitlementDocIds);
			}
			
			if(saveCourtDocDocIds != null && !saveCourtDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_COURT_DOC","'8a8081f75ddfcd9e015de3f07b3c0038'",saveCourtDocDocIds);
			}
			
			if(saveCashierCheckDocIds != null && !saveCashierCheckDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CASHIERCHECK","'8a8081f75ddfcd9e015de3f07b3c0038'",saveCashierCheckDocIds);
			}
			
			if(saveDebtsDocIds != null && !saveDebtsDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_DEBTS","'8a8081f75ddfcd9e015de3f07b3c0038'",saveDebtsDocIds);
			}

			if(saveClaimsDocDocIds != null && !saveClaimsDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_CLAIMSDOC","'8a8081f75ddfcd9e015de3f07b3c0038'",saveClaimsDocDocIds);
			}

			if(saveFileDocDocIds != null && !saveFileDocDocIds.equals("")){
				docDao.saveToUpdateDocStatus("L_DOC_FILEDOCS","'8a8081f75ddfcd9e015de3f07b3c0038'",saveFileDocDocIds);
			}

			if(saveOtherDocIds != null && !saveOtherDocIds.equals("")){
			docDao.saveToUpdateDocStatus("L_DOC_OTHERDOCS","'8a8081f75ddfcd9e015de3f07b3c0038'",saveOtherDocIds);
			}
			
			jsonResponse.addProperty("success", "success");
			jsonResponse.addProperty("msg", "取消申調成功");
		
	}
		return jsonResponse.toString();
	}	
}
