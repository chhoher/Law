package com.myjs.cek.contactperson.Dao;

import java.util.List;

import com.myjs.cek.checkform.model.LCekUserBank;

public interface contactPersonDao {
	public List<LCekUserBank> findAll() throws Exception;
	public List<LCekUserBank> findbyproperties(String userName, String bankName) throws Exception;
	public boolean save(LCekUserBank transientInstance) throws Exception;
	public boolean updateLCekUserBank(LCekUserBank transientInstance) throws Exception;
}
