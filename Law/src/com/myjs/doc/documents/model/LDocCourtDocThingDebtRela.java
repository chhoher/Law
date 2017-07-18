package com.myjs.doc.documents.model;

public class LDocCourtDocThingDebtRela {
	
	private String courtDocThingDebtRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	
	public LDocCourtDocThingDebtRela(String courtDocThingDebtRelaId, String iD, String name, int courtDocId) {
		this.courtDocThingDebtRelaId = courtDocThingDebtRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
	}

	public String getCourtDocThingDebtRelaId() {
		return courtDocThingDebtRelaId;
	}

	public void setCourtDocThingDebtRelaId(String courtDocThingDebtRelaId) {
		this.courtDocThingDebtRelaId = courtDocThingDebtRelaId;
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
