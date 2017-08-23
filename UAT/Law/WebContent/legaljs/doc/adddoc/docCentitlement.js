/**
 * Add By Jia 2017-07-03 docCentitlement.js 實作addDoc.jsp 執行名義的部分 
 */
 
// 執行名義 start
law.addDoc.centitlement = {
	centitlementsubtabcount : 0,
	centitlementactivesubtabcount : 0,
	centitlementsubtabs : $("#censubtabs").tabs(),
	centitlementexistsubtabs : [],
	centitlementRelaNum : [],
	centitlementSourceDocNum : [],// 原始憑證
	// 新增相對人
	addcentitlementRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementRelaNum[num])){
			centitlement.centitlementRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementRelationPerson" + displaynum + "_" + centitlement.centitlementRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcentitlementRelationPersonId" + displaynum + "_" + centitlement.centitlementRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#iptcentitlementRelationPersonTr" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementRelationPerson" + displaynum + "_" + centitlement.centitlementRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增原始憑證
	addcentitlementSourceDocT : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementSourceDocNum[num])){
			centitlement.centitlementSourceDocNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementSourceDocNum[num] ++ ;
		
		tdString = "<tr>" +
					"<td><label>原始憑證</label><input id='iptcentitlementSourceDocId" + displaynum + "_" + centitlement.centitlementSourceDocNum[num] + "' style='display:none'></input></td>" +
					"<td><select id='iptcentitlementSourceDoc" + displaynum + "_" + centitlement.centitlementSourceDocNum[num] + "'><option value=''>請選擇</option></select>" +
					"<select id='iptcentitlementSourceDocCourtYearCourt" + displaynum + "_" + centitlement.centitlementSourceDocNum[num] + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>年度</label></td>" +
					"<td><input id='iptcentitlementSourceDocCourtYearYear" + displaynum + "_" + centitlement.centitlementSourceDocNum[num] + "' style='width : 50px'></input></td>" +
					"<td><label>字</label></td>" +
					"<td><input id='iptcentitlementSourceDocCourtYearTxt" + displaynum + "_" + centitlement.centitlementSourceDocNum[num] + "' style='width : 50px'></input></td>" +
					"<td><label>股別</label></td>" +
					"<td><input id='iptcentitlementSourceDocCourtYearShare" + displaynum + "_" + centitlement.centitlementSourceDocNum[num] + "' style='width : 50px'></input></td>" +
					"<td><label>案號</label></td>" +
					"<td><input id='iptcentitlementSourceDocCourtYearCaseId" + displaynum + "_" + centitlement.centitlementSourceDocNum[num] + "' style='width : 60px'></input></td>" +
				"</tr>";
					
		$("#tcentitlementSourceDoc" + displaynum ).append(tdString);
		law.common.selectOption("#iptcentitlementSourceDoc" + displaynum + "_" + centitlement.centitlementSourceDocNum[num], centitlement.SourceDoc, undefined, true);
		law.common.selectOption("#iptcentitlementSourceDocCourtYearCourt" + displaynum + "_" + centitlement.centitlementSourceDocNum[num], centitlement.CourtYearCourt, undefined, true);
	},
	addcentitlementsubtab : function(){
		var centitlement = law.addDoc.centitlement;
		var centitlementsubtabcount = centitlement.centitlementsubtabcount;
		var centitlementactivesubtabcount = centitlement.centitlementactivesubtabcount;
		var centitlementsubtabs = centitlement.centitlementsubtabs;
		var tabTitle = "執行名義";
		var tabId = "tabs-" + centitlementsubtabcount;
		var tabTemplate = "<li id='licentitlementtab_" + centitlementsubtabcount + "'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));
		var subtabContentHtml = "<table>" +
           	 	"<tr style='display:none'><td><input id='iptcentitlementDocType" + centitlementsubtabcount + "'></input><input id='iptcentitlementDocId" + centitlementsubtabcount + "'></input></td></tr>" +
           	 	"<tr>" +
					"<td><label>共用案號</label></td>" +
					"<td><input id='iptcentitlementShareCaseId" + centitlementsubtabcount + "_0'></input></td>" +
					"<td><input id='iptcentitlementShareCaseId" + centitlementsubtabcount + "_1'></input></td>" +
					"<td><input id='iptcentitlementShareCaseId" + centitlementsubtabcount + "_2'></input></td>" +
					"<td><input id='iptcentitlementShareCaseId" + centitlementsubtabcount + "_3'></input></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
           	 	"<tr>" +
					"<td><input type='radio' name='centitlementShadow" + centitlementsubtabcount + "' value='0' id='rdocentitlementShadow" + centitlementsubtabcount + "' >影本</td>" +
					"<td><input type='radio' name='centitlementShadow" + centitlementsubtabcount + "' value='1' id='rdocentitlementShadowBank" + centitlementsubtabcount + "' >業主收文僅提供影本" +
						"<button onclick='law.common.unchecked(\"rdocentitlementShadow" + centitlementsubtabcount + "\", \"rdocentitlementShadowBank" + centitlementsubtabcount + "\")'>X</button></td>" +
					"<td><label style='color:red'>*文件狀態</label></td>" +
					"<td><select id='iptcentitlementDocStatus" + centitlementsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptcentitlementBankDate" + centitlementsubtabcount + "'></input></td>" +
					"<td><label style='color:red'>*收文日期</label></td>" +
					"<td><input id='iptcentitlementReceivedDate" + centitlementsubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label style='color:red'>*文件類別</label></td>" +
					"<td><select id='iptcentitlementTypeOne" + centitlementsubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*文件項目</label></td>" +
					"<td><select id='iptcentitlementTypeTwo" + centitlementsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*債權人</label></td>" +
					"<td><select id='iptcentitlementBankName" + centitlementsubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><select id='iptcentitlementOldBankName" + centitlementsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"</table>" +
			"<table>" +
				"<tr id='iptcentitlementRelationPersonTr" + centitlementsubtabcount + "'>" +
					"<td><label style='color:red'>*相對人</label>" +
						"<input id='iptcentitlementRelationPersonId" + centitlementsubtabcount + "_0' style='display:none'></input></td>" +
					"<td><select id='iptcentitlementRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr bgcolor='#FFEBCD' >" +
					"<td><label style='color:red'>*法院年字案股</label></td>" +
					"<td><select id='iptcentitlementCourtYearCourt" + centitlementsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>年度</label></td>" +
					"<td><input id='iptcentitlementCourtYearYear" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
					"<td><label>字</label></td>" +
					"<td><input id='iptcentitlementCourtYearTxt" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
					"<td><label>股別</label></td>" +
					"<td><input id='iptcentitlementCourtYearShare" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
					"<td><label>案號</label></td>" +
					"<td><input id='iptcentitlementCourtYearCaseId" + centitlementsubtabcount + "' style='width : 60px'></input></td>" +
				"</tr>" +
			"</table>" +
			"<table id='tcentitlementSourceDoc" + centitlementsubtabcount + "'>" +
				"<tr>" +
					"<td><label>原始憑證</label><input id='iptcentitlementSourceDocId" + centitlementsubtabcount + "_0' style='display:none'></input></td>" +
					"<td><select id='iptcentitlementSourceDoc" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select>" +
					"<select id='iptcentitlementSourceDocCourtYearCourt" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><label>年度</label></td>" +
					"<td><input id='iptcentitlementSourceDocCourtYearYear" + centitlementsubtabcount + "_0' style='width : 50px'></input></td>" +
					"<td><label>字</label></td>" +
					"<td><input id='iptcentitlementSourceDocCourtYearTxt" + centitlementsubtabcount + "_0' style='width : 50px'></input></td>" +
					"<td><label>股別</label></td>" +
					"<td><input id='iptcentitlementSourceDocCourtYearShare" + centitlementsubtabcount + "_0' style='width : 50px'></input></td>" +
					"<td><label>案號</label></td>" +
					"<td><input id='iptcentitlementSourceDocCourtYearCaseId" + centitlementsubtabcount + "_0' style='width : 60px'></input><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementSourceDocT(" + (centitlementsubtabcount + 1) + ")'></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr>" +
					"<td><label style='color:red'>*發文日期</label></td>" +
					"<td><input id='iptcentitlementSendDate" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>最近執行日期</label></td>" +
					"<td><input id='iptcentitlementNewSendDate" + centitlementsubtabcount + "' ></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementRemark" + centitlementsubtabcount + "' ></input></td>" +
				"</tr>" +
           	 "</table>";
           	 
           	 
       	 var docArray,seloption;
		
		centitlement.centitlementsubtabcount ++ ;
		centitlement.centitlementactivesubtabcount ++;
		
		centitlement.centitlementsubtabs.find(".ui-tabs-nav").append(li);
		centitlement.centitlementsubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		centitlement.centitlementsubtabs.tabs("refresh");
		centitlement.centitlementsubtabs.tabs({ active:centitlement.centitlementactivesubtabcount});
           	 
		centitlement.centitlementexistsubtabs.push(true);
		// 開始初始化
		
		//將日期欄位格式化
	 	law.common.formatInputItemToDate("#iptcentitlementReceivedDate" + centitlementsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcentitlementBankDate" + centitlementsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcentitlementSendDate" + centitlementsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcentitlementNewSendDate" + centitlementsubtabcount, "yy-mm-dd");
	   
	    law.common.selectOption("#iptcentitlementDocStatus" + centitlementsubtabcount, centitlement.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
		law.common.selectOption("#iptcentitlementTypeOne" + centitlementsubtabcount, centitlement.TypeOne, "8aa2e72a5c812434015c812f07cd0001", true);
		law.common.selectOption("#iptcentitlementTypeTwo" + centitlementsubtabcount, centitlement.TypeTwo, undefined, true);
		law.common.selectOption("#iptcentitlementCourtYearCourt" + centitlementsubtabcount, centitlement.CourtYearCourt, undefined, true);
		law.common.selectOption("#iptcentitlementSourceDoc" + centitlementsubtabcount + "_0", centitlement.SourceDoc, undefined, true);
		law.common.selectOption("#iptcentitlementSourceDocCourtYearCourt" + centitlementsubtabcount + "_0", centitlement.CourtYearCourt, undefined, true);
		law.common.selectRelaOption("#iptcentitlementRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela, undefined, true);
		
		
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptcentitlementBankName"+ centitlementsubtabcount).append(BankNameSelectOption);
		$("#iptcentitlementBankName"+ centitlementsubtabcount + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
		
		// 動態跑出原債權人
		if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-B1" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-B2" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-B3" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-B4" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-B5" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-B6" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-B7" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-CD" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.TSBOldBankName, undefined, true);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.FEIOldBankName, undefined, true);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.SKOldBankName, undefined, true);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "YT_AMC" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.YTOldBankName, undefined, true);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.FIOldBankName, undefined, true);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.TSAOldBankName, undefined, true);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.TAMCOOldBankName, undefined, true);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.ORIXOldBankName, undefined, true);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.MTOldBankName, undefined, true);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.UNOldBankName, undefined, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptcentitlementOldBankName" + centitlementsubtabcount + " option").remove();
			$("#iptcentitlementOldBankName" + centitlementsubtabcount).append(selectNull);
		}
		
		//設定相對人 = 0
		law.addDoc.centitlement.centitlementRelaNum[(centitlementsubtabcount+1)] = 0;
 		law.addDoc.centitlement.centitlementSourceDocNum[(centitlementsubtabcount + 1)] = 0;// 原始憑證
	},
	// 初始化
	initcentitlementsubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, TSBOldBankName, 
			CourtYearCourt, SourceDoc, FEIOldBankName, SKOldBankName,YTOldBankName, FIOldBankName, 
			TSAOldBankName, TAMCOOldBankName, ORIXOldBankName, MTOldBankName, UNOldBankName){
		var initsub = law.addDoc.centitlement;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.TSBOldBankName = TSBOldBankName;
		initsub.CourtYearCourt = CourtYearCourt;
		initsub.SourceDoc = SourceDoc;
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
		
		var length = law.addDoc.centitlement.centitlementsubtabcount,
			i = 0,j = 0,displayNum = 0,
			centitlement = {},
			returncentitlement = "",
			returncentitlementRelas_0 = [],
			relainfo = {},
			returncentitlementSourceDoc_0 = [];// 原始憑證
			
		var shadow; // add By Jia 2017-08-11 影本值	
		
		// add By Jia 2017-08-11 空值判斷
		var emptyReturn = law.addDoc.centitlement.cenRegex(undefined);
		if(emptyReturn.isEmpty){
			return emptyReturn;
		}
		// add By Jia 2017-08-14 格式判斷
		var isRegexReturn = law.addDoc.centitlement.cenRegex(undefined);
		if(isRegexReturn.isRegexp){
			return isRegexReturn;
		}
		
		if($("#rdocentitlementShadow").is(':checked')){
			shadow = $("#rdocentitlementShadow:checked").val();
		}else if($("#rdocentitlementShadowBank").is(':checked')){
			shadow = $("#rdocentitlementShadowBank:checked").val();
		}else{
			shadow = null;
		}
		
		for( ; i <= law.addDoc.centitlement.centitlementRelaNum[0]; i++){
			var rela_ID = $("#iptcentitlementRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"centitlementRelaId" : ($("#iptcentitlementRelationPersonId_" + i).val() != "" ) ? $("#iptcentitlementRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcentitlementRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementRelas_0.push(relainfo);
		}
		
		// 原始憑證
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementSourceDocNum[0]; i++){
			relainfo = { 
				"centitlementSourceDocId" : ($("#iptcentitlementSourceDocId_" + i).val() != "" ) ? $("#iptcentitlementSourceDocId_" + i).val() : null,
				"centitlementSourceDoc" : ($("#iptcentitlementSourceDoc_" + i).find('option:selected').val() !== "") ? $("#iptcentitlementSourceDoc_" + i).find('option:selected').val() : null,
				"centitlementSourceDocName" : ($("#iptcentitlementSourceDoc_" + i).find('option:selected').text() !== "") ? $("#iptcentitlementSourceDoc_" + i).find('option:selected').text() : null,
				"courtYearCourt"	: ($("#iptcentitlementSourceDocCourtYearCourt_" + i).find('option:selected').val() !== "") ? $("#iptcentitlementSourceDocCourtYearCourt_" + i).find('option:selected').val() : null,
				"courtYearCourtName"	: ($("#iptcentitlementSourceDocCourtYearCourt_" + i).find('option:selected').text() !== "") ? $("#iptcentitlementSourceDocCourtYearCourt_" + i).find('option:selected').text() : null,
				"courtYearYear"	: ($("#iptcentitlementSourceDocCourtYearYear_" + i).val() !== "") ? $("#iptcentitlementSourceDocCourtYearYear_" + i).val() : null,
				"courtYearTxt"	: ($("#iptcentitlementSourceDocCourtYearTxt_" + i).val() !== "") ? $("#iptcentitlementSourceDocCourtYearTxt_" + i).val() : null,
				"courtYearShare"	: ($("#iptcentitlementSourceDocCourtYearShare_" + i).val() !=="") ? $("#iptcentitlementSourceDocCourtYearShare_" + i).val() : null,
				"courtYearCaseId"	: ($("#iptcentitlementSourceDocCourtYearCaseId_" + i).val() !== "") ? $("#iptcentitlementSourceDocCourtYearCaseId_" + i).val() : null,
				"num" : i
				};
			returncentitlementSourceDoc_0.push(relainfo);
		}
		
		var topItem = {
			'bankId' : law.addDoc.bankId,
			'bankName' : law.addDoc.bankName,
			'gProdId' : law.addDoc.gprodId,
			'gProdName' : law.addDoc.gprodName,
			'debtID' : law.addDoc.ID,
			'debtName' : law.addDoc.debtName,
			'centitlementId' : ($("#iptcentitlementDocId").val() !== "" ) ? $("#iptcentitlementDocId").val() : null,
			'shareCaseId0' : ($("#iptcentitlementShareCaseId_0").val() !== "") ? $("#iptcentitlementShareCaseId_0").val() : null,
			'shareCaseId1' : ($("#iptcentitlementShareCaseId_1").val() !== "") ? $("#iptcentitlementShareCaseId_1").val() : null,
			'shareCaseId2' : ($("#iptcentitlementShareCaseId_2").val() !== "") ? $("#iptcentitlementShareCaseId_2").val() : null,
			'shareCaseId3' : ($("#iptcentitlementShareCaseId_3").val() !== "") ? $("#iptcentitlementShareCaseId_3").val() : null,
			'shadow' : shadow,
			'receivedDate' : $("#iptcentitlementReceivedDate").val(),
			'bankDate' : ($("#iptcentitlementBankDate").val() !== "") ? $("#iptcentitlementBankDate").val() : null,
			'docStatus' : $("#iptcentitlementDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptcentitlementTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptcentitlementTypeTwo").find('option:selected').val(),
			'oldBankName' : ($("#iptcentitlementOldBankName").find('option:selected').val() !== "") ? $("#iptcentitlementOldBankName").find('option:selected').val() : null,
			'centitlementRelationPerson' : returncentitlementRelas_0,
			'relationPerson' : $("#iptcentitlementRelationPerson_0").find('option:selected').val(),
			'courtYearCourt' : $("#iptcentitlementCourtYearCourt").find('option:selected').val(),
			'courtYearYear' : $("#iptcentitlementCourtYearYear").val(),
			'courtYearTxt' : $("#iptcentitlementCourtYearTxt").val(),
			'courtYearShare' : $("#iptcentitlementCourtYearShare").val(),
			'courtYearCaseId' : $("#iptcentitlementCourtYearCaseId").val(),
			'sendDate' : $("#iptcentitlementSendDate").val(),
			'newSendDate' : ($("#iptcentitlementNewSendDate").val() !== "") ? $("#iptcentitlementNewSendDate").val() : null,
			'remark' : ($("#iptcentitlementRemark").val() !== "") ? $("#iptcentitlementRemark").val() : null,
			// 原始憑證
			'sourceDoc' : ($("#iptcentitlementSourceDoc_0").find('option:selected').val() !== "") ? $("#iptcentitlementSourceDoc_0").find('option:selected').val() : null,
			'centitlementSourceDoc' : returncentitlementSourceDoc_0,
			'disDocStatus' : $("#iptcentitlementDocStatus").find('option:selected').text(),
			'disTypeOne' : $("#iptcentitlementTypeOne").find('option:selected').text(),
			'disTypeTwo' : $("#iptcentitlementTypeTwo").find('option:selected').text(),
			'disCourtYearCourt' : $("#iptcentitlementCourtYearCourt").find('option:selected').text()
		};
			
		centitlement.subItems = [];
		centitlement.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			// add By Jia 2017-08-10 如果頁籤已經關閉 不要push進去
			if($("#licentitlementtab_" + i).size() > 0){
				var shadow; // add By Jia 2017-08-11 影本值
				// add By Jia 2017-08-11 空值判斷
				var emptyReturn = law.addDoc.centitlement.cenRegex(i);
				if(emptyReturn.isEmpty){
					return emptyReturn;
				}
				// add By Jia 2017-08-14 格式判斷
				var isRegexReturn = law.addDoc.centitlement.cenRegex(i);
				if(isRegexReturn.isRegexp){
					return isRegexReturn;
				}
				
				if($("#rdocentitlementShadow" + i).is(':checked')){
					shadow = $("#rdocentitlementShadow" + i + ":checked").val();
				}else if($("#rdocentitlementShadowBank" + i).is(':checked')){
					shadow = $("#rdocentitlementShadowBank" + i + ":checked").val();
				}else{
					shadow = null;
				}
				
				returncentitlementRelas_0 = [];
				displayNum = i + 1;
				j = 0;
				for( ; j <= law.addDoc.centitlement.centitlementRelaNum[displayNum]; j++){
					var rela_ID = $("#iptcentitlementRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
					relainfo = {
						"centitlementRelaId" : ($("#iptcentitlementRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcentitlementRelationPersonId" + i + "_" + j).val() : null,
						"num" : i,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcentitlementRelationPerson" + i + "_" + j).find('option:selected').text()
						};
					returncentitlementRelas_0.push(relainfo);
				}
				
				// 原始憑證
				returncentitlementSourceDoc_0 = [];
				displayNum = i + 1;
				j = 0;
				for( ; j <= law.addDoc.centitlement.centitlementSourceDocNum[displayNum]; j++){
					relainfo = { 
						"centitlementSourceDocId" : ($("#iptcentitlementSourceDocId" + i + "_" + j).val() != "" ) ? $("#iptcentitlementSourceDocId" + i + "_" + j).val() : null,
						"centitlementSourceDoc" : ($("#iptcentitlementSourceDoc" + i + "_" + j).find('option:selected').val() !== "") ? $("#iptcentitlementSourceDoc" + i + "_" + j).find('option:selected').val() : null,
						"centitlementSourceDocName" : ($("#iptcentitlementSourceDoc" + i + "_" + j).find('option:selected').text() !== "") ? $("#iptcentitlementSourceDoc" + i + "_" + j).find('option:selected').text() : null,
						"courtYearCourt"	: ($("#iptcentitlementSourceDocCourtYearCourt" + i + "_" + j).find('option:selected').val() !== "") ? $("#iptcentitlementSourceDocCourtYearCourt" + i + "_" + j).find('option:selected').val() : null,
						"courtYearCourtName"	: ($("#iptcentitlementSourceDocCourtYearCourt" + i + "_" + j).find('option:selected').text() !== "") ? $("#iptcentitlementSourceDocCourtYearCourt" + i + "_" + j).find('option:selected').text() : null,
						"courtYearYear"	: ($("#iptcentitlementSourceDocCourtYearYear" + i + "_" + j).val() !== "") ? $("#iptcentitlementSourceDocCourtYearYear" + i + "_" + j).val() : null ,
						"courtYearTxt"	: ($("#iptcentitlementSourceDocCourtYearTxt" + i + "_" + j).val() !== "") ? $("#iptcentitlementSourceDocCourtYearTxt" + i + "_" + j).val() : null,
						"courtYearShare"	: ($("#iptcentitlementSourceDocCourtYearShare" + i + "_" + j).val() !== "") ? $("#iptcentitlementSourceDocCourtYearShare" + i + "_" + j).val() : null,
						"courtYearCaseId"	: ($("#iptcentitlementSourceDocCourtYearCaseId" + i + "_" + j).val() !== "") ? $("#iptcentitlementSourceDocCourtYearCaseId" + i + "_" + j).val() : null,
						"num" : j
					};
					returncentitlementSourceDoc_0.push(relainfo);
				}
				
				
						var subItems = {
							'bankId' : law.addDoc.bankId,
							'bankName' : law.addDoc.bankName,
							'gProdId' : law.addDoc.gprodId,
							'gProdName' : law.addDoc.gprodName,
							'debtID' : law.addDoc.ID,
							'debtName' : law.addDoc.debtName,
							'centitlementId' : ($("#iptcentitlementDocId" + i).val() !== "" ) ? $("#iptcentitlementDocId" + i).val() : null,
							'shareCaseId0' : ($("#iptcentitlementShareCaseId" + i + "_0").val() !== "") ? $("#iptcentitlementShareCaseId" + i + "_0").val() : null,
							'shareCaseId1' : ($("#iptcentitlementShareCaseId" + i + "_1").val() !== "") ? $("#iptcentitlementShareCaseId" + i + "_1").val() : null,
							'shareCaseId2' : ($("#iptcentitlementShareCaseId" + i + "_2").val() !== "") ? $("#iptcentitlementShareCaseId" + i + "_2").val() : null,
							'shareCaseId3' : ($("#iptcentitlementShareCaseId" + i + "_3").val() !== "") ? $("#iptcentitlementShareCaseId" + i + "_3").val() : null,
							'shadow' : shadow,
							'receivedDate' : $("#iptcentitlementReceivedDate" + i ).val(),
							'bankDate' : ($("#iptcentitlementBankDate" + i ).val() !== "") ? $("#iptcentitlementBankDate" + i ).val() : null,
							'docStatus' : $("#iptcentitlementDocStatus" + i ).find('option:selected').val(),
							'typeOne' : $("#iptcentitlementTypeOne" + i ).find('option:selected').val(),
							'typeTwo' : $("#iptcentitlementTypeTwo" + i ).find('option:selected').val(),
							'oldBankName' : ($("#iptcentitlementOldBankName" + i ).find('option:selected').val() !== "") ? $("#iptcentitlementOldBankName" + i ).find('option:selected').val() : null,
							'centitlementRelationPerson' : returncentitlementRelas_0,
							'relationPerson' : $("#iptcentitlementRelationPerson_0").find('option:selected').val(),
							'courtYearCourt' : $("#iptcentitlementCourtYearCourt" + i ).find('option:selected').val(),
							'courtYearYear' : $("#iptcentitlementCourtYearYear" + i ).val(),
							'courtYearTxt' : $("#iptcentitlementCourtYearTxt" + i ).val(),
							'courtYearShare' : $("#iptcentitlementCourtYearShare" + i ).val(),
							'courtYearCaseId' : $("#iptcentitlementCourtYearCaseId" + i ).val(),
							'sendDate' : $("#iptcentitlementSendDate" + i ).val(),
							'newSendDate' : ($("#iptcentitlementNewSendDate" + i ).val() !== "" ) ? $("#iptcentitlementNewSendDate" + i ).val() : null,
							'remark' : ($("#iptcentitlementRemark" + i ).val() !== "") ? $("#iptcentitlementRemark" + i ).val() : null,
							// 原始憑證
							'sourceDoc' : ($("#iptcentitlementSourceDoc_0").find('option:selected').val() !== "") ? $("#iptcentitlementSourceDoc_0").find('option:selected').val() : null,
							'centitlementSourceDoc' : returncentitlementSourceDoc_0,
							'disDocStatus' : $("#iptcentitlementDocStatus" + i ).find('option:selected').text(),
							'disTypeOne' : $("#iptcentitlementTypeOne" + i ).find('option:selected').text(),
							'disTypeTwo' : $("#iptcentitlementTypeTwo" + i ).find('option:selected').text(),
							'disCourtYearCourt' : $("#iptcentitlementCourtYearCourt" + i ).find('option:selected').text(),
							'tempCount' : i
					};
					centitlement.subItems.push(subItems);
			}
		}

		returncentitlement = JSON.stringify(centitlement.subItems);
		return returncentitlement;
	},
	// add By Jia 2017-08-10 若必選欄位有空則return並提示
	//index : 第幾頁籤 index = undefined 表示首頁
	cenRegex : function(index){
		var isEmpty;
		var isRegexp;
		var returnSaveCen;
		var returncentitlement = "";
		var i;
		var j;
		if(index === undefined){
			isEmpty = law.common.checkSelectIsEmpty("iptcentitlementDocStatus", "執行名義[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementReceivedDate", "執行名義[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcentitlementTypeTwo", "執行名義[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcentitlementRelationPerson_0", "執行名義[相對人]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcentitlementCourtYearCourt", "執行名義[法院年字案股 : 法院]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementCourtYearYear", "執行名義[法院年字案股 : 年度]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementCourtYearTxt", "執行名義[法院年字案股 : 字]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementCourtYearShare", "執行名義[法院年字案股 : 股別]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementCourtYearCaseId", "執行名義[法院年字案股 : 案號]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementSendDate", "執行名義[發文日期]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			if($("#iptcentitlementShareCaseId_0").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementShareCaseId_0", law.regex.numberRegex, "執行名義[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementShareCaseId_1").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementShareCaseId_1", law.regex.numberRegex, "執行名義[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementShareCaseId_2").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementShareCaseId_2", law.regex.numberRegex, "執行名義[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementShareCaseId_3").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementShareCaseId_3", law.regex.numberRegex, "執行名義[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementCourtYearYear").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementCourtYearYear", law.regex.Cyear, "執行名義[法院年字案股 : 年度]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementCourtYearCaseId").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementCourtYearCaseId", law.regex.numberRegex, "執行名義[法院年字案股 : 案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			i = 0;
			for( ; i <= law.addDoc.centitlement.centitlementSourceDocNum[0]; i++){
				if($("#iptcentitlementSourceDocCourtYearYear_" + i).val() !== ""){
					isRegexp = law.common.checkRegexp("iptcentitlementSourceDocCourtYearYear_" + i, law.regex.Cyear, "執行名義[原始憑證 : 年度]須為數字格式");
					if(isRegexp.isRegexp){
						returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
						return returnSaveCen;
					}
				}
				if($("#iptcentitlementSourceDocCourtYearCaseId_" + i).val() !== ""){
					isRegexp = law.common.checkRegexp("iptcentitlementSourceDocCourtYearCaseId_" + i, law.regex.numberRegex, "執行名義[原始憑證 : 案號]須為數字格式");
					if(isRegexp.isRegexp){
						returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
						return returnSaveCen;
					}
				}
			}
		}else{
			isEmpty = law.common.checkSelectIsEmpty("iptcentitlementDocStatus" + index, "執行名義[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementReceivedDate" + index, "執行名義[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcentitlementTypeTwo" + index, "執行名義[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcentitlementRelationPerson" + index + "_0", "執行名義[相對人]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcentitlementCourtYearCourt" + index, "執行名義[法院年字案股 : 法院]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementCourtYearYear" + index, "執行名義[法院年字案股 : 年度]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementCourtYearTxt" + index, "執行名義[法院年字案股 : 字]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementCourtYearShare" + index, "執行名義[法院年字案股 : 股別]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementCourtYearCaseId" + index, "執行名義[法院年字案股 : 案號]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			isEmpty = law.common.checkIsEmpty("iptcentitlementSendDate" + index, "執行名義[發文日期]");
			if(isEmpty.isEmpty){
				returnSaveCen = { isEmpty : true, regexString : isEmpty.regexString, returncentitlement : returncentitlement}
				return returnSaveCen;
			}
			if($("#iptcentitlementShareCaseId" + index + "_0").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementShareCaseId" + index + "_0", law.regex.numberRegex, "執行名義[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementShareCaseId" + index + "_1").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementShareCaseId" + index + "_1", law.regex.numberRegex, "執行名義[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementShareCaseId" + index + "_2").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementShareCaseId" + index + "_2", law.regex.numberRegex, "執行名義[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementShareCaseId" + index + "_3").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementShareCaseId" + index + "_3", law.regex.numberRegex, "執行名義[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementCourtYearYear" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementCourtYearYear" + index, law.regex.Cyear, "執行名義[法院年字案股 : 年度]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			if($("#iptcentitlementCourtYearCaseId" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcentitlementCourtYearCaseId" + index, law.regex.numberRegex, "執行名義[法院年字案股 : 案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
					return returnSaveCen;
				}
			}
			i = 0;
			j = index + 1;
			for( ; i <= law.addDoc.centitlement.centitlementSourceDocNum[j]; i++){
				if($("#iptcentitlementSourceDocCourtYearYear" + index + "_" + i).val() !== ""){
					isRegexp = law.common.checkRegexp("iptcentitlementSourceDocCourtYearYear" + index + "_" + i, law.regex.Cyear, "執行名義[原始憑證 : 年度]須為數字格式");
					if(isRegexp.isRegexp){
						returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
						return returnSaveCen;
					}
				}
				if($("#iptcentitlementSourceDocCourtYearCaseId" + index + "_" + i).val() !== ""){
					isRegexp = law.common.checkRegexp("iptcentitlementSourceDocCourtYearCaseId" + index + "_" + i, law.regex.numberRegex, "執行名義[原始憑證 : 案號]須為數字格式");
					if(isRegexp.isRegexp){
						returnSaveCen = { isRegexp : true, regexString : isRegexp.regexString, returncentitlement : returncentitlement}
						return returnSaveCen;
					}
				}
			}
		}
		// 全部為空驗證通過
		returnSaveCen = { isEmpty : false, isRegexp : false};
		return returnSaveCen;
	},
	// 從文管系統進入 初始化頁籤
	initopenCensubtab : function (cenDocInfo){
		var centitlement = law.addDoc.centitlement;
		var i = 0;
		$("#iptcentitlementShareCaseId_0").val(cenDocInfo.shareCaseId0 !== undefined ? cenDocInfo.shareCaseId0 : "");// 共用案號1
		$("#iptcentitlementShareCaseId_1").val(cenDocInfo.shareCaseId1 !== undefined ? cenDocInfo.shareCaseId1 : "");// 共用案號2
		$("#iptcentitlementShareCaseId_2").val(cenDocInfo.shareCaseId2 !== undefined ? cenDocInfo.shareCaseId2 : "");// 共用案號3
		$("#iptcentitlementShareCaseId_3").val(cenDocInfo.shareCaseId3 !== undefined ? cenDocInfo.shareCaseId3 : "");// 共用案號4
		if(cenDocInfo.shadow !== undefined){
			if(cenDocInfo.shadow === "0"){
				$("#rdocentitlementShadow").prop("checked", true);
			}else if(cenDocInfo.shadow === "1"){
				$("#rdocentitlementShadowBank").prop("checked", true);
			}
		}
		$("#iptcentitlementBankDate").val(cenDocInfo.bankDate !== undefined ? cenDocInfo.bankDate : "");// 業主調件日
		$("#iptcentitlementReceivedDate").val(cenDocInfo.receivedDate);// 收文日期
		law.common.selectOption("#iptcentitlementDocStatus", centitlement.DocStatus, cenDocInfo.docStatus, true);// 文件狀態
		law.common.selectOption("#iptcentitlementTypeOne", centitlement.TypeOne, cenDocInfo.typeOne, true);// 文件類別
		law.common.selectOption("#iptcentitlementTypeTwo", centitlement.TypeTwo, cenDocInfo.typeTwo, true);// 文件項目
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptcentitlementBankName").append(BankNameSelectOption);
		$("#iptcentitlementBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');// 債權人
		
		//動態跑出原債權人
		if($("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B1" ||
				$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B2" ||
				$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B3" ||
				$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B4" ||
				$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B5" ||
				$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B6" ||
				$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B7" ||
				$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-CD" ||
				$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.TSBOldBankName, cenDocInfo.oldBankName, true);
		}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.FEIOldBankName, cenDocInfo.oldBankName, true);
		}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.SKOldBankName, cenDocInfo.oldBankName, true);
		}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "YT_AMC" ||
				$("#iptcentitlementBankName").find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.YTOldBankName, cenDocInfo.oldBankName, true);
		}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.FIOldBankName, cenDocInfo.oldBankName, true);
		}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.TSAOldBankName, cenDocInfo.oldBankName, true);
		}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.TAMCOOldBankName, cenDocInfo.oldBankName, true);
		}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.ORIXOldBankName, cenDocInfo.oldBankName, true);
		}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.MTOldBankName, cenDocInfo.oldBankName, true);
		}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptcentitlementOldBankName", centitlement.UNOldBankName, cenDocInfo.oldBankName, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptcentitlementOldBankName" + " option").remove();
			$("#iptcentitlementOldBankName").append(selectNull);
		}
		
		for(;i < cenDocInfo.centitlementRelationPerson.length; i++){
			var selectVal = cenDocInfo.centitlementRelationPerson[i].ID + "," + cenDocInfo.centitlementRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.centitlement.addcentitlementRelaTd(0);
			}
			law.common.selectRelaOption("#iptcentitlementRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcentitlementRelationPersonId_" + i).val(cenDocInfo.centitlementRelationPerson[i].centitlementRelaId);
		}
		
		law.common.selectOption("#iptcentitlementCourtYearCourt", centitlement.CourtYearCourt, cenDocInfo.courtYearCourt, true); // 法院年字案股 法院
		$("#iptcentitlementCourtYearYear").val(cenDocInfo.courtYearYear !== undefined ? cenDocInfo.courtYearYear : "");// 法院年字案股 年度
		$("#iptcentitlementCourtYearTxt").val(cenDocInfo.courtYearTxt !== undefined ? cenDocInfo.courtYearTxt : "");// 法院年字案股 字
		$("#iptcentitlementCourtYearShare").val(cenDocInfo.courtYearShare !== undefined ? cenDocInfo.courtYearShare : "");// 法院年字案股 股別
		$("#iptcentitlementCourtYearCaseId").val(cenDocInfo.courtYearCaseId !== undefined ? cenDocInfo.courtYearCaseId : "");// 法院年字案股 案號
		
		i = 0;
		for(;i < cenDocInfo.centitlementSourceDoc.length; i++){
			if(i !== 0){
				law.addDoc.centitlement.addcentitlementSourceDocT(0);
			}
			$("#iptcentitlementSourceDocId_" + i).val(cenDocInfo.centitlementSourceDoc[i].centitlementSourceDocId);// id
			$("#iptcentitlementSourceDoc_" + i).val(cenDocInfo.centitlementSourceDoc[i].centitlementSourceDoc);
			$("#iptcentitlementSourceDocCourtYearCourt_" + i).val(cenDocInfo.centitlementSourceDoc[i].courtYearCourt);
			$("#iptcentitlementSourceDocCourtYearYear_" + i).val(cenDocInfo.centitlementSourceDoc[i].courtYearYear);
			$("#iptcentitlementSourceDocCourtYearTxt_" + i).val(cenDocInfo.centitlementSourceDoc[i].courtYearTxt);
			$("#iptcentitlementSourceDocCourtYearShare_" + i).val(cenDocInfo.centitlementSourceDoc[i].courtYearShare);
			$("#iptcentitlementSourceDocCourtYearCaseId_" + i).val(cenDocInfo.centitlementSourceDoc[i].courtYearCaseId);
		}
		
		$("#iptcentitlementSendDate").val(cenDocInfo.sendDate);// 發文日期
		$("#iptcentitlementNewSendDate").val(cenDocInfo.newSendDate !== undefined ? cenDocInfo.newSendDate : "");// 最近執行日期
		$("#iptcentitlementRemark").val(cenDocInfo.remark !== undefined ? cenDocInfo.remark : "");// 備註
	}
}

	// Close icon: removing the tab on click
	$("#censubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var centitlement = law.addDoc.centitlement;
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		var liid = $(this).closest("li")["0"].id;
		centitlement.centitlementexistsubtabs[liid.substring(liid.indexOf("_") + 1)] = false;
		centitlement.centitlementactivesubtabcount--;
		centitlement.centitlementsubtabs.tabs({ active: centitlement.centitlementactivesubtabcount});
	});
	
 (function(){
	//將日期欄位格式化
 	law.common.formatInputItemToDate("#iptcentitlementReceivedDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcentitlementBankDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcentitlementSendDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcentitlementNewSendDate", "yy-mm-dd");
    
})();
// 執行名義 end	
	