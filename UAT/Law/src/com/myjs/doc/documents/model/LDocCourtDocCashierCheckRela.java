package com.myjs.doc.documents.model;

public class LDocCourtDocCashierCheckRela {
	
	private String courtDocCashierCheckRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocCashierCheckRela(String courtDocCashierCheckRelaId, String iD, String name, int courtDocId) {
		this.courtDocCashierCheckRelaId = courtDocCashierCheckRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocCashierCheckRelaId() {
		return courtDocCashierCheckRelaId;
	}

	public void setCourtDocCashierCheckRelaId(String courtDocCashierCheckRelaId) {
		this.courtDocCashierCheckRelaId = courtDocCashierCheckRelaId;
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
