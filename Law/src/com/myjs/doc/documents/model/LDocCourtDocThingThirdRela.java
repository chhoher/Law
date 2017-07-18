package com.myjs.doc.documents.model;

public class LDocCourtDocThingThirdRela {
	
	private String courtDocThingThirdRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocThingThirdRela(String courtDocThingThirdRelaId, String iD, String name, int courtDocId) {
		this.courtDocThingThirdRelaId = courtDocThingThirdRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocThingThirdRelaId() {
		return courtDocThingThirdRelaId;
	}

	public void setCourtDocThingThirdRelaId(String courtDocThingThirdRelaId) {
		this.courtDocThingThirdRelaId = courtDocThingThirdRelaId;
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
