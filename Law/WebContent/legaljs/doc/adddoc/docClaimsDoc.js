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
		law.common.selectRelaOption("#iptclaimsDocRelationPerson" + displaynum + "_" + claimsDoc.claimsDocRelaNum[num], law.addDoc.rela, undefined, true);
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
					"<td><label style='color:red'>*收文日期</label></td>" +
					"<td><input id='iptclaimsDocReceivedDate" + claimsDocsubtabcount + "'></input></td>" +
					"<td><label style='color:red'>*文件狀態</label></td>" +
					"<td><select id='iptclaimsDocDocStatus" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label style='color:red'>*文件類別</label></td>" +
					"<td><select id='iptclaimsDocTypeOne" + claimsDocsubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*文件項目</label></td>" +
					"<td><select id='iptclaimsDocTypeTwo" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*債權人</label></td>" +
					"<td><select id='iptclaimsDocBankName" + claimsDocsubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><select id='iptclaimsDocOldBankName" + claimsDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr id='iptclaimsDocRelationPersonTr" + claimsDocsubtabcount + "'>" +
					"<td><label style='color:red'>*相對人</label></td>" +
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
	   
		law.common.selectOption("#iptclaimsDocDocStatus" + claimsDocsubtabcount, claimsDoc.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
		law.common.selectOption("#iptclaimsDocTypeOne" + claimsDocsubtabcount, claimsDoc.TypeOne, "8aa2e72a5c812434015c812fa6890006", true);
		law.common.selectOption("#iptclaimsDocTypeTwo" + claimsDocsubtabcount, claimsDoc.TypeTwo, undefined, true);
		law.common.selectRelaOption("#iptclaimsDocRelationPerson" + claimsDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptclaimsDocBankName" + claimsDocsubtabcount).append(BankNameSelectOption);
		$("#iptclaimsDocBankName" + claimsDocsubtabcount + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
		
		//動態跑出原債權人
		if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-B1" ||
				$("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-B2" ||
				$("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-B3" ||
				$("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-B4" ||
				$("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-B5" ||
				$("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-B6" ||
				$("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-B7" ||
				$("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-CD" ||
				$("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.TSBOldBankName, undefined, true);
		}else if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.FEIOldBankName, undefined, true);
		}else if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.SKOldBankName, undefined, true);
		}else if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "YT_AMC" ||
				$("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.YTOldBankName, undefined, true);
		}else if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.FIOldBankName, undefined, true);
		}else if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.TSAOldBankName, undefined, true);
		}else if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.TAMCOOldBankName, undefined, true);
		}else if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.ORIXOldBankName, undefined, true);
		}else if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.MTOldBankName, undefined, true);
		}else if($("#iptclaimsDocBankName" + claimsDocsubtabcount).find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptclaimsDocOldBankName" + claimsDocsubtabcount, claimsDoc.UNOldBankName, undefined, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptclaimsDocOldBankName" + claimsDocsubtabcount + " option").remove();
			$("#iptclaimsDocOldBankName" + claimsDocsubtabcount).append(selectNull);
		}
		
		//設定相對人 = 0
		law.addDoc.claimsDoc.claimsDocRelaNum[(claimsDocsubtabcount+1)] = 0;
	},
	// 初始化
	initclaimsDocsubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo,
				TSBOldBankName, FEIOldBankName, SKOldBankName,YTOldBankName, FIOldBankName, 
				TSAOldBankName, TAMCOOldBankName, ORIXOldBankName, MTOldBankName, UNOldBankName){
		var initsub = law.addDoc.claimsDoc;
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
		
		var length = law.addDoc.claimsDoc.claimsDocsubtabcount,
			i = 0,j = 0,displayNum = 0,
			claimsDoc = {},
			returnClaimsDoc = "",
			returnClaimsDocRelas_0 = [],
			relainfo = {};
			
		// add By Jia 2017-08-11 空值判斷
		var emptyReturn = law.addDoc.claimsDoc.claimsDocRegex(undefined);
		if(emptyReturn.isEmpty){
			return emptyReturn;
		}
		// add By Jia 2017-08-14 格式判斷
		var isRegexReturn = law.addDoc.claimsDoc.claimsDocRegex(undefined);
		if(isRegexReturn.isRegexp){
			return isRegexReturn;
		}
			
		for( ; i <= law.addDoc.claimsDoc.claimsDocRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptclaimsDocRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptclaimsDocRelationPerson_" + i).find('option:selected').text()
				};
			returnClaimsDocRelas_0.push(relainfo);
		}
			
		var topItem = {
			'bankId' : law.addDoc.bankId,
			'bankName' : law.addDoc.bankName,
			'gProdId' : law.addDoc.gprodId,
			'gProdName' : law.addDoc.gprodName,
			'debtID' : law.addDoc.ID,
			'debtName' : law.addDoc.debtName,
			'claimsdocsId' : ($("#iptclaimsDocDocId").val() !== "" ) ? $("#iptclaimsDocDocId").val() : null,
			'receivedDate' : $("#iptclaimsDocReceivedDate").val(),
			'bankDate' : ($("#iptclaimsDocBankDate").val() !== "")? $("#iptclaimsDocBankDate").val() : null,
			'docStatus' : $("#iptclaimsDocDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptclaimsDocTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptclaimsDocTypeTwo").find('option:selected').val(),
			'oldBankName' : ($("#iptclaimsDocOldBankName").find('option:selected').val() !== "")? $("#iptclaimsDocOldBankName").find('option:selected').val() : null,
			'claimsRelationPerson' : returnClaimsDocRelas_0,
			'relationPerson' : $("#iptclaimsDocRelationPerson_0").find('option:selected').val(),
			'quota' : ($("#iptclaimsDocQuota").val() !== "")? $("#iptclaimsDocQuota").val()  : null,
			'interestRate' : ($("#iptclaimsDocInterestRate").val() !== "")? $("#iptclaimsDocInterestRate").val() : null,
			'remark' : ($("#iptclaimsDocRemark").val() !== "")? $("#iptclaimsDocRemark").val() : null,
			'disTypeOne' : $("#iptclaimsDocTypeOne").find('option:selected').text(),
			'disTypeTwo' : $("#iptclaimsDocTypeTwo").find('option:selected').text(),
			'disDocStatus' : $("#iptclaimsDocDocStatus").find('option:selected').text()
		};
			
		claimsDoc.subItems = [];
		claimsDoc.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			if($("#liclaimsDoctab_" + i).size()){
				
				// add By Jia 2017-08-11 空值判斷
				var emptyReturn = law.addDoc.claimsDoc.claimsDocRegex(i);
				if(emptyReturn.isEmpty){
					return emptyReturn;
				}
				// add By Jia 2017-08-14 格式判斷
				var isRegexReturn = law.addDoc.claimsDoc.claimsDocRegex(i);
				if(isRegexReturn.isRegexp){
					return isRegexReturn;
				}
				
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
							'bankId' : law.addDoc.bankId,
							'bankName' : law.addDoc.bankName,
							'gProdId' : law.addDoc.gprodId,
							'gProdName' : law.addDoc.gprodName,
							'debtID' : law.addDoc.ID,
							'debtName' : law.addDoc.debtName,
							'claimsdocsId' : ($("#iptclaimsDocDocId" + i).val() !== "" ) ? $("#iptclaimsDocDocId" + i).val() : null,
							'receivedDate' : $("#iptclaimsDocReceivedDate" + i ).val(),
							'bankDate' : ($("#iptclaimsDocBankDate" + i ).val() !== "")? $("#iptclaimsDocBankDate" + i ).val() : null,
							'docStatus' : $("#iptclaimsDocDocStatus" + i ).find('option:selected').val(),
							'typeOne' : $("#iptclaimsDocTypeOne" + i ).find('option:selected').val(),
							'typeTwo' : $("#iptclaimsDocTypeTwo" + i ).find('option:selected').val(),
							'oldBankName' : ($("#iptclaimsDocOldBankName" + i ).find('option:selected').val() !== "")? $("#iptclaimsDocOldBankName" + i ).find('option:selected').val() : null,
							'claimsRelationPerson' : returnClaimsDocRelas_0,
							'relationPerson' : $("#iptclaimsDocRelationPerson_0").find('option:selected').val(),
							'quota' : ($("#iptclaimsDocQuota" + i ).val() !== "")? $("#iptclaimsDocQuota" + i ).val() : null,
							'interestRate' : ($("#iptclaimsDocInterestRate" + i ).val() !== "")? $("#iptclaimsDocInterestRate" + i ).val() : null,
							'remark' : ($("#iptclaimsDocRemark" + i ).val() !== "")? $("#iptclaimsDocRemark" + i ).val() : null,
							'disTypeOne' : $("#iptclaimsDocTypeOne" + i).find('option:selected').text(),
							'disTypeTwo' : $("#iptclaimsDocTypeTwo" + i).find('option:selected').text(),
							'disDocStatus' : $("#iptclaimsDocDocStatus" + i).find('option:selected').text(),
							'tempCount' : i
					};
					claimsDoc.subItems.push(subItems);
			}
		}

		returnClaimsDoc = JSON.stringify(claimsDoc.subItems);
		return returnClaimsDoc;
	},
	// add By Jia 2017-08-10 若必選欄位有空則return並提示
	//index : 第幾頁籤 index = undefined 表示首頁
	claimsDocRegex : function(index){
		var isEmpty;
		var isRegexp;
		var returnSaveClaimsDoc;
		var returnClaimsDoc = "";
		if(index === undefined){
			isEmpty = law.common.checkIsEmpty("iptclaimsDocReceivedDate", "債權文件[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveClaimsDoc = { isEmpty : true, regexString : isEmpty.regexString, returnClaimsDoc : returnClaimsDoc}
				return returnSaveClaimsDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptclaimsDocDocStatus", "債權文件[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveClaimsDoc = { isEmpty : true, regexString : isEmpty.regexString, returnClaimsDoc : returnClaimsDoc}
				return returnSaveClaimsDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptclaimsDocTypeTwo", "債權文件[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveClaimsDoc = { isEmpty : true, regexString : isEmpty.regexString, returnClaimsDoc : returnClaimsDoc}
				return returnSaveClaimsDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptclaimsDocRelationPerson_0", "債權文件[相對人]");
			if(isEmpty.isEmpty){
				returnSaveClaimsDoc = { isEmpty : true, regexString : isEmpty.regexString, returnClaimsDoc : returnClaimsDoc}
				return returnSaveClaimsDoc;
			}
			if($("#iptclaimsDocQuota").val() !== ""){
				isRegexp = law.common.checkRegexp("iptclaimsDocQuota", law.regex.numberRegex, "債權文件[額度]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveClaimsDoc = { isRegexp : true, regexString : isRegexp.regexString, returnClaimsDoc : returnClaimsDoc}
					return returnSaveClaimsDoc;
				}
			}
		}else{
			isEmpty = law.common.checkIsEmpty("iptclaimsDocReceivedDate" + index, "債權文件[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveClaimsDoc = { isEmpty : true, regexString : isEmpty.regexString, returnClaimsDoc : returnClaimsDoc}
				return returnSaveClaimsDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptclaimsDocDocStatus" + index, "債權文件[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveClaimsDoc = { isEmpty : true, regexString : isEmpty.regexString, returnClaimsDoc : returnClaimsDoc}
				return returnSaveClaimsDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptclaimsDocTypeTwo" + index, "債權文件[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveClaimsDoc = { isEmpty : true, regexString : isEmpty.regexString, returnClaimsDoc : returnClaimsDoc}
				return returnSaveClaimsDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptclaimsDocRelationPerson" + index + "_0", "債權文件[相對人]");
			if(isEmpty.isEmpty){
				returnSaveClaimsDoc = { isEmpty : true, regexString : isEmpty.regexString, returnClaimsDoc : returnClaimsDoc}
				return returnSaveClaimsDoc;
			}
			if($("#iptclaimsDocQuota" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptclaimsDocQuota" + index, law.regex.numberRegex, "債權文件[額度]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveClaimsDoc = { isRegexp : true, regexString : isRegexp.regexString, returnClaimsDoc : returnClaimsDoc}
					return returnSaveClaimsDoc;
				}
			}
		}
		// 全部為空驗證通過
		returnSaveClaimsDoc = { isEmpty : false, isRegexp : false};
		return returnSaveClaimsDoc;
	},
	// 從文管系統進入 初始化頁籤
	initopenClaimsdocsubtab : function (claimsdocDocInfo){
		var claimsDoc = law.addDoc.claimsDoc;
		$("#iptclaimsDocBankDate").val(claimsdocDocInfo.bankDate !== undefined ? claimsdocDocInfo.bankDate : "");// 業主調件日
		$("#iptclaimsDocReceivedDate").val(claimsdocDocInfo.receivedDate);// 收文日期
		law.common.selectOption("#iptclaimsDocDocStatus", claimsDoc.DocStatus, claimsdocDocInfo.docStatus, true);// 文件狀態
		law.common.selectOption("#iptclaimsDocTypeOne", claimsDoc.TypeOne, claimsdocDocInfo.typeOne, true);// 文件類別
		law.common.selectOption("#iptclaimsDocTypeTwo", claimsDoc.TypeTwo, claimsdocDocInfo.typeTwo, true);// 文件項目
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptclaimsDocBankName").append(BankNameSelectOption);
		$("#iptclaimsDocBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');// 債權人
		
		//動態跑出原債權人
		if($("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B1" ||
				$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B2" ||
				$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B3" ||
				$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B4" ||
				$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B5" ||
				$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B6" ||
				$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B7" ||
				$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-CD" ||
				$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.TSBOldBankName, claimsdocDocInfo.oldBankName, true);
		}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.FEIOldBankName, claimsdocDocInfo.oldBankName, true);
		}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.SKOldBankName, claimsdocDocInfo.oldBankName, true);
		}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "YT_AMC" ||
				$("#iptclaimsDocBankName").find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.YTOldBankName, claimsdocDocInfo.oldBankName, true);
		}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.FIOldBankName, claimsdocDocInfo.oldBankName, true);
		}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.TSAOldBankName, claimsdocDocInfo.oldBankName, true);
		}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.TAMCOOldBankName, claimsdocDocInfo.oldBankName, true);
		}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.ORIXOldBankName, claimsdocDocInfo.oldBankName, true);
		}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.MTOldBankName, claimsdocDocInfo.oldBankName, true);
		}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.UNOldBankName, claimsdocDocInfo.oldBankName, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptclaimsDocOldBankName" + " option").remove();
			$("#iptclaimsDocOldBankName").append(selectNull);
		}
		
		law.common.selectRelaOption("#iptclaimsDocRelationPerson_0", law.addDoc.rela, claimsdocDocInfo.relationPerson, true); // 相對人
		
		// TODO 要帶出多個
		
		$("#iptclaimsDocQuota").val(claimsdocDocInfo.quota !== 0 ? claimsdocDocInfo.quota : "");// 額度
		$("#iptclaimsDocInterestRate").val(claimsdocDocInfo.interestRate !== 0 ? claimsdocDocInfo.interestRate : "");// 利率
		$("#iptclaimsDocRemark").val(claimsdocDocInfo.remark !== undefined ? claimsdocDocInfo.remark : "");// 備註
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
	