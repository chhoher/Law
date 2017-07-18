package com.myjs.doc.documents.model;

public class LDocCentitlementRela {
	
	private String centitlementRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementRela(String centitlementRelaId, String iD, String name, int centitlementId) {
		this.centitlementRelaId = centitlementRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementRelaId() {
		return centitlementRelaId;
	}

	public void setCentitlementRelaId(String centitlementRelaId) {
		this.centitlementRelaId = centitlementRelaId;
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
