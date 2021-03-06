package com.myjs.doc.documents.model;

import java.util.Date;
import java.util.List;

public class LDocInfo {
	private String docInfoId;
	private int caseId;
	private String createUserId;
	private Date createDatetime;
	
	// Add By Jia 2017-07-19 Vo
	private String applyBorrow;
	private String disApplyBorrow;
	private String editDoc;
	private String docStatus;
	private String disDocStatus;
	private String progress;
	private String imgFiles;
	private String bankDate;
	private String receivedDate;
	private String docCode;
	private String debtName;
	private String relaName;
	private String typeOne;
	private String typeTwo;
	private String courtYearCourt;
	private int courtYearYear;
	private String courtYearTxt;
	private String courtYearShare;
	private String courtYearCaseId;
	private String bankName;
	private String oldBankName;
	private String sourceDoc;
	private String sourceDocInfo;
	private String shareCaseId0;
	private String sendDate;
	private String newSendDate;
	private String remark;
	private String interestYear;
	private String interestDate;
	private String shadow;
	private String borrowInfo;
	private String modifyUserName;
	private String ruledDate;
	private int ruledAmount;
	private String applyConfirmationDate;
	private String receivedConfirmationDate;
	private String failureDate;
	private String thirdName;
	private String thirdAddress;
	private int distributionAmount;
	private String approvedDelayDate;
	private String delayEndDate;
	private String sectorDate;
    private String measureDate;
    private String valuationDate;
    private String rebirthDate;
    private String surveyDate;
    private String inquiryDate;
    private String firstSaleDate;
    private String secondSaleDate;
    private String thirdSaleDate;
    private String postBuyDate;
    private String postEndDate;
    private String reduceSaleDate;
    private String destoryDate;
    private String realDistributionDate;
    private String edit;
    private String report;
    private String pay;
    private String sendReport;
    private String toCourtDate;
    private String toCourtTime;
    private String toCourtType;
    private String toCourtNotice;
    private String executionDate;
    private String executionTime;
	private String cashierCheckStartDate;
	private int cashierCheckAmount;
    private String cashierCheckEndDate;
    private String debtsCourtYearInfo;
    private String debtsDate;
    private String claimsdocQuota;
    private String claimsDocInterestRate;
    private String otherReceiptType;
    private String otherReceiptAmount;
    private String otherCourtDate;

	// Add By Jia 2017-07-26 Vo
	private String prodName;
	private String ID;
	private String borrowReason;
	private String lawCode; // 遞狀的法院編號
	private String borrowDatetime;
	private String borrowUserId;
	private String borrowUserName;
	private String progressDatetime;
	private String progressUserId;
	private String progressUserName;
	private String checkDatetime;
	private String checkUserId;
	private String checkUserName;
	private String backDatetime;
	private String backUserId;
	private String backUserName;
	private String finalDatetime;
	private String finalUserId;
	private String finalUserName;
	private String businessAccount;
	private String business;
	private String rowNum;
	private String docId;
	private String docType;
	private String tempCount;
	
	// add by Jia 2017-08-16 申調的欄位 Vo
	private String borrowBackDate; // 退件(業主) 退件日期
	private String borrowBackReason; // 退件(業主) 退件原因
	private String borrowToCourtDate; // 開庭 開庭日期
	private String borrowToCourtLawCode; // 開庭 法務編號
	private String borrowCourtYearCourt; // 開庭 法院
	private String disBorrowCourtYearCourt; // 開庭 法院
	private String borrowCourtYearYear; // 開庭 年
	private String borrowCourtYearTxt; // 開庭字
	private String borrowCourtYearCaseId; // 開庭 案號
	private String borrowCourtYearShare; // 開庭 股
	private String borrowCommonReason; // 一般借調 原因
	private String borrowSubLawCode; // 預借 法務編號
	
