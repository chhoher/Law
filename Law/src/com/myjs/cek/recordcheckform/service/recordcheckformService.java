package com.myjs.cek.recordcheckform.service;

import java.util.List;

import com.google.gson.JsonObject;
import com.myjs.cek.recordcheckform.model.LCekRecordCheckform;
import com.myjs.cek.recordcheckform.model.LCekRecordFile;
import com.myjs.cek.recordcheckform.model.LCekRecordSigned;
import com.myjs.cek.recordcheckform.model.LCekRecordSignedStep;
import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.sys.user.model.VEIPMemdb;

public interface recordcheckformService {
	public List<LCekRecordCheckform> findByProperty(String startDate, String endDate, String applyUserId, String status,
			VEIPMemdb loginUser, String roleIds);
	public LCekSignedCaseInfo findCaseByCaseId(String caseId);
	public List<LCekSignedRelaInfo> findRelaByCaseId(String caseId);
	public String saveSignedform(LCekRecordSigned LCekRecordSigned, LCekRecordCheckform LCekRecordCheckform,
			String type, List<LCekRecordFile> LCekRecordFile, String userId, String[] saveselectOhterFiles, String[] stepPay);
	public LCekRecordSigned findRecordSignedById(String signedId);
	public LCekRecordSignedStep findRecordSignedStepById(String signedId);
	public JsonObject downloadSignedFile(String fileTypeOne, String fileTypeTwo, String signedId, LCekRecordSigned lcs);
	public JsonObject findOtherFilesByCaseId(String signedId, String caseId, String type, String userId);
}
