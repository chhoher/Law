package com.myjs.sys.module.Action;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.commons.AbstractAction;
import com.myjs.commons.JsonUtil;
import com.myjs.sys.module.service.menuService;

/**
 * 2017-05-24 負責控制左側選單
 * @author JiaJia
 *
 */
public class menuAction extends AbstractAction{
	
	private static final long serialVersionUID = 3056039626648965306L;

	private static final Logger log = LogManager.getLogger(menuAction.class);
	
	private menuService menuService;
	
	public menuService getMenuService() {
		return menuService;
	}

	public void setMenuService(menuService menuService) {
		this.menuService = menuService;
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
				String [] a = new String[2];
				a[0] = "8aa2e72a5c3ec466015c3ec626630001";
				a[1] = "8aa2e72a5c3ec466015c3ec4e5a00000";
				
				responseLSysMenuList = menuService.findByRoleIds(a);
			}else{// TODO 這裡要改
				responseLSysMenuList = menuService.findAllMenu("");
			}
			
			log.debug("responsedata = {}", responseLSysMenuList);
			printToResponse(responseLSysMenuList);
		}catch(Exception e){
			log.error("initRolesFunction error msg==>", e);
		}
		return NONE;
	}
}
