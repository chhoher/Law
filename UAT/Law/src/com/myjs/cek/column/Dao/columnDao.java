package com.myjs.cek.column.Dao;

import java.util.List;

import com.myjs.cek.checkform.model.LCekColumn;

public interface columnDao {
	public List<LCekColumn> findAll();
	public List<LCekColumn> findbyproperties(String columnName, String columnType);
	public boolean save(LCekColumn transientInstance) ;
	public boolean delete(LCekColumn transientInstance);
}
