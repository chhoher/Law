package com.myjs.sys.module.service;

import java.util.List;

import com.myjs.sys.module.model.LSysFunction;
import com.myjs.sys.module.Dao.functionDao;

public class functionServiceImpl implements functionService{
	
	private functionDao functionDao;
	
	public functionDao getFunctionDao() {
		return functionDao;
	}


	public void setFunctionDao(functionDao functionDao) {
		this.functionDao = functionDao;
	}

	public List<LSysFunction> findByProperty(String functionName){
		return functionDao.findbyproperties(functionName);
	}
	
	public boolean addSysFunction(LSysFunction addLSysFunction){
		return functionDao.save(addLSysFunction);
	}
}
