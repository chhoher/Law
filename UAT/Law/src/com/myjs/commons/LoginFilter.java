package com.myjs.commons;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.filter.OncePerRequestFilter;

public class LoginFilter extends OncePerRequestFilter {
	private static final Logger log = LogManager.getLogger(LoginFilter.class);
	private String[] loginPages;
	private String rootPath;
	private String[] forhiddenPages;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			log.debug("in doFilterInternal");
			response.addHeader("Pragma", "no-cache");
			response.addHeader("Cache-Control", "no-cache");
			response.addHeader("Expires", "Thu,01 Jan 1970 00:00:01 GMT");
			String reqUrl = request.getRequestURI();
			log.debug("reqURL =" + reqUrl + " rootPath =" + rootPath);

			// 是否登錄 或session過期
			if ((request.getSession() != null
					&& request.getSession().getAttribute(AbstractAction.AP_SYS_SESSION_LOGIN_MEMDB) != null)) {

				log.debug(" loginFilter pass!");
				filterChain.doFilter(request, response);
				return;
			}
			log.debug(" isLogon false");
			// 是否為默認可連接的(登錄頁面)
			boolean isLoginPage = isSpecil(reqUrl);
			boolean isRootPath = reqUrl.equalsIgnoreCase(this.rootPath);
			if (isLoginPage || isRootPath) {
				log.debug(" loginFilter pass.");
				filterChain.doFilter(request, response);
			} else {// 返回登錄頁面
				responseLoginPage(request, response);
			}
		} catch (Exception e) {
			ErrorMsgControl msg = new ErrorMsgControl();
			msg.sendErrorMsg(e, "non session", "non session", "SaveParameter");
			log.error(" login filter error happend", e);
		}
	}

	/**
	 * 是否為默認允許的頁面或action
	 * 
	 * @param reqUrl
	 */
	private boolean isSpecil(String reqUrl) throws Exception{
		// 禁止的url
		for (int i = 0; i < forhiddenPages.length; i++) {
			if (reqUrl.indexOf(forhiddenPages[i].trim()) > -1) {
				log.debug(" fobidden specil is" + forhiddenPages[i]);
				return false;
			}
		}

		for (int i = 0; i < loginPages.length; i++) {
			// 解析*號
			String[] spils = loginPages[i].split("[*]");
			if (spils.length == 1) {// 如果不包括* 就直接比較
				if (reqUrl.indexOf(loginPages[i].trim()) > -1) {
					log.debug(" specil is" + loginPages[i]);
					return true;
				} // 如果不匹配 繼續找
			} else {
				if (checkFlag(reqUrl, spils)) { // 已經匹配
					return true;
				} // 如果不匹配 繼續找
			}
		}
		return false;
	}

	/**
	 * 輸入" http://localhost:8080/Law/login!XXXXX.action" 輸入" /login!" 和
	 * ".action" 確認第一個輸入否包含後兩個的。 同時 後一個（.action）在前一個（" /login!"）的後面
	 * 
	 * @param reqUrl
	 * @param spils
	 * @return
	 */
	private static boolean checkFlag(String reqUrl, String[] spils) throws Exception{
		int befortInt = -1;
		for (int j = 0; j < spils.length; j++) {
			int teInt = reqUrl.indexOf(spils[j]);
			if (teInt <= befortInt) {
				return false;
			} else {
				befortInt = teInt;
				// log.debug(" next location:"+befortInt);
			}
		}
		return true;
	}

	/**
	 * 返回到登錄頁面
	 * 
	 * @param response
	 * @throws IOException
	 */
	private void responseLoginPage(HttpServletRequest request, HttpServletResponse response) throws IOException {
		log.debug("從簽呈連結進入 = {}", request.getParameter("LoginInSigned"));
		String LoginInSigned = request.getParameter("LoginInSigned");
		if(LoginInSigned != null && LoginInSigned.equals("true")){
			// add By Jia 將簽呈內容帶入
			AbstractAction.setAttribute("signed", "true");
			AbstractAction.setAttribute("caseId", request.getParameter("caseId"));
			AbstractAction.setAttribute("type", request.getParameter("type"));
			AbstractAction.setAttribute("signedId", request.getParameter("signedId"));
		}
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		out.println("<html>");
		out.println("<body>");
		out.println("<head>");
		out.println("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UFT-8\">");
		out.println("</head>");
		out.println("<script language=\"JavaScript\">");
		// out.println("alert(\"您還沒有登錄，或登錄已超時，請重新操作！\");");
		out.println("window.parent.location=\"" + AbstractAction.getAbsolutePath(request, "") // 回到登錄界面
				+ "\";");
		out.println("</script>");
		out.println("</body>");
		out.println("</html>");
		out.flush();
		log.debug(" loginFilter false");
	}

	public void setLoginPages(String loginPages) throws Exception{
		if(loginPages!=null && loginPages.length()==0){
			this.loginPages =new String[]{""};
		}else{
			this.loginPages = loginPages.split(",");
		}
	}

	public void setRootPath(String rootPath) {
		this.rootPath = rootPath;
	}

	public void setForhiddenPages(String forhiddenPages) throws Exception{
		if(forhiddenPages!=null && forhiddenPages.length()==0){
			this.forhiddenPages =new String[]{""};
		}else{
			this.forhiddenPages = forhiddenPages.split(",");
		}
	
	}

}
