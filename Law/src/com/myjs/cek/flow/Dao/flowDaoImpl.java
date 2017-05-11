package com.myjs.cek.flow.Dao;

import java.io.Serializable;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.orm.hibernate5.HibernateCallback;

import com.myjs.cek.checkform.model.LCekFlow;
import com.myjs.cek.checkform.model.LCekFlowsub;
import com.myjs.commons.DaoUtil;

public class flowDaoImpl extends DaoUtil implements flowDao{
	private static final Logger log = LogManager.getLogger(flowDao.class);

	@SuppressWarnings("unchecked")
	public List<LCekFlow> findAll(){
		log.debug("finding all LCekFlow start");
		try{
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from LCekFlow ";
	                query = session.createQuery(hql);
	                return query.list();
	            }
	        });
			log.debug("finding all LCekFlow end");
	        return (List<LCekFlow>)execute;
		}catch(Exception e){
			log.error("finding all LCekFlow error msg=>",e);
			return null;
		}
    }
	@SuppressWarnings("unchecked")
	public List<LCekFlow> findbyproperties(String flowCode, String flowType, String flowName){
		log.debug("findbyproperties start");
		List<?> querylist = null;
		try{
			String[] valuearr = new String[3];
			valuearr[0]="%" + flowCode + "%";
			valuearr[1]="%" + flowType + "%";
			valuearr[2]="%" + flowName + "%";
			String queryString = "from LCekFlow lcf where  1=1";
			if(flowCode != null && !flowCode.equals("")){
				queryString += " and lcf.flowCode like '"+valuearr[0]+"'";
			}
			if(flowType != null && !flowType.equals("")){
				queryString += " and lcf.flowType like '"+valuearr[1]+"'";
			}
			if(flowName != null && !flowName.equals("")){
				queryString += " and lcf.flowName like '"+valuearr[2]+"'";
			}
			queryString += " order by lcf.modifyDatetime";
			log.debug("queryString = {}", queryString);
			querylist = super.getHibernateTemplate().find(queryString);
			log.debug("findbyproperties end");
			return (List<LCekFlow>) querylist;
		}catch(Exception e){
			log.error("findbyproperties error msg =>", e);
			return null;
		}
	}
	
	public boolean save(LCekFlow transientInstance) {
		log.debug("saving LCekFlow start");
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
	
	public boolean delete(LCekFlow transientInstance){
		log.debug("delete LCekFlow start ");
		boolean flag;
		try{
			super.getHibernateTemplate().delete(transientInstance);
			flag = true;
		}catch(Exception e){
			flag = false;
			log.error("delete error msg ==>",e);
		}
		return flag;
	}
	
	@SuppressWarnings("unchecked")
	public List<LCekFlowsub> findAllFlowsub(){
		log.debug("findAllFlowsub start");
		try{
	        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
	            public Object doInHibernate(Session session) throws HibernateException{
	                Query<?> query = null;
	                String hql = "from LCekFlowsub ";
	                query = session.createQuery(hql);
	                return query.list();
	            }
	        });
			log.debug("findAllFlowsub end");
	        return (List<LCekFlowsub>)execute;
		}catch(Exception e){
			log.error("findAllFlowsub error msg=>",e);
			return null;
		}
    }
	@SuppressWarnings("unchecked")
	public List<LCekFlowsub> findFlowsubbyproperties(String flowId){
		log.debug("findbyproperties start");
		List<?> querylist = null;
		try{
			String[] valuearr = new String[1];
			valuearr[0]="%" + flowId + "%";
			String queryString = "from LCekFlowsub lcfs where  1=1";
			if(flowId != null && !flowId.equals("")){
				queryString += " and lcfs.flowId like '"+valuearr[0]+"'";
			}
			queryString += " order by lcfs.flowsubLevel";
			log.debug("queryString = {}", queryString);
			querylist = super.getHibernateTemplate().find(queryString);
			log.debug("findbyproperties end");
			return (List<LCekFlowsub>) querylist;
		}catch(Exception e){
			log.error("findbyproperties error msg =>", e);
			return null;
		}
	}
}
