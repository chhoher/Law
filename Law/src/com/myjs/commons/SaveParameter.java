package com.myjs.commons;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.myjs.sys.variable.model.LSysVariable;
import com.myjs.sys.variable.service.variableService;

// TODO Add By Jia 2017-06-12 以後記得在sysvariable加上當使用者一變更就加進去或移除
public class SaveParameter implements ServletContextListener{
	private static final Logger log = LogManager.getLogger(SaveParameter.class); 
	
	@SuppressWarnings("rawtypes")
	public static Map AllParameter = new HashMap();// 所有資料字典內容
	@SuppressWarnings("rawtypes")
	private static Map AllSystemParameter;// 所有系統參數
	private variableService variableService;
	
	private static String SYSVariable = "";  
	private static ArrayList<LSysVariable> parameters;
	
	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub
		
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public void contextInitialized(ServletContextEvent sce) {
		log.info("=====載入所有Variable=====");
		WebApplicationContext SpringApplicationContext = WebApplicationContextUtils.getRequiredWebApplicationContext(sce.getServletContext());
		variableService=(variableService) SpringApplicationContext.getBean("variableService");
		
		List<LSysVariable> AllParentVariables = variableService.findByProperty(null);
		List<LSysVariable> AllSubVariables = variableService.findAllsubVariable();
		for(LSysVariable lsvP:AllParentVariables){
			Map varList = new HashMap();
			varList.put("id", lsvP.getVariableId());
			ArrayList<LSysVariable> listVariableitem = new ArrayList<LSysVariable>();
			
			for(LSysVariable lsvS:AllSubVariables){
				if(lsvP.getVariableId().equals(lsvS.getVariableType()))
					listVariableitem.add(lsvS);
			}
			
			varList.put("list", listVariableitem);
			AllParameter.put(lsvP.getVariableId(), varList);
			
			// 獲取variable方式("variableId")
			Map R = (Map) AllParameter.get(lsvP.getVariableId());
			log.info((R.get("list")));
		}
		
	}
}
