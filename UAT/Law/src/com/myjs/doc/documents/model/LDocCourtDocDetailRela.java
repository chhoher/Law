package com.myjs.doc.documents.model;

public class LDocCourtDocDetailRela {
	
	private String courtDocDetailRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocDetailRela(String courtDocDetailRelaId, String iD, String name, int courtDocId) {
		this.courtDocDetailRelaId = courtDocDetailRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocDetailRelaId() {
		return courtDocDetailRelaId;
	}

	public void setCourtDocDetailRelaId(String courtDocDetailRelaId) {
		this.courtDocDetailRelaId = courtDocDetailRelaId;
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
