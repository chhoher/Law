<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-07-31 調卷的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docmoveDoc.js"></script>
<head>
<style>
    .MinWidth0 {
        min-width: 70px;
    }
    
    .borrowWidth{
    	min-width:450px;
    }
</style>
<title>調卷</title>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			
			//add by Jia 2017-07-27 初始化多選框
			$.ajax({
				url : '../pages/doc/documents/docAction!initdocSumSelectOption.action',
				type : "POST",
				dataType : 'json',
				success : function(response) {
					//文件類別
					$("#selectedBox_docSumDocTypeOne option").remove();
					var typeOneOption = "";
					var typeOneObject = response.TypeOne;
					$.each(typeOneObject,function(i){
						var optionValue = typeOneObject[i].variableId;
						typeOneOption += '<option value="'+optionValue+'">'+typeOneObject[i].variableName+'</option>'; 
					});
					$("#selectedBox_docSumDocTypeOne").append(typeOneOption);
					
					//文件狀態
					$("#selectedBox_docSumStatus option").remove();
					var docStatusOption = "";
					var docStatusObject = response.DocStatus;
					$.each(docStatusObject,function(i){
						var optionValue = docStatusObject[i].variableId;
						docStatusOption += '<option value="'+optionValue+'">'+docStatusObject[i].variableName+'</option>'; 
					});
					$("#selectedBox_docSumStatus").append(docStatusOption);
					
					//文件項目
					$("#selectedBox_docSumTypeTwo option").remove();
					var typeTwoOption = "";
					var typeTwoObject = response.TypeTwo;
					$.each(typeTwoObject,function(i){
						var optionValue = typeTwoObject[i].variableId;
						typeTwoOption += '<option value="'+optionValue+'">'+typeTwoObject[i].variableName+'</option>'; 
					});
					$("#selectedBox_docSumTypeTwo").append(typeTwoOption);
					
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			
			//繳費的表格
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
		                { "data": "toCourtDate" }
		            ]
			};
			
		    $("#docPayTable").dataTable(opt);
		    
		    
		});
	</script>
<div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryMoveDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				</td>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnprintMoveDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 列印明細
				  	</button>
				</td>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btncheckMoveDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 確定調出
				  	</button>
				</td>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btncancelMoveDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 取消借調
				  	</button>
				</td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
		<table>
			<tr>
				<td>
			    	<label for="labsearchMoveDocCaseId">案號 </label>
					<input id="iptsearchMoveDocCaseId"></input>
				</td>
				<td>
			    	<label for="labsearchMoveDocBankName">委託公司 </label>
					<input id="iptsearchMoveDocBankName"></input>
				</td>
				<td>
			    	<label for="labsearchMoveDocIsInStore">是否在庫 </label>
					<select id="iptsearchMoveDocIsInStore"><option value="">請選擇</option></select>
				</td>
			</tr>
			<tr>
				<td>
			    	<label for="labsearchMoveDocDebtName">姓名 </label>
					<input id="iptsearchMoveDocDebtName"></input>
				</td>
				<td>
			    	<label for="labsearchMoveDocBorrowReason">申調原因 </label>
					<select id="iptMoveDocBorrowReason"><option value="">請選擇</option></select>
				</td>
				<td>
			    	<label for="labsearchMoveDocDocStatud">文管狀態</label>
					<select id="cobsearchMoveDocDocStatud"><option value="">請選擇</option></select>
				</td>
			</tr>
			<tr>
				<td>
			    	<label for="labsearchMoveDocID">ID</label>
					<input id="iptsearchMoveDocID"></input>
				</td>
				<td>
			    	<label for="labsearchMoveDocBorrowStartDate">申調日期 </label>
					<input id="iptsearchMoveDocBorrowStartDate"></input>
				</td>
				<td>
			    	<label for="labsearchMoveDocBorrowEndDate">~</label>
					<input id="iptsearchMoveDocBorrowEndDate"></input>
				</td>
			</tr>
			<tr>
				<td>
			    	<label for="labsearchMoveDocDocCode">文件編號 </label>
					<input id="iptsearchMoveDocDocCode"></input>
				</td>
				<td><label for="labsearchMoveDocBorrowUserName">申請人 </label>
						<select id="cobsearchMoveDocBorrowUserName"><option value="">請選擇</option></select>
				</td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
	</div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="docPayTable" class="display" cellspacing="0" width="100%" >
		    <thead>
            <tr>
                <th>取消申請</th>
                <th>金額</th>
                <th>序</th>
                <th>影像檔</th>
                <th>編號</th>
                <th>繳費項目</th>
                <th>收文日期</th>
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
                <th>繳費狀態</th>
                <th>項目</th>
                <th>備註</th>
            </tr>
        </thead>
    </table>
	</div>
	
</div>
</body>
</html>