package com.myjs.commons;

import java.io.File;
import java.io.PrintStream;
import java.io.PrintWriter;
import java.io.StringWriter;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


public class ErrorMsgControl {
	private static final Logger log = LogManager.getLogger(ErrorMsgControl.class);
	
	/**
	 * add By Jia 2017-06-21 errorMsg sendtoProgrammer
	 * @param errorLog
	 * @param userId
	 * @param userName
	 * @param ServerName
	 * @return
	 */
	public boolean sendErrorMsg(Exception errorLog, String userId, String userName, String ServerName){
		try{
			String msg = getStackTrace(errorLog);
			
			File file = new File("law." + DateTimeFormat.getNowDateTime() + ".log");
			PrintStream ps = new PrintStream(file);
			errorLog.printStackTrace(ps);
			ps.close();
			
			MailUtil sendMail = new MailUtil();
			MailSenderInfo sendMailcontent = new MailSenderInfo("legalServer@mytf.com.tw", "2354@mytf.com.tw", "劉家嘉", 
					"Law系統出錯","訊息錯誤由 Server = {" + ServerName + "} , user = {" + userId + ":" + userName + "} , 訊息如附件 ===>" + msg , null);	
			sendMail.sendHtmlMail(sendMailcontent, file);
		}catch(Exception e){
			log.error("senderrormsg error msg==>", e);
			e.printStackTrace();
		}
		return true;
	}
	
	public static String getStackTrace(final Throwable throwable) throws Exception{
	     final StringWriter sw = new StringWriter();
	     final PrintWriter pw = new PrintWriter(sw, true);
	     throwable.printStackTrace(pw);
	     return sw.getBuffer().toString();
	}
}
