package com.myjs.sys.module.Action;

import java.util.Date;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.cek.checkform.model.LCekColumn;
import com.myjs.commons.AbstractAction;
import com.myjs.commons.JsonUtil;
import com.myjs.sys.module.service.menuService;

/**
 * 2017-05-24 負責控制左側選單
 * @author JiaJia
 *
 */
public class menuAction extends AbstractAction{
	
	private static final long serialVersionUID = -7121147574345343388L;

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
}
