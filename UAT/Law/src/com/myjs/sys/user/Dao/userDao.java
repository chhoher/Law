package com.myjs.sys.user.Dao;

import java.util.List;
import java.util.Map;

import org.hibernate.HibernateException;
import org.hibernate.Session;

import com.myjs.sys.module.model.LSysUserRole;
import com.myjs.sys.user.model.LSysUser;

public interface userDao {
	
	public void saveObject(Object obj) throws Exception;  
	  
    public Session getSession();  
  
    public void setSession(Session session);  
    
    public List<LSysUser> findAll() throws Exception;
    
    public List<LSysUser> search() throws Exception;
    public List<Map<String, Object>> findUserRolebyUserId(String userId) throws Exception;
    public boolean updateuserRoleForJDBCTemplate(String userId) throws Exception;
    public boolean save(LSysUserRole transientInstance) throws Exception;
    public boolean updateuserRoleForUserRoleIds(String userRoleIds) throws Exception;
}
