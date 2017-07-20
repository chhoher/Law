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
    	min-width:200px;
    }
</style>
<title>文管系統</title>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			
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
		    $("#docSystemcaseInfoTable").dataTable(opt);
		    
		    var datatable = $("#docSystemcaseInfoTable").dataTable();
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
					}
					datatable.fnDraw();
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		    
			console.log("asdasd");
			
			var docSystemCaseDocsTableopt={
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		            "scrollX":        true,
		            "scrollCollapse": true,
	                "bAutoWidth":false,    
	                "columnDefs": [{
	                    targets: '_all',
	                    className: 'MinWidth0 dt-center',
	                }],
		    		"aoColumns": [
		                { "data": "applyBorrow" , "className" : "borrowWidth" ,
		                	"render": function ( data, type, full, meta ) {
		                		var returnString = "<select><option value=''>請選擇</option></select>";
								if(data == "O"){
									return returnString
								}else{
									return returnString
								}
		                	}   
		                },
		                { "data": "editDoc"},
		                { "data": "docStatus" },
		                { "data": "borrowInfo" },
		                { "data": "progress" },
		                { "data": "imgFiles" },
		                { "data": "bankDate" },
		                { "data": "receivedDate" , "sWidth" : "500px" },
		                { "data": "docCode" },
		                { "data": "debtName" },
		                { "data": "relaName" },
		                { "data": "typeOne" },
		                { "data": "typeTwo" },
		                { "data": "courtYearCourt" },
		                { "data": "courtYearYear" },
		                { "data": "courtYearTxt" },
		                { "data": "courtYearShare" },
		                { "data": "courtYearCaseId" },
		                { "data": "otherFile" },
		                { "data": "bankName" },
		                { "data": "oldBankName" },
		                { "data": "sourceDoc" },
		                { "data": "sourceDocInfo" },
		                { "data": "shareCaseId0" },
		                { "data": "sendDate" },
		                { "data": "newSendDate" },
		                { "data": "remark" },
		                { "data": "shadow" },
		                { "data": "modifyUserName" },
		                { "data": "cashierCheckStartDate" },
		                { "data": "cashierCheckAmount" },
		                { "data": "ruledDate" },
		                { "data": "ruledAmount" },
		                { "data": "applyConfirmationDate" },
		                { "data": "receivedConfirmationDate" },
		                { "data": "failureDate" },
		                { "data": "thirdName" },
		                { "data": "thirdAddress" },
		                { "data": "distributionAmount" },
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
		                { "data": "edit" },
		                { "data": "report" },
		                { "data": "pay" },
		                { "data": "sendReport" },
		                { "data": "toCourtDate" },
		                { "data": "toCourtTime" },
		                { "data": "toCourtType" },
		                { "data": "toCourtNotice" },
		                { "data": "executionDate" },
		                { "data": "executionDate" },
		                { "data": "cashierCheckEndDate" },
		                { "data": "courtYearInfo" },
		                { "data": "debtsDate" },
		                { "data": "claimsdocQuota" },
		                { "data": "claimsDocInterestRate" },
		            ]
		            };
			
		    $("#docSystemCaseDocsTable").dataTable(docSystemCaseDocsTableopt);

		    // 將文件資料帶入表格
		    var docsdatatable = $("#docSystemCaseDocsTable").dataTable();
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
					json = response.responseCaseInfo;
					docsdatatable.fnClearTable();
					if (response.responseCaseInfo != '') {
						docsdatatable.fnAddData(json);
					}
					docsdatatable.fnDraw();
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
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryCekcheckform">
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
                <th>申請借調</th>
                <th>修改</th>
                <th>文件狀態</th>
                <th>借調資訊</th>
                <th>進度</th>
                <th>影像檔</th>
                <th>業主調件日</th>
                <th>日期</th>
                <th>文件編號</th>
                <th>債務人</th>
                <th>相對人</th>
                <th>文件類別</th>
                <th>文件項目</th>
                <th>法院</th>
                <th>年度</th>
                <th>字</th>
                <th>案號</th>
                <th>股別</th>
                <th>附件</th>
                <th>債權人</th>
                <th>原債權人</th>
                <th>原始憑證</th>
                <th>原始憑證案號</th>
                <th>共用案號</th>
                <th>發文日期</th>
                <th>最近執行日期</th>
                <th>備註</th>
                <th>影本註記</th>
                <th>最後建檔人&日期</th>
                <th>本票發票日</th>
                <th>本票金額</th>
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
                <th>補正</th>
                <th>陳報</th>
                <th>繳費</th>
                <th>公送公告</th>
                <th>開庭日期</th>
                <th>開庭時間</th>
                <th>開庭期日種類</th>
                <th>開庭注意事項</th>
                <th>導往執行日期</th>
                <th>導往執行時間</th>
                <th>本票到期日</th>
                <th style = "width : 500px;">(債讓變動債權)法院年字案股</th>
                <th>債讓日</th>
                <th>額度</th>
                <th>利率</th>
            </tr>
        </thead>
    </table>
	</div>
	
	
	
	</div>
</body>
</html>