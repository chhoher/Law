package com.myjs.doc.documents.model;

public class LDocDebtsRela {
	
	private String debtsRelaId;
	private String ID;
	private String name;
	private int debtsId;
	private int num;
	private int P_ID;
	
	public LDocDebtsRela(String debtsRelaId, String iD, String name, int debtsId, int num, int P_ID) {
		this.debtsRelaId = debtsRelaId;
		ID = iD;
		this.name = name;
		this.debtsId = debtsId;
		this.num = num;
		this.P_ID = P_ID;
	}
	
	public LDocDebtsRela() {
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
