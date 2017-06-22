package com.myjs.sys.variable.Dao;

import java.io.Serializable;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.orm.hibernate5.HibernateCallback;

import com.myjs.commons.DaoUtil;
import com.myjs.sys.variable.model.LSysVariable;

public class variableDaoImpl extends DaoUtil implements variableDao{
	private static final Logger log = LogManager.getLogger(variableDaoImpl.class);
	
	@SuppressWarnings("unchecked")
	public List<LSysVariable> findAll() throws Exception{
		log.debug("finding all LSysVariable start");
        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
            public Object doInHibernate(Session session) throws HibernateException{
                Query<?> query = null;
                String hql = "from LSysVariable lsv where  lsv.variableType is null";
                query = session.createQuery(hql);
                return query.list();
            }
        });
		log.debug("finding all LSysVariable end");
        return (List<LSysVariable>)execute;
    }
	
	@SuppressWarnings("unchecked")
	public List<LSysVariable> findbyproperties(String variableName) throws Exception{
		log.debug("findbyproperties start");
		List<?> querylist = null;
		String[] valuearr = new String[1];
		valuearr[0]="%" + variableName + "%";
		String queryString = "from LSysVariable lsv where  lsv.variableType is null";
		if(variableName != null && !variableName.equals("")){
			queryString += " and lsv.variableName like '"+valuearr[0]+"'";
		}
		log.debug("queryString = {}", queryString);
		querylist = super.getHibernateTemplate().find(queryString);
		log.debug("findbyproperties end");
		return (List<LSysVariable>) querylist;
	}
	

	public boolean save(LSysVariable transientInstance) throws Exception{
		log.debug("saving LSysVariable instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
	
	public boolean delete(LSysVariable transientInstance) throws Exception{
		log.debug("LSysVariable delete start ");
		boolean flag;
		super.getHibernateTemplate().delete(transientInstance);
		flag = true;
		return flag;
	}
	
	@SuppressWarnings("unchecked")
	public List<LSysVariable> findVariablesubbyproperties(String variableType) throws Exception{
		log.debug("findVariablesubbyproperties start");
		List<?> querylist = null;
		String[] valuearr = new String[1];
		valuearr[0]=variableType;
		String queryString = "from LSysVariable lsv where  1=1";
		if(variableType != null && !variableType.equals("")){
			queryString += " and lsv.variableType = '"+valuearr[0]+"'";
		}
		log.debug("queryString = {}", queryString);
		querylist = super.getHibernateTemplate().find(queryString);
		log.debug("findVariablesubbyproperties end");
		return (List<LSysVariable>) querylist;
	}
	
	public LSysVariable findVariablebyId(String variableId) throws Exception{
		log.debug("findVariablebyId start");
		LSysVariable query = null;
		String queryString = "from LSysVariable lsv where  variableId='" + variableId + "'";
		log.debug("queryString = {}", queryString);
		query = (LSysVariable) super.getHibernateTemplate().get(
				"com.myjs.sys.variable.model.LSysVariable", variableId);
		log.debug("findVariablebyId end");
		return query;
	}
}
