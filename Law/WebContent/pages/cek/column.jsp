<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
<!-- Add By Jia 2017-03-07 新增column的JS功能 -->
<script type="text/javascript" src="../legaljs/cek/cekcolumn.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
    var opt={
    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"ajax":  "../pages/cek/column/columnAction!findColumn.action",
    		"columns": [
                { "data": "columnName" },
                { "data": "columnSize" },
                { "data": "columnType" }
            ]
            };
    $("#columnTable").dataTable(opt);
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
		<table id="columnTable"  class="display" cellspacing="0" width="100%">
		    <thead>
            <tr>
                <th>欄位名稱</th>
                <th>欄位長度</th>
                <th>欄位類型</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>欄位名稱</th>
                <th>欄位長度</th>
                <th>欄位類型</th>
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
