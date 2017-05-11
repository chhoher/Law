<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
<!-- Add By Jia 2017-03-07 新增variable的JS功能 -->
<script type="text/javascript" src="legaljs/sys/sysvariable.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
    var opt={
    		"oLanguage":{"sUrl":"i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"ajax":  "pages/sys/variable/variableAction!findVariable.action",
    		"columns": [
                { "data": "variableName" }
            ]
            };
    $("#variableTable").dataTable(opt);
    });
</script>

<!-- 資料字典主畫面 start -->
<div>
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnaddvariable">
					    	<span class="ui-icon ui-icon-gear"></span> 新增
					</button>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryvariable">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btndeletevariable">
				    	<span class="ui-icon ui-icon-gear"></span> 刪除
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btnsetvariablesub">
				    	<span class="ui-icon ui-icon-gear"></span> 資料設定
				  	</button>
				</td>
			</tr>
			<!-- 查詢條件欄位 -->
			<table>
			<tr>
				<td>
			    	<label for="labsearchvariableName">資料名稱: </label>
					<input id="iptsearchvariableName"></input>
				</td>
			</tr>
			</table>
			<!-- 查詢條件欄位 -->
		</table>
	</div>
　<div style="margin:5px 5px 5px 5px">
		<table id="variableTable"  >
		    <thead>
            <tr>
                <th>資料名稱</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>資料名稱</th>
            </tr>
        </tfoot>
    </table>

	</div>
</div>
<!-- 資料字典主畫面 end -->

<!-- 設定資料字典(小類) start -->
<div id="setvariablesub">

	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnaddvariablesub">
					    	<span class="ui-icon ui-icon-gear"></span> 新增
					</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btndeletevariablesub">
				    	<span class="ui-icon ui-icon-gear"></span> 刪除
				  	</button>
				</td>
			</tr>
		</table>
	</div>
	
	<div >
		<table id="variablesubTable"  class="ui-widget-content">
		    <thead>
            <tr>
                <th>資料名稱</th>
            </tr>
        </thead>
    </table>
	</div>
	
</div>
<!-- 設定資料字典(小類) end -->

<div id="variable-dialog-form" title="新增資料">
  <p class="validateTips"></p>
 
  <form>
    <fieldset>
      <label for="labvariableName">資料名稱</label>
      <input type="text" name="iptaddvariableName" id="iptaddvariableName" value="" class="text ui-widget-content ui-corner-all"><div></div>
 
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>

<!-- 新增資料名稱(小類) start -->
<div id="addvariablesub-dialog-form" title="新增資料名稱(小類)">
  <p class="validateTips"></p>
 
  <form>
    <fieldset>
      <label for="labvariablesubName">資料名稱</label>
      <input type="text" name="iptaddvariablesubName" id="iptaddvariablesubName" value="" class="text ui-widget-content ui-corner-all">
      
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>
<!-- 新增資料名稱(小類) end -->

</body>
</html>
