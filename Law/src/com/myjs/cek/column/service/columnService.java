package com.myjs.cek.column.service;

import java.util.List;

import com.myjs.cek.checkform.model.LCekColumn;

public interface columnService {
	public List<LCekColumn> findByProperty(LCekColumn queryLCekColumn);
	public boolean addCekColumn(LCekColumn addlcekcolumn);
	public boolean deleteCekColumn(LCekColumn deleteColumn);
}
