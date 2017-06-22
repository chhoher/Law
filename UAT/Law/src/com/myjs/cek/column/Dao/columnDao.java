package com.myjs.cek.column.Dao;

import java.util.List;

import com.myjs.cek.checkform.model.LCekColumn;

public interface columnDao {
	public List<LCekColumn> findAll() throws Exception;
	public List<LCekColumn> findbyproperties(String columnName, String columnType) throws Exception;
	public boolean save(LCekColumn transientInstance) throws Exception ;
	public boolean delete(LCekColumn transientInstance) throws Exception;
}
