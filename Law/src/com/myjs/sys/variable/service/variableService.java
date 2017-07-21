package com.myjs.sys.variable.service;

import java.util.List;

import com.myjs.sys.variable.model.LSysVariable;

public interface variableService {
	public List<LSysVariable> findByProperty(LSysVariable queryLSysVariable) throws Exception;
	public boolean addVariable(LSysVariable addLSysVariable) throws Exception;
	public boolean deleteVariable(LSysVariable deleteLSysVariable) throws Exception;
	public List<LSysVariable> findVariableSubByProperty(LSysVariable queryLSysVariable) throws Exception;
	/**
	 * add By Jia 2017-06-12
	 * 將所有子項目Variable讀出
	 */
	public List<LSysVariable> findAllsubVariable() throws Exception;
	
	/**
	 * add By Jia 2017-07-21
	 * 用variableId帶出子類
	 * @param variableId
	 * @return
	 * @throws Exception
	 */
	public String findVariableParameterByVariableId(String variableId) throws Exception;
}
