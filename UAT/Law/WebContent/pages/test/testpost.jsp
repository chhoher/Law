<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.util.Date,java.text.SimpleDateFormat"
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

//document.getElementById("myForm").submit();
</script>
<%=request.getParameter("userId") %>
</body>
</html>

