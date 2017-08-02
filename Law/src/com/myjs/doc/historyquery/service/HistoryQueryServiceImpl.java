package com.myjs.doc.historyquery.service; 
 

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Properties;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;

import com.google.gson.JsonObject;


import com.myjs.commons.DateTimeFormat;

import com.myjs.doc.historyquery.service.HistoryQueryService;
import com.myjs.doc.historyquery.Dao.HistoryQueryDao;
import com.myjs.doc.historyquery.model.HQColumeObject1;

 
public  class HistoryQueryServiceImpl implements HistoryQueryService  { 
  private static final Logger log = LogManager.getLogger(HistoryQueryServiceImpl.class);
  private HQColumeObject1 HQColumeObject1;
  private HistoryQueryDao HistoryQueryDao;
  

 public HQColumeObject1 getHQColumeObject1() {
	return HQColumeObject1;
}

public void setHQColumeObject1(HQColumeObject1 HQColumeObject1) {
	this.HQColumeObject1 = HQColumeObject1;
}

public HistoryQueryDao getHistoryQueryDao() {
	return HistoryQueryDao;
}

public void setHistoryQueryDao(HistoryQueryDao HistoryQueryDao) {
	this.HistoryQueryDao = HistoryQueryDao;
}


public  List<HQColumeObject1> searchHistory(String caseId, String debtorName, String debtorId, String[] docno, String receivebegd,
			String receiveendd, String applybegd, String applyendd, String procbegd, String procendd, String asignbegd,
			String asignendd, String applyrsn, String apptcom, String[] docstatus, String docitem, String doctype,
			String prodtype, String asignname)throws Exception
{
	log.debug("Historysearch(serviceImpl) start");

	//return null;


	return HistoryQueryDao.searchHistories(caseId, debtorName, debtorId, docno, receivebegd,
			 receiveendd, applybegd, applyendd, procbegd, procendd, asignbegd,
			 asignendd, applyrsn, apptcom, docstatus, docitem,  doctype,
			 prodtype, asignname);
			
}


public String  exportHistory(String caseId, String debtorName, String debtorId, String[] docno, String receivebegd,
		String receiveendd, String applybegd, String applyendd, String procbegd, String procendd, String asignbegd,
		String asignendd, String applyrsn, String apptcom, String[] docstatus, String docitem, String doctype,
		String prodtype, String asignname, String uploadPath) throws Exception{
	
	
	List<HQColumeObject1> HQColumeObject1 = HistoryQueryDao.searchHistories(caseId, debtorName, debtorId, docno, receivebegd,
			 receiveendd, applybegd, applyendd, procbegd, procendd, asignbegd,
			 asignendd, applyrsn, apptcom, docstatus, docitem,  doctype,
			 prodtype, asignname); 
			//gson.fromJson(printBorrowString, new TypeToken<List<>>(){}.getType());
	System.out.println("dao back!!!"+ HQColumeObject1);
	
	//List<HQColumeObject1> HQColumeObject1 = gson.fromJson(exportdata.toString() , new TypeToken<List<HQColumeObject1>>(){}.getType());
	JsonObject jsonResponse = new JsonObject();
	
	if (!HQColumeObject1.isEmpty()){
		System.out.println("not empty!!!");
		System.out.println(HQColumeObject1.size());
	// 進行套表
		log.debug("套表開始");
		Properties properties = new Properties();
		String propertiesFile = "hqtest.properties";
		ClassLoader classLoader = getClass().getClassLoader();
		properties.load(classLoader.getResourceAsStream(propertiesFile));
		String filePath = properties.getProperty("doc.docSystem.hqprintexcel.path");
		String fileName = properties.getProperty("doc.docSystem.hqprintexcel.name");
		String fileUrl = classLoader.getResource(filePath).getPath();
		log.debug("檔案路徑 = {}", fileUrl + fileName);
	
		String outputDatetime = DateTimeFormat.getNowDateNum();
		String outputString = uploadPath + "/docSys/" + outputDatetime + fileName;
	
		log.debug("outputString = {}", outputString);
	
		try(InputStream is = new FileInputStream(fileUrl + fileName)) {
			log.debug("is = {}", is);
			try (OutputStream os = new FileOutputStream(outputString)) {
				Context context = new Context();
				context.putVar("HQColumeObject1", HQColumeObject1);
				JxlsHelper.getInstance().processTemplate(is, os, context);
			}
		}
		        
		
		jsonResponse.addProperty("success", "success");
		jsonResponse.addProperty("downloadPath", "../upload/docSys/" + outputDatetime +"historyquery.xls");
	
	
	}else{
		System.out.println("empty");
		System.out.println(HQColumeObject1.size());
		jsonResponse.addProperty("success", "success");
		jsonResponse.addProperty("downloadPath", "none");
	}

	return jsonResponse.toString();
	
	
	
}



	

}
