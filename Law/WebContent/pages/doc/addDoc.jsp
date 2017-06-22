<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-05-12 文管新增的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docaddDoc.js"></script>
<script type="text/javascript" src="../legaljs/doc/adddoc/docOther.js"></script>
<head>
<title>文管新增</title>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			//將日期欄位格式化
			$( "#iptotherReceivedDate" ).datepicker();
		    $( "#iptotherReceivedDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
			$( "#iptotherBankDate" ).datepicker();
		    $( "#iptotherBankDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
			$( "#iptotherCourtDate" ).datepicker();
		    $( "#iptotherCourtDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
			
			var opt={
		    		"sDom": '<"top">rt<"bottom"><"clear">',
		    		"bSort": false,
		    		"bPaginate" : false,
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
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
				url : '../pages/doc/documents/docAction!loadCaseInfo.action',
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
						
						// Add By Jia 2017-06-22 初始話表單，若是新表單給予一個新的ID
						$.ajax({
							url : '../pages/doc/documents/docAction!initaddDoc.action',
							data : {
								'caseId' : <%=request.getParameter("caseId")%>
							},
							type : "POST",
							dataType : 'json',
							success : function(response) {
								law.addDoc.docInfoId = response.docInfoId;
							},
							error : function(xhr, ajaxOptions, thrownError) {
								alert(xhr.status);
								alert(thrownError);
							}
						});
						
					}
					datatable.fnDraw();
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		    
			
			
		    //Add By Jia 2017-06-07 初始化下拉選項的內容
		    $.ajax({
				url : '../pages/doc/documents/docAction!initSelectOption.action',
				type : "POST",
				dataType : 'json',
				success : function(response) {
					docStatus = response.DocStatus;
					
					//執行名義 文件狀態
					$("#iptcentitlementDocStatus option").remove();
					var docArray = response.DocStatus;
					var seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptcentitlementDocStatus").append(seloption);
					$('#iptcentitlementDocStatus option[value=8aa2e72a5c8074d5015c8076cfe50001]').attr('selected', 'selected');
					
					//執行名義 文件類別
					$("#iptcentitlementTypeOne option").remove();
					docArray = response.TypeOne;
					seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptcentitlementTypeOne").append(seloption);

					//執行名義 文件項目
					$("#iptcentitlementTypeTwo option").remove();
					docArray = response.TypeTwo;
					seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptcentitlementTypeTwo").append(seloption);
					
					//執行名義 債權人
					$("#iptcentitlementBankName option").remove();
					docArray = response.BankName;
					seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptcentitlementBankName").append(seloption);
					
					//執行名義 原債權人
					$("#iptcentitlementOldBankName option").remove();
					docArray = response.OldBankName;
					seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptcentitlementOldBankName").append(seloption);
					
					//執行名義 法院年字號
					$("#iptcentitlementCourtYearCourt option").remove();
					docArray = response.CourtYearCourt;
					seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptcentitlementCourtYearCourt").append(seloption);
					
					//=====其他=====
					//其他 文件狀態
					$("#iptotherDocStatus option").remove();
					docArray = response.DocStatus;
					seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptotherDocStatus").append(seloption);
					$('#iptotherDocStatus option[value=8aa2e72a5c8074d5015c8076cfe50001]').attr('selected', 'selected');
					
					//其他 文件類別
					$("#iptotherTypeOne option").remove();
					docArray = response.TypeOne;
					seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptotherTypeOne").append(seloption);
					$('#iptotherTypeOne option[value=8aa2e72a5c812434015c81307418000a]').attr('selected', 'selected');
					
					//其他 文件項目
					$("#iptotherTypeTwo option").remove();
					docArray = response.otherTypeTwo;
					seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptotherTypeTwo").append(seloption);
					
					//其他 債權人
					$("#iptotherBankName option").remove();
					docArray = response.BankName;
					seloption = "";
					$.each(docArray,function(i){
						seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
					});
					$("#iptotherBankName").append(seloption);
					
					//設定收文日期為當日
					$("#iptotherReceivedDate").val(response.nowDate);
					
					// 將當前caseId 存入
					law.addDoc.caseId =  <%=request.getParameter("caseId")%>;
					
					// 初始化其他選項
					law.addDoc.other.initothersubtab(response.nowDate, response.DocStatus, response.TypeOne, response.otherTypeTwo, response.BankName);
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
		<table id="caseInfoTable"  class="display" cellspacing="0" width="100%">
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
					<button class="ui-button ui-widget ui-corner-all" id ="btnsaveaddDoc">
					    <span class="ui-icon ui-icon-gear"></span> 儲存
					</button>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryCekcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 連結到本案文管系統
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btndeleteCekcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 連結到法務申請
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
	執行名義 <img alt="新增執行名義" src="../images/plus.png" onclick="law.addDoc.cen.addcensubtab()">

        <div id="censubtabs">
          <ul>
            <li><a href="#censubtabs-0">執行名義</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="censubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>共用案號</label></td>
					<td><input id="iptcentitlementShareCaseId"></input></td>
				</tr>
           	 	<tr>
					<td><input type="radio" name="centitlementShadow" value="all" id="rdocentitlementShadow" checked>影本</td>
					<td><input type="radio" name="centitlementShadow" value="all" id="rdocentitlementShadowBank" checked>業主收文僅提供影本</td>
					<td><label>文件狀態</label></td>
					<td><select id="iptcentitlementDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptcentitlementreceivedDate" ></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptcentitlementBankDate" ></input></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><select id="iptcentitlementTypeOne"><option value="">請選擇</option></select></td>
					<td><label>文件項目</label></td>
					<td><select id="iptcentitlementTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptcentitlementBankName"><option value="">請選擇</option></select></td>
					<td><label>原債權人</label></td>
					<td><select id="iptcentitlementOldBankName"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementRela"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>法院年字案股</label></td>
					<td><select id="iptcentitlementCourtYearCourt"><option value="">請選擇</option></select></td>
					<td><label>年度</label></td>
					<td><input id="iptcentitlementCourtYearYear" ></input></td>
					<td><label>字</label></td>
					<td><input id="iptcentitlementCourtYearTxt" ></input></td>
					<td><label>股別</label></td>
					<td><input id="iptcentitlementCourtYearShare" ></input></td>
					<td><label>案號</label></td>
					<td><input id="iptcentitlementCourtYearCaseId" ></input></td>
				</tr>
				<tr>
					<td><label>發文日期</label></td>
					<td><input id="iptcentitlementSendDate" ></input></td>
					<td><label>最近執行日期</label></td>
					<td><input id="iptcentitlementNewSendDate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptcentitlementRemark" ></input></td>
				</tr>
           	 </table>
           	 <table>
           	 	<tr><td>補正</td></tr>
           	 	<tr>
           	 		<td>
           	 			<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		           	 		<div>
								<input type="checkbox" name="ckbcentitlement" value="all" id="ckbcentitlementAll" checked>全選
								<input type="checkbox" name="ckbcentitlement" value="transcripts" id="ckbcentitlementTranscripts">戶謄
								<input type="checkbox" name="ckbcentitlement" value="coOwnedTranscripts" id="ckbcentitlementCoOwnedTranscripts">共有人戶謄
								<input type="checkbox" name="ckbcentitlement" value="mortgageeTranscripts" id="ckbcentitlementMortgageeTranscripts">抵押權人戶謄
								<input type="checkbox" name="ckbcentitlement" value="lawTranscripts" id="ckbcentitlementLawTranscripts">法代戶謄
								<input type="checkbox" name="ckbcentitlement" value="heirTranscripts" id="ckbcentitlementHeirTranscripts">繼承人戶謄
								<input type="checkbox" name="ckbcentitlement" value="dirtTranscripts" id="ckbcentitlementDirtTranscripts">土謄
								<input type="checkbox" name="ckbcentitlement" value="builtTranscripts" id="ckbcentitlementBuiltTranscripts">建謄
								<input type="checkbox" name="ckbcentitlement" value="distribution" id="ckbcentitlementDistribution">分配表
							</div>
							<div>
								<input type="checkbox" name="ckbcentitlement" value="thingThird" id="ckbcentitlementThingThird">事項表(第三人)
								<input type="checkbox" name="ckbcentitlement" value="thingDebt" id="ckbcentitlementThingDebt">事項表(債權人)
								<input type="checkbox" name="ckbcentitlement" value="coOwned" id="ckbcentitlementCoOwned">共有人名冊
								<input type="checkbox" name="ckbcentitlement" value="debtDoc" id="ckbcentitlementDebtDoc">債權文件
								<input type="checkbox" name="ckbcentitlement" value="detail" id="ckbcentitlementDetail">帳務明細
								<input type="checkbox" name="ckbcentitlement" value="file" id="ckbcentitlementFile">執名附件
								<input type="checkbox" name="ckbcentitlement" value="debtContinue" id="ckbcentitlementDebtContinue">債證續行表
								<input type="checkbox" name="ckbcentitlement" value="cashierCheck" id="ckbcentitlementCashierCheck">本票
								<input type="checkbox" name="ckbcentitlement" value="other" id="ckbcentitlementOther">其它
							</div>
						</div>
					</td>
           	 	</tr>
           	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementTranscripts">
           	 				<input type="checkbox" name="namecentitlementTranscriptsSub" value="transcripts" id="ckbcentitlementTranscriptsSub">戶謄
							<input id="iptcentitlementTranscriptsDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementTranscriptsRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementTranscriptsRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementTranscriptsRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementTranscriptsRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementTranscriptsRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementCoOwnedTranscripts">
           	 				<input type="checkbox" name="namecentitlementCoOwnedTranscriptsSub" value="transcripts" id="ckbcentitlementCoOwnedTranscriptsSub">共有人戶謄
							<input id="iptcentitlementCoOwnedTranscriptsDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementCoOwnedTranscriptsRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementCoOwnedTranscriptsRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementCoOwnedTranscriptsRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementCoOwnedTranscriptsRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementCoOwnedTranscriptsRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementMortgageeTranscripts">
           	 				<input type="checkbox" name="namecentitlementMortgageeTranscriptsSub" value="transcripts" id="ckbcentitlementMortgageeTranscriptsSub">抵押權人戶謄
							<input id="iptcentitlementMortgageeTranscriptsDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementMortgageeTranscriptsRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementMortgageeTranscriptsRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementMortgageeTranscriptsRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementMortgageeTranscriptsRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementMortgageeTranscriptsRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementLawTranscripts">
           	 				<input type="checkbox" name="namecentitlementLawTranscriptsSub" value="transcripts" id="ckbcentitlementLawTranscriptsSub">法代戶謄
							<input id="iptcentitlementLawTranscriptsDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementLawTranscriptsRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementLawTranscriptsRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementLawTranscriptsRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementLawTranscriptsRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementLawTranscriptsRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementHeirTranscripts">
           	 				<input type="checkbox" name="namecentitlementHeirTranscriptsSub" value="transcripts" id="ckbcentitlementHeirTranscriptsSub">繼承人戶謄
							<input id="iptcentitlementHeirTranscriptsDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementHeirTranscriptsRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementHeirTranscriptsRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementHeirTranscriptsRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementHeirTranscriptsRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementHeirTranscriptsRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementDirtTranscripts">
           	 				<input type="checkbox" name="namecentitlementDirtTranscriptsSub" value="transcripts" id="ckbcentitlementDirtTranscriptsSub">土謄
							<input id="iptcentitlementDirtTranscriptsDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementDirtTranscriptsRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementDirtTranscriptsRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementDirtTranscriptsRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementDirtTranscriptsRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementDirtTranscriptsRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementBuiltTranscripts">
           	 				<input type="checkbox" name="namecentitlementBuiltTranscripts" value="transcripts" id="ckbcentitlementBuiltTranscriptsSub">建謄
							<input id="iptcentitlementBuiltTranscriptsDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementBuiltTranscriptsRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementBuiltTranscriptsRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementBuiltTranscriptsRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementBuiltTranscriptsRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementBuiltTranscriptsRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementDistribution">
           	 				<input type="checkbox" name="namecentitlementDistributionSub" value="transcripts" id="ckbcentitlementDistributionSub">分配表
							<input id="iptcentitlementDistributionDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementDistributionRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementDistributionRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementDistributionRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementDistributionRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementDistributionRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementThingThird">
           	 				<input type="checkbox" name="namecentitlementThingThirdSub" value="transcripts" id="ckbcentitlementThingThirdSub">事項表(第三人)
							<input id="iptcentitlementThingThirdDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementThingThirdRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementThingThirdRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementThingThirdRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementThingThirdRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementThingThirdRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementThingDebt">
           	 				<input type="checkbox" name="namecentitlementThingDebtSub" value="transcripts" id="ckbcentitlementThingDebtSub">事項表(債權人)
							<input id="iptcentitlementThingDebtDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementThingDebtRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementThingDebtRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementThingDebtRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementThingDebtRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementThingDebtRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementCoOwned">
           	 				<input type="checkbox" name="namecentitlementCoOwnedSub" value="transcripts" id="ckbcentitlementCoOwnedSub">共有人名冊
							<input id="iptcentitlementCoOwnedDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementCoOwnedRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementCoOwnedRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementCoOwnedRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementCoOwnedRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementCoOwnedRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementDebtDoc">
           	 				<input type="checkbox" name="namecentitlementDebtDocSub" value="transcripts" id="ckbcentitlementDebtDocSub">債權文件
							<input id="iptcentitlementDebtDocDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementDebtDocRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementDebtDocRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementDebtDocRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementDebtDocRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementDebtDocRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementDetail">
           	 				<input type="checkbox" name="namecentitlementDetailSub" value="transcripts" id="ckbcentitlementDetailSub">帳務明細
							<input id="iptcentitlementDetailDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementDetailRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementDetailRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementDetailRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementDetailRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementDetailRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementFile">
           	 				<input type="checkbox" name="namecentitlementFileSub" value="transcripts" id="ckbcentitlementFileSub">執名附件
							<input id="iptcentitlementFileDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementFileRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementFileRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementFileRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementFileRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementFileRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divccentitlementDebtContinue">
           	 				<input type="checkbox" name="namecentitlementDebtContinueSub" value="transcripts" id="ckbcentitlementDebtContinueSub">債證續行表
							<input id="iptcentitlementDebtContinueDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementDebtContinueRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementDebtContinueRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementDebtContinueRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementDebtContinueRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementDebtContinueRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementCashierCheck">
           	 				<input type="checkbox" name="namecentitlementCashierCheckSub" value="transcripts" id="ckbcentitlementCashierCheckSub">本票
							<input id="iptcentitlementCashierCheckDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementCashierCheckRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementCashierCheckRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementCashierCheckRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementCashierCheckRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementCashierCheckRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
        	 	<tr>
           	 		<td>
           	 			<div id="divcentitlementOther">
           	 				<input type="checkbox" name="namecentitlementOtherSub" value="transcripts" id="ckbcentitlementOtherSub">其它
							<input id="iptcentitlementOtherDays" ></input>
           	 				<label>日內</label>
           	 				<label>備註</label>
							<input id="iptcentitlementOtherRemark" ></input>
							<label>相對人</label>
							<select id="iptcentitlementOtherRelaOne"><option value="">請選擇</option></select>
							<select id="iptcentitlementOtherRelaTwo"><option value="">請選擇</option></select>
							<select id="iptcentitlementOtherRelaThree"><option value="">請選擇</option></select>
							<select id="iptcentitlementOtherRelaFour"><option value="">請選擇</option></select>
           	 			</div>
           	 		</td>
        	 	</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDoccourtDoc">
	法院文<img alt="新增法院文" src="../images/plus.png" onclick="addcourtDocsubtab()">
		
		<div id="courtDocsubtabs">
          <ul>
            <li><a href="#courtDocsubtabs-0">法院文</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="courtDocsubtabs-0">
            <div>
				<table>
	           	 	<tr>
						<td><label>共用案號</label></td>
						<td><input id="iptcourtDocShareCaseId"></input></td>
					</tr>
	           	 	<tr>
						<td><input type="radio" name="courtDocShadow" value="all" id="rdocourtDocShadow" checked>影本</td>
						<td><input type="radio" name="courtDocShadow" value="all" id="rdocourtDocShadowBank" checked>業主收文僅提供影本</td>
						<td><label>文件狀態</label></td>
						<td><select id="iptcourtDocDocStatus"><option value="">請選擇</option></select></td>
					</tr>
					<tr>
						<td><label>收文日期</label></td>
						<td><input id="iptcourtDocReceivedDate" ></input></td>
						<td><label>業主調件日</label></td>
						<td><input id="iptcourtDocBankDate" ></input></td>
						<td><label>委任狀編號</label></td>
						<td><input id="iptcourtDocLetter" ></input></td>
					</tr>
					<tr>
						<td><label>文件類別</label></td>
						<td><select id="iptcourtDocTypeOne"><option value="">請選擇</option></select></td>
						<td><label>文件項目</label></td>
						<td><select id="iptcourtDocTypeTwo"><option value="">請選擇</option></select></td>
						<td><label>債權人</label></td>
						<td><select id="iptcourtDocBankName"><option value="">請選擇</option></select></td>
						<td><label>原債權人</label></td>
						<td><select id="iptcourtDocOldBankName"><option value="">請選擇</option></select></td>
					</tr>
					<tr>
						<td><label>法院年字案股</label></td>
						<td><select id="iptcourtDocCourtYearCourt"><option value="">請選擇</option></select></td>
						<td><label>年度</label></td>
						<td><input id="iptcourtDocCourtYearYear" ></input></td>
						<td><label>字</label></td>
						<td><input id="iptcourtDocCourtYearTxt" ></input></td>
						<td><label>股別</label></td>
						<td><input id="iptcourtDocCourtYearShare" ></input></td>
						<td><label>案號</label></td>
						<td><input id="iptcourtDocCourtYearCaseId" ></input></td>
					</tr>
           	 	</table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDoccashierCheck">
	本票<img alt="新增本票" src="../images/plus.png" onclick="addcashierChecksubtab()">

        <div id="cashierChecksubtabs">
          <ul>
            <li><a href="#cashierChecksubtabs-0">本票</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="cashierChecksubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptcashierCheckReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptcashierCheckBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><input id="iptcashierCheckDocStatus" ></input></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><input id="iptcashierCheckTypeOne" ></input></td>
					<td><label>文件項目</label></td>
					<td><input id="iptcashierCheckTypeTwo" ></input></td>
					<td><label>債權人</label></td>
					<td><input id="iptcashierCheckBankName" ></input></td>
					<td><label>原債權人</label></td>
					<td><input id="iptcashierCheckOldBankName" ></input></td>
				</tr>
				<tr>
					<td><label>相對人</label></td>
					<td><input id="iptcashierCheckRelationPerson" ></input></td>
				</tr>
				<tr>
					<td><label>本票發票日</label></td>
					<td><input id="iptcashierCheckStartDate" ></input></td>
					<td><label>本票金額</label></td>
					<td><input id="iptcashierCheckAmount" ></input></td>
					<td><label>本票到期日</label></td>
					<td><input id="iptcashierCheckEndDate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptcashierCheckRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocdebts">
	債讓<img alt="債讓" src="../images/plus.png" onclick="adddebtssubtab()">

        <div id="debtssubtabs">
          <ul>
            <li><a href="#debtssubtabs-0">債讓</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="debtssubtabs-0">

        <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptdebtsReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptdebtsBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><input id="iptdebtsDocStatus" ></input></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><input id="iptdebtsTypeOne" ></input></td>
					<td><label>文件項目</label></td>
					<td><input id="iptdebtsTypeTwo" ></input></td>
					<td><label>債權人</label></td>
					<td><input id="iptdebtsBankName" ></input></td>
					<td><label>原債權人</label></td>
					<td><input id="iptdebtsOldBankName" ></input></td>
				</tr>
				<tr>
					<td><label>相對人</label></td>
					<td><input id="iptdebtsRelationPerson" ></input></td>
				</tr>
				<tr>
					<td><label>法院年字案股</label></td>
					<td><input id="iptdebtsCourtYearCourt" ></input></td>
					<td><label>年度</label></td>
					<td><input id="iptdebtsCourtYearYear" ></input></td>
					<td><label>字</label></td>
					<td><input id="iptdebtsCourtYearTxt" ></input></td>
					<td><label>股別</label></td>
					<td><input id="iptdebtsCourtYearShare" ></input></td>
					<td><label>案號</label></td>
					<td><input id="iptdebtsCourtYearCaseId" ></input></td>
				</tr>
				<tr>
					<td><label>債讓日</label></td>
					<td><input id="iptdebtsDate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptdebtsRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
          </div>
  	</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocclaimsDoc">
	債權文件<img alt="債權文件" src="../images/plus.png" onclick="addclaimsDocsubtab()">

        <div id="claimsDocsubtabs">
          <ul>
            <li><a href="#claimsDocsubtabs-0">債權文件</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="claimsDocsubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptclaimsDocReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptclaimsDocBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><input id="iptclaimsDocDocStatus" ></input></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><input id="iptclaimsDocTypeOne" ></input></td>
					<td><label>文件項目</label></td>
					<td><input id="iptclaimsDocTypeTwo" ></input></td>
					<td><label>債權人</label></td>
					<td><input id="iptclaimsDocBankName" ></input></td>
					<td><label>原債權人</label></td>
					<td><input id="iptclaimsDocOldBankName" ></input></td>
				</tr>
				<tr>
					<td><label>相對人</label></td>
					<td><input id="iptclaimsDocrelationPerson" ></input></td>
				</tr>
				<tr>
					<td><label>額度</label></td>
					<td><input id="iptclaimsDocQuota" ></input></td>
					<td><label>利率</label></td>
					<td><input id="iptclaimsDocInterestRate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptclaimsDocRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocfile">
	卷宗<img alt="卷宗" src="../images/plus.png" onclick="addfilesubtab()">

        <div id="filesubtabs">
          <ul>
            <li><a href="#filesubtabs-0">卷宗</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="filesubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptfileReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptfileBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><input id="iptfileDocStatus" ></input></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><input id="iptfileTypeOne" ></input></td>
					<td><label>文件項目</label></td>
					<td><input id="iptfileTypeTwo" ></input></td>
					<td><label>債權人</label></td>
					<td><input id="iptfileBankName" ></input></td>
				</tr>
				<tr>
					<td><label>份數</label></td>
					<td><input id="iptfileNums" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptfileRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocother">
	其它<img alt="其它" src="../images/plus.png" onclick="law.addDoc.other.addothersubtab()">

        <div id="othersubtabs">
          <ul>
            <li><a href="#othersubtabs-0">其它</a></li>
          </ul>
          <div id="othersubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptotherReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptotherBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><select id="iptotherDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><select id="iptotherTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label>文件項目</label></td>
					<td><select id="iptotherTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptotherBankName"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>收據種類</label></td>
					<td><input id="iptotherReceiptType" ></input></td>
					<td><label>收據金額</label></td>
					<td><input id="iptotherReceiptAmount" ></input></td>
					<td><label>法院製發日</label></td>
					<td><input id="iptotherCourtDate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptotherRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	</div>
</body>
</html>