package com.myjs.sys.user.model;
// Generated 2017/2/22 �U�� 04:16:26 by Hibernate Tools 5.2.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class LSysDepart.
 * @see com.myjs.sys.user.model.LSysDepart
 * @author Hibernate Tools
 */
@Stateless
public class LSysDepartHome {

	private static final Log log = LogFactory.getLog(LSysDepartHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(LSysDepart transientInstance) {
		log.debug("persisting LSysDepart instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(LSysDepart persistentInstance) {
		log.debug("removing LSysDepart instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public LSysDepart merge(LSysDepart detachedInstance) {
		log.debug("merging LSysDepart instance");
		try {
			LSysDepart result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public LSysDepart findById(String id) {
		log.debug("getting LSysDepart instance with id: " + id);
		try {
			LSysDepart instance = entityManager.find(LSysDepart.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
