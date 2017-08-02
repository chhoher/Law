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
	
	public List<LDocBorrowList> findBorrowDoc() throws Exception{
		log.debug("findBorrowDoc start");
		StringBuffer queryString = new StringBuffer("SELECT borrow_doc_id, borrow_user_name, borrow_user_id,");
		queryString.append(" borrow_datetime, LDO.case_id, LDO.debt_name, LDO.debt_ID as ID, doc_code, borrow_status,");
		queryString.append(" LDO.borrow_reason, law_code, LDBL.modify_datetime, LDBL.modify_user_id,");
		queryString.append(" LDBL.modify_user_name, LDO.borrow_info, doc_id, LSVTO.variable_name as type_one,");
		queryString.append(" LSVTT.variable_name as type_two, LDO.bank_name, LDO.g_prod_name AS prod_name, NULL AS court_year_info,");
		queryString.append(" NULL AS source_doc_info, LSVDS.variable_name as doc_status, NULL AS O_C, NULL AS share_case_id");
		queryString.append(" FROM L_DOC_BORROW_LIST LDBL");
		queryString.append(" LEFT JOIN L_DOC_OTHERDOCS LDO ON LDBL.doc_id = LDO.otherdocs_id");
		queryString.append(" LEFT JOIN L_SYS_VARIABLE LSVTO ON LSVTO.variable_id = LDO.type_one");
		queryString.append(" LEFT JOIN L_SYS_VARIABLE LSVTT ON LSVTT.variable_id = LDO.type_two");
		queryString.append(" LEFT JOIN L_SYS_VARIABLE LSVDS ON LSVDS.variable_id = LDO.doc_status");
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
			LDocBorrow.setModifyDatetime(rs.getDate("modify_datetime"));
			LDocBorrow.setModifyUserId(rs.getString("modify_user_id") == null ? "" : rs.getString("modify_user_id"));
			LDocBorrow.setModifyUserName(rs.getString("modify_user_name") == null ? "" : rs.getString("modify_user_name"));
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
