package com.myjs.doc.documents.service;

import java.util.List;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;

public interface docService {
	public List<LCekSignedCaseInfo> findByProperty(String caseId, String debtorName, String debtorId, String docNo,
			String legalCaseId);
}
