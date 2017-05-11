package com.myjs.commons;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class MailAuthenticator extends Authenticator {
	private static final Logger log = LogManager.getLogger(MailAuthenticator.class);
	
//	String userName = "TFBTM.BANK";
//	String password = "Aa87522899";
	String userName = null;
	String password = null;
	
	public MailAuthenticator() {
	}
	
	public MailAuthenticator(String username, String password) {
		this.userName = username;
		this.password = password;
	}
	
	@Override
	protected PasswordAuthentication getPasswordAuthentication() {
		System.out.println("===執行EMAIL驗證===");
		log.debug("執行mail驗證");
		System.out.println("userName = "+userName+" Password = "+password);
		return new PasswordAuthentication(userName, password);
	}
	
	public static void main(String[] args){
		
	}
}
