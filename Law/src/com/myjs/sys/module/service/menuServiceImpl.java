package com.myjs.sys.module.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.sys.module.Dao.menuDao;
import com.myjs.sys.user.Dao.roleDao;
import com.myjs.sys.module.model.LSysMenu;

public class menuServiceImpl implements menuService{
	
	private static final Logger log = LogManager.getLogger(menuServiceImpl.class);
	
	private menuDao menuDao;
	private roleDao roleDao;

	public menuDao getMenuDao() {
		return menuDao;
	}

	public void setMenuDao(menuDao menuDao) {
		this.menuDao = menuDao;
	}
	
	public roleDao getRoleDao() {
		return roleDao;
	}

	public void setRoleDao(roleDao roleDao) {
		this.roleDao = roleDao;
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
	
	public String findByRoleIds(String[] roleIds){
		
		List<LSysMenu> LSysMenuList = null; 

		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();
		
		if(roleIds != null){
			String roleIdsString = "";
			if(roleIds.length == 1){
				roleIdsString = roleIds[0];
				LSysMenuList = menuDao.findAllMenuByRoleId(roleIdsString);
				log.debug("roleIdsString = {}", roleIdsString);
			}else{
				for(String roleId:roleIds){
					roleIdsString += "'" + roleId + "',";
				}
				roleIdsString = roleIdsString.substring(0, roleIdsString.length()-1);
				log.debug("roleIdsString = {}", roleIdsString);
				LSysMenuList = menuDao.findAllMenuByRoleIds(roleIdsString);
			}
		}else{
			LSysMenuList = menuDao.findAll();
		}
		
		jsonResponse.add("data", gson.toJsonTree(LSysMenuList));
		
		String responseLSysMenuList = jsonResponse.toString();
		String replaceJsonPID = responseLSysMenuList.replace("menuPid", "parent");
		String replaceJsonName = replaceJsonPID.replace("menuName", "text");
		String replaceJsonURL = replaceJsonName.replace("menuId", "id");
		
		return replaceJsonURL;
	}
	
	public JsonObject findLoginMenuByUserId(String loginUserId){
		try{
			List<LSysMenu> LSysMenuList = null; 
	
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			
			String roleIdsString = "";
			
			List<String> roleIds = roleDao.findRolesByUserId(loginUserId);
			
			for(String roleId:roleIds){
				roleIdsString += "'" + roleId + "',";
			}
			roleIdsString = roleIdsString.substring(0, roleIdsString.length()-1);
			log.debug("roleIdsString = {}", roleIdsString);
			LSysMenuList = menuDao.findAllMenuByRoleIds(roleIdsString);
			List<LSysMenu> returnMenuList = new ArrayList<LSysMenu>();
			for(LSysMenu mapMenu : LSysMenuList){
				if(mapMenu.getMenuId().equals("ROOT")){
					returnMenuList.add(mapMenu);
				}else{
					if(mapMenu.getIsNode() != null && mapMenu.getIsNode().equals("Y")){
						returnMenuList.add(mapMenu);
					}else if(mapMenu.getFunctionIsDelete() != null && mapMenu.getFunctionIsDelete().equals("N")){
						returnMenuList.add(mapMenu);
					}
				}
			}
			
			List<LSysMenu> returnMenuListNoNode = new ArrayList<LSysMenu>();
			
			// add By Jia 2017-06-21 這裡把節點下面無選項去除
			for(LSysMenu retML : returnMenuList){
				boolean hasChild = false;
				if(retML.getIsNode().equals("Y")){
					for(LSysMenu mapMenuIsNode : returnMenuList){
						if(mapMenuIsNode.getMenuPid().equals(retML.getMenuId())){
							hasChild = true;
						}
					}
				}else{
					hasChild = true;
				}
				if(hasChild){
					returnMenuListNoNode.add(retML);
				}
			}
			
			jsonResponse.add("data", gson.toJsonTree(returnMenuListNoNode));
	
			jsonResponse.add("roleIds", gson.toJsonTree(roleIds));// add By Jia 2017-06-06 登入時同時把roleIds存入暫存
			return jsonResponse;
		}catch(Exception e){
			log.error("error msg==>", e);
			return null;
		}
	}
	
	public boolean saveMenu(String moduleId, String menuPid){
		return menuDao.savePid(moduleId, menuPid);
	}
}
