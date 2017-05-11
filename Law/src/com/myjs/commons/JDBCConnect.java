package com.myjs.commons;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import com.google.gson.JsonObject;

// TODO 這裡還沒寫好，之後改成Hibernate
public class JDBCConnect { 
	  
	private final String userName = "sa";
	private final String password = "ti2ce9";
	private final String server = "jsam08";
	private final String port = "1433";
	private final String databaseName = "Legal";
	private final String connectionUrl = "jdbc:sqlserver://" + server + ":" + port + ";databaseName=" + databaseName + ";user=" + userName + ";password=" + password;
	
	   public static void main(String[] args) {  
	  
	      // Create a variable for the connection string.  
	      String connectionUrl = "jdbc:sqlserver://jsam08:1433;databaseName=Legal;user=sa;password=ti2ce9";  
	  
	      // Declare the JDBC objects.  
	      Connection con = null;  
	      Statement stmt = null;  
	      ResultSet rs = null;  
	  
	      try {  
	         // Establish the connection.  
	         Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");  
	         con = DriverManager.getConnection(connectionUrl);  
	  
	         // Create and execute an SQL statement that returns some data.  
	         String SQL = "SELECT  TOP (200) USER_ID, [USER _CNAME], USER_PASSWORD, [USER _STATUS], USER_EMAIL, CREATEDATE,MODIFYDATE FROM L_SYS_USER";  
	         stmt = con.createStatement();  
	         rs = stmt.executeQuery(SQL);  
	  
	         // Iterate through the data in the result set and display it.  
	         while (rs.next()) {  
	            System.out.println(rs.getString("USER _CNAME") + " " + rs.getString("CREATEDATE"));  
	         }  
	      }  
	  
	      // Handle any errors that may have occurred.  
	      catch (Exception e) {  
	         e.printStackTrace();  
	      }  
	      finally {  
	         if (rs != null) try { rs.close(); } catch(Exception e) {}  
	         if (stmt != null) try { stmt.close(); } catch(Exception e) {}  
	         if (con != null) try { con.close(); } catch(Exception e) {}  
	      }  
	   } 
	   
	   public JsonObject selectTable(String selectSQL){
		   Connection con = null;  
		   Statement stmt = null;  
		   ResultSet rs = null;  
		   JsonObject jo =null;
		   try {  
		         // Establish the connection.  
		         Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");  
		         con = DriverManager.getConnection(connectionUrl);  
		  
		         // Create and execute an SQL statement that returns some data.  
		         String SQL = "SELECT  TOP (200) USER_ID, USER_CNAME, USER_PASSWORD, USER_STATUS, USER_EMAIL, CREATEDATE,MODIFYDATE FROM L_SYS_USER";  
		         stmt = con.createStatement();  
		         rs = stmt.executeQuery(SQL);  
		         
		         jo = JsonUtil.ResultSetToJsonObject(rs);
		         // Iterate through the data in the result set and display it.  
//		         while (rs.next()) {  
//		            System.out.println(rs.getString("USER _CNAME") + " " + rs.getString("CREATEDATE"));  
//		         }  
		      }  
		  
		      // Handle any errors that may have occurred.  
		      catch (Exception e) {  
		         e.printStackTrace();  
		      }  
		      finally {  
		         if (rs != null) try { rs.close(); } catch(Exception e) {}  
		         if (stmt != null) try { stmt.close(); } catch(Exception e) {}  
		         if (con != null) try { con.close(); } catch(Exception e) {}  
		      }  
		   return jo;
	   }
	   
}
