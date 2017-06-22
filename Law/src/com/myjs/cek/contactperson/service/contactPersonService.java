package com.myjs.cek.contactperson.service;

import java.util.List;

import com.google.gson.JsonObject;
import com.myjs.cek.checkform.model.LCekUserBank;

public interface contactPersonService {
	public List<LCekUserBank> findByProperty(LCekUserBank queryLCekUserBank) throws Exception;
	public JsonObject saveOrUpdate(String memnm, String memno, String bankName) throws Exception;
}
