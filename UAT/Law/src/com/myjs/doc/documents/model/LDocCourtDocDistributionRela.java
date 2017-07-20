package com.myjs.doc.documents.model;

public class LDocCourtDocDistributionRela {
	
	private String courtDocDistributionRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocDistributionRela(String courtDocDistributionRelaId, String iD, String name, int courtDocId) {
		this.courtDocDistributionRelaId = courtDocDistributionRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocDistributionRelaId() {
		return courtDocDistributionRelaId;
	}

	public void setCourtDocDistributionRelaId(String courtDocDistributionRelaId) {
		this.courtDocDistributionRelaId = courtDocDistributionRelaId;
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

	public int getCourtDocId() {
		return courtDocId;
	}

	public void setCourtDocId(int courtDocId) {
		this.courtDocId = courtDocId;
	}

	
}
