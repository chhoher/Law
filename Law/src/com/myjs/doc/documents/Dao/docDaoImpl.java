package com.myjs.doc.documents.Dao;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.commons.DaoUtil;
import com.myjs.doc.documents.model.LDocCashiercheck;
import com.myjs.doc.documents.model.LDocCashiercheckRela;
import com.myjs.doc.documents.model.LDocCentitlement;
import com.myjs.doc.documents.model.LDocCentitlementRela;
import com.myjs.doc.documents.model.LDocCentitlementSourceDoc;
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
import com.myjs.doc.documents.model.LDocImgfileTemp;
import com.myjs.doc.documents.model.LDocInfo;
import com.myjs.doc.documents.model.LDocOtherdocs;
import com.myjs.sys.variable.model.LSysVariable;

public class docDaoImpl extends DaoUtil implements docDao{
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

	public void setSMARTjdbcTemplate(JdbcTemplate sMARTjdbcTemplate) {
		SMARTjdbcTemplate = sMARTjdbcTemplate;
	}

	private static final Logger log = LogManager.getLogger(docDaoImpl.class);
	
	public boolean save(LDocInfo transientInstance) throws Exception {
		log.debug("saving LDocInfo instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlement transientInstance) throws Exception {
		log.debug("saving LDocCentitlement instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCentitlementRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCentitlementSourceDoc transientInstance) throws Exception {
		log.debug("saving LDocCentitlementSourceDoc instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDoc transientInstance) throws Exception {
		log.debug("saving LDocCourtDoc instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
			flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDocRela transientInstance) throws Exception {
		log.debug("saving LDocCentitlementSourceDoc instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDocTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocTranscriptsRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDocCoOwnedTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocCoOwnedTranscriptsRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocMortgageeTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocMortgageeTranscriptsRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocLawTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocLawTranscriptsRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocHeirTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocHeirTranscriptsRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDirtTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDirtTranscriptsRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocBuiltTranscriptsRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocBuiltTranscriptsRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDistributionRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDistributionRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocThingThirdRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocThingThirdRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocThingDebtRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocThingDebtRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocCoOwnedRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocCoOwnedRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDebtDocRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDebtDocRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDetailRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDetailRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocFileRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocFileRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocDebtContinueRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocDebtContinueRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocCashierCheckRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocCashierCheckRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocCourtDocRecoveryRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocRecoveryRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCourtDocOtherRela transientInstance) throws Exception {
		log.debug("saving LDocCourtDocOtherRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCashiercheck transientInstance) throws Exception {
		log.debug("saving LDocCashiercheck instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
			flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocCashiercheckRela transientInstance) throws Exception {
		log.debug("saving LDocCashiercheckRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
			flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocDebts transientInstance) throws Exception {
		log.debug("saving LDocDebts instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
			flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocDebtsRela transientInstance) throws Exception {
		log.debug("saving LDocDebtsRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
			flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocClaimsdocs transientInstance) throws Exception {
		log.debug("saving LDocClaimsdocs instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
			flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocClaimsdocsRela transientInstance) throws Exception {
		log.debug("saving LDocClaimsdocsRela instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
		flag=true;
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LDocFiledocs transientInstance) throws Exception {
		log.debug("saving LDocFiledocs instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
			flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocOtherdocs transientInstance) throws Exception {
		log.debug("saving LDocOtherdocs instance");
		boolean flag = false;
		super.getHibernateTemplate().saveOrUpdate(transientInstance);
			flag=true;
		log.debug("save successful");
		return flag;
	}

	public boolean save(LDocImgfileTemp transientInstance) throws Exception {
		log.debug("saving LDocImgfileTemp instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean deleteById(String uuid) throws Exception {
		log.debug("deleteById LDocImgfileTemp instance");
		StringBuffer deleteString = new StringBuffer("DELETE FROM L_DOC_IMGFILE_TEMP WHERE img_temp_id = '" + uuid + "'");
		log.debug("deleteString = {}", deleteString);
		jdbcTemplate.execute(deleteString.toString());
		boolean flag = true;
		log.debug("delete successful");
		return flag;
	}
	
	public List<LSysVariable> findAllBankName() throws Exception{
		log.debug("findAllBankName start");
		StringBuffer queryString = new StringBuffer("SELECT Bank_ID,Bank_name from Bank");
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LSysVariable> ListLSysVariable = SMARTjdbcTemplate.query(queryString.toString(), new LSysVariableMapper());
		return ListLSysVariable;
	}
	
	public List<LDocInfo> findDocByCaseId(String caseId) throws Exception{
		log.debug("findDocByCaseId start");
		StringBuffer queryString = new StringBuffer("exec SP_finddocbycaseId " + caseId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocInfo> ListDocInfo = jdbcTemplate.query(queryString.toString(), new LDocInfoMapper());
		return ListDocInfo;
	}
	
	public List<LDocInfo> findSumDoc() throws Exception{
		log.debug("findSumDoc start");
		StringBuffer queryString = new StringBuffer("exec SP_findsumdocs " + 0 + "," + 0);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocInfo> ListDocInfo = jdbcTemplate.query(queryString.toString(), new LDocInfoSumMapper());
		return ListDocInfo;
	}
	
	public boolean saveToUpdateDocStatus(String DocTableName, String updateStatus, String doc_id) throws Exception{
		log.debug("saveToUpdateDocStatus start");
		boolean flag = false;
		String docsIdName = "";
		if(DocTableName.equals("L_DOC_CENTITLEMENT")){
			docsIdName = "centitlement_id";
		}else if(DocTableName.equals("L_DOC_COURT_DOC")){
			docsIdName = "court_doc_id";
		}else if(DocTableName.equals("L_DOC_CASHIERCHECK")){
			docsIdName = "cashiercheck_id";
		}else if(DocTableName.equals("L_DOC_DEBTS")){
			docsIdName = "debts_id";
		}else if(DocTableName.equals("L_DOC_CLAIMSDOC")){
			docsIdName = "claimsdocs_id";
		}else if(DocTableName.equals("L_DOC_FILEDOCS")){
			docsIdName = "filedocs_id";
		}else if(DocTableName.equals("L_DOC_OTHERDOCS")){
			docsIdName = "otherdocs_id";
		}
		StringBuffer updateString=new StringBuffer("UPDATE " + DocTableName);
		updateString.append(" SET doc_status = " + updateStatus + " WHERE " + docsIdName + " IN (" + doc_id + ")");
		log.debug("updateString = {}",updateString);
		this.jdbcTemplate.execute(updateString.toString());
		
		flag = true;
		return flag;
	}
	

	public List<LCekSignedCaseInfo> findCaseByDocInfo(String caseId, String debtorName, 
			String debtorId, String docNo, String legalCaseId, boolean isCheck) throws Exception{
		log.debug("findCaseByDocInfo start");
		boolean hasInputValue = false;
		
		String tableName = "";
		String tableIdName = "";
		String docCaseId = "";
		String fromLawCaseId = "";
		if(docNo != null && !docNo.equals("")){
			if(docNo.indexOf("A") == 0){
				tableName = "L_DOC_CENTITLEMENT";
				tableIdName = "centitlement_id";
			}else if(docNo.indexOf("B") == 0){
				tableName = "L_DOC_COURT_DOC";
				tableIdName = "court_doc_id";
			}else if(docNo.indexOf("C") == 0){
				tableName = "L_DOC_CASHIERCHECK";
				tableIdName = "cashiercheck_id";
			}else if(docNo.indexOf("D") == 0){
				tableName = "L_DOC_DEBTS";
				tableIdName = "debts_id";
			}else if(docNo.indexOf("E") == 0){
				tableName = "L_DOC_CLAIMSDOC";
				tableIdName = "claimsdocs_id";
			}else if(docNo.indexOf("F") == 0){
				tableName = "L_DOC_FILEDOCS";
				tableIdName = "filedocs_id";
			}else if(docNo.indexOf("G") == 0){
				tableName = "L_DOC_OTHERDOCS";
				tableIdName = "otherdocs_id";
			}
		}else{
			if(legalCaseId != null && !legalCaseId.equals("")){
				StringBuffer queryDocString = new StringBuffer("SELECT case_id FROM L_DOC_CENTITLEMENT where court_year_case_id = " + legalCaseId);
				queryDocString.append(" UNION SELECT case_id FROM L_DOC_COURT_DOC where court_year_case_id = " + legalCaseId);
				
				List<Map<String, Object>> docObject = this.jdbcTemplate.queryForList(queryDocString.toString());
				if(docObject.size() > 0){
					for(Map<String, Object> doc:docObject){
						fromLawCaseId += "'" + doc.get("case_id") + "',";
					}
					fromLawCaseId = fromLawCaseId.substring(0, fromLawCaseId.length()-1);
					log.debug("docObject fromLawCaseId = {}", fromLawCaseId);
				}
			}
		}
		
		if(tableName != null && !tableName.equals("")){
			StringBuffer queryDocString = new StringBuffer("SELECT case_id FROM " + tableName + " where " + tableIdName + " = " + docNo.substring(1));
			
			List<Map<String, Object>> docObject = this.jdbcTemplate.queryForList(queryDocString.toString());
			if(docObject.size() > 0){
				docCaseId = docObject.get(0).get("case_id") + "";
				log.debug("docObject caseId = {}", docCaseId);
			}
		}
		

		if(docCaseId != null && !docCaseId.equals("")){
			
			StringBuffer queryString = new StringBuffer("SELECT TOP 100 VSC.Bank_alias, VSC.Prod_Name,");
			queryString.append(" VSC.Case_ID, VSR.Name, VSR.ID, VSC.PriDebt_amount, VSC.ctCase_d,");
			queryString.append(" VSC.O_or_C, VSC.Bank_ID, VSC.G_ID, VSC.G_name");
			queryString.append(" FROM V_SMART_RELAINFO VSR");
			queryString.append(" LEFT JOIN V_SMART_CASEINFO VSC ON VSR.Case_ID = VSC.Case_ID");
			queryString.append(" WHERE VSR.Rela_kind = '本人'");
			queryString.append(" AND VSC.Case_ID = '"+docCaseId+"'");
			if(caseId != null && !caseId.equals("")){
				queryString.append(" AND VSC.Case_ID = '"+caseId+"'");
				hasInputValue = true;
			}
			if(legalCaseId != null && !legalCaseId.equals("")){
				if(fromLawCaseId != null && !fromLawCaseId.equals("")){
					queryString.append(" AND VSC.Case_ID in (" + fromLawCaseId + ")");
					hasInputValue = true;
				}
			}
			if(debtorName != null && !debtorName.equals("")){
				queryString.append(" AND VSR.Name like '%"+debtorName+"%'");
				hasInputValue = true;
			}
			if(debtorId != null && !debtorId.equals("")){
				queryString.append(" AND VSR.ID = '"+debtorId+"'");
				hasInputValue = true;
			}
			
			if(isCheck){// 查核機制
				queryString.append(" AND  VSC.O_or_C='O'");
			}else if(!hasInputValue){
				queryString.append(" AND  VSC.O_or_C='O'");
			}
			log.debug("queryString = {}", queryString);
			
			List<Map<String, Object>> querylist=this.jdbcTemplate.queryForList(queryString.toString());
	
			List<LCekSignedCaseInfo> MapLCekSignedCaseInfo = new ArrayList<LCekSignedCaseInfo>();
			for (Map<?, ?> map : querylist) {
				LCekSignedCaseInfo LCekSignedCaseInfo = new LCekSignedCaseInfo();
				LCekSignedCaseInfo.setBank_alias((String) map.get("Bank_alias"));
				LCekSignedCaseInfo.setProd_Name((String) map.get("Prod_Name"));
				LCekSignedCaseInfo.setCase_ID((int) map.get("Case_ID"));
				LCekSignedCaseInfo.setName((String) map.get("Name"));
				LCekSignedCaseInfo.setID((String) map.get("ID"));
				LCekSignedCaseInfo.setPriDebt_amount(((BigDecimal) map.get("PriDebt_amount")).intValue());
				LCekSignedCaseInfo.setCtCase_d((Date) map.get("ctCase_d"));
				LCekSignedCaseInfo.setO_or_C((String) map.get("O_or_C"));
				LCekSignedCaseInfo.setBank_ID((String) map.get("Bank_ID"));
				LCekSignedCaseInfo.setG_ID((int) map.get("G_ID"));
				LCekSignedCaseInfo.setG_name((String) map.get("G_name"));
				MapLCekSignedCaseInfo.add(LCekSignedCaseInfo);
			}
			log.debug("findCaseByDocInfo end");
			return MapLCekSignedCaseInfo;
		}else{
			if(fromLawCaseId != null && !fromLawCaseId.equals("")){
				StringBuffer queryString = new StringBuffer("SELECT TOP 100 VSC.Bank_alias, VSC.Prod_Name,");
				queryString.append(" VSC.Case_ID, VSR.Name, VSR.ID, VSC.PriDebt_amount, VSC.ctCase_d,");
				queryString.append(" VSC.O_or_C, VSC.Bank_ID, VSC.G_ID, VSC.G_name");
				queryString.append(" FROM V_SMART_RELAINFO VSR");
				queryString.append(" LEFT JOIN V_SMART_CASEINFO VSC ON VSR.Case_ID = VSC.Case_ID");
				queryString.append(" WHERE VSR.Rela_kind = '本人'");
				if(caseId != null && !caseId.equals("")){
					queryString.append(" AND VSC.Case_ID = '"+caseId+"'");
					hasInputValue = true;
				}
				if(legalCaseId != null && !legalCaseId.equals("")){
					if(fromLawCaseId != null && !fromLawCaseId.equals("")){
						queryString.append(" AND VSC.Case_ID in (" + fromLawCaseId + ")");
						hasInputValue = true;
					}
				}
				if(debtorName != null && !debtorName.equals("")){
					queryString.append(" AND VSR.Name like '%"+debtorName+"%'");
					hasInputValue = true;
				}
				if(debtorId != null && !debtorId.equals("")){
					queryString.append(" AND VSR.ID = '"+debtorId+"'");
					hasInputValue = true;
				}
				
				if(isCheck){// 查核機制
					queryString.append(" AND  VSC.O_or_C='O'");
				}else if(!hasInputValue){
					queryString.append(" AND  VSC.O_or_C='O'");
				}
				log.debug("queryString = {}", queryString);
				
				List<Map<String, Object>> querylist=this.jdbcTemplate.queryForList(queryString.toString());
		
				List<LCekSignedCaseInfo> MapLCekSignedCaseInfo = new ArrayList<LCekSignedCaseInfo>();
				for (Map<?, ?> map : querylist) {
					LCekSignedCaseInfo LCekSignedCaseInfo = new LCekSignedCaseInfo();
					LCekSignedCaseInfo.setBank_alias((String) map.get("Bank_alias"));
					LCekSignedCaseInfo.setProd_Name((String) map.get("Prod_Name"));
					LCekSignedCaseInfo.setCase_ID((int) map.get("Case_ID"));
					LCekSignedCaseInfo.setName((String) map.get("Name"));
					LCekSignedCaseInfo.setID((String) map.get("ID"));
					LCekSignedCaseInfo.setPriDebt_amount(((BigDecimal) map.get("PriDebt_amount")).intValue());
					LCekSignedCaseInfo.setCtCase_d((Date) map.get("ctCase_d"));
					LCekSignedCaseInfo.setO_or_C((String) map.get("O_or_C"));
					LCekSignedCaseInfo.setBank_ID((String) map.get("Bank_ID"));
					LCekSignedCaseInfo.setG_ID((int) map.get("G_ID"));
					LCekSignedCaseInfo.setG_name((String) map.get("G_name"));
					MapLCekSignedCaseInfo.add(LCekSignedCaseInfo);
				}
				log.debug("findCaseByDocInfo end");
				return MapLCekSignedCaseInfo;
			}else{
				return null;
			}
		}
	}
	
	public LDocCentitlement findCenById(String docId) throws Exception{
		log.debug("findCenById start");
		LDocCentitlement query = null;
		String queryString = "from LDocCentitlement ldc where  ldc.centitlementId='" + docId + "'";
		log.debug("queryString = {}", queryString);
		List<?> LDocCentitlementList = super.getHibernateTemplate().find(queryString);
		if(LDocCentitlementList.size() != 0){
			query = (LDocCentitlement) LDocCentitlementList.get(0);
		}
		log.debug("findCenById end");
		return query;
	}
	
	public List<LDocCentitlementRela> findCenRelaById(String docId) throws Exception{
		log.debug("findCenRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_CENTITLEMENT_RELA where centitlement_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCentitlementRela> LDocCentitlementRela = jdbcTemplate.query(queryString.toString(), new LDocCentitlementRelaMapper());
		return LDocCentitlementRela;
	}
	
	public List<LDocCentitlementSourceDoc> findCenSourceDocById(String docId) throws Exception{
		log.debug("findCenSourceDocById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_CENTITLEMENT_SOURCE_DOC where centitlement_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCentitlementSourceDoc> LDocCentitlementSourceDoc = jdbcTemplate.query(queryString.toString(), new LDocCentitlementSourceDocMapper());
		return LDocCentitlementSourceDoc;
	}
	
	public LDocCourtDoc findCourtDocById(String docId) throws Exception{
		log.debug("findCourtDocById start");
		LDocCourtDoc query = null;
		String queryString = "from LDocCourtDoc ldc where  ldc.courtDocId='" + docId + "'";
		log.debug("queryString = {}", queryString);
		List<?> LDocCourtDocList = super.getHibernateTemplate().find(queryString);
		if(LDocCourtDocList.size() != 0){
			query = (LDocCourtDoc) LDocCourtDocList.get(0);
		}
		log.debug("findCourtDocById end");
		return query;
	}
	
	public List<LDocCourtDocRela> findCourtDocRelaById(String docId) throws Exception{
		log.debug("findCourtDocRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocRela> LDocCourtDocRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocRelaMapper());
		return LDocCourtDocRela;
	}
	
	public List<LDocCourtDocTranscriptsRela> findCourtDocTransciptsRelaById(String docId) throws Exception{
		log.debug("findCourtDocTransciptsRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_TRANSCRIPTS_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocTranscriptsRela> LDocCourtDocTranscriptsRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocTranscriptsRelaMapper());
		return LDocCourtDocTranscriptsRela;
	}
	
	public List<LDocCourtDocCoOwnedTranscriptsRela> findCourtDocCoOwnedTransciptsRelaById(String docId) throws Exception{
		log.debug("findCourtDocCoOwnedTransciptsRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_CO_OWNED_TRANSCRIPTS_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocCoOwnedTranscriptsRela> LDocCourtDocCoOwnedTranscriptsRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocCoOwnedTranscriptsRelaMapper());
		return LDocCourtDocCoOwnedTranscriptsRela;
	}
	
	public List<LDocCourtDocMortgageeTranscriptsRela> findCourtDocMortgageeTranscriptsRelaById(String docId) throws Exception{
		log.debug("findCourtDocMortgageeTranscriptsRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_MORTGAGEE_TRANSCRIPTS_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocMortgageeTranscriptsRela> LDocCourtDocMortgageeTranscriptsRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocMortgageeTranscriptsRelaMapper());
		return LDocCourtDocMortgageeTranscriptsRela;
	}
	
	public List<LDocCourtDocLawTranscriptsRela> findCourtDocLawTranscriptsRelaById(String docId) throws Exception{
		log.debug("findCourtDocLawTranscriptsRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_LAW_TRANSCRIPTS_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocLawTranscriptsRela> LDocCourtDocLawTranscriptsRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocLawTranscriptsRelaMapper());
		return LDocCourtDocLawTranscriptsRela;
	}
	
	public List<LDocCourtDocHeirTranscriptsRela> findCourtDocHeirTranscriptsRelaById(String docId) throws Exception{
		log.debug("findCourtDocHeirTranscriptsRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_HEIR_TRANSCRIPTS_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocHeirTranscriptsRela> LDocCourtDocHeirTranscriptsRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocHeirTranscriptsRelaMapper());
		return LDocCourtDocHeirTranscriptsRela;
	}
	
	public List<LDocCourtDocDirtTranscriptsRela> findCourtDocDirtTranscriptsRelaById(String docId) throws Exception{
		log.debug("findCourtDocDirtTranscriptsRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_DIRT_TRANSCRIPTS_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocDirtTranscriptsRela> LDocCourtDocDirtTranscriptsRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocDirtTranscriptsRelaMapper());
		return LDocCourtDocDirtTranscriptsRela;
	}
	
	public List<LDocCourtDocBuiltTranscriptsRela> findCourtDocBuiltTranscriptsRelaById(String docId) throws Exception{
		log.debug("findCourtDocBuiltTranscriptsRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_BUILT_TRANSCRIPTS_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocBuiltTranscriptsRela> LDocCourtDocBuiltTranscriptsRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocBuiltTranscriptsRelaMapper());
		return LDocCourtDocBuiltTranscriptsRela;
	}
	
	public List<LDocCourtDocDistributionRela> findCourtDocDistributionRelaById(String docId) throws Exception{
		log.debug("findCourtDocDistributionRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_DISTRIBUTION_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocDistributionRela> LDocCourtDocDistributionRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocDistributionRelaMapper());
		return LDocCourtDocDistributionRela;
	}
	
	public List<LDocCourtDocThingThirdRela> findCourtDocThingThirdRelaById(String docId) throws Exception{
		log.debug("findCourtDocThingThirdRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_THING_THIRD_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocThingThirdRela> LDocCourtDocThingThirdRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocThingThirdRelaMapper());
		return LDocCourtDocThingThirdRela;
	}
	
	public List<LDocCourtDocThingDebtRela> findCourtDocThingDebtRelaById(String docId) throws Exception{
		log.debug("findCourtDocThingDebtRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_THING_DEBT_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocThingDebtRela> LDocCourtDocThingDebtRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocThingDebtRelaMapper());
		return LDocCourtDocThingDebtRela;
	}
	
	public List<LDocCourtDocCoOwnedRela> findCourtDocCoOwnedRelaById(String docId) throws Exception{
		log.debug("findCourtDocCoOwnedRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_CO_OWNED_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocCoOwnedRela> LDocCourtDocCoOwnedRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocCoOwnedRelaMapper());
		return LDocCourtDocCoOwnedRela;
	}
	
	public List<LDocCourtDocDebtDocRela> findCourtDocDebtDocRelaById(String docId) throws Exception{
		log.debug("findCourtDocDebtDocRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_DEBT_DOC_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocDebtDocRela> LDocCourtDocDebtDocRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocDebtDocRelaMapper());
		return LDocCourtDocDebtDocRela;
	}
	
	public List<LDocCourtDocDetailRela> findCourtDocDetailRelaById(String docId) throws Exception{
		log.debug("findCourtDocDetailRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_DETAIL_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocDetailRela> LDocCourtDocDetailRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocDetailRelaMapper());
		return LDocCourtDocDetailRela;
	}
	
	public List<LDocCourtDocFileRela> findCourtDocFileRelaById(String docId) throws Exception{
		log.debug("findCourtDocFileRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_FILE_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocFileRela> LDocCourtDocFileRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocFileRelaMapper());
		return LDocCourtDocFileRela;
	}
	
	public List<LDocCourtDocDebtContinueRela> findCourtDocDebtContinueRelaById(String docId) throws Exception{
		log.debug("findCourtDocDebtContinueRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_DEBT_CONTINUE_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocDebtContinueRela> LDocCourtDocDebtContinueRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocDebtContinueRelaMapper());
		return LDocCourtDocDebtContinueRela;
	}
	
	public List<LDocCourtDocCashierCheckRela> findCourtDocCashierCheckRelaById(String docId) throws Exception{
		log.debug("findCourtDocCashierCheckRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_CASHIER_CHECK_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocCashierCheckRela> LDocCourtDocCashierCheckRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocCashierCheckRelaMapper());
		return LDocCourtDocCashierCheckRela;
	}
	
	public List<LDocCourtDocRecoveryRela> findCourtDocRecoveryRelaById(String docId) throws Exception{
		log.debug("findCourtDocRecoveryRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_RECOVERY_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocRecoveryRela> LDocCourtDocRecoveryRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocRecoveryRelaMapper());
		return LDocCourtDocRecoveryRela;
	}
	
	public List<LDocCourtDocOtherRela> findCourtDocOtherRelaById(String docId) throws Exception{
		log.debug("findCourtDocOtherRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_COURT_DOC_OTHER_RELA where court_doc_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCourtDocOtherRela> LDocCourtDocOtherRela = jdbcTemplate.query(queryString.toString(), new LDocCourtDocOtherRelaMapper());
		return LDocCourtDocOtherRela;
	}
	
	public LDocCashiercheck findCashierCheckById(String docId) throws Exception{
		log.debug("findCashierCheckById start");
		LDocCashiercheck query = null;
		String queryString = "from LDocCashiercheck ldc where  ldc.cashiercheckId='" + docId + "'";
		log.debug("queryString = {}", queryString);
		List<?> LDocCashiercheckList = super.getHibernateTemplate().find(queryString);
		if(LDocCashiercheckList.size() != 0){
			query = (LDocCashiercheck) LDocCashiercheckList.get(0);
		}
		log.debug("findCashierCheckById end");
		return query;
	}
	
	public List<LDocCashiercheckRela> findCashierCheckRelaById(String docId) throws Exception{
		log.debug("findCashierCheckRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_CASHIERCHECK_RELA where cashiercheck_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocCashiercheckRela> LDocCashiercheckRela = jdbcTemplate.query(queryString.toString(), new LDocCashiercheckRelaMapper());
		return LDocCashiercheckRela;
	}
	
	public LDocDebts findDebtsById(String docId) throws Exception{
		log.debug("findDebtsById start");
		LDocDebts query = null;
		String queryString = "from LDocDebts ldd where  ldd.debtsId='" + docId + "'";
		log.debug("queryString = {}", queryString);
		List<?> LDocDebtsList = super.getHibernateTemplate().find(queryString);
		if(LDocDebtsList.size() != 0){
			query = (LDocDebts) LDocDebtsList.get(0);
		}
		log.debug("findDebtsById end");
		return query;
	}
	
	public List<LDocDebtsRela> findDebtsRelaById(String docId) throws Exception{
		log.debug("findDebtsRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_DEBTS_RELA where debts_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocDebtsRela> LDocDebtsRela = jdbcTemplate.query(queryString.toString(), new LDocDebtsRelaMapper());
		return LDocDebtsRela;
	}
	
	public LDocClaimsdocs findClaimDocsById(String docId) throws Exception{
		log.debug("findClaimDocsById start");
		LDocClaimsdocs query = null;
		String queryString = "from LDocClaimsdocs ldc where  ldc.claimsdocsId='" + docId + "'";
		log.debug("queryString = {}", queryString);
		List<?> LDocClaimsdocsList = super.getHibernateTemplate().find(queryString);
		if(LDocClaimsdocsList.size() != 0){
			query = (LDocClaimsdocs) LDocClaimsdocsList.get(0);
		}
		log.debug("findClaimDocsById end");
		return query;
	}
	
	public List<LDocClaimsdocsRela> findClaimDocsRelaById(String docId) throws Exception{
		log.debug("findClaimDocsRelaById start");
		StringBuffer queryString = new StringBuffer("select * from L_DOC_CLAIMSDOC_RELA where claimsdocs_id = " + docId);
		log.debug("queryString = {}", queryString);
		
		@SuppressWarnings("unchecked")
		List<LDocClaimsdocsRela> LDocClaimsdocsRela = jdbcTemplate.query(queryString.toString(), new LDocClaimsdocsRelaMapper());
		return LDocClaimsdocsRela;
	}
	
	public LDocFiledocs findFileById(String docId) throws Exception{
		log.debug("findFileById start");
		LDocFiledocs query = null;
		String queryString = "from LDocFiledocs ldf where  ldf.filedocsId='" + docId + "'";
		log.debug("queryString = {}", queryString);
		List<?> LDocFiledocsList = super.getHibernateTemplate().find(queryString);
		if(LDocFiledocsList.size() != 0){
			query = (LDocFiledocs) LDocFiledocsList.get(0);
		}
		log.debug("findFileById end");
		return query;
	}
	
	public LDocOtherdocs findOtherById(String docId) throws Exception{
		log.debug("findOtherById start");
		LDocOtherdocs query = null;
		String queryString = "from LDocOtherdocs ldo where  ldo.otherdocsId='" + docId + "'";
		log.debug("queryString = {}", queryString);
		List<?> LDocOtherdocsList = super.getHibernateTemplate().find(queryString);
		if(LDocOtherdocsList.size() != 0){
			query = (LDocOtherdocs) LDocOtherdocsList.get(0);
		}
		log.debug("findOtherById end");
		return query;
	}
	
	@SuppressWarnings("rawtypes")
	class LDocInfoMapper implements RowMapper {
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocInfo LDocInfo = new LDocInfo();
			LDocInfo.setCaseId(rs.getInt("case_id"));
			LDocInfo.setApplyBorrow(rs.getString("apply_borrow") == null ? "" : rs.getString("apply_borrow"));
			LDocInfo.setDisApplyBorrow(rs.getString("dis_apply_borrow") == null ? "" : rs.getString("dis_apply_borrow"));
			LDocInfo.setEditDoc(rs.getString("edit_doc") == null ? "" : rs.getString("edit_doc"));
			LDocInfo.setDocStatus(rs.getString("doc_status") == null ? "" : rs.getString("doc_status"));
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
		    LDocInfo.setCourtYearYear(rs.getString("court_year_year") == null ? 0 : rs.getInt("court_year_year"));
		    LDocInfo.setCourtYearTxt(rs.getString("court_year_txt") == null ? "" : rs.getString("court_year_txt"));
		    LDocInfo.setCourtYearShare(rs.getString("court_year_share") == null ? "" : rs.getString("court_year_share"));
		    LDocInfo.setCourtYearCaseId(rs.getString("court_year_case_id") == null ? "" : rs.getString("court_year_case_id"));
		    LDocInfo.setBankName(rs.getString("bank_name") == null ? "" : rs.getString("bank_name"));
		    LDocInfo.setOldBankName(rs.getString("old_bank_name") == null ? "" : rs.getString("old_bank_name"));
		    LDocInfo.setSourceDoc(rs.getString("source_doc") == null ? "" : rs.getString("source_doc"));
		    LDocInfo.setSourceDocInfo(rs.getString("source_doc_info") == null ? "" : rs.getString("source_doc_info").replaceAll("@n", "</br>"));
		    LDocInfo.setShareCaseId0(rs.getString("share_case_id_0") == null ? "" : rs.getString("share_case_id_0"));
		    LDocInfo.setSendDate(rs.getString("send_date") == null ? "" : rs.getString("send_date"));
		    LDocInfo.setNewSendDate(rs.getString("new_send_date") == null ? "" : rs.getString("new_send_date"));
		    LDocInfo.setInterestYear(rs.getString("interest_year") == null ? "" : rs.getString("interest_year"));
		    LDocInfo.setInterestDate(rs.getString("interest_date") == null ? "" : rs.getString("interest_date"));
		    LDocInfo.setRemark(rs.getString("remark") == null ? "" : rs.getString("remark"));
		    LDocInfo.setShadow(rs.getString("shadow") == null ? "" : rs.getString("shadow"));
			LDocInfo.setBorrowInfo(rs.getString("borrow_info") == null ? "" : rs.getString("borrow_info"));
		    LDocInfo.setModifyUserName(rs.getString("modify_user_name") == null ? "" : rs.getString("modify_user_name"));
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
		    LDocInfo.setReport(rs.getString("report") == null ? "" : rs.getString("report"));
		    LDocInfo.setEdit(rs.getString("edit") == null ? "" : rs.getString("edit"));;
		    LDocInfo.setPay(rs.getString("pay") == null ? "" : rs.getString("pay"));
		    LDocInfo.setSendReport(rs.getString("send_report") == null ? "" : rs.getString("send_report"));
		    LDocInfo.setToCourtDate(rs.getString("to_court_date") == null ? "" : rs.getString("to_court_date"));
		    LDocInfo.setToCourtTime(rs.getString("to_court_time") == null ? "" : rs.getString("to_court_time"));
		    LDocInfo.setToCourtType(rs.getString("to_court_type") == null ? "" : rs.getString("to_court_type"));
		    LDocInfo.setToCourtNotice(rs.getString("to_court_notice") == null ? "" : rs.getString("to_court_notice"));
		    LDocInfo.setExecutionDate(rs.getString("execution_date") == null ? "" : rs.getString("execution_date"));
		    LDocInfo.setExecutionTime(rs.getString("execution_time") == null ? "" : rs.getString("execution_time"));
		    LDocInfo.setCashierCheckStartDate(rs.getString("cashier_check_start_date") == null ? "" : rs.getString("cashier_check_start_date"));
		    LDocInfo.setCashierCheckAmount(rs.getInt("cashier_check_amount"));
		    LDocInfo.setCashierCheckEndDate(rs.getString("cashier_check_end_date") == null ? "" : rs.getString("cashier_check_end_date"));
		    LDocInfo.setDebtsCourtYearInfo(rs.getString("debts_court_year_info") == null ? "" : rs.getString("debts_court_year_info"));
		    LDocInfo.setDebtsDate(rs.getString("debts_date") == null ? "" : rs.getString("debts_date"));
		    LDocInfo.setClaimsdocQuota(rs.getString("claimsdoc_quota") == null ? "" : rs.getString("claimsdoc_quota"));
		    LDocInfo.setClaimsDocInterestRate(rs.getString("claims_doc_interest_rate") == null ? "" : rs.getString("claims_doc_interest_rate"));
		    LDocInfo.setOtherReceiptType(rs.getString("other_receipt_type") == null ? "" : rs.getString("other_receipt_type"));
		    LDocInfo.setOtherReceiptAmount(rs.getString("other_receipt_amount") == null ? "" : rs.getString("other_receipt_amount"));
		    LDocInfo.setOtherCourtDate(rs.getString("other_court_date") == null ? "" : rs.getString("other_court_date"));
		    LDocInfo.setID(rs.getString("debt_ID") == null ? "" : rs.getString("debt_ID"));
		    LDocInfo.setDocId(rs.getString("doc_id") == null ? "" : rs.getString("doc_id"));
		    LDocInfo.setDocType(rs.getString("doc_type") == null ? "" : rs.getString("doc_type"));
			LDocInfo.setDisDocStatus(rs.getString("dis_doc_status") == null ? "" : rs.getString("dis_doc_status"));
			LDocInfo.setLawCode(rs.getString("law_code") == null ? "" : rs.getString("law_code"));
			LDocInfo.setBorrowBackDate(rs.getString("borrow_back_date") == null ? "" : rs.getString("borrow_back_date"));
			LDocInfo.setBorrowBackReason(rs.getString("borrow_back_reason") == null ? "" : rs.getString("borrow_back_reason"));
			LDocInfo.setBorrowToCourtDate(rs.getString("borrow_to_court_date") == null ? "" : rs.getString("borrow_to_court_date"));
			LDocInfo.setBorrowToCourtLawCode(rs.getString("borrow_to_court_law_code") == null ? "" : rs.getString("borrow_to_court_law_code"));
			LDocInfo.setBorrowCourtYearCourt(rs.getString("borrow_court_year_court") == null ? "" : rs.getString("borrow_court_year_court"));
			LDocInfo.setDisBorrowCourtYearCourt(rs.getString("dis_borrow_court_year_court") == null ? "" : rs.getString("dis_borrow_court_year_court"));
			LDocInfo.setBorrowCourtYearYear(rs.getString("borrow_court_year_year") == null ? "" : rs.getString("borrow_court_year_year"));
			LDocInfo.setBorrowCourtYearTxt(rs.getString("borrow_court_year_txt") == null ? "" : rs.getString("borrow_court_year_txt"));
			LDocInfo.setBorrowCourtYearCaseId(rs.getString("borrow_court_year_case_id") == null ? "" : rs.getString("borrow_court_year_case_id"));
			LDocInfo.setBorrowCourtYearShare(rs.getString("borrow_court_year_share") == null ? "" : rs.getString("borrow_court_year_share"));
			LDocInfo.setBorrowCommonReason(rs.getString("borrow_common_reason") == null ? "" : rs.getString("borrow_common_reason"));
			LDocInfo.setBorrowSubLawCode(rs.getString("borrow_sub_law_code") == null ? "" : rs.getString("borrow_sub_law_code"));
			return LDocInfo;

		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocInfoSumMapper implements RowMapper {
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocInfo LDocInfo = new LDocInfo();
			LDocInfo.setRowNum(rs.getString("ROWNUM") == null ? "" : rs.getString("ROWNUM"));
			LDocInfo.setBankName(rs.getString("bank_name") == null ? "" : rs.getString("bank_name"));
			LDocInfo.setProdName(rs.getString("prod_name") == null ? "" : rs.getString("prod_name"));
			LDocInfo.setCaseId(rs.getInt("case_id"));
			LDocInfo.setDebtName(rs.getString("debt_name") == null ? "" : rs.getString("debt_name"));
			LDocInfo.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocInfo.setDocCode(rs.getString("doc_code") == null ? "" : rs.getString("doc_code"));
		    LDocInfo.setTypeOne(rs.getString("type_one") == null ? "" : rs.getString("type_one"));
		    LDocInfo.setTypeTwo(rs.getString("type_two") == null ? "" : rs.getString("type_two"));
			LDocInfo.setDocStatus(rs.getString("doc_status") == null ? "" : rs.getString("doc_status"));
		    LDocInfo.setCourtYearCourt(rs.getString("court_year_court") == null ? "" : rs.getString("court_year_court"));
		    LDocInfo.setCourtYearYear(rs.getInt("court_year_year"));
		    LDocInfo.setCourtYearTxt(rs.getString("court_year_txt") == null ? "" : rs.getString("court_year_txt"));
		    LDocInfo.setCourtYearShare(rs.getString("court_year_share") == null ? "" : rs.getString("court_year_share"));
		    LDocInfo.setCourtYearCaseId(rs.getString("court_year_case_id") == null ? "" : rs.getString("court_year_case_id"));
		    LDocInfo.setSourceDoc(rs.getString("source_doc") == null ? "" : rs.getString("source_doc"));
		    LDocInfo.setSourceDocInfo(rs.getString("source_doc_info") == null ? "" : rs.getString("source_doc_info"));
		    LDocInfo.setSendDate(rs.getString("send_date") == null ? "" : rs.getString("send_date"));
		    LDocInfo.setNewSendDate(rs.getString("new_send_date") == null ? "" : rs.getString("new_send_date"));
		    LDocInfo.setRemark(rs.getString("remark") == null ? "" : rs.getString("remark"));
		    LDocInfo.setReport(rs.getString("report") == null ? "" : rs.getString("report"));
		    LDocInfo.setEdit(rs.getString("edit") == null ? "" : rs.getString("edit"));
		    LDocInfo.setPay(rs.getString("pay") == null ? "" : rs.getString("pay"));
		    LDocInfo.setSendReport(rs.getString("send_report") == null ? "" : rs.getString("send_report"));
		    LDocInfo.setToCourtDate(rs.getString("to_court_date") == null ? "" : rs.getString("to_court_date"));
		    LDocInfo.setToCourtTime(rs.getString("to_court_time") == null ? "" : rs.getString("to_court_time"));
		    LDocInfo.setExecutionDate(rs.getString("execution_date") == null ? "" : rs.getString("execution_date"));
		    LDocInfo.setExecutionTime(rs.getString("execution_time") == null ? "" : rs.getString("execution_time"));
		    LDocInfo.setBorrowReason(rs.getString("borrow_reason") == null ? "" : rs.getString("borrow_reason"));
			LDocInfo.setLawCode(rs.getString("law_code") == null ? "" : rs.getString("law_code"));
			LDocInfo.setBorrowDatetime(rs.getString("borrow_datetime") == null ? "" : rs.getString("borrow_datetime"));
			LDocInfo.setBorrowUserId(rs.getString("borrow_user_id") == null ? "" : rs.getString("borrow_user_id"));
			LDocInfo.setBorrowUserName(rs.getString("borrow_user_name") == null ? "" : rs.getString("borrow_user_name"));
			LDocInfo.setProgressDatetime(rs.getString("progress_datetime") == null ? "" : rs.getString("progress_datetime"));
			LDocInfo.setProgressUserId(rs.getString("progress_user_id") == null ? "" : rs.getString("progress_user_id"));
			LDocInfo.setProgressUserName(rs.getString("progress_user_name") == null ? "" : rs.getString("progress_user_name"));
			LDocInfo.setCheckDatetime(rs.getString("check_datetime") == null ? "" : rs.getString("check_datetime"));
			LDocInfo.setCheckUserId(rs.getString("check_user_id") == null ? "" : rs.getString("check_user_id"));
			LDocInfo.setCheckUserName(rs.getString("check_user_name") == null ? "" : rs.getString("check_user_name"));
			LDocInfo.setBackDatetime(rs.getString("back_datetime") == null ? "" : rs.getString("back_datetime"));
			LDocInfo.setBackUserId(rs.getString("back_user_id") == null ? "" : rs.getString("back_user_id"));
			LDocInfo.setBackUserName(rs.getString("back_user_name") == null ? "" : rs.getString("back_user_name"));
			LDocInfo.setFinalDatetime(rs.getString("final_datetime") == null ? "" : rs.getString("final_datetime"));
			LDocInfo.setFinalUserId(rs.getString("final_user_id") == null ? "" : rs.getString("final_user_id"));
			LDocInfo.setFinalUserName(rs.getString("final_user_name") == null ? "" : rs.getString("final_user_name"));
			LDocInfo.setBusinessAccount(rs.getString("business_account") == null ? "" : rs.getString("business_account"));
			LDocInfo.setBusiness(rs.getString("business") == null ? "" : rs.getString("business"));
		    
			
			return LDocInfo;

		}
	}
	
	@SuppressWarnings("rawtypes")
	class LSysVariableMapper implements RowMapper {
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LSysVariable LSysVariable = new LSysVariable();
			LSysVariable.setVariableId(rs.getString("Bank_ID") == null ? "" : rs.getString("Bank_ID"));
			LSysVariable.setVariableName(rs.getString("Bank_name") == null ? "" : rs.getString("Bank_name"));
			return LSysVariable;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocClaimsdocsRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocClaimsdocsRela LDocClaimsdocsRela = new LDocClaimsdocsRela();
			LDocClaimsdocsRela.setClaimsdocsRelaId(rs.getString("claimsdocs_rela_id") == null ? "" : rs.getString("claimsdocs_rela_id"));
			LDocClaimsdocsRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocClaimsdocsRela.setP_ID(rs.getInt("P_ID"));
			LDocClaimsdocsRela.setNum(rs.getInt("num"));
			LDocClaimsdocsRela.setClaimsdocsId(rs.getInt("claimsdocs_id"));
			LDocClaimsdocsRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocClaimsdocsRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocDebtsRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocDebtsRela LDocDebtsRela = new LDocDebtsRela();
			LDocDebtsRela.setDebtsRelaId(rs.getString("debts_rela_id") == null ? "" : rs.getString("debts_rela_id"));
			LDocDebtsRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocDebtsRela.setP_ID(rs.getInt("P_ID"));
			LDocDebtsRela.setNum(rs.getInt("num"));
			LDocDebtsRela.setDebtsId(rs.getInt("debts_id"));
			LDocDebtsRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocDebtsRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCashiercheckRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCashiercheckRela LDocCashiercheckRela = new LDocCashiercheckRela();
			LDocCashiercheckRela.setCashiercheckRelaId(rs.getString("cashiercheck_rela_id") == null ? "" : rs.getString("cashiercheck_rela_id"));
			LDocCashiercheckRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCashiercheckRela.setP_ID(rs.getInt("P_ID"));
			LDocCashiercheckRela.setNum(rs.getInt("num"));
			LDocCashiercheckRela.setCashiercheckId(rs.getInt("cashiercheck_id"));
			LDocCashiercheckRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCashiercheckRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCentitlementRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCentitlementRela LDocCentitlementRela = new LDocCentitlementRela();
			LDocCentitlementRela.setCentitlementRelaId(rs.getString("centitlement_rela_id") == null ? "" : rs.getString("centitlement_rela_id"));
			LDocCentitlementRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCentitlementRela.setP_ID(rs.getInt("P_ID"));
			LDocCentitlementRela.setNum(rs.getInt("num"));
			LDocCentitlementRela.setCentitlementId(rs.getInt("centitlement_id"));
			LDocCentitlementRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCentitlementRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCentitlementSourceDocMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCentitlementSourceDoc LDocCentitlementSourceDoc = new LDocCentitlementSourceDoc();
			LDocCentitlementSourceDoc.setCentitlementSourceDocId(rs.getString("centitlement_source_doc_id") == null ? "" : rs.getString("centitlement_source_doc_id"));
			LDocCentitlementSourceDoc.setCentitlementSourceDoc(rs.getString("centitlement_source_doc") == null ? "" : rs.getString("centitlement_source_doc"));
			LDocCentitlementSourceDoc.setCourtYearCourt(rs.getString("court_year_court") == null ? "" : rs.getString("court_year_court"));
			LDocCentitlementSourceDoc.setCourtYearYear(rs.getInt("court_year_year"));
			LDocCentitlementSourceDoc.setCourtYearTxt(rs.getString("court_year_txt") == null ? "" : rs.getString("court_year_txt"));
			LDocCentitlementSourceDoc.setCourtYearShare(rs.getString("court_year_share") == null ? "" : rs.getString("court_year_share"));
			LDocCentitlementSourceDoc.setCourtYearCaseId(rs.getInt("court_year_case_id"));
			LDocCentitlementSourceDoc.setCentitlementId(rs.getInt("centitlement_id"));
			LDocCentitlementSourceDoc.setCentitlementSourceDocName(rs.getString("centitlement_source_doc_name") == null ? "" : rs.getString("centitlement_source_doc_name"));
			LDocCentitlementSourceDoc.setCourtYearCourtName(rs.getString("court_year_court_name") == null ? "" : rs.getString("court_year_court_name"));
			LDocCentitlementSourceDoc.setNum(rs.getInt("num"));
			return LDocCentitlementSourceDoc;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocRela LDocCourtDocRela = new LDocCourtDocRela();
			LDocCourtDocRela.setCourtDocRelaId(rs.getString("court_doc_rela_id") == null ? "" : rs.getString("court_doc_rela_id"));
			LDocCourtDocRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocRela.setNum(rs.getInt("num"));
			LDocCourtDocRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocTranscriptsRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocTranscriptsRela LDocCourtDocTranscriptsRela = new LDocCourtDocTranscriptsRela();
			LDocCourtDocTranscriptsRela.setCourtDocTranscriptsRelaId(rs.getString("court_doc_transcripts_rela_id") == null ? "" : rs.getString("court_doc_transcripts_rela_id"));
			LDocCourtDocTranscriptsRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocTranscriptsRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocTranscriptsRela.setNum(rs.getInt("num"));
			LDocCourtDocTranscriptsRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocTranscriptsRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocTranscriptsRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocCoOwnedTranscriptsRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocCoOwnedTranscriptsRela LDocCourtDocCoOwnedTranscriptsRela = new LDocCourtDocCoOwnedTranscriptsRela();
			LDocCourtDocCoOwnedTranscriptsRela.setCourtDocCoOwnedTranscriptsRelaId(rs.getString("court_doc_co_owned_transcripts_rela_id") == null ? "" : rs.getString("court_doc_co_owned_transcripts_rela_id"));
			LDocCourtDocCoOwnedTranscriptsRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocCoOwnedTranscriptsRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocCoOwnedTranscriptsRela.setNum(rs.getInt("num"));
			LDocCourtDocCoOwnedTranscriptsRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocCoOwnedTranscriptsRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocCoOwnedTranscriptsRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocMortgageeTranscriptsRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocMortgageeTranscriptsRela LDocCourtDocMortgageeTranscriptsRela = new LDocCourtDocMortgageeTranscriptsRela();
			LDocCourtDocMortgageeTranscriptsRela.setCourtDocMortgageeTranscriptsRelaId(rs.getString("court_doc_mortgagee_transcripts_rela_id") == null ? "" : rs.getString("court_doc_mortgagee_transcripts_rela_id"));
			LDocCourtDocMortgageeTranscriptsRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocMortgageeTranscriptsRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocMortgageeTranscriptsRela.setNum(rs.getInt("num"));
			LDocCourtDocMortgageeTranscriptsRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocMortgageeTranscriptsRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocMortgageeTranscriptsRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocLawTranscriptsRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocLawTranscriptsRela LDocCourtDocLawTranscriptsRela = new LDocCourtDocLawTranscriptsRela();
			LDocCourtDocLawTranscriptsRela.setCourtDocLawTranscriptsRelaId(rs.getString("court_doc_law_transcripts_rela_id") == null ? "" : rs.getString("court_doc_law_transcripts_rela_id"));
			LDocCourtDocLawTranscriptsRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocLawTranscriptsRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocLawTranscriptsRela.setNum(rs.getInt("num"));
			LDocCourtDocLawTranscriptsRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocLawTranscriptsRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocLawTranscriptsRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocHeirTranscriptsRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocHeirTranscriptsRela LDocCourtDocHeirTranscriptsRela = new LDocCourtDocHeirTranscriptsRela();
			LDocCourtDocHeirTranscriptsRela.setCourtDocHeirTranscriptsRelaId(rs.getString("court_doc_heir_transcripts_rela_id") == null ? "" : rs.getString("court_doc_heir_transcripts_rela_id"));
			LDocCourtDocHeirTranscriptsRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocHeirTranscriptsRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocHeirTranscriptsRela.setNum(rs.getInt("num"));
			LDocCourtDocHeirTranscriptsRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocHeirTranscriptsRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocHeirTranscriptsRela;
		}
	}

	@SuppressWarnings("rawtypes")
	class LDocCourtDocDirtTranscriptsRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocDirtTranscriptsRela LDocCourtDocDirtTranscriptsRela = new LDocCourtDocDirtTranscriptsRela();
			LDocCourtDocDirtTranscriptsRela.setCourtDocDirtTranscriptsRelaId(rs.getString("court_doc_dirt_transcripts_rela_id") == null ? "" : rs.getString("court_doc_dirt_transcripts_rela_id"));
			LDocCourtDocDirtTranscriptsRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocDirtTranscriptsRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocDirtTranscriptsRela.setNum(rs.getInt("num"));
			LDocCourtDocDirtTranscriptsRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocDirtTranscriptsRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocDirtTranscriptsRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocBuiltTranscriptsRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocBuiltTranscriptsRela LDocCourtDocBuiltTranscriptsRela = new LDocCourtDocBuiltTranscriptsRela();
			LDocCourtDocBuiltTranscriptsRela.setCourtDocBuiltTranscriptsRelaId(rs.getString("court_doc_built_transcripts_rela_id") == null ? "" : rs.getString("court_doc_built_transcripts_rela_id"));
			LDocCourtDocBuiltTranscriptsRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocBuiltTranscriptsRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocBuiltTranscriptsRela.setNum(rs.getInt("num"));
			LDocCourtDocBuiltTranscriptsRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocBuiltTranscriptsRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocBuiltTranscriptsRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocDistributionRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocDistributionRela LDocCourtDocDistributionRela = new LDocCourtDocDistributionRela();
			LDocCourtDocDistributionRela.setCourtDocDistributionRelaId(rs.getString("court_doc_distribution_rela_id") == null ? "" : rs.getString("court_doc_distribution_rela_id"));
			LDocCourtDocDistributionRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocDistributionRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocDistributionRela.setNum(rs.getInt("num"));
			LDocCourtDocDistributionRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocDistributionRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocDistributionRela;
		}
	}

	@SuppressWarnings("rawtypes")
	class LDocCourtDocThingThirdRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocThingThirdRela LDocCourtDocThingThirdRela = new LDocCourtDocThingThirdRela();
			LDocCourtDocThingThirdRela.setCourtDocThingThirdRelaId(rs.getString("court_doc_thing_third_rela_id") == null ? "" : rs.getString("court_doc_thing_third_rela_id"));
			LDocCourtDocThingThirdRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocThingThirdRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocThingThirdRela.setNum(rs.getInt("num"));
			LDocCourtDocThingThirdRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocThingThirdRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocThingThirdRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocThingDebtRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocThingDebtRela LDocCourtDocThingDebtRela = new LDocCourtDocThingDebtRela();
			LDocCourtDocThingDebtRela.setCourtDocThingDebtRelaId(rs.getString("court_doc_thing_debt_rela_id") == null ? "" : rs.getString("court_doc_thing_debt_rela_id"));
			LDocCourtDocThingDebtRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocThingDebtRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocThingDebtRela.setNum(rs.getInt("num"));
			LDocCourtDocThingDebtRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocThingDebtRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocThingDebtRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocCoOwnedRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocCoOwnedRela LDocCourtDocCoOwnedRela = new LDocCourtDocCoOwnedRela();
			LDocCourtDocCoOwnedRela.setCourtDocCoOwnedRelaId(rs.getString("court_doc_co_owned_rela_id") == null ? "" : rs.getString("court_doc_co_owned_rela_id"));
			LDocCourtDocCoOwnedRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocCoOwnedRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocCoOwnedRela.setNum(rs.getInt("num"));
			LDocCourtDocCoOwnedRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocCoOwnedRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocCoOwnedRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocDebtDocRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocDebtDocRela LDocCourtDocDebtDocRela = new LDocCourtDocDebtDocRela();
			LDocCourtDocDebtDocRela.setCourtDocDebtDocRelaId(rs.getString("court_doc_debt_doc_rela_id") == null ? "" : rs.getString("court_doc_debt_doc_rela_id"));
			LDocCourtDocDebtDocRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocDebtDocRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocDebtDocRela.setNum(rs.getInt("num"));
			LDocCourtDocDebtDocRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocDebtDocRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocDebtDocRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocDetailRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocDetailRela LDocCourtDocDetailRela = new LDocCourtDocDetailRela();
			LDocCourtDocDetailRela.setCourtDocDetailRelaId(rs.getString("court_doc_detail_rela_id") == null ? "" : rs.getString("court_doc_detail_rela_id"));
			LDocCourtDocDetailRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocDetailRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocDetailRela.setNum(rs.getInt("num"));
			LDocCourtDocDetailRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocDetailRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocDetailRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocFileRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocFileRela LDocCourtDocFileRela = new LDocCourtDocFileRela();
			LDocCourtDocFileRela.setCourtDocFileRelaId(rs.getString("court_doc_file_rela_id") == null ? "" : rs.getString("court_doc_file_rela_id"));
			LDocCourtDocFileRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocFileRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocFileRela.setNum(rs.getInt("num"));
			LDocCourtDocFileRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocFileRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocFileRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocDebtContinueRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocDebtContinueRela LDocCourtDocDebtContinueRela = new LDocCourtDocDebtContinueRela();
			LDocCourtDocDebtContinueRela.setCourtDocDebtContinueRelaId(rs.getString("court_doc_debt_continue_rela_id") == null ? "" : rs.getString("court_doc_debt_continue_rela_id"));
			LDocCourtDocDebtContinueRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocDebtContinueRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocDebtContinueRela.setNum(rs.getInt("num"));
			LDocCourtDocDebtContinueRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocDebtContinueRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocDebtContinueRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocCashierCheckRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocCashierCheckRela LDocCourtDocCashierCheckRela = new LDocCourtDocCashierCheckRela();
			LDocCourtDocCashierCheckRela.setCourtDocCashierCheckRelaId(rs.getString("court_doc_cashier_check_rela_id") == null ? "" : rs.getString("court_doc_cashier_check_rela_id"));
			LDocCourtDocCashierCheckRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocCashierCheckRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocCashierCheckRela.setNum(rs.getInt("num"));
			LDocCourtDocCashierCheckRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocCashierCheckRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocCashierCheckRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocRecoveryRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocRecoveryRela LDocCourtDocRecoveryRela = new LDocCourtDocRecoveryRela();
			LDocCourtDocRecoveryRela.setCourtDocRecoveryRelaId(rs.getString("court_doc_recovery_rela_id") == null ? "" : rs.getString("court_doc_recovery_rela_id"));
			LDocCourtDocRecoveryRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocRecoveryRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocRecoveryRela.setNum(rs.getInt("num"));
			LDocCourtDocRecoveryRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocRecoveryRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocRecoveryRela;
		}
	}
	
	@SuppressWarnings("rawtypes")
	class LDocCourtDocOtherRelaMapper implements RowMapper{
		public Object mapRow(ResultSet rs, int arg1) throws SQLException{
			LDocCourtDocOtherRela LDocCourtDocOtherRela = new LDocCourtDocOtherRela();
			LDocCourtDocOtherRela.setCourtDocOtherRelaId(rs.getString("court_doc_other_rela_id") == null ? "" : rs.getString("court_doc_other_rela_id"));
			LDocCourtDocOtherRela.setID(rs.getString("ID") == null ? "" : rs.getString("ID"));
			LDocCourtDocOtherRela.setP_ID(rs.getInt("P_ID"));
			LDocCourtDocOtherRela.setNum(rs.getInt("num"));
			LDocCourtDocOtherRela.setCourtDocId(rs.getInt("court_doc_id"));
			LDocCourtDocOtherRela.setName(rs.getString("name") == null ? "" : rs.getString("name"));
			return LDocCourtDocOtherRela;
		}
	}
}
