<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-06-13 文管系統的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docdocSystem.js"></script>
<head>
<style>
    .MinWidth0 {
        min-width: 70px;
    }
    
    .borrowWidth{
    	min-width:450px;
    }
    
    .editWidth{
    	min-width:250px;
    }
</style>
<title>文管系統</title>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			
			var borrowReason = "",
				borrowSelOption = "",
				docStatusSelOption = "";
			
			//文件資訊的表格
			var docsdatatable;
			
			var opt={
		    		"sDom": '<"top">rt<"bottom"><"clear">',
		    		"bSort": false,
		    		"bPaginate" : false,
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		    		"columnDefs": [{
	                    targets: '_all',
	                    className: 'dt-center',
	                }],
		    		"columns": [
		                { "data": "Bank_alias" },
		                { "data": "Case_ID" ,
		                	"render": function ( data, type, full, meta ) {
		                		return law.common.paddingLeft(data,8);
		                }},
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
			
		    $("#docSystemcaseInfoTable").dataTable(opt);
		    
		    var datatable = $("#docSystemcaseInfoTable").dataTable();
			datatable.fnClearTable();
			$.ajax({
				url : '../pages/doc/documents/docAction!loadCaseInfo.action',
				data : {
					'iptsearchcaseId' : <%=request.getParameter("caseId")%>
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					var roleIds = response.loginUserRoleIds;
					law.doc.loginRoleIds = roleIds;
					var json = response.data;
					datatable.fnClearTable();
					if (json.length !== 0) {
						datatable.fnAddData(json);
						law.doc.debtName = json[0].name;
						law.doc.caseId = json[0].Case_ID;
						law.doc.PriDebt_amount = json[0].PriDebt_amount;
						law.doc.ctCase_d = json[0].ctCase_d;
						law.doc.O_or_C = json[0].O_or_C;
						law.doc.Prod_Name = json[0].Prod_Name;
						
						var docSystemCaseDocsTableopt={
					    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
					    		"bJQueryUI":true,	
					            "scrollX":        true,
					            "scrollY" : true,
					            "scrollCollapse": true,
				                "bAutoWidth":false,    
				                "bPaginate" : false,
				                "columnDefs": [{
				                    targets: '_all',
				                    className: 'MinWidth0 dt-center',
				                }],
					    		"aoColumns": [
					    			 { "data": "imgFiles" ,
						                	"render": function ( data, type, full, meta ) {
						                		var imgFilesString = "";
						                		if(data !== ""){
						                			var dataArray = data.split(',');
							                		$.each(dataArray,function(i){
							                			var imgFileName = dataArray[i];
							                			imgFilesString += '<a href="javascript:law.doc.openFile(\'' + full.caseId + '\',\'' + imgFileName +'\')">' + (i +1) +'</a>' + " ";
													});
						                		}
						                		return imgFilesString;
						                	}
						            },
						            { "data": "docCode" },
					                { "data": "typeOne" },
					                { "data": "typeTwo" },
					                { "data": "courtYearCourt" },
					                { "data": "courtYearYear", 
					                	"render": function ( data, type, full, meta ) {
					                		if(data === 0){
					                			return "";
					                		}else{
					                			return data;
					                		}
					                	}
					                },
					                { "data": "courtYearTxt" },
					                { "data": "courtYearShare" },
					                { "data": "courtYearCaseId" },
					                { "data": "applyBorrow" , "className" : "borrowWidth" ,
					                	"render": function ( data, type, full, meta ) {
					                		var checkBoxString = '<input id="ckbapplyBorrow_' + full.docCode + '" type="checkbox" value=' + full.docCode + ' class="editor-active">';
					                		var returnString = "<select id='applyBorrow_" +  full.docCode + "'><option value=''>請選擇</option>" + borrowSelOption + "</select>";
					                		var editString = "<div id='applyBorrowEdit_" + full.docCode + "'></div>";
					                		
					                		if(data !== ""){
					                			var dataString = "<select id='applyBorrow_" +  full.docCode + "' disabled><option value='" + data + "'>" + full.disApplyBorrow + "</option>" + borrowSelOption + "</select>";
					                			var dataEditString = "<div id='applyBorrowEdit_" + full.docCode + "' >" + law.doc.applyBorrowString(data, full.docCode, "disabled", full.lawCode, full.borrowBackDate, 
					                					full.borrowBackReason, full.borrowToCourtDate, full.borrowToCourtLawCode, full.borrowCourtYearYear, full.borrowCourtYearTxt, full.borrowCourtYearCaseId,
					                					full.borrowCourtYearShare, full.borrowCommonReason, full.borrowSubLawCode, full.borrowCourtYearCourt, full.disBorrowCourtYearCourt) + "</div>"
					                			return dataString + dataEditString;
					                		}else{
						                		return checkBoxString + returnString + editString;
					                		}
					                	}   
					                },
					                { "data": "editDoc",
					                	"className" : "editWidth",
					                	"bVisible": false,
					                	"render": function ( data, type, full, meta ) {
					                		var returnString = "<select id='editDoc_" +  full.docCode + "'><option value=''>請選擇</option>" + docStatusSelOption + "</select>";
					                		if(full.docStatus !== ""){
						                		var editDocStatusButton = "<button onclick=\" law.doc.editDocStatus('" + full.docCode + "','" + meta.row + "')\">修改</button>";
						                		var editDocsButton = "<button onclick=\" law.doc.editDocs('" + full.caseId + "', '" + full.docType + "','" + full.docId + "')\">進入</button>";
					                			var selectBox = "<select id='editDoc_" +  full.docCode + "' ><option value='" + full.docStatus + "'>" + full.disDocStatus + "</option>" + docStatusSelOption + "</select>";// TODO 記得改會重複
						                		return selectBox + "     " + editDocStatusButton + "     " + editDocsButton;
					                		}else{
					                			return returnString
					                		}
					                	}
					                },
					                { "data": "disDocStatus" },
					                { "data": "progress" },
					                { "data": "bankDate" },
					                { "data": "receivedDate"},
					                { "data": "relaName" },
					                { "data": "bankName" },
					                { "data": "oldBankName" },
					                { "data": "sourceDoc" },
					                { "data": "sourceDocInfo",
					                	"className" : "editWidth "		
					                },
					                { "data": "shareCaseId0" },
					                { "data": "sendDate" },
					                { "data": "newSendDate" },
					                { "data": "interestYear",
					                	"render": function ( data, type, full, meta ) {
					                		if(full.sourceDoc === "支付命令確定"){//支付命令確定：15年
					                			return "15年";
					                		}else if(full.sourceDoc === "本票裁定確定"){//本票裁定確定：3年
					                			return "3年";
					                		}else if(full.sourceDoc === "民事判決確定"){//民事判決確定：15年
					                			return "15年";
					                		}else if(full.sourceDoc === "判決確定"){//判決確定：15年
					                			return "15年";
					                		}else if(full.sourceDoc === "和解筆錄"){//和解筆錄：15年
					                			return "15年";
					                		}else if(full.sourceDoc === "調解筆錄"){//調解筆錄：15年
					                			return "15年";
					                		}else if(full.sourceDoc === "債權憑證"){//債權憑證：15年
					                			return "15年";
					                		}else if(full.sourceDoc === "債權憑證(本裁)"){//債權憑證(本裁)：3年
					                			return "3年";
					                		}else{
					                			return "";
					                		}
					                	}
					                },
					                { "data": "interestDate" , //最近執行日+下面年
					                	"render": function ( data, type, full, meta ) {
					                		var dt = new Date(full.newSendDate);
					                		if(full.sourceDoc === "支付命令確定"){//支付命令確定：15年
					                			return (dt.getFullYear() + 15) + '-' + law.common.paddingLeft((dt.getMonth() +1), 2) + '-' + dt.getDate();
					                		}else if(full.sourceDoc === "本票裁定確定"){//本票裁定確定：3年
					                			return (dt.getFullYear() + 3) + '-' + law.common.paddingLeft((dt.getMonth() +1), 2) + '-' + dt.getDate();
					                		}else if(full.sourceDoc === "民事判決確定"){//民事判決確定：15年
					                			return (dt.getFullYear() + 15) + '-' + law.common.paddingLeft((dt.getMonth() +1), 2) + '-' + dt.getDate();
					                		}else if(full.sourceDoc === "判決確定"){//判決確定：15年
					                			return (dt.getFullYear() + 15) + '-' + law.common.paddingLeft((dt.getMonth() +1), 2) + '-' + dt.getDate();
					                		}else if(full.sourceDoc === "和解筆錄"){//和解筆錄：15年
					                			return (dt.getFullYear() + 15) + '-' + law.common.paddingLeft((dt.getMonth() +1), 2) + '-' + dt.getDate();
					                		}else if(full.sourceDoc === "調解筆錄"){//調解筆錄：15年
					                			return (dt.getFullYear() + 15) + '-' + law.common.paddingLeft((dt.getMonth() +1), 2) + '-' + dt.getDate();
					                		}else if(full.sourceDoc === "債權憑證"){//債權憑證：15年
					                			return (dt.getFullYear() + 15) + '-' + law.common.paddingLeft((dt.getMonth() +1), 2) + '-' + dt.getDate();
					                		}else if(full.sourceDoc === "債權憑證(本裁)"){//債權憑證(本裁)：3年
					                			return (dt.getFullYear() + 3) + '-' + law.common.paddingLeft((dt.getMonth() +1), 2) + '-' + dt.getDate();
					                		}else{
					                			return "";
					                		}
					                	}
					                },
					                { "data": "remark" },
					                { "data": "shadow",
					                	"render": function ( data, type, full, meta ) {
					                		if(data === "0"){
					                			return "影本";
					                		}else if(data === "1"){
					                			return "業主交付/影本";
					                		}else{
					                			return "";
					                		}
					                	}
					                },
					                { "data": "borrowInfo"},
					                { "data": "modifyUserName" },
					                { "data": "ruledDate" },
					                { "data": "ruledAmount" ,
					                	"render": function ( data, type, full, meta ) {
					                		if(data === 0){
					                			return "";
					                		}else{
					                			return data;
					                		}
					                	}
					                },
					                { "data": "applyConfirmationDate" },
					                { "data": "receivedConfirmationDate" },
					                { "data": "failureDate" },
					                { "data": "thirdName" },
					                { "data": "thirdAddress" },
					                { "data": "distributionAmount", 
					                	"render": function ( data, type, full, meta ) {
					                		if(data === 0){
					                			return "";
					                		}else{
					                			return data;
					                		}
					                	}
					                },
					                { "data": "approvedDelayDate" },
					                { "data": "delayEndDate" },
					                { "data": "sectorDate" },
					                { "data": "measureDate" },
					                { "data": "valuationDate" },
					                { "data": "rebirthDate" },
					                { "data": "surveyDate" },
					                { "data": "inquiryDate" },
					                { "data": "firstSaleDate" },
					                { "data": "secondSaleDate" },
					                { "data": "thirdSaleDate" },
					                { "data": "postBuyDate" },
					                { "data": "postEndDate" },
					                { "data": "reduceSaleDate" },
					                { "data": "destoryDate" },
					                { "data": "realDistributionDate" },
					                { "data" :"report",
					                	"render": function ( data, type, full, meta ) {
					                		if(data === "Y"){
					                			return "V";
					                		}else{
					                			return "";
					                		}
					                	}
					                },
					                { "data": "edit", 
					                	"render": function ( data, type, full, meta ) {
					                		if(data === "Y"){
					                			return "V";
					                		}else{
					                			return "";
					                		}
					                	}
					                },
					                { "data": "pay" ,
					                	"render": function ( data, type, full, meta ) {
					                		if(data === "Y"){
					                			return "V";
					                		}else{
					                			return "";
					                		}
					                	}	
					                },
					                { "data": "sendReport" ,
					                	"render": function ( data, type, full, meta ) {
					                		if(data === "Y"){
					                			return "V";
					                		}else{
					                			return "";
					                		}
					                	}
					                },
					                { "data": "toCourtDate" },
					                { "data": "toCourtTime" },
					                { "data": "toCourtType" },
					                { "data": "toCourtNotice" },
					                { "data": "executionDate" },
					                { "data": "executionTime" },
					                { "data": "cashierCheckStartDate" },
					                { "data": "cashierCheckAmount", 
					                	"render": function ( data, type, full, meta ) {
					                		if(data === 0){
					                			return "";
					                		}else{
					                			return data;
					                		}
					                	}
					                },
					                { "data": "cashierCheckEndDate" },
					                { "data": "debtsCourtYearInfo" },
					                { "data": "debtsDate" },
					                { "data": "claimsdocQuota" },
					                { "data": "claimsDocInterestRate" },
					                { "data": "otherReceiptType" },
					                { "data": "otherReceiptAmount" ,
					                	"render": function ( data, type, full, meta ) {
					                		if(data === 0){
					                			return "";
					                		}else{
					                			return data;
					                		}
					                	}
					                },
					                { "data": "otherCourtDate" }
					            ]
					            };
						
					    $("#docSystemCaseDocsTable").dataTable(docSystemCaseDocsTableopt);
					    
					    // 將文件資料帶入表格
					    docsdatatable = $("#docSystemCaseDocsTable").dataTable();
					    docsdatatable.fnClearTable();
						var json = "";
						$.ajax({
							url : '../pages/doc/documents/docAction!loadCaseDocs.action',
							data : {
								'caseId' : <%=request.getParameter("caseId")%>
							},
							type : "POST",
							dataType : 'json',
							success : function(response) {
								var json = response.responseCaseInfo;
								docsdatatable.fnClearTable();
								if (json.length !== 0) {
									docsdatatable.fnAddData(json);
								}
								docsdatatable.fnDraw();
								docsdatatable = $("#docSystemCaseDocsTable").dataTable();
								// Add By Jia 2017-07-21 當選項變更時動態改變畫面
					    		$(docsdatatable.fnGetData()).each(function(i){
									$( "#applyBorrow_" + this.docCode ).change(function() {
										$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).empty();
										$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).append(law.doc.applyBorrowString($(this).val(), docsdatatable.fnGetData(i).docCode, 
												"", "", "", "", "", "", "", "", "", "", "", "", "", "請選擇"));
										
										//將地院的下拉選項帶進去
										if($(this).val() === "8aa2e72a5d5efd74015d5f486f120004"){
											law.common.selectOption("#applyBorrowCourtYearCourt_" + docsdatatable.fnGetData(i).docCode, law.doc.courtSelectOption);
									 		law.common.formatInputItemToDate("#iptborrowDocToCourtDate_" + docsdatatable.fnGetData(i).docCode, "yy-mm-dd");
										}else if($(this).val() === "8aa2e72a5d5efd74015d5f478ecc0003"){
											law.common.formatInputItemToDate("#iptborrowDocBackDate_" + docsdatatable.fnGetData(i).docCode, "yy-mm-dd");
										}
										
										// 勾勾控制
										if($("#applyBorrow_" + docsdatatable.fnGetData(i).docCode).find('option:selected').val() === ''){
											$("#ckbapplyBorrow_" + docsdatatable.fnGetData(i).docCode).prop("checked", false);
										}else{
											$("#ckbapplyBorrow_" + docsdatatable.fnGetData(i).docCode).prop("checked", true);								
										}

										
									});
									
									// 勾勾按下去的動作
									$("#ckbapplyBorrow_" + docsdatatable.fnGetData(i).docCode).on( "click", function(){
										console.log("asdasd");
										if($("#ckbapplyBorrow_" + docsdatatable.fnGetData(i).docCode).is(':checked')){
											$( "#applyBorrow_" + docsdatatable.fnGetData(i).docCode)[0].selectedIndex = 4;

											$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).empty();// 先清除一般借調的填寫框
											$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).append(// 將一般借調的填寫框加入下方
													law.doc.applyBorrowString($( "#applyBorrow_" + docsdatatable.fnGetData(i).docCode).val(), docsdatatable.fnGetData(i).docCode, "", "", "", "", "", "", "", "", "", "", "", "", "", "請選擇"));
											
										}else{
											$( "#applyBorrow_" + docsdatatable.fnGetData(i).docCode)[0].selectedIndex = 0;
											$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).empty();// 清除所填寫的框框
										}
									});
									
								});
								
					    		// 若登入角色具文管科權限，將欄位打開
								if(roleIds.indexOf('8aa2e72a5de4091a015de41369710000') >= 0){
								    var toHiddenColumnTable = $('#docSystemCaseDocsTable').DataTable();
								    toHiddenColumnTable.column( 10 ).visible( true );
								}
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
			
			$.ajax({
				url : '../pages/doc/documents/docAction!initSelectedForDocSys.action',
				type : "POST",
				dataType : 'json',
				success : function(response) {
					var json = response.backReason;
					if (json.length !== 0) {
						borrowReason = json;
						law.doc.backReason = borrowReason;
						$.each(borrowReason,function(i){
							borrowSelOption += '<option value="'+borrowReason[i].variableId+'">'+borrowReason[i].variableName+'</option>'; 
						});
					}
					
					if(response.court.length !== 0){
						law.doc.courtSelectOption = response.court;
					}
					
					if (response.docStatus.length !== 0) {
						var docSysStatus = response.docStatus;
						$.each(docSysStatus,function(i){
							docStatusSelOption += '<option value="'+docSysStatus[i].variableId+'">'+docSysStatus[i].variableName+'</option>'; 
						});
						
					}
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			
			
		    
		});
	</script>
<div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="docSystemcaseInfoTable" class="display" cellspacing="0" width="100%" >
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
					<button class="ui-button ui-widget ui-corner-all" id ="btnborrowDoc">
					    <span class="ui-icon ui-icon-gear"></span> 申請借調
					</button>
					<button class="ui-button ui-widget ui-corner-all" id ="btnprintBorrowDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 匯出Excel
				  	</button>
				  	<!-- 
				  	<button class="ui-button ui-widget ui-corner-all" id ="btndeleteCekcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 連結到法務申請
				  	</button> -->
				</td>
			</tr>
		</table>
	</div>
	
	<div style="margin:5px 5px 5px 5px">
		<table id="docSystemCaseDocsTable"  class="stripe row-border order-column" width="100%" cellspacing="0">
		    <thead>
            <tr>
            	<th>影像檔</th>
                <th>文件編號</th>
                <th>文件類別</th>
                <th>文件項目</th>
                <th>法院</th>
                <th>年度</th>
                <th>字</th>
                <th>案號</th>
                <th>股別</th>
                <th>申請借調</th>
                <th>修改</th>
                <th>文件狀態</th>
                <th>進度</th>
                <th>業主調件日</th>
                <th>日期</th>
                <th>相對人</th>
                <th>債權人</th>
                <th>原債權人</th>
                <th>原始憑證</th>
                <th>原始憑證案號</th>
                <th>共用案號</th>
                <th>發文日期</th>
                <th>最近執行日期</th>
                <th>(時效)利息年限</th>
                <th>(時效)利息到期日</th>
                <th>備註</th>
                <th>影本註記</th>
                <th>借調資訊</th>
                <th>最後建檔人&日期</th>
                <th>收到裁定日</th>
                <th>收到裁定金額</th>
                <th>聲請確證日</th>
                <th>收確證日</th>
                <th>失效日</th>
                <th>扣薪第三人</th>
                <th>扣薪第三人地址</th>
                <th>分配金額</th>
                <th>核准暫緩日</th>
                <th>暫緩到期日</th>
                <th>查封指界日</th>
                <th>測量日</th>
                <th>鑑價日</th>
                <th>複丈日</th>
                <th>履勘日</th>
                <th>詢價日</th>
                <th>一拍日</th>
                <th>二拍日</th>
                <th>三拍日</th>
                <th>公告應買日</th>
                <th>公告到期日</th>
                <th>減拍日</th>
                <th>塗銷登記日</th>
                <th>實施分配日</th>
                <th>陳報</th>
                <th>補正</th>
                <th>繳費</th>
                <th>登報</th>
                <th>開庭日期</th>
                <th>開庭時間</th>
                <th>開庭期日種類</th>
                <th>開庭注意事項</th>
                <th>導往執行日期</th>
                <th>導往執行時間</th>
                <th>本票發票日</th>
                <th>本票金額</th>
                <th>本票到期日</th>
                <th>(債讓變動債權)法院年字案股</th>
                <th>債讓日</th>
                <th>額度</th>
                <th>利率</th>
                <th>收據種類</th>
                <th>收據金額</th>
                <th>法院製發日</th>
            </tr>
        </thead>
    </table>
	</div>
	
	
	
	</div>
</body>
</html>