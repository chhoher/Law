package com.myjs.sys.login.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.sys.user.Dao.memdbDao;
import com.myjs.sys.user.model.VEIPMemdb;

public class loginServiceImpl implements loginService{
	private static final Logger log = LogManager.getLogger(loginServiceImpl.class);
	private memdbDao memdbDao;
	
	public memdbDao getMemdbDao() {
		return memdbDao;
	}

	public void setMemdbDao(memdbDao memdbDao) {
		this.memdbDao = memdbDao;
	}

	public VEIPMemdb checkLoginUser(String username, String password){
		VEIPMemdb vEipMemdb = null;
		try{
			vEipMemdb = memdbDao.findbyuserName(username);
		}catch(Exception e){
			log.error("checkLoginUser error msg==>",e);
		}
		return vEipMemdb;
	}
}
