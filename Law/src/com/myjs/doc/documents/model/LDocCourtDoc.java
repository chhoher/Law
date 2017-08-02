package com.myjs.doc.documents.model;

import java.util.Date;
import java.util.List;

public class LDocCourtDoc {
	private String bankId;
	private String gProdId;
	private String gProdName;
	private String debtID;
	private String debtName;
	private int courtDocId;
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
	private Date ruledDate;
	private int ruledAmount;
	private Date applyConfirmationDate;
	private Date receivedConfirmationDate;
	private Date failureDate; 
	private String applyLawThird;
	private String addAddress;
	private int distributionAmount;
	private Date approvedDelayDate;
	private Date delayEndDate;
	private Date sectorDate;
	private Date measureDate;
	private Date valuationDate;
	private Date rebirthDate;
	private Date surveyDate;
	private Date inquiryDate;
	private Date firstSaleDate;
	private Date secondSaleDate;
	private Date thirdSaleDate;
	private Date postBuyDate;
	private Date postEndDate;
	private Date reduceSaleDate;
	private Date destoryDate;
	private Date realDistributionDate;
	private String progress;
	private String remark;
	private int applyDebtDays;
	private int repayDays;
	private int useDays;
	private int opinionDays;
	private int accountDays;
	private int pleaseDays;
	private String reportOther;
	private int reportOtherDays;
	private String reportDescription;
	private int programCost;
	private int programDays;
	private int legalActionCost;
	private int legalActionDays;
	private int excuteCost;
	private int excuteDays;
	private int replacementCost;
	private int replacementDays;
	private int sectorCost;
	private int sectorDays;
	private int valuationCost;
	private int valuationDays;
	private int rebirthCost;
	private int rebirthDays;
	private int measureCost;
	private int measureDays;
	private int saveCost;
	private int saveDays;
	private int centralizedCost;
	private int centralizedDays;
	private int insuranceCost;
	private int insuranceDays;
	private int postCost;
	private int postDays;
	private int publishDays;
	private String publishObject;
	private String publishThings;
	private String publishRemark;
	private Date toCourtDate;
	private String toCourtTime;
	private String toCourtType;
	private String toCourtNotice;
	private String toCourtAppointmentLetter;
	private String toCourtAppointmentLetterCriminal;
	private String toCourtApplyBook;
	private String toCourtDetail;
	private String toCourtOther;
	private String toCourtOtherContent;
	private Date executionDate;
	private String executionTime;
	private String executionAppointmentLetter;
	private String executionOther;
	private String executionOtherContent;
	private Date createDatetime;
	private String createUserId;
	
	// add By Jia 2017-07-18 補正
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
	// 本票
	private String recoveryRemark;
	private String recoveryRelationPerson;
	// 其他
	private String otherValues;
	private int otherDays;
	private String otherRemark;
	private String otherRelationPerson;
	private String edit;
	private String borrowReason;
	private String borrowInfo;
	
	// add By Jia 2017-07-13 Vo
	private List<LDocCourtDocRela> courtDocRelationPerson;
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
	
