package com.myjs.sys.file.Dao;

import java.io.Serializable;
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
import com.myjs.sys.file.model.LSysFile;

public class fileDaoImpl extends DaoUtil implements fileDao{
	private static final Logger log = LogManager.getLogger(fileDaoImpl.class);
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	@SuppressWarnings("unchecked")
	public List<LSysFile> findAll() throws Exception {
		log.debug("finding all LSysFile start");
        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
            public Object doInHibernate(Session session) throws HibernateException{
                Query<?> query = null;
                String hql = "from LSysFile lsf";
                query = session.createQuery(hql);
                return query.list();
            }
        });
		log.debug("finding all LSysFile end");
        return (List<LSysFile>)execute;
    }
	
	@SuppressWarnings("unchecked")
	public List<LSysFile> findbyproperties(String fileName) throws Exception{
		log.debug("findbyproperties start");
		List<?> querylist = null;
		String[] valuearr = new String[1];
		valuearr[0]="%" + fileName + "%";
		String queryString = "from LSysFile lsf where  1=1";
		if(fileName != null && !fileName.equals("")){
			queryString += " and lsf.fileName like '"+valuearr[0]+"'";
		}
		log.debug("queryString = {}", queryString);
		querylist = super.getHibernateTemplate().find(queryString);
		log.debug("findbyproperties end");
		return (List<LSysFile>) querylist;
	}
	

	public boolean save(LSysFile transientInstance) throws Exception {
		log.debug("saving LSysFile instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean delete(LSysFile transientInstance) throws Exception{
		log.debug("LSysFile delete start ");
		boolean flag;
		super.getHibernateTemplate().delete(transientInstance);
		flag = true;
		return flag;
	}
	
	public List<Map<String, Object>> findfilePathByTypes(String fileTypeOne, String fileTypeTwo) throws Exception{
		List<Map<String, Object>> fileList = null;
		StringBuffer queryString=new StringBuffer("SELECT DISTINCT LSF.* FROM L_SYS_FILE LSF");
		queryString.append(" LEFT JOIN ( SELECT variable_id,variable_name FROM L_SYS_VARIABLE");
		queryString.append(" WHERE variable_type = '8aa2e72a5b23004b015b2355d0d9000a')LSV");
		queryString.append(" ON LSV.variable_id = LSF.file_type LEFT JOIN (");
		queryString.append(" SELECT variable_id,variable_name FROM L_SYS_VARIABLE");
		queryString.append(" WHERE variable_type = '8aa2e72a5b9e7105015b9e87f4580005')LSV2 ON LSV2.variable_id = LSF.file_type2");
		queryString.append(" WHERE LSV.variable_name = '" + fileTypeOne + "' and  LSV2.variable_name = '" + fileTypeTwo + "'");
		log.debug("findfilePathByTypes queryString = {}",queryString);
		fileList=this.jdbcTemplate.queryForList(queryString.toString());
		return fileList;
	}
	
	public List<Map<String, Object>> findfilePathBySignedId(String signedId) throws Exception{

		List<Map<String, Object>> fileList = null;
		StringBuffer queryString=new StringBuffer("SELECT record_file_id, file_name,file_path");
		queryString.append(" FROM L_CEK_RECORD_FILE LCRF");
		queryString.append(" RIGHT JOIN L_CEK_RECORD_CHECKFORM LCRC");
		queryString.append(" ON LCRF.record_checkform_id = LCRC.record_checkform_id");
		queryString.append(" WHERE mappingtable_id = '" + signedId + "'");
		queryString.append(" AND LCRF.modify_datetime = (");
		queryString.append(" SELECT MAX(modify_datetime)");
		queryString.append(" FROM L_CEK_RECORD_FILE )");
		log.debug("findfilePathByTypes queryString = {}",queryString);
		fileList=this.jdbcTemplate.queryForList(queryString.toString());
		return fileList;
	}
	
	public List<Map<String, Object>> findSelectOtherFileBySignedId(String signedId) throws Exception{

		List<Map<String, Object>> fileList = null;
		StringBuffer queryString=new StringBuffer("SELECT signed_id, file_name, Isselected");
		queryString.append(" FROM L_CEK_RECORD_OTHERFILE LCRO");
		queryString.append(" WHERE LCRO.signed_id = '" + signedId + "'");
		log.debug("findSelectOtherFileBySignedId queryString = {}",queryString);
		fileList=this.jdbcTemplate.queryForList(queryString.toString());
		return fileList;
	}
}
