package com.myjs.sys.module.model;

public class LSysMenu {

	private String menuId;
	private String menuPid;
	private String moduleId;
	private String menuName;
	private int menuLevel;
	private String isOpen;
	private String isDelete;
	private String menuUrl;
	
	// add By Jia 2017-05-31 Vo
	private String menuPname;
	private String hasFunction;
	private State state;
	private String roleFunctionId;
	private String functionId;
	private String functionIsDelete;
	
	public LSysMenu(){
		
	}
	
	public LSysMenu(String menuId, String menuPid, String moduleId, String menuName,
			int menuLevel, String isOpen, String isDelete, String menuUrl){
		this.menuId = menuId;
		this.menuPid = menuPid;
		this.moduleId = moduleId;
		this.menuName = menuName;
		this.menuLevel = menuLevel;
		this.isOpen = isOpen;
		this.isDelete = isDelete;
		this.menuUrl = menuUrl;
	}
	public String getMenuId() {
		return menuId;
	}
	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}
	public String getMenuPid() {
		return menuPid;
	}
	public void setMenuPid(String menuPid) {
		this.menuPid = menuPid;
	}
	public String getModuleId() {
		return moduleId;
	}
	public void setModuleId(String moduleId) {
		this.moduleId = moduleId;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	public int getMenuLevel() {
		return menuLevel;
	}
	public void setMenuLevel(int menuLevel) {
		this.menuLevel = menuLevel;
	}
	public String getIsOpen() {
		return isOpen;
	}
	public void setIsOpen(String isOpen) {
		this.isOpen = isOpen;
	}
	public String getIsDelete() {
		return isDelete;
	}
	public void setIsDelete(String isDelete) {
		this.isDelete = isDelete;
	}
	public String getMenuUrl() {
		return menuUrl;
	}
	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}

	public String getMenuPname() {
		return menuPname;
	}

	public void setMenuPname(String menuPname) {
		this.menuPname = menuPname;
	}

	public String getHasFunction() {
		return hasFunction;
	}

	public void setHasFunction(String hasFunction) {
		this.hasFunction = hasFunction;
	}

	public State getState() {
		return state;
	}

	public void setState(State state) {
		this.state = state;
	}

	public String getRoleFunctionId() {
		return roleFunctionId;
	}

	public void setRoleFunctionId(String roleFunctionId) {
		this.roleFunctionId = roleFunctionId;
	}

	public String getFunctionId() {
		return functionId;
	}

	public void setFunctionId(String functionId) {
		this.functionId = functionId;
	}

	public String getFunctionIsDelete() {
		return functionIsDelete;
	}

	public void setFunctionIsDelete(String functionIsDelete) {
		this.functionIsDelete = functionIsDelete;
	}

}
