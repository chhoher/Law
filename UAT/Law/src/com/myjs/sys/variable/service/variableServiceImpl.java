package com.myjs.sys.variable.service;

import java.util.List;
import java.util.Map;

import com.myjs.sys.variable.model.LSysVariable;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.myjs.commons.SaveParameter;
import com.myjs.sys.variable.Dao.variableDao;

public class variableServiceImpl implements variableService{

	private variableDao variableDao;
	
	
	public variableDao getVariableDao() {
		return variableDao;
	}


	public void setVariableDao(variableDao variableDao) {
		this.variableDao = variableDao;
	}

	public List<LSysVariable> findByProperty(LSysVariable queryLSysVariable) throws Exception{
		if(queryLSysVariable == null){
			return variableDao.findAll();
		}else{
			return variableDao.findbyproperties(queryLSysVariable.getVariableName());
		}
	}
	
	public boolean addVariable(LSysVariable addLSysVariable) throws Exception{
		return variableDao.save(addLSysVariable);
	}
	
	public boolean deleteVariable(LSysVariable deleteLSysVariable) throws Exception{
		return variableDao.delete(deleteLSysVariable);
	}
	
	public List<LSysVariable> findVariableSubByProperty(LSysVariable queryLSysVariable) throws Exception{
		if(queryLSysVariable == null){
			return variableDao.findAll();
		}else{
			return variableDao.findVariablesubbyproperties(queryLSysVariable.getVariableType());
		}
	}
	
	/**
	 * add By Jia 2017-06-12
	 * 將所有子項目Variable讀出
	 */
	public List<LSysVariable> findAllsubVariable() throws Exception{
		return variableDao.findVariablesubbyproperties(null);
	}

	@SuppressWarnings("unchecked")
	public String findVariableParameterByVariableId(String variableId) throws Exception{
		Map<?, ?> LSysVariableMap = (Map<?, ?>) SaveParameter.AllParameter.get(variableId);
		List<LSysVariable> LSysVariableSubList = (List<LSysVariable>) LSysVariableMap.get("list"); //文件狀態
		Gson gson = new Gson();
		JsonObject jsonResponse = new JsonObject();
		jsonResponse.add("variableSubList", gson.toJsonTree(LSysVariableSubList));
		return jsonResponse.toString();
	}
}
