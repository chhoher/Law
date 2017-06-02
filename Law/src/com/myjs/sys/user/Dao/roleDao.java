package com.myjs.sys.user.Dao;

import java.util.List;

import com.myjs.sys.module.model.LSysRoleFunction;
import com.myjs.sys.user.model.LSysRole;

public interface roleDao {
	public List<LSysRole> findbyproperties(String roleCode, String roleName);
	public boolean save(LSysRole transientInstance);
	public boolean save(LSysRoleFunction transientInstance);
	public boolean updateroleFunctionForJDBCTemplate(String roleId);
	public boolean updateroleFunctionForRoleFunctioneIds(String roleFunctionIds);
	public List<LSysRoleFunction> findRoleFunctionByRoleId(String roleId);
}
