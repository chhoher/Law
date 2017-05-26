package com.myjs.sys.user.Action;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.commons.AbstractAction;
import com.myjs.commons.JsonUtil;
import com.myjs.sys.user.model.LSysRole;
import com.myjs.sys.user.service.roleService;

import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class roleAction extends AbstractAction{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 7489972019141183766L;

	private static final Logger log = LogManager.getLogger(roleAction.class);

	private roleService roleService;
	
	public roleService getRoleService() {
		return roleService;
	}

	public void setRoleService(roleService roleService) {
		this.roleService = roleService;
	}

	public String findRole(){
		try{
			log.debug("findRole start");
			String iptsearchroleCode = super.getRequest().getParameter("iptsearchroleCode"),
					iptsearchroleName = super.getRequest().getParameter("iptsearchroleName");
			List<LSysRole> LSysRoleList = roleService.findByProperty(iptsearchroleCode, iptsearchroleName);
			
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LSysRoleList));
			String responseLSysRoleList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLSysRoleList);
			printToResponse(responseLSysRoleList);
		}catch(Exception e){
			log.error("findRole error msg==>", e);
		}
		return NONE;
	}
	
	public String addRole(){
		try {
			log.debug("addRole start");
			log.debug("=====addRole info=====");
			String iptaddroleCode = super.getRequest().getParameter("iptaddroleCode"),
					iptaddroleName = super.getRequest().getParameter("iptaddroleName");
			log.debug("iptaddroleCode = {} ,iptaddroleName = {}", iptaddroleCode, iptaddroleName);

			Date now = new Date();
			LSysRole LSysRole = new LSysRole(null, iptaddroleCode, iptaddroleName, 
					getSessionLoginUser().getMemno(), now);
			boolean IsaddRole = roleService.addSysRole(LSysRole);
			String result = "";
			if (IsaddRole) {
				result = JsonUtil.ajaxResultSuccess("新增成功").toString();
			} else {
				result = JsonUtil.ajaxResultSuccess("新增失敗").toString();
			}
			log.debug("addRole end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			log.error("addRole error msg=>", e);
		}
		return NONE;
	}
	
	public String findFunctionByRole(){
		try{
			log.debug("findFunctionByRole start");
			
		}catch(Exception e){
			log.error("findFunctionByRole error msg==>", e);
		}
		return NONE;
	}
}
