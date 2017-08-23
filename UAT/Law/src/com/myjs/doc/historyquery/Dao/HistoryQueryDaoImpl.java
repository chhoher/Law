package com.myjs.doc.historyquery.Dao;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate5.HibernateCallback;



import com.myjs.commons.DaoUtil;
import com.myjs.doc.historyquery.model.HQColumeObject1;


public class HistoryQueryDaoImpl extends DaoUtil implements  HistoryQueryDao{

	private static final Logger log = LogManager.getLogger(HistoryQueryDaoImpl.class);
	
	private JdbcTemplate jdbcTemplate;
	private JdbcTemplate SMARTjdbcTemplate;
	
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public JdbcTemplate getSMARTjdbcTemplate() {
		return SMARTjdbcTemplate;
	}

	public void setSMARTjdbcTemplate(JdbcTemplate SMARTjdbcTemplate) {
		this.SMARTjdbcTemplate = SMARTjdbcTemplate;
	}
	
	@SuppressWarnings("unchecked")
	public List<HQColumeObject1> findAll() throws Exception {
		log.debug("finding all LCekCheckform start");
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from HQColumeObject1 ";
	                query = session.createQuery(hql);
	                return query.list();
	            }
	        });
			log.debug("finding all LCekCheckform end");
	        return (List<HQColumeObject1>)execute;
    }
	
	public List<HQColumeObject1> searchHistories(String caseId, String debtorName, String debtorId, String[] docno, String receivebegd,
			String receiveendd, String applybegd, String applyendd, String procbegd, String procendd, String asignbegd,
			String asignendd, String applyrsn, String apptcom, String[] docstatus, String docitem, String doctype,
			String prodtype, String asignname)throws Exception
	{	
		
		List<HQColumeObject1> MapLCekRecordCheckform = new ArrayList<HQColumeObject1>();
		try{
		log.debug("finding all historyDATA start");
		
		String conditionall = "";
	    
		
		HistoryQueryDaoImpl pro = new HistoryQueryDaoImpl();


	    // 檢查各欄位是否有值，若有值則串成SQL SELETE條件式
	    conditionall = pro.prochisorysql(caseId,debtorName, debtorId, docno, receivebegd, receiveendd, applybegd, 
	    		applyendd,  procbegd, procendd, asignbegd, asignendd, applyrsn, apptcom, 
	    		docstatus, docitem, doctype, prodtype, asignname);
		
	    //若無SQL SELETE條件式，則資料全挑
    	StringBuffer queryString=new StringBuffer("SELECT * FROM L_DOC_BORROW_HISTORY");
    	if (conditionall !=null && !conditionall.equals("")){
    		queryString.append(" WHERE "+ conditionall);
    	}
    	
		log.debug("queryString = {}",queryString);
		List<Map<String, Object>> querylist=this.jdbcTemplate.queryForList(queryString.toString());
   
		log.debug("queryString = {}",queryString);
		log.debug("querylist = {}",querylist);
		
		for (Map<?, ?> map : querylist) {
			HQColumeObject1 historypro = new HQColumeObject1();
			System.out.println("TTTTTT1: " + (String) map.get("bank_name"));		    
			historypro.setBankname((String) map.get("bank_name") == null ? "":(String) map.get("bank_name"));
		    historypro.setProdname((String) map.get("prod_name")== null ? "":(String) map.get("prod_name"));
		    historypro.setId((String) map.get("ID")== null ? "":(String) map.get("ID"));
		    historypro.setName((String) map.get("debt_name")== null ? "":(String) map.get("debt_name"));
		    historypro.setCaseId((String) map.get("case_id")== null ? "": (String) map.get("case_id"));
		    historypro.setDocno((String) map.get("doc_code")== null ? "" : (String) map.get("doc_code"));
		    historypro.setDoctype((String) map.get("type_one")== null ? "" : (String) map.get("type_one"));
		    historypro.setDocitem((String) map.get("type_two")== null ? "" : (String) map.get("type_two"));
		    historypro.setDocstatus((String) map.get("doc_status")== null ? "" : (String) map.get("doc_status"));
		    historypro.setCourtYearInfo((String) map.get("court_year_info")== null ? "" : (String) map.get("court_year_info"));
		    historypro.setSourceDocInfo((String) map.get("source_doc_info")== null ? "": (String) map.get("source_doc_info"));
		    historypro.setBorrowReason((String) map.get("borrow_reason")== null ? "": (String) map.get("borrow_reason"));
		    historypro.setLawcode((String) map.get("law_code")== null ? "": (String) map.get("law_code"));
		    historypro.setBorrowDate((Date) map.get("borrow_datetime") == null ? "" : ((Date) map.get("borrow_datetime")).toString());
		    historypro.setBorrowUser((String) map.get("borrow_user_name")== null ? "": (String) map.get("borrow_user_name"));
		    historypro.setProcdate((Date) map.get("progress_datetime") == null ? "": ((Date) map.get("progress_datetime")).toString());
		    historypro.setProcname((String) map.get("progress_user_name") == null ? "": (String) map.get("progress_user_name"));
		    historypro.setCheckDate((Date) map.get("check_datetime") == null ? "" : ((Date) map.get("check_datetime")).toString());
		    historypro.setCheckUser((String) map.get("check_user_name") == null ? "" : (String) map.get("check_user_name"));
		    historypro.setBackDate((Date) map.get("back_datetime") == null ? "" : ((Date) map.get("back_datetime")).toString());
		    historypro.setBackUser((String) map.get("back_user_name") == null ? "" : (String) map.get("back_user_name"));
		    historypro.setLastproctime((Date) map.get("final_progress_datetime") == null ? "" : ((Date) map.get("final_progress_datetime")).toString());
		    historypro.setLastprocname((String) map.get("final_progress_user_name")== null ? "" : (String) map.get("final_progress_user_name"));
		    historypro.setCorrect((String) map.get("edit")== null ? "" : (String) map.get("edit"));
		    historypro.setDepartment((String) map.get("business")== null ? "" : (String) map.get("business"));
		    historypro.setEmployee_tel((String) map.get("business_account")== null ? "" : (String) map.get("business_account"));
		    
			MapLCekRecordCheckform.add(historypro);
			
			
		}
			
	    } catch (Exception e) {
			// TODO Auto-generated catch block
	    	System.out.println("HQdao Exception :" + e.toString()); 
	    	e.printStackTrace();
		}
		log.debug("searchhistory (dao) end");
		return MapLCekRecordCheckform;
		
	}
	
	
	
	
