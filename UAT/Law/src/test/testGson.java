package test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.jdbc.core.JdbcTemplate;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.reflect.TypeToken;
import com.myjs.cek.checkform.model.LCekColumn;
import com.myjs.cek.recordcheckform.model.LCekSignedCaseInfo;
import com.myjs.commons.DateTimeFormat;
import com.myjs.doc.documents.model.LDocOtherdocs;
import com.myjs.sys.module.model.LSysMenu;
import com.myjs.sys.variable.model.LSysVariable;

public class testGson {
	private static final Logger log = LogManager.getLogger(testGson.class);

	private JdbcTemplate jdbcTemplate;
	
	public JdbcTemplate getJdbcTemplate() {
		return jdbcTemplate;
	}

	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public static void main(String[] args){
		List<LSysVariable> la = new ArrayList<LSysVariable>();
		List<LSysVariable> lb = new ArrayList<LSysVariable>();
		LSysVariable a = new LSysVariable();
		LSysVariable b = new LSysVariable();
		LSysVariable c = new LSysVariable();
		la.add(a);
		lb.add(b);
		la.addAll(lb);
		lb.add(c);
		System.out.println(la.get(2));
		System.out.println(lb.get(1));
	}
	
	public static void maintest(String[] args) throws Exception{
		String test = "💋👍🗿💕";
		System.out.println(test);
		System.out.println(DateTimeFormat.getDateTimeString(new Date(),"yyyy-MM-dd"));
//		String a = "[{\"menuId\":\"ROOT\","menuPid":"#","moduleId":"moduleROOT","menuName":"文管法務系統","menuLevel":0,"isOpen":"N","isDelete":"N"},{"menuId":"0001","menuPid":"ROOT","moduleId":"moduleROOT","menuName":"系統管理","menuLevel":1,"isOpen":"N","isDelete":"N"},{"menuId":"0002","menuPid":"ROOT","moduleId":"moduleROOT","menuName":"表單流程","menuLevel":1,"isOpen":"N","isDelete":"N"},{"menuId":"0003","menuPid":"ROOT","moduleId":"moduleROOT","menuName":"文件管理","menuLevel":1,"isOpen":"N","isDelete":"N"},{"menuId":"0004","menuPid":"0001","moduleId":"moduleROOT","menuName":"部門設定","menuLevel":2,"isOpen":"N","isDelete":"N"},{"menuId":"0005","menuPid":"0001","moduleId":"moduleROOT","menuName":"使用者設定","menuLevel":2,"isOpen":"N","isDelete":"N"},{"menuId":"0006","menuPid":"0001","moduleId":"moduleROOT","menuName":"系統參數","menuLevel":2,"isOpen":"N","isDelete":"N","menuUrl":"/Law/pages/sys/variable.jsp"},{"menuId":"0007","menuPid":"0001","moduleId":"moduleROOT","menuName":"附件管理","menuLevel":2,"isOpen":"N","isDelete":"N","menuUrl":"/Law/pages/sys/file.jsp"},{"menuId":"0008","menuPid":"0002","moduleId":"moduleROOT","menuName":"表單設定","menuLevel":2,"isOpen":"N","isDelete":"N","menuUrl":"/Law/pages/cek/form.jsp"},{"menuId":"0009","menuPid":"0002","moduleId":"moduleROOT","menuName":"欄位設定","menuLevel":2,"isOpen":"N","isDelete":"N","menuUrl":"/Law/pages/cek/column.jsp"},{"menuId":"0010","menuPid":"0002","moduleId":"moduleROOT","menuName":"流程設定","menuLevel":2,"isOpen":"N","isDelete":"N","menuUrl":"/Law/pages/cek/flow.jsp"},{"menuId":"0011","menuPid":"0002","moduleId":"moduleROOT","menuName":"窗口對應業主","menuLevel":2,"isOpen":"N","isDelete":"N","menuUrl":"/Law/pages/cek/contactPerson.jsp"},{"menuId":"0012","menuPid":"0002","moduleId":"moduleROOT","menuName":"表單申請","menuLevel":2,"isOpen":"N","isDelete":"N"},{"menuId":"0013","menuPid":"0012","moduleId":"moduleROOT","menuName":"簽呈申請","menuLevel":3,"isOpen":"N","isDelete":"N","menuUrl":"/Law/pages/cek/checkform.jsp"},{"menuId":"0014","menuPid":"0003","moduleId":"moduleROOT","menuName":"文管新增","menuLevel":2,"isOpen":"N","isDelete":"N","menuUrl":"/Law/pages/doc/addDoc.jsp"},{"menuId":"0015","menuPid":"0003","moduleId":"moduleROOT","menuName":"案件查詢","menuLevel":2,"isOpen":"N","isDelete":"N","menuUrl":"/Law/pages/doc/queryCase.jsp"}]";
		
		String other = "[{\"receivedDate\":\"2017-06-21\""
				+ ",\"bankDate\":\"2017-06-21\",\"docStatus\":\"8aa2e72a5c8074d5015c8076cfe50001\""
				+ ",\"typeOne\":\"8aa2e72a5c812434015c81307418000a\",\"typeTwo\":\"8aa2e72a5ca5db32015ca5de7a410001\""
				+ ",\"bankName\":\"8aa2e72a5c9b8c95015c9b8ff8780001\",\"receiptType\":\"0\",\"receiptAmount\":\"1\""
				+ ",\"courtDate\":\"2017-06-21\",\"remark\":\"0\"},{\"receivedDate\":\"2017-06-21\""
				+ ",\"bankDate\":\"2017-06-22\",\"docStatus\":\"8aa2e72a5c8074d5015c807749b60002\""
				+ ",\"typeOne\":\"8aa2e72a5c812434015c81307418000a\",\"typeTwo\":\"8aa2e72a5ca5db32015ca5df82760003\""
				+ ",\"bankName\":\"8aa2e72a5c9b8c95015c9b903de50002\",\"receiptType\":\"2\",\"receiptAmount\":\"2\",\"courtDate\":\"2017-06-22\",\"remark\":\"2\"}]";
		
		System.out.println(other);
		
		Gson gson = new Gson();
		
		List<LDocOtherdocs> subItems = gson.fromJson(other, new TypeToken<List<LDocOtherdocs>>(){}.getType());

		for(int i = 0;i < subItems.size();i ++){
			System.out.println(subItems.get(i).getBankName());
		}
	}
	
