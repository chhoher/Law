package com.myjs.doc.documents.Dao;

import java.io.Serializable;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.myjs.commons.DaoUtil;
import com.myjs.doc.documents.model.LDocBorrowHistory;
import com.myjs.doc.documents.model.LDocCashiercheck;
import com.myjs.doc.documents.model.LDocCashiercheckRela;
import com.myjs.doc.documents.model.LDocCentitlement;
import com.myjs.doc.documents.model.LDocCentitlementBuiltTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementCashierCheckRela;
import com.myjs.doc.documents.model.LDocCentitlementCoOwnedRela;
import com.myjs.doc.documents.model.LDocCentitlementCoOwnedTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementDebtContinueRela;
import com.myjs.doc.documents.model.LDocCentitlementDebtDocRela;
import com.myjs.doc.documents.model.LDocCentitlementDetailRela;
import com.myjs.doc.documents.model.LDocCentitlementDirtTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementDistributionRela;
import com.myjs.doc.documents.model.LDocCentitlementFileRela;
import com.myjs.doc.documents.model.LDocCentitlementHeirTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementLawTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementMortgageeTranscriptsRela;
import com.myjs.doc.documents.model.LDocCentitlementOtherRela;
import com.myjs.doc.documents.model.LDocCentitlementRela;
import com.myjs.doc.documents.model.LDocCentitlementSourceDoc;
import com.myjs.doc.documents.model.LDocCentitlementThingDebtRela;
import com.myjs.doc.documents.model.LDocCentitlementThingThirdRela;
import com.myjs.doc.documents.model.LDocCentitlementTranscriptsRela;
import com.myjs.doc.documents.model.LDocClaimsdocs;
import com.myjs.doc.documents.model.LDocClaimsdocsRela;
import com.myjs.doc.documents.model.LDocCourtDoc;
import com.myjs.doc.documents.model.LDocCourtDocBuiltTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocCashierCheckRela;
import com.myjs.doc.documents.model.LDocCourtDocCoOwnedRela;
import com.myjs.doc.documents.model.LDocCourtDocCoOwnedTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocDebtContinueRela;
import com.myjs.doc.documents.model.LDocCourtDocDebtDocRela;
import com.myjs.doc.documents.model.LDocCourtDocDetailRela;
import com.myjs.doc.documents.model.LDocCourtDocDirtTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocDistributionRela;
import com.myjs.doc.documents.model.LDocCourtDocFileRela;
import com.myjs.doc.documents.model.LDocCourtDocHeirTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocLawTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocMortgageeTranscriptsRela;
import com.myjs.doc.documents.model.LDocCourtDocOtherRela;
import com.myjs.doc.documents.model.LDocCourtDocRecoveryRela;
import com.myjs.doc.documents.model.LDocCourtDocRela;
import com.myjs.doc.documents.model.LDocCourtDocThingDebtRela;
import com.myjs.doc.documents.model.LDocCourtDocThingThirdRela;
import com.myjs.doc.documents.model.LDocCourtDocTranscriptsRela;
import com.myjs.doc.documents.model.LDocDebts;
import com.myjs.doc.documents.model.LDocDebtsRela;
import com.myjs.doc.documents.model.LDocFiledocs;
import com.myjs.doc.documents.model.LDocInfo;
import com.myjs.doc.documents.model.LDocOtherdocs;

public class docDaoImpl extends DaoUtil implements docDao{
	private JdbcTemplate jdbcTemplate;
	
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	private static final Logger log = LogManager.getLogger(docDaoImpl.class);
	
