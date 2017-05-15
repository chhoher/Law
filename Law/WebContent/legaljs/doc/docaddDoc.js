/**
 * Add By Jia 2017-05-11 docqueryCase.js 實作queryCase.jsp 
 */
var subtabcount = 0;
var subtabs = $("#subtabs").tabs();
// 表格中的超連結function
	// TODO TAB 先暫時這樣 連結到文管系統
	function addsubtab(data) {
		console.log(data);
		subtabcount ++ ;
		//TODO add by Jia 2017-02-13 用menuid帶出頁面index (去找L_SYS_FUNCTION)
		var tabTitle = "表單設定";
		var tabHref = "1";
		var tabId = "tabs-" + "1";
		
		var tabTemplate = "<li><a href='/Law/pages/" + tabHref + "'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		subtabs.find(".ui-tabs-nav").append(li);
		subtabs.tabs("refresh");
		subtabs.tabs({ active: tabcount	});
		alert(data);
	}
	
	// TODO TAB 先暫時這樣 連結到文管新增
	function toaddDoc(data) {
		window.open("pages/doc/addDoc.jsp?caseId=" + data);
	}
	
	// TODO Add By Jia 2017-05-11 目前還沒有做到法務 連結到申請法務
	function toapplyLaw(data) {
		alert(data);
	}

$(function() {
	
	// ===== function start =====
	
	// add by Jia search function
	function searchCase(iptsearchdebtorName, iptsearchdebtorID, iptsearchcaseId, iptsearchdocNo, iptsearchLawCaseId) {
		var datatable = $("#queryCaseTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : 'pages/doc/documents/docAction!loadCaseInfo.action',
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