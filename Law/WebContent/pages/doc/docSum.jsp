<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-07-26 文管總表的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docdocSum.js"></script>
<head>
<style>
    .MinWidth0 {
        min-width: 70px;
    }
    
    .borrowWidth{
    	min-width:450px;
    }
</style>
<title>文管總表</title>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			
			var borrowReason = "",
				borrowSelOption = "";
			
			//文件資訊的表格
			var docsdatatable;
			
			var opt={
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		            "scrollX":        true,
		            "scrollCollapse": true,
	                "bAutoWidth":false,    
		    		"columnDefs": [{
	                    targets: '_all',
	                    className: 'dt-center',
	                }],
		    		"columns": [
		                { "data": "rowNum" },
		                { "data": "bankName" },
		                { "data": "prodName" },
		                { "data": "caseId" },
		                { "data": "debtName" },
		                { "data": "ID" },
		                { "data": "docCode" },
		                { "data": "typeOne" },
		                { "data": "typeTwo" },
		                { "data": "docStatus" },
		                { "data": "courtYearCourt" },
		                { "data": "sourceDoc" },
		                { "data": "sendDate" },
		                { "data": "newSendDate" },
		                { "data": "remark" },
		                { "data": "report" },
		                { "data": "edit" },
		                { "data": "pay" },
		                { "data": "sendReport" },
		                { "data": "toCourtDate" },
		                { "data": "executionDate" },
		                { "data": "borrowReason" },
		                { "data": "lawCode" },
		                { "data": "borrowDatetime" },
		                { "data": "borrowUserName" },
		                { "data": "progressDatetime" },
		                { "data": "progressUserName" },
		                { "data": "checkDatetime" },
		                { "data": "checkUserName" },
		                { "data": "backDatetime" },
		                { "data": "backUserName" },
		                { "data": "finalDatetime" },
		                { "data": "finalUserName" },
		                { "data": "businessAccount" },
		                { "data": "business" }
		            ]
			};
			
		    $("#docSumTable").dataTable(opt);
		    
		    var datatable = $("#docSumTable").dataTable();
			datatable.fnClearTable();
		    var datatable2 = $("#docSumTable").DataTable();
			new $.fn.dataTable.FixedHeader( datatable2 );
		    
		});
	</script>
<div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryDocSum">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				</td>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnprintDocSum">
				    	<span class="ui-icon ui-icon-gear"></span> 匯出Excel
				  	</button>
				</td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
		<table>
			<tr>
				<td>
			    	<label for="labsearchDocSumCaseId">案號: </label>
					<input id="iptsearchDocSumCaseId"></input>
				</td>
				<td>
			    	<label for="labsearchDocSumBankName">委託公司: </label>
					<input id="iptsearchDocSumBankName"></input>
				</td>
				<td><label for="labsearchDocSumDocTypeOne">文件類別: </label>
				<div class="select-bar">
						<select multiple="multiple" id="selectedBox_docSumDocTypeOne">
						</select>
					</div></td>
				<td>
			    	<label for="labsearchDocSumReceivedStartDate">收文日期: </label>
					<input id="iptsearchDocSumReceivedStartDate"></input>
				</td>
				<td>
			    	<label for="labsearchDocSumReceivedEndDate">~ </label>
					<input id="iptsearchDocSumReceivedEndDate"></input>
				</td>
			</tr>
			<tr>
				<td>
			    	<label for="labsearchDocSumDebtName">姓名: </label>
					<input id="iptsearchDocSumDebtName"></input>
				</td>
				<td></td>
				<td><label for="labsearchDocSumProdName">產品別: </label><div class="select-bar">
						<select multiple="multiple" id="selectedBox_docSumProdName">
						</select>
					</div></td>
				<td>
			    	<label for="labsearchDocSumBorrowStartDate">申調日期: </label>
					<input id="iptsearchDocSumBorrowStartDate"></input>
				</td>
				<td>
			    	<label for="labsearchDocSumBorrowEndDate">~ </label>
					<input id="iptsearchDocSumBorrowEndDate"></input>
				</td>
			</tr>
			<tr>
				<td>
			    	<label for="labsearchDocSumID">ID: </label>
					<input id="iptsearchDocSumID"></input>
				</td>
				
				<td><label for="labsearchDocSumStatus">狀態: </label><div class="select-bar">
						<select multiple="multiple" id="selectedBox_docSumStatus">
						</select>
					</div></td>
				<td><label for="labsearchDocSumTypeTwo">文件項目: </label>
					<div class="select-bar">
						<select multiple="multiple" id="selectedBox_docSumTypeTwo">
						</select>
					</div></td>
				<td>
			    	<label for="labsearchDocSumProgressStartDate">處裡日期: </label>
					<input id="iptsearchDocSumProgressStartDate"></input>
				</td>
				<td>
			    	<label for="labsearchDocSumProgressEndDate">~ </label>
					<input id="iptsearchDocSumProgressEndDate"></input>
				</td>
			</tr>
			<tr>
				<td>
			    	<label for="labsearchDocSumBorrowReason">申調原因: </label>
					<select id="iptDocSumBorrowReason"><option value="">請選擇</option></select>
				</td><td></td><td></td>
				<td>
			    	<label for="labsearchDocSumCheckStartDate">簽收日期: </label>
					<input id="iptsearchDocSumCheckStartDate"></input>
				</td>
				<td>
			    	<label for="labsearchDocSumCheckEndDate">~ </label>
					<input id="iptsearchDocSumCheckEndDate"></input>
				</td>
			</tr>
			<tr>
				<td>
			    	<label for="labsearchDocSumDocCode">文件編號: </label>
					<input id="iptsearchDocSumDocCode"></input>
				</td><td></td>
				<td><label for="labsearchDocSumCheckUserName">簽收人: </label><div class="select-bar">
						<select multiple="multiple" id="selectedBox_docSumCheckUserName">
						</select>
					</div></td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
	</div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="docSumTable" class="display" cellspacing="0" width="100%" >
		    <thead>
            <tr>
                <th>序</th>
                <th>委託公司</th>
                <th>產品別</th>
                <th>案號</th>
                <th>姓名</th>
                <th>ID</th>
                <th>文件編號</th>
                <th>文件類別</th>
                <th>文件項目</th>
                <th>狀態</th>
                <th>法院案號</th>
                <th>原始憑證</th>
                <th>(執名)發文日</th>
                <th>(執名)最近執行日</th>
                <th>(執名)備註</th>
                <th>陳報</th>
                <th>補正</th>
                <th>繳費</th>
                <th>登報</th>
                <th>開庭</th>
                <th>導往執行</th>
                <th>申調原因</th>
                <th>法務編號</th>
                <th>申調日期</th>
                <th>申調人員</th>
                <th>處理日期</th>
                <th>處理人員</th>
                <th>簽收日期</th>
                <th>簽收人</th>
                <th>退件日期</th>
                <th>退件人員</th>
                <th>最後作業日期時間</th>
                <th>最後作業人員</th>
                <th>業務單位</th>
                <th>業務人員/分機</th>
            </tr>
        </thead>
    </table>
	</div>
	
</div>
</body>
</html>