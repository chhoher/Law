package com.myjs.doc.documents.service;

import java.util.List;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;

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
	public String saveaddDoc(String saveDocInfo, String saveOtherdoc) throws Exception;
}
