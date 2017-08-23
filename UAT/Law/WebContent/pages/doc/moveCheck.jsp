<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-08-07 調卷簽收的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docmoveCheck.js"></script>
<head>
<style>
    .MinWidth0 {
        min-width: 70px;
    }
    
    .borrowWidth{
    	min-width:450px;
    }
</style>
<title>調卷簽收</title>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			var moveCheckDocDatatable,smoveCheckDocDatatable;
		
			//add by Jia 2017-08-07 初始化多選框
			$.ajax({
				url : '../pages/doc/borrow/docBorrowAction!initMoveCheckDocSelectOption.action',
				type : "POST",
				dataType : 'json',
				success : function(response) {
					var noneSelect = "<option value=''>請選擇</option>"; 
					
					//委託公司
	    			law.common.selectOption("#cobsearchMoveCheckDocBankName", response.bankName);
					$("#cobsearchMoveCheckDocBankName").prepend(noneSelect);
					$( "#cobsearchMoveCheckDocBankName")[0].selectedIndex = 0;
					
					//申調原因
	    			law.common.selectOption("#cobMoveCheckDocBorrowReason", response.borrowReason);
					$("#cobMoveCheckDocBorrowReason").prepend(noneSelect);
					$( "#cobMoveCheckDocBorrowReason")[0].selectedIndex = 0;

				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			
			//調卷簽收的表格
			var opt={
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		            "scrollX":        true,
		            "scrollCollapse": true,
	                "bAutoWidth":false,    
		    		"columnDefs": [{
	                    targets: '_all',
	                    className: 'dt-center'
	                }],
	                "order": [[0, "asc"]],
		    		"columns": [
		                { "data": "rowNum" },
		                { "data": "checkBox","render": function (data, type, full, meta){
		                    return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
		                } },
		                { "data": "bankName" },
		                { "data": "prodName" },
		                { "data": "caseId" },
		                { "data": "debtName" },
		                { "data": "ID" },
		                { "data": "docCode" },
		                { "data": "typeOne" },
		                { "data": "typeTwo" },
		                { "data": "docStatus" },
		                { "data": "courtYearInfo" },
		                { "data": "sourceDocInfo" },
		                { "data": "borrowReason" },
		                { "data": "borrowUserId" },
		                { "data": "borrowDatetime" },
		                { "data": "progressUserId" },
		                { "data": "disProgressDatetime" }
		            ]
			};
			
		    $("#moveCheckDocTable").dataTable(opt);
		    
		    moveCheckDocDatatable = $("#moveCheckDocTable").dataTable();
		    smoveCheckDocDatatable = $("#moveCheckDocTable").DataTable();
		    
		    $.ajax({
				url : '../pages/doc/borrow/docBorrowAction!loadborrowDocs.action',
				data : {
					"type" : 1
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					var json = response.responseLDocBorrow;
					moveCheckDocDatatable.fnClearTable();
					if (json.length !== 0) {
						moveCheckDocDatatable.fnAddData(json);
					}
					moveCheckDocDatatable.fnDraw();
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		    
		 	// Handle click on "Select all" control
		    $('#moveCheckDoc-select-all').on('click', function(){
		       // Get all rows with search applied
		       var rows = smoveCheckDocDatatable.rows({ 'search': 'applied' }).nodes();
		       // Check/uncheck checkboxes for all rows in the table
		       $('input[type="checkbox"]', rows).prop('checked', this.checked);
		    });
		 	
		    smoveCheckDocDatatable.on( 'order.dt search.dt', function () {
		    	smoveCheckDocDatatable.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
		            cell.innerHTML = i+1;
		        } );
		    } ).draw();
		});
	</script>
<div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryMoveCheckDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				</td>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnprintMoveCheckDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 列印明細
				  	</button>
				</td>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btncheckMoveCheckDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 簽收
				  	</button>
				</td>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btncancelMoveCheckDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 調卷取消-狀態更改為在庫
				  	</button>
				</td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
		<table>
			<tr>
				<td><label for="labsearchMoveCheckDocCaseId">案號 </label></td>
				<td><input id="iptsearchMoveCheckDocCaseId"></input></td>
				<td><label for="labsearchMoveCheckDocBankName">委託公司 </label></td>
				<td><select id="cobsearchMoveCheckDocBankName"><option value="">請選擇</option></select></td>
			</tr>
			<tr>
				<td><label for="labsearchMoveCheckDocDebtName">姓名 </label></td>
				<td><input id="iptsearchMoveCheckDocDebtName"></input></td>
				<td><label for="labsearchMoveCheckDocBorrowReason">申調原因 </label></td>
				<td><select id="cobMoveCheckDocBorrowReason"><option value="">請選擇</option></select></td>
			</tr>
			<tr>
				<td><label for="labsearchMoveCheckDocID">ID</label></td>
				<td><input id="iptsearchMoveCheckDocID"></input></td>
				<td><label for="labsearchMoveCheckDocBorrowStartDate">申調日期 </label></td>
				<td><input id="iptsearchMoveCheckDocBorrowStartDate"></input></td>
				<td><label for="labsearchMoveCheckDocBorrowEndDate">~</label></td>
				<td><input id="iptsearchMoveCheckDocBorrowEndDate"></input></td>
			</tr>
			<tr>
				<td><label for="labsearchMoveCheckDocDocCode">文件編號 </label></td>
				<td><input id="iptsearchMoveCheckDocDocCode"></input></td>
				<td><label for="labsearchMoveCheckDocBorrowUserName">申請人 </label></td>
				<td><select id="cobsearchMoveCheckDocBorrowUserName"><option value="">請選擇</option></select></td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
	</div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="moveCheckDocTable" class="display" cellspacing="0" width="100%" >
		    <thead>
            <tr>
                <th>序</th>
                <th><input name="select_all" value="1" id="moveCheckDoc-select-all" type="checkbox"></th>
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
                <th>申調原因</th>
                <th>申請人</th>
                <th>申調日期</th>
                <th>檔管處理人員</th>
                <th>處理日期</th>
            </tr>
        </thead>
    </table>
	</div>
	
</div>
</body>
</html>