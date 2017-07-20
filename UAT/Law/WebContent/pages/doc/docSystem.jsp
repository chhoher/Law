<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-06-13 文管系統的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docdocSystem.js"></script>
<head>
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
		    
			
			var docSystemCaseDocsTableopt={
		    		"sDom": '<"top">rt<"bottom"><"clear">',
		    		"bSort": false,
		    		"bPaginate" : false,
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		    		"columns": [
		                //{ "data" : "applyBorrow" },
		                //{ "data" : "editDoc" },
		                { "data" : "docStatus" },
		                //{ "data" : "borrowInfo" },
		                //{ "data" : "progressDoc" },
		                //{ "data" : "imgFiles" },
		                { "data" : "bankDate"},
		                { "data" : "receivedDate"}
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
					if (response.data != '') {
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
					<button class="ui-button ui-widget ui-corner-all" id ="btnsecondedDoc">
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
		<table id="docSystemCaseDocsTable"  class="display" cellspacing="0" width="100%">
		    <thead>
            <tr>
                <!-- <th>申請借調</th> -->
                <!-- <th>修改</th> -->
                <th>文件狀態</th>
                <!-- <th>借調資訊</th>-->
                <!-- <th>進度</th>-->
                <!-- <th>影像檔</th>-->
                <th>業主調件日</th>
                <th>日期</th>
            </tr>
        </thead>
    </table>
	</div>
	
	
	
	</div>
</body>
</html>