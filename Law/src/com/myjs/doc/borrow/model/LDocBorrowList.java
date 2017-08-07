package com.myjs.doc.borrow.model;

import java.util.Date;

public class LDocBorrowList {
	private String borrowDocId;
	private String borrowUserName;
	private String borrowUserId;
	private Date borrowDatetime;
	private int caseId;
	private String debtName;
	private String ID;
	private String docCode;
	private String borrowStatus; // 0:申調 1:取消 2:借出 3:歸還
	private String borrowReason;
	private int lawCode;
	private Date modifyDatetime;
	private String modifyUserId;
	private String modifyUserName;
	private String borrowInfo;
	private String docType;//這個放英文代號
	private int docId;
	private Date borrowBackDate;
	private String borrowBackReason;
	private Date borrowToCourtDate;
	private int borrowToCourtLawCode;
	private String borrowCourtYearCourt;
	private int borrowCourtYearYear;
	private String borrowCourtYearTxt;
	private int borrowCourtYearCaseId;
	private String borrowCourtYearShare;
	private String borrowCommonReason;
	private int borrowSubLawCode;			
	private Date progressDatetime;
	private String progressUserId;
	private String progressUserName;
	
	//add By Jia 2017-08-01 Vo
	private int rowNum;
	private String bankName;
	private String prodName;
	private String courtYearInfo;
	private String sourceDocInfo;
	private String O_C;
	private String docStatus;
	private String typeOne;
	private String typeTwo;
	private String shareCaseId;
	private String disProgressDatetime;
	private String checkBox;
	
