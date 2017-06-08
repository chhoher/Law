package com.myjs.sys.user.Dao;

import java.util.List;

import com.myjs.sys.user.model.VEIPMemdb;

public interface memdbDao {
	public VEIPMemdb findbyuserName(String userName);
	public VEIPMemdb findbyMemno(String memno);
	public VEIPMemdb findContactPersonByBankName(String bankName);
	public VEIPMemdb findbyuserId(String userId);
	public List<VEIPMemdb> search() ;
}
