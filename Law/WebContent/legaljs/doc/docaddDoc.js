/**
 * Add By Jia 2017-05-11 docaddDoc.js 實作addDoc.jsp 
 */
 
 // 執行名義 start
law.addDoc.cen = {
	censubtabcount : 0,
	censubtabs : $("#censubtabs").tabs(),
	cenactivesubtabcount : 0,
	addcensubtab : function (){
		var cenactivesubtabcount = law.addDoc.cen.cenactivesubtabcount;
		var censubtabcount = law.addDoc.cen.censubtabcount;
		var censubtabs = law.addDoc.cen.censubtabs;
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
           	
		law.addDoc.cen.censubtabcount ++ ;
		law.addDoc.cen.cenactivesubtabcount ++;
		
		law.addDoc.cen.censubtabs.find(".ui-tabs-nav").append(li);
		law.addDoc.cen.censubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		law.addDoc.cen.censubtabs.tabs("refresh");
		law.addDoc.cen.censubtabs.tabs({ active: law.addDoc.cen.cenactivesubtabcount});
	}
};

	// Close icon: removing the tab on click
	$("#censubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		law.addDoc.cen.cenactivesubtabcount--;
		law.addDoc.cen.censubtabs.tabs({ active: law.addDoc.cen.cenactivesubtabcount});
	});
// 執行名義 end
	
// 法院文 start
var courtDocsubtabcount = 0;
var courtDocactivesubtabcount = 0;
var courtDocsubtabs = $("#courtDocsubtabs").tabs();
	function addcourtDocsubtab() {
		courtDocsubtabcount ++ ;
		courtDocactivesubtabcount ++;
		
		var tabTitle = "執行名義";
		var tabId = "tabs-" + courtDocsubtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>"+
           	 	"<tr>"+
					"<td><label>共用案號</label></td>"+
					"<td><input id='iptcentitlementShareCaseId"+courtDocsubtabcount+"'></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>業主調件日</label></td>"+
					"<td><input id='iptcentitlementBankDate"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>*收文日期</label></td>"+
					"<td><input id='iptcentitlementreceivedDate"+courtDocsubtabcount+"' ></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>*文件類別</label></td>"+
					"<td><input id='iptcentitlementTypeOne"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>*文件項目</label></td>"+
					"<td><input id='iptcentitlementTypeTwo"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>*債權人</label></td>"+
					"<td><input id='iptcentitlementBankName"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>原債權人</label></td>"+
					"<td><input id='iptcentitlementOldBankName"+courtDocsubtabcount+"' ></input></td>"+
				"</tr>"+
					"<td><label>*法院年字案股</label></td>"+
					"<td><input id='iptcentitlementCourtYearCourt"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>年度</label></td>"+
					"<td><input id='iptcentitlementCourtYearYear"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>字</label></td>"+
					"<td><input id='iptcentitlementCourtYearTxt"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>股別</label></td>"+
					"<td><input id='iptcentitlementCourtYearShare"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>案號</label></td>"+
					"<td><input id='iptcentitlementCourtYearCaseId"+courtDocsubtabcount+"' ></input></td>"+
				"<tr>"+
					"<td><label>*發文日期</label></td>"+
					"<td><input id='iptcentitlementSendDate"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>*最近執行日期</label></td>"+
					"<td><input id='iptcentitlementNewSendDate"+courtDocsubtabcount+"' ></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>備註</label></td>"+
					"<td><input id='iptcentitlementRemark"+courtDocsubtabcount+"'></input></td>"+
				"</tr>"+
           	" </table>";
		
		courtDocsubtabs.find(".ui-tabs-nav").append(li);
		courtDocsubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		courtDocsubtabs.tabs("refresh");
		courtDocsubtabs.tabs({ active: courtDocactivesubtabcount});
	}
	
	// Close icon: removing the tab on click
	courtDocsubtabs.on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		courtDocactivesubtabcount--;
		courtDocsubtabs.tabs({ active: courtDocactivesubtabcount});
	});
// 法院文 end
	
// 本票 start
var cashierChecksubtabcount = 0;
var cashierCheckactivesubtabcount = 0;
var cashierChecksubtabs = $("#cashierChecksubtabs").tabs();
	function addcashierChecksubtab() {
		cashierChecksubtabcount ++ ;
		cashierCheckactivesubtabcount ++;
		
		var tabTitle = "本票";
		var tabId = "tabs-" + cashierChecksubtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptcashierCheckReceivedDate" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptcashierCheckBankDate" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><input id='iptcashierCheckDocStatus" + cashierChecksubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><input id='iptcashierCheckTypeOne" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><input id='iptcashierCheckTypeTwo" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>債權人</label></td>" +
					"<td><input id='iptcashierCheckBankName" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><input id='iptcashierCheckOldBankName" + cashierChecksubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>相對人</label></td>" +
					"<td><input id='iptcashierCheckRelationPerson" + cashierChecksubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>本票發票日</label></td>" +
					"<td><input id='iptcashierCheckStartDate" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>本票金額</label></td>" +
					"<td><input id='iptcashierCheckAmount" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>本票到期日</label></td>" +
					"<td><input id='iptcashierCheckEndDate" + cashierChecksubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptcashierCheckRemark" + cashierChecksubtabcount + "'></input></td>" +
				"</tr>" +
           	 "</table>";
		
		cashierChecksubtabs.find(".ui-tabs-nav").append(li);
		cashierChecksubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		cashierChecksubtabs.tabs("refresh");
		cashierChecksubtabs.tabs({ active: cashierCheckactivesubtabcount});
	}
	
	// Close icon: removing the tab on click
	cashierChecksubtabs.on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		cashierCheckactivesubtabcount--;
		cashierChecksubtabs.tabs({ active: cashierCheckactivesubtabcount});
	});
