package com.myjs.sys.variable.service;

import java.util.List;

import com.myjs.sys.variable.model.LSysVariable;

public interface variableService {
	public List<LSysVariable> findByProperty(LSysVariable queryLSysVariable);
	public boolean addVariable(LSysVariable addLSysVariable);
	public boolean deleteVariable(LSysVariable deleteLSysVariable);
	public List<LSysVariable> findVariableSubByProperty(LSysVariable queryLSysVariable);
}
