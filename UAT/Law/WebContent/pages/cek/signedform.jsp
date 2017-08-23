<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<meta  http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-03-07 新增flow的JS功能 -->
<link rel="stylesheet" href="../../js/jquery-ui.css">
<link rel="stylesheet" href="../../js/themes/default/style.min.css" />
<script type="text/javascript" src="../../js/external/jquery/jquery.js"></script>
<script src="../../js/jquery-ui.js"></script>
<script src="../../i18n/datepicker-zh-TW.js"></script>
<link href="../../js/jquery.dataTables.css" rel="stylesheet">
<script type="text/javascript" src="../../js/jquery.dataTables.min.js"></script>
<!-- Add By Jia 2017-04-11 多檔上傳JS引用 -->
<script src="../../js/vendor/jquery.ui.widget.js"></script>
<script src="../../js/jquery.iframe-transport.js"></script>
<script src="../../js/jquery.fileupload.js"></script>
<link href="../../js/css/jquery.fileupload-ui.css" rel="stylesheet">
<link href="../../js/css/jquery.fileupload.css" rel="stylesheet">
<!-- Add By Jia 2017-07-04 引用自定義的js -->
<script type="text/javascript" src="../../legaljs/law.js"></script>
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
	                            return '<input type="checkbox" value=' + row.filePath + ' class="editor-active">';
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
		
		var fileopt2={
	    		"oLanguage":{"sUrl":"../../i18n/Chinese-traditional.json"},
	    		"bJQueryUI":true,	
	    		"columns": [
	                { "data" : "fileName" },
	                { "data" : "voPathName",
	                	"render": function ( data, type, full, meta ) {
	                		var pathAndName = "../../" + data.substring(data.indexOf("upload"));
	                		var downloadRecordFile = "<button onclick=\"window.open('" + pathAndName + "')\">下載</button>";
	                		
	                		return  downloadRecordFile;
	                	} 
	                },
	                { "data" : "recordFileId" ,
	                	"render" : function ( data, type, full, meta ){
	                		var datatableid = "#signedfilefileUploadTable";
	                		var deleteRecordFileButton = "<button onclick=\" law.cek.deleteFunctionForRecordFile('" + data + "', '" + datatableid + "','" + meta.row + "')\">刪除</button>";
	                		return deleteRecordFileButton;
	                	}	
	                }
	            ]
	    };
		
	    $("#signedfileOtherTable").dataTable(opt);
		
	    $("#signedfilefileUploadTable").dataTable(fileopt2);
	    
		$( function() {
			law.common.formatInputItemToDate( "#iptcasePayStartDate", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcasePayEndDate", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate1", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate1", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate2", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate2", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate3", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate3", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate4", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate4", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate5", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate5", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate6", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate6", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate7", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate7", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate8", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate8", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate9", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate9", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate10", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate10", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate11", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate11", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayStartDate12", "yy-mm-dd");
			law.common.formatInputItemToDate( "#iptcaseStepPayEndDate12", "yy-mm-dd");
		  } );

		var stepPay = [], stepPayStartDate = [], stepPayEndDate = [];
		var relaArray;
			$.ajax({
				url : 'pages/cek/recordcheckform/recordcheckformAction!initSignedForm.action',
				data : {
					'caseId' : '<%=request.getParameter("caseId")%>',
					'signedId' : '<%=request.getParameter("signedId")%>'
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					json = response.data;
					// 若沒有權限直接隱藏按鈕
					if(response.otherInfo.canUse !== true){
						$("#trsubmitSigned").hide();
						var datatablesignedFiles = $("#signedfilefileUploadTable").dataTable();
						datatablesignedFiles.fnSetColumnVis( 2, false );
						
						$("#tdsignedfileupload").hide();
					}
					if(json !== null){
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
							if(relaArray[i].Role == "CM"){
								relaDeb = i;
							}
						});
						$("#iptcaseRela").append(leftseloption);
						$('#iptcaseRela option[value='+relaDeb+']').attr('selected', 'selected');
						$("#iptcaseRelaRole").val(relaArray[$("#iptcaseRela option:selected").val()].Role);
						$("#iptcaseType option").remove();
						caseTypeArray = response.signedType;
						var caseTypeseloption = "";
						$.each(caseTypeArray,function(i){
							caseTypeseloption += '<option value="'+i+'">'+caseTypeArray[i].variableName+'</option>'; 
						});
						$("#iptcaseType").append(caseTypeseloption);
						$("#iptcasePeriods").val(1);
					}else if(response.recordSigned === null){
							alert("查無此案件，請重新輸入案號");
							window.close();
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
						$("#iptcaseRelaRole").val(relaArray[$("#iptcaseRela option:selected").val()].Role);
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
						
						//分階段還款
						if(response.recordSignedStep != null){
							
							var stepnum = response.recordSigned.periods;
							for (var i = 1; i <= stepnum; i++) {
								$("#trstep"+ i).show();
							} 
							
							$("#iptcaseStepPeriods1").val(response.recordSignedStep.stepPay1);
							$("#iptcaseStepPeriods2").val(response.recordSignedStep.stepPay2);
							$("#iptcaseStepPeriods3").val(response.recordSignedStep.stepPay3);
							$("#iptcaseStepPeriods4").val(response.recordSignedStep.stepPay4);
							$("#iptcaseStepPeriods5").val(response.recordSignedStep.stepPay5);
							$("#iptcaseStepPeriods6").val(response.recordSignedStep.stepPay6);
							$("#iptcaseStepPeriods7").val(response.recordSignedStep.stepPay7);
							$("#iptcaseStepPeriods8").val(response.recordSignedStep.stepPay8);
							$("#iptcaseStepPeriods9").val(response.recordSignedStep.stepPay9);
							$("#iptcaseStepPeriods10").val(response.recordSignedStep.stepPay10);
							$("#iptcaseStepPeriods11").val(response.recordSignedStep.stepPay11);
							$("#iptcaseStepPeriods12").val(response.recordSignedStep.stepPay12);
							$("#iptcaseStepPeriods").val(response.recordSigned.periods);
							$("#iptcaseStepPayStartDate1").val(response.recordSignedStep.stepPayStartDate1);
							$("#iptcaseStepPayEndDate1").val(response.recordSignedStep.stepPayEndDate1);
							$("#iptcaseStepPayStartDate2").val(response.recordSignedStep.stepPayStartDate2);
							$("#iptcaseStepPayEndDate2").val(response.recordSignedStep.stepPayEndDate2);
							$("#iptcaseStepPayStartDate3").val(response.recordSignedStep.stepPayStartDate3);
							$("#iptcaseStepPayEndDate3").val(response.recordSignedStep.stepPayEndDate3);
							$("#iptcaseStepPayStartDate4").val(response.recordSignedStep.stepPayStartDate4);
							$("#iptcaseStepPayEndDate4").val(response.recordSignedStep.stepPayEndDate4);
							$("#iptcaseStepPayStartDate5").val(response.recordSignedStep.stepPayStartDate5);
							$("#iptcaseStepPayEndDate5").val(response.recordSignedStep.stepPayEndDate5);
							$("#iptcaseStepPayStartDate6").val(response.recordSignedStep.stepPayStartDate6);
							$("#iptcaseStepPayEndDate6").val(response.recordSignedStep.stepPayEndDate6);
							$("#iptcaseStepPayStartDate7").val(response.recordSignedStep.stepPayStartDate7);
							$("#iptcaseStepPayEndDate7").val(response.recordSignedStep.stepPayEndDate7);
							$("#iptcaseStepPayStartDate8").val(response.recordSignedStep.stepPayStartDate8);
							$("#iptcaseStepPayEndDate8").val(response.recordSignedStep.stepPayEndDate8);
							$("#iptcaseStepPayStartDate9").val(response.recordSignedStep.stepPayStartDate9);
							$("#iptcaseStepPayEndDate9").val(response.recordSignedStep.stepPayEndDate9);
							$("#iptcaseStepPayStartDate10").val(response.recordSignedStep.stepPayStartDate10);
							$("#iptcaseStepPayEndDate10").val(response.recordSignedStep.stepPayEndDate10);
							$("#iptcaseStepPayStartDate11").val(response.recordSignedStep.stepPayStartDate11);
							$("#iptcaseStepPayEndDate11").val(response.recordSignedStep.stepPayEndDate11);
							$("#iptcaseStepPayStartDate12").val(response.recordSignedStep.stepPayStartDate12);
							$("#iptcaseStepPayEndDate12").val(response.recordSignedStep.stepPayEndDate12);
						}
						
						var datatablesigned = "";
						datatablesigned = $("#signedfilefileUploadTable").dataTable();
					    
						//從L_CEK_RECORD_FILE抓取檔案
						$.ajax({
							url : 'pages/cek/recordcheckform/recordcheckformAction!selectSignedFile.action',
							data : {
								'signedId' : "<%=request.getParameter("signedId")%>"
							},
							type : "POST",
							dataType : 'json',
							success : function(response) {
								json = response.MapFileList;
								if (json.length !== 0) {
									datatablesigned.fnClearTable();
									datatablesigned.fnAddData(json);
								}
							},
							error : function(xhr, ajaxOptions, thrownError) {
								alert(xhr.status);
								alert(thrownError);
							}
						});
						
					}else{
						$("#iptapplyUserId").val(response.loginUserInfo.memno);
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
					if(response.recordSigned != null && response.recordSigned.status === 5){
						$("#tdsignedfileupload").hide();
						var datatablesignedFiles = $("#signedfilefileUploadTable").dataTable();
						datatablesignedFiles.fnSetColumnVis( 2, false );
					}
					// 控制若是一次清償，鎖定繳費迄日
					if($("#iptcaseType").val() == 0){
						$("#iptcasePeriods").val(1);
						$("#iptcasePeriods").attr("disabled", true);
						$("#iptcasePayEndDate").attr("disabled", true);
					}else if($("#iptcaseType").val() == 1){
						//$("#iptcasePeriods").val(4);
						$("#iptcasePeriods").attr("disabled", false);
						$("#iptcasePayEndDate").attr("disabled", false);
					}else if($("#iptcaseType").val() == 2){
						//$("#iptcasePeriods").val(12);
						$("#iptcasePeriods").attr("disabled", false);
						$("#iptcasePayEndDate").attr("disabled", false);
					}else{
						//dialogstepPay.dialog("open");
						$("#iptcasePeriods").attr("disabled", true);
						$("#iptcasePayStartDate").attr("disabled", true);
						$("#iptcasePayEndDate").attr("disabled", true);
						$("#iptcaseAmount").attr("disabled", true);
					}
					
				},
				error : function(xhr, ajaxOptions,thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			
			$( "#iptcaseRela" ).change(function(i) {
				$("#iptcaseRelaRole").val(relaArray[$("#iptcaseRela option:selected").val()].Role);
			});
			
			$( "#iptcaseType" ).change(function(i) {
				if($("#iptcaseType").val() == 0){
					$("#iptcasePeriods").val(1);
					$("#iptcasePeriods").attr("disabled", true);
					$("#iptcasePayEndDate").attr("disabled", true);
				}else if($("#iptcaseType").val() == 1){
					$("#iptcasePeriods").val(4);
					$("#iptcasePeriods").attr("disabled", false);
					$("#iptcasePayEndDate").attr("disabled", false);
				}else if($("#iptcaseType").val() == 2){
					$("#iptcasePeriods").val(12);
					$("#iptcasePeriods").attr("disabled", false);
					$("#iptcasePayEndDate").attr("disabled", false);
				}else{
					//dialogstepPay.dialog("open");
					$("#iptcasePeriods").attr("disabled", true);
					$("#iptcasePayStartDate").attr("disabled", true);
					$("#iptcasePayEndDate").attr("disabled", true);
					$("#iptcaseAmount").attr("disabled", true);
				}
				if($("#iptcasePayStartDate").val() != ""){
					if($("#iptcaseType").val() == 0){
						$("#iptcasePayEndDate").val($("#iptcasePayStartDate").val());
					}else{
						$("#iptcasePayEndDate").val(dateAddMonth($("#iptcasePayStartDate").val(),parseInt($("#iptcasePeriods").val())));
					}
				}
				if($("#iptcaseAmount").val() != ""){
					$("#iptcaseSumAmount").val(amountSum(parseInt($("#iptcaseAmount").val()),parseInt($("#iptcasePeriods").val())));
				}
			});
			
			//根據分階段還款的期數跑出格子
			$("#iptcaseStepPeriods").change(function(i){
				var stepnum = "";
				var i = 1;
				for (i = 1; i <= 12; i++) {
					$("#trstep"+ i).hide();
				} 
				
				stepnum = $("#iptcaseStepPeriods").val();
				
				for (i = 1; i <= stepnum; i++) {
					$("#trstep"+ i).show();
				} 
			});
			
			//根據選擇起日及期數帶出迄日
			$("#iptcasePayStartDate").change(function(i){
				if($("#iptcaseType").val() == 0){
					$("#iptcasePayEndDate").val($("#iptcasePayStartDate").val());
				}else{
					$("#iptcasePayEndDate").val(dateAddMonth($("#iptcasePayStartDate").val(),parseInt($("#iptcasePeriods").val())));
				}
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
				
				dialog.dialog("open");
			});
			
			// 簽呈套印按鈕
			$("#btnoverPrintSigned").button().on("click",function(e){
				e.preventDefault();  //stop the browser from following

				//從L_SYS_FILE抓取並將相對應欄位套印
				$.ajax({
					url : 'pages/cek/recordcheckform/recordcheckformAction!downloadOverPrintSignedFile.action',
					data : {
						'fileTypeOne' : $("#iptcaseType").find('option:selected').text(),
						'fileTypeTwo' : $("#iptcaseBankName").val(),
						'signedId' : signedId,
						// 以下是套表專用
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
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'savecaseCreateDate' : $("#iptcaseCreateDate").val(),
						'savepayerID' : relaArray[$("#iptcaseRela option:selected").val()].ID
					},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						for(var i = 0; i < response.MapFileList.length; i++){
							var path = response.MapFileList[i].filePath;
							path = path.substring(path.indexOf("upload"));
							//fileIds.push(response.MapFileList[i].fileId);   
							window.open("../../" + path + "/" + encodeURIComponent(response.MapFileList[i].fileName)); // add by Jia download配對後的文件
						}
					},
					error : function(xhr, ajaxOptions, thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
				
			    //window.location.href = '../../test.xls';
			});
			
			// 查看相關文件
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
				
				$("#btnsavetempSigned").button( "disable" );
				$("#btnsubmitSigned").button( "disable" );
				
				var saveselectOhterFiles = [];
				var datatable = $("#signedfileOtherTable").dataTable();
				$("input:checked", datatable.fnGetNodes()).each(function(){
					saveselectOhterFiles.push($(this).val());
				});
				
				// add by Jia 2017-07-11 將上傳附件的recordFileId 儲存下來，傳到後端update recordcheckformId
				var uploadFilesIds = [], uploadFilesPathName = [];
				var datatablesignedFiles = $("#signedfilefileUploadTable").dataTable();
				$(datatablesignedFiles.fnGetData()).each(function(){
					uploadFilesIds.push($(this).get(0).recordFileId);
					uploadFilesPathName.push($(this).get(0).voPathName);
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
						'signedId' : signedId,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val(),
						'saveselectOhterFiles' : saveselectOhterFiles,
						'saveUploadFilesIds' : uploadFilesIds,
						'saveUploadFilesPathName' : uploadFilesPathName,
						'stepPay' : stepPay,
						'stepPayStartDate' : stepPayStartDate,
						'stepPayEndDate' : stepPayEndDate
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
						$("#btnsavetempSigned").button( "enable" );
						$("#btnsubmitSigned").button( "enable" );
					},
					error : function(xhr, ajaxOptions, thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
			});
			
			$("#btnsubmitSigned").button().on("click",function(){

				$("#btnsavetempSigned").button( "disable" );
				$("#btnsubmitSigned").button( "disable" );
				
				var saveselectOhterFiles = [];
				var datatable = $("#signedfileOtherTable").dataTable();
				$("input:checked", datatable.fnGetNodes()).each(function(){
					saveselectOhterFiles.push($(this).val());
				});
				
				// add by Jia 2017-07-11 將上傳附件的recordFileId 儲存下來，傳到後端update recordcheckformId
				var uploadFilesIds = [], uploadFilesPathName = [];
				var datatablesignedFiles = $("#signedfilefileUploadTable").dataTable();
				$(datatablesignedFiles.fnGetData()).each(function(){
					uploadFilesIds.push($(this).get(0).recordFileId);
					uploadFilesPathName.push($(this).get(0).voPathName);
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
						'signedId' : signedId,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val(),
						'saveselectOhterFiles' : saveselectOhterFiles,
						'saveUploadFilesIds' : uploadFilesIds,
						'saveUploadFilesPathName' : uploadFilesPathName
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
						$("#btnsavetempSigned").button( "enable" );
						$("#btnsubmitSigned").button( "enable" );
						window.close();
					},
					error : function(xhr, ajaxOptions,thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
			});
			
			//退件按鈕
			$("#btnbackSigned").button().on("click",function(){

				$("#btnbackSigned").button( "disable" );
				$( "#btncheckedSubmitSigned" ).button( "disable" );
				// add by Jia 2017-07-11 將上傳附件的recordFileId 儲存下來，傳到後端update recordcheckformId
				var uploadFilesIds = [], uploadFilesPathName = [];
				var datatablesignedFiles = $("#signedfilefileUploadTable").dataTable();
				$(datatablesignedFiles.fnGetData()).each(function(){
					uploadFilesIds.push($(this).get(0).recordFileId);
					uploadFilesPathName.push($(this).get(0).voPathName);
				});
				
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
						'signedId' : signedId,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val(),
						'saveUploadFilesIds' : uploadFilesIds,
						'saveUploadFilesPathName' : uploadFilesPathName
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
						window.close();
					},
					error : function(xhr, ajaxOptions,thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
			});
			
			//主管核准按鈕
			$("#btncheckedSubmitSigned").button().on("click",function(){

				$("#btnbackSigned").button( "disable" );
				$( "#btncheckedSubmitSigned" ).button( "disable" );
				// add by Jia 2017-07-11 將上傳附件的recordFileId 儲存下來，傳到後端update recordcheckformId
				var uploadFilesIds = [], uploadFilesPathName = [];
				var datatablesignedFiles = $("#signedfilefileUploadTable").dataTable();
				$(datatablesignedFiles.fnGetData()).each(function(){
					uploadFilesIds.push($(this).get(0).recordFileId);
					uploadFilesPathName.push($(this).get(0).voPathName);
				});
				
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
						'signedId' : signedId,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val(),
						'saveUploadFilesIds' : uploadFilesIds,
						'saveUploadFilesPathName' : uploadFilesPathName
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
							window.close();
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

				$( "#btnendSubmitSigned" ).button( "disable" );
				
				// add by Jia 2017-07-11 將上傳附件的recordFileId 儲存下來，傳到後端update recordcheckformId
				var uploadFilesIds = [], uploadFilesPathName = [];
				var datatablesignedFiles = $("#signedfilefileUploadTable").dataTable();
				$(datatablesignedFiles.fnGetData()).each(function(){
					uploadFilesIds.push($(this).get(0).recordFileId);
					uploadFilesPathName.push($(this).get(0).voPathName);
				});
				
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
						'signedId' : signedId,
						'savecaseBackmark' : $("#iptcaseBackMark").val(),
						'saveapplyUserId' : $("#iptapplyUserId").val(),
						'saveownerAgree1' : $("#iptcaseownerAgree1:checked").val(),
						'saveownerAgree2' : $("#iptcaseownerAgree2:checked").val(),
						'saveRemark' : $("#iptcaseRemark").val(),
						'saveUploadFilesIds' : uploadFilesIds,
						'saveUploadFilesPathName' : uploadFilesPathName
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
							$( "#btnendSubmitSigned" ).button( "enable" );
							window.close();
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
			
			$("#btnopenstepPay").button().on("click",function(){
				dialogstepPay.dialog("open");
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
		    	//點選簽呈打開的簽呈Table
		    	var dialog = $("#signedfile-dialog-form").dialog({
		    		autoOpen : false,
		    		height : 565,
		    		width : 500,
		    		modal : true
		    	});
		    
		    	var dialogother = $("#signedfileOther-dialog-form").dialog({
		    		autoOpen : false,
		    		height : 565,
		    		width : 500,
		    		modal : true
		    	});
		    	
		    	var dialogstepPay = $("#stepPay-dialog-form").dialog({
		    		autoOpen : false,
		    		height : 565,
		    		width : 900,
		    		modal : true,
		    		buttons : {
		    			'儲存' : addstepPay,
		    			'取消' : function() {
		    				dialogstepPay.dialog("close");
		    			}
		    		},
		    	});
		    // add by Jia ===== 定義新增時彈跳的視窗 end =====
		    	
		    	$('#signedfileupload').fileupload({
					url : '../../pages/sys/file/fileAction!signedfileUpload.action', //上傳處理的action
					dataType : 'json',
					singleFileUploads:false,
					//maxNumberOfFiles: 6,
					//將要上傳的資料顯示
					send : function(e, data) {
						$("#tpldiv").remove();
						$(".item").empty();
						var tpl = $('<div id="tpldiv" class="working"><span class="pro" /><span class="info"></span></div>');
						tpl.find('.info').text(data.files[0].name);
						//fileName = data.files[0].name;
						data.context = tpl.appendTo($(".item"));
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
					},
					//上傳失敗
					fail : function(e, data) {
						data.context.addClass('error');
					},
					//單一檔案上傳完成
					done : function(e, data) {
						var tmp = data.context.find('.pro').text();
						data.context.find('.pro').text(tmp + data.result.status + "　　");
						
						var datatable = "";
						datatable = $("#signedfilefileUploadTable").dataTable();
						datatable.fnAddData(data.result.recordFile);
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
		    	
		    	//點選後將總額帶入框框內
		    	function addstepPay(){
		    		var newstepPay = [], newstepPayStartDate = [], newstepPayEndDate = [];
					var stepnum = $("#iptcaseStepPeriods").val();
					var sumamount = 0;
		    		for (var i = 1; i <= stepnum; i++) {
		    			if(isInteger($("#iptcaseStepPeriods"+ i).val())){
		    				if($("#iptcaseStepPeriods"+ i).val() !== ""){
		    					var dayPer,perAmount;
		    					dayPer = new Date($("#iptcaseStepPayEndDate" + i).val()).getMonth()-new Date($("#iptcaseStepPayStartDate" + i).val()).getMonth();
		    					if(dayPer === 0){
		    						dayPer = 1;
		    					}
		    					perAmount = dayPer * parseInt($("#iptcaseStepPeriods"+ i).val())
			    				sumamount += perAmount;
			    				newstepPay.push($("#iptcaseStepPeriods"+ i).val());
			    				newstepPayStartDate.push($("#iptcaseStepPayStartDate"+ i).val());
			    				newstepPayEndDate.push($("#iptcaseStepPayEndDate"+ i).val());
		    				}
		    				if($("#iptcaseStepPayEndDate" + i).val() !== ""){
		    		    		$("#iptcasePayEndDate").val($("#iptcaseStepPayEndDate" + i ).val());
		    				}
		    			}
					} 
		    		stepPay = newstepPay;
		    		stepPayStartDate = newstepPayStartDate;
		    		stepPayEndDate = newstepPayEndDate;
		    		
		    		$("#iptcasePeriods").val(stepnum);
		    		$("#iptcaseSumAmount").val(sumamount);
		    		$("#iptcaseAmount").val($("#iptcaseStepPeriods1").val());
		    		$("#iptcasePayStartDate").val($("#iptcaseStepPayStartDate1").val());
		    		
		    		$('#iptcaseType option[value='+3+']').attr('selected', 'selected');
					$("#iptcasePeriods").attr("disabled", true);
					$("#iptcasePayStartDate").attr("disabled", true);
					$("#iptcasePayEndDate").attr("disabled", true);
					$("#iptcaseAmount").attr("disabled", true);
		    		dialogstepPay.dialog("close");
		    	}
		    	
		    	function isInteger(obj) {
		    	    return obj%1 === 0
		    	}
	});
</script>
<body>
	<!-- 流程主畫面 start -->
	<div>

		<div style="overflow: auto; margin: 5px 5px 5px 5px"
			class="ui-widget-content">
			<table>
				<tr id = "trsubmitSigned">
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
						<td><button class="ui-button ui-widget ui-corner-all"	id="btnopenstepPay">
							<span class="ui-icon ui-icon-gear"></span>分階段還款
						</button></td>
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
		
		<div id="signedfile-dialog-form" title="新增簽呈">
			<table>
				<tr>
					<td>
						<button class="ui-button ui-widget ui-corner-all" id ="btnoverPrintSigned">
						    <span class="ui-icon ui-icon-gear"></span> 套印簽呈
						</button>
					</td>
					<td id = "tdsignedfileupload">
						<span class="btn btn-success fileinput-button ui-button ui-widget ui-corner-all">
						<span class="ui-icon ui-icon-plus"></span>選擇檔案
						<input id="signedfileupload" name="upload" type="file" multiple >
						</span>
					</td>
				</tr>
			</table>	
				<table id="signedfilefileUploadTable"  class="display" cellspacing="0" width="100%">
				    <thead>
			            <tr>
			                <th>檔案名稱</th>
			                <th></th>
			                <th></th>
			            </tr>
			        </thead>
			    </table>
			    
		</div>
		
		<!-- 簽呈相關文件 -->
		<div id="signedfileOther-dialog-form" title="新增相關文件">
				<div id="signedfileOther">
					<table id="signedfileOtherTable"  class="display" cellspacing="0" width="100%">
					    <thead>
				            <tr>
				           	 	<th></th>
				                <th>檔案名稱</th>
				            </tr>
				        </thead>
				    </table>
				</div>
		</div>
		
		<!-- 簽呈分階段還款 -->
		<div id="stepPay-dialog-form" title="分階段還款">
				<div id="payTimesdiv">
					<table>
						<tr>
							<td><label>階段</label></td>
							<td><input id="iptcaseStepPeriods"></input></td>
						</tr>
						<tr id="trstep1" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate1"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate1"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods1"></input></td>
						</tr>
						<tr id="trstep2"  style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate2"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate2"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods2"></input></td>
						</tr>
						<tr id="trstep3" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate3"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate3"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods3"></input></td>
						</tr>
						<tr id="trstep4" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate4"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate4"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods4"></input></td>
						</tr>
						<tr id="trstep5" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate5"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate5"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods5"></input></td>
						</tr>
						<tr id="trstep6" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate6"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate6"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods6"></input></td>
						</tr>
						<tr id="trstep7" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate7"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate7"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods7"></input></td>
						</tr>
						<tr id="trstep8" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate8"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate8"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods8"></input></td>
						</tr>
						<tr id="trstep9" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate9"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate9"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods9"></input></td>
						</tr>
						<tr id="trstep10" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate10"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate10"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods10"></input></td>
						</tr>
						<tr id="trstep11" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate11"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate11"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods11"></input></td>
						</tr>
						<tr id="trstep12" style="display:none">
							<td><label>繳款起日</label></td>
							<td><input id="iptcaseStepPayStartDate12"></input></td>
							<td><label>繳款迄日</label></td>
							<td><input id="iptcaseStepPayEndDate12"></input></td>
							<td><label>每期金額</label></td>
							<td><input id="iptcaseStepPeriods12"></input></td>
						</tr>
					</table>
				</div>
		</div>
	</div>
	
</body>
</html>
