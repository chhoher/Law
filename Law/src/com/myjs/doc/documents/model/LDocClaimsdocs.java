package com.myjs.doc.documents.model;

import java.util.Date;
import java.util.List;

public class LDocClaimsdocs {

	private String bankId;
	private String gProdId;
	private String gProdName;
	private String debtID;
	private String debtName;
	private int claimsdocsId;
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
	private int quota;
	private String interestRate;
	private String remark;
	private Date createDatetime;
	private String createUserId;
	private String createUserName;
	private String borrowReason;
	private String borrowInfo;
	
	// add By Jia 2017-06-28 Vo
	private List<LDocClaimsdocsRela> claimsRelationPerson;
	private String disTypeOne;
	private String disTypeTwo;
	private String disDocStatus;
	private String tempCount;
	
	public LDocClaimsdocs(){
		
	}
	
	public LDocClaimsdocs(String bankId, String gProdId, String gProdName, String debtID, String debtName,
			int claimsdocsId, String infoId, int caseId, Date receivedDate, Date bankDate, String docStatus,
			String typeOne, String typeTwo, String bankName, String oldBankName, String relationPerson, int quota,
			String interestRate, String remark, Date createDatetime, String createUserId, String borrowReason,
			String borrowInfo, List<LDocClaimsdocsRela> claimsRelationPerson) {
		this.bankId = bankId;
		this.gProdId = gProdId;
		this.gProdName = gProdName;
		this.debtID = debtID;
		this.debtName = debtName;
		this.claimsdocsId = claimsdocsId;
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
		this.quota = quota;
		this.interestRate = interestRate;
		this.remark = remark;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
		this.borrowReason = borrowReason;
		this.borrowInfo = borrowInfo;
		this.claimsRelationPerson = claimsRelationPerson;
	}

	public LDocClaimsdocs(int claimsdocsId, String infoId, int caseId, Date receivedDate, Date bankDate,
			String docStatus, String typeOne, String typeTwo, String bankName, String oldBankName,
			String relationPerson, int quota, String interestRate, String remark, Date createDatetime,
			String createUserId) {
		super();
		this.claimsdocsId = claimsdocsId;
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
		this.quota = quota;
		this.interestRate = interestRate;
		this.remark = remark;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
	}

	public int getClaimsdocsId() {
		return claimsdocsId;
	}

	public void setClaimsdocsId(int claimsdocsId) {
		this.claimsdocsId = claimsdocsId;
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

	public int getQuota() {
		return quota;
	}

	public void setQuota(int quota) {
		this.quota = quota;
	}

	public String getInterestRate() {
		return interestRate;
	}

	public void setInterestRate(String interestRate) {
		this.interestRate = interestRate;
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

	public List<LDocClaimsdocsRela> getClaimsRelationPerson() {
		return claimsRelationPerson;
	}

	public void setClaimsRelationPerson(List<LDocClaimsdocsRela> claimsRelationPerson) {
		this.claimsRelationPerson = claimsRelationPerson;
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

	public String getCreateUserName() {
		return createUserName;
	}

	public void setCreateUserName(String createUserName) {
		this.createUserName = createUserName;
	}


}
