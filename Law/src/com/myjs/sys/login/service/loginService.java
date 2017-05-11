package com.myjs.sys.login.service;

import com.myjs.sys.user.model.VEIPMemdb;

public interface loginService {
	public VEIPMemdb checkLoginUser(String username, String password);
}
