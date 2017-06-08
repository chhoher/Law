package com.myjs.sys.user.service;

import java.util.List;

import com.myjs.sys.user.model.LSysRole;

public interface roleService {
	public List<LSysRole> findByProperty(String roleCode, String roleName);
	public boolean addSysRole(LSysRole addlsytrole);
	public boolean saveOrUpdateRoleFunction(String addselectedRoleId, String[] checkMenuIds);
}
