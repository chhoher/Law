<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta  http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<title>Insert title here</title>
<link rel="stylesheet" href="../../js/jquery-ui.css">
<link rel="stylesheet" href="../../js/themes/default/style.min.css" />

<script type="text/javascript" src="../../js/external/jquery/jquery.js"></script>
<script src="../../js/jquery-ui.js"></script>
<link href="../../js/jquery.dataTables.css" rel="stylesheet">
<script type="text/javascript" src="../../js/jquery.dataTables.min.js"></script>
<!-- Add By Jia 2017-04-11 多檔上傳JS引用 -->
<script src="../../js/vendor/jquery.ui.widget.js"></script>
<script src="../../js/jquery.iframe-transport.js"></script>
<script src="../../js/jquery.fileupload.js"></script>

<script src="../../test/testtab.js"></script>

</head>
<body>
<script type="text/JavaScript">
$(document).ready(function(){ 
	var tabArr= [];
	

	$("#tabs").tabs().on( "tabsbeforeload", function( event, ui ) {
        var key = ui.tab.find("a").text();
          if(tabArr[key]!=undefined){
              if(tabArr[key+"_loaded"] != undefined){
                ui.jqXHR.abort();
              }
          }
    } );

    $("#tabs").tabs().on("tabsload", function (event, ui) {
        var key = ui.tab.innerHTML;
        tabArr[key+"_loaded"] = 1;
    });

});
</script>
<div id="tabs"  class="tabs">
			<ul class="list-side">
				<li>
					<a href="/Law/pages/sys/file.jsp" >為什麼</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span>
				</li>
				<li><a href="#tab-3">Google Tab</a></li>
				<!--  <li class="litab">
					<a href="#aaaa" target="_blank" >UCAMC</a>
				</li>-->
			</ul>
			<!-- 嚙緻嚙諒可嚙瘡嚙踝蕭嚙諉哨蕭嚙踝蕭嚙諉抬蕭 -->
			
			<!-- <div id ="aaaa">
				<a href="/Law/pages/cek/form.jsp" target="_blank" >UCAMC</a>
			</div> -->
			<div id="tab-3">
				<p>asdasd</p>
    			<!-- <iframe src="http://www.google.com"></iframe> -->
			</div>
			
</div>
  

</body>
</html>