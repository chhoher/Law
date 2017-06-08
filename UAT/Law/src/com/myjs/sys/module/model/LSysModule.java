package com.myjs.sys.module.model;

public class LSysModule {

	private String moduleId;
	
	private String moduleName;
	
	public LSysModule(){
		
	}
	
	public LSysModule(String moduleId, String moduleName){
		this.moduleId = moduleId;
		this.moduleName = moduleName;
	}

	public String getModuleId() {
		return moduleId;
	}

	public void setModuleId(String moduleId) {
		this.moduleId = moduleId;
	}

	public String getModuleName() {
		return moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}
	
}
