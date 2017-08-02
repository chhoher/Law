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
	private String shadow;
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
	
	// add By Jia 2017-07-13 補正
	// 戶謄
	private int transcriptsDays;
	private String transcriptsRemark;
	private String transcriptsRelationPerson;
	// 共有人戶謄
	private int coOwnedTranscriptsDays;
	private String coOwnedTranscriptsRemark;
	private String coOwnedTranscriptsRelationPerson;
	// 抵押權人戶謄
	private int mortgageeTranscriptsDays;
	private String mortgageeTranscriptsRemark;
	private String mortgageeTranscriptsRelationPerson;
	// 法代戶謄
	private int lawTranscriptsDays;
	private String lawTranscriptsRemark;
	private String lawTranscriptsRelationPerson;
	// 繼承人戶謄
	private int heirTranscriptsDays;
	private String heirTranscriptsRemark;
	private String heirTranscriptsRelationPerson;
	// 土謄
	private int dirtTranscriptsDays;
	private String dirtTranscriptsRemark;
	private String dirtTranscriptsRelationPerson;
	// 建謄
	private int builtTranscriptsDays;
	private String builtTranscriptsRemark;
	private String builtTranscriptsRelationPerson;
	// 分配表
	private int distributionDays;
	private String distributionRemark;
	private String distributionRelationPerson;
	// 事項表(第三人)
	private int thingThirdDays;
	private String thingThirdRemark;
	private String thingThirdRelationPerson;
	// 事項表(債權人)
	private int thingDebtDays;
	private String thingDebtRemark;
	private String thingDebtRelationPerson;
	// 共有人名冊
	private int coOwnedDays;
	private String coOwnedRemark;
	private String coOwnedRelationPerson;
	// 債權文件
	private int debtDocDays;
	private String debtDocRemark;
	private String debtDocRelationPerson;
	// 帳務明細
	private int detailDays;
	private String detailRemark;
	private String detailRelationPerson;
	// 執行名義
	private int fileDays;
	private String fileRemark;
	private String fileRelationPerson;
	// 債證續行表
	private int debtContinueDays;
	private String debtContinueRemark;
	private String debtContinueRelationPerson;
	// 本票
	private int cashierCheckDays;
	private String cashierCheckRemark;
	private String cashierCheckRelationPerson;
	// 其他
	private String otherValues;
	private int otherDays;
	private String otherRemark;
	private String otherRelationPerson;
	private String edit;
	private String borrowReason;
	private String borrowInfo;
	
	// add By Jia 2017-07-13 Vo
	private List<LDocCentitlementRela> centitlementRelationPerson;
	private List<LDocCentitlementTranscriptsRela> centitlementTranscriptsRelationPerson;
	private List<LDocCentitlementCoOwnedTranscriptsRela> centitlementCoOwnedTranscriptsRelationPerson;
	private List<LDocCentitlementMortgageeTranscriptsRela> centitlementMortgageeTranscriptsRelationPerson;
	private List<LDocCentitlementLawTranscriptsRela> centitlementLawTranscriptsRelationPerson;
	private List<LDocCentitlementHeirTranscriptsRela> centitlementHeirTranscriptsRelationPerson;
	private List<LDocCentitlementDirtTranscriptsRela> centitlementDirtTranscriptsRelationPerson;
	private List<LDocCentitlementBuiltTranscriptsRela> centitlementBuiltTranscriptsRelationPerson;
	private List<LDocCentitlementDistributionRela> centitlementDistributionRelationPerson;
	private List<LDocCentitlementThingThirdRela> centitlementThingThirdRelationPerson;
	private List<LDocCentitlementThingDebtRela> centitlementThingDebtRelationPerson;
	private List<LDocCentitlementCoOwnedRela> centitlementCoOwnedRelationPerson;
	private List<LDocCentitlementDebtDocRela> centitlementDebtDocRelationPerson;
	private List<LDocCentitlementDetailRela> centitlementDetailRelationPerson;
	private List<LDocCentitlementFileRela> centitlementFileRelationPerson;
	private List<LDocCentitlementDebtContinueRela> centitlementDebtContinueRelationPerson;
	private List<LDocCentitlementCashierCheckRela> centitlementCashierCheckRelationPerson;
	private List<LDocCentitlementOtherRela> centitlementOtherRelationPerson;
	// 原始憑證
	private List<LDocCentitlementSourceDoc> centitlementSourceDoc;

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

	public List<LDocCentitlementRela> getCentitlementRelationPerson() {
		return centitlementRelationPerson;
	}

	public void setCentitlementRelationPerson(List<LDocCentitlementRela> centitlementRelationPerson) {
		this.centitlementRelationPerson = centitlementRelationPerson;
	}

	public int getTranscriptsDays() {
		return transcriptsDays;
	}

	public void setTranscriptsDays(int transcriptsDays) {
		this.transcriptsDays = transcriptsDays;
	}

	public String getTranscriptsRemark() {
		return transcriptsRemark;
	}

	public void setTranscriptsRemark(String transcriptsRemark) {
		this.transcriptsRemark = transcriptsRemark;
	}

	public String getTranscriptsRelationPerson() {
		return transcriptsRelationPerson;
	}

	public void setTranscriptsRelationPerson(String transcriptsRelationPerson) {
		this.transcriptsRelationPerson = transcriptsRelationPerson;
	}

	public int getCoOwnedTranscriptsDays() {
		return coOwnedTranscriptsDays;
	}

	public void setCoOwnedTranscriptsDays(int coOwnedTranscriptsDays) {
		this.coOwnedTranscriptsDays = coOwnedTranscriptsDays;
	}

	public String getCoOwnedTranscriptsRemark() {
		return coOwnedTranscriptsRemark;
	}

	public void setCoOwnedTranscriptsRemark(String coOwnedTranscriptsRemark) {
		this.coOwnedTranscriptsRemark = coOwnedTranscriptsRemark;
	}

	public String getCoOwnedTranscriptsRelationPerson() {
		return coOwnedTranscriptsRelationPerson;
	}

	public void setCoOwnedTranscriptsRelationPerson(String coOwnedTranscriptsRelationPerson) {
		this.coOwnedTranscriptsRelationPerson = coOwnedTranscriptsRelationPerson;
	}

	public int getMortgageeTranscriptsDays() {
		return mortgageeTranscriptsDays;
	}

	public void setMortgageeTranscriptsDays(int mortgageeTranscriptsDays) {
		this.mortgageeTranscriptsDays = mortgageeTranscriptsDays;
	}

	public String getMortgageeTranscriptsRemark() {
		return mortgageeTranscriptsRemark;
	}

	public void setMortgageeTranscriptsRemark(String mortgageeTranscriptsRemark) {
		this.mortgageeTranscriptsRemark = mortgageeTranscriptsRemark;
	}

	public String getMortgageeTranscriptsRelationPerson() {
		return mortgageeTranscriptsRelationPerson;
	}

	public void setMortgageeTranscriptsRelationPerson(String mortgageeTranscriptsRelationPerson) {
		this.mortgageeTranscriptsRelationPerson = mortgageeTranscriptsRelationPerson;
	}

	public int getLawTranscriptsDays() {
		return lawTranscriptsDays;
	}

	public void setLawTranscriptsDays(int lawTranscriptsDays) {
		this.lawTranscriptsDays = lawTranscriptsDays;
	}

	public String getLawTranscriptsRemark() {
		return lawTranscriptsRemark;
	}

	public void setLawTranscriptsRemark(String lawTranscriptsRemark) {
		this.lawTranscriptsRemark = lawTranscriptsRemark;
	}

	public String getLawTranscriptsRelationPerson() {
		return lawTranscriptsRelationPerson;
	}

	public void setLawTranscriptsRelationPerson(String lawTranscriptsRelationPerson) {
		this.lawTranscriptsRelationPerson = lawTranscriptsRelationPerson;
	}

	public int getHeirTranscriptsDays() {
		return heirTranscriptsDays;
	}

	public void setHeirTranscriptsDays(int heirTranscriptsDays) {
		this.heirTranscriptsDays = heirTranscriptsDays;
	}

	public String getHeirTranscriptsRemark() {
		return heirTranscriptsRemark;
	}

	public void setHeirTranscriptsRemark(String heirTranscriptsRemark) {
		this.heirTranscriptsRemark = heirTranscriptsRemark;
	}

	public String getHeirTranscriptsRelationPerson() {
		return heirTranscriptsRelationPerson;
	}

	public void setHeirTranscriptsRelationPerson(String heirTranscriptsRelationPerson) {
		this.heirTranscriptsRelationPerson = heirTranscriptsRelationPerson;
	}

	public int getDirtTranscriptsDays() {
		return dirtTranscriptsDays;
	}

	public void setDirtTranscriptsDays(int dirtTranscriptsDays) {
		this.dirtTranscriptsDays = dirtTranscriptsDays;
	}

	public String getDirtTranscriptsRemark() {
		return dirtTranscriptsRemark;
	}

	public void setDirtTranscriptsRemark(String dirtTranscriptsRemark) {
		this.dirtTranscriptsRemark = dirtTranscriptsRemark;
	}

	public String getDirtTranscriptsRelationPerson() {
		return dirtTranscriptsRelationPerson;
	}

	public void setDirtTranscriptsRelationPerson(String dirtTranscriptsRelationPerson) {
		this.dirtTranscriptsRelationPerson = dirtTranscriptsRelationPerson;
	}

	public int getBuiltTranscriptsDays() {
		return builtTranscriptsDays;
	}

	public void setBuiltTranscriptsDays(int builtTranscriptsDays) {
		this.builtTranscriptsDays = builtTranscriptsDays;
	}

	public String getBuiltTranscriptsRemark() {
		return builtTranscriptsRemark;
	}

	public void setBuiltTranscriptsRemark(String builtTranscriptsRemark) {
		this.builtTranscriptsRemark = builtTranscriptsRemark;
	}

	public String getBuiltTranscriptsRelationPerson() {
		return builtTranscriptsRelationPerson;
	}

	public void setBuiltTranscriptsRelationPerson(String builtTranscriptsRelationPerson) {
		this.builtTranscriptsRelationPerson = builtTranscriptsRelationPerson;
	}

	public int getDistributionDays() {
		return distributionDays;
	}

	public void setDistributionDays(int distributionDays) {
		this.distributionDays = distributionDays;
	}

	public String getDistributionRemark() {
		return distributionRemark;
	}

	public void setDistributionRemark(String distributionRemark) {
		this.distributionRemark = distributionRemark;
	}

	public String getDistributionRelationPerson() {
		return distributionRelationPerson;
	}

	public void setDistributionRelationPerson(String distributionRelationPerson) {
		this.distributionRelationPerson = distributionRelationPerson;
	}

	public int getThingThirdDays() {
		return thingThirdDays;
	}

	public void setThingThirdDays(int thingThirdDays) {
		this.thingThirdDays = thingThirdDays;
	}

	public String getThingThirdRemark() {
		return thingThirdRemark;
	}

	public void setThingThirdRemark(String thingThirdRemark) {
		this.thingThirdRemark = thingThirdRemark;
	}

	public String getThingThirdRelationPerson() {
		return thingThirdRelationPerson;
	}

	public void setThingThirdRelationPerson(String thingThirdRelationPerson) {
		this.thingThirdRelationPerson = thingThirdRelationPerson;
	}

	public int getThingDebtDays() {
		return thingDebtDays;
	}

	public void setThingDebtDays(int thingDebtDays) {
		this.thingDebtDays = thingDebtDays;
	}

	public String getThingDebtRemark() {
		return thingDebtRemark;
	}

	public void setThingDebtRemark(String thingDebtRemark) {
		this.thingDebtRemark = thingDebtRemark;
	}

	public String getThingDebtRelationPerson() {
		return thingDebtRelationPerson;
	}

	public void setThingDebtRelationPerson(String thingDebtRelationPerson) {
		this.thingDebtRelationPerson = thingDebtRelationPerson;
	}

	public int getCoOwnedDays() {
		return coOwnedDays;
	}

	public void setCoOwnedDays(int coOwnedDays) {
		this.coOwnedDays = coOwnedDays;
	}

	public String getCoOwnedRemark() {
		return coOwnedRemark;
	}

	public void setCoOwnedRemark(String coOwnedRemark) {
		this.coOwnedRemark = coOwnedRemark;
	}

	public String getCoOwnedRelationPerson() {
		return coOwnedRelationPerson;
	}

	public void setCoOwnedRelationPerson(String coOwnedRelationPerson) {
		this.coOwnedRelationPerson = coOwnedRelationPerson;
	}

	public int getDebtDocDays() {
		return debtDocDays;
	}

	public void setDebtDocDays(int debtDocDays) {
		this.debtDocDays = debtDocDays;
	}

	public String getDebtDocRemark() {
		return debtDocRemark;
	}

	public void setDebtDocRemark(String debtDocRemark) {
		this.debtDocRemark = debtDocRemark;
	}

	public String getDebtDocRelationPerson() {
		return debtDocRelationPerson;
	}

	public void setDebtDocRelationPerson(String debtDocRelationPerson) {
		this.debtDocRelationPerson = debtDocRelationPerson;
	}

	public int getDetailDays() {
		return detailDays;
	}

	public void setDetailDays(int detailDays) {
		this.detailDays = detailDays;
	}

	public String getDetailRemark() {
		return detailRemark;
	}

	public void setDetailRemark(String detailRemark) {
		this.detailRemark = detailRemark;
	}

	public String getDetailRelationPerson() {
		return detailRelationPerson;
	}

	public void setDetailRelationPerson(String detailRelationPerson) {
		this.detailRelationPerson = detailRelationPerson;
	}

	public int getFileDays() {
		return fileDays;
	}

	public void setFileDays(int fileDays) {
		this.fileDays = fileDays;
	}

	public String getFileRemark() {
		return fileRemark;
	}

	public void setFileRemark(String fileRemark) {
		this.fileRemark = fileRemark;
	}

	public String getFileRelationPerson() {
		return fileRelationPerson;
	}

	public void setFileRelationPerson(String fileRelationPerson) {
		this.fileRelationPerson = fileRelationPerson;
	}

	public int getDebtContinueDays() {
		return debtContinueDays;
	}

	public void setDebtContinueDays(int debtContinueDays) {
		this.debtContinueDays = debtContinueDays;
	}

	public String getDebtContinueRemark() {
		return debtContinueRemark;
	}

	public void setDebtContinueRemark(String debtContinueRemark) {
		this.debtContinueRemark = debtContinueRemark;
	}

	public String getDebtContinueRelationPerson() {
		return debtContinueRelationPerson;
	}

	public void setDebtContinueRelationPerson(String debtContinueRelationPerson) {
		this.debtContinueRelationPerson = debtContinueRelationPerson;
	}

	public int getCashierCheckDays() {
		return cashierCheckDays;
	}

	public void setCashierCheckDays(int cashierCheckDays) {
		this.cashierCheckDays = cashierCheckDays;
	}

	public String getCashierCheckRemark() {
		return cashierCheckRemark;
	}

	public void setCashierCheckRemark(String cashierCheckRemark) {
		this.cashierCheckRemark = cashierCheckRemark;
	}

	public String getCashierCheckRelationPerson() {
		return cashierCheckRelationPerson;
	}

	public void setCashierCheckRelationPerson(String cashierCheckRelationPerson) {
		this.cashierCheckRelationPerson = cashierCheckRelationPerson;
	}

	public String getOtherValues() {
		return otherValues;
	}

	public void setOtherValues(String otherValues) {
		this.otherValues = otherValues;
	}

	public int getOtherDays() {
		return otherDays;
	}

	public void setOtherDays(int otherDays) {
		this.otherDays = otherDays;
	}

	public String getOtherRemark() {
		return otherRemark;
	}

	public void setOtherRemark(String otherRemark) {
		this.otherRemark = otherRemark;
	}

	public String getOtherRelationPerson() {
		return otherRelationPerson;
	}

	public void setOtherRelationPerson(String otherRelationPerson) {
		this.otherRelationPerson = otherRelationPerson;
	}

	public String getEdit() {
		return edit;
	}

	public void setEdit(String edit) {
		this.edit = edit;
	}

	public List<LDocCentitlementTranscriptsRela> getCentitlementTranscriptsRelationPerson() {
		return centitlementTranscriptsRelationPerson;
	}

	public void setCentitlementTranscriptsRelationPerson(
			List<LDocCentitlementTranscriptsRela> centitlementTranscriptsRelationPerson) {
		this.centitlementTranscriptsRelationPerson = centitlementTranscriptsRelationPerson;
	}

	public List<LDocCentitlementCoOwnedTranscriptsRela> getCentitlementCoOwnedTranscriptsRelationPerson() {
		return centitlementCoOwnedTranscriptsRelationPerson;
	}

	public void setCentitlementCoOwnedTranscriptsRelationPerson(
			List<LDocCentitlementCoOwnedTranscriptsRela> centitlementCoOwnedTranscriptsRelationPerson) {
		this.centitlementCoOwnedTranscriptsRelationPerson = centitlementCoOwnedTranscriptsRelationPerson;
	}

	public List<LDocCentitlementMortgageeTranscriptsRela> getCentitlementMortgageeTranscriptsRelationPerson() {
		return centitlementMortgageeTranscriptsRelationPerson;
	}

	public void setCentitlementMortgageeTranscriptsRelationPerson(
			List<LDocCentitlementMortgageeTranscriptsRela> centitlementMortgageeTranscriptsRelationPerson) {
		this.centitlementMortgageeTranscriptsRelationPerson = centitlementMortgageeTranscriptsRelationPerson;
	}

	public List<LDocCentitlementLawTranscriptsRela> getCentitlementLawTranscriptsRelationPerson() {
		return centitlementLawTranscriptsRelationPerson;
	}

	public void setCentitlementLawTranscriptsRelationPerson(
			List<LDocCentitlementLawTranscriptsRela> centitlementLawTranscriptsRelationPerson) {
		this.centitlementLawTranscriptsRelationPerson = centitlementLawTranscriptsRelationPerson;
	}

	public List<LDocCentitlementHeirTranscriptsRela> getCentitlementHeirTranscriptsRelationPerson() {
		return centitlementHeirTranscriptsRelationPerson;
	}

	public void setCentitlementHeirTranscriptsRelationPerson(
			List<LDocCentitlementHeirTranscriptsRela> centitlementHeirTranscriptsRelationPerson) {
		this.centitlementHeirTranscriptsRelationPerson = centitlementHeirTranscriptsRelationPerson;
	}

	public List<LDocCentitlementDirtTranscriptsRela> getCentitlementDirtTranscriptsRelationPerson() {
		return centitlementDirtTranscriptsRelationPerson;
	}

	public void setCentitlementDirtTranscriptsRelationPerson(
			List<LDocCentitlementDirtTranscriptsRela> centitlementDirtTranscriptsRelationPerson) {
		this.centitlementDirtTranscriptsRelationPerson = centitlementDirtTranscriptsRelationPerson;
	}

	public List<LDocCentitlementBuiltTranscriptsRela> getCentitlementBuiltTranscriptsRelationPerson() {
		return centitlementBuiltTranscriptsRelationPerson;
	}

	public void setCentitlementBuiltTranscriptsRelationPerson(
			List<LDocCentitlementBuiltTranscriptsRela> centitlementBuiltTranscriptsRelationPerson) {
		this.centitlementBuiltTranscriptsRelationPerson = centitlementBuiltTranscriptsRelationPerson;
	}

	public List<LDocCentitlementDistributionRela> getCentitlementDistributionRelationPerson() {
		return centitlementDistributionRelationPerson;
	}

	public void setCentitlementDistributionRelationPerson(
			List<LDocCentitlementDistributionRela> centitlementDistributionRelationPerson) {
		this.centitlementDistributionRelationPerson = centitlementDistributionRelationPerson;
	}

	public List<LDocCentitlementThingThirdRela> getCentitlementThingThirdRelationPerson() {
		return centitlementThingThirdRelationPerson;
	}

	public void setCentitlementThingThirdRelationPerson(
			List<LDocCentitlementThingThirdRela> centitlementThingThirdRelationPerson) {
		this.centitlementThingThirdRelationPerson = centitlementThingThirdRelationPerson;
	}

	public List<LDocCentitlementThingDebtRela> getCentitlementThingDebtRelationPerson() {
		return centitlementThingDebtRelationPerson;
	}

	public void setCentitlementThingDebtRelationPerson(
			List<LDocCentitlementThingDebtRela> centitlementThingDebtRelationPerson) {
		this.centitlementThingDebtRelationPerson = centitlementThingDebtRelationPerson;
	}

	public List<LDocCentitlementCoOwnedRela> getCentitlementCoOwnedRelationPerson() {
		return centitlementCoOwnedRelationPerson;
	}

	public void setCentitlementCoOwnedRelationPerson(List<LDocCentitlementCoOwnedRela> centitlementCoOwnedRelationPerson) {
		this.centitlementCoOwnedRelationPerson = centitlementCoOwnedRelationPerson;
	}

	public List<LDocCentitlementDebtDocRela> getCentitlementDebtDocRelationPerson() {
		return centitlementDebtDocRelationPerson;
	}

	public void setCentitlementDebtDocRelationPerson(List<LDocCentitlementDebtDocRela> centitlementDebtDocRelationPerson) {
		this.centitlementDebtDocRelationPerson = centitlementDebtDocRelationPerson;
	}

	public List<LDocCentitlementDetailRela> getCentitlementDetailRelationPerson() {
		return centitlementDetailRelationPerson;
	}

	public void setCentitlementDetailRelationPerson(List<LDocCentitlementDetailRela> centitlementDetailRelationPerson) {
		this.centitlementDetailRelationPerson = centitlementDetailRelationPerson;
	}

	public List<LDocCentitlementFileRela> getCentitlementFileRelationPerson() {
		return centitlementFileRelationPerson;
	}

	public void setCentitlementFileRelationPerson(List<LDocCentitlementFileRela> centitlementFileRelationPerson) {
		this.centitlementFileRelationPerson = centitlementFileRelationPerson;
	}

	public List<LDocCentitlementDebtContinueRela> getCentitlementDebtContinueRelationPerson() {
		return centitlementDebtContinueRelationPerson;
	}

	public void setCentitlementDebtContinueRelationPerson(
			List<LDocCentitlementDebtContinueRela> centitlementDebtContinueRelationPerson) {
		this.centitlementDebtContinueRelationPerson = centitlementDebtContinueRelationPerson;
	}

	public List<LDocCentitlementCashierCheckRela> getCentitlementCashierCheckRelationPerson() {
		return centitlementCashierCheckRelationPerson;
	}

	public void setCentitlementCashierCheckRelationPerson(
			List<LDocCentitlementCashierCheckRela> centitlementCashierCheckRelationPerson) {
		this.centitlementCashierCheckRelationPerson = centitlementCashierCheckRelationPerson;
	}

	public List<LDocCentitlementOtherRela> getCentitlementOtherRelationPerson() {
		return centitlementOtherRelationPerson;
	}

	public void setCentitlementOtherRelationPerson(List<LDocCentitlementOtherRela> centitlementOtherRelationPerson) {
		this.centitlementOtherRelationPerson = centitlementOtherRelationPerson;
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

	
}
