package com.myjs.doc.documents.model;

public class LDocCashiercheckRela {
	
	private String cashiercheckRelaId;
	private String ID;
	private String name;
	private int cashiercheckId;
	
	public LDocCashiercheckRela(String cashiercheckRelaId, String iD, String name, int cashiercheckId) {
		this.cashiercheckRelaId = cashiercheckRelaId;
		ID = iD;
		this.name = name;
		this.cashiercheckId = cashiercheckId;
	}

	public String getCashiercheckRelaId() {
		return cashiercheckRelaId;
	}

	public void setCashiercheckRelaId(String cashiercheckRelaId) {
		this.cashiercheckRelaId = cashiercheckRelaId;
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

	public int getCashiercheckId() {
		return cashiercheckId;
	}

	public void setCashiercheckId(int cashiercheckId) {
		this.cashiercheckId = cashiercheckId;
	}
	
	
}
