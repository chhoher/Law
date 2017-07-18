package com.myjs.doc.documents.model;

public class LDocCentitlementThingThirdRela {
	
	private String centitlementThingThirdRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementThingThirdRela(String centitlementThingThirdRelaId, String iD, String name, int centitlementId) {
		this.centitlementThingThirdRelaId = centitlementThingThirdRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementThingThirdRelaId() {
		return centitlementThingThirdRelaId;
	}

	public void setCentitlementThingThirdRelaId(String centitlementThingThirdRelaId) {
		this.centitlementThingThirdRelaId = centitlementThingThirdRelaId;
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
