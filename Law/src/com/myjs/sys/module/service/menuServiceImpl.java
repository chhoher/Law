package com.myjs.sys.module.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.sys.module.Dao.menuDao;
import com.myjs.sys.module.model.LSysMenu;

public class menuServiceImpl implements menuService{
	
	private static final Logger log = LogManager.getLogger(menuServiceImpl.class);
	
	private menuDao menuDao;

	public menuDao getMenuDao() {
		return menuDao;
	}

	public void setMenuDao(menuDao menuDao) {
		this.menuDao = menuDao;
	}
	
	public String findAllMenu(String selectedmoduleId){
		
		List<LSysMenu> LSysMenuList = null; 

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();
		
		if(selectedmoduleId != null && !selectedmoduleId.equals("")){
			LSysMenu selectParent = menuDao.findBymoduleId(selectedmoduleId);
			if(selectParent != null){
				log.debug("selectParent info ==");
				log.debug("MenuId = {}, MenuName = {}", selectParent.getMenuPid(), selectParent.getMenuPname());
				JsonObject json = new JsonObject();
				json.addProperty("selectPId", selectParent.getMenuPid());
				json.addProperty("selectPName", selectParent.getMenuPname());
				jsonResponse.add("selectParent", json);
			}
			LSysMenuList = menuDao.findAllNotSelectedmodule(selectedmoduleId);
		}else{
			LSysMenuList = menuDao.findAll();
		}
		
		jsonResponse.add("data", gson.toJsonTree(LSysMenuList));
		
		String responseLSysMenuList = jsonResponse.toString();
//		String MenuJson = gson.toJsonTree(LSysMenuList).toString();
		String replaceJsonPID = responseLSysMenuList.replace("menuPid", "parent");
		String replaceJsonName = replaceJsonPID.replace("menuName", "text");
		String replaceJsonURL = replaceJsonName.replace("menuId", "id");
		
		return replaceJsonURL;
	}
	
	public boolean saveMenu(String moduleId, String menuPid){
		return menuDao.savePid(moduleId, menuPid);
	}
}
