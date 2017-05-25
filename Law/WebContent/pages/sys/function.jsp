<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
	<!-- Add By Jia 2017-03-07 新增function的JS功能 -->
	<script type="text/javascript" src="../legaljs/sys/sysfunction.js"></script>

	<script type="text/javascript">
		$(document).ready(	function() {
			var opt = {
				"oLanguage" : {
					"sUrl" : "../i18n/Chinese-traditional.json"
				},
				"bJQueryUI" : true,
				"ajax" : "../pages/sys/function/functionAction!findFunction.action",
				"columns" : [ 
					{"data" : "functionName"},
					{"data" : "functionUrl"}
				]
			};
			
			$("#functionTable").dataTable(opt);

		});
	</script>

	<!-- 功能鏈結主畫面 start -->
	<div>
		<div style="overflow: auto; margin: 5px 5px 5px 5px"
			class="ui-widget-content">
			<table>
				<tr>
					<td>
						<button class="ui-button ui-widget ui-corner-all" id ="btnaddfunction">
						    	<span class="ui-icon ui-icon-gear"></span> 新增
						</button>
						<button class="ui-button ui-widget ui-corner-all" id="btnqueryfunction">
							<span class="ui-icon ui-icon-gear"></span> 查詢
						</button>
					</td>
				</tr>
				<!-- 查詢條件欄位 -->
				<table>
					<tr>
						<td><label for="labsearchfunctionName">功能鏈結名稱: </label> 
						<input id="iptsearchfunctionName"></input></td>
					</tr>
				</table>
				<!-- 查詢條件欄位 -->
			</table>
		</div>
		<div style="margin: 5px 5px 5px 5px">
			<table id="functionTable">
				<thead>
					<tr>
						<th>功能鏈結名稱</th>
						<th>URL</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>功能鏈結名稱</th>
						<th>URL</th>
					</tr>
				</tfoot>
			</table>

		</div>
	</div>
	<!-- 功能鏈結主畫面 end -->

	<div id="function-dialog-form" title="新增功能鏈結">
	  <p class="validateTips"></p>
	 
	  <form>
	    <fieldset>
	      <label for="labfunctionName">功能鏈結名稱</label>
	      <input type="text" name="iptaddfunctionName" id="iptaddfunctionName" value="" class="text ui-widget-content ui-corner-all"><div></div>
	      <label for="labfunctionUrl">URL</label>
	      <input type="text" name="iptaddfunctionUrl" id="iptaddfunctionUrl" value="" class="text ui-widget-content ui-corner-all"><div></div>
	 
	      <!-- Allow form submission with keyboard without duplicating the dialog button -->
	      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
	    </fieldset>
	  </form>
	</div>

</body>
</html>
