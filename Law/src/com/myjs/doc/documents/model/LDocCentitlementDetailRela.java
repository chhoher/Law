package com.myjs.doc.documents.model;

public class LDocCentitlementDetailRela {
	
	private String centitlementDetailRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementDetailRela(String centitlementDetailRelaId, String iD, String name, int centitlementId) {
		this.centitlementDetailRelaId = centitlementDetailRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementDetailRelaId() {
		return centitlementDetailRelaId;
	}

	public void setCentitlementDetailRelaId(String centitlementDetailRelaId) {
		this.centitlementDetailRelaId = centitlementDetailRelaId;
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
