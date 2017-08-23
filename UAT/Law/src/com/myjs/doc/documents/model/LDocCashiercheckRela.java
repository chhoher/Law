package com.myjs.doc.documents.model;

public class LDocCashiercheckRela {
	
	private String cashiercheckRelaId;
	private String ID;
	private String name;
	private int cashiercheckId;
	private int num;
	private int P_ID;
	
	public LDocCashiercheckRela(){
	}
	
	public LDocCashiercheckRela(String cashiercheckRelaId, String iD, String name, int cashiercheckId, int num, int P_ID) {
		this.cashiercheckRelaId = cashiercheckRelaId;
		ID = iD;
		this.name = name;
		this.cashiercheckId = cashiercheckId;
		this.num = num;
		this.P_ID = P_ID;
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

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public int getP_ID() {
		return P_ID;
	}

	public void setP_ID(int p_ID) {
		P_ID = p_ID;
	}
	
	
}
