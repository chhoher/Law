package com.myjs.sys.module.service;

import com.google.gson.JsonObject;

public interface menuService {
	public String findAllMenu(String selectedmoduleId);
	public String findByRoleIds(String[] roleIds);
	public boolean saveMenu(String moduleId, String menuPid);
	public JsonObject findLoginMenuByUserId(String loginUserId);
}