	public int getCourtDocId() {
		return courtDocId;
	}
	public void setCourtDocId(int courtDocId) {
		this.courtDocId = courtDocId;
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
	public Date getRuledDate() {
		return ruledDate;
	}
	public void setRuledDate(Date ruledDate) {
		this.ruledDate = ruledDate;
	}
	public int getRuledAmount() {
		return ruledAmount;
	}
	public void setRuledAmount(int ruledAmount) {
		this.ruledAmount = ruledAmount;
	}
	public Date getApplyConfirmationDate() {
		return applyConfirmationDate;
	}
	public void setApplyConfirmationDate(Date applyConfirmationDate) {
		this.applyConfirmationDate = applyConfirmationDate;
	}
	public Date getReceivedConfirmationDate() {
		return receivedConfirmationDate;
	}
	public void setReceivedConfirmationDate(Date receivedConfirmationDate) {
		this.receivedConfirmationDate = receivedConfirmationDate;
	}
	public Date getFailureDate() {
		return failureDate;
	}
	public void setFailureDate(Date failureDate) {
		this.failureDate = failureDate;
	}
	public String getApplyLawThird() {
		return applyLawThird;
	}
	public void setApplyLawThird(String applyLawThird) {
		this.applyLawThird = applyLawThird;
	}
	public String getAddAddress() {
		return addAddress;
	}
	public void setAddAddress(String addAddress) {
		this.addAddress = addAddress;
	}
	public int getDistributionAmount() {
		return distributionAmount;
	}
	public void setDistributionAmount(int distributionAmount) {
		this.distributionAmount = distributionAmount;
	}
	public Date getApprovedDelayDate() {
		return approvedDelayDate;
	}
	public void setApprovedDelayDate(Date approvedDelayDate) {
		this.approvedDelayDate = approvedDelayDate;
	}
	public Date getDelayEndDate() {
		return delayEndDate;
	}
	public void setDelayEndDate(Date delayEndDate) {
		this.delayEndDate = delayEndDate;
	}
	public Date getSectorDate() {
		return sectorDate;
	}
	public void setSectorDate(Date sectorDate) {
		this.sectorDate = sectorDate;
	}
	public Date getMeasureDate() {
		return measureDate;
	}
	public void setMeasureDate(Date measureDate) {
		this.measureDate = measureDate;
	}
	public Date getValuationDate() {
		return valuationDate;
	}
	public void setValuationDate(Date valuationDate) {
		this.valuationDate = valuationDate;
	}
	public Date getRebirthDate() {
		return rebirthDate;
	}
	public void setRebirthDate(Date rebirthDate) {
		this.rebirthDate = rebirthDate;
	}
	public Date getSurveyDate() {
		return surveyDate;
	}
	public void setSurveyDate(Date surveyDate) {
		this.surveyDate = surveyDate;
	}
	public Date getInquiryDate() {
		return inquiryDate;
	}
	public void setInquiryDate(Date inquiryDate) {
		this.inquiryDate = inquiryDate;
	}
	public Date getFirstSaleDate() {
		return firstSaleDate;
	}
	public void setFirstSaleDate(Date firstSaleDate) {
		this.firstSaleDate = firstSaleDate;
	}
	public Date getSecondSaleDate() {
		return secondSaleDate;
	}
	public void setSecondSaleDate(Date secondSaleDate) {
		this.secondSaleDate = secondSaleDate;
	}
	public Date getThirdSaleDate() {
		return thirdSaleDate;
	}
	public void setThirdSaleDate(Date thirdSaleDate) {
		this.thirdSaleDate = thirdSaleDate;
	}
	public Date getPostBuyDate() {
		return postBuyDate;
	}
	public void setPostBuyDate(Date postBuyDate) {
		this.postBuyDate = postBuyDate;
	}
	public Date getPostEndDate() {
		return postEndDate;
	}
	public void setPostEndDate(Date postEndDate) {
		this.postEndDate = postEndDate;
	}
	public Date getReduceSaleDate() {
		return reduceSaleDate;
	}
	public void setReduceSaleDate(Date reduceSaleDate) {
		this.reduceSaleDate = reduceSaleDate;
	}
	public Date getDestoryDate() {
		return destoryDate;
	}
	public void setDestoryDate(Date destoryDate) {
		this.destoryDate = destoryDate;
	}
	public Date getRealDistributionDate() {
		return realDistributionDate;
	}
	public void setRealDistributionDate(Date realDistributionDate) {
		this.realDistributionDate = realDistributionDate;
	}
	public String getProgress() {
		return progress;
	}
	public void setProgress(String progress) {
		this.progress = progress;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public int getApplyDebtDays() {
		return applyDebtDays;
	}
	public void setApplyDebtDays(int applyDebtDays) {
		this.applyDebtDays = applyDebtDays;
	}
	public int getRepayDays() {
		return repayDays;
	}
	public void setRepayDays(int repayDays) {
		this.repayDays = repayDays;
	}
	public int getUseDays() {
		return useDays;
	}
	public void setUseDays(int useDays) {
		this.useDays = useDays;
	}
	public int getOpinionDays() {
		return opinionDays;
	}
	public void setOpinionDays(int opinionDays) {
		this.opinionDays = opinionDays;
	}
	public int getAccountDays() {
		return accountDays;
	}
	public void setAccountDays(int accountDays) {
		this.accountDays = accountDays;
	}
	public int getPleaseDays() {
		return pleaseDays;
	}
	public void setPleaseDays(int pleaseDays) {
		this.pleaseDays = pleaseDays;
	}
	public String getReportOther() {
		return reportOther;
	}
	public void setReportOther(String reportOther) {
		this.reportOther = reportOther;
	}
	public int getReportOtherDays() {
		return reportOtherDays;
	}
	public void setReportOtherDays(int reportOtherDays) {
		this.reportOtherDays = reportOtherDays;
	}
	public String getReportDescription() {
		return reportDescription;
	}
	public void setReportDescription(String reportDescription) {
		this.reportDescription = reportDescription;
	}
	public int getProgramCost() {
		return programCost;
	}
	public void setProgramCost(int programCost) {
		this.programCost = programCost;
	}
	public int getProgramDays() {
		return programDays;
	}
	public void setProgramDays(int programDays) {
		this.programDays = programDays;
	}
	public int getLegalActionCost() {
		return legalActionCost;
	}
	public void setLegalActionCost(int legalActionCost) {
		this.legalActionCost = legalActionCost;
	}
	public int getLegalActionDays() {
		return legalActionDays;
	}
	public void setLegalActionDays(int legalActionDays) {
		this.legalActionDays = legalActionDays;
	}
	public int getExcuteCost() {
		return excuteCost;
	}
	public void setExcuteCost(int excuteCost) {
		this.excuteCost = excuteCost;
	}
	public int getExcuteDays() {
		return excuteDays;
	}
	public void setExcuteDays(int excuteDays) {
		this.excuteDays = excuteDays;
	}
	public int getReplacementCost() {
		return replacementCost;
	}
	public void setReplacementCost(int replacementCost) {
		this.replacementCost = replacementCost;
	}
	public int getReplacementDays() {
		return replacementDays;
	}
	public void setReplacementDays(int replacementDays) {
		this.replacementDays = replacementDays;
	}
	public int getSectorCost() {
		return sectorCost;
	}
	public void setSectorCost(int sectorCost) {
		this.sectorCost = sectorCost;
	}
	public int getSectorDays() {
		return sectorDays;
	}
	public void setSectorDays(int sectorDays) {
		this.sectorDays = sectorDays;
	}
	public int getValuationCost() {
		return valuationCost;
	}
	public void setValuationCost(int valuationCost) {
		this.valuationCost = valuationCost;
	}
	public int getValuationDays() {
		return valuationDays;
	}
	public void setValuationDays(int valuationDays) {
		this.valuationDays = valuationDays;
	}
	public int getRebirthCost() {
		return rebirthCost;
	}
	public void setRebirthCost(int rebirthCost) {
		this.rebirthCost = rebirthCost;
	}
	public int getRebirthDays() {
		return rebirthDays;
	}
	public void setRebirthDays(int rebirthDays) {
		this.rebirthDays = rebirthDays;
	}
	public int getMeasureCost() {
		return measureCost;
	}
	public void setMeasureCost(int measureCost) {
		this.measureCost = measureCost;
	}
	public int getMeasureDays() {
		return measureDays;
	}
	public void setMeasureDays(int measureDays) {
		this.measureDays = measureDays;
	}
	public int getSaveCost() {
		return saveCost;
	}
	public void setSaveCost(int saveCost) {
		this.saveCost = saveCost;
	}
	public int getSaveDays() {
		return saveDays;
	}
	public void setSaveDays(int saveDays) {
		this.saveDays = saveDays;
	}
	public int getCentralizedCost() {
		return centralizedCost;
	}
	public void setCentralizedCost(int centralizedCost) {
		this.centralizedCost = centralizedCost;
	}
	public int getCentralizedDays() {
		return centralizedDays;
	}
	public void setCentralizedDays(int centralizedDays) {
		this.centralizedDays = centralizedDays;
	}
	public int getInsuranceCost() {
		return insuranceCost;
	}
	public void setInsuranceCost(int insuranceCost) {
		this.insuranceCost = insuranceCost;
	}
	public int getInsuranceDays() {
		return insuranceDays;
	}
	public void setInsuranceDays(int insuranceDays) {
		this.insuranceDays = insuranceDays;
	}
	public int getPostCost() {
		return postCost;
	}
	public void setPostCost(int postCost) {
		this.postCost = postCost;
	}
	public int getPostDays() {
		return postDays;
	}
	public void setPostDays(int postDays) {
		this.postDays = postDays;
	}
	public int getPublishDays() {
		return publishDays;
	}
	public void setPublishDays(int publishDays) {
		this.publishDays = publishDays;
	}
	public String getPublishObject() {
		return publishObject;
	}
	public void setPublishObject(String publishObject) {
		this.publishObject = publishObject;
	}
	public String getPublishThings() {
		return publishThings;
	}
	public void setPublishThings(String publishThings) {
		this.publishThings = publishThings;
	}
	public String getPublishRemark() {
		return publishRemark;
	}
	public void setPublishRemark(String publishRemark) {
		this.publishRemark = publishRemark;
	}
	public Date getToCourtDate() {
		return toCourtDate;
	}
	public void setToCourtDate(Date toCourtDate) {
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
	public String getToCourtAppointmentLetter() {
		return toCourtAppointmentLetter;
	}
	public void setToCourtAppointmentLetter(String toCourtAppointmentLetter) {
		this.toCourtAppointmentLetter = toCourtAppointmentLetter;
	}
	public String getToCourtAppointmentLetterCriminal() {
		return toCourtAppointmentLetterCriminal;
	}
	public void setToCourtAppointmentLetterCriminal(String toCourtAppointmentLetterCriminal) {
		this.toCourtAppointmentLetterCriminal = toCourtAppointmentLetterCriminal;
	}
	public String getToCourtApplyBook() {
		return toCourtApplyBook;
	}
	public void setToCourtApplyBook(String toCourtApplyBook) {
		this.toCourtApplyBook = toCourtApplyBook;
	}
	public String getToCourtDetail() {
		return toCourtDetail;
	}
	public void setToCourtDetail(String toCourtDetail) {
		this.toCourtDetail = toCourtDetail;
	}
	public String getToCourtOther() {
		return toCourtOther;
	}
	public void setToCourtOther(String toCourtOther) {
		this.toCourtOther = toCourtOther;
	}
	public String getToCourtOtherContent() {
		return toCourtOtherContent;
	}
	public void setToCourtOtherContent(String toCourtOtherContent) {
		this.toCourtOtherContent = toCourtOtherContent;
	}
	public Date getExecutionDate() {
		return executionDate;
	}
	public void setExecutionDate(Date executionDate) {
		this.executionDate = executionDate;
	}
	public String getExecutionTime() {
		return executionTime;
	}
	public void setExecutionTime(String executionTime) {
		this.executionTime = executionTime;
	}
	public String getExecutionAppointmentLetter() {
		return executionAppointmentLetter;
	}
	public void setExecutionAppointmentLetter(String executionAppointmentLetter) {
		this.executionAppointmentLetter = executionAppointmentLetter;
	}
	public String getExecutionOther() {
		return executionOther;
	}
	public void setExecutionOther(String executionOther) {
		this.executionOther = executionOther;
	}
	public String getExecutionOtherContent() {
		return executionOtherContent;
	}
	public void setExecutionOtherContent(String executionOtherContent) {
		this.executionOtherContent = executionOtherContent;
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
	public String getRecoveryRemark() {
		return recoveryRemark;
	}
	public void setRecoveryRemark(String recoveryRemark) {
		this.recoveryRemark = recoveryRemark;
	}
	public String getRecoveryRelationPerson() {
		return recoveryRelationPerson;
	}
	public void setRecoveryRelationPerson(String recoveryRelationPerson) {
		this.recoveryRelationPerson = recoveryRelationPerson;
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
