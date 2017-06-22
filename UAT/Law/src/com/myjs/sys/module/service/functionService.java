package com.myjs.sys.module.service;

import java.util.List;

import com.myjs.sys.module.model.LSysFunction;
import com.myjs.sys.module.model.LSysModule;

public interface functionService {
	public List<LSysFunction> findByProperty(String functionName) throws Exception;
	public boolean addSysFunction(LSysModule addLSysModule, LSysFunction addLSysFunction) throws Exception;
}
