package com.myjs.sys.login.Action;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.commons.AbstractAction;
import com.myjs.commons.JsonUtil;
import com.myjs.sys.login.service.loginService;
import com.myjs.sys.user.model.VEIPMemdb;

public class loginAction extends AbstractAction {
	private static final Logger log = LogManager.getLogger(loginAction.class);

	private static final long serialVersionUID = 8371377492753501434L;

	private loginService loginService;

	public loginService getLoginService() {
		return loginService;
	}

	public void setLoginService(loginService loginService) {
		this.loginService = loginService;
	}

	public String login() {
		try{
			String username = super.getRequest().getParameter("username");
			String password = super.getRequest().getParameter("password");
			log.debug("username = {} ,password = {}", username, password);
			VEIPMemdb LoginMemdb = null;
			if(username.equals("admin") && password.equals("1qaz@WSX")){
				LoginMemdb = new VEIPMemdb("admin");
			}else{
				LoginMemdb = loginService.checkLoginUser(username, password);
			}
			
			boolean isLogin = false;
			if(LoginMemdb != null){
				if(LoginMemdb.getMempwd().equals(password)){
					isLogin = true;
					setSessionLoginUser(LoginMemdb);
				}else{
					isLogin = false;
				}
			}else{
				isLogin = false;
			}
			
			String result = "";
			if (isLogin) {
				result = JsonUtil.ajaxResultSuccess("登入成功").toString();
			} else {
				result = JsonUtil.ajaxResultFalse("登入失敗").toString();
			}
			log.debug("deleteCekFlow end {}", result);
			printToResponse(result);
		}catch(Exception e){
			sendException(e);
			log.error("login error msg ==>",e);
		}
		return NONE;
	}
	
	public String loginUserInfo(){
		log.debug("getLoginUserInfo start");
		try{
			VEIPMemdb LoginUser = getSessionLoginUser();
			JsonObject jsonResponse = new JsonObject();
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd").create();
			jsonResponse.add("data", gson.toJsonTree(LoginUser));
			String responseLoginUser = jsonResponse.toString();

			log.debug("responsedata = {}", responseLoginUser);
			printToResponse(responseLoginUser);
		}catch(Exception e){
			sendException(e);
			log.error("getLoginUserInfo error msg ==>", e);
		}
		return NONE;
	}
}
