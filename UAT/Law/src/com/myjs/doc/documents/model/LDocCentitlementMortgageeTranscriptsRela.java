package com.myjs.doc.documents.model;

public class LDocCentitlementMortgageeTranscriptsRela {
	
	private String centitlementMortgageeTranscriptsRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementMortgageeTranscriptsRela(String centitlementMortgageeTranscriptsRelaId, String iD, String name, int centitlementId) {
		this.centitlementMortgageeTranscriptsRelaId = centitlementMortgageeTranscriptsRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementMortgageeTranscriptsRelaId() {
		return centitlementMortgageeTranscriptsRelaId;
	}

	public void setCentitlementMortgageeTranscriptsRelaId(String centitlementMortgageeTranscriptsRelaId) {
		this.centitlementMortgageeTranscriptsRelaId = centitlementMortgageeTranscriptsRelaId;
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
