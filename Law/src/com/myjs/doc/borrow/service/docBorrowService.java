package com.myjs.doc.borrow.service;


public interface docBorrowService {
	
	/**
	 * add By Jia 2017-08-01
	 * 帶出調卷相關選項
	 */
	public String findMoveDocSelectOption() throws Exception;
	
	/**
	 * add By Jia 2017-08-01
	 * 查詢申調清單
	 * @return
	 * @throws Exception
	 */
	public String findMoveDoc(String caseId, String bankName, String isInStore, String debtName, 
			String borrowReason, String docStatus, String ID, String borrowStartDate, 
			String borrowEndDate, String docCode, String borrowUserName) throws Exception;
	
}
