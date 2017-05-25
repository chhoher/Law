package com.myjs.sys.module.model;

import java.util.Date;

public class LSysFunction {
	
	private String functionId;
	private String functionName;
	private String moduleId;
	private Date createDatetime;
	private String createUserId;
	private String functionUrl;
	private String isDefault;
	private String isDelete;
	private Date modifyDatetime;
	private String modifyUserId;
	
	public LSysFunction(){
		
	}
	
	public LSysFunction(String functionId, String functionName, String moduleId, Date createDatetime,
			String createUserId, String functionUrl, String isDefault, String isDelete, Date modifyDatetime, String modifyUserId){
		this.functionId = functionId;
		this.functionName = functionName;
		this.moduleId = moduleId;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
		this.functionUrl = functionUrl;
		this.isDefault = isDefault;
		this.isDelete = isDelete;
		this.modifyDatetime = modifyDatetime;
		this.modifyUserId = modifyUserId;
	}
	
	public String getFunctionId() {
		return functionId;
	}
	public void setFunctionId(String functionId) {
		this.functionId = functionId;
	}
	public String getFunctionName() {
		return functionName;
	}
	public void setFunctionName(String functionName) {
		this.functionName = functionName;
	}
	public String getModuleId() {
		return moduleId;
	}
	public void setModuleId(String moduleId) {
		this.moduleId = moduleId;
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
	public String getFunctionUrl() {
		return functionUrl;
	}
	public void setFunctionUrl(String functionUrl) {
		this.functionUrl = functionUrl;
	}
	public String getIsDefault() {
		return isDefault;
	}
	public void setIsDefault(String isDefault) {
		this.isDefault = isDefault;
	}
	public String getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
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
	
}
