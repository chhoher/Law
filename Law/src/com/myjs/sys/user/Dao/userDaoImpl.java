package com.myjs.sys.user.Dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.orm.hibernate5.HibernateCallback;

import com.myjs.commons.DaoUtil;
import com.myjs.sys.user.model.LSysUser;

public class userDaoImpl extends DaoUtil  implements userDao{
	private static final Logger log = LogManager.getLogger(userDaoImpl.class);

	private Session session;

	@PersistenceContext
	private EntityManager entityManager;
	
	@Override
	public void saveObject(Object obj) throws HibernateException {
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
	public List<LSysUser> findAll() {
		log.debug("finding all");
		List<LSysUser> userList = (List<LSysUser>) getSession().createQuery("from LSysUser").list();
		return userList;

	}
	
	@SuppressWarnings("unchecked")
	public List<LSysUser> search() {
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
	
	public LSysUser findById(String id) {
		log.debug("getting LSysUser instance with id: " + id);
		try {
			LSysUser instance = entityManager.find(LSysUser.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
