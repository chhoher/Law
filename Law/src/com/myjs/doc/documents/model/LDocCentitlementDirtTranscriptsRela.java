package com.myjs.doc.documents.model;

public class LDocCentitlementDirtTranscriptsRela {
	
	private String centitlementDirtTranscriptsRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementDirtTranscriptsRela(String centitlementDirtTranscriptsRelaId, String iD, String name, int centitlementId) {
		this.centitlementDirtTranscriptsRelaId = centitlementDirtTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementDirtTranscriptsRelaId() {
		return centitlementDirtTranscriptsRelaId;
	}

	public void setCentitlementDirtTranscriptsRelaId(String centitlementDirtTranscriptsRelaId) {
		this.centitlementDirtTranscriptsRelaId = centitlementDirtTranscriptsRelaId;
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
