/**
 * Add By Jia 2017-05-11 docqueryCase.js 實作queryCase.jsp 
 */
 

$(function() {
	
	// ===== function start =====
	
	// add by Jia search function
	function searchCase(iptsearchdebtorName, iptsearchdebtorID, iptsearchcaseId, iptsearchdocNo, iptsearchLawCaseId) {
		var datatable = $("#queryCaseTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : '../pages/doc/documents/docAction!loadCaseInfo.action',
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
	
	// ===== 功能列按鈕 end =====
	
});

 (function(){
	// 表格中的超連結function
	law.doc.todocSystem = function todocSystem(data) {
		//固定帶文管系統頁簽的資料
		law.tabControl.addTabs("#tabs",'8aa2e72a5ca02291015ca0ae14e70001','文管系統','/Law/pages/doc/docSystem.jsp?caseId=' + data);
		//window.open("../pages/doc/addDoc.jsp?caseId=" + data);
	}
	
	law.doc.toaddDoc = function toaddDoc(data) {
		//固定帶文管新增頁簽的資料
		law.tabControl.addTabs("#tabs",'8aa2e72a5c5c9b6e015c5cb587cc0025','文管新增','/Law/pages/doc/addDoc.jsp?caseId=' + data);
	}
	
	// TODO Add By Jia 2017-05-11 目前還沒有做到法務 連結到申請法務
	law.doc.toapplyLaw = function toapplyLaw(data) {
		alert(data);
	}
 })();
