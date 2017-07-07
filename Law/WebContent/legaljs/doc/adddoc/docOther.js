/**
 * Add By Jia 2017-06-22 docOther.js 實作addDoc.jsp 其他的部分 
 */
 
// 其它 start
law.addDoc.other = {
	othersubtabcount : 0,
	otheractivesubtabcount : 0,
	othersubtabs : $("#othersubtabs").tabs(),
	otherexistsubtabs : [],
	addothersubtab : function(){
		var other = law.addDoc.other;
		var othersubtabcount = other.othersubtabcount;
		var otheractivesubtabcount = other.otheractivesubtabcount;
		var othersubtabs = other.othersubtabs;
		var tabTitle = "其它";
		var tabId = "tabs-" + othersubtabcount;
		var tabTemplate = "<li id='liothertab_" + othersubtabcount + "'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));
		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptotherReceivedDate" + othersubtabcount + "'></input></td>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptotherBankDate" + othersubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><select id='iptotherDocStatus" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><select id='iptotherTypeOne" + othersubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><select id='iptotherTypeTwo" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptotherBankName" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>收據種類</label></td>" +
					"<td><input id='iptotherReceiptType" + othersubtabcount + "' ></input></td>" +
					"<td><label>收據金額</label></td>" +
					"<td><input id='iptotherReceiptAmount" + othersubtabcount + "' ></input></td>" +
					"<td><label>法院製發日</label></td>" +
					"<td><input id='iptotherCourtDate" + othersubtabcount + "' ></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptotherRemark" + othersubtabcount + "' ></input></td>" +
				"</tr>" +
           	 "</table>";
       	 var docArray,seloption;
		
		other.othersubtabcount ++ ;
		other.otheractivesubtabcount ++;
		
		other.othersubtabs.find(".ui-tabs-nav").append(li);
		other.othersubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		other.othersubtabs.tabs("refresh");
		other.othersubtabs.tabs({ active:other.otheractivesubtabcount});
           	 
		other.otherexistsubtabs.push(true);
		// 開始初始化
		
		//將日期欄位格式化
		law.common.formatInputItemToDate( "#iptotherReceivedDate" + othersubtabcount , "yy-mm-dd");
		law.common.formatInputItemToDate( "#iptotherBankDate" + othersubtabcount , "yy-mm-dd");
		law.common.formatInputItemToDate( "#iptotherCourtDate" + othersubtabcount , "yy-mm-dd");
	   
		law.common.selectOption("#iptotherDocStatus" + othersubtabcount, other.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
		law.common.selectOption("#iptotherTypeOne" + othersubtabcount, other.TypeOne, "8aa2e72a5c812434015c81307418000a");
		law.common.selectOption("#iptotherTypeTwo" + othersubtabcount, other.TypeTwo);
		law.common.selectOption("#iptotherBankName" + othersubtabcount, other.BankName);
		
		//設定收文日期為當日
		$("#iptotherReceivedDate" + othersubtabcount).val(other.ReceivedDate);
			
	},
	// 初始化
	initothersubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, BankName){
		var initsub = law.addDoc.other;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.BankName = BankName;
	},
	// 將所有頁籤內容帶出
	returnAllsubtabJson : function(){
		
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

		returnOther = JSON.stringify(other.subItems);
		return returnOther;
	}
}
	
	// Close icon: removing the tab on click
	$("#othersubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var other = law.addDoc.other;
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		var liid = $(this).closest("li")["0"].id;
		other.otherexistsubtabs[liid.substring(liid.indexOf("_") + 1)] = false;
		other.otheractivesubtabcount--;
		other.othersubtabs.tabs({ active: other.otheractivesubtabcount});
	});
	
 (function(){
	//將日期欄位格式化
	law.common.formatInputItemToDate( "#iptotherReceivedDate", "yy-mm-dd");
	law.common.formatInputItemToDate( "#iptotherBankDate", "yy-mm-dd");
	law.common.formatInputItemToDate( "#iptotherCourtDate", "yy-mm-dd");
 })();
// 其它 end	
	