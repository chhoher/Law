package com.myjs.sys.variable.Dao;

import java.util.List;

import com.myjs.sys.variable.model.LSysVariable;

public interface variableDao {
	public List<LSysVariable> findAll() throws Exception;
	public List<LSysVariable> findbyproperties(String variableName) throws Exception;
	public boolean save(LSysVariable transientInstance) throws Exception;
	public boolean delete(LSysVariable transientInstance) throws Exception;
	public List<LSysVariable> findVariablesubbyproperties(String variableType) throws Exception;
	public LSysVariable findVariablebyId(String variableId) throws Exception;
}
