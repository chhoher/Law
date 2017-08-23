package com.myjs.doc.historyquery.Action;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import com.myjs.commons.AbstractAction;
import com.myjs.doc.historyquery.model.HQColumeObject1;
import com.myjs.doc.historyquery.service.HistoryQueryService;

public class HistoryQueryAction extends AbstractAction{
	private static final long serialVersionUID = -8355626774003201809L;
	private static final Logger log = LogManager.getLogger(HistoryQueryAction.class);
	
	private HistoryQueryService historyQueryService;	
	
	public HistoryQueryService getHistoryQueryService() {
		return historyQueryService;
	}

	public void setHistoryQueryService(HistoryQueryService historyQueryService) {
		this.historyQueryService = historyQueryService;
	}

	public String searchHistory() {
		try{

			System.out.println("start");
			log.debug("Historysearch start");
			String  caseId = super.getRequest().getParameter("hqsearchcaseId"),
					debtorName = super.getRequest().getParameter("hqsearchdebtorName"),
					debtorId = super.getRequest().getParameter("hqsearchdebtorID"),
					receivebegd = super.getRequest().getParameter("hqsearchreceivebegd"),
					receiveendd = super.getRequest().getParameter("hqsearchreceiveendd"),
					applybegd = super.getRequest().getParameter("hqsearchapplybegd"),
					applyendd = super.getRequest().getParameter("hqsearchapplyendd"),
					procbegd = super.getRequest().getParameter("hqsearchprocbegd"),
					procendd = super.getRequest().getParameter("hqsearchprocendd"),
					asignbegd = super.getRequest().getParameter("hqsearchasignbegd"),
					asignendd = super.getRequest().getParameter("hqsearchasignendd"),
					applyrsn = super.getRequest().getParameter("s_applyrsn"),
					apptcom = super.getRequest().getParameter("s_apptcom"),
					docitem = super.getRequest().getParameter("s_docitem"),
					doctype = super.getRequest().getParameter("s_doctype"),
					prodtype = super.getRequest().getParameter("s_prodtype"),
					asignname = super.getRequest().getParameter("s_asignname");	
			
			String[] docstatuss = super.getRequest().getParameterValues("s_docstatus[]");
			String[] docnos     = super.getRequest().getParameterValues("hqsearchdocNo[]");



				
					
					List<HQColumeObject1> historyList = historyQueryService.searchHistory(
							caseId, debtorName, debtorId, docnos, receivebegd,
							 receiveendd, applybegd, applyendd, procbegd, procendd, asignbegd,
							 asignendd, applyrsn, apptcom, docstatuss, docitem,  doctype,
							 prodtype, asignname);
							
					System.out.println("history : " + historyList);

			
			
//			HttpServletResponse response;
			JsonObject jsonResponse = new JsonObject();
			JsonObject json = new JsonObject();
			json.addProperty("process","success");
			
			jsonResponse.add("data", json);

			//extends AbstractAction�~�i�H�ϥ�
			Gson gson = new Gson();		
			jsonResponse.add("List",gson.toJsonTree(historyList));
			
			String historyList1 = jsonResponse.toString();
			System.out.println("LIST!!!" + historyList1);
			
			
			printToResponse(historyList1);
			
			
			}catch(Exception e){
				e.printStackTrace();
				
				log.error("error = >",e);
			}
				return NONE;
	}
	public String exportHistory() {
		
		try{

			System.out.println("start");
			log.debug("Historysearch start");
			String  caseId = super.getRequest().getParameter("hqsearchcaseId"),
					debtorName = super.getRequest().getParameter("hqsearchdebtorName"),
					debtorId = super.getRequest().getParameter("hqsearchdebtorID"),
					receivebegd = super.getRequest().getParameter("hqsearchreceivebegd"),
					receiveendd = super.getRequest().getParameter("hqsearchreceiveendd"),
					applybegd = super.getRequest().getParameter("hqsearchapplybegd"),
					applyendd = super.getRequest().getParameter("hqsearchapplyendd"),
					procbegd = super.getRequest().getParameter("hqsearchprocbegd"),
					procendd = super.getRequest().getParameter("hqsearchprocendd"),
					asignbegd = super.getRequest().getParameter("hqsearchasignbegd"),
					asignendd = super.getRequest().getParameter("hqsearchasignendd"),
					applyrsn = super.getRequest().getParameter("s_applyrsn"),
					apptcom = super.getRequest().getParameter("s_apptcom"),
					docitem = super.getRequest().getParameter("s_docitem"),
					doctype = super.getRequest().getParameter("s_doctype"),
					prodtype = super.getRequest().getParameter("s_prodtype"),
					asignname = super.getRequest().getParameter("s_asignname");	
			
			String[] docstatuss = super.getRequest().getParameterValues("s_docstatus[]");
			String[] docnos     = super.getRequest().getParameterValues("hqsearchdocNo[]");

			

				
				System.out.println("historyAciton start!");
					String historyList = historyQueryService.exportHistory(
							caseId, debtorName, debtorId, docnos, receivebegd,
							 receiveendd, applybegd, applyendd, procbegd, procendd, asignbegd,
							 asignendd, applyrsn, apptcom, docstatuss, docitem,  doctype,
							 prodtype, asignname, getpath());
							
					System.out.println("history : " + historyList);

			
			

					
			printToResponse(historyList);
			
			
			}catch(Exception e){
				e.printStackTrace();
				
				log.error("error = >",e);
			}
				return NONE;
	}

	
}
