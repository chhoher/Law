/**
 * Add By Jia 2017-05-11 docqueryCase.js 實作queryCase.jsp 
 */
var subtabcount = 0;
var activesubtabcount = 0;
var subtabs = $("#subtabs").tabs();
// 表格中的超連結function
	// TODO TAB 先暫時這樣 連結到文管系統
	function addsubtab(data) {
		console.log(data);
		subtabcount ++ ;
		activesubtabcount ++;
		//TODO add by Jia 2017-02-13 用menuid帶出頁面index (去找L_SYS_FUNCTION)
		var tabTitle = "表單設定";
		var tabId = "tabs-" + subtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>"+
           	 	"<tr>"+
					"<td><label>共用案號</label></td>"+
					"<td><input id='aa'></input></td>"+
					"<td><label>業主調件日</label></td>"+
					"<td><input id='aa' ></input></td>"+
				"</tr>"+
           	 "</table>";
		
		subtabs.find(".ui-tabs-nav").append(li);
		subtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		subtabs.tabs("refresh");
		subtabs.tabs({ active: activesubtabcount});
	}
	
	// Close icon: removing the tab on click
	subtabs.on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		activesubtabcount--;
	});

	
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