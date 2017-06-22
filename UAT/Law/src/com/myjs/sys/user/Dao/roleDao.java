package com.myjs.sys.user.Dao;

import java.util.List;

import com.myjs.sys.module.model.LSysRoleFunction;
import com.myjs.sys.user.model.LSysRole;

public interface roleDao {
	public List<LSysRole> findbyproperties(String roleCode, String roleName) throws Exception;
	public boolean save(LSysRole transientInstance) throws Exception;
	public boolean save(LSysRoleFunction transientInstance) throws Exception;
	public boolean updateroleFunctionForJDBCTemplate(String roleId) throws Exception;
	public boolean updateroleFunctionForRoleFunctioneIds(String roleFunctionIds) throws Exception;
	public List<LSysRoleFunction> findRoleFunctionByRoleId(String roleId) throws Exception;
	public List<String> findRolesByUserId(String userId) throws Exception;
}
