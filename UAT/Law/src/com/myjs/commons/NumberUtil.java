package com.myjs.commons;

public class NumberUtil {

	public static String addZeroForNum(String str, int strLength) throws Exception{
	    int strLen = str.length();
	    if (strLen < strLength) {
	        while (strLen < strLength) {
	            StringBuffer sb = new StringBuffer();
	            sb.append("0").append(str);// 左補0
	            // sb.append(str).append("0");//右補0
	            str = sb.toString();
	            strLen = str.length();
	        }
	    }
	
	    return str;
	}

}
