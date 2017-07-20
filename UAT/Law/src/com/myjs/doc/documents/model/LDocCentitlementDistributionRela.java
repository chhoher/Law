package com.myjs.doc.documents.model;

public class LDocCentitlementDistributionRela {
	
	private String centitlementDistributionRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementDistributionRela(String centitlementDistributionRelaId, String iD, String name, int centitlementId) {
		this.centitlementDistributionRelaId = centitlementDistributionRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementDistributionRelaId() {
		return centitlementDistributionRelaId;
	}

	public void setCentitlementDistributionRelaId(String centitlementDistributionRelaId) {
		this.centitlementDistributionRelaId = centitlementDistributionRelaId;
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
