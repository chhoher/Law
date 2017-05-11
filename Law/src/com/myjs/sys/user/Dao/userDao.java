package com.myjs.sys.user.Dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;

import com.myjs.sys.user.model.LSysUser;

public interface userDao {
	
	public void saveObject(Object obj) throws HibernateException;  
	  
    public Session getSession();  
  
    public void setSession(Session session);  
    
    public List<LSysUser> findAll();
    
    public List<LSysUser> search();
}
