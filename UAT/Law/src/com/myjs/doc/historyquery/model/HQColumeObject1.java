package com.myjs.doc.historyquery.model;

import javax.persistence.Entity;

import java.util.Date;

//import java.util.ArrayList;
//import java.util.List;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.google.gson.JsonObject;

@Entity
@Table(name = "L_DOC_BORROW_HISTORY", schema = "dbo", catalog = "Legal")
public class HQColumeObject1 implements java.io.Serializable  {
	
	private static final long serialVersionUID = 906044964531133143L;
		
	private String  bankname;
	private String  prodname;
	private String  caseId;
	private String  name;
	private String  id;
	private String  docno;
	private String  doctype;
	private String  docitem;
	private String  docstatus;
	private String  courtYearInfo;
	private String  sourceDocInfo;
	private String  borrowReason;
	private String  lawcode;
	private String  borrowDate;
	private String  borrowUser;
	private String  procdate;
	private String  procname;
	private String  checkDate;
	private String  checkUser;
	private String  backDate;
	private String  backUser;
	private String  lastproctime;
	private String  lastprocname;
	private String  correct;
	private String  department;
	private String  employee_tel;
	



	public HQColumeObject1() {
		// TODO Auto-generated constructor stub
	}



	public HQColumeObject1 (String caseId, String name, String id, String docno, String receivedate,
			String receivename, String applydate, String applyname, String procdate, String procname, String asigndate,
			String asignname, String applyrsn, String apptcom, String docstatus, String docitem, String doctype,
			String prodtype, String returndate, String returnname, String lastproctime, String lastprocname,
			String lawcaseId, String employee_tel, String originalprove, String correct, String lawno, String department) throws Exception{
		
		
		this.bankname = apptcom ;
		this.prodname = prodtype ;
		this.caseId = caseId;
		this.name = name;
		this.id = id;
		this.docno = docno;
		this.doctype = doctype;
		this.docitem = docitem;
		this.docstatus = docstatus;
		this.courtYearInfo = lawcaseId;
		this.sourceDocInfo = originalprove;
		this.borrowReason = applyrsn;
		this.lawcode = lawno;
		this.borrowDate = applydate;
		this.borrowUser = applyname;
		this.procdate = procdate;
		this.procname = procname;
		this.checkDate = asigndate;
		this.checkUser = asignname;
		this.backDate = returndate;
		this.backUser = returnname;
		this.lastproctime = lastproctime;
		this.lastprocname = lastprocname;
		this.correct = correct;
		this.department = department;
		this.employee_tel = employee_tel;
		
	}








	@Column(name = "case_id", unique = true, nullable = false, length = 10)
	public String getCaseId() {
		return caseId;
	}

	public void setCaseId(String caseId) {
		this.caseId = caseId;
	}
	@Column(name = "bank_name",  nullable = false,  length = 10)
	public String getBankname() {
		return bankname;
	}

	public void setBankname(String bankname) {
		this.bankname = bankname;
	}

	
	
	@Column(name = "prod_name",  nullable = false,  length = 10)
	public String getProdname() {
		return prodname;
	}



	public void setProdname(String prodname) {
		this.prodname = prodname;
	}



	



	



	
	
