package com.myjs.doc.documents.model;

public class LDocCourtDocFileRela {
	
	private String courtDocFileRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocFileRela(String courtDocFileRelaId, String iD, String name, int courtDocId) {
		this.courtDocFileRelaId = courtDocFileRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocFileRelaId() {
		return courtDocFileRelaId;
	}

	public void setCourtDocFileRelaId(String courtDocFileRelaId) {
		this.courtDocFileRelaId = courtDocFileRelaId;
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
