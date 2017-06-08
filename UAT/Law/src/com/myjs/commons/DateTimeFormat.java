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
	public static String getNowDateTime() {
		java.text.SimpleDateFormat sdf;
		sdf = new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return (sdf.format(new java.util.Date()));
	}

	/**
	 * 取出現在日期 "yyyy-MM-dd"
	 * @return
	 */
	public static String getNowDate(){
		java.text.SimpleDateFormat sdf;
		sdf = new java.text.SimpleDateFormat("yyyy-MM-dd");
		return (sdf.format(new java.util.Date()));
	}
	
	/**
	 * 取出現在日期 "yyyyMMddHHmmss"
	 * @return
	 */
	public static String getNowDateNum(){
		java.text.SimpleDateFormat sdf;
		sdf = new java.text.SimpleDateFormat("yyyyMMddHHmmss");
		return (sdf.format(new java.util.Date()));
	}
}
