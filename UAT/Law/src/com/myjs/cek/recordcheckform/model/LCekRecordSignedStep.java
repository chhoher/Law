package com.myjs.cek.recordcheckform.model;

public class LCekRecordSignedStep implements java.io.Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 5106885760495848855L;
	private String signedId;
	private int stepPay1;
	private int stepPay2;
	private int stepPay3;
	private int stepPay4;
	private int stepPay5;
	private int stepPay6;
	private int stepPay7;
	private int stepPay8;
	private int stepPay9;
	private int stepPay10;
	private int stepPay11;
	private int stepPay12;
	

	public LCekRecordSignedStep() {

	}

	public LCekRecordSignedStep(String signedId, int stepPay1, int stepPay2, int stepPay3, int stepPay4,
			int stepPay5, int stepPay6, int stepPay7, int stepPay8, int stepPay9, int stepPay10,
			int stepPay11, int stepPay12) {
		this.signedId = signedId;
		this.stepPay1 = stepPay1;
		this.stepPay2 = stepPay2;
		this.stepPay3 = stepPay3;
		this.stepPay4 = stepPay4;
		this.stepPay5 = stepPay5;
		this.stepPay6 = stepPay6;
		this.stepPay7 = stepPay7;
		this.stepPay8 = stepPay8;
		this.stepPay9 = stepPay9;
		this.stepPay10 = stepPay10;
		this.stepPay11 = stepPay11;
		this.stepPay12 = stepPay12;
	}

	public String getSignedId() {
		return signedId;
	}

	public void setSignedId(String signedId) {
		this.signedId = signedId;
	}

	public int getStepPay1() {
		return stepPay1;
	}

	public void setStepPay1(int stepPay1) {
		this.stepPay1 = stepPay1;
	}

	public int getStepPay2() {
		return stepPay2;
	}

	public void setStepPay2(int stepPay2) {
		this.stepPay2 = stepPay2;
	}

	public int getStepPay3() {
		return stepPay3;
	}

	public void setStepPay3(int stepPay3) {
		this.stepPay3 = stepPay3;
	}

	public int getStepPay4() {
		return stepPay4;
	}

	public void setStepPay4(int stepPay4) {
		this.stepPay4 = stepPay4;
	}

	public int getStepPay5() {
		return stepPay5;
	}

	public void setStepPay5(int stepPay5) {
		this.stepPay5 = stepPay5;
	}

	public int getStepPay6() {
		return stepPay6;
	}

	public void setStepPay6(int stepPay6) {
		this.stepPay6 = stepPay6;
	}

	public int getStepPay7() {
		return stepPay7;
	}

	public void setStepPay7(int stepPay7) {
		this.stepPay7 = stepPay7;
	}

	public int getStepPay8() {
		return stepPay8;
	}

	public void setStepPay8(int stepPay8) {
		this.stepPay8 = stepPay8;
	}

	public int getStepPay9() {
		return stepPay9;
	}

	public void setStepPay9(int stepPay9) {
		this.stepPay9 = stepPay9;
	}

	public int getStepPay10() {
		return stepPay10;
	}

	public void setStepPay10(int stepPay10) {
		this.stepPay10 = stepPay10;
	}

	public int getStepPay11() {
		return stepPay11;
	}

	public void setStepPay11(int stepPay11) {
		this.stepPay11 = stepPay11;
	}

	public int getStepPay12() {
		return stepPay12;
	}

	public void setStepPay12(int stepPay12) {
		this.stepPay12 = stepPay12;
	}

	public void setNumStepPay(String[] Listnum){
		for(int i = 0; i < Listnum.length; i ++){
			switch(i){
				case 0 :
					this.stepPay1 = Integer.valueOf(Listnum[i]);
					break;
				case 1 :
					this.stepPay2 = Integer.valueOf(Listnum[i]);
					break;
				case 2 :
					this.stepPay3 = Integer.valueOf(Listnum[i]);
					break;
				case 3 :
					this.stepPay4 = Integer.valueOf(Listnum[i]);
					break;
				case 4 :
					this.stepPay5 = Integer.valueOf(Listnum[i]);
					break;
				case 5 :
					this.stepPay6 = Integer.valueOf(Listnum[i]);
					break;
				case 6 :
					this.stepPay7 = Integer.valueOf(Listnum[i]);
					break;
				case 7 :
					this.stepPay8 = Integer.valueOf(Listnum[i]);
					break;
				case 8 :
					this.stepPay9 = Integer.valueOf(Listnum[i]);
					break;
				case 9 :
					this.stepPay10 = Integer.valueOf(Listnum[i]);
					break;
				case 10 :
					this.stepPay11 = Integer.valueOf(Listnum[i]);
					break;
				case 11 :
					this.stepPay12 = Integer.valueOf(Listnum[i]);
					break;
			}
		}
	}
	
}
