package com.myjs.cek.checkform.Dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;

import com.myjs.cek.checkform.model.LCekCheckformColumn;
import com.myjs.commons.DaoUtil;

public class checkformColumnDaoImpl extends DaoUtil implements checkformColumnDao{
	private static final Logger log = LogManager.getLogger(checkformColumnDaoImpl.class);

	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public List<Map<String, Object>> findThisCheckformColumn(String checkformId) {
		log.debug("finding all LCekColumn start");
		try{
			StringBuffer queryString=new StringBuffer("SELECT column_id,column_name,MAX(checkform_column_id) AS 'checkform_column_id',MAX(is_delete) AS 'is_delete'");
			queryString.append(" FROM (");
			queryString.append(" SELECT LCC.column_id,LCC.column_name,LCCC.checkform_column_id,LCCC.is_delete");
			queryString.append(" FROM L_CEK_COLUMN LCC,L_CEK_CHECKFORM_COLUMN LCCC");
			queryString.append(" WHERE LCC.column_id = LCCC.column_id");
			queryString.append(" AND checkform_id = '" + checkformId + "'");
			queryString.append(" UNION SELECT LCC.column_id,LCC.column_name,NULL,NULL");
			queryString.append(" FROM L_CEK_COLUMN LCC ) C");
			queryString.append(" GROUP BY column_id,column_name");
			log.debug("queryString = {}",queryString);
			List<Map<String, Object>> columnList=this.jdbcTemplate.queryForList(queryString.toString());
			return columnList;
		}catch(Exception e){
			log.error("finding all LCekColumn error msg=>",e);
			return null;
		}
    }
	
	public boolean saveOrUpdate(LCekCheckformColumn transientInstance) {
		log.debug("saving LCekCheckformColumn instance");
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

	public boolean updateRemoveColumns(String removeColumnsIds,String checkformId) {
		log.debug("updateRemoveColumns start");
		boolean flag = false;
		try{
			StringBuffer queryString=new StringBuffer("UPDATE L_CEK_CHECKFORM_COLUMN");
			queryString.append(" SET is_delete = 'Y'");
			queryString.append(" WHERE checkform_id = '"+checkformId + "'");
			queryString.append(" AND column_id in (");
			queryString.append(removeColumnsIds);
			queryString.append(")");
			int i = this.jdbcTemplate.update(queryString.toString());
			log.debug("queryString = {}",queryString);
			log.debug("i = {}",i);
			flag = true;
		}catch(Exception e){
			flag = false;
			log.error("updateRemoveColumns error msg==>",e);
		}
		return flag;
	}
}
