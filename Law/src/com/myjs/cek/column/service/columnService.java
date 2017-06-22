package com.myjs.cek.column.service;

import java.util.List;

import com.myjs.cek.checkform.model.LCekColumn;

public interface columnService {
	public List<LCekColumn> findByProperty(LCekColumn queryLCekColumn) throws Exception;
	public boolean addCekColumn(LCekColumn addlcekcolumn) throws Exception;
	public boolean deleteCekColumn(LCekColumn deleteColumn) throws Exception;
}
