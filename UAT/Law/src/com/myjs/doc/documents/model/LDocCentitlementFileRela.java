package com.myjs.doc.documents.model;

public class LDocCentitlementFileRela {
	
	private String centitlementFileRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	
	public LDocCentitlementFileRela(String centitlementFileRelaId, String iD, String name, int centitlementId) {
		this.centitlementFileRelaId = centitlementFileRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
	}

	public String getCentitlementFileRelaId() {
		return centitlementFileRelaId;
	}

	public void setCentitlementFileRelaId(String centitlementFileRelaId) {
		this.centitlementFileRelaId = centitlementFileRelaId;
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
