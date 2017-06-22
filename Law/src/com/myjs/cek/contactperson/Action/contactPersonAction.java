package com.myjs.cek.contactperson.Action;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.cek.checkform.model.LCekUserBank;
import com.myjs.cek.contactperson.service.contactPersonService;
import com.myjs.commons.AbstractAction;

public class contactPersonAction extends AbstractAction{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1115756036517686105L;
	private static final Logger log = LogManager.getLogger(contactPersonAction.class);
	private contactPersonService contactPersonService;
	
	public contactPersonService getContactPersonService() {
		return contactPersonService;
	}

	public void setContactPersonService(contactPersonService contactPersonService) {
		this.contactPersonService = contactPersonService;
	}

	public String findAllContactBank(){
		try {
			log.debug("findAllContactBank start");
			log.debug("===== ContactBank info =====");
			String iptsearchuserNo = super.getRequest().getParameter("iptsearchcontactPersonNo"),
					iptsearchbankName = super.getRequest().getParameter("iptsearchbankName");
			log.debug("iptsearchuserNo = {} ,iptsearchbankName = {}", iptsearchuserNo, iptsearchbankName);

			LCekUserBank inputUserBank = new LCekUserBank();
			inputUserBank.setMemno(iptsearchuserNo);
			inputUserBank.setBankName(iptsearchbankName);

			List<LCekUserBank> LCekUserBankList = contactPersonService.findByProperty(inputUserBank);
			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LCekUserBankList));
			String responseLCekUserBankList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekUserBankList);
			printToResponse(responseLCekUserBankList);
		} catch (Exception e) {
			sendException(e);
			log.error("findAllContactBank error msg=>", e);
		}
		log.debug("findAllContactBank end");
		return NONE;
	}
	
	public String addContactPerson(){
		try{
			log.debug("addContactPerson start");
			log.debug("===== ContactBank info =====");
			String iptsetcontactPersonMemnm = super.getRequest().getParameter("iptsetcontactPersonMemnm"),
					iptsetcontactPersonMemno = super.getRequest().getParameter("iptsetcontactPersonMemno"),
					selectedbankName = super.getRequest().getParameter("selectedbankName");
			log.debug("iptsetcontactPersonMemnm = {} , iptsetcontactPersonMemno = {} , "
					+ "selectedbankName = {}", iptsetcontactPersonMemnm, iptsetcontactPersonMemno, selectedbankName);
			JsonObject MapAddContactPerson = contactPersonService.saveOrUpdate(iptsetcontactPersonMemnm,
					iptsetcontactPersonMemno, selectedbankName);
			log.debug("MapAddContactPerson = {}", MapAddContactPerson);
			printToResponse(MapAddContactPerson.toString());
		}catch(Exception e){
			sendException(e);
			log.error("addContactPerson error msg=>", e);
		}
		return NONE;
	}
}
