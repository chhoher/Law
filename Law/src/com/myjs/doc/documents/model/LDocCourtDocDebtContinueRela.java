package com.myjs.doc.documents.model;

public class LDocCourtDocDebtContinueRela {
	
	private String courtDocDebtContinueRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocDebtContinueRela(String courtDocDebtContinueRelaId, String iD, String name, int courtDocId) {
		this.courtDocDebtContinueRelaId = courtDocDebtContinueRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocDebtContinueRelaId() {
		return courtDocDebtContinueRelaId;
	}

	public void setCourtDocDebtContinueRelaId(String courtDocDebtContinueRelaId) {
		this.courtDocDebtContinueRelaId = courtDocDebtContinueRelaId;
	}

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getCourtDocId() {
		return courtDocId;
	}

	public void setCourtDocId(int courtDocId) {
		this.courtDocId = courtDocId;
	}

	
}
