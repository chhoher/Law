package com.myjs.cek.contactperson.Dao;

import java.util.List;

import com.myjs.cek.checkform.model.LCekUserBank;

public interface contactPersonDao {
	public List<LCekUserBank> findAll();
	public List<LCekUserBank> findbyproperties(String userName, String bankName);
	public boolean save(LCekUserBank transientInstance);
	public boolean updateLCekUserBank(LCekUserBank transientInstance);
}
