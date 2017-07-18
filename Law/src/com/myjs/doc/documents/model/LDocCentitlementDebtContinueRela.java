package com.myjs.doc.documents.model;

public class LDocCentitlementDebtContinueRela {
	
	private String centitlementDebtContinueRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementDebtContinueRela(String centitlementDebtContinueRelaId, String iD, String name, int centitlementId) {
		this.centitlementDebtContinueRelaId = centitlementDebtContinueRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementDebtContinueRelaId() {
		return centitlementDebtContinueRelaId;
	}

	public void setCentitlementDebtContinueRelaId(String centitlementDebtContinueRelaId) {
		this.centitlementDebtContinueRelaId = centitlementDebtContinueRelaId;
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
