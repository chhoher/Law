package com.myjs.cek.checkform.Dao;

import java.util.List;
import java.util.Map;

import com.myjs.cek.checkform.model.LCekCheckformColumn;


public interface checkformColumnDao {
	public List<Map<String, Object>> findThisCheckformColumn(String checkformId) throws Exception;
	public boolean saveOrUpdate(LCekCheckformColumn transientInstance) throws Exception ;
	public boolean updateRemoveColumns(String removeColumnsIds,String checkformId) throws Exception ;
}
