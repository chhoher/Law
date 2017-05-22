package com.myjs.cek.recordcheckform.Dao;

import java.util.List;

import com.myjs.cek.recordcheckform.model.LCekRecordCheckform;
import com.myjs.cek.recordcheckform.model.LCekRecordFile;
import com.myjs.cek.recordcheckform.model.LCekRecordOtherfile;
import com.myjs.cek.recordcheckform.model.LCekRecordSigned;
import com.myjs.cek.recordcheckform.model.LCekRecordSignedStep;
import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;

public interface recordcheckformDao {
	public List<LCekRecordCheckform> findAll();
	public List<LCekRecordCheckform> findbyproperties(String startDate,	String endDate, String applyUserId, String status);
	public LCekSignedCaseInfo findCaseByCaseId(String caseId);
	public List<LCekSignedRelaInfo> findRelaByCaseId(String caseId);
	public boolean save(LCekRecordSigned transientInstance) ;
	public boolean merge(LCekRecordSigned transientInstance) ;
	public boolean save(LCekRecordCheckform transientInstance) ;
	public boolean save(LCekRecordSignedStep transientInstance) ;
	public LCekRecordSigned findRecordSignedById(String SignedId);
	public LCekRecordSignedStep findRecordSignedStepById(String SignedId);
	public boolean saveRecordFile(LCekRecordFile transientInstance) ;
	public List<LCekSignedCaseInfo> findCaseByproperties(String caseId, String debtorName, 
			String debtorId, String docNo, String legalCaseId, boolean isCheck);
	public boolean saveRecordOtherfile(LCekRecordOtherfile transientInstance);
	public List<LCekRecordFile> findbysignedId(String signedId);
}
