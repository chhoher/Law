package com.myjs.doc.documents.model;

import java.util.Date;

public class LDocInfo {
	private String docInfoId;
	private int caseId;
	private String createUserId;
	private Date createDatetime;
	
	public LDocInfo(String docInfoId, int caseId, String createUserId,
			Date createDatetime) {
		this.docInfoId = docInfoId;
		this.caseId = caseId;
		this.createUserId = createUserId;
		this.createDatetime = createDatetime;
	}

	public String getDocInfoId() {
		return docInfoId;
	}

	public void setDocInfoId(String docInfoId) {
		this.docInfoId = docInfoId;
	}

	public int getCaseId() {
		return caseId;
	}

	public void setCaseId(int caseId) {
		this.caseId = caseId;
	}

	public String getCreateUserId() {
		return createUserId;
	}

	public void setCreateUserId(String createUserId) {
		this.createUserId = createUserId;
	}

	public Date getCreateDatetime() {
		return createDatetime;
	}

	public void setCreateDatetime(Date createDatetime) {
		this.createDatetime = createDatetime;
	}
	
}
