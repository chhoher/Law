<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>

<style>
	
</style>

</head>
<body>
<script type="text/javascript">
$(document).ready(function(){ 
    var opt={
    		"oLanguage":{"sUrl":"i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"ajax":  "userAction!search.action",
    		"columns": [
                { "data": "USER _CNAME" },
                { "data": "USER _STATUS" },
                { "data": "USER_EMAIL" },
                { "data": "MODIFYDATE" }
            ]
            };
    $("#usertable").dataTable(opt);
    });
</script>
<div>
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
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
		<table id="usertable"  >
		    <thead>
            <tr>
                <th>姓名</th>
                <th>是否在職</th>
                <th>信箱</th>
                <th>修改日期</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>姓名</th>
                <th>是否在職</th>
                <th>信箱</th>
                <th>修改日期</th>
            </tr>
        </tfoot>
    </table>

	</div>
</div>

</body>
</html>
