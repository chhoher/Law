package com.myjs.cek.recordcheckform.model;


public class LCekRecordOtherfile implements java.io.Serializable {
	
	private static final long serialVersionUID = -5241557043026223998L;
	private String signedId;
	private String fileName;
	private String filePath;
	private String Isselected;

	public LCekRecordOtherfile() {

	}

	public LCekRecordOtherfile(String signedId, String fileName, 
			String filePath, String Isselected) {
		this.signedId = signedId;
		this.fileName = fileName;
		this.filePath = filePath;
		this.Isselected = Isselected;
	}

	public String getSignedId() {
		return signedId;
	}

	public void setSignedId(String signedId) {
		this.signedId = signedId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public String getIsselected() {
		return Isselected;
	}

	public void setIsselected(String isselected) {
		Isselected = isselected;
	}

}
