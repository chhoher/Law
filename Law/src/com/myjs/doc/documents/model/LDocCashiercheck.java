package com.myjs.doc.documents.model;

import java.util.Date;
import java.util.List;

public class LDocCashiercheck {
	private int cashiercheckId;
	private String infoId;
	private int caseId;
	private Date receivedDate;
	private Date bankDate;
	private String docStatus;
	private String typeOne;
	private String typeTwo;
	private String bankName;
	private String oldBankName;
	private String relationPerson;
	private Date startDate;
	private int amount;
	private Date endDate;
	private String remark;
	private Date createDatetime;
	private String createUserId;
	private String borrowReason;
	private String borrowInfo;
	
	// add By Jia 2017-06-28 Vo
	private List<LDocCashiercheckRela> cashiercheckRelationPerson;

	public LDocCashiercheck(int cashiercheckId, String infoId, int caseId, Date receivedDate, Date bankDate,
			String docStatus, String typeOne, String typeTwo, String bankName, String oldBankName,
			String relationPerson, Date startDate, int amount, Date endDate, String remark, Date createDatetime,
			String createUserId) {
		this.cashiercheckId = cashiercheckId;
		this.infoId = infoId;
		this.caseId = caseId;
		this.receivedDate = receivedDate;
		this.bankDate = bankDate;
		this.docStatus = docStatus;
		this.typeOne = typeOne;
		this.typeTwo = typeTwo;
		this.bankName = bankName;
		this.oldBankName = oldBankName;
		this.relationPerson = relationPerson;
		this.startDate = startDate;
		this.amount = amount;
		this.endDate = endDate;
		this.remark = remark;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
	}

	public int getCashiercheckId() {
		return cashiercheckId;
	}

	public void setCashiercheckId(int cashiercheckId) {
		this.cashiercheckId = cashiercheckId;
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

	public String getOldBankName() {
		return oldBankName;
	}

	public void setOldBankName(String oldBankName) {
		this.oldBankName = oldBankName;
	}

	public String getRelationPerson() {
		return relationPerson;
	}

	public void setRelationPerson(String relationPerson) {
		this.relationPerson = relationPerson;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
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

	public List<LDocCashiercheckRela> getCashiercheckRelationPerson() {
		return cashiercheckRelationPerson;
	}

	public void setCashiercheckRelationPerson(List<LDocCashiercheckRela> cashiercheckRelationPerson) {
		this.cashiercheckRelationPerson = cashiercheckRelationPerson;
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
	
	
}
