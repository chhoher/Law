/**
 * Add By Jia 2017-06-22 docClaimsDoc.js 實作addDoc.jsp 債權文件的部分 
 */
 
// 債權文件 start
law.addDoc.claimsDoc = {
	claimsDocsubtabcount : 0,
	claimsDocactivesubtabcount : 0,
	claimsDocsubtabs : $("#claimsDocsubtabs").tabs(),
	claimsDocexistsubtabs : [],
	claimsDocRelaNum : [],
	// 新增相對人
	addclaimsRelaTd : function(num){
		var claimsDoc = law.addDoc.claimsDoc;
		var claimsDocsubtabcount = claimsDoc.claimsDocsubtabcount;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(claimsDoc.claimsDocRelaNum[num])){
//			claimsDoc.claimsDocRelaNum.push(0);
			claimsDoc.claimsDocRelaNum[num] = 0;
		}
		
		law.addDoc.claimsDoc.claimsDocRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptclaimsDocRelationPerson" + displaynum + "_" + claimsDoc.claimsDocRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#iptclaimsDocRelationPersonTr" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptclaimsDocRelationPerson" + displaynum + "_" + claimsDoc.claimsDocRelaNum[num], law.addDoc.rela);
	},
	addclaimsDocsubtab : function(){
		var claimsDoc = law.addDoc.claimsDoc;
		var claimsDocsubtabcount = claimsDoc.claimsDocsubtabcount;
		var claimsDocactivesubtabcount = claimsDoc.claimsDocactivesubtabcount;
		var claimsDocsubtabs = claimsDoc.claimsDocsubtabs;
		var tabTitle = "債權文件";
		var tabId = "tabs-" + claimsDocsubtabcount;
		var tabTemplate = "<li id='liclaimsDoctab_" + claimsDocsubtabcount + "'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));
		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptclaimsDocBankDate" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptclaimsDocReceivedDate" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><select id='iptclaimsDocDocStatus" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><select id='iptclaimsDocTypeOne" + claimsDocsubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><select id='iptclaimsDocTypeTwo" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptclaimsDocBankName" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><select id='iptclaimsDocOldBankName" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr id='iptclaimsDocRelationPersonTr" + claimsDocsubtabcount + "'>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptclaimsDocRelationPerson" + claimsDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.claimsDoc.addclaimsRelaTd(" + (claimsDocsubtabcount + 1) + ")'></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
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
 		law.common.formatInputItemToDate("#iptclaimsDocReceivedDate" + claimsDocsubtabcount, "yy-mm-dd");
 		law.common.formatInputItemToDate("#iptclaimsDocBankDate" + claimsDocsubtabcount, "yy-mm-dd");
	   
		law.common.selectOption("#iptclaimsDocDocStatus" + claimsDocsubtabcount, claimsDoc.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
		law.common.selectOption("#iptclaimsDocTypeOne" + claimsDocsubtabcount, claimsDoc.TypeOne, "8aa2e72a5c812434015c812fa6890006");
		law.common.selectOption("#iptclaimsDocTypeTwo" + claimsDocsubtabcount, claimsDoc.TypeTwo);
		law.common.selectOption("#iptclaimsDocBankName" + claimsDocsubtabcount, claimsDoc.BankName);
		law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.OldBankName);
		law.common.selectRelaOption("#iptclaimsDocRelationPerson" + claimsDocsubtabcount + "_0", law.addDoc.rela);
		//設定收文日期為當日
		$("#iptclaimsDocReceivedDate" + claimsDocsubtabcount).val(claimsDoc.ReceivedDate);
		
		//設定相對人 = 0
		law.addDoc.claimsDoc.claimsDocRelaNum[(claimsDocsubtabcount+1)] = 0;
	},
	// 初始化
	initclaimsDocsubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, BankName, OldBankName){
		var initsub = law.addDoc.claimsDoc;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.BankName = BankName;
		initsub.OldBankName = OldBankName;
	},
	// 將所有頁籤內容帶出
	returnAllsubtabJson : function(){
		
		var length = law.addDoc.claimsDoc.claimsDocsubtabcount,
			i = 0,j = 0,displayNum = 0,
			claimsDoc = {},
			returnClaimsDoc = "",
			returnClaimsDocRelas_0 = [],
			relainfo = {};
			
		for( ; i <= law.addDoc.claimsDoc.claimsDocRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptclaimsDocRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptclaimsDocRelationPerson_" + i).find('option:selected').text()
				};
			returnClaimsDocRelas_0.push(relainfo);
		}
			
		var topItem = {
			'receivedDate' : $("#iptclaimsDocReceivedDate").val(),
			'bankDate' : $("#iptclaimsDocBankDate").val(),
			'docStatus' : $("#iptclaimsDocDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptclaimsDocTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptclaimsDocTypeTwo").find('option:selected').val(),
			'bankName' : $("#iptclaimsDocBankName").find('option:selected').val(),
			'oldBankName' : $("#iptclaimsDocOldBankName").find('option:selected').val(),
			'claimsRelationPerson' : returnClaimsDocRelas_0,
			'relationPerson' : $("#iptclaimsDocRelationPerson_0").find('option:selected').val(),
			'quota' : $("#iptclaimsDocQuota").val(),
			'interestRate' : $("#iptclaimsDocInterestRate").val(),
			'remark' : $("#iptclaimsDocRemark").val()
		};
			
		claimsDoc.subItems = [];
		claimsDoc.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			returnClaimsDocRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.claimsDoc.claimsDocRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptclaimsDocRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptclaimsDocRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returnClaimsDocRelas_0.push(relainfo);
			}
			
				var subItems = {
					'receivedDate' : $("#iptclaimsDocReceivedDate" + i ).val(),
					'bankDate' : $("#iptclaimsDocBankDate" + i ).val(),
					'docStatus' : $("#iptclaimsDocDocStatus" + i ).find('option:selected').val(),
					'typeOne' : $("#iptclaimsDocTypeOne" + i ).find('option:selected').val(),
					'typeTwo' : $("#iptclaimsDocTypeTwo" + i ).find('option:selected').val(),
					'bankName' : $("#iptclaimsDocBankName" + i ).find('option:selected').val(),
					'oldBankName' : $("#iptclaimsDocOldBankName" + i ).find('option:selected').val(),
					'claimsRelationPerson' : returnClaimsDocRelas_0,
					'relationPerson' : $("#iptclaimsDocRelationPerson_0").find('option:selected').val(),
					'quota' : $("#iptclaimsDocQuota" + i ).val(),
					'interestRate' : $("#iptclaimsDocInterestRate" + i ).val(),
					'remark' : $("#iptclaimsDocRemark" + i ).val()
			};
			claimsDoc.subItems.push(subItems);
		}

		returnClaimsDoc = JSON.stringify(claimsDoc.subItems);
		return returnClaimsDoc;
	}
}
	
	// Close icon: removing the tab on click
	$("#claimsDocsubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var claimsDoc = law.addDoc.claimsDoc;
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
 		law.common.formatInputItemToDate("#iptclaimsDocReceivedDate", "yy-mm-dd");
 		law.common.formatInputItemToDate("#iptclaimsDocBankDate", "yy-mm-dd");
 })();
// 債權文件 end	
	