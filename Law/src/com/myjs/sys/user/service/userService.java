package com.myjs.sys.user.service;

import java.util.List;

import com.google.gson.JsonObject;
import com.myjs.sys.user.model.LSysUser;
import com.myjs.sys.user.model.VEIPMemdb;

public interface userService {

	public List<LSysUser> findAll();
	public List<VEIPMemdb> findAllMemdb();
	public JsonObject findUserRolebyUserId(String userId);
	public boolean saveOrUpdateUserRole(String userId, String[] saveselectRoleIds);
}
