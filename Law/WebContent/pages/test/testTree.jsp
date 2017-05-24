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
		var menu;
		$(function() {
			/*
			var tree = $('#using_json_2')
					.jstree(
							{

								/*
									'core' : {
										'data' : {
											//'url' : "http://localhost:8080/Law/pages/test/treetest.json",
											'url' : "../../pages/sys/menu/menuAction!findMenu.action",
											//'url' : menu,
											'data' : function(node) {
												//alert(node);
												//node = menu;
												return {
													'id' : node.id,
													'text' : node.text,
													'parent' : node.parent
												}
											}
										}
									}
								 *//*
								'core' : {
									'data' : {
										"url" : "../../pages/sys/menu/menuAction!findMenu.action",
										"data" : function(node) {
											return {
												'id' : node.id,
												'text' : node.text,
												'parent' : node.parent
											};
										}
									}
								}
							});

			/*
			$.ajax({
				url : '../../pages/sys/menu/menuAction!findMenu.action',
				type : "POST",
				dataType : 'json',
				success : function(response) {
					menu = response.data;
					
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			
			 */
			//tree.jstree("refresh");
			 var menu;
			 
			 $.ajax({
					url : '../../pages/sys/menu/menuAction!findMenu.action',
					type : "POST",
					dataType : 'json',
					success : function(response) {
						menu = response.data;
						console.log(menu);
						$('#using_json_2').jstree({
			                'core': {
			                    'data': menu
			                },
			                "checkbox": {
			                    'visible': true,
			                    'keep_selected_style': false
			                },
			                "plugins": ["wholerow", "checkbox"]
			            });
					},
					error : function(xhr, ajaxOptions, thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
			 
			arrayCollection = [
                {"id": "animal", "parent": "#", "text": "Animals","state":{"opened":true}},
                {"id": "device", "parent": "#", "text": "Devices"},
                {"id": "dog", "parent": "animal", "text": "Dogs"},
                {"id": "lion", "parent": "animal", "text": "Lions"},
                {"id": "mobile", "parent": "device", "text": "Mobile Phones"},
                {"id": "lappy", "parent": "device", "text": "Laptops"},
                {"id": "daburman", "parent": "dog", "text": "Dabur Man", "icon": "/"},
                {"id": "dalmatian", "parent": "dog", "text": "Dalmatian", "icon": "/"},
                {"id": "african", "parent": "lion", "text": "African Lion", "icon": "/"},
                {"id": "indian", "parent": "lion", "text": "Indian Lion", "icon": "/"},
                {"id": "apple", "parent": "mobile", "text": "Apple IPhone 6", "icon": "/"},
                {"id": "samsung", "parent": "mobile", "text": "Samsung Note II", "icon": "/"},
                {"id": "lenevo", "parent": "lappy", "text": "Lenevo", "icon": "/"},
                {"id": "hp", "parent": "lappy", "text": "HP", "icon": "/"}
            ];
			
			console.log(arrayCollection);
			
			$('#using_json_2').jstree({
                'core': {
                    'data': arrayCollection,
                    'state' : {
                        'opened' : true
                      }
                },
                "checkbox": {
                    'visible': true,
                    'keep_selected_style': false
                },
                "plugins": ["wholerow", "checkbox"]
            });
			 
		});
	</script>
	<div id="using_json_2"></div>
</body>
</html>