String prochisorysql(String caseId, String debtorName, String debtorId, String[] docno, String receivebegd,
		String receiveendd, String applybegd, String applyendd, String procbegd, String procendd, String asignbegd,
		String asignendd, String applyrsn, String apptcom, String[] docstatus, String docitem, String doctype,
		String prodtype, String asignname){
    System.out.println("porcHistory!!");
    String tempc = "";
    String tempdbcol = "";
    String conditionall = "";
    HistoryQueryDaoImpl pro = new HistoryQueryDaoImpl();
   
   try{
   

	if (caseId != null && !caseId.equals("") ) {
		
		tempc = caseId;
		tempdbcol = "case_id" ;
		conditionall = pro.conditionProcess(conditionall, tempc, tempdbcol);
	}
	if (debtorName != null && !debtorName.equals("") ) {
		
		tempc = debtorName; 
		tempdbcol = "debt_name" ;
		conditionall = pro.conditionProcess(conditionall, tempc, tempdbcol);
	}
	if (debtorId != null && !debtorId.equals("")) {
	
		tempc = debtorId; 
		tempdbcol = "ID" ;
		conditionall = pro.conditionProcess(conditionall, tempc, tempdbcol);	  
	} 
	if (applyrsn != null && !applyrsn.equals("")) {
		
		tempc = applyrsn; 
		tempdbcol = "borrow_reason" ;
		conditionall = pro.conditionProcess(conditionall, tempc, tempdbcol);	  
	} 
	if (docno[0] != null && !docno[0].equals("")) {
		String tempdocno = "(";
		for (int i = 0 ; i < docno.length ; i++){
		    if(docno[i] != null){
		    	if (i > 0 ){
					tempdocno = tempdocno + " OR " ;
				}
		    	tempdocno = tempdocno + "(doc_code Like '%"+ docno[i] +"%')"   ;
		     }
		    
		}
		if ((conditionall != null) && (!conditionall.equals(""))){
			conditionall = conditionall +" AND " +  tempdocno + ")";
		}else{
			conditionall = tempdocno + ")";	  
		}
	}
	if (apptcom != null && !apptcom.equals("")) {
		tempc = apptcom; 
		tempdbcol = "bank_name" ;
		conditionall = pro.conditionProcess(conditionall, tempc, tempdbcol);	  
	} 
	if (prodtype != null && !prodtype.equals("")) {
		tempc = prodtype; 
		tempdbcol = "prod_name" ;
		conditionall = pro.conditionProcess(conditionall, tempc, tempdbcol);	  
	}
	if (docstatus != null && !docstatus.equals("")) {
		String tempstatus = "(";
		for (int i = 0 ; i < docstatus.length ; i++){
		    if(docstatus[i] != null){
		    	if (i > 0 ){
					tempstatus = tempstatus + " OR " ;
				}
		    	tempstatus = tempstatus + "(doc_status Like '%"+ docstatus[i] +"%')"   ;
		     }
		}
		if (conditionall != null){
			conditionall = conditionall +" AND " +  tempstatus + ")";
		}else{
			conditionall = tempstatus + ")";
		}
	}
	if (doctype != null && !doctype.equals("")) {
		tempc = doctype; 
		tempdbcol = "type_one" ;
		conditionall = pro.conditionProcess(conditionall, tempc, tempdbcol);	  
	} 
	
	if (docitem != null && !docitem.equals("")) {
		tempc = docitem; 
		tempdbcol = "type_two" ;
		conditionall = pro.conditionProcess(conditionall, tempc, tempdbcol);	  
	} 
	
	
	//日期區間判斷(00:00:00.000-23:59:59.97)
	if ((applybegd != null && !applybegd.equals("")) && (applyendd != null && !applyendd.equals(""))){
		if ((conditionall != null) &&  (!conditionall.equals(""))){
			conditionall = conditionall + " AND (borrow_datetime BETWEEN '" + applybegd +" 00:00:00.000' AND '"+applyendd+" 23:59:59.97')";
		}else{
			conditionall = "(borrow_datetime BETWEEN '" + applybegd +" 00:00:00.000' AND '"+ applyendd+" 23:59:59.97')";
		}
	}
	if ((procbegd != null && !procbegd.equals("")) && (procendd != null && !procendd.equals(""))){
		if ((conditionall != null) &&  (!conditionall.equals(""))){
			conditionall = conditionall + " AND (progress_datetime BETWEEN '" + procbegd + " 00:00:00.000' AND '"+procendd+" 23:59:59.97')";
		}else{
			conditionall = "(progress_datetime BETWEEN '" + procbegd + " 00:00:00.000' AND '"+procendd+" 23:59:59.97')";
		}
	}
	if ((asignbegd != null && !asignbegd.equals("")) && (asignendd != null && !asignendd.equals(""))){
		if ((conditionall != null)  &&  (!conditionall.equals(""))){
			conditionall = conditionall + " AND (check_datetime BETWEEN '" + asignbegd +" 00:00:00.000' AND '"+asignendd+" 23:59:59.97')";
		}else{
			conditionall = "(check_datetime BETWEEN '" + asignbegd +" 00:00:00.000' AND '"+asignendd+" 23:59:59.97')";
		}
	}
	if (asignname != null && !asignname.equals("")) {
		tempc = asignname; 
		tempdbcol = "check_user_name" ;
		conditionall = pro.conditionProcess(conditionall, tempc, tempdbcol);	  
	} 	
	 
	
	

   }catch(Exception e){
	  
	   System.out.println("Exception_conpro :" + e.toString()); 
   }
   return conditionall;
   
   
}
String conditionProcess(String condition, String tempc , String tempdbname){
 String conditiontemp = "("+ tempdbname + " Like '%"+ tempc +"%')";	
 if(condition == null || condition == ""){
	 condition = conditiontemp;
 }else{
	 condition = condition +" AND "+ conditiontemp;
		 
 }
 System.out.println("condition area:" +  condition );
 return condition;
}



	
	


}
