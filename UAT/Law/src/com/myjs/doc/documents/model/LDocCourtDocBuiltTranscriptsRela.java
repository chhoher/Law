package com.myjs.doc.documents.model;

public class LDocCourtDocBuiltTranscriptsRela {
	
	private String courtDocBuiltTranscriptsRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocBuiltTranscriptsRela(String courtDocBuiltTranscriptsRelaId, String iD, String name, int courtDocId) {
		this.courtDocBuiltTranscriptsRelaId = courtDocBuiltTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocBuiltTranscriptsRelaId() {
		return courtDocBuiltTranscriptsRelaId;
	}

	public void setCourtDocBuiltTranscriptsRelaId(String courtDocBuiltTranscriptsRelaId) {
		this.courtDocBuiltTranscriptsRelaId = courtDocBuiltTranscriptsRelaId;
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
