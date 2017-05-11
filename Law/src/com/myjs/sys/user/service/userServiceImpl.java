package com.myjs.sys.user.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.myjs.sys.user.Dao.userDao;
import com.myjs.sys.user.model.LSysUser;
import com.myjs.sys.user.model.VEIPMemdb;
import com.myjs.sys.user.Dao.memdbDao;

public class userServiceImpl implements userService{
	private static final Log log = LogFactory.getLog(userServiceImpl.class);
	
	private userDao userDao;
	private memdbDao memdbDao;
	
	public userDao getUserDao() {
		return userDao;
	}

	public void setUserDao(userDao userDao) {
		this.userDao = userDao;
	}

	public memdbDao getMemdbDao() {
		return memdbDao;
	}

	public void setMemdbDao(memdbDao memdbDao) {
		this.memdbDao = memdbDao;
	}

	/**
	 *
	 * @author JiaJia
	 * @param userId userID
	 * @return
	 */
	public List<LSysUser> findAll(){
		log.debug("into Service findAllUser");		
		List<LSysUser> userList = userDao.search();
		log.debug("Service findAll successful");
		return userList;
	}
	
	/**
	 * 查詢全部使用者
	 */
	public List<VEIPMemdb> findAllMemdb(){
		return memdbDao.search();
	}
}
