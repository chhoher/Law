package com.myjs.sys.variable.service;

import java.util.List;

import com.myjs.sys.variable.model.LSysVariable;

public interface variableService {
	public List<LSysVariable> findByProperty(LSysVariable queryLSysVariable);
	public boolean addVariable(LSysVariable addLSysVariable);
	public boolean deleteVariable(LSysVariable deleteLSysVariable);
	public List<LSysVariable> findVariableSubByProperty(LSysVariable queryLSysVariable);
	/**
	 * add By Jia 2017-06-12
	 * 將所有子項目Variable讀出
	 */
	public List<LSysVariable> findAllsubVariable();
}
