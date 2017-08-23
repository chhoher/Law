package com.myjs.doc.documents.model;

public class LDocCentitlementRela {
	
	private String centitlementRelaId;
	private String ID;
	private String name;
	private int centitlementId;
	private int num;
	private int P_ID;
	
	public LDocCentitlementRela(){
		
	}
	
	public LDocCentitlementRela(String centitlementRelaId, String iD, String name, int centitlementId,
			int num, int P_ID) {
		this.centitlementRelaId = centitlementRelaId;
		ID = iD;
		this.name = name;
		this.centitlementId = centitlementId;
		this.num = num;
		this.P_ID = P_ID;
	}

	public String getCentitlementRelaId() {
		return centitlementRelaId;
	}

	public void setCentitlementRelaId(String centitlementRelaId) {
		this.centitlementRelaId = centitlementRelaId;
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
