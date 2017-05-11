package com.myjs.doc.documents.service;

import java.util.List;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.doc.documents.Dao.docDao;
import com.myjs.cek.recordcheckform.Dao.recordcheckformDao;

public class docServiceImpl implements docService{
	private recordcheckformDao recordcheckformDao;
	private docDao docDao;
	
	public recordcheckformDao getRecordcheckformDao() {
		return recordcheckformDao;
	}

	public void setRecordcheckformDao(recordcheckformDao recordcheckformDao) {
		this.recordcheckformDao = recordcheckformDao;
	}

	public docDao getDocDao() {
		return docDao;
	}

	public void setDocDao(docDao docDao) {
		this.docDao = docDao;
	}

	public List<LCekSignedCaseInfo> findByProperty(String caseId, String debtorName, String debtorId, String docNo,
			String legalCaseId){
		return recordcheckformDao.findCaseByproperties(caseId, debtorName, debtorId, docNo, legalCaseId);
	}
}
