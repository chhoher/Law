package com.myjs.cek.checkform.Dao;

import java.util.List;

import com.myjs.cek.checkform.model.LCekCheckform;

public interface checkformDao {
	public List<LCekCheckform> findAll()  throws Exception;
	public boolean save(LCekCheckform transientInstance) throws Exception ;
	public List<LCekCheckform> findByExample(LCekCheckform transientInstance) throws Exception;
	public List<LCekCheckform> findbyproperties(String checkformCode, String checkformType, String checkformName) throws Exception;
	public boolean delete(LCekCheckform transientInstance) throws Exception;
}
