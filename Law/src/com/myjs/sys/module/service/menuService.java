package com.myjs.sys.module.service;

import com.google.gson.JsonObject;

public interface menuService {
	public String findAllMenu(String selectedmoduleId) throws Exception;
	public String findByRoleIds(String[] roleIds) throws Exception;
	public boolean saveMenu(String moduleId, String menuPid) throws Exception;
	public JsonObject findLoginMenuByUserId(String loginUserId) throws Exception;
}
