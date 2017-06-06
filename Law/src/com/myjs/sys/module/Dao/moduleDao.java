package com.myjs.sys.module.Dao;

import java.util.List;

import com.myjs.sys.module.model.LSysModule;

public interface moduleDao {
	public List<LSysModule> findbyproperties(String functionName);
	public boolean save(LSysModule transientInstance);
}
