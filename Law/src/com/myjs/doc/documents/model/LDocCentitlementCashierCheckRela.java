package com.myjs.doc.documents.model;

public class LDocCentitlementCashierCheckRela {
	
	private String centitlementCashierCheckRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementCashierCheckRela(String centitlementCashierCheckRelaId, String iD, String name, int centitlementId) {
		this.centitlementCashierCheckRelaId = centitlementCashierCheckRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementCashierCheckRelaId() {
		return centitlementCashierCheckRelaId;
	}

	public void setCentitlementCashierCheckRelaId(String centitlementCashierCheckRelaId) {
		this.centitlementCashierCheckRelaId = centitlementCashierCheckRelaId;
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
