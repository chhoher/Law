package com.myjs.sys.user.model;
// Generated 2017/2/22 �U�� 04:16:26 by Hibernate Tools 5.2.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Sysdiagrams.
 * @see com.myjs.sys.user.model.Sysdiagrams
 * @author Hibernate Tools
 */
@Stateless
public class SysdiagramsHome {

	private static final Log log = LogFactory.getLog(SysdiagramsHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Sysdiagrams transientInstance) {
		log.debug("persisting Sysdiagrams instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Sysdiagrams persistentInstance) {
		log.debug("removing Sysdiagrams instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Sysdiagrams merge(Sysdiagrams detachedInstance) {
		log.debug("merging Sysdiagrams instance");
		try {
			Sysdiagrams result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Sysdiagrams findById(Integer id) {
		log.debug("getting Sysdiagrams instance with id: " + id);
		try {
			Sysdiagrams instance = entityManager.find(Sysdiagrams.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
