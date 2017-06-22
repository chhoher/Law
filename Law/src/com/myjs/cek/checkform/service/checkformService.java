package com.myjs.cek.checkform.service;

import java.util.List;

import com.google.gson.JsonObject;
import com.myjs.cek.checkform.model.LCekCheckform;

public interface checkformService {
	public List<LCekCheckform> findByProperty(LCekCheckform queryLCekCheckform) throws Exception;
	
	public String addCheckform(LCekCheckform addCheckform) throws Exception;
	
	public boolean deleteCheckform(LCekCheckform addCheckform) throws Exception;
	
	public JsonObject findAllColumn(String checkformId) throws Exception;
	
	public JsonObject findAllFile(String checkformId) throws Exception;
	
	public JsonObject saveSelectedColumns(String saveColumns,String saveCheckform,String removeColumns) throws Exception;
	
	public JsonObject saveSelectedFiles(String saveFiles,String saveCheckform,String removeFiles) throws Exception;
}
