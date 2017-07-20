package com.myjs.doc.documents.model;

public class LDocCourtDocCoOwnedTranscriptsRela {
	
	private String courtDocCoOwnedTranscriptsRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocCoOwnedTranscriptsRela(String courtDocCoOwnedTranscriptsRelaId, String iD, String name, int courtDocId) {
		this.courtDocCoOwnedTranscriptsRelaId = courtDocCoOwnedTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocCoOwnedTranscriptsRelaId() {
		return courtDocCoOwnedTranscriptsRelaId;
	}

	public void setCourtDocCoOwnedTranscriptsRelaId(String courtDocCoOwnedTranscriptsRelaId) {
		this.courtDocCoOwnedTranscriptsRelaId = courtDocCoOwnedTranscriptsRelaId;
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
