package com.myjs.doc.documents.service;

import java.util.List;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.sys.user.model.VEIPMemdb;

public interface docService {
	public List<LCekSignedCaseInfo> findByProperty(String caseId, String debtorName, String debtorId, String docNo,
			String legalCaseId) throws Exception;
	
	/**
	 * add By Jia 2017-06-07
	 * 帶出Doc相關選項
	 */
	public String findDocaddSelectOption() throws Exception;
	
	/**
	 * add By Jia 2017-06-21
	 * 將文管新增的內容轉換後新增到DB
	 * @throws Exception 
	 */
	public String saveaddDoc(String docInfoId, VEIPMemdb loginMemdb, String caseId, String saveDocInfo,
			String saveCashierCheck, String saveDebts, String saveClaimsdoc, String saveFiledoc, String saveOtherdoc) throws Exception;
	
	/**
	 * add By Jia 2017-06-22
	 * 新增一筆docInfo
	 * @throws Exception
	 */
	public String saveaddDocInfo(VEIPMemdb loginUser, String caseId) throws Exception;
	
	/**
	 * add By Jia 2017-06-27
	 * 查詢相關人by caseId
	 * @throws Exception
	 */
	public List<LCekSignedRelaInfo> findRelaByCaseId(String caseId) throws Exception;
}
