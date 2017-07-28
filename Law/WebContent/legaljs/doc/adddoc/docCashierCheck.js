/**
 * Add By Jia 2017-06-30 docCashierCheck.js 實作addDoc.jsp 本票的部分 
 */
 
// 本票 start
law.addDoc.cashierCheck = {
	cashierChecksubtabcount : 0,
	cashierCheckactivesubtabcount : 0,
	cashierChecksubtabs : $("#cashierChecksubtabs").tabs(),
	cashierCheckexistsubtabs : [],
	cashierCheckRelaNum : [],
	// 新增相對人
	addcashierCheckRelaTd : function(num){
		var cashierCheck = law.addDoc.cashierCheck;
		var cashierChecksubtabcount = cashierCheck.cashierChecksubtabcount;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(cashierCheck.cashierCheckRelaNum[num])){
			cashierCheck.cashierCheckRelaNum[num] = 0;
		}
		
		law.addDoc.cashierCheck.cashierCheckRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcashierCheckRelationPerson" + displaynum + "_" + cashierCheck.cashierCheckRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#iptcashierCheckRelationPersonTr" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcashierCheckRelationPerson" + displaynum + "_" + cashierCheck.cashierCheckRelaNum[num], law.addDoc.rela);
	},
	addcashierChecksubtab : function(){
		var cashierCheck = law.addDoc.cashierCheck;
		var cashierChecksubtabcount = cashierCheck.cashierChecksubtabcount;
		var cashierCheckactivesubtabcount = cashierCheck.cashierCheckactivesubtabcount;
		var cashierChecksubtabs = cashierCheck.cashierChecksubtabs;
		var tabTitle = "本票";
		var tabId = "tabs-" + cashierChecksubtabcount;
		var tabTemplate = "<li id='licashierChecktab_" + cashierChecksubtabcount + "'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));
		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptcashierCheckBankDate" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptcashierCheckReceivedDate" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><select id='iptcashierCheckDocStatus" + cashierChecksubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><select id='iptcashierCheckTypeOne" + cashierChecksubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><select id='iptcashierCheckTypeTwo" + cashierChecksubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptcashierCheckBankName" + cashierChecksubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><select id='iptcashierCheckOldBankName" + cashierChecksubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr id='iptcashierCheckRelationPersonTr" + cashierChecksubtabcount + "'>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcashierCheckRelationPerson" + cashierChecksubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.cashierCheck.addcashierCheckRelaTd(" + (cashierChecksubtabcount + 1) + ")'></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
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
           	 
       	 var docArray,seloption;
		
		cashierCheck.cashierChecksubtabcount ++ ;
		cashierCheck.cashierCheckactivesubtabcount ++;
		
		cashierCheck.cashierChecksubtabs.find(".ui-tabs-nav").append(li);
		cashierCheck.cashierChecksubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		cashierCheck.cashierChecksubtabs.tabs("refresh");
		cashierCheck.cashierChecksubtabs.tabs({ active:cashierCheck.cashierCheckactivesubtabcount});
           	 
		cashierCheck.cashierCheckexistsubtabs.push(true);
		// 開始初始化
		
		//將日期欄位格式化
	 	law.common.formatInputItemToDate("#iptcashierCheckReceivedDate" + cashierChecksubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcashierCheckBankDate" + cashierChecksubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcashierCheckStartDate" + cashierChecksubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcashierCheckEndDate" + cashierChecksubtabcount, "yy-mm-dd");
	   
		law.common.selectOption("#iptcashierCheckDocStatus" + cashierChecksubtabcount, cashierCheck.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
		law.common.selectOption("#iptcashierCheckTypeOne" + cashierChecksubtabcount, cashierCheck.TypeOne, "8aa2e72a5c812434015c812fc56a0007");
		law.common.selectOption("#iptcashierCheckTypeTwo" + cashierChecksubtabcount, cashierCheck.TypeTwo);
		law.common.selectOption("#iptcashierCheckBankName" + cashierChecksubtabcount, cashierCheck.BankName);
		law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.OldBankName);
		law.common.selectRelaOption("#iptcashierCheckRelationPerson" + cashierChecksubtabcount + "_0", law.addDoc.rela);
		//設定收文日期為當日
		$("#iptcashierCheckReceivedDate" + cashierChecksubtabcount).val(cashierCheck.ReceivedDate);
		
		//設定相對人 = 0
		law.addDoc.cashierCheck.cashierCheckRelaNum[(cashierChecksubtabcount+1)] = 0;
	},
	// 初始化
	initcashierChecksubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, BankName, OldBankName){
		var initsub = law.addDoc.cashierCheck;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.BankName = BankName;
		initsub.OldBankName = OldBankName;
	},
	// 將所有頁籤內容帶出
	returnAllsubtabJson : function(){
		
		var length = law.addDoc.cashierCheck.cashierChecksubtabcount,
			i = 0,j = 0,displayNum = 0,
			cashierCheck = {},
			returncashierCheck = "",
			returncashierCheckRelas_0 = [],
			relainfo = {};
			
		for( ; i <= law.addDoc.cashierCheck.cashierCheckRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcashierCheckRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcashierCheckRelationPerson_" + i).find('option:selected').text()
				};
			returncashierCheckRelas_0.push(relainfo);
		}
		
		var topItem = {
			'receivedDate' : $("#iptcashierCheckReceivedDate").val(),
			'bankDate' : $("#iptcashierCheckBankDate").val(),
			'docStatus' : $("#iptcashierCheckDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptcashierCheckTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptcashierCheckTypeTwo").find('option:selected').val(),
			'bankName' : $("#iptcashierCheckBankName").find('option:selected').val(),
			'oldBankName' : $("#iptcashierCheckOldBankName").find('option:selected').val(),
			'cashiercheckRelationPerson' : returncashierCheckRelas_0,
			'relationPerson' : $("#iptcashierCheckRelationPerson_0").find('option:selected').val(),
			'startDate' : $("#iptcashierCheckStartDate").val(),
			'amount' : $("#iptcashierCheckAmount").val(),
			'endDate' : $("#iptcashierCheckEndDate").val(),
			'remark' : $("#iptcashierCheckRemark").val()
		};
			
		cashierCheck.subItems = [];
		cashierCheck.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			returncashierCheckRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.cashierCheck.cashierCheckRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcashierCheckRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcashierCheckRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncashierCheckRelas_0.push(relainfo);
			}
			
				var subItems = {
					'receivedDate' : $("#iptcashierCheckReceivedDate" + i ).val(),
					'bankDate' : $("#iptcashierCheckBankDate" + i ).val(),
					'docStatus' : $("#iptcashierCheckDocStatus" + i ).find('option:selected').val(),
					'typeOne' : $("#iptcashierCheckTypeOne" + i ).find('option:selected').val(),
					'typeTwo' : $("#iptcashierCheckTypeTwo" + i ).find('option:selected').val(),
					'bankName' : $("#iptcashierCheckBankName" + i ).find('option:selected').val(),
					'oldBankName' : $("#iptcashierCheckOldBankName" + i ).find('option:selected').val(),
					'cashiercheckRelationPerson' : returncashierCheckRelas_0,
					'relationPerson' : $("#iptcashierCheckRelationPerson_0").find('option:selected').val(),
					'startDate' : $("#iptcashierCheckStartDate" + i ).val(),
					'amount' : $("#iptcashierCheckAmount" + i ).val(),
					'endDate' : $("#iptcashierCheckEndDate" + i ).val(),
					'remark' : $("#iptcashierCheckRemark" + i ).val()
			};
			cashierCheck.subItems.push(subItems);
		}

		returncashierCheck = JSON.stringify(cashierCheck.subItems);
		return returncashierCheck;
	}
}
	
	// Close icon: removing the tab on click
	$("#cashierChecksubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var cashierCheck = law.addDoc.cashierCheck;
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		var liid = $(this).closest("li")["0"].id;
		cashierCheck.cashierCheckexistsubtabs[liid.substring(liid.indexOf("_") + 1)] = false;
		cashierCheck.cashierCheckactivesubtabcount--;
		cashierCheck.cashierChecksubtabs.tabs({ active: cashierCheck.cashierCheckactivesubtabcount});
	});
	
 (function(){
	//將日期欄位格式化
 	law.common.formatInputItemToDate("#iptcashierCheckReceivedDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcashierCheckBankDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcashierCheckStartDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcashierCheckEndDate", "yy-mm-dd");
 })();
// 債讓 end	
	