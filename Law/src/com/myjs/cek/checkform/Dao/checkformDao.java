package com.myjs.cek.checkform.Dao;

import java.util.List;

import com.myjs.cek.checkform.model.LCekCheckform;

public interface checkformDao {
	public List<LCekCheckform> findAll();
	public boolean save(LCekCheckform transientInstance) ;
	public List<LCekCheckform> findByExample(LCekCheckform transientInstance);
	public List<LCekCheckform> findbyproperties(String checkformCode, String checkformType, String checkformName);
	public boolean delete(LCekCheckform transientInstance);
}
