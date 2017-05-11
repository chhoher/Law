package com.myjs.doc.documents.Action;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.doc.documents.service.docService;
import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.commons.AbstractAction;

public class docAction extends AbstractAction {

	private static final Logger log = LogManager.getLogger(docAction.class);

	private docService docService;
	
	public docService getDocService() {
		return docService;
	}


	public void setDocService(docService docService) {
		this.docService = docService;
	}

	public String loadCaseInfo() {
		try {

			log.debug("loadCaseInfo start");
			String caseId = super.getRequest().getParameter("caseId"),
					userId = super.getRequest().getParameter("userId"),
					customerName = super.getRequest().getParameter("customerName"),
					customerId = super.getRequest().getParameter("customerId"),
					docNo = super.getRequest().getParameter("docNo"),
					legalCaseId = super.getRequest().getParameter("legalCaseId");
			log.debug(
					"caseId = {}, userId = {}, customerName = {}, customerId = {} ," + "docNo = {} , legalCaseId = {}",
					caseId, userId, customerName, customerId, docNo, legalCaseId);

			List<LCekSignedCaseInfo> LCekSignedCaseInfoList = docService.findByProperty(caseId, customerName,
					customerId, docNo, legalCaseId);

			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
			JsonObject jsonResponse = new JsonObject();
			jsonResponse.add("data", gson.toJsonTree(LCekSignedCaseInfoList));
			String responseLCekSignedCaseInfoList = jsonResponse.toString();

			log.debug("responsedata = {}", responseLCekSignedCaseInfoList);
			printToResponse(responseLCekSignedCaseInfoList);
		} catch (Exception e) {
			log.error("loadCaseInfo error ms=>", e);
		}
		return NONE;
	}
}
