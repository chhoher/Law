package com.myjs.sys.user.model;
// Generated 2017/2/22 �U�� 04:16:26 by Hibernate Tools 5.2.0.CR1

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.myjs.cek.checkform.model.LCekCheckform;

/**
 * Home object for domain model class LCekCheckform.
 * @see com.myjs.sys.user.model.LCekCheckform
 * @author Hibernate Tools
 */
@Stateless
public class LCekCheckformHome {

	private static final Log log = LogFactory.getLog(LCekCheckformHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(LCekCheckform transientInstance) {
		log.debug("persisting LCekCheckform instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(LCekCheckform persistentInstance) {
		log.debug("removing LCekCheckform instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public LCekCheckform merge(LCekCheckform detachedInstance) {
		log.debug("merging LCekCheckform instance");
		try {
			LCekCheckform result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public LCekCheckform findById(String id) {
		log.debug("getting LCekCheckform instance with id: " + id);
		try {
			LCekCheckform instance = entityManager.find(LCekCheckform.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
