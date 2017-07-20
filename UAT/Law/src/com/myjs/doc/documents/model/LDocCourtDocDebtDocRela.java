package com.myjs.doc.documents.model;

public class LDocCourtDocDebtDocRela {
	
	private String courtDocDebtDocRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocDebtDocRela(String courtDocDebtDocRelaId, String iD, String name, int courtDocId) {
		this.courtDocDebtDocRelaId = courtDocDebtDocRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocDebtDocRelaId() {
		return courtDocDebtDocRelaId;
	}

	public void setCourtDocDebtDocRelaId(String courtDocDebtDocRelaId) {
		this.courtDocDebtDocRelaId = courtDocDebtDocRelaId;
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
