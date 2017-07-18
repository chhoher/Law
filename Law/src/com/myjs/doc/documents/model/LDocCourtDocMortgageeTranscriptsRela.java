package com.myjs.doc.documents.model;

public class LDocCourtDocMortgageeTranscriptsRela {
	
	private String courtDocMortgageeTranscriptsRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocMortgageeTranscriptsRela(String courtDocMortgageeTranscriptsRelaId, String iD, String name, int courtDocId) {
		this.courtDocMortgageeTranscriptsRelaId = courtDocMortgageeTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocMortgageeTranscriptsRelaId() {
		return courtDocMortgageeTranscriptsRelaId;
	}

	public void setCourtDocMortgageeTranscriptsRelaId(String courtDocMortgageeTranscriptsRelaId) {
		this.courtDocMortgageeTranscriptsRelaId = courtDocMortgageeTranscriptsRelaId;
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
