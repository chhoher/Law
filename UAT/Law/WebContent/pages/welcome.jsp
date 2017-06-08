<!-- 
Add By Jia 2017-05-17
最初的進入畫面，進入後將自動導向pages/login/login.jsp
 -->
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<html>
<head>
<title></title>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<link rel="stylesheet" href="js/jquery-ui.css">
<link rel="stylesheet" href="js/themes/default/style.min.css" />

<!-- 導入Jquery -->
<script type="text/javascript" src="js/external/jquery/jquery.js"></script>
<script src="js/jquery-ui.js"></script>

</head>
<body>
	<script type="text/javascript">
	
		function closeSelf() {
			var h = window.screen.availHeight - 55;
			var w = window.screen.width - 10;

			var objwin = window.open(
							'pages/login/login.jsp',
							"APPLATFORM",
							'toolbar =no, menubar=no, scrollbars=no, resizable=yes, location=no, status=yes,width='
									+ w + ',height=' + h);

			//alert('window.name='+window.name);
			if (window.name != "APPLATFORM") {
				try {
					window.opener = null;
					window.open("", "_self");
				} catch (e) {
				} finally {
					window.close();
				}
			}
			objwin.moveTo(0, 0);

		}
		
		closeSelf();
	</script>

</body>
</html>


