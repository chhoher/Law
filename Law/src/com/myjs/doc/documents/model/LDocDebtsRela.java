package com.myjs.doc.documents.model;

public class LDocDebtsRela {
	
	private String debtsRelaId;
	private String ID;
	private String name;
	private int debtsId;
	
	public LDocDebtsRela(String debtsRelaId, String iD, String name, int debtsId) {
		this.debtsRelaId = debtsRelaId;
		ID = iD;
		this.name = name;
		this.debtsId = debtsId;
	}
	
	public String getDebtsRelaId() {
		return debtsRelaId;
	}
	public void setDebtsRelaId(String debtsRelaId) {
		this.debtsRelaId = debtsRelaId;
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

	public int getDebtsId() {
		return debtsId;
	}

	public void setDebtsId(int debtsId) {
		this.debtsId = debtsId;
	}
	
}
