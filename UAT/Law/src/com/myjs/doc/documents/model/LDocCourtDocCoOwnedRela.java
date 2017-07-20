package com.myjs.doc.documents.model;

public class LDocCourtDocCoOwnedRela {
	
	private String courtDocCoOwnedRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocCoOwnedRela(String courtDocCoOwnedRelaId, String iD, String name, int courtDocId) {
		this.courtDocCoOwnedRelaId = courtDocCoOwnedRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocCoOwnedRelaId() {
		return courtDocCoOwnedRelaId;
	}

	public void setCourtDocCoOwnedRelaId(String courtDocCoOwnedRelaId) {
		this.courtDocCoOwnedRelaId = courtDocCoOwnedRelaId;
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
