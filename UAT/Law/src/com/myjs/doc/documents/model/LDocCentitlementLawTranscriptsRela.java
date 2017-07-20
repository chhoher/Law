package com.myjs.doc.documents.model;

public class LDocCentitlementLawTranscriptsRela {
	
	private String centitlementLawTranscriptsRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementLawTranscriptsRela(String centitlementLawTranscriptsRelaId, String iD, String name, int centitlementId) {
		this.centitlementLawTranscriptsRelaId = centitlementLawTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementLawTranscriptsRelaId() {
		return centitlementLawTranscriptsRelaId;
	}

	public void setCentitlementLawTranscriptsRelaId(String centitlementLawTranscriptsRelaId) {
		this.centitlementLawTranscriptsRelaId = centitlementLawTranscriptsRelaId;
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
