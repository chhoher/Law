package com.myjs.commons;

import java.util.Date;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.FileDataSource;
import javax.mail.Address;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;
import javax.mail.internet.MimeUtility;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class MailUtil {
	private static final Logger log = LogManager.getLogger(MailUtil.class);

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MailSenderInfo test = new MailSenderInfo();
		sendHtmlMail(test);
	}

	/**
	 * 以HTML格式發送郵件
	 * 
	 * @param mailInfo
	 *            待發送的郵件信息
	 */
	public static boolean sendHtmlMail(MailSenderInfo mailInfo) {
		Properties pro = mailInfo.getProperties();
		// 根據郵件會話屬性和密碼驗證器構造一個發送郵件的session
		Session sendMailSession = Session.getInstance(pro);
		try {
			// 根據session創建一個郵件消息
			Message mailMessage = new MimeMessage(sendMailSession);
			// 創建郵件發送者地址
			Address from = new InternetAddress(mailInfo.getFromAddress());
			// 設置郵件消息的發送者
			mailMessage.setFrom(from);
			// 創建郵件的接收者地址，並設置到郵件消息中
			Address to = new InternetAddress(mailInfo.getToAddress());
			// Message.RecipientType.TO屬性表示接收者的類型為TO
			mailMessage.setRecipient(Message.RecipientType.TO, to);
			// 設置郵件消息的主題
//			setFileName(MimeUtility.encodeText(f.getName(),"MS950","B"));
			mailMessage.setSubject(MimeUtility.encodeText(mailInfo.getSubject(),"utf-8","B"));
			// 設置郵件消息發送的時間
			mailMessage.setSentDate(new Date());
			// MiniMultipart類是一個容器類，包含MimeBodyPart類型的對象
			Multipart multPart = new MimeMultipart();
			// 創建一個包含HTML內容的MimeBodyPart
			
			BodyPart html = new MimeBodyPart();
			html.setContent(mailInfo.getContent(), "text/html; charset=utf-8");
			multPart.addBodyPart(html);

			// 將MiniMultipart對象設置為郵件內容
			mailMessage.setContent(multPart);
			// 發送郵件
			Transport.send(mailMessage);
			return true;
		} catch (Exception ex) {
			System.out.println("=============== Email發送出錯 ==============="+ex);
			log.error("Mail發送出錯 Exception:",ex);
		}
		return false;
	}

	/**
	 * 以HTML格式發送郵件
	 * 
	 * @param mailInfo
	 *            待發送的郵件信息
	 */
	public boolean sendHtmlMail(MailSenderInfo mailInfo, String[] filePathList) {
		Properties pro = mailInfo.getProperties();
		// 根據郵件會話屬性和密碼驗證器構造一個發送郵件的session
		Session sendMailSession = Session.getInstance(pro);
		try {
			// 根據session創建一個郵件消息
			Message mailMessage = new MimeMessage(sendMailSession);
			// 創建郵件發送者地址
			Address from = new InternetAddress(mailInfo.getFromAddress());
			// 設置郵件消息的發送者
			mailMessage.setFrom(from);
			// 創建郵件的接收者地址，並設置到郵件消息中
			Address to = new InternetAddress(mailInfo.getToAddress());
			// Message.RecipientType.TO屬性表示接收者的類型為TO
			mailMessage.setRecipient(Message.RecipientType.TO, to);
			// 設置郵件消息的主題
//			setFileName(MimeUtility.encodeText(f.getName(),"MS950","B"));
			mailMessage.setSubject(MimeUtility.encodeText(mailInfo.getSubject(),"utf-8","B"));
			// 設置郵件消息發送的時間
			mailMessage.setSentDate(new Date());
			// MiniMultipart類是一個容器類，包含MimeBodyPart類型的對象
			Multipart multPart = new MimeMultipart();
			// 創建一個包含HTML內容的MimeBodyPart
			
			for(int i = 0; i < filePathList.length; i ++){
				BodyPart htmlfile = new MimeBodyPart();
				FileDataSource fds; 
				fds = new FileDataSource(filePathList[i]);
				// 設置HTML內容
				htmlfile.setDataHandler(new DataHandler(fds));
				htmlfile.setFileName(MimeUtility.encodeText(fds.getName(),"utf-8","B"));
				multPart.addBodyPart(htmlfile);
			}
			
			BodyPart html = new MimeBodyPart();
			html.setContent(mailInfo.getContent(), "text/html; charset=utf-8");
			multPart.addBodyPart(html);
			
			// 將MiniMultipart對象設置為郵件內容
			mailMessage.setContent(multPart);
			// 發送郵件
			Transport.send(mailMessage);
			return true;
		} catch (Exception ex) {
			System.out.println("=============== Email發送出錯 ==============="+ex);
			log.error("Mail發送出錯 Exception:",ex);
		}
		return false;
	}
	
	
}
