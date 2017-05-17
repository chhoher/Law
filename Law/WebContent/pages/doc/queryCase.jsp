<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<body>
<!-- Add By Jia 2017-05-09 新增查詢案件的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docqueryCase.js"></script>
<script type="text/javascript">
$(document).ready(function(){ 
    var opt={
    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
    		"bJQueryUI":true,	
    		"columns": [
                { "data": "Bank_alias" },
                { "data": "Prod_Name" },
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
                },
                { "data": "Case_ID",
                	"render": function ( data, type, full, meta ) {
                		var todocSystem = "<button onclick=\"todocSystem("+data+")\">文管系統</button>";
                		var toaddDoc = "<button onclick=\"toaddDoc("+data+")\">文管新增</button>";
                		var toapplyLaw = "<button onclick=\"toapplyLaw("+data+")\">申請法務</button>";
                		return  todocSystem + "     " + toaddDoc + "     " ;
                	} 
                }
            ]
            };
    $("#queryCaseTable").dataTable(opt);
    });
</script>

<div>
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnquerycase">
				    	<span class="ui-icon ui-icon-gear"></span> 查詢
				  	</button>
				</td>
			</tr>
			<!-- 查詢條件欄位 -->
			<table>
			<tr>
				<td>
			    	<label for="labsearchdebtorName">姓名: </label>
					<input id="iptsearchdebtorName"></input>
				</td>
				<td>
			    	<label for="labsearchdebtorID">ID: </label>
					<input id="iptsearchdebtorID"></input>
				</td>
				<td>
			    	<label for="labsearchcaseId">案號: </label>
					<input id="iptsearchcaseId"></input>
				</td>
				<td>
			    	<label for="labsearchdocNo">文件編號: </label>
					<input id="iptsearchdocNo"></input>
				</td>
				<td>
			    	<label for="labsearchLawCaseId">法院案號: </label>
					<input id="iptsearchLawCaseId"></input>
				</td>
			</tr>
			</table>
			<!-- 查詢條件欄位 -->
		</table>
	</div>
　<div style="margin:5px 5px 5px 5px">
		<table id="queryCaseTable"  >
		    <thead>
            <tr>
                <th>委託公司</th>
                <th>產品別</th>
                <th>案號</th>
                <th>債務人</th>
                <th>ID</th>
                <th>委託金額</th>
                <th>委託日</th>
                <th>庫存或退案</th>
                <th>超連結</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th>委託公司</th>
                <th>產品別</th>
                <th>案號</th>
                <th>債務人</th>
                <th>ID</th>
                <th>委託金額</th>
                <th>委託日</th>
                <th>庫存或退案</th>
                <th>超連結</th>
            </tr>
        </tfoot>
    </table>

	</div>
</div>
</body>
</html>
