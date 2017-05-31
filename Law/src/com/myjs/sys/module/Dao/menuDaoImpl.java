package com.myjs.sys.module.Dao;

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
import com.myjs.sys.module.model.LSysMenu;

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
	public List<LSysMenu> findAll() {
		log.debug("finding all LSysMenu start");
		try{
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
		}catch(Exception e){
			log.error("finding all LSysMenu error msg=>",e);
			return null;
		}
    }
	
	@SuppressWarnings("unchecked")
	public List<LSysMenu> findAllNotSelectedmodule(String moduleId){
		log.debug("finding all LSysMenu start");
		try{
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
		}catch(Exception e){
			log.error("finding all LSysMenu error msg=>",e);
			return null;
		}
    }
	
	public boolean save(LSysMenu transientInstance) {
		log.debug("saving LSysMenu instance");
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
	
	public LSysMenu findById(String Id){
		log.debug("findById start");
		try{
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
		}catch(Exception e){
			log.error("findById error ==>",e);
			return null;
		}
	}
	
	public LSysMenu findBymoduleId(String Id){
		log.debug("findBymoduleId start");
		try{
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
		}catch(Exception e){
			log.error("findBymoduleId error ==>",e);
			return null;
		}
	}
	
	public boolean savePid(String moduleId, String menuPid){
		log.debug("savePid start");
		boolean flag = false;
		try{
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
		}catch(Exception e){
			flag = false;
			log.error("savePid error msg==>",e);
		}
		return flag;
	}
}
