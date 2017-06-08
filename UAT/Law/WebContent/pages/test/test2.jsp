<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
我是HEAD
<link rel="stylesheet" href="../../js/jquery-ui.css">
<link rel="stylesheet" href="../../js/themes/default/style.min.css" />

<script type="text/javascript" src="../../js/external/jquery/jquery.js"></script>
<script type="text/javascript" src="../../js/stable/jquery.layout.js"></script>
<script src="../../js/jquery-ui.js"></script>
<link href="../../js/jquery.dataTables.css" rel="stylesheet">
<script type="text/javascript" src="../../js/jquery.dataTables.min.js"></script>
<!-- Add By Jia 2017-02-10 jstree plugin -->
<script src="../../js/jstree.min.js"></script>


<style>
	
</style>

我是HEAD
</head>
<body>
我是BODY
<script type="text/javascript">
$(document).ready(function(){ 
    var opt={
    		"oLanguage":{"sUrl":"i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"ajax":  "pages/cek/checkformAction!findCekForm.action",
    		"columns": [
                { "data": "checkformId" },
                { "data": "checkformType" },
                { "data": "checkformName" }
            ]
            };
    //$("#usertable2").dataTable(opt);
    });
</script>

<div>
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnaddCekcheckform">
					    	<span class="ui-icon ui-icon-gear"></span> 新增
					</button>
					<button class="ui-button ui-widget ui-corner-all">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all">
				    	<span class="ui-icon ui-icon-gear"></span> 刪除
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all">
				    	<span class="ui-icon ui-icon-gear"></span> 表單欄位
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all">
				    	<span class="ui-icon ui-icon-gear"></span> 表單流程
				  	</button>
				</td>
			</tr>
			<tr>
			    <td>
			    	<label for="labIptCname">姓名: </label>
					<input id="iptCname"></input>
				</td>
				<td>
			    	<label for="labIptEmail">信箱: </label>
					<input id="iptEmail"></input>
				</td>
			</tr>
		</table>
	</div>
　<div style="margin:5px 5px 5px 5px">
		<table id="usertable2"  >
		    <thead>
            <tr>
                <th>編號</th>
                <th>表單類型</th>
                <th>表單名稱</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>編號</th>
                <th>表單類型</th>
                <th>表單名稱</th>
            </tr>
        </tfoot>
    </table>

	</div>
</div>
<div id="dialog-form" title="新增表單">
  <p class="validateTips"></p>
 
<script type="text/javascript" src="https://sbhc.portalhc.com/156779/SearchBox/339863"></script>
  <form>
    <fieldset>
      <label for="name">表單編號</label>
      <input type="text" name="name" id="name" value=" " class="text ui-widget-content ui-corner-all"><div></div>
      <label for="email">表單類型</label>
      <input type="text" name="email" id="email" value="" class="text ui-widget-content ui-corner-all"><div></div>
      <label for="password">表單名稱</label>
      <input type="password" name="password" id="password" value="xxxxxxx" class="text ui-widget-content ui-corner-all"><div></div>
 
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>
我是BODY
</body>
</html>
