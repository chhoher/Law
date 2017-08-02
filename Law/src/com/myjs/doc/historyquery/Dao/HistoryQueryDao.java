package com.myjs.doc.historyquery.Dao;

import java.util.List;

import com.myjs.doc.historyquery.model.HQColumeObject1;


public interface HistoryQueryDao {
	
	public List<HQColumeObject1> searchHistories(String caseId, String debtorName, String debtorId, String[] docno, String receivebegd,
			String receiveendd, String applybegd, String applyendd, String procbegd, String procendd, String asignbegd,
			String asignendd, String applyrsn, String apptcom, String[] docstatus, String docitem, String doctype,
			String prodtype, String asignname) throws Exception; 


}
