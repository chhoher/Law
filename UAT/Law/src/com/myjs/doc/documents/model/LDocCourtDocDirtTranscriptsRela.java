package com.myjs.doc.documents.model;

public class LDocCourtDocDirtTranscriptsRela {
	
	private String courtDocDirtTranscriptsRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocDirtTranscriptsRela(String courtDocDirtTranscriptsRelaId, String iD, String name, int courtDocId) {
		this.courtDocDirtTranscriptsRelaId = courtDocDirtTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocDirtTranscriptsRelaId() {
		return courtDocDirtTranscriptsRelaId;
	}

	public void setCourtDocDirtTranscriptsRelaId(String courtDocDirtTranscriptsRelaId) {
		this.courtDocDirtTranscriptsRelaId = courtDocDirtTranscriptsRelaId;
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
