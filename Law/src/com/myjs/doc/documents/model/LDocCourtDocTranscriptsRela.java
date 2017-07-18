package com.myjs.doc.documents.model;

public class LDocCourtDocTranscriptsRela {
	
	private String courtDocTranscriptsRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocTranscriptsRela(String courtDocTranscriptsRelaId, String iD, String name, int courtDocId) {
		this.courtDocTranscriptsRelaId = courtDocTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocTranscriptsRelaId() {
		return courtDocTranscriptsRelaId;
	}

	public void setCourtDocTranscriptsRelaId(String courtDocTranscriptsRelaId) {
		this.courtDocTranscriptsRelaId = courtDocTranscriptsRelaId;
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
