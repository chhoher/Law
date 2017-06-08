package com.myjs.sys.user.model;
// Generated 2017/2/22 �U�� 04:16:26 by Hibernate Tools 5.2.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class LSysUser.
 * @see com.myjs.sys.user.model.LSysUser
 * @author Hibernate Tools
 */
@Stateless
public class LSysUserHome {

	private static final Log log = LogFactory.getLog(LSysUserHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(LSysUser transientInstance) {
		log.debug("persisting LSysUser instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(LSysUser persistentInstance) {
		log.debug("removing LSysUser instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public LSysUser merge(LSysUser detachedInstance) {
		log.debug("merging LSysUser instance");
		try {
			LSysUser result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
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
