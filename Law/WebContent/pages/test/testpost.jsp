<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" 
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>test</title>

</head>

<body>
<form id = "myForm" action="../../pages/cek/signedform.jsp" method="post">
  code: <input type="text" name="caseId" id="caseId" value ="54313"><br> 
  <input type="submit" value="Submit">
</form>



<script>
a = function testa(){
	json ='[{"receivedDate":"2017-06-22","bankDate":"2017-06-22","docStatus":"8aa2e72a5c8074d5015c8076cfe50001","typeOne":"8aa2e72a5c812434015c81307418000a","typeTwo":"8aa2e72a5ca5db32015ca5de7a410001","bankName":"8aa2e72a5c9b8c95015c9b8ff8780001","receiptType":"1","receiptAmount":"1","courtDate":"2017-06-22","remark":"1"}]';

	test = JSON.parse(json);
	
	window .open( "testpost.jsp?result=" + test); 
}


//document.getElementById("myForm").submit();
</script>
<%=request.getParameter("result") %>
<script>
</script>
<%=request.getParameter("userId") %>
<%=request.getParameter("userId") %>
<%=request.getParameter("userId") %>
</body>
</html>

