package com.myjs.sys.user.Dao;

import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.hibernate5.HibernateCallback;

import com.myjs.commons.DaoUtil;
import com.myjs.sys.user.model.VEIPMemdb;

public class memdbDaoImpl extends DaoUtil implements memdbDao{
	private static final Logger log = LogManager.getLogger(memdbDaoImpl.class);

	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public VEIPMemdb findbyuserName(String userName){
		log.debug("findbyuserName start");
		VEIPMemdb query = null;
		try{
			String queryString = "from VEIPMemdb vem where  vem.memtmp='Y'";
			if(userName != null && !userName.equals("")){
				queryString += " and vem.memnm = '"+userName+"'";
			}
			log.debug("queryString = {}", queryString);
			List<?> VeipmemdbList = super.getHibernateTemplate().find(queryString);
			if(VeipmemdbList.size() != 0){
				query = (VEIPMemdb) VeipmemdbList.get(0);
			}
			log.debug("findbyuserName end");
			return query;
		}catch(Exception e){
			log.error("findbyuserName error msg =>", e);
			return null;
		}
	}
	
	public VEIPMemdb findbyMemno(String memno){
		log.debug("findbyMemno start");
		VEIPMemdb query = null;
		try{
			String queryString = "from VEIPMemdb vem where  vem.memtmp='Y'";
			if(memno != null && !memno.equals("")){
				queryString += " and vem.memno = '"+memno+"'";
			}
			log.debug("queryString = {}", queryString);
			List<?> VeipmemdbList = super.getHibernateTemplate().find(queryString);
			if(VeipmemdbList.size() != 0){
				query = (VEIPMemdb) VeipmemdbList.get(0);
			}
			log.debug("findbyMemno end");
			return query;
		}catch(Exception e){
			log.error("findbyMemno error msg =>", e);
			return null;
		}
	}
	
	public VEIPMemdb findContactPersonByBankName(String bankName){
		log.debug("findContactPersonByBankName start");
		VEIPMemdb query = new VEIPMemdb();
		try{
			StringBuffer queryString = new StringBuffer("SELECT VEM.memno,VEM.memnm,VEM.memmail");
			queryString.append(" FROM L_CEK_USER_BANK LCUB");
			queryString.append(" LEFT JOIN V_EIP_memdb VEM on VEM.memno = LCUB.memno");
			queryString.append(" WHERE LCUB.bank_name = '" + bankName + "'");
			
			log.debug("queryString = {}",queryString);
			Map<String, Object> querylist=this.jdbcTemplate.queryForMap(queryString.toString());

			if(querylist.size() != 0){
				query.setMemno((String) querylist.get("memno"));
				query.setMemnm((String) querylist.get("memnm"));
				query.setMemmail((String) querylist.get("memmail"));
			}
			return query;
		}catch(Exception e){
			log.error("findContactPersonByBankName error msg ==>", e);
			return null;
		}
	}
	
	public VEIPMemdb findbyuserId(String userId){
		log.debug("findbyuserId start");
		VEIPMemdb query = null;
		try{
			String queryString = "from VEIPMemdb vem";
			if(userId != null && !userId.equals("")){
				queryString += " where vem.userID = '"+userId+"'";
			}
			log.debug("queryString = {}", queryString);
			List<?> VeipmemdbList = super.getHibernateTemplate().find(queryString);
			if(VeipmemdbList.size() != 0){
				query = (VEIPMemdb) VeipmemdbList.get(0);
			}
			log.debug("findbyuserId end");
			return query;
		}catch(Exception e){
			log.error("findbyuserId error msg =>", e);
			return null;
		}
	}
	
	@SuppressWarnings("unchecked")
	public List<VEIPMemdb> search() {
		log.debug("finding all");
        Object execute = super.getHibernateTemplate().execute(new HibernateCallback<Object>() {
            public Object doInHibernate(Session session) throws HibernateException{
                Query<VEIPMemdb> query = null;
                String hql = "from VEIPMemdb ";
                query = session.createQuery(hql);
                 
                return query.list();
            }
             
        });
        return (List<VEIPMemdb>)execute;
    }
}
