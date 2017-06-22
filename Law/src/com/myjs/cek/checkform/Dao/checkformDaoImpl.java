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
	public List<LCekCheckform> findAll() throws Exception {
		log.debug("finding all LCekCheckform start");
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
    }
	
	@SuppressWarnings("unchecked")
	public List<LCekCheckform> findbyproperties(String checkformCode, String checkformType, String checkformName)  throws Exception{
		log.debug("findbyproperties start");
		List<?> querylist = null;
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
	}

	
	public List<LCekCheckform> findByExample(LCekCheckform transientInstance) throws Exception{
		log.debug("LCekCheckform findByExample start");
		List<LCekCheckform> querylist = super.getHibernateTemplate().findByExample(transientInstance);
		return querylist;
	}
	
	public boolean save(LCekCheckform transientInstance) throws Exception {
		log.debug("saving LCekCheckform instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
	return flag;
	}
	
	public boolean delete(LCekCheckform transientInstance) throws Exception{
		log.debug("LCekCheckform delete start ");
		boolean flag;
		super.getHibernateTemplate().delete(transientInstance);
		flag = true;
		return flag;
	}
}
