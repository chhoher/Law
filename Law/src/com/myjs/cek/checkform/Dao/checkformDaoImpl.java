package com.myjs.cek.checkform.Dao;

import java.io.Serializable;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.orm.hibernate5.HibernateCallback;

import com.myjs.cek.checkform.model.LCekCheckform;
import com.myjs.commons.DaoUtil;

public class checkformDaoImpl  extends DaoUtil  implements checkformDao{
	private static final Logger log = LogManager.getLogger(checkformDaoImpl.class);

	@SuppressWarnings("unchecked")
	public List<LCekCheckform> findAll() {
		log.debug("finding all LCekCheckform start");
		try{
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from LCekCheckform ";
	                query = session.createQuery(hql);
	                return query.list();
	            }
	        });
			log.debug("finding all LCekCheckform end");
	        return (List<LCekCheckform>)execute;
		}catch(Exception e){
			log.error("finding all LCekCheckform error msg=>",e);
			return null;
		}
    }
	
	@SuppressWarnings("unchecked")
	public List<LCekCheckform> findbyproperties(String checkformCode, String checkformType, String checkformName) {
		log.debug("findbyproperties start");
//		super.getHibernateTemplate().getSessionFactory().openSession();
		List<?> querylist = null;
		try{
			String[] valuearr = new String[3];
			valuearr[0]="%" + checkformCode + "%";
			valuearr[1]="%" + checkformType + "%";
			valuearr[2]="%" + checkformName + "%";
			String queryString = "from LCekCheckform lccf where  1=1";
			if(checkformCode != null && !checkformCode.equals("")){
				queryString += " and lccf.checkformCode like '"+valuearr[0]+"'";
			}
			if(checkformType != null && !checkformType.equals("")){
				queryString += " and lccf.checkformType like '"+valuearr[1]+"'";
			}
			if(checkformName != null && !checkformName.equals("")){
				queryString += " and lccf.checkformName like '"+valuearr[2]+"'";
			}
			queryString += " order by lccf.modifyDatetime";
			log.debug("queryString = {}", queryString);
			querylist = super.getHibernateTemplate().find(queryString);
			log.debug("findbyproperties end");
			return (List<LCekCheckform>) querylist;
		}catch(Exception e){
			log.error("findbyproperties error msg =>", e);
			return null;
		}
	}

	
	public List<LCekCheckform> findByExample(LCekCheckform transientInstance){
		log.debug("LCekCheckform findByExample start");
		try{
			List<LCekCheckform> querylist = super.getHibernateTemplate().findByExample(transientInstance);
			return querylist;
		}catch(Exception e){
			log.error("LCekCheckform findByExample error msg=>",e);
			return null;
		}
	}
	
	public boolean save(LCekCheckform transientInstance) {
		log.debug("saving LCekCheckform instance");
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
	
	public boolean delete(LCekCheckform transientInstance){
		log.debug("LCekCheckform delete start ");
		boolean flag;
		try{
			super.getHibernateTemplate().delete(transientInstance);
			flag = true;
		}catch(Exception e){
			flag = false;
			log.error("LCekCheckform error msg ==>",e);
		}
		return flag;
	}
}
