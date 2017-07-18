package com.myjs.doc.documents.model;

public class LDocCentitlementBuiltTranscriptsRela {
	
	private String centitlementBuiltTranscriptsRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementBuiltTranscriptsRela(String centitlementBuiltTranscriptsRelaId, String iD, String name, int centitlementId) {
		this.centitlementBuiltTranscriptsRelaId = centitlementBuiltTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementBuiltTranscriptsRelaId() {
		return centitlementBuiltTranscriptsRelaId;
	}

	public void setCentitlementBuiltTranscriptsRelaId(String centitlementBuiltTranscriptsRelaId) {
		this.centitlementBuiltTranscriptsRelaId = centitlementBuiltTranscriptsRelaId;
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
