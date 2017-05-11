<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
<!-- Add By Jia 2017-05-05 新增對應窗口的JS功能 -->
<script type="text/javascript" src="legaljs/cek/cekcontactPerson.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
    var opt={
    		"oLanguage":{"sUrl":"i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"ajax":  "pages/cek/contactPerson/contactPersonAction!findAllContactBank.action",
    		"columns": [
                { "data": "bankName" },
                { "data": "memnm" }
            ]
            };
    $("#contactPersonTable").dataTable(opt);
    });
</script>

<div>
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnsetcontactPerson">
					    	<span class="ui-icon ui-icon-gear"></span> 設定
					</button>
					<button class="ui-button ui-widget ui-corner-all" id ="btnquerycontactPerson">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				</td>
			</tr>
			<!-- 查詢條件欄位 -->
			<table>
			<tr>
				<td>
			    	<label for="labsearchcontactPersonNo">負責人名稱: </label>
					<input id="iptsearchcontactPersonNo"></input>
				</td>
				<td>
			    	<label for="labsearchbankName">業主名稱: </label>
					<input id="iptsearchbankName"></input>
				</td>
			</tr>
			</table>
			<!-- 查詢條件欄位 -->
		</table>
	</div>
　<div style="margin:5px 5px 5px 5px">
		<table id="contactPersonTable"  >
		    <thead>
            <tr>
                <th>業主名稱</th>
                <th>負責窗口</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>業主名稱</th>
                <th>負責窗口</th>
            </tr>
        </tfoot>
    </table>

	</div>
</div>
<div id="contactPerson-dialog-form" title="設定對應窗口">
  <p class="validateTips"></p>
 
  <form>
    <fieldset>
      <label for="labcontactPersonCombobox">負責人</label>
      <select id="iptsetcontactPerson" class="text ui-widget-content ui-corner-all"><option value="">請選擇</option>	</select><div></div>
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>
</body>
</html>
