package com.myjs.sys.user.Dao;

import java.util.List;
import java.util.Map;

import org.hibernate.HibernateException;
import org.hibernate.Session;

import com.myjs.sys.module.model.LSysUserRole;
import com.myjs.sys.user.model.LSysUser;

public interface userDao {
	
	public void saveObject(Object obj) throws HibernateException;  
	  
    public Session getSession();  
  
    public void setSession(Session session);  
    
    public List<LSysUser> findAll();
    
    public List<LSysUser> search();
    public List<Map<String, Object>> findUserRolebyUserId(String userId);
    public boolean updateuserRoleForJDBCTemplate(String userId);
    public boolean save(LSysUserRole transientInstance);
    public boolean updateuserRoleForUserRoleIds(String userRoleIds);
}
