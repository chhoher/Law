package com.myjs.sys.user.Action;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonIOException;
import com.google.gson.JsonObject;
import com.myjs.commons.AbstractAction;
import com.myjs.commons.JDBCConnect;
import com.myjs.commons.JsonUtil;
import com.myjs.sys.user.model.LSysUser;
import com.myjs.sys.user.model.VEIPMemdb;
import com.myjs.sys.user.service.userService;

//TODO Add by Jia 這裡需要改成接Session的方式，前面還要用Filter去接，加油加油。2017-02-09
public class userAction extends AbstractAction{
	private static final Logger log = LogManager.getLogger(userAction.class);
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -6007233207833892508L;

	private userService userService;
	
	public userService getUserService() {
		return userService;
	}

	public void setUserService(userService userService) {
		this.userService = userService;
	}

	public String search() {
		log.debug("");
		try {

			List<LSysUser> userList = userService.findAll();
			
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();

		    JsonObject jsonResponse = new JsonObject();
		    
		    jsonResponse.add("data", gson.toJsonTree(userList));

		    String data = jsonResponse.toString();
			System.out.println(data);
		    try {
				printToResponse(data);
			} catch (Exception e) {
				sendException(e);
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    
		    
		} catch (Exception e) {
			sendException(e);
		    e.printStackTrace();
		}
		return NONE;
	}
	
	public String findAllmemdb(){
		log.debug("findAllmemdb start");
		try {

			List<VEIPMemdb> userList = userService.findAllMemdb();

			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();

		    JsonObject jsonResponse = new JsonObject();
		    
		    jsonResponse.add("data", gson.toJsonTree(userList));

		    String data = jsonResponse.toString();
			System.out.println(data);
			printToResponse(data);
		    
		} catch (Exception e) {
			sendException(e);
			log.error("findAllmemdb error", e);
		}
		return NONE;
	}
	
	public String selectedUserRole(){
		try{
			log.debug("=====selectedUserRole start=====");
			String selecteduserId = super.getRequest().getParameter("selecteduserId");
			log.debug("selecteduserId = {}",selecteduserId);
			String MapFileList = userService.findUserRolebyUserId(selecteduserId).toString();
			log.debug("MapFileList = {}", MapFileList);
			printToResponse(MapFileList);
		}catch(Exception e){
			sendException(e);
			log.error("selectedUserRole error msg==>", e);
		}
		return NONE;
	}
	
	public String setUserRole(){
		try {
			log.debug("setUserRole start");
			log.debug("=====setUserRole info=====");
			String[] saveselectRoleIds = super.getRequest().getParameterValues("saveselectRoleIds[]");
			String saveselectuserId = super.getRequest().getParameter("saveselectuserId");
			boolean IsaddUserRole = userService.saveOrUpdateUserRole(saveselectuserId, saveselectRoleIds);
			
			String result = "";
			if (IsaddUserRole) {
				result = JsonUtil.ajaxResultSuccess("新增成功").toString();
			} else {
				result = JsonUtil.ajaxResultSuccess("新增失敗").toString();
			}
			log.debug("setUserRole end {}", result);
			printToResponse(result);

		} catch (Exception e) {
			sendException(e);
			log.error("setUserRole error msg=>", e);
		}
		return NONE;
	}
	
	public static void main(String args[]){
		JDBCConnect jdbcconnect = new JDBCConnect();
		JsonObject gson = jdbcconnect.selectTable("");
		
		try {

		    JsonObject jsonResponse = new JsonObject();
		    
		    jsonResponse.add("data", gson);

			System.out.println(gson);
			
		    try {
				printToResponse(gson.toString());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    
		    
		} catch (JsonIOException e) {
		    e.printStackTrace();
		}
	}
}
