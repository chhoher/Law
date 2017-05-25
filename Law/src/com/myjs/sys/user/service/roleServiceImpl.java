package com.myjs.sys.user.service;

import java.util.List;

import com.myjs.sys.user.Dao.roleDao;
import com.myjs.sys.user.model.LSysRole;

public class roleServiceImpl implements roleService{

	private roleDao roleDao;

	public roleDao getRoleDao() {
		return roleDao;
	}

	public void setRoleDao(roleDao roleDao) {
		this.roleDao = roleDao;
	}
	
	public List<LSysRole> findByProperty(String roleCode, String roleName){
		return roleDao.findbyproperties(roleCode, roleName);
	}
	
	public boolean addSysRole(LSysRole addLSysRole){
		return roleDao.save(addLSysRole);
	}
}
