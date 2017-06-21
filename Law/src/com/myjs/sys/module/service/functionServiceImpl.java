package com.myjs.sys.module.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.sys.module.model.LSysFunction;
import com.myjs.sys.module.model.LSysMenu;
import com.myjs.sys.module.model.LSysModule;
import com.myjs.sys.module.Dao.functionDao;
import com.myjs.sys.module.Dao.moduleDao;
import com.myjs.sys.module.Dao.menuDao;

public class functionServiceImpl implements functionService{
	
	private static final Logger log = LogManager.getLogger(functionServiceImpl.class);
	private functionDao functionDao;
	private moduleDao moduleDao;
	private menuDao menuDao;
	
	public functionDao getFunctionDao() {
		return functionDao;
	}

	public void setFunctionDao(functionDao functionDao) {
		this.functionDao = functionDao;
	}

	public List<LSysFunction> findByProperty(String functionName){
		return functionDao.findbyproperties(functionName);
	}
	
	public moduleDao getModuleDao() {
		return moduleDao;
	}

	public void setModuleDao(moduleDao moduleDao) {
		this.moduleDao = moduleDao;
	}

	public menuDao getMenuDao() {
		return menuDao;
	}

	public void setMenuDao(menuDao menuDao) {
		this.menuDao = menuDao;
	}

	public boolean addSysFunction(LSysModule addLSysModule, LSysFunction addLSysFunction){
		log.debug("addSysFunction start");
		boolean saveModule = moduleDao.save(addLSysModule);
		if(saveModule){
			addLSysFunction.setModuleId(addLSysModule.getModuleId());
		}
		LSysMenu LSysMenu = new LSysMenu(null, null, addLSysModule.getModuleId(),
				addLSysModule.getModuleName(), 0, "N", "N", addLSysFunction.getFunctionUrl(), "N");
		menuDao.save(LSysMenu);
		log.debug("ModuleId = {}", addLSysModule.getModuleId());
		return functionDao.save(addLSysFunction);
	}
}
