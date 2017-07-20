package com.myjs.doc.documents.model;

public class LDocCentitlementOtherRela {
	
	private String centitlementOtherRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementOtherRela(String centitlementOtherRelaId, String iD, String name, int centitlementId) {
		this.centitlementOtherRelaId = centitlementOtherRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementOtherRelaId() {
		return centitlementOtherRelaId;
	}

	public void setCentitlementOtherRelaId(String centitlementOtherRelaId) {
		this.centitlementOtherRelaId = centitlementOtherRelaId;
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
