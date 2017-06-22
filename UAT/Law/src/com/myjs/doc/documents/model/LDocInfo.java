package com.myjs.doc.documents.model;

import java.util.Date;

public class LDocInfo {
	private int docInfoId;
	private int caseId;
	private String bankName;
	private String debtName;
	private String debtID;
	private String createUserId;
	private Date createDatetime;
	
	public LDocInfo(int docInfoId, int caseId, String bankName, String debtName, String debtID, String createUserId,
			Date createDatetime) {
		this.docInfoId = docInfoId;
		this.caseId = caseId;
		this.bankName = bankName;
		this.debtName = debtName;
		this.debtID = debtID;
		this.createUserId = createUserId;
		this.createDatetime = createDatetime;
	}

	public int getDocInfoId() {
		return docInfoId;
	}

	public void setDocInfoId(int docInfoId) {
		this.docInfoId = docInfoId;
	}

	public int getCaseId() {
		return caseId;
	}

	public void setCaseId(int caseId) {
		this.caseId = caseId;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getDebtName() {
		return debtName;
	}

	public void setDebtName(String debtName) {
		this.debtName = debtName;
	}

	public String getDebtID() {
		return debtID;
	}

	public void setDebtID(String debtID) {
		this.debtID = debtID;
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
