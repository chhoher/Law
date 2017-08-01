package com.myjs.doc.borrow.Action;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.commons.AbstractAction;
import com.myjs.doc.borrow.service.docBorrowService;

public class docBorrowAction extends AbstractAction {
	/**
	 * 
	 */
	private static final long serialVersionUID = 6536856803657785433L;

	private static final Logger log = LogManager.getLogger(docBorrowAction.class);
	
	private docBorrowService docBorrowService;
	
	public docBorrowService getDocBorrowService() {
		return docBorrowService;
	}

	public void setDocBorrowService(docBorrowService docBorrowService) {
		this.docBorrowService = docBorrowService;
	}

	/**
	 * Add By Jia 2017-08-01 
	 * 初始化調卷下拉選單
	 */
	public String initMoveDocSelectOption(){
		try{
			log.debug("=====initMoveDocSelectOption start=====");
			String returnValue = docBorrowService.findMoveDocSelectOption();
			
			log.debug("returnValue = {}", returnValue);
			printToResponse(returnValue);
		}catch(Exception e){
			sendException(e);
			log.error("initMoveDocSelectOption error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-08-01
	 * 查詢申調清單
	 * @return
	 */
	public String loadborrowDocs(){
		try{
			log.debug("=====loadborrowDocs start=====");
			String responseLDocBorrow = docBorrowService.findMoveDoc();
			
			log.debug("responseLDocBorrow = {}", responseLDocBorrow);
			printToResponse(responseLDocBorrow);
		}catch(Exception e){
			sendException(e);
			log.error("loadborrowDocs error msg==>", e);
		}
		return NONE;
	}
}
