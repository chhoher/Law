<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<title>法務文管系統</title>
<link rel="stylesheet" href="../../js/jquery-ui.css">
<link rel="stylesheet" href="../../js/themes/default/style.min.css" />
<script type="text/javascript" src="../../js/external/jquery/jquery.js"></script>
<script src="../../js/jquery-ui.js"></script>

<!-- Add By Jia 2017-02-10 jstree plugin -->
<script src="../../js/jstree.min.js"></script>

</head>
<body>
	<script>
		$(document).ready(function() {
			$('#using_json_2').jstree({
				'core' : {
					'data' : {
						'url' : "http://localhost:8080/Law/pages/test/treetest.json",
						'data' : function(node) {
							return {
								'id' : node.id,
								'text' : node.text,
								'parent' : node.parent
							};
						}
					}
				}
			});
		});
	</script>
	<div id="using_json_2"></div>
</body>
</html>