package com.myjs.sys.login.service;

import java.util.List;

import com.myjs.sys.user.model.VEIPMemdb;

public interface loginService {
	public VEIPMemdb checkLoginUser(String username, String password) throws Exception;
	public List<String> findRolesIdsByUserId(String userId) throws Exception;
}
