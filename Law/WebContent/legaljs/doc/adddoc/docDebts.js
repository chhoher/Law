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
		law.common.selectRelaOption("#iptdebtsRelationPerson" + displaynum + "_" + debts.debtsRelaNum[num], law.addDoc.rela, undefined, true);
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
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptdebtsBankDate" + debtssubtabcount + "' ></input></td>" +
					"<td><label style='color:red'>*收文日期</label></td>" +
					"<td><input id='iptdebtsReceivedDate" + debtssubtabcount + "'></input></td>" +
					"<td><label style='color:red'>*文件狀態</label></td>" +
					"<td><select id='iptdebtsDocStatus" + debtssubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label style='color:red'>*文件類別</label></td>" +
					"<td><select id='iptdebtsTypeOne" + debtssubtabcount + "' disabled ><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*文件項目</label></td>" +
					"<td><select id='iptdebtsTypeTwo" + debtssubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*債權人</label></td>" +
					"<td><select id='iptdebtsBankName" + debtssubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><select id='iptdebtsOldBankName" + debtssubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr id='iptdebtsRelationPersonTr" + debtssubtabcount + "'>" +
					"<td><label style='color:red'>*相對人</label></td>" +
					"<td><select id='iptdebtsRelationPerson" + debtssubtabcount +"_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.debts.adddebtsRelaTd(" + (debtssubtabcount + 1) + ")'></td>" +
				"</tr>" +
			"</table>" +
			"<table style='background-color:#FFEBCD;'>" +
				"<tr>" +
					"<td><label>(換發債證)法院年字案股</label></td>" +
					"<td><select id='iptdebtsCourtYearCourt" + debtssubtabcount + "' ><option value=''>請選擇</option></select></td>" +
					"<td><label>年度</label></td>" +
					"<td><input id='iptdebtsCourtYearYear" + debtssubtabcount + "' style='width : 50px'></input></td>" +
					"<td><label>字</label></td>" +
					"<td><input id='iptdebtsCourtYearTxt" + debtssubtabcount + "' style='width : 50px'></input></td>" +
					"<td><label>股別</label></td>" +
					"<td><input id='iptdebtsCourtYearShare" + debtssubtabcount + "' style='width : 50px'></input></td>" +
					"<td><label>案號</label></td>" +
					"<td><input id='iptdebtsCourtYearCaseId" + debtssubtabcount + "' style='width : 60px'></input></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
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
 		law.common.formatInputItemToDate("#iptdebtsReceivedDate" + debtssubtabcount, "yy-mm-dd");
 		law.common.formatInputItemToDate("#iptdebtsBankDate" + debtssubtabcount, "yy-mm-dd");
 		law.common.formatInputItemToDate("#iptdebtsDate" + debtssubtabcount, "yy-mm-dd");
	   
		law.common.selectOption("#iptdebtsDocStatus" + debtssubtabcount, debts.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
		law.common.selectOption("#iptdebtsTypeOne" + debtssubtabcount, debts.TypeOne, "8aa2e72a5c812434015c81303cbf0008", true);
		law.common.selectOption("#iptdebtsTypeTwo" + debtssubtabcount, debts.TypeTwo, undefined, true);
		law.common.selectOption("#iptdebtsCourtYearCourt" + debtssubtabcount, debts.CourtYearCourt, undefined, true);
		law.common.selectRelaOption("#iptdebtsRelationPerson" + debtssubtabcount + "_0", law.addDoc.rela, undefined, true);
		
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptdebtsBankName" + debtssubtabcount).append(BankNameSelectOption);
		$("#iptdebtsBankName" + debtssubtabcount + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
						
		//動態跑出原債權人
		if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-B1" ||
				$("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-B2" ||
				$("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-B3" ||
				$("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-B4" ||
				$("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-B5" ||
				$("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-B6" ||
				$("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-B7" ||
				$("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-CD" ||
				$("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.TSBOldBankName, undefined, true);
		}else if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.FEIOldBankName, undefined, true);
		}else if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.SKOldBankName, undefined, true);
		}else if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "YT_AMC" ||
				$("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.YTOldBankName, undefined, true);
		}else if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.FIOldBankName, undefined, true);
		}else if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.TSAOldBankName, undefined, true);
		}else if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.TAMCOOldBankName, undefined, true);
		}else if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.ORIXOldBankName, undefined, true);
		}else if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.MTOldBankName, undefined, true);
		}else if($("#iptdebtsBankName" + debtssubtabcount).find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptdebtsOldBankName" + debtssubtabcount, debts.UNOldBankName, undefined, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptdebtsOldBankName" + debtssubtabcount + " option").remove();
			$("#iptdebtsOldBankName" + debtssubtabcount).append(selectNull);
		}
		
		
		//設定相對人 = 0
		law.addDoc.debts.debtsRelaNum[(debtssubtabcount+1)] = 0;
	},
	// 初始化
	initdebtssubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, TSBOldBankName, CourtYearCourt, 
			FEIOldBankName, SKOldBankName,YTOldBankName, FIOldBankName, TSAOldBankName, 
			TAMCOOldBankName, ORIXOldBankName, MTOldBankName, UNOldBankName){
		var initsub = law.addDoc.debts;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.TSBOldBankName = TSBOldBankName;
		initsub.CourtYearCourt = CourtYearCourt;
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
		
		var length = law.addDoc.debts.debtssubtabcount,
			i = 0,j = 0,displayNum = 0,
			debts = {},
			returndebts = "",
			returndebtsRelas_0 = [],
			relainfo = {};
			
		// add By Jia 2017-08-11 空值判斷
		var emptyReturn = law.addDoc.debts.debtsRegex(undefined);
		if(emptyReturn.isEmpty){
			return emptyReturn;
		}
		// add By Jia 2017-08-14 格式判斷
		var isRegexReturn = law.addDoc.debts.debtsRegex(undefined);
		if(isRegexReturn.isRegexp){
			return isRegexReturn;
		}
		
		for( ; i <= law.addDoc.debts.debtsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptdebtsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptdebtsRelationPerson_" + i).find('option:selected').text()
				};
			returndebtsRelas_0.push(relainfo);
		}
			
		var topItem = {
			'bankId' : law.addDoc.bankId,
			'bankName' : law.addDoc.bankName,
			'gProdId' : law.addDoc.gprodId,
			'gProdName' : law.addDoc.gprodName,
			'debtID' : law.addDoc.ID,
			'debtName' : law.addDoc.debtName,
			'debtsId' : ($("#iptdebtsDocId").val() !== "" ) ? $("#iptdebtsDocId").val() : null,
			'receivedDate' : $("#iptdebtsReceivedDate").val(),
			'bankDate' : ($("#iptdebtsBankDate").val() !== "") ? $("#iptdebtsBankDate").val() : null,
			'docStatus' : $("#iptdebtsDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptdebtsTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptdebtsTypeTwo").find('option:selected').val(),
			'oldBankName' : ($("#iptdebtsOldBankName").find('option:selected').val() !== "")? $("#iptdebtsOldBankName").find('option:selected').val() : null,
			'debtsRelationPerson' : returndebtsRelas_0,
			'relationPerson' : $("#iptdebtsRelationPerson_0").find('option:selected').val(),
			'courtYearCourt' : ($("#iptdebtsCourtYearCourt").find('option:selected').val() !== "")? $("#iptdebtsCourtYearCourt").find('option:selected').val() : null,
			'courtYearYear' : ($("#iptdebtsCourtYearYear").val() !== "")? $("#iptdebtsCourtYearYear").val() : null,
			'courtYearTxt' : ($("#iptdebtsCourtYearTxt").val() !== "")? $("#iptdebtsCourtYearTxt").val() : null,
			'courtYearShare' : ($("#iptdebtsCourtYearShare").val() !== "")? $("#iptdebtsCourtYearShare").val() : null,
			'courtYearCaseId' : ($("#iptdebtsCourtYearCaseId").val() !== "")? $("#iptdebtsCourtYearCaseId").val() : null,
			'debtsDate' : ($("#iptdebtsDate").val() !== "")? $("#iptdebtsDate").val() : null,
			'remark' : ($("#iptdebtsRemark").val() !== "")? $("#iptdebtsRemark").val() : null,
			'disTypeOne' : $("#iptdebtsTypeOne").find('option:selected').text(),
			'disTypeTwo' : $("#iptdebtsTypeTwo").find('option:selected').text(),
			'disDocStatus' : $("#iptdebtsDocStatus").find('option:selected').text()
		};
			
		debts.subItems = [];
		debts.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			if($("#lidebtstab_" + i).size() > 0){
				
				// add By Jia 2017-08-11 空值判斷
				var emptyReturn = law.addDoc.debts.debtsRegex(i);
				if(emptyReturn.isEmpty){
					return emptyReturn;
				}
				// add By Jia 2017-08-14 格式判斷
				var isRegexReturn = law.addDoc.debts.debtsRegex(i);
				if(isRegexReturn.isRegexp){
					return isRegexReturn;
				}
				
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
							'bankId' : law.addDoc.bankId,
							'bankName' : law.addDoc.bankName,
							'gProdId' : law.addDoc.gprodId,
							'gProdName' : law.addDoc.gprodName,
							'debtID' : law.addDoc.ID,
							'debtName' : law.addDoc.debtName,
							'debtsId' : ($("#iptdebtsDocId" + i).val() !== "" ) ? $("#iptdebtsDocId" + i).val() : null,
							'receivedDate' : $("#iptdebtsReceivedDate" + i ).val(),
							'bankDate' : ($("#iptdebtsBankDate" + i ).val() !== "")? $("#iptdebtsBankDate" + i ).val() : null,
							'docStatus' : $("#iptdebtsDocStatus" + i ).find('option:selected').val(),
							'typeOne' : $("#iptdebtsTypeOne" + i ).find('option:selected').val(),
							'typeTwo' : $("#iptdebtsTypeTwo" + i ).find('option:selected').val(),
							'oldBankName' : ($("#iptdebtsOldBankName" + i ).find('option:selected').val() !== "")?$("#iptdebtsOldBankName" + i ).find('option:selected').val() : null,
							'debtsRelationPerson' : returndebtsRelas_0,
							'relationPerson' : $("#iptdebtsRelationPerson_0").find('option:selected').val(),
							'courtYearCourt' : ($("#iptdebtsCourtYearCourt" + i ).find('option:selected').val() !== "")? $("#iptdebtsCourtYearCourt" + i ).find('option:selected').val() : null,
							'courtYearYear' : ($("#iptdebtsCourtYearYear" + i ).val() !=="" ) ? $("#iptdebtsCourtYearYear" + i ).val() : null,
							'courtYearTxt' : ($("#iptdebtsCourtYearTxt" + i ).val() !== "") ? $("#iptdebtsCourtYearTxt" + i ).val() : null,
							'courtYearShare' : ($("#iptdebtsCourtYearShare" + i ).val() !== "")? $("#iptdebtsCourtYearShare" + i ).val() : null,
							'courtYearCaseId' : ($("#iptdebtsCourtYearCaseId" + i ).val() !== "")? $("#iptdebtsCourtYearCaseId" + i ).val() : null,
							'debtsDate' : ($("#iptdebtsDate" + i ).val() !== "") ? $("#iptdebtsDate" + i ).val() : null,
							'remark' : ($("#iptdebtsRemark" + i ).val() !== "") ? $("#iptdebtsRemark" + i ).val() : null,
							'disTypeOne' : $("#iptdebtsTypeOne" + i).find('option:selected').text(),
							'disTypeTwo' : $("#iptdebtsTypeTwo" + i).find('option:selected').text(),
							'disDocStatus' : $("#iptdebtsDocStatus" + i).find('option:selected').text(),
							'tempCount' : i
					};
					debts.subItems.push(subItems);
			}
		}

		returndebts = JSON.stringify(debts.subItems);
		return returndebts;
	},
	// add By Jia 2017-08-10 若必選欄位有空則return並提示
	//index : 第幾頁籤 index = undefined 表示首頁
	debtsRegex : function(index){
		var isEmpty;
		var isRegexp;
		var returnSaveDebts;
		var returndebts = "";
		if(index === undefined){
			isEmpty = law.common.checkIsEmpty("iptdebtsReceivedDate", "債讓[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveDebts = { isEmpty : true, regexString : isEmpty.regexString, returndebts : returndebts}
				return returnSaveDebts;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptdebtsDocStatus", "債讓[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveDebts = { isEmpty : true, regexString : isEmpty.regexString, returndebts : returndebts}
				return returnSaveDebts;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptdebtsTypeTwo", "債讓[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveDebts = { isEmpty : true, regexString : isEmpty.regexString, returndebts : returndebts}
				return returnSaveDebts;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptdebtsRelationPerson_0", "債讓[相對人]");
			if(isEmpty.isEmpty){
				returnSaveDebts = { isEmpty : true, regexString : isEmpty.regexString, returndebts : returndebts}
				return returnSaveDebts;
			}
			if($("#iptdebtsCourtYearYear").val() !== ""){
				isRegexp = law.common.checkRegexp("iptdebtsCourtYearYear", law.regex.numberRegex, "債讓[法院年字案股 : 年度]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveDebts = { isRegexp : true, regexString : isRegexp.regexString, returndebts : returndebts}
					return returnSaveDebts;
				}
			}
			if($("#iptdebtsCourtYearCaseId").val() !== ""){
				isRegexp = law.common.checkRegexp("iptdebtsCourtYearCaseId", law.regex.numberRegex, "債讓[法院年字案股 : 案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveDebts = { isRegexp : true, regexString : isRegexp.regexString, returndebts : returndebts}
					return returnSaveDebts;
				}
			}
		}else{
			isEmpty = law.common.checkIsEmpty("iptdebtsReceivedDate" + index, "債讓[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveDebts = { isEmpty : true, regexString : isEmpty.regexString, returndebts : returndebts}
				return returnSaveDebts;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptdebtsDocStatus" + index, "債讓[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveDebts = { isEmpty : true, regexString : isEmpty.regexString, returndebts : returndebts}
				return returnSaveDebts;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptdebtsTypeTwo" + index, "債讓[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveDebts = { isEmpty : true, regexString : isEmpty.regexString, returndebts : returndebts}
				return returnSaveDebts;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptdebtsRelationPerson" + index + "_0", "債讓[相對人]");
			if(isEmpty.isEmpty){
				returnSaveDebts = { isEmpty : true, regexString : isEmpty.regexString, returndebts : returndebts}
				return returnSaveDebts;
			}
			if($("#iptdebtsCourtYearYear" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptdebtsCourtYearYear" + index, law.regex.numberRegex, "債讓[法院年字案股 : 年度]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveDebts = { isRegexp : true, regexString : isRegexp.regexString, returndebts : returndebts}
					return returnSaveDebts;
				}
			}
			if($("#iptdebtsCourtYearCaseId" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptdebtsCourtYearCaseId" + index, law.regex.numberRegex, "債讓[法院年字案股 : 案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveDebts = { isRegexp : true, regexString : isRegexp.regexString, returndebts : returndebts}
					return returnSaveDebts;
				}
			}
		}
		// 全部為空驗證通過
		returnSaveDebts = { isEmpty : false, isRegexp : false};
		return returnSaveDebts;
	},
	// 從文管系統進入 初始化頁籤
	initopenDebtssubtab : function (debtsDocInfo){
		var debts = law.addDoc.debts;
		$("#iptdebtsBankDate").val(debtsDocInfo.bankDate !== undefined ? debtsDocInfo.bankDate : "");// 業主調件日
		$("#iptdebtsReceivedDate").val(debtsDocInfo.receivedDate);// 收文日期
		law.common.selectOption("#iptdebtsDocStatus", debts.DocStatus, debtsDocInfo.docStatus, true);// 文件狀態
		law.common.selectOption("#iptdebtsTypeOne", debts.TypeOne, debtsDocInfo.typeOne, true);// 文件類別
		law.common.selectOption("#iptdebtsTypeTwo", debts.TypeTwo, debtsDocInfo.typeTwo, true);// 文件項目
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptdebtsBankName").append(BankNameSelectOption);
		$("#iptdebtsBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');// 債權人
		
		//動態跑出原債權人
		if($("#iptdebtsBankName").find('option:selected').val() ===  "TS-B1" ||
				$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B2" ||
				$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B3" ||
				$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B4" ||
				$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B5" ||
				$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B6" ||
				$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B7" ||
				$("#iptdebtsBankName").find('option:selected').val() ===  "TS-CD" ||
				$("#iptdebtsBankName").find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptdebtsOldBankName", debts.TSBOldBankName, debtsDocInfo.oldBankName, true);
		}else if($("#iptdebtsBankName").find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptdebtsOldBankName", debts.FEIOldBankName, debtsDocInfo.oldBankName, true);
		}else if($("#iptdebtsBankName").find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptdebtsOldBankName", debts.SKOldBankName, debtsDocInfo.oldBankName, true);
		}else if($("#iptdebtsBankName").find('option:selected').val() ===  "YT_AMC" ||
				$("#iptdebtsBankName").find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptdebtsOldBankName", debts.YTOldBankName, debtsDocInfo.oldBankName, true);
		}else if($("#iptdebtsBankName").find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptdebtsOldBankName", debts.FIOldBankName, debtsDocInfo.oldBankName, true);
		}else if($("#iptdebtsBankName").find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptdebtsOldBankName", debts.TSAOldBankName, debtsDocInfo.oldBankName, true);
		}else if($("#iptdebtsBankName").find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptdebtsOldBankName", debts.TAMCOOldBankName, debtsDocInfo.oldBankName, true);
		}else if($("#iptdebtsBankName").find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptdebtsOldBankName", debts.ORIXOldBankName, debtsDocInfo.oldBankName, true);
		}else if($("#iptdebtsBankName").find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptdebtsOldBankName", debts.MTOldBankName, debtsDocInfo.oldBankName, true);
		}else if($("#iptdebtsBankName").find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptdebtsOldBankName", debts.UNOldBankName, debtsDocInfo.oldBankName, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptdebtsOldBankName" + " option").remove();
			$("#iptdebtsOldBankName").append(selectNull);
		}
		
		law.common.selectRelaOption("#iptdebtsRelationPerson_0", law.addDoc.rela, debtsDocInfo.relationPerson, true); // 相對人
		
		// TODO 要帶出多個
		
		law.common.selectOption("#iptdebtsCourtYearCourt", debts.CourtYearCourt, debtsDocInfo.courtYearCourt, true); // (換發債證)法院年字案股 法院
		$("#iptdebtsCourtYearYear").val(debtsDocInfo.courtYearYear !== 0 ? debtsDocInfo.courtYearYear : "");// (換發債證)法院年字案股 年度
		$("#iptdebtsCourtYearTxt").val(debtsDocInfo.courtYearTxt !== undefined ? debtsDocInfo.courtYearTxt : "");// (換發債證)法院年字案股 字
		$("#iptdebtsCourtYearShare").val(debtsDocInfo.courtYearShare !== undefined ? debtsDocInfo.courtYearShare : "");// (換發債證)法院年字案股 股別
		$("#iptdebtsCourtYearCaseId").val(debtsDocInfo.courtYearCaseId !== 0 ? debtsDocInfo.courtYearCaseId : "");// (換發債證)法院年字案股 案號
		
		$("#iptdebtsDate").val(debtsDocInfo.debtsDate !== undefined ? debtsDocInfo.debtsDate : "");// 債讓日
		$("#iptdebtsRemark").val(debtsDocInfo.remark !== undefined ? debtsDocInfo.remark : "");// 備註
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
	law.common.formatInputItemToDate("#iptdebtsReceivedDate", "yy-mm-dd");
	law.common.formatInputItemToDate("#iptdebtsBankDate", "yy-mm-dd");
	law.common.formatInputItemToDate("#iptdebtsDate", "yy-mm-dd");
 })();
// 債讓 end	
	