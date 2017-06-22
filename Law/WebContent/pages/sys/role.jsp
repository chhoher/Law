<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
	<!-- Add By Jia 2017-03-07 新增role的JS功能 -->
	<script type="text/javascript" src="../legaljs/sys/sysrole.js"></script>

	<script type="text/javascript">
		$(document).ready(	function() {
			var opt = {
				"oLanguage" : {
					"sUrl" : "../i18n/Chinese-traditional.json"
				},
				"bJQueryUI" : true,
				"ajax" : "../pages/sys/user/roleAction!findRole.action",
				"columns" : [ 
					{"data" : "roleCode"	},
					{"data" : "roleName"}
				]
			};
			
			$("#roleTable").dataTable(opt);

		});
	</script>

	<!-- 角色主畫面 start -->
	<div>
		<div style="overflow: auto; margin: 5px 5px 5px 5px"
			class="ui-widget-content">
			<table>
				<tr>
					<td>
						<button class="ui-button ui-widget ui-corner-all" id ="btnaddrole">
						    	<span class="ui-icon ui-icon-gear"></span> 新增
						</button>
						<button class="ui-button ui-widget ui-corner-all" id="btnqueryrole">
							<span class="ui-icon ui-icon-gear"></span> 查詢
						</button>
						<button class="ui-button ui-widget ui-corner-all" id="btnsetrolefunction">
							<span class="ui-icon ui-icon-gear"></span> 許可權設定
						</button>
					</td>
				</tr>
				<!-- 查詢條件欄位 -->
				<table>
					<tr>
						<td><label for="labsearchroleCode">角色代號: </label> 
						<input id="iptsearchroleCode"></input></td>
						<td><label for="labsearchroleName">角色姓名: </label> 
						<input id="iptsearchroleName"></input></td>
					</tr>
				</table>
				<!-- 查詢條件欄位 -->
			</table>
		</div>
		<div style="margin: 5px 5px 5px 5px">
			<table id="roleTable" class="display" cellspacing="0" width="100%">
				<thead>
					<tr>
						<th>角色代號</th>
						<th>角色名稱</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>角色代號</th>
						<th>角色名稱</th>
					</tr>
				</tfoot>
			</table>

		</div>
	</div>
	<!-- 角色主畫面 end -->

	<div id="role-dialog-form" title="新增角色">
	  <p class="validateTips"></p>
	 
	  <form>
	    <fieldset>
	      <label for="labroleCode">角色代號</label>
	      <input type="text" name="iptaddroleCode" id="iptaddroleCode" value="" class="text ui-widget-content ui-corner-all"><div></div>
	      <label for="labroleName">角色名稱</label>
	      <input type="text" name="iptaddroleName" id="iptaddroleName" value="" class="text ui-widget-content ui-corner-all"><div></div>
	 
	      <!-- Allow form submission with keyboard without duplicating the dialog button -->
	      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
	    </fieldset>
	  </form>
	</div>

	<div id="functionRole-dialog-form" title="設定許可權">
		<div id="rolefunctionTree"></div>
	</div>
</body>
</html>
