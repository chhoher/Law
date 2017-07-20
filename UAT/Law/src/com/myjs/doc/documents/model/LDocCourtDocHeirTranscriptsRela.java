package com.myjs.doc.documents.model;

public class LDocCourtDocHeirTranscriptsRela {
	
	private String courtDocHeirTranscriptsRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocHeirTranscriptsRela(String courtDocHeirTranscriptsRelaId, String iD, String name, int courtDocId) {
		this.courtDocHeirTranscriptsRelaId = courtDocHeirTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocHeirTranscriptsRelaId() {
		return courtDocHeirTranscriptsRelaId;
	}

	public void setCourtDocHeirTranscriptsRelaId(String courtDocHeirTranscriptsRelaId) {
		this.courtDocHeirTranscriptsRelaId = courtDocHeirTranscriptsRelaId;
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
