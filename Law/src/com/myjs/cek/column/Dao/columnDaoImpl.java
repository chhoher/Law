package com.myjs.cek.column.Dao;

import java.io.Serializable;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.orm.hibernate5.HibernateCallback;

import com.myjs.cek.checkform.model.LCekColumn;
import com.myjs.commons.DaoUtil;

public class columnDaoImpl extends DaoUtil implements columnDao{
	private static final Logger log = LogManager.getLogger(columnDaoImpl.class);

	@SuppressWarnings("unchecked")
	public List<LCekColumn> findAll() {
		log.debug("finding all LCekColumn start");
		try{
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from LCekColumn ";
	                query = session.createQuery(hql);
	                return query.list();
	            }
	        });
			log.debug("finding all LCekColumn end");
	        return (List<LCekColumn>)execute;
		}catch(Exception e){
			log.error("finding all LCekColumn error msg=>",e);
			return null;
		}
    }
	
	@SuppressWarnings("unchecked")
	public List<LCekColumn> findbyproperties(String columnName, String columnType){
		log.debug("findbyproperties start");
		List<?> querylist = null;
		try{
			String[] valuearr = new String[2];
			valuearr[0]="%" + columnName + "%";
			valuearr[1]="%" + columnType + "%";
			String queryString = "from LCekColumn lcc where  1=1";
			if(columnName != null && !columnName.equals("")){
				queryString += " and lcc.columnName like '"+valuearr[0]+"'";
			}
			if(columnType != null && !columnType.equals("")){
				queryString += " and lcc.columnType like '"+valuearr[1]+"'";
			}
			queryString += " order by lcc.modifyDatetime";
			log.debug("queryString = {}", queryString);
			querylist = super.getHibernateTemplate().find(queryString);
			log.debug("findbyproperties end");
			return (List<LCekColumn>) querylist;
		}catch(Exception e){
			log.error("findbyproperties error msg =>", e);
			return null;
		}

	}

	public boolean save(LCekColumn transientInstance) {
		log.debug("saving LCekColumn instance");
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
	
	public boolean delete(LCekColumn transientInstance){
		log.debug("LCekColumn delete start ");
		boolean flag;
		try{
			super.getHibernateTemplate().delete(transientInstance);
			flag = true;
		}catch(Exception e){
			flag = false;
			log.error("LCekColumn error msg ==>",e);
		}
		return flag;
	}
}
