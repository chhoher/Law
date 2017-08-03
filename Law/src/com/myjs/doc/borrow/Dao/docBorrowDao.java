package com.myjs.doc.borrow.Dao;

import java.util.List;

import com.myjs.doc.borrow.model.LDocBorrowHistory;
import com.myjs.doc.borrow.model.LDocBorrowList;

/**
 * add By Jia 2017-08-01 文管申調相關DAO
 * @author JiaJia
 *
 */
public interface docBorrowDao {
	
	/**
	 * 文管歷史紀錄儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocBorrowHistory transientInstance) throws Exception;

	/**
	 * 文管申調清單儲存
	 * @param transientInstance
	 * @return
	 * @throws Exception
	 */
	public boolean save(LDocBorrowList transientInstance) throws Exception;
	
	/**
	 * 文管申調清單查詢
	 * @param caseId
	 * @param bankName
	 * @param isInStore
	 * @param debtName
	 * @param borrowReason
	 * @param docStatus
	 * @param ID
	 * @param borrowStartDate
	 * @param borrowEndDate
	 * @param docCode
	 * @param borrowUserName
	 * @return
	 * @throws Exception
	 */
	public List<LDocBorrowList> findBorrowDoc(String caseId, String bankName, 
			String isInStore, String debtName, String borrowReason, String docStatus, 	String ID, 
			String borrowStartDate, String borrowEndDate, String docCode, String borrowUserName) throws Exception;
}
