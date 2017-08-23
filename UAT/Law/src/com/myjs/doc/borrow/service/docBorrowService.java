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
	public String findMoveDoc(int type, String caseId, String bankName, String isInStore, String debtName, 
			String borrowReason, String docStatus, String ID, String borrowStartDate, 
			String borrowEndDate, String docCode, String borrowUserName) throws Exception;
	
	/**
	 * add By Jia 2017-08-07
	 * 匯出調卷excel
	 * @param type
	 * @param printMoveDocString
	 * @param uploadPath
	 * @return
	 * @throws Exception
	 */
	public String printMoveDocs(String type, String printMoveDocString, String uploadPath) throws Exception;
	
	/**
	 * add By Jia 2017-08-07
	 * 儲存修改borrowList狀態和文件狀態
	 * @param saveType
	 * @param saveCentitlementDocIds
	 * @param saveCourtDocDocIds
	 * @param saveCashierCheckDocIds
	 * @param saveDebtsDocIds
	 * @param saveClaimsDocDocIds
	 * @param saveFileDocDocIds
	 * @param saveOtherDocIds
	 * @param saveBorrowDocIds
	 * @return
	 * @throws Exception
	 */
	public String saveMoveDocs(String saveType,String saveCentitlementDocIds, String saveCourtDocDocIds, 
			String saveCashierCheckDocIds, String saveDebtsDocIds, String saveClaimsDocDocIds, 
			String saveFileDocDocIds, String saveOtherDocIds, String saveBorrowDocIds) throws Exception;
	
	/**
	 * add By Jia 2017-08-07
	 * 帶出調卷簽收相關選項
	 */
	public String findMoveCheckDocSelectOption() throws Exception;
	
	
	public String saveCancelDocs(String saveType,String saveCancelReason, String saveCentitlementDocIds, 
			String saveCourtDocDocIds, String saveCashierCheckDocIds, String saveDebtsDocIds, 
			String saveClaimsDocDocIds, String saveFileDocDocIds, String saveOtherDocIds, String saveBorrowDocIds) 
					throws Exception;

}
