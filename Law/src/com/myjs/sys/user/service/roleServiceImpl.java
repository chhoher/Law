package com.myjs.sys.user.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.sys.user.Dao.roleDao;
import com.myjs.sys.user.model.LSysRole;
import com.myjs.sys.module.Dao.menuDao;
import com.myjs.sys.module.model.LSysMenu;
import com.myjs.sys.module.model.LSysRoleFunction;

public class roleServiceImpl implements roleService{
	
	private static final Logger log = LogManager.getLogger(roleServiceImpl.class);
	private roleDao roleDao;
	private menuDao menuDao;

	public roleDao getRoleDao() {
		return roleDao;
	}

	public void setRoleDao(roleDao roleDao) {
		this.roleDao = roleDao;
	}
	
	public menuDao getMenuDao() {
		return menuDao;
	}

	public void setMenuDao(menuDao menuDao) {
		this.menuDao = menuDao;
	}

	public List<LSysRole> findByProperty(String roleCode, String roleName) throws Exception{
		return roleDao.findbyproperties(roleCode, roleName);
	}
	
	public boolean addSysRole(LSysRole addLSysRole) throws Exception{
		return roleDao.save(addLSysRole);
	}
	
	public boolean saveOrUpdateRoleFunction(String addselectedRoleId, String[] checkMenuIds) throws Exception{
		//取得addselectedRoleId 選擇的roleId
		//checkMenuIds 勾取的menuId
		//先update is_delete = 'Y' 後insert
		roleDao.updateroleFunctionForJDBCTemplate(addselectedRoleId);//update
		
		//insert
		List<LSysMenu> LSysMenuList = menuDao.findAllMenuByRoleId(addselectedRoleId);
		String toUpdateRoleFunctionIds = "";
		boolean hasSameMenuId = false;
		for(LSysMenu mapMenu : LSysMenuList){
			if(checkMenuIds != null){
				for(int i = 0; i < checkMenuIds.length; i++){
					if(checkMenuIds[i].equals(mapMenu.getMenuId())){
						if(mapMenu.getRoleFunctionId() != null){
							hasSameMenuId = true;
							toUpdateRoleFunctionIds += "'" + mapMenu.getRoleFunctionId() + "',";
						}else{
//							log.debug("mapMenu.getRoleFunctionId() = {}", mapMenu.getRoleFunctionId());
							LSysRoleFunction LSysRoleFunction = new LSysRoleFunction(null, addselectedRoleId, mapMenu.getFunctionId(), "N");
							roleDao.save(LSysRoleFunction);
						}
					}
				}
			}
		}
		if(hasSameMenuId){
			roleDao.updateroleFunctionForRoleFunctioneIds(toUpdateRoleFunctionIds.substring(0, toUpdateRoleFunctionIds.length()-1));
		}
		return true;
	}
}
