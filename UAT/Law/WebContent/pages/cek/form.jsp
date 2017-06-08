<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
<!-- Add By Jia 2017-03-07 新增checkform的JS功能 -->
<script type = "text/javascript" src = "../legaljs/cek/cekcheckform.js"></script>
<script type="text/javascript">

$(document).ready(function(){ 
	$( function() {
	    $( "#iptsearchformDate" ).datepicker();
	    $( "#iptsearchformDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
	  } );
	
    var opt={
    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"ajax":  "../pages/cek/checkformAction!findCekForm.action",
    		"columns": [
    			{ "data" : "checkformId","visible": false},
                { "data" : "checkformCode" },
                { "data" : "checkformType" },
                { "data" : "checkformName" }
            ],
            "rowCallback": function( row, data ) {
                if ( $.inArray(data.checkformType, cekformTableselected) !== -1 ) {
                    $(row).addClass('selected');
                }
            }
            };
    $("#cekformTable").dataTable(opt);
    });
</script>

<div>
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnaddCekcheckform">
					    <span class="ui-icon ui-icon-gear"></span> 新增
					</button>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryCekcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btndeleteCekcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 刪除
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btnaddCheckformColumns">
				    	<span class="ui-icon ui-icon-gear"></span> 表單欄位
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all">
				    	<span class="ui-icon ui-icon-gear"></span> 表單流程
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btnaddCheckformFiles">
				    	<span class="ui-icon ui-icon-gear"></span> 表單附件
				  	</button>
				</td>
			</tr>
			<!-- 查詢條件欄位 -->
			<table>
			<tr>
				<td>
			    	<label for="labsearchformCode">表單編號: </label>
					<input id="iptsearchformCode"></input>
				</td>
				<td>
			    	<label for="labsearchformType">表單類型: </label>
					<input id="iptsearchformType"></input>
				</td>
			    <td>
			    	<label for="labsearchformName">表單名稱: </label>
					<input id="iptsearchformName"></input>
				</td>
			    <td>
			    	<label for="labsearchformDate">日期: </label>
					<input id="iptsearchformDate"></input>
				</td>
			</tr>
			</table>
			<!-- 查詢條件欄位 -->
		</table>
	</div>
　<div style="margin:5px 5px 5px 5px">
		<table id="cekformTable"  >
		    <thead>
            <tr>
            	<th></th>
                <th>編號</th>
                <th>表單類型</th>
                <th>表單名稱</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
            	<th></th>
                <th>編號</th>
                <th>表單類型</th>
                <th>表單名稱</th>
            </tr>
        </tfoot>
    </table>

	</div>
</div>
<div id="check-dialog-form" title="新增表單">
  <p class="validateTips"></p>
 
  <form>
    <fieldset>
      <label for="labcheckformCode">表單編號</label>
      <input type="text" name="iptcheckformCode" id="iptcheckformCode" value="" class="text ui-widget-content ui-corner-all"><div></div>
      <label for="labcheckformType">表單類型</label>
      <input type="text" name="iptcheckformType" id="iptcheckformType" value="" class="text ui-widget-content ui-corner-all"><div></div>
      <label for="labcheckformName">表單名稱</label>
      <input type="text" name="iptcheckformName" id="iptcheckformName" value="" class="text ui-widget-content ui-corner-all"><div></div>
 
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>

</body>
<!-- 
<div  id ="checkformcolumn-dialog-form">
<iframe src="commons/selectedBox.html" width="410px" height="200px" frameborder="0" ></iframe>
</div> -->
<div  id ="checkformcolumn-dialog-form">
</div>
</html>
