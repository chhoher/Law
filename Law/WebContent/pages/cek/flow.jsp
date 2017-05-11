<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
<!-- Add By Jia 2017-03-07 新增flow的JS功能 -->
<script type="text/javascript" src="legaljs/cek/cekflow.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
    var opt={
    		"oLanguage":{"sUrl":"i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"ajax":  "pages/cek/flow/flowAction!findFlow.action",
    		"columns": [
                { "data": "flowCode" },
                { "data": "flowType" },
                { "data": "flowName" }
            ]
            };
    $("#flowTable").dataTable(opt);
    
    });
</script>

<!-- 流程主畫面 start -->
<div>

	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnaddflow">
					    	<span class="ui-icon ui-icon-gear"></span> 新增
					</button>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryflow">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btndeleteflow">
				    	<span class="ui-icon ui-icon-gear"></span> 刪除
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btnsetSubflow">
				    	<span class="ui-icon ui-icon-gear"></span> 子流程設定
				  	</button>
				</td>
			</tr>
			<!-- 查詢條件欄位 -->
			<table>
			<tr>
				<td>
			    	<label for="labsearchflowCode">流程編號: </label>
					<input id="iptsearchflowCode"></input>
				</td>
				<td>
			    	<label for="labsearchflowType">流程類型: </label>
					<input id="iptsearchflowType"></input>
				</td>
				<td>
			    	<label for="labsearchflowName">流程名稱: </label>
					<input id="iptsearchflowName"></input>
				</td>
			</tr>
			</table>
			<!-- 查詢條件欄位 -->
		</table>
	</div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="flowTable"  >
		    <thead>
            <tr>
                <th>流程編號</th>
                <th>流程類型</th>
                <th>流程名稱</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>流程編號</th>
                <th>流程類型</th>
                <th>流程名稱</th>
            </tr>
        </tfoot>
    </table>
	</div>
	
</div>
<!-- 流程主畫面 end -->

<!-- 設定子流程 start -->
<div id="setflowsub">

	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnaddflowsub">
					    	<span class="ui-icon ui-icon-gear"></span> 新增
					</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btndeleteflowsub">
				    	<span class="ui-icon ui-icon-gear"></span> 刪除
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btnsetflowsubAlert">
				    	<span class="ui-icon ui-icon-gear"></span> 通知設定
				  	</button>
				</td>
			</tr>
		</table>
	</div>
	
	<div >
		<table id="flowsubTable"  class="ui-widget-content">
		    <thead>
            <tr>
                <th>順序</th>
                <th>流程名稱</th>
                <th>流程類型</th>
            </tr>
        </thead>
    </table>
	</div>
	
</div>
<!-- 設定子流程 end -->

<!-- 新增流程 start -->
<div id="flow-dialog-form" title="新增流程">
  <p class="validateTips"></p>
 
  <form>
    <fieldset>
      <label for="labflowCode">流程編號</label>
      <input type="text" name="iptaddflowCode" id="iptaddflowCode" value="" class="text ui-widget-content ui-corner-all"><div></div>
      <label for="labflowType">流程類型</label>
      <input type="text" name="iptaddflowType" id="iptaddflowType" value="" class="text ui-widget-content ui-corner-all"><div></div>
      <label for="labflowName">流程名稱</label>
      <input type="text" name="iptaddflowName" id="iptaddflowName" value="" class="text ui-widget-content ui-corner-all"><div></div>
 
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>
<!-- 新增流程 end -->

<!-- 新增子流程 start -->
<div id="addflowsub-dialog-form" title="新增子流程">
  <p class="flowsubvalidateTips"></p>
 
  <form>
    <fieldset>
      <label for="labflowCode">流程名稱</label>
      <input type="text" name="iptaddflowCode" id="iptaddflowsubName" value="" class="text ui-widget-content ui-corner-all">
      <div class="ui-widget">
		  <label for="labflowType">流程類型</label>
		  <select id="cobflowType">
		    <option value="">請選擇</option>
		    <option value="basicFlow">一般流程</option>
		    <option value="checkFlow">簽核流程</option>
		    <option value="organCheckFlow">跨部門簽核流程</option>
		    <option value="assignFlow">分派流程</option>
		    <option value="endFlow">結案流程</option>
		  </select>
	  </div>
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>
<!-- 新增子流程 end -->

<!-- 子流程選擇【一般流程】 start -->
<div>
	
</div>
<!-- 子流程選擇【一般流程】 start -->

</body>
</html>
