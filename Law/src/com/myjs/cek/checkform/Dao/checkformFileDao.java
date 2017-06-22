package com.myjs.cek.checkform.Dao;

import java.util.List;
import java.util.Map;

import com.myjs.cek.checkform.model.LCekCheckformFile;


public interface checkformFileDao {
	public List<Map<String, Object>> findThisCheckformFile(String checkformId) throws Exception;
	public boolean saveOrUpdate(LCekCheckformFile transientInstance) throws Exception ;
	public boolean updateRemoveFiles(String removeFileIds,String checkformId) throws Exception ;
}
