<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<body>
<!-- Add By Jia 2017-05-09 新增查詢案件的JS功能 -->
<script type="text/javascript" src="legaljs/cek/cekcolumn.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
    var opt={
    		"oLanguage":{"sUrl":"i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"ajax":  "pages/doc/documents/docAction!loadCaseInfo.action",
    		"columns": [
                { "data": "Bank_alias" },
                { "data": "Prod_Name" },
                { "data": "Case_ID" },
                { "data": "name" },
                { "data": "ID" },
                { "data": "PriDebt_amount" },
                { "data": "ctCase_d" },
                { "data": "ctCase_d" }
            ]
            };
    $("#queryCaseTable").dataTable(opt);
    });
</script>

<div>
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnaddcolumn">
					    	<span class="ui-icon ui-icon-gear"></span> 新增
					</button>
					<button class="ui-button ui-widget ui-corner-all" id ="btnquerycolumn">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btndeletecolumn">
				    	<span class="ui-icon ui-icon-gear"></span> 刪除
				  	</button>
				</td>
			</tr>
			<!-- 查詢條件欄位 -->
			<table>
			<tr>
				<td>
			    	<label for="labsearchcolumnName">欄位名稱: </label>
					<input id="iptsearchcolumnName"></input>
				</td>
				<td>
			    	<label for="labsearchcolumnType">欄位類型: </label>
					<input id="iptsearchcolumnType"></input>
				</td>
			</tr>
			</table>
			<!-- 查詢條件欄位 -->
		</table>
	</div>
　<div style="margin:5px 5px 5px 5px">
		<table id="queryCaseTable"  >
		    <thead>
            <tr>
                <th>委託公司</th>
                <th>產品別</th>
                <th>案號</th>
                <th>債務人</th>
                <th>ID</th>
                <th>委託金額</th>
                <th>委託日</th>
                <th>庫存或退案</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>委託公司</th>
                <th>產品別</th>
                <th>案號</th>
                <th>債務人</th>
                <th>ID</th>
                <th>委託金額</th>
                <th>委託日</th>
                <th>庫存或退案</th>
            </tr>
        </tfoot>
    </table>

	</div>
</div>
<div id="column-dialog-form" title="新增欄位">
  <p class="validateTips"></p>
 
  <form>
    <fieldset>
      <label for="labcolumnName">欄位名稱</label>
      <input type="text" name="iptaddcolumnName" id="iptaddcolumnName" value="" class="text ui-widget-content ui-corner-all"><div></div>
      <label for="labcolumnSize">欄位長度</label>
      <input type="text" name="iptaddcolumnSize" id="iptaddcolumnSize" value="" class="text ui-widget-content ui-corner-all"><div></div>
      <label for="labcolumnType">欄位類型</label>
      <input type="text" name="iptaddcolumnType" id="iptaddcolumnType" value="" class="text ui-widget-content ui-corner-all"><div></div>
 
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>
</body>
</html>
