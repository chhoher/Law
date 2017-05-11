package com.myjs.sys.variable.Dao;

import java.util.List;

import com.myjs.sys.variable.model.LSysVariable;

public interface variableDao {
	public List<LSysVariable> findAll();
	public List<LSysVariable> findbyproperties(String variableName);
	public boolean save(LSysVariable transientInstance) ;
	public boolean delete(LSysVariable transientInstance);
	public List<LSysVariable> findVariablesubbyproperties(String variableType);
}
