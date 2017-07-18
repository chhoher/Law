package com.myjs.doc.documents.model;

public class LDocCentitlementCoOwnedTranscriptsRela {
	
	private String centitlementCoOwnedTranscriptsRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementCoOwnedTranscriptsRela(String centitlementCoOwnedTranscriptsRelaId, String iD, String name, int centitlementId) {
		this.centitlementCoOwnedTranscriptsRelaId = centitlementCoOwnedTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementCoOwnedTranscriptsRelaId() {
		return centitlementCoOwnedTranscriptsRelaId;
	}

	public void setCentitlementCoOwnedTranscriptsRelaId(String centitlementCoOwnedTranscriptsRelaId) {
		this.centitlementCoOwnedTranscriptsRelaId = centitlementCoOwnedTranscriptsRelaId;
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
