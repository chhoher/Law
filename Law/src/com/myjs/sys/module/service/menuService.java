package com.myjs.sys.module.service;

public interface menuService {
	public String findAllMenu(String selectedmoduleId);
	public boolean saveMenu(String moduleId, String menuPid);
}
