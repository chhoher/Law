package com.myjs.cek.checkform.Dao;

import java.util.List;
import java.util.Map;

import com.myjs.cek.checkform.model.LCekCheckformColumn;


public interface checkformColumnDao {
	public List<Map<String, Object>> findThisCheckformColumn(String checkformId);
	public boolean saveOrUpdate(LCekCheckformColumn transientInstance) ;
	public boolean updateRemoveColumns(String removeColumnsIds,String checkformId) ;
}