	public String getBorrowDocId() {
		return borrowDocId;
	}
	public void setBorrowDocId(String borrowDocId) {
		this.borrowDocId = borrowDocId;
	}
	public String getBorrowUserName() {
		return borrowUserName;
	}
	public void setBorrowUserName(String borrowUserName) {
		this.borrowUserName = borrowUserName;
	}
	public String getBorrowUserId() {
		return borrowUserId;
	}
	public void setBorrowUserId(String borrowUserId) {
		this.borrowUserId = borrowUserId;
	}
	public Date getBorrowDatetime() {
		return borrowDatetime;
	}
	public void setBorrowDatetime(Date borrowDatetime) {
		this.borrowDatetime = borrowDatetime;
	}
	public int getCaseId() {
		return caseId;
	}
	public void setCaseId(int caseId) {
		this.caseId = caseId;
	}
	public String getDebtName() {
		return debtName;
	}
	public void setDebtName(String debtName) {
		this.debtName = debtName;
	}
	public String getID() {
		return ID;
	}
	public void setID(String iD) {
		ID = iD;
	}
	public String getDocCode() {
		return docCode;
	}
	public void setDocCode(String docCode) {
		this.docCode = docCode;
	}
	public String getBorrowStatus() {
		return borrowStatus;
	}
	public void setBorrowStatus(String borrowStatus) {
		this.borrowStatus = borrowStatus;
	}
	public String getBorrowReason() {
		return borrowReason;
	}
	public void setBorrowReason(String borrowReason) {
		this.borrowReason = borrowReason;
	}
	public int getLawCode() {
		return lawCode;
	}
	public void setLawCode(int lawCode) {
		this.lawCode = lawCode;
	}
	public Date getModifyDatetime() {
		return modifyDatetime;
	}
	public void setModifyDatetime(Date modifyDatetime) {
		this.modifyDatetime = modifyDatetime;
	}
	public String getModifyUserId() {
		return modifyUserId;
	}
	public void setModifyUserId(String modifyUserId) {
		this.modifyUserId = modifyUserId;
	}
	public String getModifyUserName() {
		return modifyUserName;
	}
	public void setModifyUserName(String modifyUserName) {
		this.modifyUserName = modifyUserName;
	}
	public String getBorrowInfo() {
		return borrowInfo;
	}
	public void setBorrowInfo(String borrowInfo) {
		this.borrowInfo = borrowInfo;
	}
	public String getDocType() {
		return docType;
	}
	public void setDocType(String docType) {
		this.docType = docType;
	}
	public int getDocId() {
		return docId;
	}
	public void setDocId(int docId) {
		this.docId = docId;
	}
	public int getRowNum() {
		return rowNum;
	}
	public void setRowNum(int rowNum) {
		this.rowNum = rowNum;
	}
	public String getBankName() {
		return bankName;
	}
	public void setBankName(String bankName) {
		this.bankName = bankName;
	}
	public String getProdName() {
		return prodName;
	}
	public void setProdName(String prodName) {
		this.prodName = prodName;
	}
	public String getCourtYearInfo() {
		return courtYearInfo;
	}
	public void setCourtYearInfo(String courtYearInfo) {
		this.courtYearInfo = courtYearInfo;
	}
	public String getSourceDocInfo() {
		return sourceDocInfo;
	}
	public void setSourceDocInfo(String sourceDocInfo) {
		this.sourceDocInfo = sourceDocInfo;
	}
	public String getO_C() {
		return O_C;
	}
	public void setO_C(String o_C) {
		O_C = o_C;
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
	public String getShareCaseId() {
		return shareCaseId;
	}
	public void setShareCaseId(String shareCaseId) {
		this.shareCaseId = shareCaseId;
	}
	public Date getBorrowBackDate() {
		return borrowBackDate;
	}
	public void setBorrowBackDate(Date borrowBackDate) {
		this.borrowBackDate = borrowBackDate;
	}
	public String getBorrowBackReason() {
		return borrowBackReason;
	}
	public void setBorrowBackReason(String borrowBackReason) {
		this.borrowBackReason = borrowBackReason;
	}
	public Date getBorrowToCourtDate() {
		return borrowToCourtDate;
	}
	public void setBorrowToCourtDate(Date borrowToCourtDate) {
		this.borrowToCourtDate = borrowToCourtDate;
	}
	public int getBorrowToCourtLawCode() {
		return borrowToCourtLawCode;
	}
	public void setBorrowToCourtLawCode(int borrowToCourtLawCode) {
		this.borrowToCourtLawCode = borrowToCourtLawCode;
	}
	public String getBorrowCourtYearCourt() {
		return borrowCourtYearCourt;
	}
	public void setBorrowCourtYearCourt(String borrowCourtYearCourt) {
		this.borrowCourtYearCourt = borrowCourtYearCourt;
	}
	public int getBorrowCourtYearYear() {
		return borrowCourtYearYear;
	}
	public void setBorrowCourtYearYear(int borrowCourtYearYear) {
		this.borrowCourtYearYear = borrowCourtYearYear;
	}
	public String getBorrowCourtYearTxt() {
		return borrowCourtYearTxt;
	}
	public void setBorrowCourtYearTxt(String borrowCourtYearTxt) {
		this.borrowCourtYearTxt = borrowCourtYearTxt;
	}
	public int getBorrowCourtYearCaseId() {
		return borrowCourtYearCaseId;
	}
	public void setBorrowCourtYearCaseId(int borrowCourtYearCaseId) {
		this.borrowCourtYearCaseId = borrowCourtYearCaseId;
	}
	public String getBorrowCourtYearShare() {
		return borrowCourtYearShare;
	}
	public void setBorrowCourtYearShare(String borrowCourtYearShare) {
		this.borrowCourtYearShare = borrowCourtYearShare;
	}
	public String getBorrowCommonReason() {
		return borrowCommonReason;
	}
	public void setBorrowCommonReason(String borrowCommonReason) {
		this.borrowCommonReason = borrowCommonReason;
	}
	public int getBorrowSubLawCode() {
		return borrowSubLawCode;
	}
	public void setBorrowSubLawCode(int borrowSubLawCode) {
		this.borrowSubLawCode = borrowSubLawCode;
	}
	public Date getProgressDatetime() {
		return progressDatetime;
	}
	public void setProgressDatetime(Date progressDatetime) {
		this.progressDatetime = progressDatetime;
	}
	public String getProgressUserId() {
		return progressUserId;
	}
	public void setProgressUserId(String progressUserId) {
		this.progressUserId = progressUserId;
	}
	public String getProgressUserName() {
		return progressUserName;
	}
	public void setProgressUserName(String progressUserName) {
		this.progressUserName = progressUserName;
	}
	public String getDisProgressDatetime() {
		return disProgressDatetime;
	}
	public void setDisProgressDatetime(String disProgressDatetime) {
		this.disProgressDatetime = disProgressDatetime;
	}
	public String getCheckBox() {
		return checkBox;
	}
	public void setCheckBox(String checkBox) {
		this.checkBox = checkBox;
	}
	
	
}
