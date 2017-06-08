package com.myjs.commons;


import java.io.File;
import java.util.List;
import java.util.Properties;

/**
 * 定義發送郵件所需要的一些基本信息
 * 
 * @author Jia
 * 
 */
public class MailSenderInfo {
	// 發送郵件的服務器的地址和端口，其實端口號可以不用指定
	private String mailServerHost = "js-mailsrv.mytf.com.tw";
	private String mailServerPort = "25";
	// 郵件發送者的地址
	private String fromAddress = "legalServer@mytf.com.tw";
	// 郵件接收者的地址
	private String toAddress = "2354@mytf.com.tw";
	// 登陸郵件發送服務器的用戶名和密碼
	private String userName = "劉家嘉";
	private String password = "";
	// 是否需要身份驗證
	private boolean validate = true; 
	// 郵件主題
	private String subject = "系統Mail發送";
	// 郵件的文本內容
	private String content = "系統Mail發送";
	// 郵件附件的文件名
	private String[] attachFileNames;
	// 郵件附加檔案
	private List<File> fileList;
	// 郵件傳送歷史id
	private String sendFileHistoryId;
	
	public MailSenderInfo(){
		
	}
	
	public MailSenderInfo(String fromAddress, String toAddress, String userName, 
			String subject, String content, String[] attachFileNames){
		this.fromAddress = fromAddress;
		this.toAddress = toAddress;
		this.userName = userName;
		this.subject = subject;
		this.content = content;
		this.attachFileNames = attachFileNames;
	}
	
	/**
	 * 獲得郵件會話屬性
	 */
	public Properties getProperties() {
		System.out.print("MailServerHost="+mailServerHost);
		Properties p = new Properties();
		p.put("mail.smtp.auth", false);
		p.put("mail.smtp.host", this.mailServerHost);
		p.put("mail.smtp.port", this.mailServerPort);
		p.put("mail.smtp.starttls.enable", "false");
		return p;
	}
	
	public void addFile(File file) {
		fileList.add(file);
	}
	
	public String getMailServerHost() {
		return mailServerHost;
	}
	
	public void setMailServerHost(String mailServerHost) {
		this.mailServerHost = mailServerHost;
	}
	
	public String getMailServerPort() {
		return mailServerPort;
	}
	
	public void setMailServerPort(String mailServerPort) {
		this.mailServerPort = mailServerPort;
	}
	
	public String getFromAddress() {
		return fromAddress;
	}
	
	public void setFromAddress(String fromAddress) {
		this.fromAddress = fromAddress;
	}
	
	public String getToAddress() {
		return toAddress;
	}
	
	public void setToAddress(String toAddress) {
		this.toAddress = toAddress;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public boolean isValidate() {
		return validate;
	}
	
	public void setValidate(boolean validate) {
		this.validate = validate;
	}
	
	public String getSubject() {
		return subject;
	}
	
	public void setSubject(String subject) {
		this.subject = subject;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	
	public String[] getAttachFileNames() {
		return attachFileNames;
	}
	
	public void setAttachFileNames(String[] attachFileNames) {
		this.attachFileNames = attachFileNames;
	}
	
	public List<File> getFileList() {
		return fileList;
	}
	
	public void setFileList(List<File> fileList) {
		this.fileList = fileList;
	}
	
	public String getSendFileHistoryId() {
		return sendFileHistoryId;
	}
	
	public void setSendFileHistoryId(String sendFileHistoryId) {
		this.sendFileHistoryId = sendFileHistoryId;
	}
	
}