// 本票 end
	
// 債讓 start
var debtssubtabcount = 0;
var debtsactivesubtabcount = 0;
var debtssubtabs = $("#debtssubtabs").tabs();
	function adddebtssubtab() {
		debtssubtabcount ++ ;
		debtsactivesubtabcount ++;
		
		var tabTitle = "債讓";
		var tabId = "tabs-" + debtssubtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptdebtsReceivedDate" + debtssubtabcount + "'></input></td>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptdebtsBankDate" + debtssubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><input id='iptdebtsDocStatus" + debtssubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><input id='iptdebtsTypeOne" + debtssubtabcount + "'></input></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><input id='iptdebtsTypeTwo" + debtssubtabcount + "'></input></td>" +
					"<td><label>債權人</label></td>" +
					"<td><input id='iptdebtsBankName" + debtssubtabcount + "'></input></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><input id='iptdebtsOldBankName" + debtssubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>相對人</label></td>" +
					"<td><input id='iptdebtsRelationPerson" + debtssubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>法院年字案股</label></td>" +
					"<td><input id='iptdebtsCourtYearCourt" + debtssubtabcount + "'></input></td>" +
					"<td><label>年度</label></td>" +
					"<td><input id='iptdebtsCourtYearYear" + debtssubtabcount + "'></input></td>" +
					"<td><label>字</label></td>" +
					"<td><input id='iptdebtsCourtYearTxt" + debtssubtabcount + "'></input></td>" +
					"<td><label>股別</label></td>" +
					"<td><input id='iptdebtsCourtYearShare" + debtssubtabcount + "'></input></td>" +
					"<td><label>案號</label></td>" +
					"<td><input id='iptdebtsCourtYearCaseId" + debtssubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>債讓日</label></td>" +
					"<td><input id='iptdebtsDate" + debtssubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptdebtsRemark" + debtssubtabcount + "'></input></td>" +
				"</tr>" +
           	 "</table>";
		
		debtssubtabs.find(".ui-tabs-nav").append(li);
		debtssubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		debtssubtabs.tabs("refresh");
		debtssubtabs.tabs({ active: debtsactivesubtabcount});
	}
	
	// Close icon: removing the tab on click
	debtssubtabs.on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		debtsactivesubtabcount--;
		debtssubtabs.tabs({ active: debtsactivesubtabcount});
	});
// 債讓 end

// 債權文件 start
var claimsDocsubtabcount = 0;
var claimsDocactivesubtabcount = 0;
var claimsDocsubtabs = $("#claimsDocsubtabs").tabs();
	function addclaimsDocsubtab() {
		claimsDocsubtabcount ++ ;
		claimsDocactivesubtabcount ++;
		
		var tabTitle = "債權文件";
		var tabId = "tabs-" + claimsDocsubtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptclaimsDocReceivedDate" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptclaimsDocBankDate" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><input id='iptclaimsDocDocStatus" + claimsDocsubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><input id='iptclaimsDocTypeOne" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><input id='iptclaimsDocTypeTwo" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>債權人</label></td>" +
					"<td><input id='iptclaimsDocBankName" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><input id='iptclaimsDocOldBankName" + claimsDocsubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>相對人</label></td>" +
					"<td><input id='iptclaimsDocrelationPerson" + claimsDocsubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>額度</label></td>" +
					"<td><input id='iptclaimsDocQuota" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>利率</label></td>" +
					"<td><input id='iptclaimsDocInterestRate" + claimsDocsubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptclaimsDocRemark" + claimsDocsubtabcount + "'></input></td>" +
				"</tr>" +
           	 "</table>";
		
		claimsDocsubtabs.find(".ui-tabs-nav").append(li);
		claimsDocsubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		claimsDocsubtabs.tabs("refresh");
		claimsDocsubtabs.tabs({ active: claimsDocactivesubtabcount});
	}
	
	// Close icon: removing the tab on click
	claimsDocsubtabs.on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		claimsDocactivesubtabcount--;
		claimsDocsubtabs.tabs({ active: claimsDocactivesubtabcount});
	});
// 債權文件 end	
	
