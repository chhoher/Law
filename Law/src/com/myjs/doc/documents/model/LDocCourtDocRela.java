package com.myjs.doc.documents.model;

public class LDocCourtDocRela {
	
	private String courtDocRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocRela(String courtDocRelaId, String iD, String name, int courtDocId) {
		this.courtDocRelaId = courtDocRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocRelaId() {
		return courtDocRelaId;
	}

	public void setCourtDocRelaId(String courtDocRelaId) {
		this.courtDocRelaId = courtDocRelaId;
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
