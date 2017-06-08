package com.myjs.cek.column.service;

import java.util.List;

import com.myjs.cek.checkform.model.LCekColumn;
import com.myjs.cek.column.Dao.columnDao;

public class columnServiceImpl implements columnService{
	private columnDao columnDao;

	public columnDao getColumnDao() {
		return columnDao;
	}

	public void setColumnDao(columnDao columnDao) {
		this.columnDao = columnDao;
	}
	
	public List<LCekColumn> findByProperty(LCekColumn queryLCekColumn){
		if(queryLCekColumn == null){
			return columnDao.findAll();
		}else{
			return columnDao.findbyproperties(queryLCekColumn.getColumnName(),queryLCekColumn.getColumnType());
		}
	}
	
	public boolean addCekColumn(LCekColumn addlcekcolumn){
		return columnDao.save(addlcekcolumn);
	}
	
	public boolean deleteCekColumn(LCekColumn deletecekColumn){
		return columnDao.delete(deletecekColumn);
	}
}
