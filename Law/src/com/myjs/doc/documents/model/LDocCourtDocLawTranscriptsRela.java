package com.myjs.doc.documents.model;

public class LDocCourtDocLawTranscriptsRela {
	
	private String courtDocLawTranscriptsRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocLawTranscriptsRela(String courtDocLawTranscriptsRelaId, String iD, String name, int courtDocId) {
		this.courtDocLawTranscriptsRelaId = courtDocLawTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocLawTranscriptsRelaId() {
		return courtDocLawTranscriptsRelaId;
	}

	public void setCourtDocLawTranscriptsRelaId(String courtDocLawTranscriptsRelaId) {
		this.courtDocLawTranscriptsRelaId = courtDocLawTranscriptsRelaId;
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
