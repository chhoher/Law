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
	public List<LCekRecordCheckform> findAll() throws Exception;
	public List<LCekRecordCheckform> findbyproperties(String startDate,	String endDate, String applyUserId, String status, String recevidUserId) throws Exception;
	public LCekSignedCaseInfo findCaseByCaseId(String caseId) throws Exception;
	public List<LCekSignedRelaInfo> findRelaByCaseId(String caseId) throws Exception;
	public boolean save(LCekRecordSigned transientInstance) throws Exception ;
	public boolean merge(LCekRecordSigned transientInstance) throws Exception ;
	public boolean save(LCekRecordCheckform transientInstance) throws Exception ;
	public void save(LCekRecordSignedStep transientInstance) throws Exception ;
	public LCekRecordSigned findRecordSignedById(String SignedId) throws Exception;
	public LCekRecordSignedStep findRecordSignedStepById(String SignedId) throws Exception;
	public boolean saveRecordFile(LCekRecordFile transientInstance) throws Exception ;
	public List<LCekSignedCaseInfo> findCaseByproperties(String caseId, String debtorName, 
			String debtorId, String docNo, String legalCaseId, boolean isCheck) throws Exception;
	public boolean saveRecordOtherfile(LCekRecordOtherfile transientInstance) throws Exception;
	public List<LCekRecordFile> findbysignedId(String signedId) throws Exception;
	public boolean insertCaseNote(int caseId,String checkformId) throws Exception;
	public List<LCekRecordOtherfile> findSelectedOtherFiles(String signedId) throws Exception;
	
	/**
	 * add By Jia 2017-07-11
	 * update LCekRecordFile 狀態和所屬表單
	 */
	public boolean updateLCekRecordFile(String recordCheckformId, String recordFileIds) throws Exception;
	/**
	 * add By Jia 2017-07-11
	 * 刪除選擇LCekRecordFile
	 * isDelete = 'Y'
	 */
	public boolean deleteLCekRecordFile(String recordFileIds) throws Exception;
}
