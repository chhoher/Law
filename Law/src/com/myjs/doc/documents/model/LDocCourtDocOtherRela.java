package com.myjs.doc.documents.model;

public class LDocCourtDocOtherRela {
	
	private String courtDocOtherRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocOtherRela(String courtDocOtherRelaId, String iD, String name, int courtDocId) {
		this.courtDocOtherRelaId = courtDocOtherRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocOtherRelaId() {
		return courtDocOtherRelaId;
	}

	public void setCourtDocOtherRelaId(String courtDocOtherRelaId) {
		this.courtDocOtherRelaId = courtDocOtherRelaId;
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
