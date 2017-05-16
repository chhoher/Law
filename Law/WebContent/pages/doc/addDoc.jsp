<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-05-12 文管新增的JS功能 -->
<script type="text/javascript" src="legaljs/doc/docaddDoc.js"></script>
<head>
<title>文管新增</title>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			var opt={
		    		"sDom": '<"top">rt<"bottom"><"clear">',
		    		"bSort": false,
		    		"oLanguage":{"sUrl":"i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		    		"columns": [
		                { "data": "Bank_alias" },
		                { "data": "Case_ID" },
		                { "data": "name" },
		                { "data": "ID" },
		                { "data": "PriDebt_amount" },
		                { "data": "ctCase_d" },
		                { "data": "O_or_C",
		                	"render": function ( data, type, full, meta ) {
								if(data == "O"){
									return "庫存"
								}else{
									return "退案"
								}
		                	}   
		                }
		            ]
		            };
		    $("#caseInfoTable").dataTable(opt);
		    
		    var datatable = $("#caseInfoTable").dataTable();
			datatable.fnClearTable();
			var json = "";
			$.ajax({
				url : 'pages/doc/documents/docAction!loadCaseInfo.action',
				data : {
					'iptsearchcaseId' : <%=request.getParameter("caseId")%>
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					json = response.data;
					datatable.fnClearTable();
					if (response.data != '') {
						datatable.fnAddData(json);
					}
					datatable.fnDraw();
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		    
		    
		    //Add By Jia 2017-05-09 控制checkbox有沒有要顯示下列填寫項目 start
		    $("#ckbaddDocAll").on( "click", function(){
		    	if($("#ckbaddDocAll").is(':checked')){
		    		$("#ckbaddDocentitlementForeclosure").prop("checked", false);
		    		$("#ckbaddDoccourtDoc").prop("checked", false);
		    		$("#ckbaddDoccashierCheck").prop("checked", false);
		    		$("#ckbaddDocdebts").prop("checked", false);
		    		$("#ckbaddDocclaimsDoc").prop("checked", false);
		    		$("#ckbaddDocfile").prop("checked", false);
		    		$("#ckbaddDocother").prop("checked", false);
		    		
		    		$("#divaddDocentitlementForeclosure").show();
		    		$("#divaddDoccourtDoc").show();
		    		$("#divaddDoccashierCheck").show();
		    		$("#divaddDocdebts").show();
		    		$("#divaddDocclaimsDoc").show();
		    		$("#divaddDocfile").show();
		    		$("#divaddDocother").show();
		    	}else{
		    		$("#divaddDocentitlementForeclosure").hide();
		    		$("#divaddDoccourtDoc").hide();
		    		$("#divaddDoccashierCheck").hide();
		    		$("#divaddDocdebts").hide();
		    		$("#divaddDocclaimsDoc").hide();
		    		$("#divaddDocfile").hide();
		    		$("#divaddDocother").hide();
		    	}
		    });
		    $("#ckbaddDocentitlementForeclosure").on( "click", function(){
		    	if($("#ckbaddDocentitlementForeclosure").is(':checked')){
		    		
		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}
		    		
		    		$("#divaddDocentitlementForeclosure").show();
		    	}else{
		    		$("#divaddDocentitlementForeclosure").hide();
		    	}
		    });
		    $("#ckbaddDoccourtDoc").on( "click", function(){
		    	if($("#ckbaddDoccourtDoc").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}
		    		
		    		$("#divaddDoccourtDoc").show();
		    	}else{
		    		$("#divaddDoccourtDoc").hide();
		    	}
		    });
		    $("#ckbaddDoccashierCheck").on( "click", function(){
		    	if($("#ckbaddDoccashierCheck").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}
		    		
		    		$("#divaddDoccashierCheck").show();
		    	}else{
		    		$("#divaddDoccashierCheck").hide();
		    	}
		    });
		    $("#ckbaddDocdebts").on( "click", function(){
		    	if($("#ckbaddDocdebts").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}

		    		$("#divaddDocdebts").show();
		    	}else{
		    		$("#divaddDocdebts").hide();
		    	}
		    });
		    $("#ckbaddDocclaimsDoc").on( "click", function(){
		    	if($("#ckbaddDocclaimsDoc").is(':checked')){
		    		
		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}

		    		$("#divaddDocclaimsDoc").show();
		    	}else{
		    		$("#divaddDocclaimsDoc").hide();
		    	}
		    });
		    $("#ckbaddDocfile").on( "click", function(){
		    	if($("#ckbaddDocfile").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}

		    		$("#divaddDocfile").show();
		    	}else{
		    		$("#divaddDocfile").hide();
		    	}
		    });
		    $("#ckbaddDocother").on( "click", function(){
		    	if($("#ckbaddDocother").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}

		    		$("#divaddDocother").show();
		    	}else{
		    		$("#divaddDocother").hide();
		    	}
		    });
		  //Add By Jia 2017-05-09 控制checkbox有沒有要顯示下列填寫項目 end
		    var $slave = $("#subtabs").tabs();
		});
	</script>