	@Column(name = "debt_name",  nullable = false,  length = 10)
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "ID",  nullable = false,  length = 10)
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}

	@Column(name = "doc_code",  nullable = false,  length = 50)
	public String getDocno() {
		return docno;
	}

	public void setDocno(String docno) {
		this.docno = docno;
	}

	@Column(name = "type_one",  nullable = false,  length = 10)
	public String getDoctype() {
		return doctype;
	}


	public void setDoctype(String doctype) {
		this.doctype = doctype;
	}

	@Column(name = "type_one",  nullable = false,  length = 10)
	public String getDocitem() {
		return docitem;
	}


	public void setDocitem(String docitem) {
		this.docitem = docitem;
	}

	@Column(name = "doc_status",  nullable = false,  length = 10)
	public String getDocstatus() {
		return docstatus;
	}

	public void setDocstatus(String docstatus) {
		this.docstatus = docstatus;
	}
	
	@Column(name = "court_year_info",  nullable = false,  length = 50)
	public String getCourtYearInfo() {
		return courtYearInfo;
	}

	public void setCourtYearInfo(String courtYearInfo) {
		this.courtYearInfo = courtYearInfo;
	}
	
	@Column(name = "source_doc_info",  nullable = false,  length = 10)
	public String getSourceDocInfo() {
		return sourceDocInfo;
	}

	public void setSourceDocInfo(String sourceDocInfo) {
		this.sourceDocInfo = sourceDocInfo;
	}
	
	@Column(name = "borrow_reason",  nullable = false,  length = 10)
	public String getBorrowReason() {
		return borrowReason;
	}

	public void setBorrowReason(String borrowReason) {
		this.borrowReason = borrowReason;
	}

	@Column(name = "law_code",  nullable = false,  length = 10)
	public String getLawcode() {
		return lawcode;
	}
	public void setLawcode(String lawcode) {
		this.lawcode = lawcode;
	}

	@Column(name = "borrow_datetime",  nullable = false,  length = 25)
	public String getBorrowDate() {
		return borrowDate;
	}

	public void setBorrowDate(String borrowDate) {
		this.borrowDate = borrowDate;
	}


	@Column(name = "borrow_user_name",  nullable = false,  length = 10)
	public String getBorrowUser() {
		return borrowUser;
	}
	public void setBorrowUser(String borrowUser) {
		this.borrowUser = borrowUser;
	}
	
	@Column(name = "progress_datetime",  nullable = false,  length = 25)
	public String getProcdate() {
		return procdate;
	}
	public void setProcdate(String procdate) {
		this.procdate = procdate;
	}

	@Column(name = "progress_user_name",  nullable = false,  length = 10)
	public String getProcname() {
		return procname;
	}
	public void setProcname(String procname) {
		this.procname = procname;
	}

	@Column(name = "check_datetime",  nullable = false,  length = 25)
	public String getCheckDate() {
		return checkDate;
	}
	public void setCheckDate(String checkDate) {
		this.checkDate = checkDate;
	}

	@Column(name = "check_user_name",  nullable = false,  length = 10)
	public void setCheckUser(String checkUser) {
		this.checkUser = checkUser;
	}
	public String getCheckUser() {
		return checkUser;
	}
	


	@Column(name = "back_datetime",  nullable = false,  length = 25)
	public void setBackDate(String backDate) {
		this.backDate = backDate;
	}
	public String getBackDate() {
		return backDate;
	}

	@Column(name = "back_user_name",  nullable = false,  length = 10)
	public void setBackUser(String backUser) {
		this.backUser = backUser;
	}
	public String getBackUser() {
		return backUser;
	}



	@Column(name = "final_progress_datetime",  nullable = false,  length = 25)
	public String getLastproctime() {
		return lastproctime;
	}
	public void setLastproctime(String lastproctime) {
		this.lastproctime = lastproctime;
	}
	
	@Column(name = "final_progress_user_name",  nullable = false,  length = 10)
	public String getLastprocname() {
		return lastprocname;
	}
	public void setLastprocname(String lastprocname) {
		this.lastprocname = lastprocname;
	}

	@Column(name = "edit",  nullable = false,  length = 10)
	public String getCorrect() {
		return correct;
	}
	public void setCorrect(String correct) {
		this.correct = correct;
	}

	@Column(name = "business",  nullable = false,  length = 10)
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}

	@Column(name = "business_account",  nullable = false,  length = 10)
	public String getEmployee_tel() {
		return employee_tel;
	}
	public void setEmployee_tel(String employee_tel) {
		this.employee_tel = employee_tel;
	}




	


	
	
	}

	

