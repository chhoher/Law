package com.myjs.doc.documents.Dao;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;

import com.myjs.commons.DaoUtil;
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
	
	public List<LDocClaimsdocs> findDocByCaseId(String caseId) throws Exception{
		log.debug("findDocByCaseId start");
		StringBuffer queryString = new StringBuffer("SELECT '' AS apply_borrow,'' AS edit_doc,LSVDS.variable_name AS doc_status,");
		queryString.append(" '' AS borrow_info,progress,'' AS img_files,bank_date,received_date,'' AS doc_code,'' AS debt_name,");
		queryString.append(" '' AS rela_name,LSVTO.variable_name AS type_one,LSVTT.variable_name AS type_two,");
		queryString.append(" LSVCY.variable_name AS court_year_court,court_year_year,court_year_txt,court_year_share,");
		queryString.append(" court_year_case_id,'' AS other_file,LSVBN.variable_name  AS bank_name,LSVOBN.variable_name AS old_bank_name,");
		queryString.append(" '' AS source_doc,'' AS source_doc_info,share_case_id_0,'' AS send_date,'' AS new_send_date,");
		queryString.append(" remark,shadow,'' AS modify_user_name,'' AS cashier_check_start_date,'' AS cashier_check_amount,ruled_date,");
		queryString.append(" ruled_amount,apply_confirmation_date,received_confirmation_date,failure_date,'' AS third_name,");
		queryString.append(" '' AS third_address,distribution_amount,approved_delay_date,delay_end_date,sector_date,");
		queryString.append(" measure_date,valuation_date,rebirth_date,survey_date,inquiry_date,first_sale_date,second_sale_date,");
		queryString.append(" third_sale_date,post_buy_date,post_end_date,reduce_sale_date,destory_date,real_distribution_date,");
		queryString.append(" edit,'' AS report,'' AS pay,'' AS send_report,to_court_date,to_court_time,to_court_type,to_court_notice,");
		queryString.append(" execution_date,execution_date,'' AS cashier_check_end_date,'' AS court_year_info,'' AS debts_date,");
		queryString.append(" '' AS claimsdoc_quota,'' AS claims_doc_interest_rate");
		queryString.append(" FROM L_DOC_COURT_DOC LDCD");
		queryString.append(" LEFT JOIN L_SYS_VARIABLE LSVDS ON LDCD.doc_status = LSVDS.variable_id");
		queryString.append(" LEFT JOIN L_SYS_VARIABLE LSVTO ON LDCD.type_one = LSVTO.variable_id");
		queryString.append(" LEFT JOIN L_SYS_VARIABLE LSVTT ON LDCD.type_two = LSVTT.variable_id");
		queryString.append(" LEFT JOIN L_SYS_VARIABLE LSVCY ON LDCD.court_year_court = LSVCY.variable_id");
		queryString.append(" LEFT JOIN L_SYS_VARIABLE LSVBN ON LDCD.bank_name = LSVBN.variable_id");
		queryString.append(" LEFT JOIN L_SYS_VARIABLE LSVOBN ON LDCD.old_bank_name = LSVOBN.variable_id");
		queryString.append(" WHERE case_id = " + caseId);
		log.debug("queryString = {}", queryString);
		List<Map<String, Object>> querylist=this.jdbcTemplate.queryForList(queryString.toString());
		
		int case_id = Integer.parseInt(caseId);
		
		List<LDocClaimsdocs> ListDocClaimsDoc = new ArrayList<LDocClaimsdocs>();
		for (Map<?, ?> map : querylist) {
			LDocClaimsdocs LDocClaimsdocs = new LDocClaimsdocs();
			LDocClaimsdocs.setCaseId(case_id);
			LDocClaimsdocs.setDocStatus((String)map.get("doc_status"));
//			LDocClaimsdocs.setBrow
			LDocClaimsdocs.setBankDate((Date)map.get("bank_date"));
			LDocClaimsdocs.setReceivedDate((Date)map.get("received_date"));
			ListDocClaimsDoc.add(LDocClaimsdocs);
		}
		return ListDocClaimsDoc;
	}
}