	// add By Jia 2017-08-18 多項的 (相對人、原始憑證)Vo
	//相對人
	private List<LDocCentitlementRela> centitlementRelationPerson;
	// 原始憑證
	private List<LDocCentitlementSourceDoc> centitlementSourceDoc;
	private List<LDocClaimsdocsRela> claimsRelationPerson; // 債權文件相對人
	private List<LDocDebtsRela> debtsRelationPerson; // 債讓 相對人
	private List<LDocCashiercheckRela> cashiercheckRelationPerson; // 本票 相對人
	private List<LDocCourtDocRela> courtDocRelationPerson;// 法院文 相對人
	private List<LDocCourtDocTranscriptsRela> courtDocTranscriptsRelationPerson;
	private List<LDocCourtDocCoOwnedTranscriptsRela> courtDocCoOwnedTranscriptsRelationPerson;
	private List<LDocCourtDocMortgageeTranscriptsRela> courtDocMortgageeTranscriptsRelationPerson;
	private List<LDocCourtDocLawTranscriptsRela> courtDocLawTranscriptsRelationPerson;
	private List<LDocCourtDocHeirTranscriptsRela> courtDocHeirTranscriptsRelationPerson;
	private List<LDocCourtDocDirtTranscriptsRela> courtDocDirtTranscriptsRelationPerson;
	private List<LDocCourtDocBuiltTranscriptsRela> courtDocBuiltTranscriptsRelationPerson;
	private List<LDocCourtDocDistributionRela> courtDocDistributionRelationPerson;
	private List<LDocCourtDocThingThirdRela> courtDocThingThirdRelationPerson;
	private List<LDocCourtDocThingDebtRela> courtDocThingDebtRelationPerson;
	private List<LDocCourtDocCoOwnedRela> courtDocCoOwnedRelationPerson;
	private List<LDocCourtDocDebtDocRela> courtDocDebtDocRelationPerson;
	private List<LDocCourtDocDetailRela> courtDocDetailRelationPerson;
	private List<LDocCourtDocFileRela> courtDocFileRelationPerson;
	private List<LDocCourtDocDebtContinueRela> courtDocDebtContinueRelationPerson;
	private List<LDocCourtDocCashierCheckRela> courtDocCashierCheckRelationPerson;
	private List<LDocCourtDocRecoveryRela> courtDocRecoveryRelationPerson;
	private List<LDocCourtDocOtherRela> courtDocOtherRelationPerson;
	
	public LDocInfo(String docInfoId, int caseId, String createUserId,
			Date createDatetime) {
		this.docInfoId = docInfoId;
		this.caseId = caseId;
		this.createUserId = createUserId;
		this.createDatetime = createDatetime;
	}

	public LDocInfo() {
	}

	public String getDocInfoId() {
		return docInfoId;
	}

	public void setDocInfoId(String docInfoId) {
		this.docInfoId = docInfoId;
	}

	public int getCaseId() {
		return caseId;
	}