	public static void main3(String[] args){

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
		         

				StringBuffer queryString=new StringBuffer("select * from O_CaseNotes where Case_ID = 54313");
		         
		         rs = stmt.executeQuery(queryString.toString());  
				
		         List<LCekSignedCaseInfo> MapLCekSignedCaseInfo = new ArrayList<LCekSignedCaseInfo>();
//		         List<LCekColumn> MapColumnListnotnull=new ArrayList<LCekColumn>();
//		         List<LCekColumn> MapColumnListnull=new ArrayList<LCekColumn>();
		 		
		      // Iterate through the data in the result set and display it.  
		         while (rs.next()) {  
		        	 LCekSignedCaseInfo LCekSignedCaseInfo = new LCekSignedCaseInfo();
		        	 LCekSignedCaseInfo.setCase_ID(rs.getInt("Case_ID"));
		        	 MapLCekSignedCaseInfo.add(LCekSignedCaseInfo);
		         }  

		 			Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
		 			JsonObject jsonResponse = new JsonObject();
		 			jsonResponse.add("datanotnull", gson.toJsonTree(MapLCekSignedCaseInfo));
		 			
		 			System.out.println(jsonResponse);
			}catch(Exception e){
				log.error("finding all LCekColumn error msg=>",e);
			}
	    
//		;
	}
	
	public static void main2(String[] args) {
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
	            //Gson的地方ee
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