	public boolean save(LDocInfo transientInstance) throws Exception {
		log.debug("saving LDocInfo instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlement transientInstance) throws Exception {
		log.debug("saving LDocCentitlement instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCentitlementRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCentitlementCoOwnedTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementCoOwnedTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementMortgageeTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementMortgageeTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementLawTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementLawTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementHeirTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementHeirTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementDirtTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementDirtTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementBuiltTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementBuiltTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementDistributionRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementDistributionRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementThingThirdRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementThingThirdRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementThingDebtRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementThingDebtRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementCoOwnedRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementCoOwnedRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementDebtDocRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementDebtDocRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementDetailRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementDetailRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementFileRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementFileRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementDebtContinueRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementDebtContinueRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementCashierCheckRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementCashierCheckRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementOtherRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementOtherRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementSourceDoc transientInstance) throws Exception {
		log.debug("saving LDocCentitlementSourceDoc instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDoc transientInstance) throws Exception {
		log.debug("saving LDocCourtDoc instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDocRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementSourceDoc instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDocTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDocCoOwnedTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocCoOwnedTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocMortgageeTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocMortgageeTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocLawTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocLawTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocHeirTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocHeirTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDirtTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDirtTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocBuiltTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocBuiltTranscriptsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDistributionRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDistributionRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocThingThirdRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocThingThirdRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocThingDebtRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocThingDebtRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocCoOwnedRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocCoOwnedRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDebtDocRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDebtDocRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDetailRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDetailRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocFileRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocFileRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDebtContinueRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDebtContinueRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocCashierCheckRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocCashierCheckRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocRecoveryRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocRecoveryRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDocOtherRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocOtherRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCashiercheck transientInstance) throws Exception {
		log.debug("saving LDocCashiercheck instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCashiercheckRela transientInstance) throws Exception {
		log.debug("saving LDocCashiercheckRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocDebts transientInstance) throws Exception {
		log.debug("saving LDocDebts instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocDebtsRela transientInstance) throws Exception {
		log.debug("saving LDocDebtsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocClaimsdocs transientInstance) throws Exception {
		log.debug("saving LDocClaimsdocs instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocClaimsdocsRela transientInstance) throws Exception {
		log.debug("saving LDocClaimsdocsRela instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocFiledocs transientInstance) throws Exception {
		log.debug("saving LDocFiledocs instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocOtherdocs transientInstance) throws Exception {
		log.debug("saving LDocOtherdocs instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
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
	
	public List<LDocInfo> findDocByCaseId(String caseId) throws Exception{
		log.debug("findDocByCaseId start");
		StringBuffer queryString = new StringBuffer("exec SP_finddocbycaseId " + caseId);
		log.debug("queryString = {}", queryString);
//		List<Map<String, Object>> querylist=this.jdbcTemplate.queryForList(queryString.toString());
		
		@SuppressWarnings("unchecked")
		List<LDocInfo> ListDocInfo = jdbcTemplate.query(queryString.toString(), new LDocInfoMapper());
		return ListDocInfo;
	}
	
	@SuppressWarnings("rawtypes")
	class LDocInfoMapper implements RowMapper {
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocInfo LDocInfo = new LDocInfo();
			LDocInfo.setDebtName("");
			LDocInfo.setCaseId(rs.getInt("case_id"));
			LDocInfo.setApplyBorrow(rs.getString("apply_borrow") == null ? "" : rs.getString("apply_borrow"));
			LDocInfo.setEditDoc(rs.getString("edit_doc") == null ? "" : rs.getString("edit_doc"));
			LDocInfo.setDocStatus(rs.getString("doc_status") == null ? "" : rs.getString("doc_status"));
			LDocInfo.setBorrowInfo(rs.getString("borrow_info") == null ? "" : rs.getString("borrow_info"));
			LDocInfo.setProgress(rs.getString("progress") == null ? "" : rs.getString("progress"));
		    LDocInfo.setImgFiles(rs.getString("img_files") == null ? "" : rs.getString("img_files"));
		    LDocInfo.setBankDate(rs.getString("bank_date") == null ? "" : rs.getString("bank_date"));
		    LDocInfo.setReceivedDate(rs.getString("received_date") == null ? "" : rs.getString("received_date"));
		    LDocInfo.setDocCode(rs.getString("doc_code") == null ? "" : rs.getString("doc_code"));
		    LDocInfo.setDebtName(rs.getString("debt_name") == null ? "" : rs.getString("debt_name"));
		    LDocInfo.setRelaName(rs.getString("rela_name") == null ? "" : rs.getString("rela_name"));
		    LDocInfo.setTypeOne(rs.getString("type_one") == null ? "" : rs.getString("type_one"));
		    LDocInfo.setTypeTwo(rs.getString("type_two") == null ? "" : rs.getString("type_two"));
		    LDocInfo.setCourtYearCourt(rs.getString("court_year_court") == null ? "" : rs.getString("court_year_court"));
		    LDocInfo.setCourtYearYear(rs.getInt("court_year_year"));
		    LDocInfo.setCourtYearTxt(rs.getString("court_year_txt") == null ? "" : rs.getString("court_year_txt"));
		    LDocInfo.setCourtYearShare(rs.getString("court_year_share") == null ? "" : rs.getString("court_year_share"));
		    LDocInfo.setCourtYearCaseId(rs.getString("court_year_case_id") == null ? "" : rs.getString("court_year_case_id"));
		    LDocInfo.setOtherFile(rs.getString("other_file") == null ? "" : rs.getString("other_file"));
		    LDocInfo.setBankName(rs.getString("bank_name") == null ? "" : rs.getString("bank_name"));
		    LDocInfo.setOldBankName(rs.getString("old_bank_name") == null ? "" : rs.getString("old_bank_name"));
		    LDocInfo.setSourceDoc(rs.getString("source_doc") == null ? "" : rs.getString("source_doc"));
		    LDocInfo.setSourceDocInfo(rs.getString("source_doc_info") == null ? "" : rs.getString("source_doc_info"));
		    LDocInfo.setShareCaseId0(rs.getString("share_case_id_0") == null ? "" : rs.getString("share_case_id_0"));
		    LDocInfo.setSendDate(rs.getString("send_date") == null ? "" : rs.getString("send_date"));
		    LDocInfo.setNewSendDate(rs.getString("new_send_date") == null ? "" : rs.getString("new_send_date"));
		    LDocInfo.setRemark(rs.getString("remark") == null ? "" : rs.getString("remark"));
		    LDocInfo.setShadow(rs.getString("shadow") == null ? "" : rs.getString("shadow"));
		    LDocInfo.setModifyUserName(rs.getString("modify_user_name") == null ? "" : rs.getString("modify_user_name"));
		    LDocInfo.setCashierCheckStartDate(rs.getString("cashier_check_start_date") == null ? "" : rs.getString("cashier_check_start_date"));
		    LDocInfo.setCashierCheckAmount(rs.getInt("cashier_check_amount"));
		    LDocInfo.setRuledDate(rs.getString("ruled_date") == null ? "" : rs.getString("ruled_date"));
		    LDocInfo.setRuledAmount(rs.getInt("ruled_amount"));
		    LDocInfo.setApplyConfirmationDate(rs.getString("apply_confirmation_date") == null ? "" : rs.getString("apply_confirmation_date"));
		    LDocInfo.setReceivedConfirmationDate(rs.getString("received_confirmation_date") == null ? "" : rs.getString("received_confirmation_date"));
		    LDocInfo.setFailureDate(rs.getString("failure_date") == null ? "" : rs.getString("failure_date"));
		    LDocInfo.setThirdName(rs.getString("third_name") == null ? "" : rs.getString("third_name"));
		    LDocInfo.setThirdAddress(rs.getString("third_address") == null ? "" : rs.getString("third_address"));
		    LDocInfo.setDistributionAmount(rs.getInt("distribution_amount"));
		    LDocInfo.setApprovedDelayDate(rs.getString("approved_delay_date") == null ? "" : rs.getString("approved_delay_date"));
		    LDocInfo.setDelayEndDate(rs.getString("delay_end_date") == null ? "" : rs.getString("delay_end_date"));
		    LDocInfo.setSectorDate(rs.getString("sector_date") == null ? "" : rs.getString("sector_date"));
		    LDocInfo.setMeasureDate(rs.getString("measure_date") == null ? "" : rs.getString("measure_date"));
		    LDocInfo.setValuationDate(rs.getString("valuation_date") == null ? "" : rs.getString("valuation_date"));
		    LDocInfo.setRebirthDate(rs.getString("rebirth_date") == null ? "" : rs.getString("rebirth_date"));
		    LDocInfo.setSurveyDate(rs.getString("survey_date") == null ? "" : rs.getString("survey_date"));
		    LDocInfo.setInquiryDate(rs.getString("inquiry_date") == null ? "" : rs.getString("inquiry_date"));
		    LDocInfo.setFirstSaleDate(rs.getString("first_sale_date") == null ? "" : rs.getString("first_sale_date"));
		    LDocInfo.setSecondSaleDate(rs.getString("second_sale_date") == null ? "" : rs.getString("second_sale_date"));
		    LDocInfo.setThirdSaleDate(rs.getString("third_sale_date") == null ? "" : rs.getString("third_sale_date"));
		    LDocInfo.setPostBuyDate(rs.getString("post_buy_date") == null ? "" : rs.getString("post_buy_date"));
		    LDocInfo.setPostEndDate(rs.getString("post_end_date") == null ? "" : rs.getString("post_end_date"));
		    LDocInfo.setReduceSaleDate(rs.getString("reduce_sale_date") == null ? "" : rs.getString("reduce_sale_date"));
		    LDocInfo.setDestoryDate(rs.getString("destory_date") == null ? "" : rs.getString("destory_date"));
		    LDocInfo.setRealDistributionDate(rs.getString("real_distribution_date") == null ? "" : rs.getString("real_distribution_date"));
		    LDocInfo.setEdit(rs.getString("edit") == null ? "" : rs.getString("edit"));
		    LDocInfo.setReport(rs.getString("report") == null ? "" : rs.getString("report"));
		    LDocInfo.setPay(rs.getString("pay") == null ? "" : rs.getString("pay"));
		    LDocInfo.setSendReport(rs.getString("send_report") == null ? "" : rs.getString("send_report"));
		    LDocInfo.setToCourtDate(rs.getString("to_court_date") == null ? "" : rs.getString("to_court_date"));
		    LDocInfo.setToCourtTime(rs.getString("to_court_time") == null ? "" : rs.getString("to_court_time"));
		    LDocInfo.setToCourtType(rs.getString("to_court_type") == null ? "" : rs.getString("to_court_type"));
		    LDocInfo.setToCourtNotice(rs.getString("to_court_notice") == null ? "" : rs.getString("to_court_notice"));
		    LDocInfo.setExecutionDate(rs.getString("execution_date") == null ? "" : rs.getString("execution_date"));
		    LDocInfo.setExecutionTime(rs.getString("execution_time") == null ? "" : rs.getString("execution_time"));
		    LDocInfo.setCashierCheckEndDate(rs.getString("cashier_check_end_date") == null ? "" : rs.getString("cashier_check_end_date"));
		    LDocInfo.setCourtYearInfo(rs.getString("court_year_info") == null ? "" : rs.getString("court_year_info"));
		    LDocInfo.setDebtsDate(rs.getString("debts_date") == null ? "" : rs.getString("debts_date"));
		    LDocInfo.setClaimsdocQuota(rs.getString("claimsdoc_quota") == null ? "" : rs.getString("claimsdoc_quota"));
		    LDocInfo.setClaimsDocInterestRate(rs.getString("claims_doc_interest_rate") == null ? "" : rs.getString("claims_doc_interest_rate"));
			return LDocInfo;

		}
	}
}
