package com.myjs.doc.documents.model;

public class LDocCentitlementDebtDocRela {
	
	private String centitlementDebtDocRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementDebtDocRela(String centitlementDebtDocRelaId, String iD, String name, int centitlementId) {
		this.centitlementDebtDocRelaId = centitlementDebtDocRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementDebtDocRelaId() {
		return centitlementDebtDocRelaId;
	}

	public void setCentitlementDebtDocRelaId(String centitlementDebtDocRelaId) {
		this.centitlementDebtDocRelaId = centitlementDebtDocRelaId;
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
