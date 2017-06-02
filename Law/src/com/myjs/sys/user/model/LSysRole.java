package com.myjs.sys.user.model;

import java.util.Date;

public class LSysRole {
	private String roleId;
	private String roleCode;
	private String roleName;
	private String modifyUserId;
	private Date modifyDatetime;
	
	// add By Jia 2017-06-02 新增Vo
	private String isDelete;
	private String userRoleId;
	private String v;
	
	public LSysRole(){
		
	}
	
	public LSysRole(String roleId, String roleCode, String roleName, 
			String modifyUserId, Date modifyDatetime){
		this.roleId = roleId;
		this.roleCode = roleCode;
		this.roleName = roleName;
		this.modifyUserId = modifyUserId;
		this.modifyDatetime = modifyDatetime;		
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public String getRoleCode() {
		return roleCode;
	}

	public void setRoleCode(String roleCode) {
		this.roleCode = roleCode;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getModifyUserId() {
		return modifyUserId;
	}

	public void setModifyUserId(String modifyUserId) {
		this.modifyUserId = modifyUserId;
	}

	public Date getModifyDatetime() {
		return modifyDatetime;
	}

	public void setModifyDatetime(Date modifyDatetime) {
		this.modifyDatetime = modifyDatetime;
	}

	public String getIsDelete() {
		return isDelete;
	}

	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}

	public String getUserRoleId() {
		return userRoleId;
	}

	public void setUserRoleId(String userRoleId) {
		this.userRoleId = userRoleId;
	}

	public String getV() {
		return v;
	}

	public void setV(String v) {
		this.v = v;
	}

}
