package com.myjs.cek.checkform.model;
// Generated 2017/5/5 16:55:51 by Jia


/**
 * LCekColumn generated by JiaJia
 */
public class LCekUserBank implements java.io.Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -722745344823090804L;
	private String userBankId;
	private String memno;
	private String memnm;
	private String bankName;
	
	public LCekUserBank() {
	}

	public LCekUserBank(String userBankId, String memno, String memnm, String bankName) {
		this.userBankId = userBankId;
		this.memno = memno;
		this.memnm = memnm;
		this.bankName = bankName;
	}

	public String getUserBankId() {
		return userBankId;
	}

	public void setUserBankId(String userBankId) {
		this.userBankId = userBankId;
	}

	public String getMemno() {
		return memno;
	}

	public void setMemno(String memno) {
		this.memno = memno;
	}

	public String getMemnm() {
		return memnm;
	}

	public void setMemnm(String memnm) {
		this.memnm = memnm;
	}

	public String getBankName() {
		return bankName;
	}

	public void setBankName(String bankName) {
		this.bankName = bankName;
	}

	
}
