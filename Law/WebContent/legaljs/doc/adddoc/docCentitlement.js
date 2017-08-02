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
	// 補正相對人Num
	centitlementTranscriptsRelaNum : [],
	centitlementCoOwnedTranscriptsRelaNum : [],
	centitlementMortgageeTranscriptsRelaNum : [],
	centitlementLawTranscriptsRelaNum : [],
	centitlementHeirTranscriptsRelaNum : [],
	centitlementDirtTranscriptsRelaNum : [],
	centitlementBuiltTranscriptsRelaNum : [],
	centitlementDistributionRelaNum : [],
	centitlementThingThirdRelaNum : [],
	centitlementThingDebtRelaNum : [],
	centitlementCoOwnedRelaNum : [],
	centitlementDebtDocRelaNum : [],
	centitlementDetailRelaNum : [],
	centitlementFileRelaNum : [],
	centitlementDebtContinueRelaNum : [],
	centitlementCashierCheckRelaNum : [],
	centitlementOtherRelaNum : [],
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
				"<td><select id='iptcentitlementRelationPerson" + displaynum + "_" + centitlement.centitlementRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#iptcentitlementRelationPersonTr" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementRelationPerson" + displaynum + "_" + centitlement.centitlementRelaNum[num], law.addDoc.rela);
	},
	// 新增戶謄補正的相對人
	addcentitlementTranscriptsRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementTranscriptsRelaNum[num])){
			centitlement.centitlementTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementTranscriptsRelaNum[num], law.addDoc.rela);
	},
	// 新增共有人戶謄補正的相對人
	addcentitlementCoOwnedTranscriptsRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementCoOwnedTranscriptsRelaNum[num])){
			centitlement.centitlementCoOwnedTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementCoOwnedTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementCoOwnedTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementCoOwnedTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementCoOwnedTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementCoOwnedTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementCoOwnedTranscriptsRelaNum[num], law.addDoc.rela);
	},
	// 新增抵押權人戶謄補正的相對人
	addcentitlementMortgageeTranscriptsRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementMortgageeTranscriptsRelaNum[num])){
			centitlement.centitlementMortgageeTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementMortgageeTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementMortgageeTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementMortgageeTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementMortgageeTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementMortgageeTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementMortgageeTranscriptsRelaNum[num], law.addDoc.rela);
	},
	// 新增法代戶謄補正的相對人
	addcentitlementLawTranscriptsRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementLawTranscriptsRelaNum[num])){
			centitlement.centitlementLawTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementLawTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementLawTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementLawTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementLawTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementLawTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementLawTranscriptsRelaNum[num], law.addDoc.rela);
	},
	// 新增繼承人戶謄補正的相對人
	addcentitlementHeirTranscriptsRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementHeirTranscriptsRelaNum[num])){
			centitlement.centitlementHeirTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementHeirTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementHeirTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementHeirTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementHeirTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementHeirTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementHeirTranscriptsRelaNum[num], law.addDoc.rela);
	},
	// 新增繼承人戶謄補正的相對人
	addcentitlementHeirTranscriptsRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementHeirTranscriptsRelaNum[num])){
			centitlement.centitlementHeirTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementHeirTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementHeirTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementHeirTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementHeirTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementHeirTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementHeirTranscriptsRelaNum[num], law.addDoc.rela);
	},
	// 新增土謄補正的相對人
	addcentitlementDirtTranscriptsRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementDirtTranscriptsRelaNum[num])){
			centitlement.centitlementDirtTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementDirtTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementDirtTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementDirtTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementDirtTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementDirtTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementDirtTranscriptsRelaNum[num], law.addDoc.rela);
	},
	// 新增建謄補正的相對人
	addcentitlementBuiltTranscriptsRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementBuiltTranscriptsRelaNum[num])){
			centitlement.centitlementBuiltTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementBuiltTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementBuiltTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementBuiltTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementBuiltTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementBuiltTranscriptsRelationPerson" + displaynum + "_" + centitlement.centitlementBuiltTranscriptsRelaNum[num], law.addDoc.rela);
	},
	// 新增分配表補正的相對人
	addcentitlementDistributionRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementDistributionRelaNum[num])){
			centitlement.centitlementDistributionRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementDistributionRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementDistributionRelationPerson" + displaynum + "_" + centitlement.centitlementDistributionRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementDistribution" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementDistributionRelationPerson" + displaynum + "_" + centitlement.centitlementDistributionRelaNum[num], law.addDoc.rela);
	},
	// 新增事項表(第三人)補正的相對人
	addcentitlementThingThirdRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementThingThirdRelaNum[num])){
			centitlement.centitlementThingThirdRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementThingThirdRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementThingThirdRelationPerson" + displaynum + "_" + centitlement.centitlementThingThirdRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementThingThird" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementThingThirdRelationPerson" + displaynum + "_" + centitlement.centitlementThingThirdRelaNum[num], law.addDoc.rela);
	},
	// 新增事項表(債權人)補正的相對人
	addcentitlementThingDebtRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementThingDebtRelaNum[num])){
			centitlement.centitlementThingDebtRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementThingDebtRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementThingDebtRelationPerson" + displaynum + "_" + centitlement.centitlementThingDebtRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementThingDebt" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementThingDebtRelationPerson" + displaynum + "_" + centitlement.centitlementThingDebtRelaNum[num], law.addDoc.rela);
	},
	// 新增共有人名冊補正的相對人
	addcentitlementCoOwnedRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementCoOwnedRelaNum[num])){
			centitlement.centitlementCoOwnedRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementCoOwnedRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementCoOwnedRelationPerson" + displaynum + "_" + centitlement.centitlementCoOwnedRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementCoOwned" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementCoOwnedRelationPerson" + displaynum + "_" + centitlement.centitlementCoOwnedRelaNum[num], law.addDoc.rela);
	},
	// 新增債權文件補正的相對人
	addcentitlementDebtDocRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementDebtDocRelaNum[num])){
			centitlement.centitlementDebtDocRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementDebtDocRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementDebtDocRelationPerson" + displaynum + "_" + centitlement.centitlementDebtDocRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementDebtDoc" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementDebtDocRelationPerson" + displaynum + "_" + centitlement.centitlementDebtDocRelaNum[num], law.addDoc.rela);
	},
	// 新增帳務明細補正的相對人
	addcentitlementDetailRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementDetailRelaNum[num])){
			centitlement.centitlementDetailRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementDetailRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementDetailRelationPerson" + displaynum + "_" + centitlement.centitlementDetailRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementDetail" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementDetailRelationPerson" + displaynum + "_" + centitlement.centitlementDetailRelaNum[num], law.addDoc.rela);
	},
	// 新增執名附件補正的相對人
	addcentitlementFileRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementFileRelaNum[num])){
			centitlement.centitlementFileRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementFileRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementFileRelationPerson" + displaynum + "_" + centitlement.centitlementFileRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementFile" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementFileRelationPerson" + displaynum + "_" + centitlement.centitlementFileRelaNum[num], law.addDoc.rela);
	},
	// 新增債證續行表補正的相對人
	addcentitlementDebtContinueRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementDebtContinueRelaNum[num])){
			centitlement.centitlementDebtContinueRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementDebtContinueRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementDebtContinueRelationPerson" + displaynum + "_" + centitlement.centitlementDebtContinueRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementDebtContinue" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementDebtContinueRelationPerson" + displaynum + "_" + centitlement.centitlementDebtContinueRelaNum[num], law.addDoc.rela);
	},
	// 新增本票補正的相對人
	addcentitlementCashierCheckRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementCashierCheckRelaNum[num])){
			centitlement.centitlementCashierCheckRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementCashierCheckRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementCashierCheckRelationPerson" + displaynum + "_" + centitlement.centitlementCashierCheckRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementCashierCheck" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementCashierCheckRelationPerson" + displaynum + "_" + centitlement.centitlementCashierCheckRelaNum[num], law.addDoc.rela);
	},
	// 新增其它補正的相對人
	addcentitlementOtherRelaTd : function(num){
		var centitlement = law.addDoc.centitlement;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(centitlement.centitlementOtherRelaNum[num])){
			centitlement.centitlementOtherRelaNum[num] = 0;
		}
		
		law.addDoc.centitlement.centitlementOtherRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcentitlementOtherRelationPerson" + displaynum + "_" + centitlement.centitlementOtherRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcentitlementOther" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcentitlementOtherRelationPerson" + displaynum + "_" + centitlement.centitlementOtherRelaNum[num], law.addDoc.rela);
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
					"<td><label>原始憑證</label></td>" +
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
		law.common.selectOption("#iptcentitlementSourceDoc" + displaynum + "_" + centitlement.centitlementSourceDocNum[num], centitlement.SourceDoc);
		law.common.selectOption("#iptcentitlementSourceDocCourtYearCourt" + displaynum + "_" + centitlement.centitlementSourceDocNum[num], centitlement.CourtYearCourt);
	},
	// add by Jia 2017-07-04 執行名義補正的勾勾控制
	controlcentitlementEditCKB : function(num){
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		//Add By Jia 2017-07-03 控制checkbox有沒有要顯示補正下列填寫項目 start
	    $("#ckbcentitlementAll" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    		$("#ckbcentitlementTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementCoOwnedTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementMortgageeTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementLawTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementHeirTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementDirtTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementBuiltTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementDistribution" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementThingThird" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementThingDebt" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementCoOwned" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementDebtDoc" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementDetail" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementFile" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementDebtContinue" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementCashierCheck" + displaynum).prop("checked", false);
	    		$("#ckbcentitlementOther" + displaynum).prop("checked", false);
	    		
	    		$("#trcentitlementTranscripts" + displaynum).show();
	    		$("#trcentitlementCoOwnedTranscripts" + displaynum).show();
	    		$("#trcentitlementMortgageeTranscripts" + displaynum).show();
	    		$("#trcentitlementLawTranscripts" + displaynum).show();
	    		$("#trcentitlementHeirTranscripts" + displaynum).show();
	    		$("#trcentitlementDirtTranscripts" + displaynum).show();
	    		$("#trcentitlementBuiltTranscripts" + displaynum).show();
	    		$("#trcentitlementDistribution" + displaynum).show();
	    		$("#trcentitlementThingThird" + displaynum).show();
	    		$("#trcentitlementThingDebt" + displaynum).show();
	    		$("#trcentitlementCoOwned" + displaynum).show();
	    		$("#trcentitlementDebtDoc" + displaynum).show();
	    		$("#trcentitlementDetail" + displaynum).show();
	    		$("#trcentitlementFile" + displaynum).show();
	    		$("#trcentitlementDebtContinue" + displaynum).show();
	    		$("#trcentitlementCashierCheck" + displaynum).show();
	    		$("#trcentitlementOther" + displaynum).show();
	    	}else{
	    		$("#trcentitlementTranscripts" + displaynum).hide();
	    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
	    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
	    		$("#trcentitlementLawTranscripts" + displaynum).hide();
	    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
	    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
	    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
	    		$("#trcentitlementDistribution" + displaynum).hide();
	    		$("#trcentitlementThingThird" + displaynum).hide();
	    		$("#trcentitlementThingDebt" + displaynum).hide();
	    		$("#trcentitlementCoOwned" + displaynum).hide();
	    		$("#trcentitlementDebtDoc" + displaynum).hide();
	    		$("#trcentitlementDetail" + displaynum).hide();
	    		$("#trcentitlementFile" + displaynum).hide();
	    		$("#trcentitlementDebtContinue" + displaynum).hide();
	    		$("#trcentitlementCashierCheck" + displaynum).hide();
	    		$("#trcentitlementOther" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementTranscripts" + displaynum).is(':checked')){
	    		
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcentitlementTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementCoOwnedTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementCoOwnedTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementCoOwnedTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementMortgageeTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementMortgageeTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementMortgageeTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementLawTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementLawTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementLawTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcentitlementLawTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementHeirTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementHeirTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementHeirTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementDirtTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementDirtTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementDirtTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementBuiltTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementBuiltTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementBuiltTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementDistribution" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementDistribution" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementDistribution" + displaynum).show();
	    	}else{
	    		$("#trcentitlementDistribution" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementThingThird" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementThingThird" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementThingThird" + displaynum).show();
	    	}else{
	    		$("#trcentitlementThingThird" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementThingDebt" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementThingDebt" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementThingDebt" + displaynum).show();
	    	}else{
	    		$("#trcentitlementThingDebt" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementCoOwned" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementCoOwned" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementCoOwned" + displaynum).show();
	    	}else{
	    		$("#trcentitlementCoOwned" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementDebtDoc" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementDebtDoc" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementDebtDoc" + displaynum).show();
	    	}else{
	    		$("#trcentitlementDebtDoc" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementDetail" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementDetail" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementDetail" + displaynum).show();
	    	}else{
	    		$("#trcentitlementDetail" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementFile" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementFile" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementFile" + displaynum).show();
	    	}else{
	    		$("#trcentitlementFile" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementDebtContinue" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementDebtContinue" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementDebtContinue" + displaynum).show();
	    	}else{
	    		$("#trcentitlementDebtContinue" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementCashierCheck" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementCashierCheck" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementCashierCheck" + displaynum).show();
	    	}else{
	    		$("#trcentitlementCashierCheck" + displaynum).hide();
	    	}
	    });
	    $("#ckbcentitlementOther" + displaynum).on( "click", function(){
	    	if($("#ckbcentitlementOther" + displaynum).is(':checked')){
	
	    		if($("#ckbcentitlementAll" + displaynum).is(':checked')){
	    			$("#ckbcentitlementAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcentitlementTranscripts" + displaynum).hide();
		    		$("#trcentitlementCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcentitlementMortgageeTranscripts" + displaynum).hide();
		    		$("#trcentitlementLawTranscripts" + displaynum).hide();
		    		$("#trcentitlementHeirTranscripts" + displaynum).hide();
		    		$("#trcentitlementDirtTranscripts" + displaynum).hide();
		    		$("#trcentitlementBuiltTranscripts" + displaynum).hide();
		    		$("#trcentitlementDistribution" + displaynum).hide();
		    		$("#trcentitlementThingThird" + displaynum).hide();
		    		$("#trcentitlementThingDebt" + displaynum).hide();
		    		$("#trcentitlementCoOwned" + displaynum).hide();
		    		$("#trcentitlementDebtDoc" + displaynum).hide();
		    		$("#trcentitlementDetail" + displaynum).hide();
		    		$("#trcentitlementFile" + displaynum).hide();
		    		$("#trcentitlementDebtContinue" + displaynum).hide();
		    		$("#trcentitlementCashierCheck" + displaynum).hide();
		    		$("#trcentitlementOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcentitlementOther" + displaynum).show();
	    	}else{
	    		$("#trcentitlementOther" + displaynum).hide();
	    	}
	    });
	  //Add By Jia 2017-07-03 控制checkbox有沒有要顯示補正下列填寫項目 end
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
					"<td><input type='radio' name='centitlementShadow" + centitlementsubtabcount + "' value='1' id='rdocentitlementShadowBank" + centitlementsubtabcount + "' >業主收文僅提供影本</td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><select id='iptcentitlementDocStatus" + centitlementsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptcentitlementBankDate" + centitlementsubtabcount + "'></input></td>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptcentitlementReceivedDate" + centitlementsubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><select id='iptcentitlementTypeOne" + centitlementsubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><select id='iptcentitlementTypeTwo" + centitlementsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptcentitlementBankName" + centitlementsubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><select id='iptcentitlementOldBankName" + centitlementsubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"</table>" +
			"<table>" +
				"<tr id='iptcentitlementRelationPersonTr" + centitlementsubtabcount + "'>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
				"</tr>" +
			"</table>" +
			"<table>" +
				"<tr bgcolor='#FFEBCD' >" +
					"<td><label>法院年字案股</label></td>" +
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
					"<td><label>原始憑證</label></td>" +
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
					"<td><label>發文日期</label></td>" +
					"<td><input id='iptcentitlementSendDate" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>最近執行日期</label></td>" +
					"<td><input id='iptcentitlementNewSendDate" + centitlementsubtabcount + "' ></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementRemark" + centitlementsubtabcount + "' ></input></td>" +
				"</tr>" +
           	 "</table>" +
			"<div style='overflow: auto;margin:5px 5px 5px 5px' class='ui-widget-content'>" +
			"<div style='overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;' align='center'>補正</div>" +
           	 "<table>" +
           	 	"<tr>" +
           	 		"<td>" +
           	 			"<div style='overflow: auto;margin:5px 5px 5px 5px' class='ui-widget-content'>" +
		           	 		"<div>" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='all' id='ckbcentitlementAll" + centitlementsubtabcount + "' checked>全選" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementTranscripts" + centitlementsubtabcount + "'>戶謄" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='coOwnedTranscripts' id='ckbcentitlementCoOwnedTranscripts" + centitlementsubtabcount + "'>共有人戶謄" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='mortgageeTranscripts' id='ckbcentitlementMortgageeTranscripts" + centitlementsubtabcount + "'>抵押權人戶謄" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='lawTranscripts' id='ckbcentitlementLawTranscripts" + centitlementsubtabcount + "'>法代戶謄" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='heirTranscripts' id='ckbcentitlementHeirTranscripts" + centitlementsubtabcount + "'>繼承人戶謄" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='dirtTranscripts' id='ckbcentitlementDirtTranscripts" + centitlementsubtabcount + "'>土謄" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='builtTranscripts' id='ckbcentitlementBuiltTranscripts" + centitlementsubtabcount + "'>建謄" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='distribution' id='ckbcentitlementDistribution" + centitlementsubtabcount + "'>分配表" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='thingThird' id='ckbcentitlementThingThird" + centitlementsubtabcount + "'>事項表(第三人)" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='thingDebt' id='ckbcentitlementThingDebt" + centitlementsubtabcount + "'>事項表(債權人)" +
							"</div>" +
							"<div>" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='coOwned' id='ckbcentitlementCoOwned" + centitlementsubtabcount + "'>共有人名冊" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='debtDoc' id='ckbcentitlementDebtDoc" + centitlementsubtabcount + "'>債權文件" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='detail' id='ckbcentitlementDetail" + centitlementsubtabcount + "'>帳務明細" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='file' id='ckbcentitlementFile" + centitlementsubtabcount + "'>執名附件" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='debtContinue' id='ckbcentitlementDebtContinue" + centitlementsubtabcount + "'>債證續行表" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='cashierCheck' id='ckbcentitlementCashierCheck" + centitlementsubtabcount + "'>本票" +
								"<input type='checkbox' name='ckbcentitlement" + centitlementsubtabcount + "' value='other' id='ckbcentitlementOther" + centitlementsubtabcount + "'>其它" +
							"</div>" +
						"</div>" +
					"</td>" +
           	 	"</tr>" +
           	 "</table>" +
           	 "<table>" +
           	 	"<tr id='trcentitlementTranscripts" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementTranscriptsSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementTranscriptsSub" + centitlementsubtabcount + "'>戶謄</td>" +
           	 		"<td><input id='iptcentitlementTranscriptsDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
           	 		"<td><label>日內</label></td>" +
           	 		"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementTranscriptsRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementTranscriptsRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementTranscriptsRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementCoOwnedTranscripts" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementCoOwnedTranscriptsSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementCoOwnedTranscriptsSub" + centitlementsubtabcount + "'>共有人戶謄</td>" +
					"<td><input id='iptcentitlementCoOwnedTranscriptsDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementCoOwnedTranscriptsRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementCoOwnedTranscriptsRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementCoOwnedTranscriptsRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementMortgageeTranscripts" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementMortgageeTranscriptsSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementMortgageeTranscriptsSub" + centitlementsubtabcount + "'>抵押權人戶謄</td>" +
					"<td><input id='iptcentitlementMortgageeTranscriptsDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementMortgageeTranscriptsRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementMortgageeTranscriptsRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementMortgageeTranscriptsRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementLawTranscripts" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementLawTranscriptsSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementLawTranscriptsSub" + centitlementsubtabcount + "'>法代戶謄</td>" +
					"<td><input id='iptcentitlementLawTranscriptsDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementLawTranscriptsRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementLawTranscriptsRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementLawTranscriptsRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementHeirTranscripts" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementHeirTranscriptsSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementHeirTranscriptsSub" + centitlementsubtabcount + "'>繼承人戶謄</td>" +
					"<td><input id='iptcentitlementHeirTranscriptsDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementHeirTranscriptsRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementHeirTranscriptsRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementHeirTranscriptsRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
           	 	"</tr>" +
        	 	"<tr id='trcentitlementDirtTranscripts" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementDirtTranscriptsSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementDirtTranscriptsSub" + centitlementsubtabcount + "'>土謄</td>" +
					"<td><input id='iptcentitlementDirtTranscriptsDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementDirtTranscriptsRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementDirtTranscriptsRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementDirtTranscriptsRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementBuiltTranscripts" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementBuiltTranscripts" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementBuiltTranscriptsSub" + centitlementsubtabcount + "'>建謄</td>" +
					"<td><input id='iptcentitlementBuiltTranscriptsDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementBuiltTranscriptsRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementBuiltTranscriptsRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementBuiltTranscriptsRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementDistribution" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementDistributionSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementDistributionSub" + centitlementsubtabcount + "'>分配表</td>" +
					"<td><input id='iptcentitlementDistributionDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementDistributionRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementDistributionRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementDistributionRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementThingThird" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementThingThirdSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementThingThirdSub" + centitlementsubtabcount + "'>事項表(第三人)</td>" +
					"<td><input id='iptcentitlementThingThirdDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementThingThirdRemark" + centitlementsubtabcount + "'></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementThingThirdRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementThingThirdRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementThingDebt" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementThingDebtSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementThingDebtSub" + centitlementsubtabcount + "'>事項表(債權人)</td>" +
					"<td><input id='iptcentitlementThingDebtDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementThingDebtRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementThingDebtRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementThingDebtRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementCoOwned" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementCoOwnedSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementCoOwnedSub" + centitlementsubtabcount + "'>共有人名冊</td>" +
					"<td><input id='iptcentitlementCoOwnedDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementCoOwnedRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementCoOwnedRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementCoOwnedRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementDebtDoc" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementDebtDocSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementDebtDocSub" + centitlementsubtabcount + "'>債權文件</td>" +
					"<td><input id='iptcentitlementDebtDocDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementDebtDocRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementDebtDocRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementDebtDocRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementDetail" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementDetailSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementDetailSub" + centitlementsubtabcount + "'>帳務明細</td>" +
					"<td><input id='iptcentitlementDetailDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementDetailRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementDetailRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementDetailRelaTd(" + (centitlementsubtabcount + 1) + ")''></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementFile" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementFileSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementFileSub" + centitlementsubtabcount + "'>執名附件</td>" +
					"<td><input id='iptcentitlementFileDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementFileRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementFileRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementFileRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementDebtContinue" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementDebtContinueSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementDebtContinueSub" + centitlementsubtabcount + "'>債證續行表</td>" +
					"<td><input id='iptcentitlementDebtContinueDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementDebtContinueRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementDebtContinueRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementDebtContinueRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
        	 	"<tr id='trcentitlementCashierCheck" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementCashierCheckSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementCashierCheckSub" + centitlementsubtabcount + "'>本票</td>" +
					"<td><input id='iptcentitlementCashierCheckDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementCashierCheckRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementCashierCheckRelationPerson" + centitlementsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementCashierCheckRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
           	 "</table>" +
           	 "<table>" +
        	 	"<tr id='trcentitlementOther" + centitlementsubtabcount + "'>" +
           	 		"<td><input type='checkbox' name='namecentitlementOtherSub" + centitlementsubtabcount + "' value='transcripts' id='ckbcentitlementOtherSub" + centitlementsubtabcount + "'>其它</td>" +
					"<td><input id='iptcentitlementOtherName" + centitlementsubtabcount + "' ></input><input id='iptcentitlementOtherDays" + centitlementsubtabcount + "' style='width : 50px'></input></td>" +
   	 				"<td><label>日內</label></td>" +
   	 				"<td><label>備註</label></td>" +
					"<td><input id='iptcentitlementOtherRemark" + centitlementsubtabcount + "' ></input></td>" +
					"<td><label>相對人</label></td>" +
					"<td><select id='iptcentitlementOtherRelationPerson" + centitlementsubtabcount + "_0'><option value=>請選擇</option></select></td>" +
					"<td><img src='../images/plus.png' onclick='law.addDoc.centitlement.addcentitlementOtherRelaTd(" + (centitlementsubtabcount + 1) + ")'></td>" +
        	 	"</tr>" +
           	 "</table>" +
           	 "<table>" +
           	 	"<tr>" +
           	 		"<td><label>補正說明</label></td>" +
           	 		"<td><input id='iptcentitlementEdit" + centitlementsubtabcount + "'></input></td>" +
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
	   
	    law.common.selectOption("#iptcentitlementDocStatus" + centitlementsubtabcount, centitlement.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
		law.common.selectOption("#iptcentitlementTypeOne" + centitlementsubtabcount, centitlement.TypeOne, "8aa2e72a5c812434015c812f07cd0001");
		law.common.selectOption("#iptcentitlementTypeTwo" + centitlementsubtabcount, centitlement.TypeTwo);
		law.common.selectOption("#iptcentitlementCourtYearCourt" + centitlementsubtabcount, centitlement.CourtYearCourt);
		law.common.selectOption("#iptcentitlementSourceDoc" + centitlementsubtabcount + "_0", centitlement.SourceDoc);
		law.common.selectOption("#iptcentitlementSourceDocCourtYearCourt" + centitlementsubtabcount + "_0", centitlement.CourtYearCourt);
		law.common.selectRelaOption("#iptcentitlementRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		
		
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptcentitlementBankName"+ centitlementsubtabcount).append(BankNameSelectOption);
		$("#iptcentitlementBankName"+ centitlementsubtabcount + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
		
		//補正下拉選項
		law.common.selectRelaOption("#iptcentitlementTranscriptsRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementCoOwnedTranscriptsRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementMortgageeTranscriptsRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementLawTranscriptsRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementHeirTranscriptsRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementDirtTranscriptsRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementBuiltTranscriptsRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementDistributionRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementThingThirdRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementThingDebtRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementCoOwnedRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementDebtDocRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementDetailRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementFileRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementDebtContinueRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementCashierCheckRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcentitlementOtherRelationPerson" + centitlementsubtabcount + "_0", law.addDoc.rela);
		
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
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.TSBOldBankName);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.FEIOldBankName);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.SKOldBankName);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "YT_AMC" ||
				$("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.YTOldBankName);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.FIOldBankName);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.TSAOldBankName);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.TAMCOOldBankName);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.ORIXOldBankName);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.MTOldBankName);
		}else if($("#iptcentitlementBankName" + centitlementsubtabcount).find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptcentitlementOldBankName" + centitlementsubtabcount, centitlement.UNOldBankName);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptcentitlementOldBankName" + centitlementsubtabcount + " option").remove();
			$("#iptcentitlementOldBankName" + centitlementsubtabcount).append(selectNull);
		}
		
		
		//設定收文日期為當日
		$("#iptcentitlementReceivedDate" + centitlementsubtabcount).val(centitlement.ReceivedDate);
		
		//設定相對人 = 0
		law.addDoc.centitlement.centitlementRelaNum[(centitlementsubtabcount+1)] = 0;
		
		//設定勾勾
 		law.addDoc.centitlement.controlcentitlementEditCKB(centitlementsubtabcount+1);
 		
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
			//補正相關人
			returncentitlementTranscriptsRelas_0 = [],
			returncentitlementCoOwnedTranscriptsRelas_0 = [],
			returncentitlementMortgageeTranscriptsRelas_0 = [],
			returncentitlementLawTranscriptsRelas_0 = [],
			returncentitlementHeirTranscriptsRelas_0 = [],
			returncentitlementDirtTranscriptsRelas_0 = [],
			returncentitlementBuiltTranscriptsRelas_0 = [],
			returncentitlementDistributionRelas_0 = [],
			returncentitlementThingThirdRelas_0 = [],
			returncentitlementThingDebtRelas_0 = [],
			returncentitlementCoOwnedRelas_0 = [],
			returncentitlementDebtDocRelas_0 = [],
			returncentitlementDetailRelas_0 = [],
			returncentitlementFileRelas_0 = [],
			returncentitlementDebtContinueRelas_0 = [],
			returncentitlementCashierCheckRelas_0 = [],
			returncentitlementOtherRelas_0 = [],
			returncentitlementSourceDoc_0 = [];// 原始憑證
			
		for( ; i <= law.addDoc.centitlement.centitlementRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementCoOwnedTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementCoOwnedTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementCoOwnedTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementCoOwnedTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementMortgageeTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementMortgageeTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementMortgageeTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementMortgageeTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementLawTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementLawTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementLawTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementLawTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementHeirTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementHeirTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementHeirTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementHeirTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementDirtTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementDirtTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementDirtTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementDirtTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementBuiltTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementBuiltTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementBuiltTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementBuiltTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementDistributionRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementDistributionRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementDistributionRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementDistributionRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementThingThirdRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementThingThirdRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementThingThirdRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementThingThirdRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementThingDebtRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementThingDebtRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementThingDebtRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementThingDebtRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementCoOwnedRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementCoOwnedRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementCoOwnedRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementCoOwnedRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementDebtDocRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementDebtDocRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementDebtDocRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementDebtDocRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementDetailRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementDetailRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementDetailRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementDetailRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementFileRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementFileRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementFileRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementFileRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementDebtContinueRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementDebtContinueRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementDebtContinueRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementDebtContinueRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementCashierCheckRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementCashierCheckRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementCashierCheckRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementCashierCheckRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementOtherRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcentitlementOtherRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcentitlementOtherRelationPerson_" + i).find('option:selected').text()
				};
			returncentitlementOtherRelas_0.push(relainfo);
		}
		
		// 原始憑證
		i = 0;
		for( ; i <= law.addDoc.centitlement.centitlementSourceDocNum[0]; i++){
			relainfo = { 
				"centitlementSourceDoc" : $("#iptcentitlementSourceDoc_" + i).find('option:selected').val(),
				"centitlementSourceDocName" : $("#iptcentitlementSourceDoc_" + i).find('option:selected').text(),
				"courtYearCourt"	: $("#iptcentitlementSourceDocCourtYearCourt_" + i).find('option:selected').val(),
				"courtYearCourtName"	: $("#iptcentitlementSourceDocCourtYearCourt_" + i).find('option:selected').text(),
				"courtYearYear"	: $("#iptcentitlementSourceDocCourtYearYear_" + i).val(),
				"courtYearTxt"	: $("#iptcentitlementSourceDocCourtYearTxt_" + i).val(),
				"courtYearShare"	: $("#iptcentitlementSourceDocCourtYearShare_" + i).val(),
				"courtYearCaseId"	: $("#iptcentitlementSourceDocCourtYearCaseId_" + i).val()
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
			'shareCaseId0' : $("#iptcentitlementShareCaseId_0").val(),
			'shareCaseId1' : $("#iptcentitlementShareCaseId_1").val(),
			'shareCaseId2' : $("#iptcentitlementShareCaseId_2").val(),
			'shareCaseId3' : $("#iptcentitlementShareCaseId_3").val(),
			'shadow' : $("#rdocentitlementShadow:checked").val(),
			'receivedDate' : $("#iptcentitlementReceivedDate").val(),
			'bankDate' : $("#iptcentitlementBankDate").val(),
			'docStatus' : $("#iptcentitlementDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptcentitlementTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptcentitlementTypeTwo").find('option:selected').val(),
			'oldBankName' : $("#iptcentitlementOldBankName").find('option:selected').val(),
			'centitlementRelationPerson' : returncentitlementRelas_0,
			'relationPerson' : $("#iptcentitlementRelationPerson_0").find('option:selected').val(),
			'courtYearCourt' : $("#iptcentitlementCourtYearCourt").find('option:selected').val(),
			'courtYearYear' : $("#iptcentitlementCourtYearYear").val(),
			'courtYearTxt' : $("#iptcentitlementCourtYearTxt").val(),
			'courtYearShare' : $("#iptcentitlementCourtYearShare").val(),
			'courtYearCaseId' : $("#iptcentitlementCourtYearCaseId").val(),
			'sendDate' : $("#iptcentitlementSendDate").val(),
			'newSendDate' : $("#iptcentitlementNewSendDate").val(),
			'remark' : $("#iptcentitlementRemark").val(),
			//補正內容 戶謄
			'transcriptsDays' : $("#iptcentitlementTranscriptsDays").val(),
			'transcriptsRemark' : $("#iptcentitlementTranscriptsRemark").val(),
			'centitlementTranscriptsRelationPerson' : returncentitlementTranscriptsRelas_0,
			'transcriptsRelationPerson' : $("#iptcentitlementTranscriptsRelationPerson_0").find('option:selected').val(),
			// 共有人戶謄
			'coOwnedTranscriptsDays' : $("#iptcentitlementCoOwnedTranscriptsDays").val(),
			'coOwnedTranscriptsRemark' : $("#iptcentitlementCoOwnedTranscriptsRemark").val(),
			'centitlementCoOwnedTranscriptsRelationPerson' : returncentitlementCoOwnedTranscriptsRelas_0,
			'coOwnedTranscriptsRelationPerson' : $("#iptcentitlementCoOwnedTranscriptsRelationPerson_0").find('option:selected').val(),
			// 抵押權人戶謄
			'mortgageeTranscriptsDays' : $("#iptcentitlementMortgageeTranscriptsDays").val(),
			'mortgageeTranscriptsRemark' : $("#iptcentitlementMortgageeTranscriptsRemark").val(),
			'centitlementMortgageeTranscriptsRelationPerson' : returncentitlementMortgageeTranscriptsRelas_0,
			'mortgageeTranscriptsRelationPerson' : $("#iptcentitlementMortgageeTranscriptsRelationPerson_0").find('option:selected').val(),
			// 法代戶謄
			'lawTranscriptsDays' : $("#iptcentitlementLawTranscriptsDays").val(),
			'lawTranscriptsRemark' : $("#iptcentitlementLawTranscriptsRemark").val(),
			'centitlementLawTranscriptsRelationPerson' : returncentitlementLawTranscriptsRelas_0,
			'lawTranscriptsRelationPerson' : $("#iptcentitlementLawTranscriptsRelationPerson_0").find('option:selected').val(),
			// 繼承人戶謄
			'heirTranscriptsDays' : $("#iptcentitlementHeirTranscriptsDays").val(),
			'heirTranscriptsRemark' : $("#iptcentitlementHeirTranscriptsRemark").val(),
			'centitlementHeirTranscriptsRelationPerson' : returncentitlementHeirTranscriptsRelas_0,
			'heirTranscriptsRelationPerson' : $("#iptcentitlementHeirTranscriptsRelationPerson_0").find('option:selected').val(),
			// 土謄
			'dirtTranscriptsDays' : $("#iptcentitlementDirtTranscriptsDays").val(),
			'dirtTranscriptsRemark' : $("#iptcentitlementDirtTranscriptsRemark").val(),
			'centitlementDirtTranscriptsRelationPerson' : returncentitlementDirtTranscriptsRelas_0,
			'dirtTranscriptsRelationPerson' : $("#iptcentitlementDirtTranscriptsRelationPerson_0").find('option:selected').val(),
			// 建謄
			'builtTranscriptsDays' : $("#iptcentitlementBuiltTranscriptsDays").val(),
			'builtTranscriptsRemark' : $("#iptcentitlementBuiltTranscriptsRemark").val(),
			'centitlementBuiltTranscriptsRelationPerson' : returncentitlementBuiltTranscriptsRelas_0,
			'builtTranscriptsRelationPerson' : $("#iptcentitlementBuiltTranscriptsRelationPerson_0").find('option:selected').val(),
			// 分配表
			'distributionDays' : $("#iptcentitlementDistributionDays").val(),
			'distributionRemark' : $("#iptcentitlementDistributionRemark").val(),
			'centitlementDistributionRelationPerson' : returncentitlementDistributionRelas_0,
			'distributionRelationPerson' : $("#iptcentitlementDistributionRelationPerson_0").find('option:selected').val(),
			// 事項表(第三人)
			'thingThirdDays' : $("#iptcentitlementThingThirdDays").val(),
			'thingThirdRemark' : $("#iptcentitlementThingThirdRemark").val(),
			'centitlementThingThirdRelationPerson' : returncentitlementThingThirdRelas_0,
			'thingThirdRelationPerson' : $("#iptcentitlementThingThirdRelationPerson_0").find('option:selected').val(),
			// 事項表(債權人)
			'thingDebtDays' : $("#iptcentitlementThingDebtDays").val(),
			'thingDebtRemark' : $("#iptcentitlementThingDebtRemark").val(),
			'centitlementThingDebtRelationPerson' : returncentitlementThingDebtRelas_0,
			'thingDebtRelationPerson' : $("#iptcentitlementThingDebtRelationPerson_0").find('option:selected').val(),
			// 共有人名冊
			'coOwnedDays' : $("#iptcentitlementCoOwnedDays").val(),
			'coOwnedRemark' : $("#iptcentitlementCoOwnedRemark").val(),
			'centitlementCoOwnedRelationPerson' : returncentitlementCoOwnedRelas_0,
			'coOwnedRelationPerson' : $("#iptcentitlementCoOwnedRelationPerson_0").find('option:selected').val(),
			// 債權文件
			'debtDocDays' : $("#iptcentitlementDebtDocDays").val(),
			'debtDocRemark' : $("#iptcentitlementDebtDocRemark").val(),
			'centitlementDebtDocRelationPerson' : returncentitlementDebtDocRelas_0,
			'debtDocRelationPerson' : $("#iptcentitlementDebtDocRelationPerson_0").find('option:selected').val(),
			// 帳務明細
			'detailDays' : $("#iptcentitlementDetailDays").val(),
			'detailRemark' : $("#iptcentitlementDetailRemark").val(),
			'centitlementDetailRelationPerson' : returncentitlementDetailRelas_0,
			'detailRelationPerson' : $("#iptcentitlementDetailRelationPerson_0").find('option:selected').val(),
			// 執行名義
			'fileDays' : $("#iptcentitlementFileDays").val(),
			'fileRemark' : $("#iptcentitlementFileRemark").val(),
			'centitlementFileRelationPerson' : returncentitlementFileRelas_0,
			'fileRelationPerson' : $("#iptcentitlementFileRelationPerson_0").find('option:selected').val(),
			// 債證續行表
			'debtContinueDays' : $("#iptcentitlementDebtContinueDays").val(),
			'debtContinueRemark' : $("#iptcentitlementDebtContinueRemark").val(),
			'centitlementDebtContinueRelationPerson' : returncentitlementDebtContinueRelas_0,
			'debtContinueRelationPerson' : $("#iptcentitlementDebtContinueRelationPerson_0").find('option:selected').val(),
			// 本票
			'cashierCheckDays' : $("#iptcentitlementCashierCheckDays").val(),
			'cashierCheckRemark' : $("#iptcentitlementCashierCheckRemark").val(),
			'centitlementCashierCheckRelationPerson' : returncentitlementCashierCheckRelas_0,
			'cashierCheckRelationPerson' : $("#iptcentitlementCashierCheckRelationPerson_0").find('option:selected').val(),
			// 其他
			'otherValues' : $("#iptcentitlementOtherName").val(),
			'otherDays' : $("#iptcentitlementOtherDays").val(),
			'otherRemark' : $("#iptcentitlementOtherRemark").val(),
			'centitlementOtherRelationPerson' : returncentitlementOtherRelas_0,
			'otherRelationPerson' : $("#iptcentitlementOtherRelationPerson_0").find('option:selected').val(),
			'edit' : $("#iptcentitlementEdit").val(),
			// 原始憑證
			'sourceDoc' : $("#iptcentitlementSourceDoc_0").find('option:selected').val(),
			'centitlementSourceDoc' : returncentitlementSourceDoc_0
		};
			
		centitlement.subItems = [];
		centitlement.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			returncentitlementRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementRelas_0.push(relainfo);
			}
			
			returncentitlementTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementTranscriptsRelas_0.push(relainfo);
			}
			
			returncentitlementCoOwnedTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementCoOwnedTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementCoOwnedTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementCoOwnedTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementCoOwnedTranscriptsRelas_0.push(relainfo);
			}
			
			returncentitlementMortgageeTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementMortgageeTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementMortgageeTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementMortgageeTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementMortgageeTranscriptsRelas_0.push(relainfo);
			}
			
			returncentitlementLawTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementLawTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementLawTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementLawTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementLawTranscriptsRelas_0.push(relainfo);
			}
			
			returncentitlementHeirTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementHeirTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementHeirTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementHeirTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementHeirTranscriptsRelas_0.push(relainfo);
			}
			
			returncentitlementDirtTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementDirtTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementDirtTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementDirtTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementDirtTranscriptsRelas_0.push(relainfo);
			}
			
			returncentitlementBuiltTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementBuiltTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementBuiltTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementBuiltTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementBuiltTranscriptsRelas_0.push(relainfo);
			}
			
			returncentitlementDistributionRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementDistributionRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementDistributionRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementDistributionRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementDistributionRelas_0.push(relainfo);
			}
			
			returncentitlementThingThirdRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementThingThirdRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementThingThirdRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementThingThirdRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementThingThirdRelas_0.push(relainfo);
			}
			
			returncentitlementThingDebtRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementThingDebtRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementThingDebtRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementThingDebtRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementThingDebtRelas_0.push(relainfo);
			}
			
			returncentitlementCoOwnedRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementCoOwnedRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementCoOwnedRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementCoOwnedRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementCoOwnedRelas_0.push(relainfo);
			}
			
			returncentitlementDebtDocRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementDebtDocRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementDebtDocRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementDebtDocRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementDebtDocRelas_0.push(relainfo);
			}
			
			returncentitlementDetailRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementDetailRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementDetailRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementDetailRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementDetailRelas_0.push(relainfo);
			}
			
			returncentitlementFileRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementFileRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementFileRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementFileRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementFileRelas_0.push(relainfo);
			}
			
			returncentitlementDebtContinueRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementDebtContinueRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementDebtContinueRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementDebtContinueRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementDebtContinueRelas_0.push(relainfo);
			}
			
			returncentitlementCashierCheckRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementCashierCheckRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementCashierCheckRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementCashierCheckRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementCashierCheckRelas_0.push(relainfo);
			}
			
			returncentitlementOtherRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementOtherRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcentitlementOtherRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcentitlementOtherRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncentitlementOtherRelas_0.push(relainfo);
			}
			
			// 原始憑證
			returncentitlementSourceDoc_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.centitlement.centitlementSourceDocNum[displayNum]; j++){
				relainfo = { 
					"centitlementSourceDoc" : $("#iptcentitlementSourceDoc" + i + "_" + j).find('option:selected').val(),
					"centitlementSourceDocName" : $("#iptcentitlementSourceDoc" + i + "_" + j).find('option:selected').text(),
					"courtYearCourt"	: $("#iptcentitlementSourceDocCourtYearCourt" + i + "_" + j).find('option:selected').val(),
					"courtYearCourtName"	: $("#iptcentitlementSourceDocCourtYearCourt" + i + "_" + j).find('option:selected').text(),
					"courtYearYear"	: $("#iptcentitlementSourceDocCourtYearYear" + i + "_" + j).val(),
					"courtYearTxt"	: $("#iptcentitlementSourceDocCourtYearTxt" + i + "_" + j).val(),
					"courtYearShare"	: $("#iptcentitlementSourceDocCourtYearShare" + i + "_" + j).val(),
					"courtYearCaseId"	: $("#iptcentitlementSourceDocCourtYearCaseId" + i + "_" + j).val()
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
					'shareCaseId0' : $("#iptcentitlementShareCaseId" + i + "_0").val(),
					'shareCaseId1' : $("#iptcentitlementShareCaseId" + i + "_1").val(),
					'shareCaseId2' : $("#iptcentitlementShareCaseId" + i + "_2").val(),
					'shareCaseId3' : $("#iptcentitlementShareCaseId" + i + "_3").val(),
					'shadow' : $("#rdocentitlementShadow" + i + ":checked").val(),
					'receivedDate' : $("#iptcentitlementReceivedDate" + i ).val(),
					'bankDate' : $("#iptcentitlementBankDate" + i ).val(),
					'docStatus' : $("#iptcentitlementDocStatus" + i ).find('option:selected').val(),
					'typeOne' : $("#iptcentitlementTypeOne" + i ).find('option:selected').val(),
					'typeTwo' : $("#iptcentitlementTypeTwo" + i ).find('option:selected').val(),
					'oldBankName' : $("#iptcentitlementOldBankName" + i ).find('option:selected').val(),
					'centitlementRelationPerson' : returncentitlementRelas_0,
					'relationPerson' : $("#iptcentitlementRelationPerson_0").find('option:selected').val(),
					'courtYearCourt' : $("#iptcentitlementCourtYearCourt" + i ).find('option:selected').val(),
					'courtYearYear' : $("#iptcentitlementCourtYearYear" + i ).val(),
					'courtYearTxt' : $("#iptcentitlementCourtYearTxt" + i ).val(),
					'courtYearShare' : $("#iptcentitlementCourtYearShare" + i ).val(),
					'courtYearCaseId' : $("#iptcentitlementCourtYearCaseId" + i ).val(),
					'sendDate' : $("#iptcentitlementSendDate" + i ).val(),
					'newSendDate' : $("#iptcentitlementNewSendDate" + i ).val(),
					'remark' : $("#iptcentitlementRemark" + i ).val(),
					//補正戶謄
					'transcriptsDays' : $("#iptcentitlementTranscriptsDays" + i ).val(),
					'transcriptsRemark' : $("#iptcentitlementTranscriptsRemark" + i ).val(),
					'centitlementTranscriptsRelationPerson' : returncentitlementTranscriptsRelas_0,
					'transcriptsRelationPerson' : $("#iptcentitlementTranscriptsRelationPerson_0").find('option:selected').val(),
					// 共有人戶謄
					'coOwnedTranscriptsDays' : $("#iptcentitlementCoOwnedTranscriptsDays" + i ).val(),
					'coOwnedTranscriptsRemark' : $("#iptcentitlementCoOwnedTranscriptsRemark" + i ).val(),
					'centitlementCoOwnedTranscriptsRelationPerson' : returncentitlementCoOwnedTranscriptsRelas_0,
					'coOwnedTranscriptsRelationPerson' : $("#iptcentitlementCoOwnedTranscriptsRelationPerson_0").find('option:selected').val(),
					// 抵押權人戶謄
					'mortgageeTranscriptsDays' : $("#iptcentitlementMortgageeTranscriptsDays" + i ).val(),
					'mortgageeTranscriptsRemark' : $("#iptcentitlementMortgageeTranscriptsRemark" + i ).val(),
					'centitlementMortgageeTranscriptsRelationPerson' : returncentitlementMortgageeTranscriptsRelas_0,
					'mortgageeTranscriptsRelationPerson' : $("#iptcentitlementMortgageeTranscriptsRelationPerson_0").find('option:selected').val(),
					// 法代戶謄
					'lawTranscriptsDays' : $("#iptcentitlementLawTranscriptsDays" + i ).val(),
					'lawTranscriptsRemark' : $("#iptcentitlementLawTranscriptsRemark" + i ).val(),
					'centitlementLawTranscriptsRelationPerson' : returncentitlementLawTranscriptsRelas_0,
					'lawTranscriptsRelationPerson' : $("#iptcentitlementLawTranscriptsRelationPerson_0").find('option:selected').val(),
					// 繼承人戶謄
					'heirTranscriptsDays' : $("#iptcentitlementHeirTranscriptsDays" + i ).val(),
					'heirTranscriptsRemark' : $("#iptcentitlementHeirTranscriptsRemark" + i ).val(),
					'centitlementHeirTranscriptsRelationPerson' : returncentitlementHeirTranscriptsRelas_0,
					'heirTranscriptsRelationPerson' : $("#iptcentitlementHeirTranscriptsRelationPerson_0").find('option:selected').val(),
					// 土謄
					'dirtTranscriptsDays' : $("#iptcentitlementDirtTranscriptsDays" + i ).val(),
					'dirtTranscriptsRemark' : $("#iptcentitlementDirtTranscriptsRemark" + i ).val(),
					'centitlementDirtTranscriptsRelationPerson' : returncentitlementDirtTranscriptsRelas_0,
					'dirtTranscriptsRelationPerson' : $("#iptcentitlementDirtTranscriptsRelationPerson_0").find('option:selected').val(),
					// 建謄
					'builtTranscriptsDays' : $("#iptcentitlementBuiltTranscriptsDays" + i ).val(),
					'builtTranscriptsRemark' : $("#iptcentitlementBuiltTranscriptsRemark" + i ).val(),
					'centitlementBuiltTranscriptsRelationPerson' : returncentitlementBuiltTranscriptsRelas_0,
					'builtTranscriptsRelationPerson' : $("#iptcentitlementBuiltTranscriptsRelationPerson_0").find('option:selected').val(),
					// 分配表
					'distributionDays' : $("#iptcentitlementDistributionDays" + i ).val(),
					'distributionRemark' : $("#iptcentitlementDistributionRemark" + i ).val(),
					'centitlementDistributionRelationPerson' : returncentitlementDistributionRelas_0,
					'distributionRelationPerson' : $("#iptcentitlementDistributionRelationPerson_0").find('option:selected').val(),
					// 事項表(第三人)
					'thingThirdDays' : $("#iptcentitlementThingThirdDays" + i ).val(),
					'thingThirdRemark' : $("#iptcentitlementThingThirdRemark" + i ).val(),
					'centitlementThingThirdRelationPerson' : returncentitlementThingThirdRelas_0,
					'thingThirdRelationPerson' : $("#iptcentitlementThingThirdRelationPerson_0").find('option:selected').val(),
					// 事項表(債權人)
					'thingDebtDays' : $("#iptcentitlementThingDebtDays" + i ).val(),
					'thingDebtRemark' : $("#iptcentitlementThingDebtRemark" + i ).val(),
					'centitlementThingDebtRelationPerson' : returncentitlementThingDebtRelas_0,
					'thingDebtRelationPerson' : $("#iptcentitlementThingDebtRelationPerson_0").find('option:selected').val(),
					// 共有人名冊
					'coOwnedDays' : $("#iptcentitlementCoOwnedDays" + i ).val(),
					'coOwnedRemark' : $("#iptcentitlementCoOwnedRemark" + i ).val(),
					'centitlementCoOwnedRelationPerson' : returncentitlementCoOwnedRelas_0,
					'coOwnedRelationPerson' : $("#iptcentitlementCoOwnedRelationPerson_0").find('option:selected').val(),
					// 債權文件
					'debtDocDays' : $("#iptcentitlementDebtDocDays" + i ).val(),
					'debtDocRemark' : $("#iptcentitlementDebtDocRemark" + i ).val(),
					'centitlementDebtDocRelationPerson' : returncentitlementDebtDocRelas_0,
					'debtDocRelationPerson' : $("#iptcentitlementDebtDocRelationPerson_0").find('option:selected').val(),
					// 帳務明細
					'detailDays' : $("#iptcentitlementDetailDays" + i ).val(),
					'detailRemark' : $("#iptcentitlementDetailRemark" + i ).val(),
					'centitlementDetailRelationPerson' : returncentitlementDetailRelas_0,
					'detailRelationPerson' : $("#iptcentitlementDetailRelationPerson_0").find('option:selected').val(),
					// 執行名義
					'fileDays' : $("#iptcentitlementFileDays" + i ).val(),
					'fileRemark' : $("#iptcentitlementFileRemark" + i ).val(),
					'centitlementFileRelationPerson' : returncentitlementFileRelas_0,
					'fileRelationPerson' : $("#iptcentitlementFileRelationPerson_0").find('option:selected').val(),
					// 債證續行表
					'debtContinueDays' : $("#iptcentitlementDebtContinueDays" + i ).val(),
					'debtContinueRemark' : $("#iptcentitlementDebtContinueRemark" + i ).val(),
					'centitlementDebtContinueRelationPerson' : returncentitlementDebtContinueRelas_0,
					'debtContinueRelationPerson' : $("#iptcentitlementDebtContinueRelationPerson_0").find('option:selected').val(),
					// 本票
					'cashierCheckDays' : $("#iptcentitlementCashierCheckDays" + i ).val(),
					'cashierCheckRemark' : $("#iptcentitlementCashierCheckRemark" + i ).val(),
					'centitlementCashierCheckRelationPerson' : returncentitlementCashierCheckRelas_0,
					'cashierCheckRelationPerson' : $("#iptcentitlementCashierCheckRelationPerson_0").find('option:selected').val(),
					// 其他
					'otherValues' : $("#iptcentitlementOtherName" + i).val(),
					'otherDays' : $("#iptcentitlementOtherDays" + i ).val(),
					'otherRemark' : $("#iptcentitlementOtherRemark" + i ).val(),
					'centitlementOtherRelationPerson' : returncentitlementOtherRelas_0,
					'otherRelationPerson' : $("#iptcentitlementOtherRelationPerson_0").find('option:selected').val(),
					'edit' : $("#iptcentitlementEdit" + i ).val(),
					// 原始憑證
					'sourceDoc' : $("#iptcentitlementSourceDoc_0").find('option:selected').val(),
					'centitlementSourceDoc' : returncentitlementSourceDoc_0
			};
			centitlement.subItems.push(subItems);
		}

		returncentitlement = JSON.stringify(centitlement.subItems);
		return returncentitlement;
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
    
 	law.addDoc.centitlement.controlcentitlementEditCKB(0);
})();
// 執行名義 end	
	