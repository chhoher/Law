package com.myjs.sys.user.Dao;

import java.io.Serializable;
import java.util.ArrayList;
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
	public List<LSysRole> findbyproperties(String roleCode, String roleName) throws Exception{
		log.debug("findbyproperties start");
		List<?> querylist = null;
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
	}
	
	public boolean save(LSysRole transientInstance) throws Exception {
		log.debug("saving LSysRole instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean save(LSysRoleFunction transientInstance) throws Exception {
		log.debug("saving LSysRoleFunction instance");
		boolean flag = false;
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
		return flag;
	}
	
	public boolean updateroleFunctionForJDBCTemplate(String roleId) throws Exception{
		log.debug("=====updateroleFunctionForJDBCTemplate start=====");
		StringBuffer deleteString = new StringBuffer("UPDATE L_SYS_ROLE_FUNCTION");
		deleteString.append(" SET is_delete = 'Y' WHERE");
		deleteString.append(" role_id = '" + roleId + "'");
		this.jdbcTemplate.execute(deleteString.toString());
		
		return true;
	}
	
	public boolean updateroleFunctionForRoleFunctioneIds(String roleFunctionIds) throws Exception{
		log.debug("=====updateroleFunctionForRoleFunctioneIds start=====");
		StringBuffer deleteString = new StringBuffer("UPDATE L_SYS_ROLE_FUNCTION");
		deleteString.append(" SET is_delete = 'N' WHERE");
		deleteString.append(" role_function_id in (" + roleFunctionIds + ")");
		this.jdbcTemplate.execute(deleteString.toString());
		
		return true;
	
	}
	
	@SuppressWarnings("unchecked")
	public List<LSysRoleFunction> findRoleFunctionByRoleId(String roleId) throws Exception{
		log.debug("finding all LSysRoleFunction start");
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
    }
	
	public List<String> findRolesByUserId(String userId) throws Exception{
		log.debug("=====findRolesByUserId start=====");
		StringBuffer queryString = new StringBuffer("SELECT role_id FROM");
		queryString.append(" L_SYS_USER_ROLE WHERE");
		queryString.append(" user_id = '" + userId + "' AND is_delete = 'N'");
		
		List<String> roleIds = new ArrayList<String>();
		List<Map<String, Object>> queryObject = this.jdbcTemplate.queryForList(queryString.toString());
		for(Map<String, Object> map:queryObject){
			roleIds.add((String) map.get("role_id"));
		}
		return roleIds;
	}
}
