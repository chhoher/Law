package com.myjs.doc.borrow.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.commons.SaveParameter;
import com.myjs.doc.documents.Dao.docDao;
import com.myjs.doc.borrow.Dao.docBorrowDao;
import com.myjs.doc.borrow.model.LDocBorrowList;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.sys.variable.model.LSysVariable;

public class docBorrowServiceImpl implements docBorrowService{
	private static final Logger log = LogManager.getLogger(docBorrowServiceImpl.class);
	private docDao docDao;
	private docBorrowDao docBorrowDao;
	
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
	
	public String findMoveDoc(String caseId, String bankName, String isInStore, String debtName, 
			String borrowReason, String docStatus, String ID, String borrowStartDate, 
			String borrowEndDate, String docCode, String borrowUserName) throws Exception{
		
		List<LDocBorrowList> ListLDocInfo = docBorrowDao.findBorrowDoc(caseId, bankName, isInStore, debtName, 
				borrowReason, docStatus, ID, borrowStartDate, borrowEndDate, docCode, borrowUserName);
		JsonObject jsonResponse = new JsonObject();
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd hh:mm:ss").create();
		jsonResponse.add("responseLDocBorrow", gson.toJsonTree(ListLDocInfo));
		return jsonResponse.toString();
		
	}
}
