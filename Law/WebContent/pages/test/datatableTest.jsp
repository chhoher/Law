<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<link rel="stylesheet" href="../../js/jquery-ui.css">
<script type="text/javascript" src="../../js/external/jquery/jquery.js"></script>
<script src="../../js/jquery-ui.js"></script>
<link href="../../js/jquery.dataTables.css" rel="stylesheet">
<script type="text/javascript" src="../../js/jquery.dataTables.min.js"></script>
<body>
<script type="text/javascript">
// add by Jia search function
function searchCase(iptsearchdebtorName, iptsearchdebtorID, iptsearchcaseId, iptsearchdocNo, iptsearchLawCaseId) {
	var datatable = $("#queryCaseTable").dataTable();
	datatable.fnClearTable();
	var json = "";
	$.ajax({
		url : '../../pages/doc/documents/docAction!loadCaseInfo.action',
		data : {
			'iptsearchdebtorName' : iptsearchdebtorName,
			'iptsearchdebtorID' : iptsearchdebtorID,
			'iptsearchcaseId' : iptsearchcaseId,
			'iptsearchdocNo' : iptsearchdocNo,
			'iptsearchLawCaseId' : iptsearchLawCaseId
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

// ===== function end =====

$(document).ready(function(){ 
    var opt={
    		"oLanguage":{"sUrl":"../../i18n/Chinese-traditional.json"},
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
    
    $('#example').dataTable();
 // ===== 功能列按鈕 start =====
 // 查詢按鈕
 $("#btnquerycase").button().on("click",function() {
 	// 定義查詢條件欄位
 	var iptsearchdebtorName = $("#iptsearchdebtorName").val(), 
 		iptsearchdebtorID = $("#iptsearchdebtorID").val(),
 		iptsearchcaseId = $("#iptsearchcaseId").val(),
 		iptsearchdocNo = $("#iptsearchdocNo").val(),
 		iptsearchLawCaseId = $("#iptsearchLawCaseId").val();
 	searchCase(iptsearchdebtorName, iptsearchdebtorID, iptsearchcaseId, iptsearchdocNo, iptsearchLawCaseId);
 });
    
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
			<tr><td>
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
			</td></tr>
			<!-- 查詢條件欄位 -->
		</table>
	</div>
　<div style="margin:5px 5px 5px 5px">
		<table id="queryCaseTable"  class="display" cellspacing="0" width="100%">
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
	<div>
	<table id="example" class="display" cellspacing="0" width="100%"><thead><tr><th>Name</th><th>Position</th><th>Office</th><th>Salary</th></tr></thead><tbody><tr><td>Tiger Nixon</td><td>System Architect</td><td>Edinburgh</td><td>$320,800</td></tr><tr><td>Garrett Winters</td><td>Accountant</td><td>Tokyo</td><td>$170,750</td></tr><tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>San Francisco</td><td>$86,000</td></tr><tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>Edinburgh</td><td>$433,060</td></tr><tr><td>Airi Satou</td><td>Accountant</td><td>Tokyo</td><td>$162,700</td></tr><tr><td>Brielle Williamson</td><td>Integration Specialist</td><td>New York</td><td>$372,000</td></tr><tr><td>Herrod Chandler</td><td>Sales Assistant</td><td>San Francisco</td><td>$137,500</td></tr><tr><td>Rhona Davidson</td><td>Integration Specialist</td><td>Tokyo</td><td>$327,900</td></tr><tr><td>Colleen Hurst</td><td>Javascript Developer</td><td>San Francisco</td><td>$205,500</td></tr><tr><td>Sonya Frost</td><td>Software Engineer</td><td>Edinburgh</td><td>$103,600</td></tr><tr><td>Jena Gaines</td><td>Office Manager</td><td>London</td><td>$90,560</td></tr><tr><td>Quinn Flynn</td><td>Support Lead</td><td>Edinburgh</td><td>$342,000</td></tr><tr><td>Charde Marshall</td><td>Regional Director</td><td>San Francisco</td><td>$470,600</td></tr><tr><td>Haley Kennedy</td><td>Senior Marketing Designer</td><td>London</td><td>$313,500</td></tr><tr><td>Tatyana Fitzpatrick</td><td>Regional Director</td><td>London</td><td>$385,750</td></tr><tr><td>Michael Silva</td><td>Marketing Designer</td><td>London</td><td>$198,500</td></tr><tr><td>Paul Byrd</td><td>Chief Financial Officer (CFO)</td><td>New York</td><td>$725,000</td></tr><tr><td>Gloria Little</td><td>Systems Administrator</td><td>New York</td><td>$237,500</td></tr><tr><td>Bradley Greer</td><td>Software Engineer</td><td>London</td><td>$132,000</td></tr><tr><td>Dai Rios</td><td>Personnel Lead</td><td>Edinburgh</td><td>$217,500</td></tr><tr><td>Jenette Caldwell</td><td>Development Lead</td><td>New York</td><td>$345,000</td></tr><tr><td>Yuri Berry</td><td>Chief Marketing Officer (CMO)</td><td>New York</td><td>$675,000</td></tr><tr><td>Caesar Vance</td><td>Pre-Sales Support</td><td>New York</td><td>$106,450</td></tr><tr><td>Doris Wilder</td><td>Sales Assistant</td><td>Sidney</td><td>$85,600</td></tr><tr><td>Angelica Ramos</td><td>Chief Executive Officer (CEO)</td><td>London</td><td>$1,200,000</td></tr><tr><td>Gavin Joyce</td><td>Developer</td><td>Edinburgh</td><td>$92,575</td></tr><tr><td>Jennifer Chang</td><td>Regional Director</td><td>Singapore</td><td>$357,650</td></tr><tr><td>Brenden Wagner</td><td>Software Engineer</td><td>San Francisco</td><td>$206,850</td></tr><tr><td>Fiona Green</td><td>Chief Operating Officer (COO)</td><td>San Francisco</td><td>$850,000</td></tr><tr><td>Shou Itou</td><td>Regional Marketing</td><td>Tokyo</td><td>$163,000</td></tr><tr><td>Michelle House</td><td>Integration Specialist</td><td>Sidney</td><td>$95,400</td></tr><tr><td>Suki Burks</td><td>Developer</td><td>London</td><td>$114,500</td></tr><tr><td>Prescott Bartlett</td><td>Technical Author</td><td>London</td><td>$145,000</td></tr><tr><td>Gavin Cortez</td><td>Team Leader</td><td>San Francisco</td><td>$235,500</td></tr><tr><td>Martena Mccray</td><td>Post-Sales support</td><td>Edinburgh</td><td>$324,050</td></tr><tr><td>Unity Butler</td><td>Marketing Designer</td><td>San Francisco</td><td>$85,675</td></tr><tr><td>Howard Hatfield</td><td>Office Manager</td><td>San Francisco</td><td>$164,500</td></tr><tr><td>Hope Fuentes</td><td>Secretary</td><td>San Francisco</td><td>$109,850</td></tr><tr><td>Vivian Harrell</td><td>Financial Controller</td><td>San Francisco</td><td>$452,500</td></tr><tr><td>Timothy Mooney</td><td>Office Manager</td><td>London</td><td>$136,200</td></tr><tr><td>Jackson Bradshaw</td><td>Director</td><td>New York</td><td>$645,750</td></tr><tr><td>Olivia Liang</td><td>Support Engineer</td><td>Singapore</td><td>$234,500</td></tr><tr><td>Bruno Nash</td><td>Software Engineer</td><td>London</td><td>$163,500</td></tr><tr><td>Sakura Yamamoto</td><td>Support Engineer</td><td>Tokyo</td><td>$139,575</td></tr><tr><td>Thor Walton</td><td>Developer</td><td>New York</td><td>$98,540</td></tr><tr><td>Finn Camacho</td><td>Support Engineer</td><td>San Francisco</td><td>$87,500</td></tr><tr><td>Serge Baldwin</td><td>Data Coordinator</td><td>Singapore</td><td>$138,575</td></tr><tr><td>Zenaida Frank</td><td>Software Engineer</td><td>New York</td><td>$125,250</td></tr><tr><td>Zorita Serrano</td><td>Software Engineer</td><td>San Francisco</td><td>$115,000</td></tr><tr><td>Jennifer Acosta</td><td>Junior Javascript Developer</td><td>Edinburgh</td><td>$75,650</td></tr><tr><td>Cara Stevens</td><td>Sales Assistant</td><td>New York</td><td>$145,600</td></tr><tr><td>Hermione Butler</td><td>Regional Director</td><td>London</td><td>$356,250</td></tr><tr><td>Lael Greer</td><td>Systems Administrator</td><td>London</td><td>$103,500</td></tr><tr><td>Jonas Alexander</td><td>Developer</td><td>San Francisco</td><td>$86,500</td></tr><tr><td>Shad Decker</td><td>Regional Director</td><td>Edinburgh</td><td>$183,000</td></tr><tr><td>Michael Bruce</td><td>Javascript Developer</td><td>Singapore</td><td>$183,000</td></tr><tr><td>Donna Snider</td><td>Customer Support</td><td>New York</td><td>$112,000</td></tr></tbody></table>
	</div>
</div>
</body>
</html>