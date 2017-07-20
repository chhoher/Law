package com.myjs.doc.documents.model;

public class LDocCentitlementCoOwnedRela {
	
	private String centitlementCoOwnedRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementCoOwnedRela(String centitlementCoOwnedRelaId, String iD, String name, int centitlementId) {
		this.centitlementCoOwnedRelaId = centitlementCoOwnedRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementCoOwnedRelaId() {
		return centitlementCoOwnedRelaId;
	}

	public void setCentitlementCoOwnedRelaId(String centitlementCoOwnedRelaId) {
		this.centitlementCoOwnedRelaId = centitlementCoOwnedRelaId;
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
