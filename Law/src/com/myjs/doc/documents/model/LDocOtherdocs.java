package com.myjs.doc.documents.model;

import java.util.Date;

public class LDocOtherdocs {
	private int otherdocsId;
	private String infoId;
	private int caseId;
	private String receivedDate;
	private String bankDate;
	private String docStatus;
	private String typeOne;
	private String typeTwo;
	private String bankName;
	private String receiptType;
	private int receiptAmount;
	private String courtDate;
	private String remark;
	
	public LDocOtherdocs(int otherdocsId, String infoId, int caseId, String receivedDate, String bankDate, String docStatus,
			String typeOne, String typeTwo, String bankName, String receiptType, int receiptAmount, String courtDate,
			String remark) {
		this.otherdocsId = otherdocsId;
		this.infoId = infoId;
		this.caseId = caseId;
		this.receivedDate = receivedDate;
		this.bankDate = bankDate;
		this.docStatus = docStatus;
		this.typeOne = typeOne;
		this.typeTwo = typeTwo;
		this.bankName = bankName;
		this.receiptType = receiptType;
		this.receiptAmount = receiptAmount;
		this.courtDate = courtDate;
		this.remark = remark;
	}

	public int getOtherdocsId() {
		return otherdocsId;
	}

	public void setOtherdocsId(int otherdocsId) {
		this.otherdocsId = otherdocsId;
	}

	public String getInfoId() {
		return infoId;
	}

	public void setInfoId(String infoId) {
		this.infoId = infoId;
	}

	public int getCaseId() {
		return caseId;
	}

	public void setCaseId(int caseId) {
		this.caseId = caseId;
	}

	public String getReceivedDate() {
		return receivedDate;
	}

	public void setReceivedDate(String receivedDate) {
		this.receivedDate = receivedDate;
	}

	public String getBankDate() {
		return bankDate;
	}

	public void setBankDate(String bankDate) {
		this.bankDate = bankDate;
	}

	public String getDocStatus() {
		return docStatus;
	}

	public void setDocStatus(String docStatus) {
		this.docStatus = docStatus;
	}

	public String getTypeOne() {
		return typeOne;
	}

	public void setTypeOne(String typeOne) {
		this.typeOne = typeOne;
	}

	public String getTypeTwo() {
		return typeTwo;
	}

	public void setTypeTwo(String typeTwo) {
		this.typeTwo = typeTwo;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	public String getReceiptType() {
		return receiptType;
	}

	public void setReceiptType(String receiptType) {
		this.receiptType = receiptType;
	}

	public int getReceiptAmount() {
		return receiptAmount;
	}

	public void setReceiptAmount(int receiptAmount) {
		this.receiptAmount = receiptAmount;
	}

	public String getCourtDate() {
		return courtDate;
	}

	public void setCourtDate(String courtDate) {
		this.courtDate = courtDate;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}
	
}
