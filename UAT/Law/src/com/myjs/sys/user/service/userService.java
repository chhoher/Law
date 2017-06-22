package com.myjs.sys.user.service;

import java.util.List;

import com.google.gson.JsonObject;
import com.myjs.sys.user.model.LSysUser;
import com.myjs.sys.user.model.VEIPMemdb;

public interface userService {

	public List<LSysUser> findAll() throws Exception;
	public List<VEIPMemdb> findAllMemdb() throws Exception;
	public JsonObject findUserRolebyUserId(String userId) throws Exception;
	public boolean saveOrUpdateUserRole(String userId, String[] saveselectRoleIds) throws Exception;
}
