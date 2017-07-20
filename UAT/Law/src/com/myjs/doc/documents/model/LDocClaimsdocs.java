package com.myjs.doc.documents.model;

import java.util.Date;
import java.util.List;

public class LDocClaimsdocs {
	
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
	private int interestRate;
	private String remark;
	private Date createDatetime;
	private String createUserId;
	
	// add By Jia 2017-06-28 Vo
	private List<LDocClaimsdocsRela> claimsRelationPerson;
	
	public LDocClaimsdocs(){
		
	}
	
	public LDocClaimsdocs(int claimsdocsId, String infoId, int caseId, Date receivedDate, Date bankDate,
			String docStatus, String typeOne, String typeTwo, String bankName, String oldBankName,
			String relationPerson, int quota, int interestRate, String remark, Date createDatetime,
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

	public int getInterestRate() {
		return interestRate;
	}

	public void setInterestRate(int interestRate) {
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


}
