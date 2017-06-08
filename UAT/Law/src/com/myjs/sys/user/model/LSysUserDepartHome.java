package com.myjs.sys.user.model;
// Generated 2017/2/22 �U�� 04:16:26 by Hibernate Tools 5.2.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class LSysUserDepart.
 * @see com.myjs.sys.user.model.LSysUserDepart
 * @author Hibernate Tools
 */
@Stateless
public class LSysUserDepartHome {

	private static final Log log = LogFactory.getLog(LSysUserDepartHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(LSysUserDepart transientInstance) {
		log.debug("persisting LSysUserDepart instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(LSysUserDepart persistentInstance) {
		log.debug("removing LSysUserDepart instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public LSysUserDepart merge(LSysUserDepart detachedInstance) {
		log.debug("merging LSysUserDepart instance");
		try {
			LSysUserDepart result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public LSysUserDepart findById(String id) {
		log.debug("getting LSysUserDepart instance with id: " + id);
		try {
			LSysUserDepart instance = entityManager.find(LSysUserDepart.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
