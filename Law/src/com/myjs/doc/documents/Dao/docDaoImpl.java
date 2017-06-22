package com.myjs.doc.documents.Dao;

import java.io.Serializable;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.myjs.commons.DaoUtil;
import com.myjs.doc.documents.model.LDocOtherdocs;

public class docDaoImpl extends DaoUtil implements docDao{
	private static final Logger log = LogManager.getLogger(docDaoImpl.class);
	public boolean save(LDocOtherdocs transientInstance) throws Exception {
		log.debug("saving LCekRecordSigned instance");
		boolean flag = false;
		Serializable lizable=super.getHibernateTemplate().save(transientInstance);
		if(null!=lizable||!"".equals(lizable)){
			flag=true;
		}
		log.debug("save successful");
		return flag;
	}
}
