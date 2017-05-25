<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
	<!-- Add By Jia 2017-03-07 新增user的JS功能 -->
	<script type="text/javascript" src="../legaljs/sys/sysuser.js"></script>

	<script type="text/javascript">
		$(document).ready(	function() {
			var opt = {
				"oLanguage" : {
					"sUrl" : "../i18n/Chinese-traditional.json"
				},
				"bJQueryUI" : true,
				"ajax" : "../pages/sys/user/userAction!findAllmemdb.action",
				"columns" : [ {
					"data" : "memnm"
				} ]
			};
			
			$("#userTable").dataTable(opt);

		});
	</script>

	<!-- 使用者主畫面 start -->
	<div>
		<div style="overflow: auto; margin: 5px 5px 5px 5px"
			class="ui-widget-content">
			<table>
				<tr>
					<td>
						<button class="ui-button ui-widget ui-corner-all" id="btnqueryuser">
							<span class="ui-icon ui-icon-gear"></span> 查詢
						</button>
					</td>
				</tr>
				<!-- 查詢條件欄位 -->
				<table>
					<tr>
						<td><label for="labsearchuserName">姓名: </label> 
						<input id="iptsearchuserName"></input></td>
					</tr>
				</table>
				<!-- 查詢條件欄位 -->
			</table>
		</div>
		<div style="margin: 5px 5px 5px 5px">
			<table id="userTable">
				<thead>
					<tr>
						<th>姓名</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>姓名</th>
					</tr>
				</tfoot>
			</table>

		</div>
	</div>
	<!-- 使用者主畫面 end -->

</body>
</html>
