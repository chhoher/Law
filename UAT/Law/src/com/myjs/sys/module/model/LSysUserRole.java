package com.myjs.sys.module.model;

public class LSysUserRole {
	private String userRoleId;
	private String userId;
	private String roleId;
	private String isDelete;
	
	public LSysUserRole(){
		
	}
	
	public LSysUserRole(String userRoleId, String userId, String roleId, String isDelete) {
		this.userRoleId = userRoleId;
		this.userId = userId;
		this.roleId = roleId;
		this.isDelete = isDelete;
	}
	
	public String getUserRoleId() {
		return userRoleId;
	}
	public void setUserRoleId(String userRoleId) {
		this.userRoleId = userRoleId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}
	
}
