package com.myjs.cek.checkform.model;
// Generated 2017/3/23 �U�� 01:55:51 by Hibernate Tools 5.2.0.CR1

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * LCekFlow generated by hbm2java
 */
@Entity
@Table(name = "L_CEK_FLOW", schema = "dbo", catalog = "Legal")
public class LCekFlow implements java.io.Serializable {

	private static final long serialVersionUID = -3486518454558570341L;
	private String flowId;
	private String flowCode;
	private String flowName;
	private String flowType;
	private String isDelete;
	private String avaliable;
	private Date createDatetime;
	private String createUserId;
	private Date modifyDatetime;
	private String modifyUserId;

	public LCekFlow() {
	}

	public LCekFlow(String flowId, String flowCode, String flowName, String flowType, String isDelete, String avaliable,
			Date createDatetime, String createUserId, Date modifyDatetime, String modifyUserId) {
		this.flowId = flowId;
		this.flowCode = flowCode;
		this.flowName = flowName;
		this.flowType = flowType;
		this.isDelete = isDelete;
		this.avaliable = avaliable;
		this.createDatetime = createDatetime;
		this.createUserId = createUserId;
		this.modifyDatetime = modifyDatetime;
		this.modifyUserId = modifyUserId;
	}

	@Id

	@Column(name = "flow_id", unique = true, nullable = false, length = 50)
	public String getFlowId() {
		return this.flowId;
	}

	public void setFlowId(String flowId) {
		this.flowId = flowId;
	}

	@Column(name = "flow_name", nullable = false, length = 30)
	public String getFlowName() {
		return this.flowName;
	}

	public void setFlowName(String flowName) {
		this.flowName = flowName;
	}

	public String getFlowCode() {
		return flowCode;
	}

	public void setFlowCode(String flowCode) {
		this.flowCode = flowCode;
	}

	public String getFlowType() {
		return flowType;
	}

	public void setFlowType(String flowType) {
		this.flowType = flowType;
	}

	public String getIsDelete() {
		return isDelete;
	}

	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}

	public String getAvaliable() {
		return avaliable;
	}

	public void setAvaliable(String avaliable) {
		this.avaliable = avaliable;
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

}
