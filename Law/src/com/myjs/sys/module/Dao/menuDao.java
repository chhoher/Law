package com.myjs.sys.module.Dao;

import java.util.List;

import com.myjs.sys.module.model.LSysMenu;

public interface menuDao {
	public List<LSysMenu> findAll();
	public List<LSysMenu> findAllNotSelectedmodule(String moduleId);
	public boolean save(LSysMenu transientInstance);
	public LSysMenu findById(String Id);
	public LSysMenu findBymoduleId(String Id);
	public boolean savePid(String moduleId, String menuPid);
}
