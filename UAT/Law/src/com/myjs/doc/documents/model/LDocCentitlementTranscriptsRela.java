package com.myjs.doc.documents.model;

public class LDocCentitlementTranscriptsRela {
	
	private String centitlementTranscriptsRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementTranscriptsRela(String centitlementTranscriptsRelaId, String iD, String name, int centitlementId) {
		this.centitlementTranscriptsRelaId = centitlementTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementTranscriptsRelaId() {
		return centitlementTranscriptsRelaId;
	}

	public void setCentitlementTranscriptsRelaId(String centitlementTranscriptsRelaId) {
		this.centitlementTranscriptsRelaId = centitlementTranscriptsRelaId;
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

	public int getCentitlementId() {
		return centitlementId;
	}

	public void setCentitlementId(int centitlementId) {
		this.centitlementId = centitlementId;
	}
	
	
}
