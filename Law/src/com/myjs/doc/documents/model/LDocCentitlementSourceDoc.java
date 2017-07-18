package com.myjs.doc.documents.model;

public class LDocCentitlementSourceDoc {
	
	private String centitlementSourceDocId;
	private String centitlementSourceDoc;
	private String centitlementSourceDocName;
	private String courtYearCourt;
	private String courtYearCourtName;
	private int courtYearYear;
	private String courtYearTxt;
	private String courtYearShare;
	private int courtYearCaseId;
	private int centitlementId;
	
	public LDocCentitlementSourceDoc(String centitlementSourceDocId, String centitlementSourceDoc,
			String centitlementSourceDocName, String courtYearCourt, String courtYearCourtName, int courtYearYear,
			String courtYearTxt, String courtYearShare, int courtYearCaseId, int centitlementId) {
		this.centitlementSourceDocId = centitlementSourceDocId;
		this.centitlementSourceDoc = centitlementSourceDoc;
		this.centitlementSourceDocName = centitlementSourceDocName;
		this.courtYearCourt = courtYearCourt;
		this.courtYearCourtName = courtYearCourtName;
		this.courtYearYear = courtYearYear;
		this.courtYearTxt = courtYearTxt;
		this.courtYearShare = courtYearShare;
		this.courtYearCaseId = courtYearCaseId;
		this.centitlementId = centitlementId;
	}
	
	public String getCentitlementSourceDocId() {
		return centitlementSourceDocId;
	}
	public void setCentitlementSourceDocId(String centitlementSourceDocId) {
		this.centitlementSourceDocId = centitlementSourceDocId;
	}
	public String getCentitlementSourceDoc() {
		return centitlementSourceDoc;
	}
	public void setCentitlementSourceDoc(String centitlementSourceDoc) {
		this.centitlementSourceDoc = centitlementSourceDoc;
	}
	public String getCentitlementSourceDocName() {
		return centitlementSourceDocName;
	}
	public void setCentitlementSourceDocName(String centitlementSourceDocName) {
		this.centitlementSourceDocName = centitlementSourceDocName;
	}
	public String getCourtYearCourt() {
		return courtYearCourt;
	}
	public void setCourtYearCourt(String courtYearCourt) {
		this.courtYearCourt = courtYearCourt;
	}
	public String getCourtYearCourtName() {
		return courtYearCourtName;
	}
	public void setCourtYearCourtName(String courtYearCourtName) {
		this.courtYearCourtName = courtYearCourtName;
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
	public int getCentitlementId() {
		return centitlementId;
	}
	public void setCentitlementId(int centitlementId) {
		this.centitlementId = centitlementId;
	}
	
	
}
