package com.myjs.commons;

import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.myjs.sys.user.model.VEIPMemdb;
import com.opensymphony.xwork2.ActionSupport;

public class AbstractAction extends ActionSupport{

	private static final long serialVersionUID = 5552089690642541976L;


	/**session 存放當前登入系統的用戶bean*/
	public static final String AP_SYS_SESSION_LOGIN_MEMDB = "AP_SYS_SESSION_LOGIN_MEMDB";
	
	/**
	 * session can be get by  request.getSession()
	 * @return
	 */
	protected static HttpServletRequest getRequest() {
		return ServletActionContext.getRequest();
	}
	
	protected static ServletContext getServletContext() {
		return ServletActionContext.getServletContext();
		
	}

	protected static HttpServletResponse getResponse() {
		return ServletActionContext.getResponse();
	}
	
	protected static void printToResponse(String xmlString) throws IOException{
		HttpServletResponse response ;
        //將生成的XML String Response     
		response=getResponse();
        response.setContentType("text/xml; charset=UTF-8");      
        response.setHeader("Cache-Control", "no-cache"); 	
		response.getWriter().print(xmlString);	
		response.getWriter().flush();
	}
	
	/**
	 * 取得當前系統用戶
	 * @param loginMemdb
	 */
	public static VEIPMemdb getSessionLoginUser() {
		return (VEIPMemdb) getRequest().getSession().getAttribute(AP_SYS_SESSION_LOGIN_MEMDB);
	}
	
	/**
	 * 設置登入系統的用戶
	 * @param loginMemdb
	 */
	public static void setSessionLoginUser(VEIPMemdb loginMemdb) {		
		getRequest().getSession().setAttribute(AP_SYS_SESSION_LOGIN_MEMDB, loginMemdb);		
	}
	
	/**
	 * 設置Attribute
	 */
	public static void setAttribute(String attributeName, String attributeValue){
		getRequest().getSession().setAttribute(attributeName, attributeValue);
	}
	
	/**
	 * 設置getAttribute
	 */
	public static String getAttribute(String attributeName){
		return (String) getRequest().getSession().getAttribute(attributeName);
	}
	
	/**
	 * 
	 * @return http://localhost:8080/Law 
	 */
	public static String gethttpRootPath() {
		if (getRequest() == null) {
			throw new RuntimeException("request is null.");
		}
		StringBuffer url = new StringBuffer();
		url.append(getRequest().getScheme() + "://");
		url.append(getRequest().getServerName());
		if (getRequest().getServerPort() != 80)
			url.append(":" + getRequest().getServerPort());
		url.append(getRequest().getContextPath());
		return url.toString();
	}
	
	/**
	 * 
	 * @return C:\Users\2354\workspace\Legal\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\Law\ 
	 */
	public static String getRootPath(){
		return getServletContext().getRealPath("");
	}

	/**
	 * 
	 * @return C:\Users\2354\workspace\Legal\.metadata\.plugins\org.eclipse.wst.server.core\tmp1\wtpwebapps\Law\\upload
	 */
	public static final String getpath(){
		return getServletContext().getRealPath("/upload");
	}
}
