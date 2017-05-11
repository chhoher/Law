package com.myjs.sys.file.model;

import java.util.Date;

public class LSysFile implements java.io.Serializable {

	private static final long serialVersionUID = -5301211116148302062L;
	private String fileId;
	private String fileName;
	private String fileDisplayName;
	private String fileType;
	private String filePath;
	private Date createDatetime;
	private String createUserId;
	private Date modifyDatetime;
	private String modifyUserId;
	private String isDelete;
	private String fileOwner;
	private String fileSigned;
	private String vocheckformfileId;// 放Mapping的checkformfileId
	private String voisdelete;// 放Mapping的Isdelete

	public LSysFile() {

	}

	public LSysFile(String fileId, String fileName, String fileDisplayName, String fileType, String filePath, Date createDatetime, String createUserId,
	 Date modifyDatetime, String modifyUserId, String isDelete, String fileOwner, String fileSigned) {
		this.fileId = fileId;
		this.fileName = fileName;
		this.fileDisplayName = fileDisplayName;
		this.fileType = fileType;
		this.filePath = filePath;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
		this.modifyDatetime = modifyDatetime;
		this.modifyUserId = modifyUserId;
		this.isDelete = isDelete;
		this.fileOwner = fileOwner;
		this.fileSigned = fileSigned;
	}

	public String getFileId() {
		return fileId;
	}

	public void setFileId(String fileId) {
		this.fileId = fileId;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFileDisplayName() {
		return fileDisplayName;
	}

	public void setFileDisplayName(String fileDisplayName) {
		this.fileDisplayName = fileDisplayName;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	public Date getCreateDatetime() {
		return createDatetime;
	}

	public void setCreateDatetime(Date createDatetime) {
		this.createDatetime = createDatetime;
	}

	public String getCreateUserId() {
		return createUserId;
	}

	public void setCreateUserId(String createUserId) {
		this.createUserId = createUserId;
	}

	public Date getModifyDatetime() {
		return modifyDatetime;
	}

	public void setModifyDatetime(Date modifyDatetime) {
		this.modifyDatetime = modifyDatetime;
	}

	public String getModifyUserId() {
		return modifyUserId;
	}

	public void setModifyUserId(String modifyUserId) {
		this.modifyUserId = modifyUserId;
	}

	public String getIsDelete() {
		return isDelete;
	}

	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}

	public String getFileOwner() {
		return fileOwner;
	}

	public void setFileOwner(String fileOwner) {
		this.fileOwner = fileOwner;
	}

	public String getFileSigned() {
		return fileSigned;
	}

	public void setFileSigned(String fileSigned) {
		this.fileSigned = fileSigned;
	}

	public String getVocheckformfileId() {
		return vocheckformfileId;
	}

	public void setVocheckformfileId(String vocheckformfileId) {
		this.vocheckformfileId = vocheckformfileId;
	}

	public String getVoisdelete() {
		return voisdelete;
	}

	public void setVoisdelete(String voisdelete) {
		this.voisdelete = voisdelete;
	}

	
}
