package com.myjs.commons;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * 針對日期轉換之API
 * @author JiaJia
 *
 */

public class DateTimeFormat {

	/**
	 * 將String格式日期轉換成Long，若格式為Null回傳現在時間
	 * @param strDate
	 * @return
	 * @throws ParseException
	 */
	public static Date getTime(String strDate) throws Exception {
		//設定日期格式
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		Date date = new Date();
		if(strDate != null && !strDate.equals("")){
			date = format.parse(strDate);
		}
		return date;
	}
	
	/**
	 * 取出現在日期時間 "yyyy-MM-dd HH:mm:ss"
	 * @return
	 */
	public static String getNowDateTime() throws Exception {
		java.text.SimpleDateFormat sdf;
		sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return (sdf.format(new java.util.Date()));
	}

	/**
	 * 取出現在日期 "yyyy-MM-dd"
	 * @return
	 */
	public static String getNowDate() throws Exception{
		java.text.SimpleDateFormat sdf;
		sdf = new java.text.SimpleDateFormat("yyyy-MM-dd");
		return (sdf.format(new java.util.Date()));
	}
	
	/**
	 * 將輸入日期轉換 民國的 "yyy/MM/dd"
	 * @return
	 */
	public static String getTWNowDate(Date datetime) throws Exception{
		@SuppressWarnings("deprecation")
		String TWDate = (datetime.getYear()-11) + "/" + (datetime.getMonth()+1) + "/" + datetime.getDate();
		return TWDate;
	}
	
	/**
	 * 取出現在日期 "yyyyMMddHHmmss"
	 * @return
	 */
	public static String getNowDateNum() throws Exception{
		java.text.SimpleDateFormat sdf;
		sdf = new java.text.SimpleDateFormat("yyyyMMddHHmmss");
		return (sdf.format(new java.util.Date()));
	}
	
	/**
	 * 將輸入日期格式化 "yyyy-MM-dd"
	 * @return
	 */
	public static String getDateTimeString(Date datetime, String format) throws Exception {
		java.text.SimpleDateFormat sdf;
		sdf = new java.text.SimpleDateFormat(format);
		return (sdf.format(datetime));
	}
}
