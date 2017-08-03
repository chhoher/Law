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
			var moveDocDatatable,smoveDocDatatable;
		
			//add by Jia 2017-07-27 初始化多選框
			$.ajax({
				url : '../pages/doc/borrow/docBorrowAction!initMoveDocSelectOption.action',
				type : "POST",
				dataType : 'json',
				success : function(response) {
					var noneSelect = "<option value=''>請選擇</option>"; 
					
					//委託公司
	    			law.common.selectOption("#cobsearchMoveDocBankName", response.bankName);
					$("#cobsearchMoveDocBankName").prepend(noneSelect);
					$( "#cobsearchMoveDocBankName")[0].selectedIndex = 0;
					
					//是否在庫
	    			law.common.selectOption("#cobsearchMoveDocIsInStore", response.O_C);
					$("#cobsearchMoveDocIsInStore").prepend(noneSelect);
					$( "#cobsearchMoveDocIsInStore")[0].selectedIndex = 0;
					
					//申調原因
	    			law.common.selectOption("#cobMoveDocBorrowReason", response.borrowReason);
					$("#cobMoveDocBorrowReason").prepend(noneSelect);
					$( "#cobMoveDocBorrowReason")[0].selectedIndex = 0;

					//借調狀態
	    			law.common.selectOption("#cobsearchMoveDocDocStatus", response.borrowStatus);
					$("#cobsearchMoveDocDocStatus").prepend(noneSelect);
					$( "#cobsearchMoveDocDocStatus")[0].selectedIndex = 0;
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
	                   	//orderable:false,
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
		                { "data": "lawCode" },
		                { "data": "O_C" },
		                { "data": "borrowStatus" },
		                { "data": "borrowUserId" },
		                { "data": "borrowDatetime" },
		                { "data": "progressUserId" },
		                { "data": "disProgressDatetime" },
		                { "data": "shareCaseId" }
		            ]
			};
			
		    $("#moveDocTable").dataTable(opt);
		    
		    moveDocDatatable = $("#moveDocTable").dataTable();
		    smoveDocDatatable = $("#moveDocTable").DataTable();
		    
		    $.ajax({
				url : '../pages/doc/borrow/docBorrowAction!loadborrowDocs.action',
				data : {
					
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					var json = response.responseLDocBorrow;
					moveDocDatatable.fnClearTable();
					if (json.length !== 0) {
						moveDocDatatable.fnAddData(json);
					}
					moveDocDatatable.fnDraw();
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		    
		 	// Handle click on "Select all" control
		    $('#moveDoc-select-all').on('click', function(){
		       // Get all rows with search applied
		       var rows = smoveDocDatatable.rows({ 'search': 'applied' }).nodes();
		       // Check/uncheck checkboxes for all rows in the table
		       $('input[type="checkbox"]', rows).prop('checked', this.checked);
		    });
		 	
		    smoveDocDatatable.on( 'order.dt search.dt', function () {
		    	smoveDocDatatable.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
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
				    	<span class="ui-icon ui-icon-gear"></span> 取消借調-狀態更改為在庫
				  	</button>
				</td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
		<table>
			<tr>
				<td><label for="labsearchMoveDocCaseId">案號 </label></td>
				<td><input id="iptsearchMoveDocCaseId"></input></td>
				<td><label for="labsearchMoveDocBankName">委託公司 </label></td>
				<td><select id="cobsearchMoveDocBankName"><option value="">請選擇</option></select></td>
				<td><label for="labsearchMoveDocIsInStore">是否在庫 </label></td>
				<td><select id="cobsearchMoveDocIsInStore"><option value="">請選擇</option></select></td>
			</tr>
			<tr>
				<td><label for="labsearchMoveDocDebtName">姓名 </label></td>
				<td><input id="iptsearchMoveDocDebtName"></input></td>
				<td><label for="labsearchMoveDocBorrowReason">申調原因 </label></td>
				<td><select id="cobMoveDocBorrowReason"><option value="">請選擇</option></select></td>
				<td><label for="labsearchMoveDocDocStatus">文管狀態</label></td>
				<td><select id="cobsearchMoveDocDocStatus"><option value="">請選擇</option></select></td>
			</tr>
			<tr>
				<td><label for="labsearchMoveDocID">ID</label></td>
				<td><input id="iptsearchMoveDocID"></input></td>
				<td><label for="labsearchMoveDocBorrowStartDate">申調日期 </label></td>
				<td><input id="iptsearchMoveDocBorrowStartDate"></input></td>
				<td><label for="labsearchMoveDocBorrowEndDate">~</label></td>
				<td><input id="iptsearchMoveDocBorrowEndDate"></input></td>
			</tr>
			<tr>
				<td><label for="labsearchMoveDocDocCode">文件編號 </label></td>
				<td><input id="iptsearchMoveDocDocCode"></input></td>
				<td><label for="labsearchMoveDocBorrowUserName">申請人 </label></td>
				<td><select id="cobsearchMoveDocBorrowUserName"><option value="">請選擇</option></select></td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
	</div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="moveDocTable" class="display" cellspacing="0" width="100%" >
		    <thead>
            <tr>
                <th>序</th>
                <th><input name="select_all" value="1" id="moveDoc-select-all" type="checkbox"></th>
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
                <th>法務編號</th>
                <th>是否退案</th>
                <th>取消申請</th>
                <th>申請人</th>
                <th>申調日期</th>
                <th>檔管處理人員</th>
                <th>處理日期</th>
                <th>原共用案號</th>
            </tr>
        </thead>
    </table>
	</div>
	
</div>
</body>
</html>