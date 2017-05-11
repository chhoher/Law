package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.myjs.cek.checkform.model.LCekColumn;

public class testGson {
	private static final Logger log = LogManager.getLogger(testGson.class);

	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public static void main(String[] args) {
		// Create a variable for the connection string.  
	      //String connectionUrl = "jdbc:sqlserver://jsam07:1433;databaseName=SMART_TAISC;user=sa;password=ti2ce9";  
	  //TEST20170510 1837
	      // Declare the JDBC objects.  
	      Connection con = null;  
	      Statement stmt = null;  
	      ResultSet rs = null;  
		
		log.debug("finding all LCekColumn start");
		try{
			// Establish the connection.  
	         Class.forName("net.sourceforge.jtds.jdbc.Driver");  
	         con = DriverManager.getConnection("jdbc:jtds:sqlserver://jsam07:1433/SMART_TAISC","sa","ti2ce9");
	         //con = DriverManager.getConnection(connectionUrl);  
	         stmt = con.createStatement();  
	         

				StringBuffer queryString=new StringBuffer("select LCC.column_id, LCC.column_name,LCCC.checkform_column_id");
				queryString.append(" FROM L_CEK_COLUMN LCC");
				queryString.append(" left join L_CEK_CHECKFORM_COLUMN LCCC on LCC.column_id = LCCC.column_id");
				queryString.append(" where LCCC.checkform_id = '" + "8aa2e72a5af54f91015af55080f80001" + "' or LCCC.checkform_id is null");
	         
	         rs = stmt.executeQuery(queryString.toString());  
			
	         List<LCekColumn> MapColumnListnotnull=new ArrayList<LCekColumn>();
	         List<LCekColumn> MapColumnListnull=new ArrayList<LCekColumn>();
	 		
	      // Iterate through the data in the result set and display it.  
	         while (rs.next()) {  
	        	LCekColumn lcekcolumn=new LCekColumn();
	 			lcekcolumn.setColumnId(rs.getString("column_id"));
	 			lcekcolumn.setColumnName(rs.getString("column_name"));
	 			lcekcolumn.setVocheckformcolumnId(rs.getString("checkform_column_id"));
	 			
	 			if(lcekcolumn.getVocheckformcolumnId()!=null && !lcekcolumn.getVocheckformcolumnId().equals("")){
	 				MapColumnListnotnull.add(lcekcolumn);
	 			}else{
	 				MapColumnListnull.add(lcekcolumn);
	 			}
	            //System.out.println(rs.getString("column_id") + "," + rs.getString("column_name") + "," + rs.getString("checkform_column_id"));  
	            //Gson的地方
	         }  

	 			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
	 			JsonObject jsonResponse = new JsonObject();
	 			jsonResponse.add("datanotnull", gson.toJsonTree(MapColumnListnotnull));
	 			jsonResponse.add("datanull", gson.toJsonTree(MapColumnListnotnull));
	 			
	 			System.out.println(jsonResponse);
		}catch(Exception e){
			log.error("finding all LCekColumn error msg=>",e);
		}
    
		
	    
	    }
	
	public static void test(String[] args) {
		// Create a variable for the connection string.  
	      String connectionUrl = "jdbc:sqlserver://jsam08:1433;databaseName=Legal;user=sa;password=ti2ce9";  
	  
	      // Declare the JDBC objects.  
	      Connection con = null;  
	      Statement stmt = null;  
	      ResultSet rs = null;  
		
		log.debug("finding all LCekColumn start");
		try{
			// Establish the connection.  
	         Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");  
	         con = DriverManager.getConnection(connectionUrl);  
	         stmt = con.createStatement();  
	         

				StringBuffer queryString=new StringBuffer("select LCC.column_id, LCC.column_name,LCCC.checkform_column_id");
				queryString.append(" FROM L_CEK_COLUMN LCC");
				queryString.append(" left join L_CEK_CHECKFORM_COLUMN LCCC on LCC.column_id = LCCC.column_id");
				queryString.append(" where LCCC.checkform_id = '" + "8aa2e72a5af54f91015af55080f80001" + "' or LCCC.checkform_id is null");
	         
	         rs = stmt.executeQuery(queryString.toString());  
			
	         List<LCekColumn> MapColumnListnotnull=new ArrayList<LCekColumn>();
	         List<LCekColumn> MapColumnListnull=new ArrayList<LCekColumn>();
	 		
	      // Iterate through the data in the result set and display it.  
	         while (rs.next()) {  
	        	LCekColumn lcekcolumn=new LCekColumn();
	 			lcekcolumn.setColumnId(rs.getString("column_id"));
	 			lcekcolumn.setColumnName(rs.getString("column_name"));
	 			lcekcolumn.setVocheckformcolumnId(rs.getString("checkform_column_id"));
	 			
	 			if(lcekcolumn.getVocheckformcolumnId()!=null && !lcekcolumn.getVocheckformcolumnId().equals("")){
	 				MapColumnListnotnull.add(lcekcolumn);
	 			}else{
	 				MapColumnListnull.add(lcekcolumn);
	 			}
	            //System.out.println(rs.getString("column_id") + "," + rs.getString("column_name") + "," + rs.getString("checkform_column_id"));  
	            //Gson的地方
	         }  

	 			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
	 			JsonObject jsonResponse = new JsonObject();
	 			jsonResponse.add("datanotnull", gson.toJsonTree(MapColumnListnotnull));
	 			jsonResponse.add("datanull", gson.toJsonTree(MapColumnListnotnull));
	 			
	 			System.out.println(jsonResponse);
		}catch(Exception e){
			log.error("finding all LCekColumn error msg=>",e);
		}
    
		
	    
	    }

}
