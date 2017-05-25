package com.myjs.sys.user.Dao;

import java.io.Serializable;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.commons.DaoUtil;
import com.myjs.sys.user.model.LSysRole;

public class roleDaoImpl extends DaoUtil  implements roleDao{
	private static final Logger log = LogManager.getLogger(roleDaoImpl.class);

	@SuppressWarnings("unchecked")
	public List<LSysRole> findbyproperties(String roleCode, String roleName){
		log.debug("findbyproperties start");
		List<?> querylist = null;
		try{
			String[] valuearr = new String[2];
			valuearr[0]="%" + roleCode + "%";
			valuearr[1]="%" + roleName + "%";
			String queryString = "from LSysRole lsr where  1=1";
			if(roleCode != null && !roleCode.equals("")){
				queryString += " and lsr.roleCode like '"+valuearr[0]+"'";
			}
			if(roleName != null && !roleName.equals("")){
				queryString += " and lsr.roleName like '"+valuearr[1]+"'";
			}
			log.debug("queryString = {}", queryString);
			querylist = super.getHibernateTemplate().find(queryString);
			log.debug("findbyproperties end");
			return (List<LSysRole>) querylist;
		}catch(Exception e){
			log.error("findbyproperties error msg =>", e);
			return null;
		}
	}
	
	public boolean save(LSysRole transientInstance) {
		log.debug("saving LSysRole instance");
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
}
