<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"
	import="com.myjs.sys.user.model.VEIPMemdb" %>
<!DOCTYPE html>
<html>
<body>
<!-- Add By Jia 2017-03-07 新增申請表單的JS功能 -->
<script type="text/javascript" src="legaljs/cek/cekrecordcheckform.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
	$( "#iptsearchrecordcheckformCreateDateS" ).datepicker();
    $( "#iptsearchrecordcheckformCreateDateS" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
    $( "#iptsearchrecordcheckformCreateDateE" ).datepicker();
    $( "#iptsearchrecordcheckformCreateDateE" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
    var opt={
    		"oLanguage":{"sUrl":"i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"ajax":  "pages/cek/recordcheckform/recordcheckformAction!findRecordCheckform.action",
    		"columns": [
                { "data": "caseId" },
                { "data": "applyDate" },
                { "data": "bankName" },
                { "data": "prodName" },
                { "data": "payer" },
                { "data": "payerRole" },
                { "data": "type" },
                { "data": "periods" },
                { "data": "paytimeStart" },
                { "data": "paytimeEnd" },
                { "data": "ammountP" },
                { "data": "ammountSum" },
                { "data": "applyUserName" },
                { "data": "status",
                	"render": function ( data, type, full, meta ) {
                		if(data == "1"){
                			return "暫存";
                		}else if(data == "2"){
                			return "主管審核中";
                		}else if(data == "3"){
                			return "主管退回";
                		}else if(data == "4"){
                			return "業主審核中";
                		}else if(data == "5"){
                			return "結案"
                		}
                }
                }
            ]
            };
    $("#recordcheckformTable").dataTable(opt);
    
    });
</script>

<!-- 申請表單主畫面 start -->
<div>

	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnaddrecordcheckform">
					    	<span class="ui-icon ui-icon-gear"></span> 新增
					</button>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryrecordcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				  	<!-- <button class="ui-button ui-widget ui-corner-all" id ="btndeleterecordcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 刪除
				  	</button> -->
				  	<button class="ui-button ui-widget ui-corner-all" id ="btnopenrecordcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 查看
				  	</button>
				</td>
			</tr>
			<!-- 查詢條件欄位 -->
			<table>
			<tr>
				<td>
			    	<label for="labsearchrecordcheckformCreateDateS">申請日期: </label>
					<input id="iptsearchrecordcheckformCreateDateS"></input>
				</td>
				<td>
			    	<label for="labsearchrecordcheckformCreateDateE">~ </label>
					<input id="iptsearchrecordcheckformCreateDateE"></input>
				</td>
				<%
				VEIPMemdb loginUser = (VEIPMemdb)request.getSession().getAttribute("AP_SYS_SESSION_LOGIN_MEMDB");
				if( loginUser.getMemadm().equals("Y")) {%>
				<td>
			    	<label for="labsearchrecordcheckformApplyUserId">申請人: </label>
					<input id="iptsearchrecordcheckformApplyUserId"></input>
				</td>
				<%} %>
				<td>
			    	<label for="labsearchrecordcheckStatus">狀態: </label>
					<select id="iptsearchrecordcheckStatus">
								<option value="0">請選擇</option>
								<option value="1">暫存</option>
								<option value="2">主管審核</option>
								<option value="3">主管退件</option>
								<option value="4">業主審核</option>
								<option value="5">結案</option>
					</select>
				</td>
			</tr>
			</table>
			<!-- 查詢條件欄位 -->
		</table>
	</div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="recordcheckformTable"  >
		    <thead>
            <tr>
            	<th>案號</th>
            	<th>送簽日期</th>
            	<th>業主名稱</th>
            	<th>產品名稱</th>
            	<th>清償對象</th>
            	<th>角色</th>
            	<th>簽呈類型</th>
            	<th>期數</th>
            	<th>繳款起日</th>
            	<th>繳款迄日</th>
            	<th>每期金額</th>
            	<th>總繳款金額</th>
                <th>申請人</th>
                <th>狀態</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
            	<th>案號</th>
            	<th>送簽日期</th>
            	<th>業主名稱</th>
            	<th>產品名稱</th>
            	<th>清償對象</th>
            	<th>角色</th>
            	<th>簽呈類型</th>
            	<th>期數</th>
            	<th>繳款起日</th>
            	<th>繳款迄日</th>
            	<th>每期金額</th>
            	<th>總繳款金額</th>
                <th>申請人</th>
                <th>狀態</th>
            </tr>
        </tfoot>
    </table>
	</div>
	
</div>
<!-- 申請表單主畫面 end -->

<!-- 新增申請表單 start -->
<div id="recordcheckform-dialog-form" title="新增簽呈">
  <p class="validateTips"></p>
 
  <form>
    <fieldset>
      <label for="labsignedCaseNo">案號</label>
      <input type="text" name="iptsignedCaseNo" id="iptsignedCaseNo" value="" class="text ui-widget-content ui-corner-all"><div></div>
 
      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
  </form>
</div>
<!-- 新增申請表單 end -->

</body>
</html>
