package com.myjs.cek.checkform.service;

import java.util.List;

import com.google.gson.JsonObject;
import com.myjs.cek.checkform.model.LCekCheckform;

public interface checkformService {
	public List<LCekCheckform> findByProperty(LCekCheckform queryLCekCheckform);
	
	public String addCheckform(LCekCheckform addCheckform);
	
	public boolean deleteCheckform(LCekCheckform addCheckform);
	
	public JsonObject findAllColumn(String checkformId);
	
	public JsonObject findAllFile(String checkformId);
	
	public JsonObject saveSelectedColumns(String saveColumns,String saveCheckform,String removeColumns);
	
	public JsonObject saveSelectedFiles(String saveFiles,String saveCheckform,String removeFiles);
}
