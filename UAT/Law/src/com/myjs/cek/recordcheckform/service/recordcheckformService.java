package com.myjs.cek.recordcheckform.service;

import java.util.List;

import com.google.gson.JsonObject;
import com.myjs.cek.recordcheckform.model.LCekRecordCheckform;
import com.myjs.cek.recordcheckform.model.LCekRecordSigned;
import com.myjs.cek.recordcheckform.model.LCekRecordSignedStep;
import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.sys.user.model.VEIPMemdb;

public interface recordcheckformService {
	public List<LCekRecordCheckform> findByProperty(String startDate, String endDate, String applyUserId, String status,
			VEIPMemdb loginUser, String roleIds) throws Exception;
	public LCekSignedCaseInfo findCaseByCaseId(String caseId) throws Exception;
	public List<LCekSignedRelaInfo> findRelaByCaseId(String caseId) throws Exception;
	public String saveSignedform(LCekRecordSigned LCekRecordSigned, LCekRecordCheckform LCekRecordCheckform,
			String type, VEIPMemdb loginUser, String[] saveselectOhterFiles, String[] stepPay, String[] stepPayStartDate, 
			String[] stepPayEndDate, String[] saveUploadFilesIds, String[] saveUploadFilesPathName) throws Exception;
	public LCekRecordSigned findRecordSignedById(String signedId) throws Exception;
	public LCekRecordSignedStep findRecordSignedStepById(String signedId) throws Exception;
	public JsonObject downloadSignedFile(String fileTypeOne, String fileTypeTwo, String signedId, LCekRecordSigned lcs) throws Exception;
	public JsonObject downloadOverPrintSignedFile(String fileTypeOne, String fileTypeTwo, String signedId, LCekRecordSigned lcs) throws Exception;
	public JsonObject findOtherFilesByCaseId(String signedId, String caseId, String type, String userId) throws Exception;
	/**
	 * add By Jia 2017-07-10
	 * 查詢已上傳檔案
	 */
	public JsonObject selectedSignedFiles(String signedId) throws Exception;
	/**
	 * add By Jia 2017-07-11
	 * 刪除選擇簽呈附檔
	 */
	public String deleteSelectSignedFile(String recordFileId) throws Exception;
}
