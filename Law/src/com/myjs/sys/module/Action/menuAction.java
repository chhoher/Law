package com.myjs.sys.module.Action;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.JsonObject;
import com.myjs.commons.AbstractAction;
import com.myjs.commons.JsonUtil;
import com.myjs.sys.module.service.menuService;
import com.myjs.sys.user.model.LSysRole;
import com.myjs.sys.user.service.roleService;

/**
 * 2017-05-24 負責控制左側選單
 * @author JiaJia
 *
 */
public class menuAction extends AbstractAction{
	
	private static final long serialVersionUID = 3056039626648965306L;

	private static final Logger log = LogManager.getLogger(menuAction.class);
	
	private menuService menuService;
	private roleService roleService;
	
	public menuService getMenuService() {
		return menuService;
	}

	public void setMenuService(menuService menuService) {
		this.menuService = menuService;
	}
	
	public roleService getRoleService() {
		return roleService;
	}

	public void setRoleService(roleService roleService) {
		this.roleService = roleService;
	}

	public String findMenu(){
		try{
			String selectedmoduleId = super.getRequest().getParameter("selectedmoduleId");
			log.debug("selectedmoduleId = {}", selectedmoduleId);
			String responseLSysMenuList = menuService.findAllMenu(selectedmoduleId);

			log.debug("responsedata = {}", responseLSysMenuList);
			printToResponse(responseLSysMenuList);
		}catch(Exception e){
			log.error("findMenu error msg=>", e);
		}
		return NONE;
	}
	
	/**
	 * add by Jia 2017-05-26
	 * 新增功能鏈結到目錄表上
	 * @return
	 */
	public String addMenuPid(){
		try {
			log.debug("addMenuPid start");
			log.debug("=====addMenuPid info=====");
			String iptaddfunctionModuleId = super.getRequest().getParameter("iptaddfunctionModuleId"),
					iptaddfunctionMenuUpId = super.getRequest().getParameter("iptaddfunctionMenuUpId");
			log.debug("iptaddfunctionModuleId = {} ,iptaddfunctionMenuUpId = {}", iptaddfunctionModuleId,
					iptaddfunctionMenuUpId);

			boolean IsUpdate = menuService.saveMenu(iptaddfunctionModuleId, iptaddfunctionMenuUpId);

			String result = "";
			if (IsUpdate) {
				result = JsonUtil.ajaxResultSuccess("已設定目錄位置").toString();
			} else {
				result = JsonUtil.ajaxResultSuccess("設定目錄位置失敗").toString();
			}
			log.debug("addMenuPid end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			log.error("addMenuPid error msg=>", e);
		}
		return NONE;
	}
	
	/**
	 * add by Jia 2017-05-31
	 * 角色對應功能初始化
	 */
	public String initRoleFunction(){
		try{
			log.debug("initRoleFunction start");
			log.debug("=====role Info=====");
			
			String selectedroleId = super.getRequest().getParameter("selectedroleId");
			
			String responseLSysMenuList = "";
			
			if(selectedroleId != null && !selectedroleId.equals("")){
				String[] roleIds = new String[1];
				roleIds[0] = selectedroleId;
				log.debug("selectedroleId = {}", selectedroleId);
				responseLSysMenuList = menuService.findByRoleIds(roleIds);
			}
			
			log.debug("responsedata = {}", responseLSysMenuList);
			printToResponse(responseLSysMenuList);
		}catch(Exception e){
			log.error("initRoleFunction error msg==>", e);
		}
		return NONE;
	}
	
	/**
	 * add by Jia 2017-06-02
	 * 登入後，當前登入者角色對應功能初始化
	 */
	public String initRolesFunction(){
		try{
			log.debug("initRolesFunction start");
			log.debug("=====role Info=====");
			
			
			String responseLSysMenuList = "";
			String userId = getSessionLoginUser().getMemno();
			
			if(userId != null){
				if(userId.equals("admin")){
					responseLSysMenuList = menuService.findAllMenu("");
					List<LSysRole> rolesList = roleService.findByProperty(null, null);
					String roleIds = "[";
					for(LSysRole mapLSysRole : rolesList){
						roleIds += mapLSysRole.getRoleId() + ",";
					}
					roleIds = roleIds.substring(0, roleIds.length()-1) + "]";
					log.debug("roleIds = {} ", roleIds);
					setSessionLoginUserRoles(roleIds);
				}else{
					JsonObject jsString = menuService.findLoginMenuByUserId(userId);
					responseLSysMenuList = jsString.toString();

					String replaceJsonPID = responseLSysMenuList.replace("menuPid", "parent");
					String replaceJsonName = replaceJsonPID.replace("menuName", "text");
					String replaceJsonURL = replaceJsonName.replace("menuId", "id");
					responseLSysMenuList = replaceJsonURL;
					
					setSessionLoginUserRoles(jsString.toString());
				}
			}else {
				
			}

			
			log.debug("responsedata = {}", responseLSysMenuList);
			printToResponse(responseLSysMenuList);
		}catch(Exception e){
			log.error("initRolesFunction error msg==>", e);
		}
		return NONE;
	}
}
