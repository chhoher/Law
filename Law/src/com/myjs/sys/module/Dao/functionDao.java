package com.myjs.sys.module.Dao;

import java.util.List;

import com.myjs.sys.module.model.LSysFunction;

public interface functionDao {
	public List<LSysFunction> findbyproperties(String functionName) throws Exception;
	public boolean save(LSysFunction transientInstance) throws Exception;
}
