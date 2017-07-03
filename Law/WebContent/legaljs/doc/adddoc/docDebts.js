/**
 * Add By Jia 2017-06-30 docDebts.js 實作addDoc.jsp 債讓的部分 
 */
 
// 債讓 start
law.addDoc.debts = {
	debtssubtabcount : 0,
	debtsactivesubtabcount : 0,
	debtssubtabs : $("#debtssubtabs").tabs(),
	debtsexistsubtabs : [],
	debtsRelaNum : [],
	// 新增相對人
	adddebtsRelaTd : function(num){
		var debts = law.addDoc.debts;
		var debtssubtabcount = debts.debtssubtabcount;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(debts.debtsRelaNum[num])){
			debts.debtsRelaNum[num] = 0;
		}
		
		law.addDoc.debts.debtsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptdebtsRelationPerson" + displaynum + "_" + debts.debtsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#iptdebtsRelationPersonTr" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptdebtsRelationPerson" + displaynum + "_" + debts.debtsRelaNum[num], law.addDoc.rela);
	},
	adddebtssubtab : function(){
		var debts = law.addDoc.debts;
		var debtssubtabcount = debts.debtssubtabcount;
		var debtsactivesubtabcount = debts.debtsactivesubtabcount;
		var debtssubtabs = debts.debtssubtabs;
		var tabTitle = "債讓";
		var tabId = "tabs-" + debtssubtabcount;
		var tabTemplate = "<li id='lidebtstab_" + debtssubtabcount + "'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));
		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptdebtsReceivedDate" + debtssubtabcount + "'></input></td>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptdebtsBankDate" + debtssubtabcount + "' ></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><select id='iptdebtsDocStatus" + debtssubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><select id='iptdebtsTypeOne" + debtssubtabcount + "' disabled ><option value=''>請選擇</option></select></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><select id='iptdebtsTypeTwo" + debtssubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptdebtsBankName" + debtssubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><select id='iptdebtsOldBankName" + debtssubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr id='iptdebtsRelationPersonTr" + debtssubtabcount + "'>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptdebtsRelationPerson" + debtssubtabcount +"_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.debts.adddebtsRelaTd(" + (debtssubtabcount + 1) + ")'></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr>" +
					"<td><label>法院年字案股</label></td>" +
					"<td><select id='iptdebtsCourtYearCourt" + debtssubtabcount + "'><option value=''>請選擇</option></select></td>" +
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
       	 var docArray,seloption;
		
		debts.debtssubtabcount ++ ;
		debts.debtsactivesubtabcount ++;
		
		debts.debtssubtabs.find(".ui-tabs-nav").append(li);
		debts.debtssubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		debts.debtssubtabs.tabs("refresh");
		debts.debtssubtabs.tabs({ active:debts.debtsactivesubtabcount});
           	 
		debts.debtsexistsubtabs.push(true);
		// 開始初始化
		
		//將日期欄位格式化
		$( "#iptdebtsReceivedDate" + debtssubtabcount ).datepicker();
	    $( "#iptdebtsReceivedDate" + debtssubtabcount ).datepicker( "option", "dateFormat", "yy-mm-dd" );
		$( "#iptdebtsBankDate" + debtssubtabcount ).datepicker();
	    $( "#iptdebtsBankDate" + debtssubtabcount ).datepicker( "option", "dateFormat", "yy-mm-dd" );
		$( "#iptdebtsDate" + debtssubtabcount ).datepicker();
	    $( "#iptdebtsDate" + debtssubtabcount ).datepicker( "option", "dateFormat", "yy-mm-dd" );
	   
		law.common.selectOption("#iptdebtsDocStatus" + debtssubtabcount, debts.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
		law.common.selectOption("#iptdebtsTypeOne" + debtssubtabcount, debts.TypeOne, "8aa2e72a5c812434015c81303cbf0008");
		law.common.selectOption("#iptdebtsTypeTwo" + debtssubtabcount, debts.TypeTwo);
		law.common.selectOption("#iptdebtsBankName" + debtssubtabcount, debts.BankName);
		law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.OldBankName);
		law.common.selectOption("#iptdebtsCourtYearCourt" + debtssubtabcount, debts.CourtYearCourt);
		law.common.selectRelaOption("#iptdebtsRelationPerson" + debtssubtabcount + "_0", law.addDoc.rela);
		//設定收文日期為當日
		$("#iptdebtsReceivedDate" + debtssubtabcount).val(debts.ReceivedDate);
		
		//設定相對人 = 0
		law.addDoc.debts.debtsRelaNum[(debtssubtabcount+1)] = 0;
	},
	// 初始化
	initdebtssubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, BankName, OldBankName, CourtYearCourt){
		var initsub = law.addDoc.debts;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.BankName = BankName;
		initsub.OldBankName = OldBankName;
		initsub.CourtYearCourt = CourtYearCourt;
	},
	// 將所有頁籤內容帶出
	returnAllsubtabJson : function(){
		
		var length = law.addDoc.debts.debtssubtabcount,
			i = 0,j = 0,displayNum = 0,
			debts = {},
			returndebts = "",
			returndebtsRelas_0 = [],
			relainfo = {};
			
		for( ; i <= law.addDoc.debts.debtsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptdebtsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptdebtsRelationPerson_" + i).find('option:selected').text()
				};
			returndebtsRelas_0.push(relainfo);
		}
			
		var topItem = {
			'receivedDate' : $("#iptdebtsReceivedDate").val(),
			'bankDate' : $("#iptdebtsBankDate").val(),
			'docStatus' : $("#iptdebtsDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptdebtsTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptdebtsTypeTwo").find('option:selected').val(),
			'bankName' : $("#iptdebtsBankName").find('option:selected').val(),
			'oldBankName' : $("#iptdebtsOldBankName").find('option:selected').val(),
			'debtsRelationPerson' : returndebtsRelas_0,
			'relationPerson' : $("#iptdebtsRelationPerson_0").find('option:selected').val(),
			'courtYearCourt' : $("#iptdebtsCourtYearCourt").find('option:selected').val(),
			'courtYearYear' : $("#iptdebtsCourtYearYear").val(),
			'courtYearTxt' : $("#iptdebtsCourtYearTxt").val(),
			'courtYearShare' : $("#iptdebtsCourtYearShare").val(),
			'courtYearCaseId' : $("#iptdebtsCourtYearCaseId").val(),
			'debtsDate' : $("#iptdebtsDate").val(),
			'remark' : $("#iptdebtsRemark").val()
		};
			
		debts.subItems = [];
		debts.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			returndebtsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.debts.debtsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptdebtsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptdebtsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returndebtsRelas_0.push(relainfo);
			}
			
				var subItems = {
					'receivedDate' : $("#iptdebtsReceivedDate" + i ).val(),
					'bankDate' : $("#iptdebtsBankDate" + i ).val(),
					'docStatus' : $("#iptdebtsDocStatus" + i ).find('option:selected').val(),
					'typeOne' : $("#iptdebtsTypeOne" + i ).find('option:selected').val(),
					'typeTwo' : $("#iptdebtsTypeTwo" + i ).find('option:selected').val(),
					'bankName' : $("#iptdebtsBankName" + i ).find('option:selected').val(),
					'oldBankName' : $("#iptdebtsOldBankName" + i ).find('option:selected').val(),
					'debtsRelationPerson' : returndebtsRelas_0,
					'relationPerson' : $("#iptdebtsRelationPerson_0").find('option:selected').val(),
					'courtYearCourt' : $("#iptdebtsCourtYearCourt" + i ).find('option:selected').val(),
					'courtYearYear' : $("#iptdebtsCourtYearYear" + i ).val(),
					'courtYearTxt' : $("#iptdebtsCourtYearTxt" + i ).val(),
					'courtYearShare' : $("#iptdebtsCourtYearShare" + i ).val(),
					'courtYearCaseId' : $("#iptdebtsCourtYearCaseId" + i ).val(),
					'debtsDate' : $("#iptdebtsDate" + i ).val(),
					'remark' : $("#iptdebtsRemark" + i ).val()
			};
			debts.subItems.push(subItems);
		}

		returndebts = JSON.stringify(debts.subItems);
		return returndebts;
	}
}
	
	// Close icon: removing the tab on click
	$("#debtssubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var debts = law.addDoc.debts;
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		var liid = $(this).closest("li")["0"].id;
		debts.debtsexistsubtabs[liid.substring(liid.indexOf("_") + 1)] = false;
		debts.debtsactivesubtabcount--;
		debts.debtssubtabs.tabs({ active: debts.debtsactivesubtabcount});
	});
	
 (function(){
	//將日期欄位格式化
	$( "#iptdebtsReceivedDate" ).datepicker();
    $( "#iptdebtsReceivedDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
	$( "#iptdebtsBankDate" ).datepicker();
    $( "#iptdebtsBankDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
	$( "#iptdebtsDate" ).datepicker();
    $( "#iptdebtsDate" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
 })();
// 債讓 end	
	