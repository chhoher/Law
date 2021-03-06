package com.myjs.doc.documents.model;

public class LDocClaimsdocsRela {
	
	private String claimsdocsRelaId;
	private String ID;
	private String name;
	private int num;
	private int P_ID;
	private int claimsdocsId;
	
	public LDocClaimsdocsRela(String claimsdocsRelaId, String iD, String name, int claimsdocsId) {
		this.claimsdocsRelaId = claimsdocsRelaId;
		ID = iD;
		this.name = name;
		this.claimsdocsId = claimsdocsId;
	}
	
	public LDocClaimsdocsRela() {
	}

	public String getClaimsdocsRelaId() {
		return claimsdocsRelaId;
	}
	public void setClaimsdocsRelaId(String claimsdocsRelaId) {
		this.claimsdocsRelaId = claimsdocsRelaId;
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

	public int getClaimsdocsId() {
		return claimsdocsId;
	}

	public void setClaimsdocsId(int claimsdocsId) {
		this.claimsdocsId = claimsdocsId;
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
