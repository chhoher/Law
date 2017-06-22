package com.myjs.sys.module.Dao;

import java.io.Serializable;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;

import com.myjs.commons.DaoUtil;
import com.myjs.sys.module.model.LSysModule;

public class moduleDaoImpl extends DaoUtil implements moduleDao{
	private static final Logger log = LogManager.getLogger(moduleDaoImpl.class);

	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@SuppressWarnings("unchecked")
	public List<LSysModule> findbyproperties(String moduleName) throws Exception{
		log.debug("findbyproperties start");
		List<?> querylist = null;
		String[] valuearr = new String[1];
		valuearr[0]="%" + moduleName + "%";
		String queryString = "from LSysModule lsf where  1=1";
		if(moduleName != null && !moduleName.equals("")){
			queryString += " and lsf.functionName like '"+valuearr[0]+"'";
		}
		log.debug("queryString = {}", queryString);
		querylist = super.getHibernateTemplate().find(queryString);
		log.debug("findbyproperties end");
		return (List<LSysModule>) querylist;
	}

	public boolean save(LSysModule transientInstance) throws Exception {
		log.debug("saving LSysModule instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
}
