package com.myjs.doc.borrow.Dao;

import java.io.Serializable;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.myjs.commons.DaoUtil;
import com.myjs.doc.borrow.model.LDocBorrowHistory;
import com.myjs.doc.borrow.model.LDocBorrowList;

public class docBorrowDaoImpl extends DaoUtil implements docBorrowDao{
	
	private static final Logger log = LogManager.getLogger(docBorrowDaoImpl.class);
	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public boolean save(LDocBorrowHistory transientInstance) throws Exception {
		log.debug("saving LDocBorrowHistory instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocBorrowList transientInstance) throws Exception {
		log.debug("saving LDocBorrowList instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public List<LDocBorrowList> findBorrowDoc(String caseId, String bankName, 
			String isInStore, String debtName, String borrowReason, String docStatus, 	String ID, 
			String borrowStartDate, String borrowEndDate, String docCode, String borrowUserName) throws Exception{
		
		log.debug("findBorrowDoc start");
		String pcaseId = (caseId != null && !caseId.equals("")) ? "'" + caseId + "'":"null", 
				pbankName = (bankName != null && !bankName.equals("")) ? "'" + bankName + "'":"null",
				pisInStore = (isInStore != null && !isInStore.equals("")) ? "'" + isInStore + "'":"null",
				pdebtName = (debtName != null && !debtName.equals("")) ? "'" + debtName + "'":"null",
				pborrowReason = (borrowReason != null && !borrowReason.equals("")) ? "'" + borrowReason + "'":"null",
				pdocStatus = (docStatus != null && !docStatus.equals("")) ? "'" + docStatus + "'":"null",
				pID = (ID != null && !ID.equals("")) ? "'" + ID + "'":"null",
				pborrowStartDate = (borrowStartDate != null && !borrowStartDate.equals("")) ? "'" + borrowStartDate + "'":"null",
				pborrowEndDate = (borrowEndDate != null && !borrowEndDate.equals("")) ? "'" + borrowEndDate + "'":"null",
				pdocCode = (docCode != null && !docCode.equals("")) ? "'" + docCode + "'":"null",
				pborrowUserName = (borrowUserName != null && !borrowUserName.equals("")) ? "'" + borrowUserName + "'":"null";
		
		StringBuffer queryString = new StringBuffer("exec SP_findborrowdocs 0," + pcaseId + "," + pbankName + "," + pisInStore + "," + pdebtName + "," + 
				pborrowReason + "," + pdocStatus + "," + pID + "," + pborrowStartDate + "," + pborrowEndDate + "," + pdocCode + "," + pborrowUserName);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocBorrowList> LDocBorrowList = jdbcTemplate.query(queryString.toString(), new LDocBorrowMapper());
		return LDocBorrowList;
	}
	
	@SuppressWarnings("rawtypes")
	class LDocBorrowMapper implements RowMapper {
		public Object mapRow(ResultSet rs, int arg) throws SQLException{
			LDocBorrowList LDocBorrow = new LDocBorrowList();
			LDocBorrow.setBorrowDocId(rs.getString("borrow_doc_id") == null ? "" : rs.getString("borrow_doc_id"));
			LDocBorrow.setBorrowUserId(rs.getString("borrow_user_id") == null ? "" : rs.getString("borrow_user_id"));
			LDocBorrow.setBorrowUserName(rs.getString("borrow_user_name") == null ? "" : rs.getString("borrow_user_name"));
			LDocBorrow.setBorrowDatetime(rs.getDate("borrow_datetime"));
			LDocBorrow.setCaseId(rs.getInt("case_id"));
			LDocBorrow.setDebtName(rs.getString("debt_name") == null ? "" : rs.getString("debt_name"));
			LDocBorrow.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocBorrow.setDocCode(rs.getString("doc_code") == null ? "" : rs.getString("doc_code"));
			LDocBorrow.setBorrowStatus(rs.getString("borrow_status") == null ? "" : rs.getString("borrow_status"));
			LDocBorrow.setBorrowReason(rs.getString("borrow_reason") == null ? "" : rs.getString("borrow_reason"));
			LDocBorrow.setLawCode(rs.getInt("law_code"));
			//LDocBorrow.setModifyDatetime(rs.getDate("modify_datetime"));
			//LDocBorrow.setModifyUserId(rs.getString("modify_user_id") == null ? "" : rs.getString("modify_user_id"));
			//LDocBorrow.setModifyUserName(rs.getString("modify_user_name") == null ? "" : rs.getString("modify_user_name"));
			LDocBorrow.setDisProgressDatetime(rs.getString("progress_datetime") == null ? "" : rs.getString("progress_datetime"));
			LDocBorrow.setProgressUserId(rs.getString("progress_user_id") == null ? "" : rs.getString("progress_user_id"));
			LDocBorrow.setProgressUserName(rs.getString("progress_user_name") == null ? "" : rs.getString("progress_user_name"));
			LDocBorrow.setBorrowInfo(rs.getString("borrow_info") == null ? "" : rs.getString("borrow_info"));
			LDocBorrow.setDocId(rs.getInt("doc_id"));
			LDocBorrow.setTypeOne(rs.getString("type_one") == null ? "" : rs.getString("type_one"));
			LDocBorrow.setTypeTwo(rs.getString("type_two") == null ? "" : rs.getString("type_two"));
			LDocBorrow.setBankName(rs.getString("bank_name") == null ? "" : rs.getString("bank_name"));
			LDocBorrow.setProdName(rs.getString("prod_name") == null ? "" : rs.getString("prod_name"));
			LDocBorrow.setCourtYearInfo(rs.getString("court_year_info") == null ? "" : rs.getString("court_year_info"));
			LDocBorrow.setSourceDocInfo(rs.getString("source_doc_info") == null ? "" : rs.getString("source_doc_info"));
			LDocBorrow.setO_C(rs.getString("O_C") == null ? "" : rs.getString("O_C"));
			LDocBorrow.setDocStatus(rs.getString("doc_status") == null ? "" : rs.getString("doc_status"));
			LDocBorrow.setShareCaseId(rs.getString("share_case_id") == null ? "" : rs.getString("share_case_id"));

			return LDocBorrow;
		}
	}
}
