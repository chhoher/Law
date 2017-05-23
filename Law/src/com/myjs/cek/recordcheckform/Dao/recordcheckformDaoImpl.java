package com.myjs.cek.recordcheckform.Dao;

import java.io.Serializable;
import java.math.BigDecimal;
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

import com.myjs.cek.recordcheckform.model.LCekRecordCheckform;
import com.myjs.cek.recordcheckform.model.LCekRecordFile;
import com.myjs.cek.recordcheckform.model.LCekRecordOtherfile;
import com.myjs.cek.recordcheckform.model.LCekRecordSigned;
import com.myjs.cek.recordcheckform.model.LCekRecordSignedStep;
import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.cek.recordcheckform.model.LCekSignedRelaInfo;
import com.myjs.commons.DaoUtil;

public class recordcheckformDaoImpl extends DaoUtil implements recordcheckformDao{

	private static final Logger log = LogManager.getLogger(recordcheckformDaoImpl.class);
	
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

	@SuppressWarnings("unchecked")
	public List<LCekRecordCheckform> findAll() {
		log.debug("finding all LCekRecordCheckform start");
		try{
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from LCekRecordCheckform ";
	                query = session.createQuery(hql);
	                return query.list();
	            }
	        });
			log.debug("finding all LCekRecordCheckform end");
	        return (List<LCekRecordCheckform>)execute;
		}catch(Exception e){
			log.error("finding all LCekRecordCheckform error msg=>",e);
			return null;
		}
    }
	
	public List<LCekRecordCheckform> findbyproperties(String startDate,	String endDate, String applyUserId, String status) {
		log.debug("findbyproperties start");
		try{
			String[] valuearr = new String[4];
			valuearr[0]= startDate;
			valuearr[1]= endDate + " 23:59:59";
			valuearr[2]= applyUserId;
			valuearr[3]= status;
			
			StringBuffer queryString=new StringBuffer("SELECT LCRS.signed_id, LCRS.case_id, LCRS.bank_name, LCRS.prod_name, LCRS.payer,");
			queryString.append(" LCRS.payer_role, LCRS.type, LCRS.periods, LCRS.paytime_start, LCRS.paytime_end, LCRS.ammount_p,");
			queryString.append(" LCRS.ammount_sum, LCRS.apply_date, LCRC.record_checkform_id, LCRC.checkform_id, LCRC.flowsub_id,");
			queryString.append(" LCRC.status, LCRC.modify_user_id, LCRC.modify_datetime,");
			queryString.append(" LCRS.apply_user_id, LCRS.apply_datetime, LCRC.mappingtable_id, LCRS.apply_user_name, LCRS.received_user_id");
			queryString.append(" FROM L_CEK_RECORD_SIGNED LCRS");
			queryString.append(" LEFT JOIN L_CEK_RECORD_CHECKFORM LCRC ON LCRS.signed_id = LCRC.mappingtable_id");
			queryString.append(" AND LCRC.modify_datetime = (");
			queryString.append(" SELECT MAX(modify_datetime) FROM L_CEK_RECORD_CHECKFORM");
			queryString.append(" WHERE LCRS.signed_id = mappingtable_id) WHERE 1 = 1");
			if(startDate != null && !startDate.equals("")){
				queryString.append(" and LCRS.apply_datetime >= '"+valuearr[0]+"'");
			}
			if(endDate != null && !endDate.equals("")){
				queryString.append(" and LCRS.apply_datetime < '"+valuearr[1]+"'");
			}
			if(applyUserId != null && !applyUserId.equals("")){
				queryString.append(" and LCRS.apply_user_id = '"+valuearr[2]+"'");
			}
			if(status != null && !status.equals("") && !status.equals("0")){
				queryString.append(" and LCRS.status = '"+valuearr[3]+"'");
			}
			log.debug("queryString = {}",queryString);
			List<Map<String, Object>> querylist=this.jdbcTemplate.queryForList(queryString.toString());

			List<LCekRecordCheckform> MapLCekRecordCheckform = new ArrayList<LCekRecordCheckform>();
			for (Map<?, ?> map : querylist) {
				LCekRecordCheckform LCekRecordCheckform = new LCekRecordCheckform();
				LCekRecordCheckform.setRecordCheckformId((String) map.get("record_checkform_id"));
				LCekRecordCheckform.setCheckformId((String) map.get("checkform_id"));
				LCekRecordCheckform.setFlowsubId((String) map.get("flowsub_id"));
//				LCekRecordCheckform.setCreateUserId((String) map.get("create_user_id"));
//				LCekRecordCheckform.setCreateDatetime((Date) map.get("create_datetime"));
				LCekRecordCheckform.setStatus((int) map.get("status"));
				LCekRecordCheckform.setModifyUserId((String) map.get("modify_user_id"));
				LCekRecordCheckform.setModifyDatetime((Date) map.get("modify_datetime"));
				LCekRecordCheckform.setApplyUserId((String) map.get("apply_user_id"));
				LCekRecordCheckform.setApplyUserName((String) map.get("apply_user_name"));
//				LCekRecordCheckform.setApplyDatetime((Date) map.get("apply_datetime"));
				LCekRecordCheckform.setMappingtableId((String) map.get("mappingtable_id"));
				LCekRecordCheckform.setReceivedUserId((String) map.get("received_user_id"));
				
				LCekRecordCheckform.setSignedId((String) map.get("signed_id"));
				LCekRecordCheckform.setCaseId((int) map.get("case_id"));
				LCekRecordCheckform.setBankName((String) map.get("bank_name"));
				LCekRecordCheckform.setProdName((String) map.get("prod_name"));
				LCekRecordCheckform.setPayer((String) map.get("payer"));
				LCekRecordCheckform.setPayerRole((String) map.get("payer_role"));
				LCekRecordCheckform.setType((String) map.get("type"));
				LCekRecordCheckform.setPeriods((int) map.get("periods"));
				LCekRecordCheckform.setPaytimeStart((Date) map.get("paytime_start"));
				LCekRecordCheckform.setPaytimeEnd((Date) map.get("paytime_end"));
				LCekRecordCheckform.setAmmountP((int) map.get("ammount_p"));
				LCekRecordCheckform.setAmmountSum((int) map.get("ammount_sum"));
				LCekRecordCheckform.setApplyDate((Date) map.get("apply_date"));
				MapLCekRecordCheckform.add(LCekRecordCheckform);
			}
			log.debug("findbyproperties end");
			return MapLCekRecordCheckform;
		}catch(Exception e){
			log.error("finding all LCekColumn error msg=>",e);
			return null;
		}
		
	}
	
	public List<LCekRecordFile> findbysignedId(String signedId) {
		log.debug("findbysignedId start");
		try{
			StringBuffer queryString=new StringBuffer("SELECT * FROM L_CEK_RECORD_FILE");
			queryString.append(" WHERE record_checkform_id in (");
			queryString.append(" SELECT record_checkform_id");
			queryString.append(" FROM (");
			queryString.append(" SELECT *,ROW_NUMBER() OVER (ORDER BY modify_datetime DESC) AS Rank");
			queryString.append(" FROM L_CEK_RECORD_CHECKFORM");
			queryString.append(" WHERE mappingtable_id = '" + signedId + "') t");
			queryString.append(" WHERE rank<>1 )");
			
			log.debug("queryString = {}",queryString);
			List<Map<String, Object>> querylist=this.jdbcTemplate.queryForList(queryString.toString());

			List<LCekRecordFile> MapLCekRecordFile = new ArrayList<LCekRecordFile>();
			for (Map<?, ?> map : querylist) {
				LCekRecordFile LCekRecordFile = new LCekRecordFile();
				LCekRecordFile.setRecordFileId((String) map.get("record_file_id"));
				LCekRecordFile.setFileId((String) map.get("file_id"));
				LCekRecordFile.setFileName((String) map.get("file_name"));
				LCekRecordFile.setFilePath((String) map.get("file_path"));
				LCekRecordFile.setModifyDatetime((Date) map.get("modify_datetime"));
				LCekRecordFile.setModifyUserId((String) map.get("modify_user_id"));
				LCekRecordFile.setRecordCheckformId((String) map.get("record_file_id"));
				MapLCekRecordFile.add(LCekRecordFile);
			}
			log.debug("findbysignedId end");
			return MapLCekRecordFile;
		}catch(Exception e){
			log.error("finding findbysignedId error msg=>",e);
			return null;
		}
		
	}
	
