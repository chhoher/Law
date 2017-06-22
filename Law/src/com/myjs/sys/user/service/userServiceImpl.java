package com.myjs.sys.user.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.myjs.sys.user.Dao.userDao;
import com.myjs.sys.user.model.LSysRole;
import com.myjs.sys.user.model.LSysUser;
import com.myjs.sys.user.model.VEIPMemdb;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.sys.module.model.LSysUserRole;
import com.myjs.sys.user.Dao.memdbDao;

public class userServiceImpl implements userService{
	private static final Log log = LogFactory.getLog(userServiceImpl.class);
	
	private userDao userDao;
	private memdbDao memdbDao;
	
	public userDao getUserDao() {
		return userDao;
	}

	public void setUserDao(userDao userDao) {
		this.userDao = userDao;
	}

	public memdbDao getMemdbDao() {
		return memdbDao;
	}

	public void setMemdbDao(memdbDao memdbDao) {
		this.memdbDao = memdbDao;
	}

	/**
	 *
	 * @author JiaJia
	 * @param userId userID
	 * @return
	 */
	public List<LSysUser> findAll() throws Exception{
		log.debug("into Service findAllUser");		
		List<LSysUser> userList = userDao.search();
		log.debug("Service findAll successful");
		return userList;
	}
	
	/**
	 * 查詢全部使用者
	 */
	public List<VEIPMemdb> findAllMemdb() throws Exception{
		return memdbDao.search();
	}
	
	/**
	 * 用userId(memno)查詢使用者對應角色
	 */
	public JsonObject findUserRolebyUserId(String userId) throws Exception{
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		JsonObject jsonResponse = new JsonObject();
		List<LSysRole> MapLSysRoleList = new ArrayList<LSysRole>();
		log.debug("===== findUserRolebyUserId =====");
		if(userId != null && !userId.equals("") && !userId.equals("null")){
			List<Map<String, Object>> userRoleList = userDao.findUserRolebyUserId(userId);
			for (Map<?, ?> map : userRoleList) {
				LSysRole LSysRole = new LSysRole();
				LSysRole.setRoleId((String) map.get("role_id"));
				LSysRole.setRoleName((String) map.get("role_name"));
				LSysRole.setIsDelete((String) map.get("is_delete"));
				if(map.get("user_role_id") != null){
					LSysRole.setUserRoleId((String) map.get("user_role_id"));
				}
				if(map.get("is_delete") != null){
					LSysRole.setV(((String) map.get("is_delete")).equals("N") ? "1":"0");
				}else{
					LSysRole.setV("0");
				}
				MapLSysRoleList.add(LSysRole);
			}
		}
		jsonResponse.add("data", gson.toJsonTree(MapLSysRoleList));
		return jsonResponse;
	}
	
	public boolean saveOrUpdateUserRole(String userId, String[] saveselectRoleIds) throws Exception{
		//取得saveselectRoleIds 選擇的roleId
		//先update is_delete = 'N' 後insert
		userDao.updateuserRoleForJDBCTemplate(userId);//update
		
		//insert
		List<Map<String, Object>> userRoleList = userDao.findUserRolebyUserId(userId);
		String toUpdateUserRoleIds = "";
		boolean hasSameRoleId = false;
		for (Map<?, ?> map : userRoleList) {
			if(saveselectRoleIds != null){
				for(int i = 0; i < saveselectRoleIds.length; i++){
					if(saveselectRoleIds[i].equals((String)map.get("role_id"))){
						if(map.get("user_role_id") != null){
							hasSameRoleId = true;
							toUpdateUserRoleIds += "'" + (String)map.get("user_role_id") + "',";
						}else{
							LSysUserRole LSysUserRole = new LSysUserRole(null, userId, saveselectRoleIds[i], "N");
							userDao.save(LSysUserRole);
						}
					}
				}
			}
		}
		
		if(hasSameRoleId){
			userDao.updateuserRoleForUserRoleIds(toUpdateUserRoleIds.substring(0, toUpdateUserRoleIds.length()-1));
		}
		return true;
	}
}
