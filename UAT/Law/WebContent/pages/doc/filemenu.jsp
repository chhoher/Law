<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>

<body>
<!-- <table border="1">-->
<table>
	<tr Height="80">
		<td align = "center">
  			<input type="submit" name="search" value="各項維護" class="button" style="width:190px;height:60px;font-size:20px;"
          	onclick="window.open('http://localhost:8080/TEST2/INQcase.jsp')">   
		</td>
		<td align = "center">
			<input type="submit" name="search" value="大批借調" style="width:190px;height:60px;font-size:20px;" class="button" 
          	onclick="window.open('https://www.google.com.tw/')">
		</td>
		<td align = "center">
			<input type="submit" name="search" value="調卷" style="width:190px;height:60px;font-size:20px;" class="button" 
          	onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
		<td align = "center">
			<input type="submit" name="search" value="調卷簽收" style="width:190px;height:60px;font-size:20px;" class="button" 
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
		<td align = "center">
			<input type="submit" name="search" value="歸還" style="width:190px;height:60px;font-size:20px;" class="button" 
           id="todocreturn">
	       <!--  onclick="window.open('http://localhost:8080/Law/pages/index.html')">--> 
		</td>
	</tr>
	<tr Height="80">
		<td align = "center">
			<input type="submit" name="search" value="申請借調" class="button"style="width:190px;height:60px;font-size:20px;"
			id="toapplyborrow"  >
           <!-- onclick="window.open('http://localhost:8080/Law/pages/index.html')">-->
		</td>
		<td align = "center">
			<input type="submit" name="search" value="退件上傳" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
		<td align = "center">
			<input type="submit" name="search" value="歷史紀錄" class="button" style="width:190px;height:60px;font-size:20px;"
			id="tohistoryquery"  >
			<!--  onclick=\"law.doc.historyquery\">-->
           <!-- onclick="window.open('http://localhost:8080/TEST2/historyQuery.jsp')">-->
           
		</td>
		<td align = "center">
			<input type="submit" name="search" value="文管總表" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
		<td align = "center" Width="200" >
			<input type="submit" name="search" value="報表" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
				
	</tr>
	<tr Height="80">
  		<td align = "center">
  			<input type="submit" name="search" value="補正(業主)" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')"> 
		</td>
		<td align = "center">
			<input type="submit" name="search" value="補正(公務機關)" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>	
		<td align = "center">
			<input type="submit" name="search" value="法務外控" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
		<td align = "center">
			<input type="submit" name="search" value="登報" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
		<td align = "center">
		</td>			
	</tr>
	<tr Height="80">
		<td align = "center">
			<input type="submit" name="search" value="繳費" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')"> 
		</td>
		<td align = "center">
			<input type="submit" name="search" value="繳費(回填金額)" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
		<td align = "center">
			<input type="submit" name="search" value="繳費(主管審核)" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
        </td>
    </tr>

	<tr Height="150">
		<td align = "center" Width="200" >
			<input type="submit" name="search" value="補正(業主調件)" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
		<td align = "center" Width="200" >
			 <input type="submit" name="search" value="補正&#13;&#10;(公家機關調件)" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')"/>
		</td>	
		<td align = "center" Width="200" >
			 <input type="submit" name="search" value="法務外控" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')">
		</td>
		<td align = "center" Width="200" >
			<input type="submit" name="search" value="登報" class="button" style="width:190px;height:60px;font-size:20px;"
           onclick="window.open('http://localhost:8080/Law/pages/index.html')"> 
		</td>			
	</tr>
</table>

<script type="text/javascript">

$(document).ready(function() {
	
	
$("#toapplyborrow").button().on("click",function() {
	
		law.tabControl.addTabs("#tabs",'8aa2e7fb5da17b76015da17f2be80001','申請借調','/Law/pages/doc/applyBorrowFunction.jsp');
	});
$("#tohistoryquery").button().on("click",function() {
	                                     
		law.tabControl.addTabs("#tabs",'8aa2e7fb5d97b1b0015d97d2d6570004','歷史系統','/Law/pages/doc/historyQuery.jsp');
	});
$("#todocreturn").button().on("click",function() {
    
	law.tabControl.addTabs("#tabs",'8aa2e7fb5dcb54e6015dcb572a880001','歸還','/Law/pages/doc/docReturn.jsp');
});
})
</script>
</body>
</html>
