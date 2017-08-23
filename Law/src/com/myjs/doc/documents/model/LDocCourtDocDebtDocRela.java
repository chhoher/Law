package com.myjs.doc.documents.model;

public class LDocCourtDocDebtDocRela {
	
	private String courtDocDebtDocRelaId;
	private String ID;
	private String name;
	private int courtDocId;
	private int num;
	private int P_ID;
	
	public LDocCourtDocDebtDocRela(){
		
	}
	
	public LDocCourtDocDebtDocRela(String courtDocDebtDocRelaId, String iD, String name, int courtDocId,
			int num, int P_ID) {
		this.courtDocDebtDocRelaId = courtDocDebtDocRelaId;
		ID = iD;
		this.name = name;
		this.courtDocId = courtDocId;
		this.num = num;
		this.P_ID = P_ID;
	}

	public String getCourtDocDebtDocRelaId() {
		return courtDocDebtDocRelaId;
	}

	public void setCourtDocDebtDocRelaId(String courtDocDebtDocRelaId) {
		this.courtDocDebtDocRelaId = courtDocDebtDocRelaId;
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
