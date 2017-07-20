package com.myjs.doc.documents.model;

public class LDocCourtDocRecoveryRela {
	
	private String courtDocRecoveryRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocRecoveryRela(String courtDocRecoveryRelaId, String iD, String name, int courtDocId) {
		this.courtDocRecoveryRelaId = courtDocRecoveryRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocRecoveryRelaId() {
		return courtDocRecoveryRelaId;
	}

	public void setCourtDocRecoveryRelaId(String courtDocRecoveryRelaId) {
		this.courtDocRecoveryRelaId = courtDocRecoveryRelaId;
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
