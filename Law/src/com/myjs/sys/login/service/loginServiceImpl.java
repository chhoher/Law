package com.myjs.sys.login.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.sys.user.Dao.memdbDao;
import com.myjs.sys.user.Dao.roleDao;
import com.myjs.sys.user.model.VEIPMemdb;

public class loginServiceImpl implements loginService{
	private static final Logger log = LogManager.getLogger(loginServiceImpl.class);
	private memdbDao memdbDao;
	private roleDao roleDao;
	
	public memdbDao getMemdbDao() {
		return memdbDao;
	}

	public void setMemdbDao(memdbDao memdbDao) {
		this.memdbDao = memdbDao;
	}

	public roleDao getRoleDao() {
		return roleDao;
	}

	public void setRoleDao(roleDao roleDao) {
		this.roleDao = roleDao;
	}

	public VEIPMemdb checkLoginUser(String username, String password) throws Exception{
		VEIPMemdb vEipMemdb = null;
		vEipMemdb = memdbDao.findbyuserName(username);
		return vEipMemdb;
	}
	
	public List<String> findRolesIdsByUserId(String userId) throws Exception{
		return roleDao.findRolesByUserId(userId);
	}
}
