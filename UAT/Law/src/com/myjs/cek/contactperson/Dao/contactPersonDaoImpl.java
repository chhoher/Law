package com.myjs.cek.contactperson.Dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;

import com.myjs.cek.checkform.model.LCekUserBank;
import com.myjs.commons.DaoUtil;

public class contactPersonDaoImpl extends DaoUtil implements contactPersonDao{
	private static final Logger log = LogManager.getLogger(contactPersonDaoImpl.class);
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public List<LCekUserBank> findAll() throws Exception{
		log.debug("finding all LCekUserBank start");
		StringBuffer queryString = new StringBuffer("SELECT VUSB.Bank_alias, VUSB.user_bank_id,");
		queryString.append(" VUSB.memno, VUSB.memnm, VUSB.bank_name");
		queryString.append(" FROM V_USER_SMART_BANK VUSB");
		log.debug("queryString = {}",queryString);
		
		List<Map<String, Object>> querylist=this.jdbcTemplate.queryForList(queryString.toString());

		List<LCekUserBank> MapLCekUserBank = new ArrayList<LCekUserBank>();
		for (Map<?, ?> map : querylist) {
			LCekUserBank LCekUserBank = new LCekUserBank();
			LCekUserBank.setBankName((String) map.get("Bank_alias"));
			if((String) map.get("memnm") == null){
				LCekUserBank.setMemnm("");
			}else{
				LCekUserBank.setMemnm((String) map.get("memnm"));
			}
			LCekUserBank.setMemno((String) map.get("memno"));
			LCekUserBank.setUserBankId((String) map.get("user_bank_id"));
			MapLCekUserBank.add(LCekUserBank);
		}
		log.debug("finding all LCekUserBank end");
        return MapLCekUserBank;
    }
	
	public List<LCekUserBank> findbyproperties(String userNo, String bankName) throws Exception{
		log.debug("findbyproperties start");
		StringBuffer queryString = new StringBuffer("SELECT VUSB.Bank_alias, VUSB.user_bank_id,");
		queryString.append(" VUSB.memno, VUSB.memnm, VUSB.bank_name");
		queryString.append(" FROM V_USER_SMART_BANK VUSB WHERE 1=1");

		if(userNo != null && !userNo.equals("")){
			queryString.append(" and VUSB.memno = '" + userNo +"'");
		}
		if(bankName != null && !bankName.equals("")){
			queryString.append(" and VUSB.bank_name = '"+ bankName +"'");
		}
		log.debug("queryString = {}",queryString);
		
		List<Map<String, Object>> querylist=this.jdbcTemplate.queryForList(queryString.toString());

		List<LCekUserBank> MapLCekUserBank = new ArrayList<LCekUserBank>();
		for (Map<?, ?> map : querylist) {
			LCekUserBank LCekUserBank = new LCekUserBank();
			LCekUserBank.setBankName((String) map.get("Bank_alias"));
			if((String) map.get("memnm") == null){
				LCekUserBank.setMemnm("");
			}else{
				LCekUserBank.setMemnm((String) map.get("memnm"));
			}
			LCekUserBank.setMemno((String) map.get("memno"));
			LCekUserBank.setUserBankId((String) map.get("user_bank_id"));
			MapLCekUserBank.add(LCekUserBank);
		}
		log.debug("findbyproperties end");
		return MapLCekUserBank;
	}
	
	public boolean save(LCekUserBank transientInstance) throws Exception {
		log.debug("saving LCekUserBank instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean updateLCekUserBank(LCekUserBank transientInstance) throws Exception {
		log.debug("updateLCekUserBank start");
		boolean flag = false;
		StringBuffer queryString=new StringBuffer("UPDATE L_CEK_USER_BANK");
		queryString.append(" SET memno = '" + transientInstance.getMemno() + "',");
		queryString.append(" memnm = '" + transientInstance.getMemnm() + "'");
		queryString.append(" WHERE bank_name = '"+transientInstance.getBankName() + "'");
		int i = this.jdbcTemplate.update(queryString.toString());
		log.debug("queryString = {}",queryString);
		log.debug("i = {}",i);
		flag = true;
		return flag;
	}
}
