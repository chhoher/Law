package com.myjs.sys.user.Dao;

import java.util.List;

import com.myjs.sys.user.model.VEIPMemdb;

public interface memdbDao {
	public VEIPMemdb findbyuserName(String userName) throws Exception;
	public VEIPMemdb findbyMemno(String memno) throws Exception;
	public VEIPMemdb findContactPersonByBankName(String bankName) throws Exception;
	public VEIPMemdb findbyuserId(String userId) throws Exception;
	public List<VEIPMemdb> search() throws Exception ;
}
