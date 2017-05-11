package com.myjs.cek.contactperson.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.JsonObject;
import com.myjs.cek.checkform.model.LCekUserBank;
import com.myjs.cek.contactperson.Dao.contactPersonDao;
import com.myjs.commons.JsonUtil;

public class contactPersonServiceImpl implements contactPersonService{
	private static final Logger log = LogManager.getLogger(contactPersonServiceImpl.class);

	private contactPersonDao contactPersonDao;
	
	public contactPersonDao getContactPersonDao() {
		return contactPersonDao;
	}

	public void setContactPersonDao(contactPersonDao contactPersonDao) {
		this.contactPersonDao = contactPersonDao;
	}

	@Override
	public List<LCekUserBank> findByProperty(LCekUserBank queryLCekUserBank){
		if(queryLCekUserBank == null){
			return contactPersonDao.findAll();
		}else{
			return contactPersonDao.findbyproperties(queryLCekUserBank.getMemno(),queryLCekUserBank.getBankName());
		}
	}

	public JsonObject saveOrUpdate(String memnm, String memno, String bankName){

		try{
			log.debug("===== saveOrUpdate start =====");
			List<LCekUserBank> LCekUserBankList = contactPersonDao.findbyproperties(null, bankName);
			LCekUserBank LCekUserBank = new LCekUserBank();
			LCekUserBank.setMemnm(memnm);
			LCekUserBank.setMemno(memno);
			LCekUserBank.setBankName(bankName);
			if(LCekUserBankList.size() == 0){
				contactPersonDao.save(LCekUserBank);
			}else{
				contactPersonDao.updateLCekUserBank(LCekUserBank);
			}
			return JsonUtil.ajaxResultSuccess("儲存成功");
		}catch(Exception e){
			log.error("saveOrUpdate error msg ==>", e);
			return JsonUtil.ajaxResultSuccess("儲存失敗");
		}
	
	}
}
