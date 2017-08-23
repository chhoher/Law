package com.myjs.doc.borrow.Action;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.commons.AbstractAction;
import com.myjs.doc.borrow.service.docBorrowService;
import com.myjs.sys.user.model.VEIPMemdb;

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
			
			log.debug("loadBorrowDocs queryInfo");
			String type = super.getRequest().getParameter("type"); // 0 : 調卷, 1 : 調卷簽收
			String caseId = super.getRequest().getParameter("caseId"),
					bankName = super.getRequest().getParameter("bankName"),
					isInStore = super.getRequest().getParameter("isInStore"),
					debtName = super.getRequest().getParameter("debtName"),
					borrowReason = super.getRequest().getParameter("borrowReason"),
					docStatus = super.getRequest().getParameter("docStatus"),
					ID = super.getRequest().getParameter("ID"),
					borrowStartDate = super.getRequest().getParameter("borrowStartDate"),
					borrowEndDate = super.getRequest().getParameter("borrowEndDate"),
					docCode = super.getRequest().getParameter("docCode"),
					borrowUserName = super.getRequest().getParameter("borrowUserName");
			
			log.debug("type = {} ", type);
			
			log.debug("caseId = {}, bankName = {}, isInStore = {}, debtName = {}, borrowReason = {}, "
					+ "docStatus = {}, ID = {}, borrowStartDate = {}, borrowEndDate = {}, docCode = {}, borrowUserName = {}", 
					caseId, bankName, isInStore, debtName, borrowReason, docStatus, ID, borrowStartDate, 
					borrowEndDate, docCode, borrowUserName);
			
			String responseLDocBorrow = "";
			if(type != null && !type.equals("")){
				//調卷
				if(type.equals("0")){
					responseLDocBorrow = docBorrowService.findMoveDoc(0, caseId, bankName, isInStore, debtName, 
							borrowReason, docStatus, ID, borrowStartDate, borrowEndDate, docCode, borrowUserName);
				//調卷簽收 
				}else if(type.equals("1")){
					responseLDocBorrow = docBorrowService.findMoveDoc(1, caseId, bankName, isInStore, debtName, 
							borrowReason, docStatus, ID, borrowStartDate, borrowEndDate, docCode, borrowUserName);
				//申請借調
				}else if(type.equals("2") || type.equals("I")){
					
					//剛進入"申請借調"交易時，以使用者姓名查詢
					if (type.equals("I")) {
						VEIPMemdb loginUser = getSessionLoginUser();
						borrowUserName = loginUser.getMemnm();
						
					}
					responseLDocBorrow = docBorrowService.findMoveDoc(2, caseId, bankName, isInStore, debtName, 
							borrowReason, docStatus, ID, borrowStartDate, borrowEndDate, docCode, borrowUserName);
				}
			}
			
			
			
			log.debug("responseLDocBorrow = {}", responseLDocBorrow);
			printToResponse(responseLDocBorrow);
		}catch(Exception e){
			sendException(e);
			log.error("loadborrowDocs error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * add By Jia 2017-08-07 調卷的匯出Excel
	 * @return
	 */
	public String printMoveDocs(){
		try{
			log.debug("printMoveDocs start");
			String type = super.getRequest().getParameter("printType");
			// type = 0 : 調卷匯出excel, type = 1 : 調卷簽收匯出excel, type=2 :申請借調列印明細
			String printMoveDocString = super.getRequest().getParameter("printMoveDocInfo");
			
			log.debug("printMoveDocString = {}, type = {}", printMoveDocString, type);
			String response = docBorrowService.printMoveDocs(type, printMoveDocString, getpath());
			
			log.debug("response = {}", response);
			printToResponse(response);
		}catch(Exception e){
			sendException(e);
			log.error("printMoveDocs error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * add By Jia 2017-08-07
	 * 確認調出
	 * 讓文件狀態docStatus更改為"已借出"
	 * 申調狀態borrowStatus改為2 "借出"
	 * @return
	 */
	public String saveMoveDocs(){
		try{
			log.debug("saveMoveDocs start");
			
			String saveCentitlementDocIds = super.getRequest().getParameter("saveCentitlementDocIds"), 
					saveCourtDocDocIds = super.getRequest().getParameter("saveCourtDocDocIds"), 
					saveCashierCheckDocIds = super.getRequest().getParameter("saveCashierCheckDocIds"),
					saveDebtsDocIds = super.getRequest().getParameter("saveDebtsDocIds"),
					saveClaimsDocDocIds = super.getRequest().getParameter("saveClaimsDocDocIds"), 
					saveFileDocDocIds = super.getRequest().getParameter("saveFileDocDocIds"), 
					saveOtherDocIds = super.getRequest().getParameter("saveOtherDocIds"), 
					saveBorrowDocIds = super.getRequest().getParameter("saveBorrowDocIds"),
					updateType = super.getRequest().getParameter("updateType");//動作 0 : 確定調卷, 1 : 取消借調, 2 : 調卷簽收, 3 : 取消調卷
			
			log.debug("saveCentitlementDocIds = {}, saveCourtDocDocIds = {}, saveCashierCheckDocIds = {}, saveDebtsDocIds = {}, " +
					"saveClaimsDocDocIds = {}, saveFileDocDocIds = {}, saveOtherDocIds = {}, saveBorrowDocIds = {}", saveCentitlementDocIds, 
					saveCourtDocDocIds, saveCashierCheckDocIds, saveDebtsDocIds, saveClaimsDocDocIds, 
					saveFileDocDocIds, saveOtherDocIds, saveBorrowDocIds);
			
			String response = docBorrowService.saveMoveDocs(updateType, saveCentitlementDocIds, 
					saveCourtDocDocIds, saveCashierCheckDocIds, saveDebtsDocIds, saveClaimsDocDocIds, 
					saveFileDocDocIds, saveOtherDocIds, saveBorrowDocIds);
			
			log.debug("response = {}", response);
			printToResponse(response);
			
		}catch(Exception e){
			sendException(e);
			log.error("saveMoveDocs error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-08-07
	 * 初始化調卷簽收下拉選單
	 */
	public String initMoveCheckDocSelectOption(){
		try{
			log.debug("=====initMoveCheckDocSelectOption start=====");
			String returnValue = docBorrowService.findMoveCheckDocSelectOption();
			
			log.debug("returnValue = {}", returnValue);
			printToResponse(returnValue);
		}catch(Exception e){
			sendException(e);
			log.error("initMoveCheckDocSelectOption error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * Add By Jia 2017-08-07
	 * 上傳檔案(大批退件)
	 * @return
	 */
	public String batchBackfilesupload(){
		try{
			log.debug("=====loadborrowDocs start=====");
			
			log.debug("loadBorrowDocs queryInfo");
			String type = "0"; // 0 : 調卷, 1 : 調卷簽收
			String caseId = super.getRequest().getParameter("caseId"),
					bankName = super.getRequest().getParameter("bankName"),
					isInStore = super.getRequest().getParameter("isInStore"),
					debtName = super.getRequest().getParameter("debtName"),
					borrowReason = super.getRequest().getParameter("borrowReason"),
					docStatus = super.getRequest().getParameter("docStatus"),
					ID = super.getRequest().getParameter("ID"),
					borrowStartDate = super.getRequest().getParameter("borrowStartDate"),
					borrowEndDate = super.getRequest().getParameter("borrowEndDate"),
					docCode = super.getRequest().getParameter("docCode"),
					borrowUserName = super.getRequest().getParameter("borrowUserName");
			
			log.debug("type = {} ", type);
			
			log.debug("caseId = {}, bankName = {}, isInStore = {}, debtName = {}, borrowReason = {}, "
					+ "docStatus = {}, ID = {}, borrowStartDate = {}, borrowEndDate = {}, docCode = {}, borrowUserName = {}", 
					caseId, bankName, isInStore, debtName, borrowReason, docStatus, ID, borrowStartDate, 
					borrowEndDate, docCode, borrowUserName);
			
			String responseLDocBorrow = "";
			if(type != null && !type.equals("")){
				if(type.equals("0")){
					responseLDocBorrow = docBorrowService.findMoveDoc(0, caseId, bankName, isInStore, debtName, 
							borrowReason, docStatus, ID, borrowStartDate, borrowEndDate, docCode, borrowUserName);
				}else if(type.equals("1")){
					responseLDocBorrow = docBorrowService.findMoveDoc(1, caseId, bankName, isInStore, debtName, 
							borrowReason, docStatus, ID, borrowStartDate, borrowEndDate, docCode, borrowUserName);
				}
			}
			
			
			
			log.debug("responseLDocBorrow = {}", responseLDocBorrow);
			printToResponse(responseLDocBorrow);
		}catch(Exception e){
			sendException(e);
			log.error("batchBackfilesupload error msg==>", e);
		}
		return NONE;
	}
	//申請借調-狀態改為取消借調，並記錄取消借調原因
	public String saveCancelMoveDocs(){
		try{
			log.debug("saveCancelMoveDocs start");
			String saveCentitlementDocIds = super.getRequest().getParameter("saveCentitlementDocIds"), 
					saveCourtDocDocIds = super.getRequest().getParameter("saveCourtDocDocIds"), 
					saveCashierCheckDocIds = super.getRequest().getParameter("saveCashierCheckDocIds"),
					saveDebtsDocIds = super.getRequest().getParameter("saveDebtsDocIds"),
					saveClaimsDocDocIds = super.getRequest().getParameter("saveClaimsDocDocIds"), 
					saveFileDocDocIds = super.getRequest().getParameter("saveFileDocDocIds"), 
					saveOtherDocIds = super.getRequest().getParameter("saveOtherDocIds"), 
					saveBorrowDocIds = super.getRequest().getParameter("saveBorrowDocIds"),
					saveCancelReason = super.getRequest().getParameter("saveCancelReason"),
					updateType = super.getRequest().getParameter("updateType");//動作 0 : 確定調卷, 1 : 取消借調, 2 : 調卷簽收, 3 : 取消調卷
			
			log.debug("saveCentitlementDocIds = {}, saveCourtDocDocIds = {}, saveCashierCheckDocIds = {}, saveDebtsDocIds = {}, " +
					"saveClaimsDocDocIds = {}, saveFileDocDocIds = {}, saveOtherDocIds = {}, saveBorrowDocIds = {}", saveCentitlementDocIds, 
					saveCourtDocDocIds, saveCashierCheckDocIds, saveDebtsDocIds, saveClaimsDocDocIds, 
					saveFileDocDocIds, saveOtherDocIds, saveBorrowDocIds);
			
			
			
			log.debug("updateType = {},saveCancelReason = {},saveCentitlementDocIds = {}, saveCourtDocDocIds = {}, saveCashierCheckDocIds = {}, " +
					" saveDebtsDocIds = {}, saveClaimsDocDocIds = {}, saveFileDocDocIds = {}, saveOtherDocIds = {}, saveBorrowDocIds = {}",
					updateType,saveCancelReason, saveCentitlementDocIds, saveCourtDocDocIds, saveCashierCheckDocIds, 
					saveDebtsDocIds, saveClaimsDocDocIds, saveFileDocDocIds, saveOtherDocIds, saveBorrowDocIds);
			
			String response = docBorrowService.saveCancelDocs(updateType, saveCancelReason, 
					saveCentitlementDocIds, saveCourtDocDocIds, saveCashierCheckDocIds, saveDebtsDocIds, 
					saveClaimsDocDocIds, saveFileDocDocIds, saveOtherDocIds, saveBorrowDocIds);
			
			log.debug("response = {}", response);
			printToResponse(response);
			
		}catch(Exception e){
			sendException(e);
			log.error("saveCancelMoveDocs error msg==>", e);
		}
		return NONE;
	}
}
