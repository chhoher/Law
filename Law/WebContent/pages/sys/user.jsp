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

			var roleopt={
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		    		"columns": [
		    			{ "data" :   "v",
		                    "render" : function ( data, type, row ) {
		                        if ( type === 'display' ) {
		                            return '<input type="checkbox" value=' + row.roleId + ' class="editor-active">';
		                        }
		                        return data;
		                    },
		                    className: "dt-body-center"
		                },
		                { "data" : "roleName" }
		            ],
		            rowCallback: function ( row, data ) {
		                // Set the checked state of the checkbox in the table
		                $('input.editor-active', row).prop( 'checked', data.v == 1 );
		            }
		            };
			
		    $("#setRoleTable").dataTable(roleopt);
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
					<td>
						<button class="ui-button ui-widget ui-corner-all" id="btnsetRole">
							<span class="ui-icon ui-icon-gear"></span> 選擇角色
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

	<!-- 使用者選擇角色畫面 -->
	<div id="setrole-dialog-form" title="選擇角色">
				<div id="divsetRole">
					<table id="setRoleTable"  class="ui-widget-content">
					    <thead>
				            <tr>
				           	 	<th></th>
				                <th>角色</th>
				            </tr>
				        </thead>
				    </table>
				</div>
		</div>
</body>
</html>
