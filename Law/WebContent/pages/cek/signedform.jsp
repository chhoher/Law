<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta  http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-03-07 新增flow的JS功能 -->
<link rel="stylesheet" href="../../js/jquery-ui.css">
<link rel="stylesheet" href="../../js/themes/default/style.min.css" />
<script type="text/javascript" src="../../js/external/jquery/jquery.js"></script>
<script src="../../js/jquery-ui.js"></script>
<link href="../../js/jquery.dataTables.css" rel="stylesheet">
<script type="text/javascript" src="../../js/jquery.dataTables.min.js"></script>
<!-- Add By Jia 2017-04-11 多檔上傳JS引用 -->
<script src="../../js/vendor/jquery.ui.widget.js"></script>
<script src="../../js/jquery.iframe-transport.js"></script>
<script src="../../js/jquery.fileupload.js"></script>
<style type="text/css">
	
.bar {
	height: 18px;
	background: red;
	text-align: center;
	font-weight: bold;
}
</style>
<script type="text/javascript" charset="UTF-8">
var signedId;
var otherfilenum = 0;
	$(document).ready(function() {
		var opt={
	    		"oLanguage":{"sUrl":"../../i18n/Chinese-traditional.json"},
	    		"bJQueryUI":true,	
	    		"columns": [
	    			{ "data" :   "v",
	                    "render" : function ( data, type, row ) {
	                        if ( type === 'display' ) {
	                            return '<input type="checkbox" value=' + row.fileName + ' class="editor-active">';
	                        }
	                        return data;
	                    },
	                    className: "dt-body-center"
	                },
	                { "data" : "fileName" }
	            ],
	            rowCallback: function ( row, data ) {
	                // Set the checked state of the checkbox in the table
	                $('input.editor-active', row).prop( 'checked', data.v == 1 );
	            }
	            };
		
	    $("#signedfileOtherTable").dataTable(opt);
		
		//alert('<%=request.getParameter("userId")%>');
		$( function() {
		    $( "#iptcasePayStartDate" ).datepicker();
		    $( "#iptcasePayStartDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
		    $( "#iptcasePayEndDate" ).datepicker();
		    $( "#iptcasePayEndDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
		  } );

		var fileIds = [];
		var fileName;
		var filepathdate;
		var relaArray;
			$.ajax({
				url : 'pages/cek/recordcheckform/recordcheckformAction!initSignedForm.action',
				data : {
					'caseId' : '<%=request.getParameter("caseId")%>',
					'userId' : '<%=request.getParameter("userId")%>',
					'signedId' : '<%=request.getParameter("signedId")%>'
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					json = response.data;
					if(json != null){
						$("#iptcaseId").val(paddingLeft(json.Case_ID,8));
						$("#iptcaseCreateDate").val(response.otherInfo.nowDate);
						$("#iptcaseBankName").val(json.Bank_alias);
						$("#iptcaseProductName").val(json.Prod_Name);
						$("#iptcaseRela option").remove();
						relaArray = response.Reladata;
						var relaDeb = "0";
						var leftseloption = "";
						$.each(relaArray,function(i){
							leftseloption += '<option value="'+i+'">'+relaArray[i].Name+'</option>'; 
							if(relaArray[i].Rela_kind == "本人"){
								relaDeb = i;
							}
						});
						$("#iptcaseRela").append(leftseloption);
						$('#iptcaseRela option[value='+relaDeb+']').attr('selected', 'selected');
						$("#iptcaseRelaRole").val(relaArray[$("#iptcaseRela option:selected").val()].Rela_kind);
						$("#iptcaseType option").remove();
						caseTypeArray = response.signedType;
						var caseTypeseloption = "";
						$.each(caseTypeArray,function(i){
							caseTypeseloption += '<option value="'+i+'">'+caseTypeArray[i].variableName+'</option>'; 
						});
						$("#iptcaseType").append(caseTypeseloption);
						$("#iptcasePeriods").val(1);
					}
					//當是已經存在DB的資料時
					if(response.otherInfo.hasOldRecord){
						$("#iptcaseId").val(paddingLeft(response.recordSigned.caseId,8));
						$("#iptcaseCreateDate").val(response.recordSigned.applyDate);
						$("#iptcaseBankName").val(response.recordSigned.bankName);
						$("#iptcaseProductName").val(response.recordSigned.prodName);
						$("#iptcaseRela option").remove();
						relaArray = response.Reladata;
						var leftseloption = "";
						var leftselectedVal = 0;
						$.each(relaArray,function(i){
							leftseloption += '<option value="'+i+'">'+relaArray[i].Name+'</option>'; 
							if(response.recordSigned.payer == relaArray[i].Name){
								leftselectedVal = i;
							}//$("#iptcaseRela>option:eq(5)").prop('selected', true);
						});
						$("#iptcaseRela").append(leftseloption);
						$('#iptcaseRela option[value='+leftselectedVal+']').attr('selected', 'selected');
						$("#iptcaseRelaRole").val(relaArray[$("#iptcaseRela option:selected").val()].Rela_kind);
						$("#iptcaseType option").remove();
						caseTypeArray = response.signedType;
						var caseTypeseloption = "";
						var selectedVal = 0;
						$.each(caseTypeArray,function(i){
							caseTypeseloption += '<option value="'+i+'">'+caseTypeArray[i].variableName+'</option>'; 
							if(response.recordSigned.type == caseTypeArray[i].variableName){
								selectedVal = i;
							}
						});
						$("#iptcaseType").append(caseTypeseloption);
						$('#iptcaseType option[value='+selectedVal+']').attr('selected', 'selected');
						$("#iptcasePeriods").val(response.recordSigned.periods);
						$("#iptcasePayStartDate").val(response.recordSigned.paytimeStart);
						$("#iptcasePayEndDate").val(response.recordSigned.paytimeEnd);
						$("#iptcaseAmount").val(response.recordSigned.ammountP);
						$("#iptcaseSumAmount").val(response.recordSigned.ammountSum);
						$("#iptcaseBackMark").val(response.recordSigned.backMark);
						$("#iptapplyUserId").val(response.recordSigned.applyUserId);
						if(response.recordSigned.ownerAgree == "Y"){
							$("#iptcaseownerAgree1").prop("checked", true)
						}else if(response.recordSigned.ownerAgree == "N"){
							$("#iptcaseownerAgree2").prop("checked", true)
						}
						$("#iptcaseRemark").val(response.recordSigned.remark);
					}
					signedId = "<%=request.getParameter("signedId")%>";
					if(response.recordSigned != null && 
							response.recordSigned.status != 1 && response.recordSigned.status != 3 ){
						$( "#btnsubmitSigned" ).button( "disable" );
						$( "#btnsavetempSigned" ).button( "disable" );
					}
					if(response.recordSigned != null && response.recordSigned.status != 2){
						$( "#btnbackSigned" ).button( "disable" );
						$( "#btncheckedSubmitSigned" ).button( "disable" );
					}
				},
				error : function(xhr, ajaxOptions,thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			
			$( "#iptcaseRela" ).change(function(i) {
				$("#iptcaseRelaRole").val(relaArray[$("#iptcaseRela option:selected").val()].Rela_kind);
			});
			
			$( "#iptcaseType" ).change(function(i) {
				if($("#iptcaseType").val() == 0){
					$("#iptcasePeriods").val(1);
				}else if($("#iptcaseType").val() == 1){
					$("#iptcasePeriods").val(4);
				}else{
					$("#iptcasePeriods").val(12);
				}
				if($("#iptcasePayStartDate").val() != ""){
					$("#iptcasePayEndDate").val(dateAddMonth($("#iptcasePayStartDate").val(),parseInt($("#iptcasePeriods").val())));
				}
				if($("#iptcaseAmount").val() != ""){
					$("#iptcaseSumAmount").val(amountSum(parseInt($("#iptcaseAmount").val()),parseInt($("#iptcasePeriods").val())));
				}
			});
			
			//根據選擇起日及期數帶出迄日
			$("#iptcasePayStartDate").change(function(i){
				$("#iptcasePayEndDate").val(dateAddMonth($("#iptcasePayStartDate").val(),parseInt($("#iptcasePeriods").val())));
			});
			
			//根據每期金額及期數帶出總金額
			$("#iptcaseAmount").change(function(i){
				$("#iptcaseSumAmount").val(amountSum(parseInt($("#iptcaseAmount").val()),parseInt($("#iptcasePeriods").val())));
			});
			
			//若期數有調整自動改變
			$("#iptcasePeriods").change(function(i){
				if($("#iptcasePayStartDate").val() != ""){
					$("#iptcasePayEndDate").val(dateAddMonth($("#iptcasePayStartDate").val(),parseInt($("#iptcasePeriods").val())));
				}
				if($("#iptcaseAmount").val() != ""){
					$("#iptcaseSumAmount").val(amountSum(parseInt($("#iptcaseAmount").val()),parseInt($("#iptcasePeriods").val())));
				}
			});
			
			$("#btnopenSignedFile").button().on("click",function(e){
				e.preventDefault();  //stop the browser from following
				
				// TODO 這裡之後要記得改成可以套表的 
				//從L_SYS_FILE抓取檔案
				$.ajax({
					url : 'pages/cek/recordcheckform/recordcheckformAction!downloadSignedFile.action',
					data : {
						'fileTypeOne' : $("#iptcaseType").find('option:selected').text(),
						'fileTypeTwo' : $("#iptcaseBankName").val(),
						'signedId' : signedId
					},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						for(var i = 0; i < response.MapFileList.length; i++){
							var path = response.MapFileList[i].filePath;
							path = path.substring(path.indexOf("upload"));
							fileIds.push(response.MapFileList[i].fileId);   
							window.open("../../" + path + "/" + encodeURIComponent(response.MapFileList[i].fileName)); // add by Jia download配對後的文件
						}
					},
					error : function(xhr, ajaxOptions, thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
				
			    //window.location.href = '../../test.xls';
				dialog.dialog("open");
			});
			
			$("#btnselectedSmartFile").button().on("click",function(){
				otherfilenum++;
				dialogother.dialog("open");
				
				if(otherfilenum == 1){
					
				    var datatable = $("#signedfileOtherTable").dataTable();
					datatable.fnClearTable();
					var json = "";
					$.ajax({
						url : 'pages/cek/recordcheckform/recordcheckformAction!selectedSigned.action',
						data : {
							'selectedcaseId' : $("#iptcaseId").val(),
							'type' : '<%=request.getParameter("type")%>',
							'userId' : '<%=request.getParameter("userId")%>',
							'signedId' : signedId
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
				}
			});
			
			$("#btnsavetempSigned").button().on("click",function(){
				
				var saveselectOhterFiles = [];
				var datatable = $("#signedfileOtherTable").dataTable();
				$("input:checked", datatable.fnGetNodes()).each(function(){
					saveselectOhterFiles.push($(this).val());
				});
				
				$.ajax({
					url : 'pages/cek/recordcheckform/recordcheckformAction!saveSigned.action',
					data : {
						'savecaseId' : $("#iptcaseId").val(),
						'savecaseBankName' : $("#iptcaseBankName").val(),
						'savecaseProductName' : $("#iptcaseProductName").val(),
						'savecaseRela' : $("#iptcaseRela").find('option:selected').text(),
						'savecaseRelaRole' : $("#iptcaseRelaRole").val(),
						'savecaseType' : $("#iptcaseType").find('option:selected').text(),
						'savecasePeriods' : $("#iptcasePeriods").val(),
						'savecasePayStartDate' : $("#iptcasePayStartDate").val(),
						'savecasePayEndDate' : $("#iptcasePayEndDate").val(),
						'savecaseAmount' : $("#iptcaseAmount").val(),
						'savecaseSumAmount' : $("#iptcaseSumAmount").val(),
						'type' : '1',
						'userId' : '<%=request.getParameter("userId")%>',
						'signedId' : signedId,
						'filepathdate' : filepathdate,
						'signedfileuploadName' : fileName,
						'fileIds' : fileIds,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val(),
						'saveselectOhterFiles' : saveselectOhterFiles
					},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						if (response.success) {
							alert(response.msg);
							<%
							if(request.getParameter("signedId") == null){
								%>
								signedId = response.signedId;
								<%
							}else{
								%>
								signedId = '<%=request.getParameter("signedId") %>';
								<%
							}
							%>
						} else {
							alert(response.msg);
						}
					},
					error : function(xhr, ajaxOptions, thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
			});
			
			$("#btnsubmitSigned").button().on("click",function(){
				
				var saveselectOhterFiles = [];
				var datatable = $("#signedfileOtherTable").dataTable();
				$("input:checked", datatable.fnGetNodes()).each(function(){
					saveselectOhterFiles.push($(this).val());
				});
				
				$.ajax({
					url : 'pages/cek/recordcheckform/recordcheckformAction!submitSigned.action',
					data : {
						'savecaseId' : $("#iptcaseId").val(),
						'savecaseBankName' : $("#iptcaseBankName").val(),
						'savecaseProductName' : $("#iptcaseProductName").val(),
						'savecaseRela' : $("#iptcaseRela").find('option:selected').text(),
						'savecaseRelaRole' : $("#iptcaseRelaRole").val(),
						'savecaseType' : $("#iptcaseType").find('option:selected').text(),
						'savecasePeriods' : $("#iptcasePeriods").val(),
						'savecasePayStartDate' : $("#iptcasePayStartDate").val(),
						'savecasePayEndDate' : $("#iptcasePayEndDate").val(),
						'savecaseAmount' : $("#iptcaseAmount").val(),
						'savecaseSumAmount' : $("#iptcaseSumAmount").val(),
						'type' : '2',
						'userId' : '<%=request.getParameter("userId") %>',
						'signedId' : signedId,
						'filepathdate' : filepathdate,
						'signedfileuploadName' : fileName,
						'fileIds' : fileIds,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val(),
						'saveselectOhterFiles' : saveselectOhterFiles
					},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						if (response.success) {
							alert(response.msg);
							<%
							if(request.getParameter("signedId") == null){
								%>
								signedId = response.signedId;
								<%
							}else{
								%>
								signedId = '<%=request.getParameter("signedId") %>';
								<%
							}
							%>
							$( "#btnsubmitSigned" ).button( "disable" );
							$( "#btnsavetempSigned" ).button( "disable" );
						} else {
							alert(response.msg);
						}
					},
					error : function(xhr, ajaxOptions,thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
			});
			
			//退件按鈕
			$("#btnbackSigned").button().on("click",function(){
				$.ajax({
					url : 'pages/cek/recordcheckform/recordcheckformAction!backSigned.action',
					data : {
						'savecaseId' : $("#iptcaseId").val(),
						'savecaseBankName' : $("#iptcaseBankName").val(),
						'savecaseProductName' : $("#iptcaseProductName").val(),
						'savecaseRela' : $("#iptcaseRela").find('option:selected').text(),
						'savecaseRelaRole' : $("#iptcaseRelaRole").val(),
						'savecaseType' : $("#iptcaseType").find('option:selected').text(),
						'savecasePeriods' : $("#iptcasePeriods").val(),
						'savecasePayStartDate' : $("#iptcasePayStartDate").val(),
						'savecasePayEndDate' : $("#iptcasePayEndDate").val(),
						'savecaseAmount' : $("#iptcaseAmount").val(),
						'savecaseSumAmount' : $("#iptcaseSumAmount").val(),
						'type' : '3',
						'userId' : '<%=request.getParameter("userId") %>',
						'signedId' : signedId,
						'filepathdate' : filepathdate,
						'signedfileuploadName' : fileName,
						'fileIds' : fileIds,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val()
					},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						if (response.success) {
							alert(response.msg);
							<%
							if(request.getParameter("signedId") == null){
								%>
								signedId = response.signedId;
								<%
							}else{
								%>
								signedId = '<%=request.getParameter("signedId") %>';
								<%
							}
							%>
						} else {
							alert(response.msg);
						}
						$( "#btnbackSigned" ).button( "disable" );
						$( "#btncheckedSubmitSigned" ).button( "disable" );
					},
					error : function(xhr, ajaxOptions,thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
			});
			
			//主管核准按鈕
			$("#btncheckedSubmitSigned").button().on("click",function(){
				$.ajax({
					url : 'pages/cek/recordcheckform/recordcheckformAction!backSigned.action',
					data : {
						'savecaseId' : $("#iptcaseId").val(),
						'savecaseBankName' : $("#iptcaseBankName").val(),
						'savecaseProductName' : $("#iptcaseProductName").val(),
						'savecaseRela' : $("#iptcaseRela").find('option:selected').text(),
						'savecaseRelaRole' : $("#iptcaseRelaRole").val(),
						'savecaseType' : $("#iptcaseType").find('option:selected').text(),
						'savecasePeriods' : $("#iptcasePeriods").val(),
						'savecasePayStartDate' : $("#iptcasePayStartDate").val(),
						'savecasePayEndDate' : $("#iptcasePayEndDate").val(),
						'savecaseAmount' : $("#iptcaseAmount").val(),
						'savecaseSumAmount' : $("#iptcaseSumAmount").val(),
						'type' : '4',
						'userId' : '<%=request.getParameter("userId") %>',
						'signedId' : signedId,
						'filepathdate' : filepathdate,
						'signedfileuploadName' : fileName,
						'fileIds' : fileIds,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val()
					},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						if (response.success) {
							alert(response.msg);
							<%
							if(request.getParameter("signedId") == null){
								%>
								signedId = response.signedId;
								<%
							}else{
								%>
								signedId = '<%=request.getParameter("signedId") %>';
								<%
							}
							%>
						} else {
							alert(response.msg);
						}
					},
					error : function(xhr, ajaxOptions,thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
			});
			
			//窗口回應儲存按鈕
			$("#btnendSubmitSigned").button().on("click",function(){
				$.ajax({
					url : 'pages/cek/recordcheckform/recordcheckformAction!backSigned.action',
					data : {
						'savecaseId' : $("#iptcaseId").val(),
						'savecaseBankName' : $("#iptcaseBankName").val(),
						'savecaseProductName' : $("#iptcaseProductName").val(),
						'savecaseRela' : $("#iptcaseRela").find('option:selected').text(),
						'savecaseRelaRole' : $("#iptcaseRelaRole").val(),
						'savecaseType' : $("#iptcaseType").find('option:selected').text(),
						'savecasePeriods' : $("#iptcasePeriods").val(),
						'savecasePayStartDate' : $("#iptcasePayStartDate").val(),
						'savecasePayEndDate' : $("#iptcasePayEndDate").val(),
						'savecaseAmount' : $("#iptcaseAmount").val(),
						'savecaseSumAmount' : $("#iptcaseSumAmount").val(),
						'type' : '5',
						'userId' : '<%=request.getParameter("userId") %>',
						'signedId' : signedId,
						'filepathdate' : filepathdate,
						'signedfileuploadName' : fileName,
						'fileIds' : fileIds,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val()
					},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						if (response.success) {
							alert(response.msg);
							<%
							if(request.getParameter("signedId") == null){
								%>
								signedId = response.signedId;
								<%
							}else{
								%>
								signedId = '<%=request.getParameter("signedId") %>';
								<%
							}
							%>
						} else {
							alert(response.msg);
						}
					},
					error : function(xhr, ajaxOptions,thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
			});
			
		      /**
		      回傳startdate加上addmonth
		      	ex: startdate = 2017-04-17
		      		addmonth = 5
		      		return = 2017-09-17
		      **/
		      function dateAddMonth(startdate, addmonth){
		    	  var formatdate = new Date(startdate);
		    	  var addMonthsFromstartdate  = formatdate.setMonth(formatdate.getMonth()+addmonth);
		    	  addMonthsFromstartdate = (formatdate.getFullYear() + "-" + (dayPlusZero(formatdate.getMonth() + 1)) + "-" + dayPlusZero(formatdate.getDate()));
		    	  return addMonthsFromstartdate;
		      }
		      
		      /**
		      	將數字格式帶成0X
		      **/
		      function dayPlusZero(num){
		    	  if(num < 10){
		    		return "0" + num;
		    	  }else{
				  	return num;
		    	  }
		      }
		      
		      /**
		      	回傳amountP * periods
		      **/
		      function amountSum(amountP, periods){
		    	  return amountP * periods;
		      }
		      
		    //add by Jia ===== 定義新增時彈跳的視窗 start =====
		    	var dialog = $("#signedfile-dialog-form").dialog({
		    		autoOpen : false,
		    		height : 120,
		    		width : 500,
		    		modal : true
		    	});
		    
		    	var dialogother = $("#signedfileOther-dialog-form").dialog({
		    		autoOpen : false,
		    		height : 565,
		    		width : 500,
		    		modal : true
		    	});
		    // add by Jia ===== 定義新增時彈跳的視窗 end =====
		    	
		    	$('#signedfileupload').fileupload({
					url : '../../pages/sys/file/fileAction!signedfileUpload.action', //上傳處理的action
					dataType : 'json',
					singleFileUploads:false,
					//maxNumberOfFiles: 6,
					//將要上傳的資料顯示
					add : function(e, data) {
						$("#tpldiv").remove();
						$(".item").empty();
						var tpl = $('<div id="tpldiv" class="working"><span class="pro" /><span class="info"></span></div>');
						tpl.find('.info').text(data.files[0].name);
						//fileName = data.files[0].name;
						data.context = tpl.appendTo($(".item"));
						//執行 data.submit() 開始上傳
						$("#signedstart").click(function() {
							var jqXHR = data.submit();
						});
						$("#signedfileupload").attr("disabled", true);
					},	
					//單一檔案進度
					progress : function(e, data) {
						var progress = parseInt(data.loaded	/ data.total* 100, 10);
						data.context.find('.pro')	.text(progress + "%　　").change();
						if (progress == 100) {
							data.context.removeClass('working');
						}
					},
					//整體進度
					progressall : function(e, data) {
						var progress = parseInt(data.loaded/ data.total* 100, 10);
						$('#progress .bar').css('width',	progress + '%');
						$('#progress .bar').text(progress + '%');
					},
					//上傳失敗
					fail : function(e, data) {
						data.context.addClass('error');
					},
					//單一檔案上傳完成
					done : function(e, data) {
						filepathdate = data.result.fileuploadDatetime;
						fileName = data.result.fileuploadName;
						var tmp = data.context.find('.pro').text();
						data.context.find('.pro').text(tmp + data.result.status + "　　");
						//alert(data.result.fileuploadName);
					},
					//全部上傳完畢
					stop : function(e) {
						//alert("上傳完畢");
						$("#signedfileupload").attr("disabled", false);
					}
				});
		    
		    	//將數字前面補0
		    	function paddingLeft(str,lenght){
		    		if(str.length >= lenght)
		    			return str;
		    		else
		    			return paddingLeft("0" +str,lenght);
		    	}
	});
</script>
<body>
	<!-- 流程主畫面 start -->
	<div>

		<div style="overflow: auto; margin: 5px 5px 5px 5px"
			class="ui-widget-content">
			<table>
				<tr>
					<td>
						<%
						if(request.getParameter("type") != null){
							if(request.getParameter("type").equals("1") || request.getParameter("type").equals("3") ){ %>
							<button class="ui-button ui-widget ui-corner-all" id="btnsavetempSigned">
								<span class="ui-icon ui-icon-gear"></span> 暫存
							</button>
							<button class="ui-button ui-widget ui-corner-all" id="btnsubmitSigned">
								<span class="ui-icon ui-icon-gear"></span> 送出
							</button>
							<%}else if(request.getParameter("type").equals("2")){ %>
							<button class="ui-button ui-widget ui-corner-all" id="btnbackSigned">
								<span class="ui-icon ui-icon-gear"></span> 退件
							</button>
							<button class="ui-button ui-widget ui-corner-all" id="btncheckedSubmitSigned">
								<span class="ui-icon ui-icon-gear"></span> 核准
							</button>
							<%}else if(request.getParameter("type").equals("4")){%>
							<button class="ui-button ui-widget ui-corner-all" id="btnendSubmitSigned">
							<span class="ui-icon ui-icon-gear"></span> 存檔
						</button>
						<%}
							}%>
					</td>
				</tr>
				<!-- 查詢條件欄位 -->
				<table>
					<tr>
						<td><label>案號</label></td>
						<td><input id="iptcaseId" readonly></input></td>
						<td><label>送簽日期</label></td>
						<td><input id="iptcaseCreateDate" readonly></input></td>
					</tr>
					<tr>
						<td><label>業主名稱</label></td>
						<td><input id="iptcaseBankName" readonly></input></td>
						<td><label>產品名稱</label></td>
						<td><input id="iptcaseProductName" readonly></input></td>
					</tr>
					<tr>
						<td><label>清償對象</label></td>
						<td><select id="iptcaseRela">
								<option value="">請選擇</option>
						</select></td>
						<td><label>角色</label></td>
						<td><input id="iptcaseRelaRole" readonly></input></td>
					</tr>
					<tr>
						<td><label>簽呈類型</label></td>
						<td><select id="iptcaseType">
								<option value="">請選擇</option>
							</select></td>
					</tr>
					<tr>
						<td><label>期數</label></td>
						<td><input id="iptcasePeriods"></input></td>
					</tr>
					<tr>
						<td><label>繳款起日</label></td>
						<td><input id="iptcasePayStartDate"></input></td>
					</tr>
					<tr>
						<td><label>繳款迄日</label></td>
						<td><input id="iptcasePayEndDate"></input></td>
					</tr>
					<tr>
						<td><label>每期金額</label></td>
						<td><input id="iptcaseAmount"></input></td>
					</tr>
					<tr>
						<td><label>總繳款金額</label></td>
						<td><input id="iptcaseSumAmount"></input></td>
					</tr>
					<tr>
						<td><label>退件原因</label></td>
						<td><input id="iptcaseBackMark" <% if(request.getParameter("type") != null){
							if(request.getParameter("type").equals("1")){%>readonly<%} 
							} %>></input></td>
					</tr>
					<tr>
						<td><button class="ui-button ui-widget ui-corner-all"	id="btnopenSignedFile">
							<span class="ui-icon ui-icon-gear"></span>簽呈
						</button></td>
						<td><button class="ui-button ui-widget ui-corner-all"	id="btnselectedSmartFile">
							<span class="ui-icon ui-icon-gear"></span>相關附件檔案
						</button></td>
					</tr>
					<tr>
						<td><label>業主審核</label>
						<td>
						<input type="radio" id="iptcaseownerAgree1" name ="iptcaseownerAgree" value="Y"
						 <% if(request.getParameter("type") != null){
							 if(!request.getParameter("type").equals("4")){ %> disabled <%}} %>> 同意
						<input type="radio" id="iptcaseownerAgree2" name ="iptcaseownerAgree" value="N"
						<% if(request.getParameter("type") != null){
							 if(!request.getParameter("type").equals("4")){ %> disabled <%}} %>> 不同意
						</td>
					</tr>
					<tr>
						<td><label>備註</label></td>
						<td><input id="iptcaseRemark"<% if(request.getParameter("type") != null){
							 if(!request.getParameter("type").equals("4")){ %> readonly <%}} %>></input></td>
					</tr>
					<tr>
						<td><input id="iptapplyUserId" type="hidden" ></input></td>
					</tr>
				</table>
				<!-- 查詢條件欄位 -->
			</table>
		</div>

		<!-- 簽呈主畫面 end -->
		<div id="signedfile-dialog-form" title="新增文件">
				<div id="progress">
					<input id="signedfileupload" name="upload" type="file" multiple ><input id="signedstart" value="上傳" type="button">
	
					<div class="bar" style="width: 0%;"></div>
					<div class="item"></div>
				</div>
		</div>
		
		<!-- 簽呈相關文件 -->
		<div id="signedfileOther-dialog-form" title="新增文件">
				<div id="signedfileOther">
					<table id="signedfileOtherTable"  class="ui-widget-content">
					    <thead>
				            <tr>
				           	 	<th></th>
				                <th>檔案名稱</th>
				            </tr>
				        </thead>
				    </table>
				</div>
		</div>
	</div>
	
</body>
</html>
