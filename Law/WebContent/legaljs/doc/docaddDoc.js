/**
 * Add By Jia 2017-05-11 docqueryCase.js 實作queryCase.jsp 
 */
var censubtabcount = 0;
var cenactivesubtabcount = 0;
var censubtabs = $("#censubtabs").tabs();
// 表格中的超連結function
	// TODO TAB 先暫時這樣 連結到文管系統
	function addsubtab(data) {
		censubtabcount ++ ;
		cenactivesubtabcount ++;
		//TODO add by Jia 2017-02-13 用menuid帶出頁面index (去找L_SYS_FUNCTION)
		var tabTitle = "執行名義";
		var tabId = "tabs-" + censubtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>"+
           	 	"<tr>"+
					"<td><label>共用案號</label></td>"+
					"<td><input id='iptcentitlementShareCaseId"+censubtabcount+"'></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>業主調件日</label></td>"+
					"<td><input id='iptcentitlementBankDate"+censubtabcount+"' ></input></td>"+
					"<td><label>*收文日期</label></td>"+
					"<td><input id='iptcentitlementreceivedDate"+censubtabcount+"' ></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>*文件類別</label></td>"+
					"<td><input id='iptcentitlementTypeOne"+censubtabcount+"' ></input></td>"+
					"<td><label>*文件項目</label></td>"+
					"<td><input id='iptcentitlementTypeTwo"+censubtabcount+"' ></input></td>"+
					"<td><label>*債權人</label></td>"+
					"<td><input id='iptcentitlementBankName"+censubtabcount+"' ></input></td>"+
					"<td><label>原債權人</label></td>"+
					"<td><input id='iptcentitlementOldBankName"+censubtabcount+"' ></input></td>"+
				"</tr>"+
					"<td><label>*法院年字案股</label></td>"+
					"<td><input id='iptcentitlementCourtYearCourt"+censubtabcount+"' ></input></td>"+
					"<td><label>年度</label></td>"+
					"<td><input id='iptcentitlementCourtYearYear"+censubtabcount+"' ></input></td>"+
					"<td><label>字</label></td>"+
					"<td><input id='iptcentitlementCourtYearTxt"+censubtabcount+"' ></input></td>"+
					"<td><label>股別</label></td>"+
					"<td><input id='iptcentitlementCourtYearShare"+censubtabcount+"' ></input></td>"+
					"<td><label>案號</label></td>"+
					"<td><input id='iptcentitlementCourtYearCaseId"+censubtabcount+"' ></input></td>"+
				"<tr>"+
					"<td><label>*發文日期</label></td>"+
					"<td><input id='iptcentitlementSendDate"+censubtabcount+"' ></input></td>"+
					"<td><label>*最近執行日期</label></td>"+
					"<td><input id='iptcentitlementNewSendDate"+censubtabcount+"' ></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>備註</label></td>"+
					"<td><input id='iptcentitlementRemark"+censubtabcount+"'></input></td>"+
				"</tr>"+
           	" </table>";
		
		censubtabs.find(".ui-tabs-nav").append(li);
		censubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		censubtabs.tabs("refresh");
		censubtabs.tabs({ active: cenactivesubtabcount});
	}
	
	// Close icon: removing the tab on click
	censubtabs.on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		cenactivesubtabcount--;
		censubtabs.tabs({ active: cenactivesubtabcount});
	});

	
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