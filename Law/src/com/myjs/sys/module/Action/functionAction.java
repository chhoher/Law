package com.myjs.sys.module.Action;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.commons.AbstractAction;
import com.myjs.commons.JsonUtil;
import com.myjs.sys.module.model.LSysFunction;
import com.myjs.sys.module.model.LSysModule;
import com.myjs.sys.module.service.functionService;
import com.myjs.sys.user.model.LSysRole;

/**
 * 2017-05-25
 * 用來控制權縣以及連結功能
 * @author JiaJia
 *
 */
public class functionAction extends AbstractAction{
	
	private static final Logger log = LogManager.getLogger(functionAction.class);
	private functionService functionService;

	public functionService getFunctionService() {
		return functionService;
	}

	public void setFunctionService(functionService functionService) {
		this.functionService = functionService;
	}
	
	public String findFunction(){
		try{
			log.debug("findFunction start");
			String iptsearchfunctionName = super.getRequest().getParameter("iptsearchfunctionName");
			List<LSysFunction> LSysFunctionList = functionService.findByProperty(iptsearchfunctionName);
			
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LSysFunctionList));
			String responseLSysFunctionList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLSysFunctionList);
			printToResponse(responseLSysFunctionList);
		}catch(Exception e){
			log.error("findFunction error msg==>", e);
		}
		return NONE;
	}
	
	public String addFunction(){
		try {
			log.debug("addFunction start");
			log.debug("=====addFunction info=====");
			String iptaddfunctionName = super.getRequest().getParameter("iptaddfunctionName"),
					iptaddfunctionUrl = super.getRequest().getParameter("iptaddfunctionUrl");
			log.debug("iptaddfunctionName = {} ,iptaddfunctionUrl = {}", iptaddfunctionName, iptaddfunctionUrl);

			Date now = new Date();
//			String moduleIduuid = UUID.randomUUID().toString();// 自動生成id
			
			LSysModule LSysModule = new LSysModule(null, iptaddfunctionName); 
			
			LSysFunction LSysFunction = new LSysFunction(null, iptaddfunctionName, null, now,
					getSessionLoginUser().getMemno(), iptaddfunctionUrl, "N", "N", now, getSessionLoginUser().getMemno());
			boolean IsaddFunction = functionService.addSysFunction(LSysModule, LSysFunction);
			String result = "";
			if (IsaddFunction) {
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
}
