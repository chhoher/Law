<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title></title>
<link href="../Style/admin.css" rel="stylesheet" type="text/css" />
<style type="text/css">
.tabs{ list-style:none; width:400px; height:23px;}
.tabs a {display:block; float:left;padding:2px 3px; background:#eff7ff; text-decoration:none; margin-right:2px;}
.tabs a.current{ background:#a1c6de; color:#000;}
.tab{ display:block; width:400px; height:300px; border:1px solid #ccc;}
</style>
</head>
<body>
<div class="tabs">
<a href="#xiangmu" >项目信息</a> 
<a href="#kehu">客户</a>
<a href="#wenda">职位提问</a>
</div>
<div id="xiangmu" class="tab">项目信息</div>
<div id="kehu" class="tab"> 客户</div>
<div id="wenda" class="tab">职位提问 </div>
<script>

$(function () {
$("div.tab").hide(); //隐藏所有
$("div.tabs a:first").addClass("current"); //第一个元素选中
$("div.tab:first").show(); //第一个内容显示
$("div.tabs a").click(function () {
	alert();
	$("div.tabs a").removeClass("current"); //将所有的tab去掉current样式
	$(".tab").hide(); //隐藏所有
	$(this).addClass("current");
	var activeTab = $(this).attr("href"); //获取div
	$(activeTab).show();
});
//获取从url中传递的
var url = window.location.href;
var reg = /#.+/;
if (reg.test(url)) {//含有#,默认为只有一个#，多个#情况不考虑
//隐藏所有
$("div.tabs a").removeClass("current"); //将所有的tab去掉current样式
$(".tab").hide(); //隐藏所有
var href = url.split('#')[1];
$("div.tabs [href=#" + href + "]").addClass("current");
$("#" + href).show();
}
}); 

</script>
</body>
</html> 

