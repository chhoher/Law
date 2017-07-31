package com.myjs.sys.module.Dao;

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
import com.myjs.sys.module.model.LSysMenu;
import com.myjs.sys.module.model.State;

public class menuDaoImpl extends DaoUtil implements menuDao{
	private static final Logger log = LogManager.getLogger(menuDaoImpl.class);
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@SuppressWarnings("unchecked")
	public List<LSysMenu> findAll() throws Exception {
		log.debug("finding all LSysMenu start");
        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
            public Object doInHibernate(Session session) throws HibernateException{
                Query<?> query = null;
                String hql = "from LSysMenu lsm where lsm.menuPid is not null order by lsm.menuId";
                query = session.createQuery(hql);
                return query.list();
            }
        });
		log.debug("finding all LSysMenu end");
        return (List<LSysMenu>)execute;
    }
	
	@SuppressWarnings("unchecked")
	public List<LSysMenu> findAllNotSelectedmodule(String moduleId) throws Exception{
		log.debug("finding all LSysMenu start");
        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
            public Object doInHibernate(Session session) throws HibernateException{
                Query<?> query = null;
                String hql = "from LSysMenu lsm where lsm.menuPid is not null and lsm.moduleId <> '" + moduleId + "'";
                query = session.createQuery(hql);
                return query.list();
            }
        });
		log.debug("finding all LSysMenu end");
        return (List<LSysMenu>)execute;
    }
	
	public boolean save(LSysMenu transientInstance) throws Exception {
		log.debug("saving LSysMenu instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public LSysMenu findById(String Id) throws Exception{
		log.debug("findById start");
        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
            public Object doInHibernate(Session session) throws HibernateException{
                Query<?> query = null;
                String hql = "from LSysMenu lsm where lsm.menuId = '" + Id + "'";
                query = session.createQuery(hql);
                if(query.list().size() > 0){
                	return query.list().get(0);
                }else
                {
                	return null;
                }
            }
        });
		log.debug("findById end");
        return (LSysMenu)execute;
	}
	
	public LSysMenu findBymoduleId(String Id) throws Exception{
		log.debug("findBymoduleId start");
		StringBuffer queryString = new StringBuffer("SELECT LSM.menu_id,LSM.menu_pid,");
		queryString.append(" LSM.module_id,PLSM.menu_id   AS Pmenu_id,");
		queryString.append(" PLSM.menu_name AS Pmenu_name");
		queryString.append(" FROM L_SYS_MENU LSM");
		queryString.append(" LEFT JOIN L_SYS_MENU PLSM");
		queryString.append(" ON LSM.menu_pid = PLSM.menu_id");
		queryString.append(" WHERE LSM.module_id='" + Id + "'");
		log.debug("queryString = {}", queryString);
		
		Map<String, Object> queryObject = this.jdbcTemplate.queryForMap(queryString.toString());
		
		LSysMenu LSysMenu = new LSysMenu();
		LSysMenu.setMenuId((String) queryObject.get("menu_id"));
		LSysMenu.setMenuPid((String) queryObject.get("menu_pid"));
		LSysMenu.setModuleId((String) queryObject.get("module_id"));
		LSysMenu.setMenuPname((String) queryObject.get("Pmenu_name"));
		
		log.debug("findBymoduleId end");
        return LSysMenu;
	}
	
	public boolean savePid(String moduleId, String menuPid) throws Exception{
		log.debug("savePid start");
		boolean flag = false;
		String Pid;
		
		if(menuPid != null && !menuPid.equals("")){
			Pid = "'" + menuPid + "'";
		}else{
			Pid = null;
		}
		
		StringBuffer queryString=new StringBuffer("UPDATE L_SYS_MENU");
		queryString.append(" SET menu_pid = " + Pid );
		queryString.append(" WHERE module_id = '"+moduleId + "'");
		int i = this.jdbcTemplate.update(queryString.toString());
		log.debug("queryString = {}",queryString);
		log.debug("i = {}",i);
		flag = true;
		return flag;
	}
	
	public List<LSysMenu> findAllMenuByRoleIds(String roleIds) throws Exception{
		log.debug("findAllMenuByRoleIds start");
		StringBuffer queryString = new StringBuffer("SELECT LSM.menu_id,LSM.menu_pid,LSM.menu_url,");
		queryString.append(" LSF.module_id,LSM.menu_name,LSF.function_id,LSRF.is_delete,LSM.is_node,LSM.is_show");
		queryString.append(" FROM L_SYS_MENU LSM");
		queryString.append(" LEFT JOIN L_SYS_FUNCTION LSF ON");
		queryString.append(" LSM.module_id = LSF.module_id");
		queryString.append(" LEFT JOIN (");
		queryString.append(" SELECT LSRF.function_id,LSRF.is_delete");
		queryString.append(" FROM L_SYS_ROLE_FUNCTION LSRF");
		queryString.append(" WHERE LSRF.role_id IN (" + roleIds + ")");
		queryString.append(" AND is_delete = 'N') LSRF ON");
		queryString.append(" LSF.function_id = LSRF.function_id");
		queryString.append(" GROUP BY menu_id,menu_pid,LSF.module_id,menu_name,");
		queryString.append(" LSF.function_id,LSRF.is_delete,LSM.menu_url,LSM.is_node,LSM.is_show");
		log.debug("queryString = {}", queryString);
		
		List<Map<String, Object>> queryObject = this.jdbcTemplate.queryForList(queryString.toString());
		List<LSysMenu> LSysMenuList = new ArrayList<LSysMenu>();
		for (Map<?, ?> map : queryObject) {
			LSysMenu LSysMenu = new LSysMenu();
			LSysMenu.setMenuId((String) map.get("menu_id"));
			LSysMenu.setMenuPid((String) map.get("menu_pid"));
			LSysMenu.setModuleId((String) map.get("module_id"));
			LSysMenu.setMenuName((String) map.get("menu_name"));
			LSysMenu.setMenuUrl((String) map.get("menu_url"));
			LSysMenu.setIsShow((String) map.get("is_show"));
			if(map.get("is_delete") != null){
				LSysMenu.setFunctionIsDelete((String) map.get("is_delete"));
			}
			if(map.get("is_node") != null){
				LSysMenu.setIsNode((String) map.get("is_node"));
			}
			LSysMenuList.add(LSysMenu);
		}
		
		log.debug("findAllMenuByRoleIds end");
        return LSysMenuList;
    }
	
	public List<LSysMenu> findAllMenuByRoleId(String roleId) throws Exception{
		log.debug("findAllMenuByRoleIds start");
		StringBuffer queryString = new StringBuffer("SELECT LSM.menu_id,");
		queryString.append(" LSM.menu_pid,LSF.module_id,LSM.menu_name,LSF.function_id,LSRF.is_delete,LSRF.role_function_id,");
		queryString.append(" CASE WHEN (LSRF.is_delete IS NULL AND menu_id <> 'ROOT')");
		queryString.append(" THEN 'N' ELSE 'Y' END AS in_role_function");
		queryString.append(" FROM L_SYS_MENU LSM");
		queryString.append(" LEFT JOIN L_SYS_FUNCTION LSF");
		queryString.append(" ON LSM.module_id = LSF.module_id");
		queryString.append(" LEFT JOIN (");
		queryString.append(" SELECT LSRF.role_function_id,LSRF.function_id,LSRF.is_delete");
		queryString.append(" FROM L_SYS_ROLE_FUNCTION LSRF");
		queryString.append(" WHERE LSRF.role_id = '" + roleId + "') LSRF");
		queryString.append(" ON LSF.function_id = LSRF.function_id");
		log.debug("queryString = {}", queryString);
		
		List<Map<String, Object>> queryObject = this.jdbcTemplate.queryForList(queryString.toString());
		List<LSysMenu> LSysMenuList = new ArrayList<LSysMenu>();
		for (Map<?, ?> map : queryObject) {
			LSysMenu LSysMenu = new LSysMenu();
			LSysMenu.setMenuId((String) map.get("menu_id"));
			LSysMenu.setMenuPid((String) map.get("menu_pid"));
			LSysMenu.setModuleId((String) map.get("module_id"));
			LSysMenu.setMenuName((String) map.get("menu_name"));
			LSysMenu.setFunctionId((String) map.get("function_id"));
			
			if(((String) map.get("in_role_function")).equals("Y")){
					if(map.get("is_delete") != null && ((String) map.get("is_delete")).equals("N")){
						State status = new State();
						status.setSelected(true);
						LSysMenu.setState(status);
					}
					LSysMenu.setRoleFunctionId((map.get("role_function_id")!= null)?(String)map.get("role_function_id"):null);
			}
			
			LSysMenuList.add(LSysMenu);
		}
		
		log.debug("findAllMenuByRoleId end");
        return LSysMenuList;
    }
	
}
