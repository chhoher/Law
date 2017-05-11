<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta  http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<link rel="stylesheet" href="login.css">
<script type="text/javascript" src="../../js/external/jquery/jquery.js"></script>
<script src="../../js/jquery-ui.js"></script>
<script type="text/javascript" src="../../legaljs/login/login.js"></script>
<title>法務文管系統登入頁面</title>
</head>

<body>

<div class="login">
	<div class="login-triangle"></div>

	<h2 class="login-header">登入</h2>

	<form class="login-container" action="javascript:login()">
		<p>
			<input type="username" placeholder="使用者名稱" id = "username">
		</p>
		<p>
			<input type="password" placeholder="密碼" id = "password">
		</p>
		<p>
			<input type="submit" value="登入">
		</p>
	</form>
</div>



</body>
</html>