//	@SuppressWarnings("unchecked")
//	public List<LCekRecordCheckform> findbyproperties(String startDate,	String endDate, String applyUserId, String status) {
//		log.debug("findbyproperties start");
//		List<?> querylist = null;
//		try{
//			String[] valuearr = new String[4];
//			valuearr[0]= startDate;
//			valuearr[1]= endDate + " 23:59:59";
//			valuearr[2]=applyUserId;
//			valuearr[3]=status;
//			String queryString = "from LCekRecordCheckform lcrcf where  1=1";
//			if(startDate != null && !startDate.equals("")){
//				queryString += " and lcrcf.createDatetime >= '"+valuearr[0]+"'";
//			}
//			if(endDate != null && !endDate.equals("")){
//				queryString += " and lcrcf.createDatetime < '"+valuearr[1]+"'";
//			}
//			if(applyUserId != null && !applyUserId.equals("")){
//				queryString += " and lcrcf.applyUserId = '"+valuearr[2]+"'";
//			}
//			if(status != null && !status.equals("")){
//				queryString += " and lcrcf.status = '"+valuearr[3]+"'";
//			}
//			queryString += " order by lcrcf.createDatetime";
//			log.debug("queryString = {}", queryString);
//			querylist = super.getHibernateTemplate().find(queryString);
//			log.debug("findbyproperties end");
//			return (List<LCekRecordCheckform>) querylist;
//		}catch(Exception e){
//			log.error("findbyproperties error msg =>", e);
//			return null;
//		}
//	}
	
	public LCekSignedCaseInfo findCaseByCaseId(String caseId){
		log.debug("findCaseByCaseId start");
		List<Map<String, Object>> querylist = null;
		try{
			//LCekSignedCaseInfo 是View表，查詢SMART的TABLE，SMART案件的資料
			StringBuffer queryString = new StringBuffer("SELECT Case_ID, Bank_ID, Bank_name, Prod_Name,");
			queryString.append(" Bank_alias FROM V_SMART_CASEINFO lcsci where 1=1");
			if(caseId != null && !caseId.equals("")){
				queryString.append(" and lcsci.Case_ID = "+caseId);
			}
			log.debug("queryString = {}", queryString);
			querylist=this.jdbcTemplate.queryForList(queryString.toString());

			List<LCekSignedCaseInfo> MapLCekSignedCaseInfo = new ArrayList<LCekSignedCaseInfo>();
			for (Map<?, ?> map : querylist) {
				LCekSignedCaseInfo LCekSignedCaseInfo = new LCekSignedCaseInfo();
				LCekSignedCaseInfo.setCase_ID((int) map.get("Case_ID"));
				LCekSignedCaseInfo.setBank_ID((String) map.get("Bank_ID"));
				LCekSignedCaseInfo.setBank_name((String) map.get("Bank_name"));
				LCekSignedCaseInfo.setProd_Name((String) map.get("Prod_Name"));
				LCekSignedCaseInfo.setBank_alias((String) map.get("Bank_alias"));
				MapLCekSignedCaseInfo.add(LCekSignedCaseInfo);
			}
			
			//LCekSignedCaseInfo 是View表，查詢SMART的TABLE，SMART案件的資料
			queryString = new StringBuffer("SELECT Case_ID, Bank_ID, Bank_name, Prod_Name,");
			queryString.append(" Bank_alias FROM V_SMART_C_CASEINFO lcsci where 1=1");
			if(caseId != null && !caseId.equals("")){
				queryString.append(" and lcsci.Case_ID = "+caseId);
			}
			log.debug("queryString = {}", queryString);
			querylist=this.jdbcTemplate.queryForList(queryString.toString());

			for (Map<?, ?> map : querylist) {
				LCekSignedCaseInfo LCekSignedCaseInfo = new LCekSignedCaseInfo();
				LCekSignedCaseInfo.setCase_ID((int) map.get("Case_ID"));
				LCekSignedCaseInfo.setBank_ID((String) map.get("Bank_ID"));
				LCekSignedCaseInfo.setBank_name((String) map.get("Bank_name"));
				LCekSignedCaseInfo.setProd_Name((String) map.get("Prod_Name"));
				LCekSignedCaseInfo.setBank_alias((String) map.get("Bank_alias"));
				MapLCekSignedCaseInfo.add(LCekSignedCaseInfo);
			}
			log.debug("findCaseByCaseId end");
			if(MapLCekSignedCaseInfo.size() > 0){
				return (LCekSignedCaseInfo) MapLCekSignedCaseInfo.get(0);
			}else{
				return null;
			}
		}catch(Exception e){
			log.error("findCaseByCaseId error msg =>", e);
			return null;
		}
	}
	
	public List<LCekSignedRelaInfo> findRelaByCaseId(String caseId){
		log.debug("findRelaByCaseId start");
		List<Map<String, Object>> querylist = null;
		try{
			//LCekSignedRelaInfo 是View表，查詢SMART的TABLE，SMART操作按F8跳出的相關人
			StringBuffer queryString=new StringBuffer("select row_number() over(order by lcsri.Case_ID ASC) AS Row_ID,");
			queryString.append(" lcsri.Case_ID,lcsri.Name,lcsri.ID,lcsri.Rela_kind");
			queryString.append(" from V_SMART_RELAINFO lcsri where  1=1");
			if(caseId != null && !caseId.equals("")){
				queryString.append(" and lcsri.Case_ID = "+caseId);
			}
			log.debug("queryString = {}", queryString);
			
			querylist=this.jdbcTemplate.queryForList(queryString.toString());

			List<LCekSignedRelaInfo> MapLCekSignedRelaInfo = new ArrayList<LCekSignedRelaInfo>();
			for (Map<?, ?> map : querylist) {
				LCekSignedRelaInfo LCekSignedRelaInfo = new LCekSignedRelaInfo();
				LCekSignedRelaInfo.setRow_ID((Long) map.get("Row_ID"));
				LCekSignedRelaInfo.setCase_ID((int) map.get("Case_ID"));
				LCekSignedRelaInfo.setName((String) map.get("Name"));
				LCekSignedRelaInfo.setID((String) map.get("ID"));
				LCekSignedRelaInfo.setRela_kind((String) map.get("Rela_kind"));
				MapLCekSignedRelaInfo.add(LCekSignedRelaInfo);
			}
			
			//LCekSignedRelaInfo 是View表，查詢SMART的TABLE，SMART操作按F8跳出的相關人
			queryString=new StringBuffer("select row_number() over(order by lcsri.Case_ID ASC) AS Row_ID,");
			queryString.append(" lcsri.Case_ID,lcsri.Name,lcsri.ID,lcsri.Rela_kind");
			queryString.append(" from V_SMART_C_RELAINFO lcsri where  1=1");
			if(caseId != null && !caseId.equals("")){
				queryString.append(" and lcsri.Case_ID = "+caseId);
			}
			log.debug("queryString = {}", queryString);
			
			querylist=this.jdbcTemplate.queryForList(queryString.toString());

			for (Map<?, ?> map : querylist) {
				LCekSignedRelaInfo LCekSignedRelaInfo = new LCekSignedRelaInfo();
				LCekSignedRelaInfo.setRow_ID((Long) map.get("Row_ID"));
				LCekSignedRelaInfo.setCase_ID((int) map.get("Case_ID"));
				LCekSignedRelaInfo.setName((String) map.get("Name"));
				LCekSignedRelaInfo.setID((String) map.get("ID"));
				LCekSignedRelaInfo.setRela_kind((String) map.get("Rela_kind"));
				MapLCekSignedRelaInfo.add(LCekSignedRelaInfo);
			}
			log.debug("findRelaByCaseId end");
			return   MapLCekSignedRelaInfo;
		}catch(Exception e){
			log.error("findRelaByCaseId error msg =>", e);
			return null;
		}
	}
	
	public boolean save(LCekRecordSigned transientInstance) {
		log.debug("saving LCekRecordSigned instance");
		boolean flag = false;
		try {
			Serializable lizable=super.getHibernateTemplate().save(transientInstance);
			if(null!=lizable||!"".equals(lizable)){
				flag=true;
			}
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save error =>", re);
			throw re;
		}
		return flag;
	}
	
	public boolean merge(LCekRecordSigned transientInstance) {
		log.debug("merge LCekRecordSigned instance");
		boolean flag = false;
		try {
			Serializable lizable=super.getHibernateTemplate().merge(transientInstance);
			if(null!=lizable||!"".equals(lizable)){
				flag=true;
			}
			log.debug("merge successful");
		} catch (RuntimeException re) {
			log.error("merge error =>", re);
			throw re;
		}
		return flag;
	}
	public boolean save(LCekRecordCheckform transientInstance) {
		log.debug("saving LCekRecordCheckform instance");
		boolean flag = false;
		try {
			Serializable lizable=super.getHibernateTemplate().save(transientInstance);
			if(null!=lizable||!"".equals(lizable)){
				flag=true;
			}
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save error =>", re);
			throw re;
		}
		return flag;
	}
	
	public boolean save(LCekRecordSignedStep transientInstance) {
		log.debug("saving LCekRecordSignedStep instance");
		boolean flag = false;
		try {
			Serializable lizable=super.getHibernateTemplate().save(transientInstance);
			if(null!=lizable||!"".equals(lizable)){
				flag=true;
			}
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save error =>", re);
			throw re;
		}
		return flag;
	}
	
	public LCekRecordSigned findRecordSignedById(String SignedId){
		log.debug("findRecordSignedById start");
		try{
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from LCekRecordSigned lcrs where lcrs.signedId = '" + SignedId + "'";
	                query = session.createQuery(hql);
	                if(query.list().size() > 0){
	                	return query.list().get(0);
	                }else
	                {
	                	return null;
	                }
	            }
	        });
			log.debug("findRecordSignedById end");
	        return (LCekRecordSigned)execute;
		}catch(Exception e){
			log.error("findRecordSignedById error ==>",e);
			return null;
		}
	}
	
	public LCekRecordSignedStep findRecordSignedStepById(String SignedId){
		log.debug("findRecordSignedStepById start");
		try{
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from LCekRecordSignedStep lcrss where lcrss.signedId = '" + SignedId + "'";
	                query = session.createQuery(hql);
	                if(query.list().size() > 0){
	                	return query.list().get(0);
	                }else
	                {
	                	return null;
	                }
	            }
	        });
			log.debug("findRecordSignedById end");
	        return (LCekRecordSignedStep)execute;
		}catch(Exception e){
			log.error("findRecordSignedById error ==>",e);
			return null;
		}
	}
	
	public boolean saveRecordFile(LCekRecordFile transientInstance){
		log.debug("saving LCekRecordFile instance");
		boolean flag = false;
		try {
			Serializable lizable=super.getHibernateTemplate().save(transientInstance);
			if(null!=lizable||!"".equals(lizable)){
				flag=true;
			}
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save error =>", re);
			throw re;
		}
		return flag;
	}
	
	public List<LCekSignedCaseInfo> findCaseByproperties(String caseId, String debtorName, 
			String debtorId, String docNo, String legalCaseId, boolean isCheck){
		log.debug("findCaseByproperties start");
		try{	
			boolean hasInputValue = false;
			
			StringBuffer queryString = new StringBuffer("SELECT TOP 1000 VSC.Bank_alias, VSC.Prod_Name,");
			queryString.append(" VSC.Case_ID, VSR.Name, VSR.ID, VSC.PriDebt_amount, VSC.ctCase_d, VSC.O_or_C");
			queryString.append(" FROM V_SMART_RELAINFO VSR");
			queryString.append(" LEFT JOIN V_SMART_CASEINFO VSC ON VSR.Case_ID = VSC.Case_ID");
			queryString.append(" WHERE VSR.Rela_kind = '本人'");
			if(caseId != null && !caseId.equals("")){
				queryString.append(" AND VSC.Case_ID = '"+caseId+"'");
				hasInputValue = true;
			}
			if(debtorName != null && !debtorName.equals("")){
				queryString.append(" AND VSR.Name like '%"+debtorName+"%'");
				hasInputValue = true;
			}
			if(debtorId != null && !debtorId.equals("")){
				queryString.append(" AND VSR.ID = '"+debtorId+"'");
				hasInputValue = true;
			}
			// TODO add By Jia 2017-05-11 下面兩項代號系統還沒有，還不行使用，之後記得加上去
//			if(docNo != null && !docNo.equals("")){
//				queryString.append(" and VSC.Case_ID = '"+docNo+"'");
//			}
//			if(legalCaseId != null && !legalCaseId.equals("")){
//				queryString.append(" and VSC.Case_ID = '"+legalCaseId+"'");
//			}
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
				MapLCekSignedCaseInfo.add(LCekSignedCaseInfo);
			}
			log.debug("findCaseByproperties end");
			return MapLCekSignedCaseInfo;
		}catch(Exception e){
			log.error("findCaseByproperties error msg =>", e);
			return null;
		}

	}
	
	public boolean saveRecordOtherfile(LCekRecordOtherfile transientInstance){
		log.debug("saving LCekRecordOtherfile instance");
		boolean flag = false;
		try {
			Serializable lizable=super.getHibernateTemplate().merge(transientInstance);
			if(null!=lizable||!"".equals(lizable)){
				flag=true;
			}
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save error =>", re);
			throw re;
		}
		return flag;
	}
	
	public boolean insertCaseNote(int caseId,String notes) {
		log.debug("updateRemoveColumns start");
		boolean flag = false;
		try{
			StringBuffer queryString=new StringBuffer("INSERT INTO O_CaseNotes (");
			queryString.append(" Case_ID,Record_class,Record_type,");
			queryString.append(" Record_notes,Record_ip,Record_dt,Record_er,");
			queryString.append(" Record_way,Record_notifier,Record_notify) VALUES");
			queryString.append("(" + caseId + ",'Legal','NOTE','" + notes + "','LegalHost',");
			queryString.append(" GETDATE(),'LegalSYS',NULL,NULL,NULL);");
			this.SMARTjdbcTemplate.execute(queryString.toString());
			log.debug("queryString = {}",queryString);
			flag = true;
		}catch(Exception e){
			flag = false;
			log.error("updateRemoveColumns error msg==>",e);
		}
		return flag;
	}
	
	@SuppressWarnings("unchecked")
	public List<LCekRecordOtherfile> findSelectedOtherFiles(String signedId){
		log.debug("findLCekRecordOtherfileById start");
		try{
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from LCekRecordOtherfile lcrof where lcrof.signedId = '" + signedId + "'";
	                query = session.createQuery(hql);
	                return query.list();
	            }
	        });
			log.debug("findLCekRecordOtherfileById end");
	        return (List<LCekRecordOtherfile>)execute;
		}catch(Exception e){
			log.error("findLCekRecordOtherfileById error ==>",e);
			return null;
		}
	}
}
