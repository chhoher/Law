package com.myjs.sys.user.service;

import java.util.List;

import com.myjs.sys.user.model.LSysRole;

public interface roleService {
	public List<LSysRole> findByProperty(String roleCode, String roleName) throws Exception;
	public boolean addSysRole(LSysRole addlsytrole) throws Exception;
	public boolean saveOrUpdateRoleFunction(String addselectedRoleId, String[] checkMenuIds) throws Exception;
}
