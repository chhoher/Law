package com.myjs.doc.historyquery.service; 
 
//import java.sql.Connection; 
//import java.sql.DriverManager; 
//import java.sql.PreparedStatement; 
//import java.sql.ResultSet; 
//import java.sql.SQLException; 
//import java.sql.Statement;
import java.util.List;

import com.myjs.doc.historyquery.model.HQColumeObject1;




 
public interface HistoryQueryService { 

		
  public List<HQColumeObject1> searchHistory(String caseId, String debtorName, String debtorId, String[] docno, String receivebegd,
		String receiveendd, String applybegd, String applyendd, String procbegd, String procendd, String asignbegd,
		String asignendd, String applyrsn, String apptcom, String[] docstatus, String docitem, String doctype,
		String prodtype, String asignname) throws Exception;

  public String exportHistory(String caseId, String debtorName, String debtorId, String[] docno, String receivebegd,
			String receiveendd, String applybegd, String applyendd, String procbegd, String procendd, String asignbegd,
			String asignendd, String applyrsn, String apptcom, String[] docstatus, String docitem, String doctype,
			String prodtype, String asignname, String uploadpath) throws Exception;		
}

