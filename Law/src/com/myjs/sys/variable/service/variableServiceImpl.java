package com.myjs.sys.variable.service;

import java.util.List;

import com.myjs.sys.variable.model.LSysVariable;
import com.myjs.sys.variable.Dao.variableDao;

public class variableServiceImpl implements variableService{

	private variableDao variableDao;
	
	
	public variableDao getVariableDao() {
		return variableDao;
	}


	public void setVariableDao(variableDao variableDao) {
		this.variableDao = variableDao;
	}

	public List<LSysVariable> findByProperty(LSysVariable queryLSysVariable){
		if(queryLSysVariable == null){
			return variableDao.findAll();
		}else{
			return variableDao.findbyproperties(queryLSysVariable.getVariableName());
		}
	}
	
	public boolean addVariable(LSysVariable addLSysVariable){
		return variableDao.save(addLSysVariable);
	}
	
	public boolean deleteVariable(LSysVariable deleteLSysVariable){
		return variableDao.delete(deleteLSysVariable);
	}
	
	public List<LSysVariable> findVariableSubByProperty(LSysVariable queryLSysVariable){
		if(queryLSysVariable == null){
			return variableDao.findAll();
		}else{
			return variableDao.findVariablesubbyproperties(queryLSysVariable.getVariableType());
		}
	}
}
