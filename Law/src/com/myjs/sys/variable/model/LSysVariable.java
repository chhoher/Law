package com.myjs.sys.variable.model;

import java.util.Date;

public class LSysVariable implements java.io.Serializable {

	private static final long serialVersionUID = -2853414063049657387L;

	private String variableId;
	private String variableType;
	private String variableName;
	private Date createDatetime;
	private String createUserId;
	private Date modifyDatetime;
	private String modifyUserId;
	private String isDelete;
	private String variableValue;

	public LSysVariable() {

	}

	public LSysVariable(String variableId, String variableType, String variableName, Date createDatetime,
			String createUserId, Date modifyDatetime, String modifyUserId, String isDelete, String variableValue) {
		this.variableId = variableId;
		this.variableType = variableType;
		this.variableName = variableName;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
		this.modifyDatetime = modifyDatetime;
		this.modifyUserId = modifyUserId;
		this.isDelete = isDelete;
		this.variableValue = variableValue;
	}

	public String getVariableId() {
		return variableId;
	}

	public void setVariableId(String variableId) {
		this.variableId = variableId;
	}

	public String getVariableType() {
		return variableType;
	}

	public void setVariableType(String variableType) {
		this.variableType = variableType;
	}

	public String getVariableName() {
		return variableName;
	}

	public void setVariableName(String variableName) {
		this.variableName = variableName;
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

	public String getVariableValue() {
		return variableValue;
	}

	public void setVariableValue(String variableValue) {
		this.variableValue = variableValue;
	}

}
