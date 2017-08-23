package com.myjs.doc.documents.model;

import java.util.Date;

public class LDocOtherdocs {
	private String bankId;
	private String gProdId;
	private String gProdName;
	private String debtID;
	private String debtName;
	private int otherdocsId;
	private String infoId;
	private int caseId;
	private Date receivedDate;
	private Date bankDate;
	private String appointmentLetterCode;
	private String docStatus;
	private String typeOne;
	private String typeTwo;
	private String bankName;
	private String receiptType;
	private int receiptAmount;
	private Date courtDate;
	private String remark;
	private Date createDatetime;
	private String createUserId;
	private String borrowReason;
	private String borrowInfo;
	
	// add By Jia 2017-08-14 Vo
	private String disTypeOne;
	private String disTypeTwo;
	private String disDocStatus;
	private String tempCount;
	
	public LDocOtherdocs(){
		
	}
	
	public LDocOtherdocs(String bankId, String gProdId, String gProdName, String debtID, String debtName,
			int otherdocsId, String infoId, int caseId, Date receivedDate, Date bankDate, String appointmentLetterCode,
			String docStatus, String typeOne, String typeTwo, String bankName, String receiptType, int receiptAmount,
			Date courtDate, String remark, Date createDatetime, String createUserId, String borrowReason,
			String borrowInfo) {
		super();
		this.bankId = bankId;
		this.gProdId = gProdId;
		this.gProdName = gProdName;
		this.debtID = debtID;
		this.debtName = debtName;
		this.otherdocsId = otherdocsId;
		this.infoId = infoId;
		this.caseId = caseId;
		this.receivedDate = receivedDate;
		this.bankDate = bankDate;
		this.appointmentLetterCode = appointmentLetterCode;
		this.docStatus = docStatus;
		this.typeOne = typeOne;
		this.typeTwo = typeTwo;
		this.bankName = bankName;
		this.receiptType = receiptType;
		this.receiptAmount = receiptAmount;
		this.courtDate = courtDate;
		this.remark = remark;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
		this.borrowReason = borrowReason;
		this.borrowInfo = borrowInfo;
	}

	public LDocOtherdocs(int otherdocsId, String infoId, int caseId, Date receivedDate, Date bankDate, String docStatus,
			String typeOne, String typeTwo, String bankName, String receiptType, int receiptAmount, Date courtDate,
			String remark, Date createDatetime, String createUserId) {
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
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
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

	public Date getReceivedDate() {
		return receivedDate;
	}

	public void setReceivedDate(Date receivedDate) {
		this.receivedDate = receivedDate;
	}

	public Date getBankDate() {
		return bankDate;
	}

	public void setBankDate(Date bankDate) {
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

	public Date getCourtDate() {
		return courtDate;
	}

	public void setCourtDate(Date courtDate) {
		this.courtDate = courtDate;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public Date getCreateDatetime() {
		return createDatetime;
	}

	public void setCreateDatetime(Date createDatetime) {
		this.createDatetime = createDatetime;
	}

	public String getCreateUserId() {
		return createUserId;
	}

	public void setCreateUserId(String createUserId) {
		this.createUserId = createUserId;
	}

	public String getBorrowReason() {
		return borrowReason;
	}

	public void setBorrowReason(String borrowReason) {
		this.borrowReason = borrowReason;
	}

	public String getBorrowInfo() {
		return borrowInfo;
	}

	public void setBorrowInfo(String borrowInfo) {
		this.borrowInfo = borrowInfo;
	}

	public String getAppointmentLetterCode() {
		return appointmentLetterCode;
	}

	public void setAppointmentLetterCode(String appointmentLetterCode) {
		this.appointmentLetterCode = appointmentLetterCode;
	}

	public String getBankId() {
		return bankId;
	}

	public void setBankId(String bankId) {
		this.bankId = bankId;
	}

	public String getgProdId() {
		return gProdId;
	}

	public void setgProdId(String gProdId) {
		this.gProdId = gProdId;
	}

	public String getgProdName() {
		return gProdName;
	}

	public void setgProdName(String gProdName) {
		this.gProdName = gProdName;
	}

	public String getDebtID() {
		return debtID;
	}

	public void setDebtID(String debtID) {
		this.debtID = debtID;
	}

	public String getDebtName() {
		return debtName;
	}

	public void setDebtName(String debtName) {
		this.debtName = debtName;
	}

	public String getDisTypeOne() {
		return disTypeOne;
	}

	public void setDisTypeOne(String disTypeOne) {
		this.disTypeOne = disTypeOne;
	}

	public String getDisTypeTwo() {
		return disTypeTwo;
	}

	public void setDisTypeTwo(String disTypeTwo) {
		this.disTypeTwo = disTypeTwo;
	}

	public String getDisDocStatus() {
		return disDocStatus;
	}

	public void setDisDocStatus(String disDocStatus) {
		this.disDocStatus = disDocStatus;
	}

	public String getTempCount() {
		return tempCount;
	}

	public void setTempCount(String tempCount) {
		this.tempCount = tempCount;
	}
	
}
