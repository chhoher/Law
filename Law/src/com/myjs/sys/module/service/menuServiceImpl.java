package com.myjs.sys.module.service;

import java.util.List;

import com.myjs.sys.module.Dao.menuDao;
import com.myjs.sys.module.model.LSysMenu;

public class menuServiceImpl implements menuService{
	private menuDao menuDao;

	public menuDao getMenuDao() {
		return menuDao;
	}

	public void setMenuDao(menuDao menuDao) {
		this.menuDao = menuDao;
	}
	
	public List<LSysMenu> findAllMenu(){
		return menuDao.findAll();
	}
}