<div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="caseInfoTable"  >
		    <thead>
            <tr>
                <th>委託公司</th>
                <th>案號</th>
                <th>債務人</th>
                <th>ID</th>
                <th>委託金額</th>
                <th>委託日期</th>
                <th>庫存或退案</th>
            </tr>
        </thead>
    </table>
	</div>
	
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
				</td>
			</tr>
		</table>
	</div>
	
	<div>
	<input type="checkbox" name="docType" value="all" id="ckbaddDocAll" checked>全選
	<input type="checkbox" name="docType" value="entitlementForeclosure" id="ckbaddDocentitlementForeclosure">執行名義
	<input type="checkbox" name="docType" value="courtDoc" id="ckbaddDoccourtDoc">法院文
	<input type="checkbox" name="docType" value="cashierCheck" id="ckbaddDoccashierCheck">本票
	<input type="checkbox" name="docType" value="debts" id="ckbaddDocdebts">債讓
	<input type="checkbox" name="docType" value="claimsDoc" id="ckbaddDocclaimsDoc">債權文件
	<input type="checkbox" name="docType" value="file" id="ckbaddDocfile">卷宗
	<input type="checkbox" name="docType" value="other" id="ckbaddDocother">其它
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocentitlementForeclosure">
	執行名義 <img alt="新增執行名義" src="images/plus.png" onclick="addsubtab()">

        <div id="subtabs">
          <ul>
            <li><a href="#subtabs-1">subtab1</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="subtabs-1">
            <div>
           	 <table>
           	 	<tr>
					<td><label>共用案號</label></td>
					<td><input id="iptcentitlementShareCaseId"></input></td>
				</tr>
				<tr>
					<td><label>業主調件日</label></td>
					<td><input id="iptcentitlementBankDate" ></input></td>
					<td><label>*收文日期</label></td>
					<td><input id="iptcentitlementreceivedDate" ></input></td>
				</tr>
				<tr>
					<td><label>*文件類別</label></td>
					<td><input id="iptcentitlementBankDate" ></input></td>
					<td><label>*文件項目</label></td>
					<td><input id="iptcentitlementreceivedDate" ></input></td>
					<td><label>*債權人</label></td>
					<td><input id="iptcentitlementreceivedDate" ></input></td>
					<td><label>原債權人</label></td>
					<td><input id="iptcentitlementreceivedDate" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDoccourtDoc">
	法院文<img alt="新增執行名義" src="images/plus.png" onclick="addsubtab()">

        <div id="subtabs">
          <ul>
            <li><a href="#subtabs-1">subtab1</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
            <li><a href="#subtabs-2">subtab2</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="subtabs-1">
            some data
          </div>
          <div id="subtabs-2">
            some data
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDoccashierCheck">
	本票<img alt="新增執行名義" src="images/plus.png" onclick="addsubtab()">

        <div id="subtabs">
          <ul>
            <li><a href="#subtabs-1">subtab1</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
            <li><a href="#subtabs-2">subtab2</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="subtabs-1">
            some data
          </div>
          <div id="subtabs-2">
            some data
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocdebts">
	債讓<img alt="新增執行名義" src="images/plus.png" onclick="addsubtab()">

        <div id="subtabs">
          <ul>
            <li><a href="#subtabs-1">subtab1</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
            <li><a href="#subtabs-2">subtab2</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="subtabs-1">
            some data
          </div>
          <div id="subtabs-2">
            some data
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocclaimsDoc">
	債權文件<img alt="新增執行名義" src="images/plus.png" onclick="addsubtab()">

        <div id="subtabs">
          <ul>
            <li><a href="#subtabs-1">subtab1</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
            <li><a href="#subtabs-2">subtab2</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="subtabs-1">
            some data
          </div>
          <div id="subtabs-2">
            some data
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocfile">
	卷宗<img alt="新增執行名義" src="images/plus.png" onclick="addsubtab()">

        <div id="subtabs">
          <ul>
            <li><a href="#subtabs-1">subtab1</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
            <li><a href="#subtabs-2">subtab2</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="subtabs-1">
            some data
          </div>
          <div id="subtabs-2">
            some data
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocother">
	其它<img alt="新增執行名義" src="images/plus.png" onclick="addsubtab(this)">

        <div id="subtabs">
          <ul>
            <li><a href="#subtabs-1">subtab1</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
            <li><a href="#subtabs-2">subtab2</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="subtabs-1">
            some data
          </div>
          <div id="subtabs-2">
            some data
          </div>
  		</div>
	</div>
	
</div>
</body>
</html>