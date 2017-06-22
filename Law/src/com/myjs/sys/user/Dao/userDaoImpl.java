package com.myjs.sys.user.Dao;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate5.HibernateCallback;

import com.myjs.commons.DaoUtil;
import com.myjs.sys.module.model.LSysUserRole;
import com.myjs.sys.user.model.LSysUser;

public class userDaoImpl extends DaoUtil  implements userDao{
	private static final Logger log = LogManager.getLogger(userDaoImpl.class);
	
	private JdbcTemplate jdbcTemplate;

	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	private Session session;

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public void saveObject(Object obj) throws Exception {
		session.save(obj);  
	}

	@Override
	public Session getSession() {
		return session;
	}

	@Override
	public void setSession(Session session) {
		this.session = session;  
	}

	@SuppressWarnings("unchecked")
	public List<LSysUser> findAll() throws Exception {
		log.debug("finding all");
		List<LSysUser> userList = (List<LSysUser>) getSession().createQuery("from LSysUser").list();
		return userList;

	}
	
	@SuppressWarnings("unchecked")
	public List<LSysUser> search() throws Exception {
		log.debug("finding all");
        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
            public Object doInHibernate(Session session) throws HibernateException{
                Query<LSysUser> query = null;
                String hql = "from LSysUser ";
                query = session.createQuery(hql);
                 
                return query.list();
            }
             
        });
        return (List<LSysUser>)execute;
    }
	
	public LSysUser findById(String id) throws Exception {
		log.debug("getting LSysUser instance with id: " + id);
		LSysUser instance = entityManager.find(LSysUser.class, id);
		log.debug("get successful");
		return instance;
	}
	
	public List<Map<String, Object>> findUserRolebyUserId(String userId) throws Exception{

		List<Map<String, Object>> fileList = null;
		StringBuffer queryString=new StringBuffer("SELECT LSR.role_id,LSR.role_name,");
		queryString.append(" LSUR.is_delete,LSUR.user_role_id");
		queryString.append(" FROM L_SYS_ROLE LSR");
		queryString.append(" LEFT JOIN ( SELECT LSR.role_id,LSR.role_name,");
		queryString.append(" LSUR.is_delete,user_role_id");
		queryString.append(" FROM L_SYS_ROLE LSR");
		queryString.append(" LEFT JOIN L_SYS_USER_ROLE LSUR ON LSR.role_id = LSUR.role_id");
		queryString.append(" WHERE user_id = '" + userId + "' ) LSUR");
		queryString.append(" ON LSR.role_id = LSUR.role_id");
		log.debug("findSelectOtherFileBySignedId queryString = {}",queryString);
		fileList=this.jdbcTemplate.queryForList(queryString.toString());
		return fileList;
	}
	
    public boolean updateuserRoleForJDBCTemplate(String userId) throws Exception{
		log.debug("=====updateuserRoleForJDBCTemplate start=====");
		StringBuffer deleteString = new StringBuffer("UPDATE L_SYS_USER_ROLE");
		deleteString.append(" SET is_delete = 'Y' WHERE");
		deleteString.append(" user_id = '" + userId + "'");
		this.jdbcTemplate.execute(deleteString.toString());
		return true;
	}
    
    public boolean save(LSysUserRole transientInstance) throws Exception{
		log.debug("saving LSysUserRole instance");
		boolean flag = false;
		log.debug("LSysUserRole info");
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
    public boolean updateuserRoleForUserRoleIds(String userRoleIds) throws Exception{
		log.debug("=====updateuserRoleForUserRoleIds start=====");
		StringBuffer deleteString = new StringBuffer("UPDATE L_SYS_USER_ROLE");
		deleteString.append(" SET is_delete = 'N' WHERE");
		deleteString.append(" user_role_id in (" + userRoleIds + ")");
		this.jdbcTemplate.execute(deleteString.toString());
		return true;
	}
}
