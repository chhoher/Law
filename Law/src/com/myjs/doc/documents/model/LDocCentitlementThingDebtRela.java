package com.myjs.doc.documents.model;

public class LDocCentitlementThingDebtRela {
	
	private String centitlementThingDebtRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementThingDebtRela(String centitlementThingDebtRelaId, String iD, String name, int centitlementId) {
		this.centitlementThingDebtRelaId = centitlementThingDebtRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementThingDebtRelaId() {
		return centitlementThingDebtRelaId;
	}

	public void setCentitlementThingDebtRelaId(String centitlementThingDebtRelaId) {
		this.centitlementThingDebtRelaId = centitlementThingDebtRelaId;
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
