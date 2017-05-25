package com.myjs.sys.module.Action;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.commons.AbstractAction;
import com.myjs.sys.module.model.LSysMenu;
import com.myjs.sys.module.service.menuService;

/**
 * 2017-05-24 負責控制左側選單
 * @author JiaJia
 *
 */
public class menuAction extends AbstractAction{
	
	private static final long serialVersionUID = -7121147574345343388L;

	private final Logger log = LogManager.getLogger(menuAction.class);
	
	private menuService menuService;
	
	public menuService getMenuService() {
		return menuService;
	}

	public void setMenuService(menuService menuService) {
		this.menuService = menuService;
	}

	public String findMenu(){
		try{
			List<LSysMenu> LSysMenuList = menuService.findAllMenu();
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LSysMenuList));
			String responseLSysMenuList = jsonResponse.toString();
//			String MenuJson = gson.toJsonTree(LSysMenuList).toString();
			String replaceJsonPID = responseLSysMenuList.replace("menuPid", "parent");
			String replaceJsonName = replaceJsonPID.replace("menuName", "text");
			String replaceJsonURL = replaceJsonName.replace("menuId", "id");
			
			log.debug("responsedata = {}", replaceJsonURL);
			printToResponse(replaceJsonURL);
		}catch(Exception e){
			log.error("findMenu error msg=>", e);
		}
		return NONE;
	}
}
