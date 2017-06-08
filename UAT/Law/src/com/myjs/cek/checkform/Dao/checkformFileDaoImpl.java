package com.myjs.cek.checkform.Dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;

import com.myjs.cek.checkform.model.LCekCheckformFile;
import com.myjs.commons.DaoUtil;

public class checkformFileDaoImpl extends DaoUtil implements checkformFileDao{
	private static final Logger log = LogManager.getLogger(checkformFileDaoImpl.class);

	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public List<Map<String, Object>> findThisCheckformFile(String checkformId) {
		log.debug("finding all LCekFile start");
		try{
			StringBuffer queryString=new StringBuffer("SELECT file_id,file_name,MAX(checkform_file_id) AS 'checkform_file_id',MAX(is_delete) AS 'is_delete'");
			queryString.append(" FROM (SELECT LSF.file_id,LSF.file_name,LCCF.checkform_file_id,LCCF.is_delete");
			queryString.append(" FROM L_SYS_FILE LSF,L_CEK_CHECKFORM_FILE LCCF");
			queryString.append(" WHERE LSF.file_id = LCCF.file_id AND checkform_id = '" + checkformId + "'");
			queryString.append(" UNION SELECT LSF.file_id,LSF.file_name,NULL,NULL");
			queryString.append(" FROM L_SYS_FILE LSF ) C");
			queryString.append(" GROUP BY file_id,file_name");
			log.debug("queryString = {}",queryString);
			List<Map<String, Object>> fileList=this.jdbcTemplate.queryForList(queryString.toString());
			return fileList;
		}catch(Exception e){
			log.error("finding all LCekFile error msg=>",e);
			return null;
		}
    }
	
	public boolean saveOrUpdate(LCekCheckformFile transientInstance) {
		log.debug("saving LCekCheckformFile instance");
		boolean flag = false;
		try {
			super.getHibernateTemplate().saveOrUpdate(transientInstance);
			flag=true;
			log.debug("save successful");
		} catch (Exception re) {
			flag = false;
			log.error("save error =>", re);
			throw re;
		}
		return flag;
	}

	public boolean updateRemoveFiles(String removeFileIds,String checkformId) {
		log.debug("updateRemoveFiles start");
		boolean flag = false;
		try{
			StringBuffer queryString=new StringBuffer("UPDATE L_CEK_CHECKFORM_FILE");
			queryString.append(" SET is_delete = 'Y'");
			queryString.append(" WHERE checkform_id = '"+checkformId + "'");
			queryString.append(" AND file_id in (");
			queryString.append(removeFileIds);
			queryString.append(")");
			int i = this.jdbcTemplate.update(queryString.toString());
			log.debug("queryString = {}",queryString);
			log.debug("i = {}",i);
			flag = true;
		}catch(Exception e){
			flag = false;
			log.error("updateRemoveFiles error msg==>",e);
		}
		return flag;
	}
}
