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
				"<td><select id='iptcashierCheckRelationPerson" + displaynum + "_" + cashierCheck.cashierCheckRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcashierCheckRelationPersonId" + displaynum + "_" + cashierCheck.cashierCheckRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#iptcashierCheckRelationPersonTr" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcashierCheckRelationPerson" + displaynum + "_" + cashierCheck.cashierCheckRelaNum[num], law.addDoc.rela, undefined, true);
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
           	 	"<tr style='display:none'><td><input id='iptcashierCheckDocType" + cashierChecksubtabcount + "'></input><input id='iptcashierCheckDocId" + cashierChecksubtabcount + "'></input></td></tr>" +
           	 	"<tr>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptcashierCheckBankDate" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label style='color:red'>*收文日期</label></td>" +
					"<td><input id='iptcashierCheckReceivedDate" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label style='color:red'>*文件狀態</label></td>" +
					"<td><select id='iptcashierCheckDocStatus" + cashierChecksubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label style='color:red'>*文件類別</label></td>" +
					"<td><select id='iptcashierCheckTypeOne" + cashierChecksubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*文件項目</label></td>" +
					"<td><select id='iptcashierCheckTypeTwo" + cashierChecksubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*債權人</label></td>" +
					"<td><select id='iptcashierCheckBankName" + cashierChecksubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><select id='iptcashierCheckOldBankName" + cashierChecksubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr id='iptcashierCheckRelationPersonTr" + cashierChecksubtabcount + "'>" +
					"<td><label style='color:red'>*相對人</label></td>" +
					"<td><select id='iptcashierCheckRelationPerson" + cashierChecksubtabcount + "_0'><option value=''>請選擇</option></select>" +
							"<input id='iptcashierCheckRelationPersonId" + cashierChecksubtabcount + "_0' style='display:none'></input></td>" +
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
	   
		law.common.selectOption("#iptcashierCheckDocStatus" + cashierChecksubtabcount, cashierCheck.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
		law.common.selectOption("#iptcashierCheckTypeOne" + cashierChecksubtabcount, cashierCheck.TypeOne, "8aa2e72a5c812434015c812fc56a0007", true);
		law.common.selectOption("#iptcashierCheckTypeTwo" + cashierChecksubtabcount, cashierCheck.TypeTwo, undefined, true);
		law.common.selectRelaOption("#iptcashierCheckRelationPerson" + cashierChecksubtabcount + "_0", law.addDoc.rela, undefined, true);
		
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptcashierCheckBankName" + cashierChecksubtabcount).append(BankNameSelectOption);
		$("#iptcashierCheckBankName" + cashierChecksubtabcount + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
		
		//跑出動態原債權人
		if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-B1" ||
				$("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-B2" ||
				$("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-B3" ||
				$("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-B4" ||
				$("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-B5" ||
				$("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-B6" ||
				$("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-B7" ||
				$("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-CD" ||
				$("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.TSBOldBankName, undefined, true);
		}else if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.FEIOldBankName, undefined, true);
		}else if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.SKOldBankName, undefined, true);
		}else if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "YT_AMC" ||
				$("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.YTOldBankName, undefined, true);
		}else if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.FIOldBankName, undefined, true);
		}else if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.TSAOldBankName, undefined, true);
		}else if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.TAMCOOldBankName, undefined, true);
		}else if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.ORIXOldBankName, undefined, true);
		}else if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.MTOldBankName, undefined, true);
		}else if($("#iptcashierCheckBankName" + cashierChecksubtabcount).find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptcashierCheckOldBankName" + cashierChecksubtabcount, cashierCheck.UNOldBankName, undefined, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptcashierCheckOldBankName" + cashierChecksubtabcount + " option").remove();
			$("#iptcashierCheckOldBankName" + cashierChecksubtabcount).append(selectNull);
		}
		
		//設定相對人 = 0
		law.addDoc.cashierCheck.cashierCheckRelaNum[(cashierChecksubtabcount+1)] = 0;
	},
	// 初始化
	initcashierChecksubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, 
			TSBOldBankName, FEIOldBankName, SKOldBankName,YTOldBankName, FIOldBankName, 
			TSAOldBankName, TAMCOOldBankName, ORIXOldBankName, MTOldBankName, UNOldBankName){
		var initsub = law.addDoc.cashierCheck;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.TSBOldBankName = TSBOldBankName;
		initsub.FEIOldBankName = FEIOldBankName;
		initsub.SKOldBankName = SKOldBankName;
		initsub.YTOldBankName = YTOldBankName;
		initsub.FIOldBankName = FIOldBankName;
		initsub.TSAOldBankName = TSAOldBankName;
		initsub.TAMCOOldBankName = TAMCOOldBankName;
		initsub.ORIXOldBankName = ORIXOldBankName;
		initsub.MTOldBankName = MTOldBankName;
		initsub.UNOldBankName = UNOldBankName;
	},
	// 將所有頁籤內容帶出
	returnAllsubtabJson : function(){
		
		var length = law.addDoc.cashierCheck.cashierChecksubtabcount,
			i = 0,j = 0,displayNum = 0,
			cashierCheck = {},
			returncashierCheck = "",
			returncashierCheckRelas_0 = [],
			relainfo = {};
		
		// add By Jia 2017-08-11 空值判斷
		var emptyReturn = law.addDoc.cashierCheck.cashierCheckRegex(undefined);
		if(emptyReturn.isEmpty){
			return emptyReturn;
		}
		// add By Jia 2017-08-14 格式判斷
		var isRegexReturn = law.addDoc.cashierCheck.cashierCheckRegex(undefined);
		if(isRegexReturn.isRegexp){
			return isRegexReturn;
		}
			
		for( ; i <= law.addDoc.cashierCheck.cashierCheckRelaNum[0]; i++){
			var rela_ID = $("#iptcashierCheckRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = { 
				"cashiercheckRelaId" : ($("#iptcashierCheckRelationPersonId_" + i).val() != "" ) ? $("#iptcashierCheckRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcashierCheckRelationPerson_" + i).find('option:selected').text()
				};
			returncashierCheckRelas_0.push(relainfo);
		}
		
		var topItem = {
			'bankId' : law.addDoc.bankId,
			'bankName' : law.addDoc.bankName,
			'gProdId' : law.addDoc.gprodId,
			'gProdName' : law.addDoc.gprodName,
			'debtID' : law.addDoc.ID,
			'debtName' : law.addDoc.debtName,
			'cashiercheckId' : ($("#iptcashierCheckDocId").val() !== "" ) ? $("#iptcashierCheckDocId").val() : null,
			'receivedDate' : $("#iptcashierCheckReceivedDate").val(),
			'bankDate' : ($("#iptcashierCheckBankDate").val() !== "")? $("#iptcashierCheckBankDate").val() : null,
			'docStatus' : $("#iptcashierCheckDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptcashierCheckTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptcashierCheckTypeTwo").find('option:selected').val(),
			'oldBankName' : ($("#iptcashierCheckOldBankName").find('option:selected').val() !== "")? $("#iptcashierCheckOldBankName").find('option:selected').val() : null,
			'cashiercheckRelationPerson' : returncashierCheckRelas_0,
			'relationPerson' : $("#iptcashierCheckRelationPerson_0").find('option:selected').val(),
			'startDate' : ($("#iptcashierCheckStartDate").val() !== "")? $("#iptcashierCheckStartDate").val() : null,
			'amount' : ($("#iptcashierCheckAmount").val() !== "")? $("#iptcashierCheckAmount").val() : null,
			'endDate' : ($("#iptcashierCheckEndDate").val() !== "")? $("#iptcashierCheckEndDate").val() : null,
			'remark' : ($("#iptcashierCheckRemark").val() !== "")? $("#iptcashierCheckRemark").val() : null,
			'disTypeOne' : $("#iptcashierCheckTypeOne").find('option:selected').text(),
			'disTypeTwo' : $("#iptcashierCheckTypeTwo").find('option:selected').text(),
			'disDocStatus' : $("#iptcashierCheckDocStatus").find('option:selected').text()
		};
			
		cashierCheck.subItems = [];
		cashierCheck.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			if($("#licashierChecktab_" + i).size() > 0){
				
				// add By Jia 2017-08-11 空值判斷
				var emptyReturn = law.addDoc.cashierCheck.cashierCheckRegex(i);
				if(emptyReturn.isEmpty){
					return emptyReturn;
				}
				// add By Jia 2017-08-14 格式判斷
				var isRegexReturn = law.addDoc.cashierCheck.cashierCheckRegex(i);
				if(isRegexReturn.isRegexp){
					return isRegexReturn;
				}
				returncashierCheckRelas_0 = [];
				displayNum = i + 1;
				j = 0;
				for( ; j <= law.addDoc.cashierCheck.cashierCheckRelaNum[displayNum]; j++){
					var rela_ID = $("#iptcashierCheckRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
					relainfo = { 
						"cashiercheckRelaId" : ($("#iptcashierCheckRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcashierCheckRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcashierCheckRelationPerson" + i + "_" + j).find('option:selected').text()
					};
					returncashierCheckRelas_0.push(relainfo);
				}
				
						var subItems = {
							'bankId' : law.addDoc.bankId,
							'bankName' : law.addDoc.bankName,
							'gProdId' : law.addDoc.gprodId,
							'gProdName' : law.addDoc.gprodName,
							'debtID' : law.addDoc.ID,
							'debtName' : law.addDoc.debtName,
							'cashiercheckId' : ($("#iptcashierCheckDocId" + i).val() !== "" ) ? $("#iptcashierCheckDocId" + i).val() : null,
							'receivedDate' : $("#iptcashierCheckReceivedDate" + i ).val(),
							'bankDate' : ($("#iptcashierCheckBankDate" + i ).val() !== "")? $("#iptcashierCheckBankDate" + i ).val() : null,
							'docStatus' : $("#iptcashierCheckDocStatus" + i ).find('option:selected').val(),
							'typeOne' : $("#iptcashierCheckTypeOne" + i ).find('option:selected').val(),
							'typeTwo' : $("#iptcashierCheckTypeTwo" + i ).find('option:selected').val(),
							'oldBankName' : ($("#iptcashierCheckOldBankName" + i ).find('option:selected').val() !== "")? $("#iptcashierCheckOldBankName" + i ).find('option:selected').val() : null,
							'cashiercheckRelationPerson' : returncashierCheckRelas_0,
							'relationPerson' : $("#iptcashierCheckRelationPerson_0").find('option:selected').val(),
							'startDate' : ($("#iptcashierCheckStartDate" + i ).val() !== "")? $("#iptcashierCheckStartDate" + i ).val() : null,
							'amount' : ($("#iptcashierCheckAmount" + i ).val() !== "")? $("#iptcashierCheckAmount" + i ).val() : null,
							'endDate' : ($("#iptcashierCheckEndDate" + i ).val() !== "")? $("#iptcashierCheckEndDate" + i ).val() : null,
							'remark' : ($("#iptcashierCheckRemark" + i ).val() !== "")? $("#iptcashierCheckRemark" + i ).val() : null,
							'disTypeOne' : $("#iptcashierCheckTypeOne" + i).find('option:selected').text(),
							'disTypeTwo' : $("#iptcashierCheckTypeTwo" + i).find('option:selected').text(),
							'disDocStatus' : $("#iptcashierCheckDocStatus" + i).find('option:selected').text(),
							'tempCount' : i
					};
					cashierCheck.subItems.push(subItems);
			}
		}

		returncashierCheck = JSON.stringify(cashierCheck.subItems);
		return returncashierCheck;
	},
	// add By Jia 2017-08-10 若必選欄位有空則return並提示
	//index : 第幾頁籤 index = undefined 表示首頁
	cashierCheckRegex : function(index){
		var isEmpty;
		var isRegexp;
		var returnSaveCashierCheck;
		var returncashierCheck = "";
		if(index === undefined){
			isEmpty = law.common.checkIsEmpty("iptcashierCheckReceivedDate", "本票[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveCashierCheck = { isEmpty : true, regexString : isEmpty.regexString, returncashierCheck : returncashierCheck}
				return returnSaveCashierCheck;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcashierCheckDocStatus", "本票[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveCashierCheck = { isEmpty : true, regexString : isEmpty.regexString, returncashierCheck : returncashierCheck}
				return returnSaveCashierCheck;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcashierCheckTypeTwo", "本票[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveCashierCheck = { isEmpty : true, regexString : isEmpty.regexString, returncashierCheck : returncashierCheck}
				return returnSaveCashierCheck;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcashierCheckRelationPerson_0", "本票[相對人]");
			if(isEmpty.isEmpty){
				returnSaveCashierCheck = { isEmpty : true, regexString : isEmpty.regexString, returncashierCheck : returncashierCheck}
				return returnSaveCashierCheck;
			}
			if($("#iptcashierCheckAmount").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcashierCheckAmount", law.regex.numberRegex, "本票[本票金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCashierCheck = { isRegexp : true, regexString : isRegexp.regexString, returncashierCheck : returncashierCheck}
					return returnSaveCashierCheck;
				}
			}
		}else{
			isEmpty = law.common.checkIsEmpty("iptcashierCheckReceivedDate" + index, "本票[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveCashierCheck = { isEmpty : true, regexString : isEmpty.regexString, returncashierCheck : returncashierCheck}
				return returnSaveCashierCheck;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcashierCheckDocStatus" + index, "本票[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveCashierCheck = { isEmpty : true, regexString : isEmpty.regexString, returncashierCheck : returncashierCheck}
				return returnSaveCashierCheck;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcashierCheckTypeTwo" + index, "本票[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveCashierCheck = { isEmpty : true, regexString : isEmpty.regexString, returncashierCheck : returncashierCheck}
				return returnSaveCashierCheck;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcashierCheckRelationPerson" + index + "_0", "本票[相對人]");
			if(isEmpty.isEmpty){
				returnSaveCashierCheck = { isEmpty : true, regexString : isEmpty.regexString, returncashierCheck : returncashierCheck}
				return returnSaveCashierCheck;
			}
			if($("#iptcashierCheckAmount" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcashierCheckAmount" + index, law.regex.numberRegex, "本票[本票金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCashierCheck = { isRegexp : true, regexString : isRegexp.regexString, returncashierCheck : returncashierCheck}
					return returnSaveCashierCheck;
				}
			}
		}
		// 全部為空驗證通過
		returnSaveCashierCheck = { isEmpty : false, isRegexp : false};
		return returnSaveCashierCheck;
	},
	// 從文管系統進入 初始化頁籤
	initopenCashierChecksubtab : function (CashierCheckDocInfo){
		var cashierCheck = law.addDoc.cashierCheck;
		var i = 0;
		$("#iptcashierCheckBankDate").val(CashierCheckDocInfo.bankDate !== undefined ? CashierCheckDocInfo.bankDate : "");// 業主調件日
		$("#iptcashierCheckReceivedDate").val(CashierCheckDocInfo.receivedDate);// 收文日期
		law.common.selectOption("#iptcashierCheckDocStatus", cashierCheck.DocStatus, CashierCheckDocInfo.docStatus, true);// 文件狀態
		law.common.selectOption("#iptcashierCheckTypeOne", cashierCheck.TypeOne, CashierCheckDocInfo.typeOne, true);// 文件類別
		law.common.selectOption("#iptcashierCheckTypeTwo", cashierCheck.TypeTwo, CashierCheckDocInfo.typeTwo, true);// 文件項目
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptcashierCheckBankName").append(BankNameSelectOption);
		$("#iptcashierCheckBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');// 債權人
		
		//動態跑出原債權人
		if($("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B1" ||
				$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B2" ||
				$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B3" ||
				$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B4" ||
				$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B5" ||
				$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B6" ||
				$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B7" ||
				$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-CD" ||
				$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.TSBOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.FEIOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.SKOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "YT_AMC" ||
				$("#iptcashierCheckBankName").find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.YTOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.FIOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.TSAOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.TAMCOOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.ORIXOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.MTOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.UNOldBankName, CashierCheckDocInfo.oldBankName, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptcashierCheckOldBankName" + " option").remove();
			$("#iptcashierCheckOldBankName").append(selectNull);
		}
		
		for(;i < CashierCheckDocInfo.cashiercheckRelationPerson.length; i++){
			var selectVal = CashierCheckDocInfo.cashiercheckRelationPerson[i].ID + "," + CashierCheckDocInfo.cashiercheckRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.cashierCheck.addcashierCheckRelaTd(0);
			}
			law.common.selectRelaOption("#iptcashierCheckRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcashierCheckRelationPersonId_" + i).val(CashierCheckDocInfo.cashiercheckRelationPerson[i].cashiercheckRelaId);
		}
		
		$("#iptcashierCheckStartDate").val(CashierCheckDocInfo.startDate !== undefined ? CashierCheckDocInfo.startDate : "");// 本票發票日
		$("#iptcashierCheckAmount").val(CashierCheckDocInfo.amount !== 0 ? CashierCheckDocInfo.amount : "");// 本票金額
		$("#iptcashierCheckEndDate").val(CashierCheckDocInfo.endDate !== undefined ? CashierCheckDocInfo.endDate : "");// 本票到期日
		$("#iptcashierCheckRemark").val(CashierCheckDocInfo.remark !== undefined ? CashierCheckDocInfo.remark : "");// 備註
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
	