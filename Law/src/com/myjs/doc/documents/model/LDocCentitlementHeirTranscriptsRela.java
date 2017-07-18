package com.myjs.doc.documents.model;

public class LDocCentitlementHeirTranscriptsRela {
	
	private String centitlementHeirTranscriptsRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementHeirTranscriptsRela(String centitlementHeirTranscriptsRelaId, String iD, String name, int centitlementId) {
		this.centitlementHeirTranscriptsRelaId = centitlementHeirTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementHeirTranscriptsRelaId() {
		return centitlementHeirTranscriptsRelaId;
	}

	public void setCentitlementHeirTranscriptsRelaId(String centitlementHeirTranscriptsRelaId) {
		this.centitlementHeirTranscriptsRelaId = centitlementHeirTranscriptsRelaId;
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