// 卷宗 start
var filesubtabcount = 0;
var fileactivesubtabcount = 0;
var filesubtabs = $("#filesubtabs").tabs();
	function addfilesubtab() {
		filesubtabcount ++ ;
		fileactivesubtabcount ++;
		
		var tabTitle = "卷宗";
		var tabId = "tabs-" + filesubtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptfileReceivedDate" + filesubtabcount + "'></input></td>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptfileBankDate" + filesubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><input id='iptfileDocStatus" + filesubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><input id='iptfileTypeOne" + filesubtabcount + "'></input></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><input id='iptfileTypeTwo" + filesubtabcount + "'></input></td>" +
					"<td><label>債權人</label></td>" +
					"<td><input id='iptfileBankName" + filesubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>份數</label></td>" +
					"<td><input id='iptfileNums" + filesubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptfileRemark" + "'></input></td>" +
				"</tr>" +
           	 "</table>";
		
		filesubtabs.find(".ui-tabs-nav").append(li);
		filesubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		filesubtabs.tabs("refresh");
		filesubtabs.tabs({ active: fileactivesubtabcount});
	}
	
	// Close icon: removing the tab on click
	filesubtabs.on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		fileactivesubtabcount--;
		filesubtabs.tabs({ active: fileactivesubtabcount});
	});
// 卷宗 end	
	
$(function() {
	
	// ===== function start =====
	
	function saveaddDoc(){
		// 儲存(其他)
//		"<table>" +
//           	 	"<tr>" +
//					"<td><label>收文日期</label></td>" +
//					"<td><input id='iptotherReceivedDate" + othersubtabcount + "'></input></td>" +
//					"<td><label>業主調件日</label></td>" +
//					"<td><input id='iptotherBankDate" + othersubtabcount + "'></input></td>" +
//					"<td><label>文件狀態</label></td>" +
//					"<td><select id='iptotherDocStatus" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
//				"</tr>" +
//				"<tr>" +
//					"<td><label>文件類別</label></td>" +
//					"<td><select id='iptotherTypeOne" + othersubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
//					"<td><label>文件項目</label></td>" +
//					"<td><select id='iptotherTypeTwo" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
//					"<td><label>債權人</label></td>" +
//					"<td><select id='iptotherBankName" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
//				"</tr>" +
//				"<tr>" +
//					"<td><label>收據種類</label></td>" +
//					"<td><input id='iptotherReceiptType" + othersubtabcount + "' ></input></td>" +
//					"<td><label>收據金額</label></td>" +
//					"<td><input id='iptotherReceiptAmount" + othersubtabcount + "' ></input></td>" +
//					"<td><label>法院製發日</label></td>" +
//					"<td><input id='iptotherCourtDate" + othersubtabcount + "' ></input></td>" +
//				"</tr>" +
//				"<tr>" +
//					"<td><label>備註</label></td>" +
//					"<td><input id='iptotherRemark" + othersubtabcount + "' ></input></td>" +
//				"</tr>" +
//           	 "</table>"
		var length = law.addDoc.other.othersubtabcount,
			i = 0,
			other = {},
			returnOther = "";
			
			var topItem = {
				'receivedDate' : $("#iptotherReceivedDate").val(),
				'bankDate' : $("#iptotherBankDate").val(),
				'docStatus' : $("#iptotherDocStatus").find('option:selected').val(),
				'typeOne' : $("#iptotherTypeOne").find('option:selected').val(),
				'typeTwo' : $("#iptotherTypeTwo").find('option:selected').val(),
				'bankName' : $("#iptotherBankName").find('option:selected').val(),
				'receiptType' : $("#iptotherReceiptType").val(),
				'receiptAmount' : $("#iptotherReceiptAmount").val(),
				'courtDate' : $("#iptotherCourtDate").val(),
				'remark' : $("#iptotherRemark").val()
			};
			
			other.subItems = [];
			other.subItems.push(topItem);
		for ( ; i < length; i++ ) {
				var subItems = {
					'receivedDate' : $("#iptotherReceivedDate" + i ).val(),
					'bankDate' : $("#iptotherBankDate" + i ).val(),
					'docStatus' : $("#iptotherDocStatus" + i ).find('option:selected').val(),
					'typeOne' : $("#iptotherTypeOne" + i ).find('option:selected').val(),
					'typeTwo' : $("#iptotherTypeTwo" + i ).find('option:selected').val(),
					'bankName' : $("#iptotherBankName" + i ).find('option:selected').val(),
					'receiptType' : $("#iptotherReceiptType" + i ).val(),
					'receiptAmount' : $("#iptotherReceiptAmount" + i ).val(),
					'courtDate' : $("#iptotherCourtDate" + i ).val(),
					'remark' : $("#iptotherRemark" + i ).val()
			};
			other.subItems.push(subItems);
		}
		
		console.log(other);
		returnOther = JSON.stringify(other.subItems);
		
		$.ajax({
					url : '../pages/doc/documents/docAction!saveaddDoc.action',
					data : {
						caseId : law.addDoc.caseId,
						returnOther : returnOther,
						docInfoId : law.addDoc.docInfoId
						},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						if (response.success) {
							alert(response.msg);
						} else {
							alert(response.msg);
						}
					},
					error : function(xhr, ajaxOptions, thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
	}
	// ===== function end =====

	// ===== 功能列按鈕 start =====
	// 儲存按鈕
	$("#btnsaveaddDoc").button().on("click",function() {
		saveaddDoc();
	});
	
	// ===== 功能列按鈕 end =====
	
});