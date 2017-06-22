package com.myjs.sys.module.Dao;

import java.util.List;

import com.myjs.sys.module.model.LSysMenu;

public interface menuDao {
	public List<LSysMenu> findAll() throws Exception;
	public List<LSysMenu> findAllNotSelectedmodule(String moduleId) throws Exception;
	public List<LSysMenu> findAllMenuByRoleIds(String roleIds) throws Exception;
	public List<LSysMenu> findAllMenuByRoleId(String roleId) throws Exception;
	public boolean save(LSysMenu transientInstance) throws Exception;
	public LSysMenu findById(String Id) throws Exception;
	public LSysMenu findBymoduleId(String Id) throws Exception;
	public boolean savePid(String moduleId, String menuPid) throws Exception;
}
