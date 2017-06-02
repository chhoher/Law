package com.myjs.sys.module.model;

public class LSysRoleFunction {
	private String roleFunctionId;
	private String roleId;
	private String functionId;
	private String isDelete;
	
	public LSysRoleFunction(String roleFunctionId, String roleId, String functionId, String isDelete) {
		this.roleFunctionId = roleFunctionId;
		this.roleId = roleId;
		this.functionId = functionId;
		this.isDelete = isDelete;
	}
	
	public LSysRoleFunction(){
		
	}
	
	public String getRoleFunctionId() {
		return roleFunctionId;
	}
	public void setRoleFunctionId(String roleFunctionId) {
		this.roleFunctionId = roleFunctionId;
	}
	public String getRoleId() {
		return roleId;
	}
	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}
	public String getFunctionId() {
		return functionId;
	}
	public void setFunctionId(String functionId) {
		this.functionId = functionId;
	}
	public String getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}
	
}
