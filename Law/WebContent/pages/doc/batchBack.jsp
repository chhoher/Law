<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-08-07 大批退件的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docbatchBack.js"></script>
<head>
<style>
    .MinWidth0 {
        min-width: 70px;
    }
    
    .borrowWidth{
    	min-width:450px;
    }
</style>
<title>大批退件</title>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			
			//add by Jia 2017-08-07 初始化多選框
			$.ajax({
				url : '../pages/doc/borrow/docBorrowAction!initMoveCheckDocSelectOption.action',
				type : "POST",
				dataType : 'json',
				success : function(response) {
					var noneSelect = "<option value=''>請選擇</option>"; 
					
					//委託公司
	    			law.common.selectOption("#cobsearchBatchBackDocBankName", response.bankName);
					$("#cobsearchBatchBackDocBankName").prepend(noneSelect);
					$( "#cobsearchBatchBackDocBankName")[0].selectedIndex = 0;
					
					//申調原因
	    			law.common.selectOption("#cobBatchBackDocBorrowReason", response.borrowReason);
					$("#cobBatchBackDocBorrowReason").prepend(noneSelect);
					$( "#cobBatchBackDocBorrowReason")[0].selectedIndex = 0;

				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			
			//大批退件的表格
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
		                { "data": "borrowUserId" },
		                { "data": "borrowDatetime" },
		                { "data": "progressUserId" },
		                { "data": "disProgressDatetime" },
		                { "data": "checkUserId" },
		                { "data": "checkDatetime" },
		                { "data": "hasLawActive" }
		            ]
			};
			
		    $("#batchBackDocTable").dataTable(opt);

		    sbatchBackDocDatatable = $("#batchBackDocTable").DataTable();
		    
		 	// Handle click on "Select all" control
		    $('#batchBackDoc-select-all').on('click', function(){
		       // Get all rows with search applied
		       var rows = sbatchBackDocDatatable.rows({ 'search': 'applied' }).nodes();
		       // Check/uncheck checkboxes for all rows in the table
		       $('input[type="checkbox"]', rows).prop('checked', this.checked);
		    });
		 	
		    sbatchBackDocDatatable.on( 'order.dt search.dt', function () {
		    	sbatchBackDocDatatable.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
		            cell.innerHTML = i+1;
		        } );
		    } ).draw();
		    
		    // 檔案上傳功能
		    $('#batchBackfilesupload').fileupload({
		    	url : '../pages/doc/borrow/docBorrowAction!batchBackfilesupload.action', //上傳處理的action
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
					$("#batchBackfilesupload").attr("disabled", true);
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
					datatable = $("#batchBackDocTable").dataTable();
					datatable.fnAddData(data.result.responseLDocBorrow);
				},
				//全部上傳完畢
				stop : function(e) {
					//alert("上傳完畢");
					$("#batchBackfilesupload").attr("disabled", false);
				}
			});
		});
	</script>
<div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryBatchBackDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				</td>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnbackBatchBackDoc">
				    	<span class="ui-icon ui-icon-gear"></span> 退件申請
				  	</button>
				</td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
		<table>
			<tr>
				<td>
					<label for="labuploadBatchBackDocs">大批案號上傳</label>
				</td>
					<td id = "tdbatchBackfilesupload">
						<span class="btn btn-success fileinput-button ui-button ui-widget ui-corner-all">
						<span class="ui-icon ui-icon-plus"></span>選擇檔案
						<input id="batchBackfilesupload" name="upload" type="file" multiple >
						</span>
					</td>
			</tr>
		</table>
		<table>
			<tr>
				<td><label for="labsearchBatchBackDocCaseId">案號 </label></td>
				<td><input id="iptsearchBatchBackDocCaseId"></input></td>
				<td><label for="labsearchBatchBackDocBankName">委託公司 </label></td>
				<td><select id="cobsearchBatchBackDocBankName"><option value="">請選擇</option></select></td>
			</tr>
			<tr>
				<td><label for="labsearchBatchBackDocDebtName">姓名 </label></td>
				<td><input id="iptsearchBatchBackDocDebtName"></input></td>
				<td><label for="labsearchBatchBackDocBorrowReason">申調原因 </label></td>
				<td><select id="cobBatchBackDocBorrowReason"><option value="">請選擇</option></select></td>
			</tr>
			<tr>
				<td><label for="labsearchBatchBackDocID">ID</label></td>
				<td><input id="iptsearchBatchBackDocID"></input></td>
				<td><label for="labsearchBatchBackDocBorrowStartDate">申調日期 </label></td>
				<td><input id="iptsearchBatchBackDocBorrowStartDate"></input></td>
				<td><label for="labsearchBatchBackDocBorrowEndDate">~</label></td>
				<td><input id="iptsearchBatchBackDocBorrowEndDate"></input></td>
			</tr>
			<tr>
				<td><label for="labsearchBatchBackDocDocCode">文件編號 </label></td>
				<td><input id="iptsearchBatchBackDocDocCode"></input></td>
				<td><label for="labsearchBatchBackDocBorrowUserName">申請人 </label></td>
				<td><select id="cobsearchBatchBackDocBorrowUserName"><option value="">請選擇</option></select></td>
			</tr>
		</table>
		<!-- 查詢條件欄位 -->
	</div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="batchBackDocTable" class="display" cellspacing="0" width="100%" >
		    <thead>
            <tr>
                <th>序</th>
                <th><input name="select_all" value="1" id="batchBackDoc-select-all" type="checkbox"></th>
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
                <th>申請人</th>
                <th>申調日期</th>
                <th>檔管處理人員</th>
                <th>處理日期</th>
                <th>簽收人</th>
                <th>簽收日期</th>
                <th>有法務行動</th>
            </tr>
        </thead>
    </table>
	</div>
	
</div>
</body>
</html>