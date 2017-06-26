/**
 * Add By Jia 2017-06-22 docClaimsDoc.js 實作addDoc.jsp 債權文件的部分 
 */
 
// 債權文件 start
law.addDoc.claimsDoc = {
	claimsDocsubtabcount : 0,
	claimsDocactivesubtabcount : 0,
	claimsDocsubtabs : $("#claimsDocsubtabs").tabs(),
	claimsDocexistsubtabs : [0,0,0,0],
	claimsDocRelaNum : [],
	// 新增相對人
	addclaimsRelaTd : function(num){
		var claimsDoc = law.addDoc.claimsDoc;
		var claimsDocsubtabcount = claimsDoc.claimsDocsubtabcount;
		var tdString = 	"<td><label>相對人</label></td>" +
					"<td><select id='iptclaimsDocRelationPerson-" + num + "_" + claimsDoc.claimsDocRelaNum[0] + "'><option value=''>請選擇</option></select></td>";
					
		if(isNaN(claimsDoc.claimsDocRelaNum[claimsDocsubtabcount])){
			claimsDoc.claimsDocRelaNum.push(0);
		}
		law.addDoc.claimsDoc.claimsDocRelaNum[0] ++ ;
		$("#iptclaimsDocRelationPersonTr").append(tdString);
	},
	addclaimsDocsubtab : function(){
		var claimsDoc = law.addDoc.claimsDoc;
		var claimsDocsubtabcount = claimsDoc.claimsDocsubtabcount;
		var claimsDocactivesubtabcount = claimsDoc.claimsDocactivesubtabcount;
		var claimsDocsubtabs = claimsDoc.claimsDocsubtabs;
		var tabTitle = "其它";
		var tabId = "tabs-" + claimsDocsubtabcount;
		var tabTemplate = "<li id='liothertab_" + claimsDocsubtabcount + "'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));
		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptotherReceivedDate" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptotherBankDate" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><select id='iptotherDocStatus" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><select id='iptotherTypeOne" + claimsDocsubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><select id='iptotherTypeTwo" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptotherBankName" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>收據種類</label></td>" +
					"<td><input id='iptotherReceiptType" + claimsDocsubtabcount + "' ></input></td>" +
					"<td><label>收據金額</label></td>" +
					"<td><input id='iptotherReceiptAmount" + claimsDocsubtabcount + "' ></input></td>" +
					"<td><label>法院製發日</label></td>" +
					"<td><input id='iptotherCourtDate" + claimsDocsubtabcount + "' ></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptotherRemark" + claimsDocsubtabcount + "' ></input></td>" +
				"</tr>" +
           	 "</table>";
       	 var docArray,seloption;
		
		claimsDoc.claimsDocsubtabcount ++ ;
		claimsDoc.claimsDocactivesubtabcount ++;
		
		claimsDoc.claimsDocsubtabs.find(".ui-tabs-nav").append(li);
		claimsDoc.claimsDocsubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		claimsDoc.claimsDocsubtabs.tabs("refresh");
		claimsDoc.claimsDocsubtabs.tabs({ active:claimsDoc.claimsDocactivesubtabcount});
           	 
		claimsDoc.claimsDocexistsubtabs.push(true);
		// 開始初始化
		
		//將日期欄位格式化
		$( "#iptotherReceivedDate" + othersubtabcount ).datepicker();
	    $( "#iptotherReceivedDate" + othersubtabcount ).datepicker( "option", "dateFormat", "yy-mm-dd" );
		$( "#iptotherBankDate" + othersubtabcount ).datepicker();
	    $( "#iptotherBankDate" + othersubtabcount ).datepicker( "option", "dateFormat", "yy-mm-dd" );
		$( "#iptotherCourtDate" + othersubtabcount ).datepicker();
	    $( "#iptotherCourtDate" + othersubtabcount ).datepicker( "option", "dateFormat", "yy-mm-dd" );
	   
		law.common.selectOption("#iptotherDocStatus" + othersubtabcount, other.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
		law.common.selectOption("#iptotherTypeOne" + othersubtabcount, other.TypeOne, "8aa2e72a5c812434015c81307418000a");
		law.common.selectOption("#iptotherTypeTwo" + othersubtabcount, other.TypeTwo);
		law.common.selectOption("#iptotherBankName" + othersubtabcount, other.BankName);
		
		//設定收文日期為當日
		$("#iptotherReceivedDate" + othersubtabcount).val(other.ReceivedDate);
			
	},
	// 初始化
	initclaimsDocsubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, BankName){
		var initsub = law.addDoc.claimsDoc;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.BankName = BankName;
	},
	// 將所有頁籤內容帶出
	returnAllsubtabJson : function(){
		
		var length = law.addDoc.claimsDoc.claimsDocsubtabcount,
			i = 0,
			claimsDoc = {},
			returnClaimsDoc = "";
			
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
			
		claimsDoc.subItems = [];
		claimsDoc.subItems.push(topItem);
			
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
			claimsDoc.subItems.push(subItems);
		}

		returnClaimsDoc = JSON.stringify(claimsDoc.subItems);
		return returnClaimsDoc;
	}
}
	
	// Close icon: removing the tab on click
	$("#othersubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var other = law.addDoc.claimsDoc;
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		var liid = $(this).closest("li")["0"].id;
		claimsDoc.claimsDocexistsubtabs[liid.substring(liid.indexOf("_") + 1)] = false;
		claimsDoc.claimsDocactivesubtabcount--;
		claimsDoc.claimsDocsubtabs.tabs({ active: claimsDoc.claimsDocactivesubtabcount});
	});
	
 (function(){
	//將日期欄位格式化
	$( "#iptotherReceivedDate" ).datepicker();
    $( "#iptotherReceivedDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
	$( "#iptotherBankDate" ).datepicker();
    $( "#iptotherBankDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
	$( "#iptotherCourtDate" ).datepicker();
    $( "#iptotherCourtDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
 })();
// 債權文件 end	
	