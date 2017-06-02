package com.myjs.sys.user.Dao;

import java.io.Serializable;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate5.HibernateCallback;

import com.myjs.commons.DaoUtil;
import com.myjs.sys.module.model.LSysRoleFunction;
import com.myjs.sys.user.model.LSysRole;

public class roleDaoImpl extends DaoUtil  implements roleDao{
	
	private static final Logger log = LogManager.getLogger(roleDaoImpl.class);

	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
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
	
	public boolean save(LSysRoleFunction transientInstance) {
		log.debug("saving LSysRoleFunction instance");
		boolean flag = false;
		try {
			log.debug("LSysRoleFunction info");
			log.debug("role_function_id = {}",transientInstance.getRoleFunctionId());
			log.debug("role_id = {}",transientInstance.getRoleId());
			log.debug("function_id = {}",transientInstance.getFunctionId());
			log.debug("is_delete = {}",transientInstance.getIsDelete());
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
	
	public boolean updateroleFunctionForJDBCTemplate(String roleId){
		try{
			log.debug("=====updateroleFunctionForJDBCTemplate start=====");
			StringBuffer deleteString = new StringBuffer("UPDATE L_SYS_ROLE_FUNCTION");
			deleteString.append(" SET is_delete = 'Y' WHERE");
			deleteString.append(" role_id = '" + roleId + "'");
			this.jdbcTemplate.execute(deleteString.toString());
			
			return true;
		}catch(Exception e){
			log.error("updateroleFunctionForJDBCTemplate error msg ==>", e);
			return false;
		}
	}
	
	public boolean updateroleFunctionForRoleFunctioneIds(String roleFunctionIds){
		try{
			log.debug("=====updateroleFunctionForRoleFunctioneIds start=====");
			StringBuffer deleteString = new StringBuffer("UPDATE L_SYS_ROLE_FUNCTION");
			deleteString.append(" SET is_delete = 'N' WHERE");
			deleteString.append(" role_function_id in (" + roleFunctionIds + ")");
			this.jdbcTemplate.execute(deleteString.toString());
			
			return true;
		}catch(Exception e){
			log.error("updateroleFunctionForRoleFunctioneIds error msg ==>", e);
			return false;
		}
	
	}
	
	@SuppressWarnings("unchecked")
	public List<LSysRoleFunction> findRoleFunctionByRoleId(String roleId){
		log.debug("finding all LSysRoleFunction start");
		try{
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from LSysRoleFunction lsrf where lsrf.roleId = '" + roleId + "'";
	                query = session.createQuery(hql);
	                return query.list();
	            }
	        });
			log.debug("finding all LSysRoleFunction end");
	        return (List<LSysRoleFunction>)execute;
		}catch(Exception e){
			log.error("finding all LSysRoleFunction error msg=>",e);
			return null;
		}
    }
}