	public void setCaseId(int caseId) {
		this.caseId = caseId;
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

	public String getApplyBorrow() {
		return applyBorrow;
	}

	public void setApplyBorrow(String applyBorrow) {
		this.applyBorrow = applyBorrow;
	}

	public String getEditDoc() {
		return editDoc;
	}

	public void setEditDoc(String editDoc) {
		this.editDoc = editDoc;
	}

	public String getDocStatus() {
		return docStatus;
	}

	public void setDocStatus(String docStatus) {
		this.docStatus = docStatus;
	}

	public String getBorrowInfo() {
		return borrowInfo;
	}

	public void setBorrowInfo(String borrowInfo) {
		this.borrowInfo = borrowInfo;
	}

	public String getProgress() {
		return progress;
	}

	public void setProgress(String progress) {
		this.progress = progress;
	}

	public String getImgFiles() {
		return imgFiles;
	}

	public void setImgFiles(String imgFiles) {
		this.imgFiles = imgFiles;
	}

	public String getBankDate() {
		return bankDate;
	}

	public void setBankDate(String bankDate) {
		this.bankDate = bankDate;
	}

	public String getReceivedDate() {
		return receivedDate;
	}

	public void setReceivedDate(String receivedDate) {
		this.receivedDate = receivedDate;
	}

	public String getDocCode() {
		return docCode;
	}

	public void setDocCode(String docCode) {
		this.docCode = docCode;
	}

	public String getDebtName() {
		return debtName;
	}

	public void setDebtName(String debtName) {
		this.debtName = debtName;
	}

	public String getRelaName() {
		return relaName;
	}

	public void setRelaName(String relaName) {
		this.relaName = relaName;
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

	public String getCourtYearCaseId() {
		return courtYearCaseId;
	}

	public void setCourtYearCaseId(String courtYearCaseId) {
		this.courtYearCaseId = courtYearCaseId;
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

	public String getSourceDoc() {
		return sourceDoc;
	}

	public void setSourceDoc(String sourceDoc) {
		this.sourceDoc = sourceDoc;
	}

	public String getSourceDocInfo() {
		return sourceDocInfo;
	}

	public void setSourceDocInfo(String sourceDocInfo) {
		this.sourceDocInfo = sourceDocInfo;
	}

	public String getShareCaseId0() {
		return shareCaseId0;
	}

	public void setShareCaseId0(String shareCaseId0) {
		this.shareCaseId0 = shareCaseId0;
	}

	public String getSendDate() {
		return sendDate;
	}

	public void setSendDate(String sendDate) {
		this.sendDate = sendDate;
	}

	public String getNewSendDate() {
		return newSendDate;
	}

	public void setNewSendDate(String newSendDate) {
		this.newSendDate = newSendDate;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getShadow() {
		return shadow;
	}

	public void setShadow(String shadow) {
		this.shadow = shadow;
	}

	public String getModifyUserName() {
		return modifyUserName;
	}

	public void setModifyUserName(String modifyUserName) {
		this.modifyUserName = modifyUserName;
	}

	public String getCashierCheckStartDate() {
		return cashierCheckStartDate;
	}

	public void setCashierCheckStartDate(String cashierCheckStartDate) {
		this.cashierCheckStartDate = cashierCheckStartDate;
	}

	public int getCashierCheckAmount() {
		return cashierCheckAmount;
	}

	public void setCashierCheckAmount(int cashierCheckAmount) {
		this.cashierCheckAmount = cashierCheckAmount;
	}

	public String getRuledDate() {
		return ruledDate;
	}

	public void setRuledDate(String ruledDate) {
		this.ruledDate = ruledDate;
	}

	public int getRuledAmount() {
		return ruledAmount;
	}

	public void setRuledAmount(int ruledAmount) {
		this.ruledAmount = ruledAmount;
	}

	public String getApplyConfirmationDate() {
		return applyConfirmationDate;
	}

	public void setApplyConfirmationDate(String applyConfirmationDate) {
		this.applyConfirmationDate = applyConfirmationDate;
	}

	public String getReceivedConfirmationDate() {
		return receivedConfirmationDate;
	}

	public void setReceivedConfirmationDate(String receivedConfirmationDate) {
		this.receivedConfirmationDate = receivedConfirmationDate;
	}

	public String getFailureDate() {
		return failureDate;
	}

	public void setFailureDate(String failureDate) {
		this.failureDate = failureDate;
	}

	public String getThirdName() {
		return thirdName;
	}

	public void setThirdName(String thirdName) {
		this.thirdName = thirdName;
	}

	public String getThirdAddress() {
		return thirdAddress;
	}

	public void setThirdAddress(String thirdAddress) {
		this.thirdAddress = thirdAddress;
	}

	public int getDistributionAmount() {
		return distributionAmount;
	}

	public void setDistributionAmount(int distributionAmount) {
		this.distributionAmount = distributionAmount;
	}

	public String getApprovedDelayDate() {
		return approvedDelayDate;
	}

	public void setApprovedDelayDate(String approvedDelayDate) {
		this.approvedDelayDate = approvedDelayDate;
	}

	public String getDelayEndDate() {
		return delayEndDate;
	}

	public void setDelayEndDate(String delayEndDate) {
		this.delayEndDate = delayEndDate;
	}

	public String getSectorDate() {
		return sectorDate;
	}

	public void setSectorDate(String sectorDate) {
		this.sectorDate = sectorDate;
	}

	public String getMeasureDate() {
		return measureDate;
	}

	public void setMeasureDate(String measureDate) {
		this.measureDate = measureDate;
	}

	public String getValuationDate() {
		return valuationDate;
	}

	public void setValuationDate(String valuationDate) {
		this.valuationDate = valuationDate;
	}

	public String getRebirthDate() {
		return rebirthDate;
	}

	public void setRebirthDate(String rebirthDate) {
		this.rebirthDate = rebirthDate;
	}

	public String getSurveyDate() {
		return surveyDate;
	}

	public void setSurveyDate(String surveyDate) {
		this.surveyDate = surveyDate;
	}

	public String getInquiryDate() {
		return inquiryDate;
	}

	public void setInquiryDate(String inquiryDate) {
		this.inquiryDate = inquiryDate;
	}

	public String getFirstSaleDate() {
		return firstSaleDate;
	}

	public void setFirstSaleDate(String firstSaleDate) {
		this.firstSaleDate = firstSaleDate;
	}

	public String getSecondSaleDate() {
		return secondSaleDate;
	}

	public void setSecondSaleDate(String secondSaleDate) {
		this.secondSaleDate = secondSaleDate;
	}

	public String getThirdSaleDate() {
		return thirdSaleDate;
	}

	public void setThirdSaleDate(String thirdSaleDate) {
		this.thirdSaleDate = thirdSaleDate;
	}

	public String getPostBuyDate() {
		return postBuyDate;
	}

	public void setPostBuyDate(String postBuyDate) {
		this.postBuyDate = postBuyDate;
	}

	public String getPostEndDate() {
		return postEndDate;
	}

	public void setPostEndDate(String postEndDate) {
		this.postEndDate = postEndDate;
	}

	public String getReduceSaleDate() {
		return reduceSaleDate;
	}

	public void setReduceSaleDate(String reduceSaleDate) {
		this.reduceSaleDate = reduceSaleDate;
	}

	public String getDestoryDate() {
		return destoryDate;
	}

	public void setDestoryDate(String destoryDate) {
		this.destoryDate = destoryDate;
	}

	public String getRealDistributionDate() {
		return realDistributionDate;
	}

	public void setRealDistributionDate(String realDistributionDate) {
		this.realDistributionDate = realDistributionDate;
	}

	public String getEdit() {
		return edit;
	}

	public void setEdit(String edit) {
		this.edit = edit;
	}

	public String getReport() {
		return report;
	}

	public void setReport(String report) {
		this.report = report;
	}

	public String getPay() {
		return pay;
	}

	public void setPay(String pay) {
		this.pay = pay;
	}

	public String getSendReport() {
		return sendReport;
	}

	public void setSendReport(String sendReport) {
		this.sendReport = sendReport;
	}

	public String getToCourtDate() {
		return toCourtDate;
	}

	public void setToCourtDate(String toCourtDate) {
		this.toCourtDate = toCourtDate;
	}

	public String getToCourtTime() {
		return toCourtTime;
	}

	public void setToCourtTime(String toCourtTime) {
		this.toCourtTime = toCourtTime;
	}

	public String getToCourtType() {
		return toCourtType;
	}

	public void setToCourtType(String toCourtType) {
		this.toCourtType = toCourtType;
	}

	public String getToCourtNotice() {
		return toCourtNotice;
	}

	public void setToCourtNotice(String toCourtNotice) {
		this.toCourtNotice = toCourtNotice;
	}

	public String getExecutionDate() {
		return executionDate;
	}

	public void setExecutionDate(String executionDate) {
		this.executionDate = executionDate;
	}

	public String getExecutionTime() {
		return executionTime;
	}

	public void setExecutionTime(String executionTime) {
		this.executionTime = executionTime;
	}

	public String getCashierCheckEndDate() {
		return cashierCheckEndDate;
	}

	public void setCashierCheckEndDate(String cashierCheckEndDate) {
		this.cashierCheckEndDate = cashierCheckEndDate;
	}

	public String getDebtsDate() {
		return debtsDate;
	}

	public void setDebtsDate(String debtsDate) {
		this.debtsDate = debtsDate;
	}

	public String getClaimsdocQuota() {
		return claimsdocQuota;
	}

	public void setClaimsdocQuota(String claimsdocQuota) {
		this.claimsdocQuota = claimsdocQuota;
	}

	public String getClaimsDocInterestRate() {
		return claimsDocInterestRate;
	}

	public void setClaimsDocInterestRate(String claimsDocInterestRate) {
		this.claimsDocInterestRate = claimsDocInterestRate;
	}

	public String getProdName() {
		return prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getBorrowReason() {
		return borrowReason;
	}

	public void setBorrowReason(String borrowReason) {
		this.borrowReason = borrowReason;
	}

	public String getLawCode() {
		return lawCode;
	}

	public void setLawCode(String lawCode) {
		this.lawCode = lawCode;
	}

	public String getBorrowDatetime() {
		return borrowDatetime;
	}

	public void setBorrowDatetime(String borrowDatetime) {
		this.borrowDatetime = borrowDatetime;
	}

	public String getBorrowUserId() {
		return borrowUserId;
	}

	public void setBorrowUserId(String borrowUserId) {
		this.borrowUserId = borrowUserId;
	}

	public String getBorrowUserName() {
		return borrowUserName;
	}

	public void setBorrowUserName(String borrowUserName) {
		this.borrowUserName = borrowUserName;
	}

	public String getProgressDatetime() {
		return progressDatetime;
	}

	public void setProgressDatetime(String progressDatetime) {
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

	public String getCheckDatetime() {
		return checkDatetime;
	}

	public void setCheckDatetime(String checkDatetime) {
		this.checkDatetime = checkDatetime;
	}

	public String getCheckUserId() {
		return checkUserId;
	}

	public void setCheckUserId(String checkUserId) {
		this.checkUserId = checkUserId;
	}

	public String getCheckUserName() {
		return checkUserName;
	}

	public void setCheckUserName(String checkUserName) {
		this.checkUserName = checkUserName;
	}

	public String getBackDatetime() {
		return backDatetime;
	}

	public void setBackDatetime(String backDatetime) {
		this.backDatetime = backDatetime;
	}

	public String getBackUserId() {
		return backUserId;
	}

	public void setBackUserId(String backUserId) {
		this.backUserId = backUserId;
	}

	public String getBackUserName() {
		return backUserName;
	}

	public void setBackUserName(String backUserName) {
		this.backUserName = backUserName;
	}

	public String getFinalDatetime() {
		return finalDatetime;
	}

	public void setFinalDatetime(String finalDatetime) {
		this.finalDatetime = finalDatetime;
	}

	public String getFinalUserId() {
		return finalUserId;
	}

	public void setFinalUserId(String finalUserId) {
		this.finalUserId = finalUserId;
	}

	public String getFinalUserName() {
		return finalUserName;
	}

	public void setFinalUserName(String finalUserName) {
		this.finalUserName = finalUserName;
	}

	public String getBusinessAccount() {
		return businessAccount;
	}

	public void setBusinessAccount(String businessAccount) {
		this.businessAccount = businessAccount;
	}

	public String getBusiness() {
		return business;
	}

	public void setBusiness(String business) {
		this.business = business;
	}

	public String getRowNum() {
		return rowNum;
	}

	public void setRowNum(String rowNum) {
		this.rowNum = rowNum;
	}

	public String getInterestYear() {
		return interestYear;
	}

	public void setInterestYear(String interestYear) {
		this.interestYear = interestYear;
	}

	public String getInterestDate() {
		return interestDate;
	}

	public void setInterestDate(String interestDate) {
		this.interestDate = interestDate;
	}

	public String getDebtsCourtYearInfo() {
		return debtsCourtYearInfo;
	}

	public void setDebtsCourtYearInfo(String debtsCourtYearInfo) {
		this.debtsCourtYearInfo = debtsCourtYearInfo;
	}

	public String getOtherReceiptType() {
		return otherReceiptType;
	}

	public void setOtherReceiptType(String otherReceiptType) {
		this.otherReceiptType = otherReceiptType;
	}

	public String getOtherReceiptAmount() {
		return otherReceiptAmount;
	}

	public void setOtherReceiptAmount(String otherReceiptAmount) {
		this.otherReceiptAmount = otherReceiptAmount;
	}

	public String getOtherCourtDate() {
		return otherCourtDate;
	}

	public void setOtherCourtDate(String otherCourtDate) {
		this.otherCourtDate = otherCourtDate;
	}

	public String getDocId() {
		return docId;
	}

	public void setDocId(String docId) {
		this.docId = docId;
	}

	public String getDocType() {
		return docType;
	}

	public void setDocType(String docType) {
		this.docType = docType;
	}

	public String getDisApplyBorrow() {
		return disApplyBorrow;
	}

	public void setDisApplyBorrow(String disApplyBorrow) {
		this.disApplyBorrow = disApplyBorrow;
	}

	public String getDisDocStatus() {
		return disDocStatus;
	}

	public void setDisDocStatus(String disDocStatus) {
		this.disDocStatus = disDocStatus;
	}

	public String getBorrowBackDate() {
		return borrowBackDate;
	}

	public void setBorrowBackDate(String borrowBackDate) {
		this.borrowBackDate = borrowBackDate;
	}

	public String getBorrowBackReason() {
		return borrowBackReason;
	}

	public void setBorrowBackReason(String borrowBackReason) {
		this.borrowBackReason = borrowBackReason;
	}

	public String getBorrowToCourtDate() {
		return borrowToCourtDate;
	}

	public void setBorrowToCourtDate(String borrowToCourtDate) {
		this.borrowToCourtDate = borrowToCourtDate;
	}

	public String getBorrowToCourtLawCode() {
		return borrowToCourtLawCode;
	}

	public void setBorrowToCourtLawCode(String borrowToCourtLawCode) {
		this.borrowToCourtLawCode = borrowToCourtLawCode;
	}

	public String getBorrowCourtYearCourt() {
		return borrowCourtYearCourt;
	}

	public void setBorrowCourtYearCourt(String borrowCourtYearCourt) {
		this.borrowCourtYearCourt = borrowCourtYearCourt;
	}

	public String getDisBorrowCourtYearCourt() {
		return disBorrowCourtYearCourt;
	}

	public void setDisBorrowCourtYearCourt(String disBorrowCourtYearCourt) {
		this.disBorrowCourtYearCourt = disBorrowCourtYearCourt;
	}

	public String getBorrowCourtYearYear() {
		return borrowCourtYearYear;
	}

	public void setBorrowCourtYearYear(String borrowCourtYearYear) {
		this.borrowCourtYearYear = borrowCourtYearYear;
	}

	public String getBorrowCourtYearTxt() {
		return borrowCourtYearTxt;
	}

	public void setBorrowCourtYearTxt(String borrowCourtYearTxt) {
		this.borrowCourtYearTxt = borrowCourtYearTxt;
	}

	public String getBorrowCourtYearCaseId() {
		return borrowCourtYearCaseId;
	}

	public void setBorrowCourtYearCaseId(String borrowCourtYearCaseId) {
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

	public String getBorrowSubLawCode() {
		return borrowSubLawCode;
	}

	public void setBorrowSubLawCode(String borrowSubLawCode) {
		this.borrowSubLawCode = borrowSubLawCode;
	}

	public String getTempCount() {
		return tempCount;
	}

	public void setTempCount(String tempCount) {
		this.tempCount = tempCount;
	}

	public List<LDocClaimsdocsRela> getClaimsRelationPerson() {
		return claimsRelationPerson;
	}

	public void setClaimsRelationPerson(List<LDocClaimsdocsRela> claimsRelationPerson) {
		this.claimsRelationPerson = claimsRelationPerson;
	}

	public List<LDocDebtsRela> getDebtsRelationPerson() {
		return debtsRelationPerson;
	}

	public void setDebtsRelationPerson(List<LDocDebtsRela> debtsRelationPerson) {
		this.debtsRelationPerson = debtsRelationPerson;
	}

	public List<LDocCashiercheckRela> getCashiercheckRelationPerson() {
		return cashiercheckRelationPerson;
	}

	public void setCashiercheckRelationPerson(List<LDocCashiercheckRela> cashiercheckRelationPerson) {
		this.cashiercheckRelationPerson = cashiercheckRelationPerson;
	}

	public List<LDocCourtDocRela> getCourtDocRelationPerson() {
		return courtDocRelationPerson;
	}

	public void setCourtDocRelationPerson(List<LDocCourtDocRela> courtDocRelationPerson) {
		this.courtDocRelationPerson = courtDocRelationPerson;
	}

	public List<LDocCourtDocTranscriptsRela> getCourtDocTranscriptsRelationPerson() {
		return courtDocTranscriptsRelationPerson;
	}

	public void setCourtDocTranscriptsRelationPerson(List<LDocCourtDocTranscriptsRela> courtDocTranscriptsRelationPerson) {
		this.courtDocTranscriptsRelationPerson = courtDocTranscriptsRelationPerson;
	}

	public List<LDocCourtDocCoOwnedTranscriptsRela> getCourtDocCoOwnedTranscriptsRelationPerson() {
		return courtDocCoOwnedTranscriptsRelationPerson;
	}

	public void setCourtDocCoOwnedTranscriptsRelationPerson(
			List<LDocCourtDocCoOwnedTranscriptsRela> courtDocCoOwnedTranscriptsRelationPerson) {
		this.courtDocCoOwnedTranscriptsRelationPerson = courtDocCoOwnedTranscriptsRelationPerson;
	}

	public List<LDocCourtDocMortgageeTranscriptsRela> getCourtDocMortgageeTranscriptsRelationPerson() {
		return courtDocMortgageeTranscriptsRelationPerson;
	}

	public void setCourtDocMortgageeTranscriptsRelationPerson(
			List<LDocCourtDocMortgageeTranscriptsRela> courtDocMortgageeTranscriptsRelationPerson) {
		this.courtDocMortgageeTranscriptsRelationPerson = courtDocMortgageeTranscriptsRelationPerson;
	}

	public List<LDocCourtDocLawTranscriptsRela> getCourtDocLawTranscriptsRelationPerson() {
		return courtDocLawTranscriptsRelationPerson;
	}

	public void setCourtDocLawTranscriptsRelationPerson(
			List<LDocCourtDocLawTranscriptsRela> courtDocLawTranscriptsRelationPerson) {
		this.courtDocLawTranscriptsRelationPerson = courtDocLawTranscriptsRelationPerson;
	}

	public List<LDocCourtDocHeirTranscriptsRela> getCourtDocHeirTranscriptsRelationPerson() {
		return courtDocHeirTranscriptsRelationPerson;
	}

	public void setCourtDocHeirTranscriptsRelationPerson(
			List<LDocCourtDocHeirTranscriptsRela> courtDocHeirTranscriptsRelationPerson) {
		this.courtDocHeirTranscriptsRelationPerson = courtDocHeirTranscriptsRelationPerson;
	}

	public List<LDocCourtDocDirtTranscriptsRela> getCourtDocDirtTranscriptsRelationPerson() {
		return courtDocDirtTranscriptsRelationPerson;
	}

	public void setCourtDocDirtTranscriptsRelationPerson(
			List<LDocCourtDocDirtTranscriptsRela> courtDocDirtTranscriptsRelationPerson) {
		this.courtDocDirtTranscriptsRelationPerson = courtDocDirtTranscriptsRelationPerson;
	}

	public List<LDocCourtDocBuiltTranscriptsRela> getCourtDocBuiltTranscriptsRelationPerson() {
		return courtDocBuiltTranscriptsRelationPerson;
	}

	public void setCourtDocBuiltTranscriptsRelationPerson(
			List<LDocCourtDocBuiltTranscriptsRela> courtDocBuiltTranscriptsRelationPerson) {
		this.courtDocBuiltTranscriptsRelationPerson = courtDocBuiltTranscriptsRelationPerson;
	}

	public List<LDocCourtDocDistributionRela> getCourtDocDistributionRelationPerson() {
		return courtDocDistributionRelationPerson;
	}

	public void setCourtDocDistributionRelationPerson(
			List<LDocCourtDocDistributionRela> courtDocDistributionRelationPerson) {
		this.courtDocDistributionRelationPerson = courtDocDistributionRelationPerson;
	}

	public List<LDocCourtDocThingThirdRela> getCourtDocThingThirdRelationPerson() {
		return courtDocThingThirdRelationPerson;
	}

	public void setCourtDocThingThirdRelationPerson(List<LDocCourtDocThingThirdRela> courtDocThingThirdRelationPerson) {
		this.courtDocThingThirdRelationPerson = courtDocThingThirdRelationPerson;
	}

	public List<LDocCourtDocThingDebtRela> getCourtDocThingDebtRelationPerson() {
		return courtDocThingDebtRelationPerson;
	}

	public void setCourtDocThingDebtRelationPerson(List<LDocCourtDocThingDebtRela> courtDocThingDebtRelationPerson) {
		this.courtDocThingDebtRelationPerson = courtDocThingDebtRelationPerson;
	}

	public List<LDocCourtDocCoOwnedRela> getCourtDocCoOwnedRelationPerson() {
		return courtDocCoOwnedRelationPerson;
	}

	public void setCourtDocCoOwnedRelationPerson(List<LDocCourtDocCoOwnedRela> courtDocCoOwnedRelationPerson) {
		this.courtDocCoOwnedRelationPerson = courtDocCoOwnedRelationPerson;
	}

	public List<LDocCourtDocDebtDocRela> getCourtDocDebtDocRelationPerson() {
		return courtDocDebtDocRelationPerson;
	}

	public void setCourtDocDebtDocRelationPerson(List<LDocCourtDocDebtDocRela> courtDocDebtDocRelationPerson) {
		this.courtDocDebtDocRelationPerson = courtDocDebtDocRelationPerson;
	}

	public List<LDocCourtDocDetailRela> getCourtDocDetailRelationPerson() {
		return courtDocDetailRelationPerson;
	}

	public void setCourtDocDetailRelationPerson(List<LDocCourtDocDetailRela> courtDocDetailRelationPerson) {
		this.courtDocDetailRelationPerson = courtDocDetailRelationPerson;
	}

	public List<LDocCourtDocFileRela> getCourtDocFileRelationPerson() {
		return courtDocFileRelationPerson;
	}

	public void setCourtDocFileRelationPerson(List<LDocCourtDocFileRela> courtDocFileRelationPerson) {
		this.courtDocFileRelationPerson = courtDocFileRelationPerson;
	}

	public List<LDocCourtDocDebtContinueRela> getCourtDocDebtContinueRelationPerson() {
		return courtDocDebtContinueRelationPerson;
	}

	public void setCourtDocDebtContinueRelationPerson(
			List<LDocCourtDocDebtContinueRela> courtDocDebtContinueRelationPerson) {
		this.courtDocDebtContinueRelationPerson = courtDocDebtContinueRelationPerson;
	}

	public List<LDocCourtDocCashierCheckRela> getCourtDocCashierCheckRelationPerson() {
		return courtDocCashierCheckRelationPerson;
	}

	public void setCourtDocCashierCheckRelationPerson(
			List<LDocCourtDocCashierCheckRela> courtDocCashierCheckRelationPerson) {
		this.courtDocCashierCheckRelationPerson = courtDocCashierCheckRelationPerson;
	}

	public List<LDocCourtDocRecoveryRela> getCourtDocRecoveryRelationPerson() {
		return courtDocRecoveryRelationPerson;
	}

	public void setCourtDocRecoveryRelationPerson(List<LDocCourtDocRecoveryRela> courtDocRecoveryRelationPerson) {
		this.courtDocRecoveryRelationPerson = courtDocRecoveryRelationPerson;
	}

	public List<LDocCourtDocOtherRela> getCourtDocOtherRelationPerson() {
		return courtDocOtherRelationPerson;
	}

	public void setCourtDocOtherRelationPerson(List<LDocCourtDocOtherRela> courtDocOtherRelationPerson) {
		this.courtDocOtherRelationPerson = courtDocOtherRelationPerson;
	}

	public List<LDocCentitlementRela> getCentitlementRelationPerson() {
		return centitlementRelationPerson;
	}

	public void setCentitlementRelationPerson(List<LDocCentitlementRela> centitlementRelationPerson) {
		this.centitlementRelationPerson = centitlementRelationPerson;
	}

	public List<LDocCentitlementSourceDoc> getCentitlementSourceDoc() {
		return centitlementSourceDoc;
	}

	public void setCentitlementSourceDoc(List<LDocCentitlementSourceDoc> centitlementSourceDoc) {
		this.centitlementSourceDoc = centitlementSourceDoc;
	}
	
	
}
