package com.myjs.doc.documents.model;

import java.util.Date;
import java.util.List;

public class LDocCentitlement {
	private String bankId;
	private String gProdId;
	private String gProdName;
	private String debtID;
	private String debtName;
	private int centitlementId;
	private String infoId;
	private int caseId;
	private String shareCaseId0;
	private String shareCaseId1;
	private String shareCaseId2;
	private String shareCaseId3;
	private String shadow; // null : 沒有勾， 0 : 影本 ， 1 : 業主收文僅提供影本
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
	// add By Jia 2017-07-14 原始憑證
	private String sourceDoc;
	private Date sendDate;
	private Date newSendDate;
	private String remark;
	private Date createDatetime;
	private String createUserId;
	
	private String borrowReason;
	private String borrowInfo;
	
	// add By Jia 2017-08-14 Vo
	private String disDocStatus;
	private String disTypeOne;
	private String disTypeTwo;
	private String disCourtYearCourt;
	private String tempCount;
	
	//相對人
	private List<LDocCentitlementRela> centitlementRelationPerson;
	
	// 原始憑證
	private List<LDocCentitlementSourceDoc> centitlementSourceDoc;

	public LDocCentitlement(){
		
	}
	
	public LDocCentitlement(String bankId, String gProdId, String gProdName, String debtID, String debtName,
			int centitlementId, String infoId, int caseId, String shareCaseId0, String shareCaseId1,
			String shareCaseId2, String shareCaseId3, String shadow, Date receivedDate, Date bankDate, String docStatus,
			String typeOne, String typeTwo, String bankName, String oldBankName, String relationPerson,
			String courtYearCourt, int courtYearYear, String courtYearTxt, String courtYearShare, int courtYearCaseId,
			String sourceDoc, Date sendDate, Date newSendDate, String remark, Date createDatetime, String createUserId,
			String borrowReason, String borrowInfo, List<LDocCentitlementSourceDoc> centitlementSourceDoc) {
		this.bankId = bankId;
		this.gProdId = gProdId;
		this.gProdName = gProdName;
		this.debtID = debtID;
		this.debtName = debtName;
		this.centitlementId = centitlementId;
		this.infoId = infoId;
		this.caseId = caseId;
		this.shareCaseId0 = shareCaseId0;
		this.shareCaseId1 = shareCaseId1;
		this.shareCaseId2 = shareCaseId2;
		this.shareCaseId3 = shareCaseId3;
		this.shadow = shadow;
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
		this.sourceDoc = sourceDoc;
		this.sendDate = sendDate;
		this.newSendDate = newSendDate;
		this.remark = remark;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
		this.borrowReason = borrowReason;
		this.borrowInfo = borrowInfo;
		this.centitlementSourceDoc = centitlementSourceDoc;
	}

	public LDocCentitlement(int centitlementId, String infoId, int caseId, String shareCaseId0, String shareCaseId1,
			String shareCaseId2, String shareCaseId3, String shadow, Date receivedDate, Date bankDate, String docStatus,
			String typeOne, String typeTwo, String bankName, String oldBankName, String relationPerson,
			String courtYearCourt, int courtYearYear, String courtYearTxt, String courtYearShare, int courtYearCaseId,
			String sourceDoc, Date sendDate, Date newSendDate, String remark, Date createDatetime,
			String createUserId) {
		this.centitlementId = centitlementId;
		this.infoId = infoId;
		this.caseId = caseId;
		this.shareCaseId0 = shareCaseId0;
		this.shareCaseId1 = shareCaseId1;
		this.shareCaseId2 = shareCaseId2;
		this.shareCaseId3 = shareCaseId3;
		this.shadow = shadow;
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
		this.sourceDoc = sourceDoc;
		this.sendDate = sendDate;
		this.newSendDate = newSendDate;
		this.remark = remark;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
	}

	public int getCentitlementId() {
		return centitlementId;
	}

	public void setCentitlementId(int centitlementId) {
		this.centitlementId = centitlementId;
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

	public String getShareCaseId0() {
		return shareCaseId0;
	}

	public void setShareCaseId0(String shareCaseId0) {
		this.shareCaseId0 = shareCaseId0;
	}

	public String getShareCaseId1() {
		return shareCaseId1;
	}

	public void setShareCaseId1(String shareCaseId1) {
		this.shareCaseId1 = shareCaseId1;
	}

	public String getShareCaseId2() {
		return shareCaseId2;
	}

	public void setShareCaseId2(String shareCaseId2) {
		this.shareCaseId2 = shareCaseId2;
	}

	public String getShareCaseId3() {
		return shareCaseId3;
	}

	public void setShareCaseId3(String shareCaseId3) {
		this.shareCaseId3 = shareCaseId3;
	}

	public String getShadow() {
		return shadow;
	}

	public void setShadow(String shadow) {
		this.shadow = shadow;
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

	public String getSourceDoc() {
		return sourceDoc;
	}

	public void setSourceDoc(String sourceDoc) {
		this.sourceDoc = sourceDoc;
	}

	public Date getSendDate() {
		return sendDate;
	}

	public void setSendDate(Date sendDate) {
		this.sendDate = sendDate;
	}

	public Date getNewSendDate() {
		return newSendDate;
	}

	public void setNewSendDate(Date newSendDate) {
		this.newSendDate = newSendDate;
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

	public List<LDocCentitlementSourceDoc> getCentitlementSourceDoc() {
		return centitlementSourceDoc;
	}

	public void setCentitlementSourceDoc(List<LDocCentitlementSourceDoc> centitlementSourceDoc) {
		this.centitlementSourceDoc = centitlementSourceDoc;
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

	public String getDisDocStatus() {
		return disDocStatus;
	}

	public void setDisDocStatus(String disDocStatus) {
		this.disDocStatus = disDocStatus;
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

	public String getDisCourtYearCourt() {
		return disCourtYearCourt;
	}

	public void setDisCourtYearCourt(String disCourtYearCourt) {
		this.disCourtYearCourt = disCourtYearCourt;
	}

	public String getTempCount() {
		return tempCount;
	}

	public void setTempCount(String tempCount) {
		this.tempCount = tempCount;
	}

	public List<LDocCentitlementRela> getCentitlementRelationPerson() {
		return centitlementRelationPerson;
	}

	public void setCentitlementRelationPerson(List<LDocCentitlementRela> centitlementRelationPerson) {
		this.centitlementRelationPerson = centitlementRelationPerson;
	}

	
}
