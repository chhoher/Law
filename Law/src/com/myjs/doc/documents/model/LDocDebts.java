package com.myjs.doc.documents.model;

import java.util.Date;
import java.util.List;

public class LDocDebts {
	private int debtsId;
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
	private String courtYearCourt;
	private int courtYearYear;
	private String courtYearTxt;
	private String courtYearShare;
	private int courtYearCaseId;
	private Date debtsDate;
	private String remark;
	private Date createDatetime;
	private String createUserId;
	
	// add By Jia 2017-06-28 Vo
	private List<LDocDebtsRela> debtsRelationPerson;

	public LDocDebts(int debtsId, String infoId, int caseId, Date receivedDate, Date bankDate, String docStatus,
			String typeOne, String typeTwo, String bankName, String oldBankName, String relationPerson,
			String courtYearCourt, int courtYearYear, String courtYearTxt, String courtYearShare,
			int courtYearCaseId, Date debtsDate, String remark, Date createDatetime, String createUserId) {
		this.debtsId = debtsId;
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
		this.courtYearCourt = courtYearCourt;
		this.courtYearYear = courtYearYear;
		this.courtYearTxt = courtYearTxt;
		this.courtYearShare = courtYearShare;
		this.courtYearCaseId = courtYearCaseId;
		this.debtsDate = debtsDate;
		this.remark = remark;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
	}

	public int getDebtsId() {
		return debtsId;
	}

	public void setDebtsId(int debtsId) {
		this.debtsId = debtsId;
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

	public String getCourtYearCourt() {
		return courtYearCourt;
	}

	public void setCourtYearCourt(String courtYearCourt) {
		this.courtYearCourt = courtYearCourt;
	}

	public int getCourtYearYear() {
		return courtYearYear;
	}

	public void setCourtYearYear(int courtYearYear) {
		this.courtYearYear = courtYearYear;
	}

	public String getCourtYearTxt() {
		return courtYearTxt;
	}

	public void setCourtYearTxt(String courtYearTxt) {
		this.courtYearTxt = courtYearTxt;
	}

	public String getCourtYearShare() {
		return courtYearShare;
	}

	public void setCourtYearShare(String courtYearShare) {
		this.courtYearShare = courtYearShare;
	}

	public int getCourtYearCaseId() {
		return courtYearCaseId;
	}

	public void setCourtYearCaseId(int courtYearCaseId) {
		this.courtYearCaseId = courtYearCaseId;
	}

	public Date getDebtsDate() {
		return debtsDate;
	}

	public void setDebtsDate(Date debtsDate) {
		this.debtsDate = debtsDate;
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

	public List<LDocDebtsRela> getDebtsRelationPerson() {
		return debtsRelationPerson;
	}

	public void setDebtsRelationPerson(List<LDocDebtsRela> debtsRelationPerson) {
		this.debtsRelationPerson = debtsRelationPerson;
	}

	
}
