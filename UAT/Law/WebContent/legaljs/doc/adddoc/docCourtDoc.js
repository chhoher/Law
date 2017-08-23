/**
 * Add By Jia 2017-07-14 docCourtDoc.js 實作addDoc.jsp 法院文的部分 
 */
 
// 執行名義 start
law.addDoc.courtDoc = {
	courtDocsubtabcount : 0,
	courtDocactivesubtabcount : 0,
	courtDocsubtabs : $("#courtDocsubtabs").tabs(),
	courtDocexistsubtabs : [],
	courtDocRelaNum : [],
	// 補正相對人Num
	courtDocTranscriptsRelaNum : [],
	courtDocCoOwnedTranscriptsRelaNum : [],
	courtDocMortgageeTranscriptsRelaNum : [],
	courtDocLawTranscriptsRelaNum : [],
	courtDocHeirTranscriptsRelaNum : [],
	courtDocDirtTranscriptsRelaNum : [],
	courtDocBuiltTranscriptsRelaNum : [],
	courtDocDistributionRelaNum : [],
	courtDocThingThirdRelaNum : [],
	courtDocThingDebtRelaNum : [],
	courtDocCoOwnedRelaNum : [],
	courtDocDebtDocRelaNum : [],
	courtDocDetailRelaNum : [],
	courtDocFileRelaNum : [],
	courtDocDebtContinueRelaNum : [],
	courtDocCashierCheckRelaNum : [],
	courtDocRecoveryRelaNum : [],
	courtDocOtherRelaNum : [],
	// 新增相對人
	addcourtDocRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocRelaNum[num])){
			courtDoc.courtDocRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocRelationPerson" + displaynum + "_" + courtDoc.courtDocRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocRelationPersonId" + displaynum + "_" + courtDoc.courtDocRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#iptcourtDocRelationPersonTr" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocRelationPerson" + displaynum + "_" + courtDoc.courtDocRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增戶謄補正的相對人
	addcourtDocTranscriptsRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocTranscriptsRelaNum[num])){
			courtDoc.courtDocTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocTranscriptsRelationPersonId" + displaynum + "_" + courtDoc.courtDocTranscriptsRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocTranscriptsRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增共有人戶謄補正的相對人
	addcourtDocCoOwnedTranscriptsRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocCoOwnedTranscriptsRelaNum[num])){
			courtDoc.courtDocCoOwnedTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocCoOwnedTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocCoOwnedTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocCoOwnedTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocCoOwnedTranscriptsRelationPersonId" + displaynum + "_" + courtDoc.courtDocCoOwnedTranscriptsRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocCoOwnedTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocCoOwnedTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocCoOwnedTranscriptsRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增抵押權人戶謄補正的相對人
	addcourtDocMortgageeTranscriptsRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocMortgageeTranscriptsRelaNum[num])){
			courtDoc.courtDocMortgageeTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocMortgageeTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocMortgageeTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocMortgageeTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocMortgageeTranscriptsRelationPersonId" + displaynum + "_" + courtDoc.courtDocMortgageeTranscriptsRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocMortgageeTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocMortgageeTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocMortgageeTranscriptsRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增法代戶謄補正的相對人
	addcourtDocLawTranscriptsRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocLawTranscriptsRelaNum[num])){
			courtDoc.courtDocLawTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocLawTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocLawTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocLawTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocLawTranscriptsRelationPersonId" + displaynum + "_" + courtDoc.courtDocLawTranscriptsRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocLawTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocLawTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocLawTranscriptsRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增繼承人戶謄補正的相對人
	addcourtDocHeirTranscriptsRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocHeirTranscriptsRelaNum[num])){
			courtDoc.courtDocHeirTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocHeirTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocHeirTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocHeirTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocHeirTranscriptsRelationPersonId" + displaynum + "_" + courtDoc.courtDocHeirTranscriptsRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocHeirTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocHeirTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocHeirTranscriptsRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增土謄補正的相對人
	addcourtDocDirtTranscriptsRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocDirtTranscriptsRelaNum[num])){
			courtDoc.courtDocDirtTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocDirtTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocDirtTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocDirtTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocDirtTranscriptsRelationPersonId" + displaynum + "_" + courtDoc.courtDocDirtTranscriptsRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocDirtTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDirtTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocDirtTranscriptsRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增建謄補正的相對人
	addcourtDocBuiltTranscriptsRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocBuiltTranscriptsRelaNum[num])){
			courtDoc.courtDocBuiltTranscriptsRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocBuiltTranscriptsRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocBuiltTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocBuiltTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocBuiltTranscriptsRelationPersonId" + displaynum + "_" + courtDoc.courtDocBuiltTranscriptsRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocBuiltTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocBuiltTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocBuiltTranscriptsRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增分配表補正的相對人
	addcourtDocDistributionRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocDistributionRelaNum[num])){
			courtDoc.courtDocDistributionRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocDistributionRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocDistributionRelationPerson" + displaynum + "_" + courtDoc.courtDocDistributionRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocDistributionRelationPersonId" + displaynum + "_" + courtDoc.courtDocDistributionRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocDistribution" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDistributionRelationPerson" + displaynum + "_" + courtDoc.courtDocDistributionRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增事項表(第三人)補正的相對人
	addcourtDocThingThirdRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocThingThirdRelaNum[num])){
			courtDoc.courtDocThingThirdRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocThingThirdRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocThingThirdRelationPerson" + displaynum + "_" + courtDoc.courtDocThingThirdRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocThingThirdRelationPersonId" + displaynum + "_" + courtDoc.courtDocThingThirdRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocThingThird" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocThingThirdRelationPerson" + displaynum + "_" + courtDoc.courtDocThingThirdRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增事項表(債權人)補正的相對人
	addcourtDocThingDebtRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocThingDebtRelaNum[num])){
			courtDoc.courtDocThingDebtRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocThingDebtRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocThingDebtRelationPerson" + displaynum + "_" + courtDoc.courtDocThingDebtRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocThingDebtRelationPersonId" + displaynum + "_" + courtDoc.courtDocThingDebtRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocThingDebt" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocThingDebtRelationPerson" + displaynum + "_" + courtDoc.courtDocThingDebtRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增共有人名冊補正的相對人
	addcourtDocCoOwnedRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocCoOwnedRelaNum[num])){
			courtDoc.courtDocCoOwnedRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocCoOwnedRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocCoOwnedRelationPerson" + displaynum + "_" + courtDoc.courtDocCoOwnedRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocCoOwnedRelationPersonId" + displaynum + "_" + courtDoc.courtDocCoOwnedRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocCoOwned" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocCoOwnedRelationPerson" + displaynum + "_" + courtDoc.courtDocCoOwnedRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增債權文件補正的相對人
	addcourtDocDebtDocRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocDebtDocRelaNum[num])){
			courtDoc.courtDocDebtDocRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocDebtDocRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocDebtDocRelationPerson" + displaynum + "_" + courtDoc.courtDocDebtDocRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocDebtDocRelationPersonId" + displaynum + "_" + courtDoc.courtDocDebtDocRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocDebtDoc" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDebtDocRelationPerson" + displaynum + "_" + courtDoc.courtDocDebtDocRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增帳務明細補正的相對人
	addcourtDocDetailRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocDetailRelaNum[num])){
			courtDoc.courtDocDetailRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocDetailRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocDetailRelationPerson" + displaynum + "_" + courtDoc.courtDocDetailRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocDetailRelationPersonId" + displaynum + "_" + courtDoc.courtDocDetailRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocDetail" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDetailRelationPerson" + displaynum + "_" + courtDoc.courtDocDetailRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增執名附件補正的相對人
	addcourtDocFileRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocFileRelaNum[num])){
			courtDoc.courtDocFileRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocFileRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocFileRelationPerson" + displaynum + "_" + courtDoc.courtDocFileRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocFileRelationPersonId" + displaynum + "_" + courtDoc.courtDocFileRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocFile" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocFileRelationPerson" + displaynum + "_" + courtDoc.courtDocFileRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增債證續行表補正的相對人
	addcourtDocDebtContinueRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocDebtContinueRelaNum[num])){
			courtDoc.courtDocDebtContinueRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocDebtContinueRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocDebtContinueRelationPerson" + displaynum + "_" + courtDoc.courtDocDebtContinueRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocDebtContinueRelationPersonId" + displaynum + "_" + courtDoc.courtDocDebtContinueRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocDebtContinue" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDebtContinueRelationPerson" + displaynum + "_" + courtDoc.courtDocDebtContinueRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增本票補正的相對人
	addcourtDocCashierCheckRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocCashierCheckRelaNum[num])){
			courtDoc.courtDocCashierCheckRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocCashierCheckRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocCashierCheckRelationPerson" + displaynum + "_" + courtDoc.courtDocCashierCheckRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocCashierCheckRelationPersonId" + displaynum + "_" + courtDoc.courtDocCashierCheckRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocCashierCheck" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocCashierCheckRelationPerson" + displaynum + "_" + courtDoc.courtDocCashierCheckRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增回復所有權登記補正的相對人
	addcourtDocRecoveryRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocRecoveryRelaNum[num])){
			courtDoc.courtDocRecoveryRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocRecoveryRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocRecoveryRelationPerson" + displaynum + "_" + courtDoc.courtDocRecoveryRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocRecoveryRelationPersonId" + displaynum + "_" + courtDoc.courtDocRecoveryRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocRecovery" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocRecoveryRelationPerson" + displaynum + "_" + courtDoc.courtDocRecoveryRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// 新增其它補正的相對人
	addcourtDocOtherRelaTd : function(num){
		var courtDoc = law.addDoc.courtDoc;
		var tdString = ""; 
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		
		if(isNaN(courtDoc.courtDocOtherRelaNum[num])){
			courtDoc.courtDocOtherRelaNum[num] = 0;
		}
		
		law.addDoc.courtDoc.courtDocOtherRelaNum[num] ++ ;
		
		tdString = "<td><label>相對人</label></td>" +
				"<td><select id='iptcourtDocOtherRelationPerson" + displaynum + "_" + courtDoc.courtDocOtherRelaNum[num] + "'><option value=''>請選擇</option></select>" +
						"<input id='iptcourtDocOtherRelationPersonId" + displaynum + "_" + courtDoc.courtDocOtherRelaNum[num] + "' style='display:none'></input></td>";
					
		$("#trcourtDocOther" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocOtherRelationPerson" + displaynum + "_" + courtDoc.courtDocOtherRelaNum[num], law.addDoc.rela, undefined, true);
	},
	// add by Jia 2017-07-14 法院文補正的勾勾控制
	controlcourtDocEditCKB : function(num){
		var displaynum = "";
		
		if(num !== 0 ){
			displaynum = num - 1;	
		}else{
			displaynum = "";
		}
		//Add By Jia 2017-07-14 控制checkbox有沒有要顯示補正下列填寫項目 start
	    $("#ckbcourtDocAll" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    		$("#ckbcourtDocTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocCoOwnedTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocMortgageeTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocLawTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocHeirTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocDirtTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocBuiltTranscripts" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocDistribution" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocThingThird" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocThingDebt" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocCoOwned" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocDebtDoc" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocDetail" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocFile" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocDebtContinue" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocCashierCheck" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocRecovery" + displaynum).prop("checked", false);
	    		$("#ckbcourtDocOther" + displaynum).prop("checked", false);
	    		
	    		$("#trcourtDocTranscripts" + displaynum).show();
	    		$("#trcourtDocCoOwnedTranscripts" + displaynum).show();
	    		$("#trcourtDocMortgageeTranscripts" + displaynum).show();
	    		$("#trcourtDocLawTranscripts" + displaynum).show();
	    		$("#trcourtDocHeirTranscripts" + displaynum).show();
	    		$("#trcourtDocDirtTranscripts" + displaynum).show();
	    		$("#trcourtDocBuiltTranscripts" + displaynum).show();
	    		$("#trcourtDocDistribution" + displaynum).show();
	    		$("#trcourtDocThingThird" + displaynum).show();
	    		$("#trcourtDocThingDebt" + displaynum).show();
	    		$("#trcourtDocCoOwned" + displaynum).show();
	    		$("#trcourtDocDebtDoc" + displaynum).show();
	    		$("#trcourtDocDetail" + displaynum).show();
	    		$("#trcourtDocFile" + displaynum).show();
	    		$("#trcourtDocDebtContinue" + displaynum).show();
	    		$("#trcourtDocCashierCheck" + displaynum).show();
	    		$("#trcourtDocRecovery" + displaynum).show();
	    		$("#trcourtDocOther" + displaynum).show();
	    	}else{
	    		$("#trcourtDocTranscripts" + displaynum).hide();
	    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
	    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
	    		$("#trcourtDocLawTranscripts" + displaynum).hide();
	    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
	    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
	    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
	    		$("#trcourtDocDistribution" + displaynum).hide();
	    		$("#trcourtDocThingThird" + displaynum).hide();
	    		$("#trcourtDocThingDebt" + displaynum).hide();
	    		$("#trcourtDocCoOwned" + displaynum).hide();
	    		$("#trcourtDocDebtDoc" + displaynum).hide();
	    		$("#trcourtDocDetail" + displaynum).hide();
	    		$("#trcourtDocFile" + displaynum).hide();
	    		$("#trcourtDocDebtContinue" + displaynum).hide();
	    		$("#trcourtDocCashierCheck" + displaynum).hide();
	    		$("#trcourtDocRecovery" + displaynum).hide();
	    		$("#trcourtDocOther" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocTranscripts" + displaynum).is(':checked')){
	    		
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcourtDocTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocCoOwnedTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocCoOwnedTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocCoOwnedTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocMortgageeTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocMortgageeTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocMortgageeTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocLawTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocLawTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocLawTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcourtDocLawTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocHeirTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocHeirTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocHeirTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocDirtTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocDirtTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocDirtTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocBuiltTranscripts" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocBuiltTranscripts" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocBuiltTranscripts" + displaynum).show();
	    	}else{
	    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocDistribution" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocDistribution" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocDistribution" + displaynum).show();
	    	}else{
	    		$("#trcourtDocDistribution" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocThingThird" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocThingThird" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocThingThird" + displaynum).show();
	    	}else{
	    		$("#trcourtDocThingThird" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocThingDebt" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocThingDebt" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocThingDebt" + displaynum).show();
	    	}else{
	    		$("#trcourtDocThingDebt" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocCoOwned" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocCoOwned" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocCoOwned" + displaynum).show();
	    	}else{
	    		$("#trcourtDocCoOwned" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocDebtDoc" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocDebtDoc" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocDebtDoc" + displaynum).show();
	    	}else{
	    		$("#trcourtDocDebtDoc" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocDetail" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocDetail" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocDetail" + displaynum).show();
	    	}else{
	    		$("#trcourtDocDetail" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocFile" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocFile" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocFile" + displaynum).show();
	    	}else{
	    		$("#trcourtDocFile" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocDebtContinue" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocDebtContinue" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocDebtContinue" + displaynum).show();
	    	}else{
	    		$("#trcourtDocDebtContinue" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocCashierCheck" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocCashierCheck" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocCashierCheck" + displaynum).show();
	    	}else{
	    		$("#trcourtDocCashierCheck" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocRecovery" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocRecovery" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocRecovery" + displaynum).show();
	    	}else{
	    		$("#trcourtDocRecovery" + displaynum).hide();
	    	}
	    });
	    $("#ckbcourtDocOther" + displaynum).on( "click", function(){
	    	if($("#ckbcourtDocOther" + displaynum).is(':checked')){
	
	    		if($("#ckbcourtDocAll" + displaynum).is(':checked')){
	    			$("#ckbcourtDocAll" + displaynum).prop("checked", false);
		    		
		    		$("#trcourtDocTranscripts" + displaynum).hide();
		    		$("#trcourtDocCoOwnedTranscripts" + displaynum).hide();
		    		$("#trcourtDocMortgageeTranscripts" + displaynum).hide();
		    		$("#trcourtDocLawTranscripts" + displaynum).hide();
		    		$("#trcourtDocHeirTranscripts" + displaynum).hide();
		    		$("#trcourtDocDirtTranscripts" + displaynum).hide();
		    		$("#trcourtDocBuiltTranscripts" + displaynum).hide();
		    		$("#trcourtDocDistribution" + displaynum).hide();
		    		$("#trcourtDocThingThird" + displaynum).hide();
		    		$("#trcourtDocThingDebt" + displaynum).hide();
		    		$("#trcourtDocCoOwned" + displaynum).hide();
		    		$("#trcourtDocDebtDoc" + displaynum).hide();
		    		$("#trcourtDocDetail" + displaynum).hide();
		    		$("#trcourtDocFile" + displaynum).hide();
		    		$("#trcourtDocDebtContinue" + displaynum).hide();
		    		$("#trcourtDocCashierCheck" + displaynum).hide();
		    		$("#trcourtDocRecovery" + displaynum).hide();
		    		$("#trcourtDocOther" + displaynum).hide();
		    	}
	    		
	    		$("#trcourtDocOther" + displaynum).show();
	    	}else{
	    		$("#trcourtDocOther" + displaynum).hide();
	    	}
	    });
	  //Add By Jia 2017-07-03 控制checkbox有沒有要顯示補正下列填寫項目 end
	},
	addcourtDocsubtab : function(){
		var courtDoc = law.addDoc.courtDoc;
		var courtDocsubtabcount = courtDoc.courtDocsubtabcount;
		var courtDocactivesubtabcount = courtDoc.courtDocactivesubtabcount;
		var courtDocsubtabs = courtDoc.courtDocsubtabs;
		var tabTitle = "法院文";
		var tabId = "tabs-" + courtDocsubtabcount;
		var tabTemplate = "<li id='licourtDoctab_" + courtDocsubtabcount + "'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));
		var subtabContentHtml = "<table>" +
					"<tr style='display:none'><td><input id='iptcourtDocDocType" + courtDocsubtabcount + "'></input><input id='iptcourtDocDocId" + courtDocsubtabcount + "'></input></td></tr>" +
	           	 	"<tr>" +
						"<td><label>共用案號</label></td>" +
						"<td><input id='iptcourtDocShareCaseId" + courtDocsubtabcount + "_0'></input></td>" +
						"<td><input id='iptcourtDocShareCaseId" + courtDocsubtabcount + "_1'></input></td>" +
						"<td><input id='iptcourtDocShareCaseId" + courtDocsubtabcount + "_2'></input></td>" +
						"<td><input id='iptcourtDocShareCaseId" + courtDocsubtabcount + "_3'></input></td>" +
					"</tr>" +
				"</table>" +
				"<table>" +
	           	 	"<tr>" +
						"<td><input type='radio' name='courtDocShadow" + courtDocsubtabcount + "' value='0' id='rdocourtDocShadow" + courtDocsubtabcount + "' >影本</td>" +
						"<td><input type='radio' name='courtDocShadow" + courtDocsubtabcount + "' value='1' id='rdocourtDocShadowBank" + courtDocsubtabcount + "' >業主收文僅提供影本" +
							"<button onclick='law.common.unchecked(\"rdocourtDocShadow" + courtDocsubtabcount + "\", \"rdocourtDocShadowBank" + courtDocsubtabcount + "\")'>X</button></td>" +
						"<td><label style='color:red'>*文件狀態</label></td>" +
						"<td><select id='iptcourtDocDocStatus" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"</tr>" +
					"<tr>" +
						"<td><label>業主調件日</label></td>" +
						"<td><input id='iptcourtDocBankDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label style='color:red'>*收文日期</label></td>" +
						"<td><input id='iptcourtDocReceivedDate" + courtDocsubtabcount + "' ></input></td>" +
					"</tr>" +
					"<tr>" +
						"<td><label style='color:red'>*文件類別</label></td>" +
						"<td><select id='iptcourtDocTypeOne" + courtDocsubtabcount + "' ><option value=''>請選擇</option></select></td>" +
						"<td><label style='color:red'>*文件項目</label></td>" +
						"<td><select id='iptcourtDocTypeTwo" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
						"<td><label style='color:red'>*債權人</label></td>" +
						"<td><select id='iptcourtDocBankName" + courtDocsubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
						"<td><label>原債權人</label></td>" +
						"<td><select id='iptcourtDocOldBankName" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"</tr>" +
				"</table>" +
				"<table>" +
					"<tr id='iptcourtDocRelationPersonTr" + courtDocsubtabcount + "'>" +
						"<td><label style='color:red'>*相對人</label></td>" +
						"<td><select id='iptcourtDocRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
								"<input id='iptcourtDocRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
						"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
					"</tr>" +
				"</table>" +
				"<table style='background-color:#FFEBCD;'>" +
					"<tr>" +
						"<td><label style='color:red'>*法院年字案股</label></td>" +
						"<td><select id='iptcourtDocCourtYearCourt" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
						"<td><label>年度</label></td>" +
						"<td><input id='iptcourtDocCourtYearYear" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
						"<td><label>字</label></td>" +
						"<td><input id='iptcourtDocCourtYearTxt" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
						"<td><label>股別</label></td>" +
						"<td><input id='iptcourtDocCourtYearShare" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
						"<td><label>案號</label></td>" +
						"<td><input id='iptcourtDocCourtYearCaseId" + courtDocsubtabcount + "' style='width : 60px'></input></td>" +
					"</tr>" +
				"</table>" +
				"<table>" +
					"<tr>" +
						"<td><label>收到裁定日</label></td>" +
						"<td><input id='iptcourtDocRuledDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>裁定金額</label></td>" +
						"<td><input id='iptcourtDocRuledAmount" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>聲請確證日</label></td>" +
						"<td><input id='iptcourtDocApplyConfirmationDate" + courtDocsubtabcount + "' ></input></td>" +
					"</tr>" +
					"<tr>" +
						"<td><label>收確證日</label></td>" +
						"<td><input id='iptcourtDocReceivedConfirmationDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>失效日</label></td>" +
						"<td><input id='iptcourtDocFailureDate" + courtDocsubtabcount + "' ></input></td>" +
					"</tr>" +
				"</table>" +
				"<table>" +
					"<tr>" +
						"<td><label>扣薪第三人(25字)</label></td>" +
						"<td><input id='iptcourtDocApplyLawThird" + courtDocsubtabcount + "'   style='width : 400px'></input></td>" +
						"<td><label>扣薪第三人地址(30字)</label></td>" +
						"<td><input id='iptcourtDocAddAddress" + courtDocsubtabcount + "' style='width : 500px'></input></td>" +
					"</tr>" +
				"</table>" +
				"<table style='background-color:#8FBC8F;'>" +
					"<tr>" +
						"<td><label>分配金額</label></td>" +
						"<td><input id='iptcourtDocDistributionAmount" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>核准暫緩日</label></td>" +
						"<td><input id='iptcourtDocApprovedDelayDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>暫緩到期日</label></td>" +
						"<td><input id='iptcourtDocDelayEndDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>查封指界日</label></td>" +
						"<td><input id='iptcourtDocSectorDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>測量日</label></td>" +
						"<td><input id='iptcourtDocMeasureDate" + courtDocsubtabcount + "' ></input></td>" +
					"</tr>" +
					"<tr>" +
						"<td><label>鑑價日</label></td>" +
						"<td><input id='iptcourtDocValuationDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>複丈日</label></td>" +
						"<td><input id='iptcourtDocRebirthDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>履勘日</label></td>" +
						"<td><input id='iptcourtDocSurveyDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>詢價日</label></td>" +
						"<td><input id='iptcourtDocInquiryDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>一拍日</label></td>" +
						"<td><input id='iptcourtDocFirstSaleDate" + courtDocsubtabcount + "' ></input></td>" +
					"</tr>" +
					"<tr>" +
						"<td><label>二拍日</label></td>" +
						"<td><input id='iptcourtDocSecondSaleDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>三拍日</label></td>" +
						"<td><input id='iptcourtDocThirdSaleDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>公告應買日</label></td>" +
						"<td><input id='iptcourtDocPostBuyDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>公告到期日</label></td>" +
						"<td><input id='iptcourtDocPostEndDate" + courtDocsubtabcount + "' ></input></td>" +
					"</tr>" +
					"<tr>" +
						"<td><label>減拍日</label></td>" +
						"<td><input id='iptcourtDocReduceSaleDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>塗銷登記日</label></td>" +
						"<td><input id='iptcourtDocDestoryDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>實際分配日</label></td>" +
						"<td><input id='iptcourtDocRealDistributionDate" + courtDocsubtabcount + "' ></input></td>" +
					"</tr>" +
				"</table>" +
				"<table>" +
					"<tr>" +
						"<td><label>進度</label></td>" +
						"<td><input id='iptcourtDocProgress" + courtDocsubtabcount + "' style='width : 900px'></input></td>" +
					"</tr>" +
					"<tr>" +
						"<td><label>備註</label></td>" +
						"<td><input id='iptcourtDocRemark" + courtDocsubtabcount + "' style='width : 900px'></input></td>" +
					"</tr>" +
				"</table>" +
				"<div style='overflow: auto;margin:5px 5px 5px 5px' class='ui-widget-content'>" +
					"<div style='overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;' align='center'>陳報</div>" +
		       	 	"<table>" +
		           	 	"<tr>" +
		           	 		"<td><label>申報債權-文到</label></td>" +
							"<td><input id='iptcourtDocApplyDebtDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
							"<td><label>日內</label></td>" +
		           	 		"<td><label>受償情形-文到</label></td>" +
							"<td><input id='iptcourtDocRepayDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
							"<td><label>日內</label></td>" +
							"<td><label>使用情形-文到</label></td>" +
							"<td><input id='iptcourtDocUseDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
							"<td><label>日內</label></td>" +
							"<td><label>陳報意見-文到</label></td>" +
							"<td><input id='iptcourtDocOpinionDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
							"<td><label>日內</label></td>" +
							"<td><label>匯款帳戶-文到</label></td>" +
							"<td><input id='iptcourtDocAccountDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
							"<td><label>日內</label></td>" +
		           	 	"</tr>" +
		           	 "</table>" +
		           	 "<table>" +
		           	 	"<tr>" +
		           	 		"<td><label>陳報匯款入帳聲請書-文到</label></td>" +
							"<td><input id='iptcourtDocPleaseDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
							"<td><label>日內</label></td>" +
		           	 		"<td><label>陳報其他</label></td>" +
							"<td><input id='iptcourtDocReportOther" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>文到</label></td>" +
							"<td><input id='iptcourtDocReportOtherDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
							"<td><label>日內</label></td>" +
		           	 	"</tr>" +
	           	 	"</table>" +
		           	 "<table>" +
		           	 	"<tr>" +
		           	 		"<td><label>陳報說明</label></td>" +
							"<td><input id='iptcourtDocReportDescription" + courtDocsubtabcount + "' ></input></td>" +
		           	 	"</tr>" +
		           	 "</table>" +
	           	"</div>" +
				"<div style='overflow: auto;margin:5px 5px 5px 5px' class='ui-widget-content'>" +
					"<div style='overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;' align='center'>補正</div>" +
		           	 "<table>" +
		           	 	"<tr>" +
		           	 		"<td>" +
		           	 			"<div style='overflow: auto;margin:5px 5px 5px 5px' class='ui-widget-content'>" +
				           	 		"<div>" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='all' id='ckbcourtDocAll" + courtDocsubtabcount + "' checked>全選" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocTranscripts" + courtDocsubtabcount + "'>戶謄" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='coOwnedTranscripts' id='ckbcourtDocCoOwnedTranscripts" + courtDocsubtabcount + "'>共有人戶謄" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='mortgageeTranscripts' id='ckbcourtDocMortgageeTranscripts" + courtDocsubtabcount + "'>抵押權人戶謄" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='lawTranscripts' id='ckbcourtDocLawTranscripts" + courtDocsubtabcount + "'>法代戶謄" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='heirTranscripts' id='ckbcourtDocHeirTranscripts" + courtDocsubtabcount + "'>繼承人戶謄" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='dirtTranscripts' id='ckbcourtDocDirtTranscripts" + courtDocsubtabcount + "'>土謄" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='builtTranscripts' id='ckbcourtDocBuiltTranscripts" + courtDocsubtabcount + "'>建謄" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='distribution' id='ckbcourtDocDistribution" + courtDocsubtabcount + "'>分配表" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='thingThird' id='ckbcourtDocThingThird" + courtDocsubtabcount + "'>事項表(第三人)" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='thingDebt' id='ckbcourtDocThingDebt" + courtDocsubtabcount + "'>事項表(債權人)" +
									"</div>" +
									"<div>" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='coOwned' id='ckbcourtDocCoOwned" + courtDocsubtabcount + "'>共有人名冊" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='debtDoc' id='ckbcourtDocDebtDoc" + courtDocsubtabcount + "'>債權文件" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='detail' id='ckbcourtDocDetail" + courtDocsubtabcount + "'>帳務明細" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='file' id='ckbcourtDocFile" + courtDocsubtabcount + "'>執名附件" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='debtContinue' id='ckbcourtDocDebtContinue" + courtDocsubtabcount + "'>債證續行表" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='cashierCheck' id='ckbcourtDocCashierCheck" + courtDocsubtabcount + "'>本票" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='recovery' id='ckbcourtDocRecovery" + courtDocsubtabcount + "'>回復所有權登記" +
										"<input type='checkbox' name='ckbcourtDoc" + courtDocsubtabcount + "' value='other' id='ckbcourtDocOther" + courtDocsubtabcount + "'>其它" +
									"</div>" +
								"</div>" +
							"</td>" +
		           	 	"</tr>" +
		           	 "</table>" +
		           	 "<table>" +
		           	 	"<tr id='trcourtDocTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocTranscriptsSub" + courtDocsubtabcount + "'>戶謄</td>" +
		           	 		"<td><input id='iptcourtDocTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 		"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocTranscriptsRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocTranscriptsRelaTd(" + ( courtDocsubtabcount + 1 ) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocCoOwnedTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocCoOwnedTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocCoOwnedTranscriptsSub" + courtDocsubtabcount + "'>共有人戶謄</td>" +
							"<td><input id='iptcourtDocCoOwnedTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocCoOwnedTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocCoOwnedTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocCoOwnedTranscriptsRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocCoOwnedTranscriptsRelaTd(" + (courtDocsubtabcount + 1 ) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocMortgageeTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocMortgageeTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocMortgageeTranscriptsSub" + courtDocsubtabcount + "'>抵押權人戶謄</td>" +
							"<td><input id='iptcourtDocMortgageeTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocMortgageeTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocMortgageeTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocMortgageeTranscriptsRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocMortgageeTranscriptsRelaTd(" + (courtDocsubtabcount +1 ) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocLawTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocLawTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocLawTranscriptsSub" + courtDocsubtabcount + "'>法代戶謄</td>" +
							"<td><input id='iptcourtDocLawTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocLawTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocLawTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocLawTranscriptsRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocLawTranscriptsRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocHeirTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocHeirTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocHeirTranscriptsSub" + courtDocsubtabcount + "'>繼承人戶謄</td>" +
							"<td><input id='iptcourtDocHeirTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocHeirTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocHeirTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocHeirTranscriptsRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocHeirTranscriptsRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		           	 	"</tr>" +
		        	 	"<tr id='trcourtDocDirtTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDirtTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDirtTranscriptsSub" + courtDocsubtabcount + "'>土謄</td>" +
							"<td><input id='iptcourtDocDirtTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDirtTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDirtTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocDirtTranscriptsRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDirtTranscriptsRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocBuiltTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocBuiltTranscripts" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocBuiltTranscriptsSub" + courtDocsubtabcount + "'>建謄</td>" +
							"<td><input id='iptcourtDocBuiltTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocBuiltTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocBuiltTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocBuiltTranscriptsRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocBuiltTranscriptsRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocDistribution" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDistributionSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDistributionSub" + courtDocsubtabcount + "'>分配表</td>" +
							"<td><input id='iptcourtDocDistributionDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDistributionRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDistributionRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocDistributionRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDistributionRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocThingThird" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocThingThirdSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocThingThirdSub" + courtDocsubtabcount + "'>事項表(第三人)</td>" +
							"<td><input id='iptcourtDocThingThirdDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocThingThirdRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocThingThirdRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocThingThirdRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocThingThirdRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocThingDebt" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocThingDebtSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocThingDebtSub" + courtDocsubtabcount + "'>事項表(債權人)</td>" +
							"<td><input id='iptcourtDocThingDebtDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocThingDebtRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocThingDebtRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocThingDebtRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocThingDebtRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocCoOwned" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocCoOwnedSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocCoOwnedSub" + courtDocsubtabcount + "'>共有人名冊</td>" +
							"<td><input id='iptcourtDocCoOwnedDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocCoOwnedRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocCoOwnedRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocCoOwnedRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocCoOwnedRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocDebtDoc" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDebtDocSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDebtDocSub" + courtDocsubtabcount + "'>債權文件</td>" +
							"<td><input id='iptcourtDocDebtDocDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDebtDocRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDebtDocRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocDebtDocRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDebtDocRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocDetail" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDetailSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDetailSub" + courtDocsubtabcount + "'>帳務明細</td>" +
							"<td><input id='iptcourtDocDetailDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDetailRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDetailRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocDetailRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDetailRelaTd(" + (courtDocsubtabcount + 1 ) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocFile" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocFileSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocFileSub" + courtDocsubtabcount + "'>執名附件</td>" +
							"<td><input id='iptcourtDocFileDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocFileRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocFileRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocFileRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocFileRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocDebtContinue" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDebtContinueSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDebtContinueSub" + courtDocsubtabcount + "'>債證續行表</td>" +
							"<td><input id='iptcourtDocDebtContinueDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDebtContinueRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDebtContinueRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocDebtContinueRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDebtContinueRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocCashierCheck" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocCashierCheckSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocCashierCheckSub" + courtDocsubtabcount + "'>本票</td>" +
							"<td><input id='iptcourtDocCashierCheckDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocCashierCheckRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocCashierCheckRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocCashierCheckRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocCashierCheckRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		           	 "</table>" +
		           	 "<table>" +
		        	 	"<tr id='trcourtDocRecovery" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocRecoverySub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocRecoverySub" + courtDocsubtabcount + "'>回復所有權登記</td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocRecoveryRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocRecoveryRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocRecoveryRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocRecoveryRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		           	 "</table>" +
		           	 "<table>" +
		        	 	"<tr id='trcourtDocOther" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocOtherSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocOtherSub" + courtDocsubtabcount + "'>其它</td>" +
							"<td><input id='iptcourtDocOtherName" + courtDocsubtabcount + "' ></input><input id='iptcourtDocOtherDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocOtherRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocOtherRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select>" +
									"<input id='iptcourtDocOtherRelationPersonId" + courtDocsubtabcount + "_0' style='display:none'></input></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocOtherRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		           	 "</table>" +
		           	 "<table>" +
		           	 	"<tr>" +
		           	 		"<td><label>補正說明</label></td>" +
		           	 		"<td><input id='iptcourtDocEdit" + courtDocsubtabcount + "'></input></td>" +
		           	 	"</tr>" +
		           	 "</table>" +
           		"</div>" +           	
           		"<div style='overflow: auto;margin:5px 5px 5px 5px' class='ui-widget-content'>" +
					"<div style='overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;' align='center'>繳費(含補繳)</div>" +
		       	 	"<table>" +
		           	 	"<tr>" +
		           	 		"<td><label>程序費-金額</label></td>" +
							"<td><input id='iptcourtDocProgramCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocProgramDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 		"<td><label>訴訟費-金額</label></td>" +
							"<td><input id='iptcourtDocLegalActionCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocLegalActionDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 	"</tr>" +
		           	 	"<tr>" +
		           	 		"<td><label>執行費-金額</label></td>" +
							"<td><input id='iptcourtDocExcuteCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocExcuteDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 		"<td><label>補發費-金額</label></td>" +
							"<td><input id='iptcourtDocReplacementCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocReplacementDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 	"</tr>" +
		           	 	"<tr>" +
		           	 		"<td><label>指界費-金額</label></td>" +
							"<td><input id='iptcourtDocSectorCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocSectorDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 		"<td><label>鑑價費-金額</label></td>" +
							"<td><input id='iptcourtDocValuationCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocValuationDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 	"</tr>" +
		           	 	"<tr>" +
		           	 		"<td><label>複丈費-金額</label></td>" +
							"<td><input id='iptcourtDocRebirthCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocRebirthDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 		"<td><label>測量費-金額</label></td>" +
							"<td><input id='iptcourtDocMeasureCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocMeasureDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 	"</tr>" +
		           	 	"<tr>" +
		           	 		"<td><label>提存金-金額</label></td>" +
							"<td><input id='iptcourtDocSaveCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocSaveDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 		"<td><label>集保-金額</label></td>" +
							"<td><input id='iptcourtDocCentralizedCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocCentralizedDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 	"</tr>" +
		           	 	"<tr>" +
		           	 		"<td><label>保單-金額</label></td>" +
							"<td><input id='iptcourtDocInsuranceCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocInsuranceDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 		"<td><label>郵局-金額</label></td>" +
							"<td><input id='iptcourtDocPostCost" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>繳費期限</label></td>" +
							"<td><input id='iptcourtDocPostDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
		           	 	"</tr>" +
		       	 	"</table>" +
	           	"</div>" +
	           	
	           	"<div style='overflow: auto;margin:5px 5px 5px 5px' class='ui-widget-content'>" +
					"<div style='overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;' align='center'>登報</div>" +
		       	 	"<table>" +
		           	 	"<tr>" +
		           	 		"<td><label>登報-文到</label></td>" +
							"<td><input id='iptcourtDocPublishDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		           	 		"<td><label>日內</label></td>" +
							"<td><select id='iptcourtDocPublishObject" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
		           	 		"<td><label>事項</label></td>" +
							"<td><select id='iptcourtDocPublishThings" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
							"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocPublishRemark" + courtDocsubtabcount + "' ></input></td>" +
		           	 	"</tr>" +
		       	 	"</table>" +
	           	"</div>" +
	           	
	           	"<div style='overflow: auto;margin:5px 5px 5px 5px' class='ui-widget-content'>" +
					"<div style='overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;' align='center'>開庭</div>" +
		       	 	"<table>" +
		           	 	"<tr>" +
		           	 		"<td><label>開庭日期</label></td>" +
							"<td><input id='iptcourtDocToCourtDate" + courtDocsubtabcount + "' ></input></td>" +
		           	 		"<td><label>開庭時間</label></td>" +
							"<td><input id='iptcourtDocToCourtTime" + courtDocsubtabcount + "' ></input></td>" +
		           	 		"<td><label>期日種類</label></td>" +
							"<td><input id='iptcourtDocToCourtType" + courtDocsubtabcount + "' ></input></td>" +
		           	 	"</tr>" +
		           	 	"<tr>" +
							"<td><label>注意事項</label></td>" +
							"<td><input id='iptcourtDocToCourtNotice" + courtDocsubtabcount + "' ></input></td>" +
						"</tr>" +
		       	 	"</table>" +
		       	 	"<table>" +
		       	 		"<tr>" +
		       	 			"<td><input type='checkbox' name='ckbcourtDocToCourt" + courtDocsubtabcount + "' value='1' id='ckbcourtDocAppointmentLetter" + courtDocsubtabcount + "'>委任狀</td>" +
		       	 			"<td><input type='checkbox' name='ckbcourtDocToCourt" + courtDocsubtabcount + "' value='1' id='ckbcourtDocAppointmentLetterCriminal" + courtDocsubtabcount + "'>委任狀(刑事)</td>" +
		       	 			"<td><input type='checkbox' name='ckbcourtDocToCourt" + courtDocsubtabcount + "' value='1' id='ckbcourtDocToCourtApplyBook" + courtDocsubtabcount + "'>申請書</td>" +
		       	 			"<td><input type='checkbox' name='ckbcourtDocToCourt" + courtDocsubtabcount + "' value='1' id='ckbcourtDocToCourtDetail" + courtDocsubtabcount + "'>帳務明細</td>" +
		       	 			"<td><input type='checkbox' name='ckbcourtDocToCourt" + courtDocsubtabcount + "' value='1' id='ckbcourtDocToCourtOther" + courtDocsubtabcount + "'>其他</td>" +
							"<td><input id='iptcourtDocToCourtOther" + courtDocsubtabcount + "' ></input></td>" +
		       	 		"</tr>" +
		       	 	"</table>" +
	           	"</div>" +
	           	
	           	"<div style='overflow: auto;margin:5px 5px 5px 5px' class='ui-widget-content'>" +
					"<div style='overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;' align='center'>導往執行</div>" +
		       	 	"<table>" +
		           	 	"<tr>" +
		           	 		"<td><label>導往執行日期</label></td>" +
							"<td><input id='iptcourtDocExecutionDate" + courtDocsubtabcount + "' ></input></td>" +
		           	 		"<td><label>導往執行時間</label></td>" +
							"<td><input id='iptcourtDocExecutionTime" + courtDocsubtabcount + "' ></input></td>" +
		           	 	"</tr>" +
		       	 	"</table>" +
		       	 	"<table>" +
		       	 		"<tr>" +
		       	 			"<td><input type='checkbox' name='ckbcourtDocExecution" + courtDocsubtabcount + "' value='1' id='ckbcourtDocExecutionAppointmentLetter" + courtDocsubtabcount + "'>委任狀</td>" +
		       	 			"<td><input type='checkbox' name='ckbcourtDocExecution" + courtDocsubtabcount + "' value='1' id='ckbcourtDocExecutionOther" + courtDocsubtabcount + "'>其他</td>" +
							"<td><input id='iptcourtDocExecutionOther" + courtDocsubtabcount + "' ></input></td>" +
		       	 		"</tr>" +
		       	 	"</table>" +
	           	"</div>";
           	 
       	 var docArray,seloption;
		
		courtDoc.courtDocsubtabcount ++ ;
		courtDoc.courtDocactivesubtabcount ++;
		courtDoc.courtDocsubtabs.find(".ui-tabs-nav").append(li);
		courtDoc.courtDocsubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		courtDoc.courtDocsubtabs.tabs("refresh");
		courtDoc.courtDocsubtabs.tabs({ active:courtDoc.courtDocactivesubtabcount});
           	 
		courtDoc.courtDocexistsubtabs.push(true);
		// 開始初始化
		
		//將日期欄位格式化
	 	law.common.formatInputItemToDate("#iptcourtDocReceivedDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocBankDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocRuledDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocApplyConfirmationDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocReceivedConfirmationDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocFailureDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocApprovedDelayDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocDelayEndDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocSectorDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocMeasureDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocValuationDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocRebirthDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocSurveyDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocInquiryDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocFirstSaleDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocSecondSaleDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocThirdSaleDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocPostBuyDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocPostEndDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocReduceSaleDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocDestoryDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocRealDistributionDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocToCourtDate" + courtDocsubtabcount, "yy-mm-dd");
	 	law.common.formatInputItemToDate("#iptcourtDocExecutionDate" + courtDocsubtabcount, "yy-mm-dd");
	   
	    law.common.selectOption("#iptcourtDocDocStatus" + courtDocsubtabcount, courtDoc.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
	    law.common.selectOption("#iptcourtDocTypeOne" + courtDocsubtabcount, courtDoc.TypeOne, "8aa2e72a5d4f763e015d4f8771c20005", true);
		law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.TypeTwo, undefined, true);
		$("#iptcourtDocTypeOne" + courtDocsubtabcount).change(function(i) {
			if($("#iptcourtDocTypeOne" + courtDocsubtabcount).find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f8771c20005"){
				law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.TypeTwo, undefined, true);
			}else if($("#iptcourtDocTypeOne" + courtDocsubtabcount).find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f878ed50006"){
				law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.ImmovablesTypeTwo, undefined, true);
			}else if($("#iptcourtDocTypeOne" + courtDocsubtabcount).find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f87dca70008"){
				law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.CenTypeTwo, undefined, true);
			}else if($("#iptcourtDocTypeOne" + courtDocsubtabcount).find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f87b79f0007"){
				law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.DebtTypeTwo, undefined, true);
			}
		
		});
		law.common.selectOption("#iptcourtDocCourtYearCourt" + courtDocsubtabcount, courtDoc.CourtYearCourt, undefined, true);
		law.common.selectOption("#iptcourtDocPublishObject" + courtDocsubtabcount, courtDoc.PublishObject, undefined, true);
		law.common.selectOption("#iptcourtDocPublishThings" + courtDocsubtabcount, courtDoc.PublishThings, undefined, true);
		law.common.selectRelaOption("#iptcourtDocRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptcourtDocBankName" + courtDocsubtabcount).append(BankNameSelectOption);
		$("#iptcourtDocBankName" + courtDocsubtabcount + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
		
		//補正下拉選項
		law.common.selectRelaOption("#iptcourtDocTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocCoOwnedTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocMortgageeTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocLawTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocHeirTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocDirtTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocBuiltTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocDistributionRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocThingThirdRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocThingDebtRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocCoOwnedRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocDebtDocRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocDetailRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocFileRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocDebtContinueRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocCashierCheckRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocRecoveryRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		law.common.selectRelaOption("#iptcourtDocOtherRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela, undefined, true);
		
		// 動態跑出原債權人
		if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B1" ||
				$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B2" ||
				$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B3" ||
				$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B4" ||
				$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B5" ||
				$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B6" ||
				$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B7" ||
				$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-CD" ||
				$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.TSBOldBankName, undefined, true);
		}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.FEIOldBankName, undefined, true);
		}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.SKOldBankName, undefined, true);
		}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "YT_AMC" ||
				$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.YTOldBankName, undefined, true);
		}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.FIOldBankName, undefined, true);
		}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.TSAOldBankName, undefined, true);
		}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.TAMCOOldBankName, undefined, true);
		}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.ORIXOldBankName, undefined, true);
		}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.MTOldBankName, undefined, true);
		}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.UNOldBankName, undefined, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptcourtDocOldBankName" + courtDocsubtabcount + " option").remove();
			$("#iptcourtDocOldBankName" + courtDocsubtabcount).append(selectNull);
		}
		
		//設定相對人 = 0
		law.addDoc.courtDoc.courtDocRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocTranscriptsRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocCoOwnedTranscriptsRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocMortgageeTranscriptsRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocLawTranscriptsRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocHeirTranscriptsRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocDirtTranscriptsRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocBuiltTranscriptsRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocDistributionRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocThingThirdRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocThingDebtRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocCoOwnedRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocDebtDocRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocDetailRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocFileRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocDebtContinueRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocCashierCheckRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocRecoveryRelaNum[(courtDocsubtabcount+1)] = 0;
		law.addDoc.courtDoc.courtDocOtherRelaNum[(courtDocsubtabcount+1)] = 0;
		
		//設定勾勾
 		law.addDoc.courtDoc.controlcourtDocEditCKB(courtDocsubtabcount+1);
	},
	// 初始化
	initcourtDocsubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, TSBOldBankName, 
			CourtYearCourt,	ImmovablesTypeTwo, CenTypeTwo, DebtTypeTwo, PublishObject, PublishThings, 
			FEIOldBankName, SKOldBankName,YTOldBankName, FIOldBankName, TSAOldBankName, 
			TAMCOOldBankName, ORIXOldBankName, MTOldBankName, UNOldBankName){
		var initsub = law.addDoc.courtDoc;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.TSBOldBankName = TSBOldBankName;
		initsub.CourtYearCourt = CourtYearCourt;
		initsub.ImmovablesTypeTwo = ImmovablesTypeTwo;
		initsub.CenTypeTwo = CenTypeTwo;
		initsub.DebtTypeTwo = DebtTypeTwo;
		initsub.PublishObject = PublishObject;
		initsub.PublishThings = PublishThings;
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
		
		var length = law.addDoc.courtDoc.courtDocsubtabcount,
			i = 0,j = 0,displayNum = 0,
			courtDoc = {},
			returncourtDoc = "",
			returncourtDocRelas_0 = [],
			relainfo = {},
			//補正相關人
			returncourtDocTranscriptsRelas_0 = [],
			returncourtDocCoOwnedTranscriptsRelas_0 = [],
			returncourtDocMortgageeTranscriptsRelas_0 = [],
			returncourtDocLawTranscriptsRelas_0 = [],
			returncourtDocHeirTranscriptsRelas_0 = [],
			returncourtDocDirtTranscriptsRelas_0 = [],
			returncourtDocBuiltTranscriptsRelas_0 = [],
			returncourtDocDistributionRelas_0 = [],
			returncourtDocThingThirdRelas_0 = [],
			returncourtDocThingDebtRelas_0 = [],
			returncourtDocCoOwnedRelas_0 = [],
			returncourtDocDebtDocRelas_0 = [],
			returncourtDocDetailRelas_0 = [],
			returncourtDocFileRelas_0 = [],
			returncourtDocDebtContinueRelas_0 = [],
			returncourtDocCashierCheckRelas_0 = [],
			returncourtDocRecoveryRelas_0 = [],
			returncourtDocOtherRelas_0 = [];
			
		var shadow; // add By Jia 2017-08-11 影本值	
		
		// add By Jia 2017-08-11 空值判斷
		var emptyReturn = law.addDoc.courtDoc.courtDocRegex(undefined);
		if(emptyReturn.isEmpty){
			return emptyReturn;
		}
		// add By Jia 2017-08-14 格式判斷
		var isRegexReturn = law.addDoc.courtDoc.courtDocRegex(undefined);
		if(isRegexReturn.isRegexp){
			return isRegexReturn;
		}
		
		if($("#rdocourtDocShadow").is(':checked')){
			shadow = $("#rdocourtDocShadow:checked").val();
		}else if($("#rdocourtDocShadowBank").is(':checked')){
			shadow = $("#rdocourtDocShadowBank:checked").val();
		}else{
			shadow = null;
		}
		
		for( ; i <= law.addDoc.courtDoc.courtDocRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = { 
				"courtDocRelaId" : ($("#iptcourtDocRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocTranscriptsRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocTranscriptsRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocTranscriptsRelaId" : ($("#iptcourtDocTranscriptsRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocTranscriptsRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocTranscriptsRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocCoOwnedTranscriptsRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocCoOwnedTranscriptsRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocCoOwnedTranscriptsRelaId" : ($("#iptcourtDocCoOwnedTranscriptsRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocCoOwnedTranscriptsRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocCoOwnedTranscriptsRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocCoOwnedTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocMortgageeTranscriptsRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocMortgageeTranscriptsRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocMortgageeTranscriptsRelaId" : ($("#iptcourtDocMortgageeTranscriptsRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocMortgageeTranscriptsRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocMortgageeTranscriptsRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocMortgageeTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocLawTranscriptsRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocLawTranscriptsRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocLawTranscriptsRelaId" : ($("#iptcourtDocLawTranscriptsRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocLawTranscriptsRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocLawTranscriptsRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocLawTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocHeirTranscriptsRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocHeirTranscriptsRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocHeirTranscriptsRelaId" : ($("#iptcourtDocHeirTranscriptsRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocHeirTranscriptsRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocHeirTranscriptsRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocHeirTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDirtTranscriptsRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocDirtTranscriptsRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocDirtTranscriptsRelaId" : ($("#iptcourtDocDirtTranscriptsRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocDirtTranscriptsRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocDirtTranscriptsRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocDirtTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocBuiltTranscriptsRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocBuiltTranscriptsRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocBuiltTranscriptsRelaId" : ($("#iptcourtDocBuiltTranscriptsRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocBuiltTranscriptsRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocBuiltTranscriptsRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocBuiltTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDistributionRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocDistributionRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocDistributionRelaId" : ($("#iptcourtDocDistributionRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocDistributionRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocDistributionRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocDistributionRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocThingThirdRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocThingThirdRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocThingThirdRelaId" : ($("#iptcourtDocThingThirdRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocThingThirdRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocThingThirdRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocThingThirdRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocThingDebtRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocThingDebtRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocThingDebtRelaId" : ($("#iptcourtDocThingDebtRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocThingDebtRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocThingDebtRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocThingDebtRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocCoOwnedRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocCoOwnedRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocCoOwnedRelaId" : ($("#iptcourtDocCoOwnedRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocCoOwnedRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocCoOwnedRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocCoOwnedRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDebtDocRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocDebtDocRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocDebtDocRelaId" : ($("#iptcourtDocDebtDocRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocDebtDocRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocDebtDocRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocDebtDocRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDetailRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocDetailRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocDetailRelaId" : ($("#iptcourtDocDetailRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocDetailRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocDetailRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocDetailRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocFileRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocFileRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocFileRelaId" : ($("#iptcourtDocFileRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocFileRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocFileRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocFileRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDebtContinueRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocDebtContinueRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocDebtContinueRelaId" : ($("#iptcourtDocDebtContinueRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocDebtContinueRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocDebtContinueRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocDebtContinueRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocCashierCheckRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocCashierCheckRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocCashierCheckRelaId" : ($("#iptcourtDocCashierCheckRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocCashierCheckRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocCashierCheckRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocCashierCheckRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocRecoveryRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocRecoveryRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocRecoveryRelaId" : ($("#iptcourtDocRecoveryRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocRecoveryRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocRecoveryRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocRecoveryRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocOtherRelaNum[0]; i++){
			var rela_ID = $("#iptcourtDocOtherRelationPerson_" + i).find('option:selected').val().split(",");
			relainfo = {
				"courtDocOtherRelaId" : ($("#iptcourtDocOtherRelationPersonId_" + i).val() != "" ) ? $("#iptcourtDocOtherRelationPersonId_" + i).val() : null,
				"num" : i,
				"ID" : rela_ID[0],
				"P_ID" : rela_ID[1],
				"name"	: $("#iptcourtDocOtherRelationPerson_" + i).find('option:selected').text()
			};
			returncourtDocOtherRelas_0.push(relainfo);
		}
		
		var topItem = {
			'bankId' : law.addDoc.bankId,
			'bankName' : law.addDoc.bankName,
			'gProdId' : law.addDoc.gprodId,
			'gProdName' : law.addDoc.gprodName,
			'debtID' : law.addDoc.ID,
			'debtName' : law.addDoc.debtName,
			'courtDocId' : ($("#iptcourtDocDocId").val() !== "" ) ? $("#iptcourtDocDocId").val() : null,
			'shareCaseId0' : ($("#iptcourtDocShareCaseId_0").val() !== "") ? $("#iptcourtDocShareCaseId_0").val() : null,
			'shareCaseId1' : ($("#iptcourtDocShareCaseId_1").val() !== "") ? $("#iptcourtDocShareCaseId_1").val() : null,
			'shareCaseId2' : ($("#iptcourtDocShareCaseId_2").val() !== "") ? $("#iptcourtDocShareCaseId_2").val() : null,
			'shareCaseId3' : ($("#iptcourtDocShareCaseId_3").val() !== "") ? $("#iptcourtDocShareCaseId_3").val() : null,
			'shadow' : shadow,
			'receivedDate' : $("#iptcourtDocReceivedDate").val(),
			'bankDate' : ($("#iptcourtDocBankDate").val() !== "") ? $("#iptcourtDocBankDate").val() : null,
			'docStatus' : $("#iptcourtDocDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptcourtDocTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptcourtDocTypeTwo").find('option:selected').val(),
			'oldBankName' : ($("#iptcourtDocOldBankName").find('option:selected').val() !== "") ? $("#iptcourtDocOldBankName").find('option:selected').val() : null,
			'courtDocRelationPerson' : returncourtDocRelas_0,
			'relationPerson' : ($("#iptcourtDocRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocRelationPerson_0").find('option:selected').val() : null,
			'courtYearCourt' : $("#iptcourtDocCourtYearCourt").find('option:selected').val(),
			'courtYearYear' : $("#iptcourtDocCourtYearYear").val(),
			'courtYearTxt' : $("#iptcourtDocCourtYearTxt").val(),
			'courtYearShare' : $("#iptcourtDocCourtYearShare").val(),
			'courtYearCaseId' : $("#iptcourtDocCourtYearCaseId").val(),
			'ruledDate' : ($("#iptcourtDocRuledDate").val() !== "") ? $("#iptcourtDocRuledDate").val() : null,
			'ruledAmount' : ($("#iptcourtDocRuledAmount").val() !== "") ? $("#iptcourtDocRuledAmount").val() : null,
			'applyConfirmationDate' : ($("#iptcourtDocApplyConfirmationDate").val() !== "") ? $("#iptcourtDocApplyConfirmationDate").val() : null,
			'receivedConfirmationDate' : ($("#iptcourtDocReceivedConfirmationDate").val() !== "") ? $("#iptcourtDocReceivedConfirmationDate").val() : null,
			'failureDate' : ($("#iptcourtDocFailureDate").val() !== "") ? $("#iptcourtDocFailureDate").val() : null,
			'applyLawThird' : ($("#iptcourtDocApplyLawThird").val() !== "") ? $("#iptcourtDocApplyLawThird").val() : null,
			'addAddress' : ($("#iptcourtDocAddAddress").val() !== "" ) ? $("#iptcourtDocAddAddress").val() : null,
			'distributionAmount' : ($("#iptcourtDocDistributionAmount").val() !== "" ) ? $("#iptcourtDocDistributionAmount").val() : null,
			'approvedDelayDate' : ($("#iptcourtDocApprovedDelayDate").val() !== "") ? $("#iptcourtDocApprovedDelayDate").val() : null,
			'delayEndDate' : ($("#iptcourtDocDelayEndDate").val() !== "" ) ? $("#iptcourtDocDelayEndDate").val() : null,
			'sectorDate' : ($("#iptcourtDocSectorDate").val() !== "" ) ? $("#iptcourtDocSectorDate").val() : null,
			'measureDate' : ($("#iptcourtDocMeasureDate").val() !== "" ) ? $("#iptcourtDocMeasureDate").val() : null,
			'valuationDate' : ($("#iptcourtDocValuationDate").val() !== "") ? $("#iptcourtDocValuationDate").val() : null,
			'rebirthDate' : ($("#iptcourtDocRebirthDate").val() !== "") ? $("#iptcourtDocRebirthDate").val() : null,
			'surveyDate' : ($("#iptcourtDocSurveyDate").val() !== "" ) ? $("#iptcourtDocSurveyDate").val() : null,
			'inquiryDate' : ($("#iptcourtDocInquiryDate").val() !== "") ? $("#iptcourtDocInquiryDate").val() : null,
			'firstSaleDate' : ($("#iptcourtDocFirstSaleDate").val() !== "" ) ? $("#iptcourtDocFirstSaleDate").val() : null,
			'secondSaleDate' : ($("#iptcourtDocSecondSaleDate").val() !== "") ? $("#iptcourtDocSecondSaleDate").val() : null,
			'thirdSaleDate' : ($("#iptcourtDocThirdSaleDate").val() !== "") ? $("#iptcourtDocThirdSaleDate").val() : null,
			'postBuyDate' : ($("#iptcourtDocPostBuyDate").val() !== "") ? $("#iptcourtDocPostBuyDate").val() : null,
			'postEndDate' : ($("#iptcourtDocPostEndDate").val() !== "") ? $("#iptcourtDocPostEndDate").val() : null,
			'reduceSaleDate' : ($("#iptcourtDocReduceSaleDate").val() !== "") ? $("#iptcourtDocReduceSaleDate").val() : null,
			'destoryDate' : ($("#iptcourtDocDestoryDate").val() !== "" ) ? $("#iptcourtDocDestoryDate").val() : null,
			'realDistributionDate' : ($("#iptcourtDocRealDistributionDate").val() !== "") ? $("#iptcourtDocRealDistributionDate").val() : null,
			'progress' : ($("#iptcourtDocProgress").val() !== "") ? $("#iptcourtDocProgress").val() : null,
			'remark' : ($("#iptcourtDocRemark").val() !== "") ? $("#iptcourtDocRemark").val() : null,
			// 陳報
			'applyDebtDays' : ($("#iptcourtDocApplyDebtDays").val() !== "")? $("#iptcourtDocApplyDebtDays").val() : null,
			'repayDays' : ($("#iptcourtDocRepayDays").val() !== "") ? $("#iptcourtDocRepayDays").val() : null,
			'useDays' : ($("#iptcourtDocUseDays").val() !== "") ? $("#iptcourtDocUseDays").val() : null,
			'opinionDays' : ($("#iptcourtDocOpinionDays").val() !== "") ? $("#iptcourtDocOpinionDays").val() : null,
			'accountDays' : ($("#iptcourtDocAccountDays").val() !== "") ? $("#iptcourtDocAccountDays").val() : null,
			'pleaseDays' : ($("#iptcourtDocPleaseDays").val() !== "") ? $("#iptcourtDocPleaseDays").val() : null,
			'reportOther' : ($("#iptcourtDocReportOther").val() !== "") ? $("#iptcourtDocReportOther").val() : null,
			'reportOtherDays' : ($("#iptcourtDocReportOtherDays").val() !== "") ? $("#iptcourtDocReportOtherDays").val() : null,
			'reportDescription' : ($("#iptcourtDocReportDescription").val() !== "") ? $("#iptcourtDocReportDescription").val() : null,
			//補正內容 戶謄
			'transcriptsDays' : ($("#iptcourtDocTranscriptsDays").val() !== "") ? $("#iptcourtDocTranscriptsDays").val() : null,
			'transcriptsRemark' : ($("#iptcourtDocTranscriptsRemark").val() !== "") ? $("#iptcourtDocTranscriptsRemark").val() : null,
			'courtDocTranscriptsRelationPerson' : returncourtDocTranscriptsRelas_0,
			'transcriptsRelationPerson' : ($("#iptcourtDocTranscriptsRelationPerson_0").find('option:selected').val() !=="") ? $("#iptcourtDocTranscriptsRelationPerson_0").find('option:selected').val() : null,
			// 共有人戶謄
			'coOwnedTranscriptsDays' : ($("#iptcourtDocCoOwnedTranscriptsDays").val() !== "") ? $("#iptcourtDocCoOwnedTranscriptsDays").val() : null,
			'coOwnedTranscriptsRemark' : ($("#iptcourtDocCoOwnedTranscriptsRemark").val() !== "") ? $("#iptcourtDocCoOwnedTranscriptsRemark").val() : null,
			'courtDocCoOwnedTranscriptsRelationPerson' : returncourtDocCoOwnedTranscriptsRelas_0,
			'coOwnedTranscriptsRelationPerson' : ($("#iptcourtDocCoOwnedTranscriptsRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocCoOwnedTranscriptsRelationPerson_0").find('option:selected').val() : null,
			// 抵押權人戶謄
			'mortgageeTranscriptsDays' : ($("#iptcourtDocMortgageeTranscriptsDays").val() !== "") ? $("#iptcourtDocMortgageeTranscriptsDays").val() : null,
			'mortgageeTranscriptsRemark' : ($("#iptcourtDocMortgageeTranscriptsRemark").val() !== "") ? $("#iptcourtDocMortgageeTranscriptsRemark").val() : null,
			'courtDocMortgageeTranscriptsRelationPerson' : returncourtDocMortgageeTranscriptsRelas_0,
			'mortgageeTranscriptsRelationPerson' : ($("#iptcourtDocMortgageeTranscriptsRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocMortgageeTranscriptsRelationPerson_0").find('option:selected').val() : null,
			// 法代戶謄
			'lawTranscriptsDays' : ($("#iptcourtDocLawTranscriptsDays").val() !== "") ? $("#iptcourtDocLawTranscriptsDays").val() : null,
			'lawTranscriptsRemark' : ($("#iptcourtDocLawTranscriptsRemark").val() !== "")? $("#iptcourtDocLawTranscriptsRemark").val() : null,
			'courtDocLawTranscriptsRelationPerson' : returncourtDocLawTranscriptsRelas_0,
			'lawTranscriptsRelationPerson' : ($("#iptcourtDocLawTranscriptsRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocLawTranscriptsRelationPerson_0").find('option:selected').val() : null,
			// 繼承人戶謄
			'heirTranscriptsDays' : ($("#iptcourtDocHeirTranscriptsDays").val() !== "")? $("#iptcourtDocHeirTranscriptsDays").val() : null,
			'heirTranscriptsRemark' : ($("#iptcourtDocHeirTranscriptsRemark").val() !== "") ? $("#iptcourtDocHeirTranscriptsRemark").val() : null,
			'courtDocHeirTranscriptsRelationPerson' : returncourtDocHeirTranscriptsRelas_0,
			'heirTranscriptsRelationPerson' : ($("#iptcourtDocHeirTranscriptsRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocHeirTranscriptsRelationPerson_0").find('option:selected').val() : null,
			// 土謄
			'dirtTranscriptsDays' : ($("#iptcourtDocDirtTranscriptsDays").val() !== "") ? $("#iptcourtDocDirtTranscriptsDays").val() : null,
			'dirtTranscriptsRemark' : ($("#iptcourtDocDirtTranscriptsRemark").val() !== "") ? $("#iptcourtDocDirtTranscriptsRemark").val() : null,
			'courtDocDirtTranscriptsRelationPerson' : returncourtDocDirtTranscriptsRelas_0,
			'dirtTranscriptsRelationPerson' : ($("#iptcourtDocDirtTranscriptsRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocDirtTranscriptsRelationPerson_0").find('option:selected').val() : null,
			// 建謄
			'builtTranscriptsDays' : ($("#iptcourtDocBuiltTranscriptsDays").val() !== "")? $("#iptcourtDocBuiltTranscriptsDays").val() : null,
			'builtTranscriptsRemark' : ($("#iptcourtDocBuiltTranscriptsRemark").val() !== "") ? $("#iptcourtDocBuiltTranscriptsRemark").val() : null,
			'courtDocBuiltTranscriptsRelationPerson' : returncourtDocBuiltTranscriptsRelas_0,
			'builtTranscriptsRelationPerson' : ($("#iptcourtDocBuiltTranscriptsRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocBuiltTranscriptsRelationPerson_0").find('option:selected').val() : null,
			// 分配表
			'distributionDays' : ($("#iptcourtDocDistributionDays").val() !== "") ? $("#iptcourtDocDistributionDays").val() : null,
			'distributionRemark' : ($("#iptcourtDocDistributionRemark").val() !== "") ? $("#iptcourtDocDistributionRemark").val() : null,
			'courtDocDistributionRelationPerson' : returncourtDocDistributionRelas_0,
			'distributionRelationPerson' : ($("#iptcourtDocDistributionRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocDistributionRelationPerson_0").find('option:selected').val() : null,
			// 事項表(第三人)
			'thingThirdDays' : ($("#iptcourtDocThingThirdDays").val() !== "") ? $("#iptcourtDocThingThirdDays").val() : null,
			'thingThirdRemark' : ($("#iptcourtDocThingThirdRemark").val() !== "") ? $("#iptcourtDocThingThirdRemark").val() : null,
			'courtDocThingThirdRelationPerson' : returncourtDocThingThirdRelas_0,
			'thingThirdRelationPerson' : ($("#iptcourtDocThingThirdRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocThingThirdRelationPerson_0").find('option:selected').val() : null,
			// 事項表(債權人)
			'thingDebtDays' : ($("#iptcourtDocThingDebtDays").val() !== "")? $("#iptcourtDocThingDebtDays").val() : null,
			'thingDebtRemark' : ($("#iptcourtDocThingDebtRemark").val() !== "")? $("#iptcourtDocThingDebtRemark").val() : null,
			'courtDocThingDebtRelationPerson' : returncourtDocThingDebtRelas_0,
			'thingDebtRelationPerson' : ($("#iptcourtDocThingDebtRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocThingDebtRelationPerson_0").find('option:selected').val() : null,
			// 共有人名冊
			'coOwnedDays' : ($("#iptcourtDocCoOwnedDays").val() !== "") ? $("#iptcourtDocCoOwnedDays").val() : null,
			'coOwnedRemark' : ($("#iptcourtDocCoOwnedRemark").val() !== "") ? $("#iptcourtDocCoOwnedRemark").val() : null,
			'courtDocCoOwnedRelationPerson' : returncourtDocCoOwnedRelas_0,
			'coOwnedRelationPerson' : ($("#iptcourtDocCoOwnedRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocCoOwnedRelationPerson_0").find('option:selected').val() : null,
			// 債權文件
			'debtDocDays' : ($("#iptcourtDocDebtDocDays").val() !== "") ? $("#iptcourtDocDebtDocDays").val() : null,
			'debtDocRemark' : ($("#iptcourtDocDebtDocRemark").val() !== "") ? $("#iptcourtDocDebtDocRemark").val() : null,
			'courtDocDebtDocRelationPerson' : returncourtDocDebtDocRelas_0,
			'debtDocRelationPerson' : ($("#iptcourtDocDebtDocRelationPerson_0").find('option:selected').val() !== "" ) ? $("#iptcourtDocDebtDocRelationPerson_0").find('option:selected').val() : null,
			// 帳務明細
			'detailDays' : ($("#iptcourtDocDetailDays").val() !== "") ? $("#iptcourtDocDetailDays").val() : null,
			'detailRemark' : ($("#iptcourtDocDetailRemark").val() !== "") ? $("#iptcourtDocDetailRemark").val() : null,
			'courtDocDetailRelationPerson' : returncourtDocDetailRelas_0,
			'detailRelationPerson' : ($("#iptcourtDocDetailRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocDetailRelationPerson_0").find('option:selected').val() : null,
			// 執行名義
			'fileDays' : ($("#iptcourtDocFileDays").val() !== "") ? $("#iptcourtDocFileDays").val() : null,
			'fileRemark' : ($("#iptcourtDocFileRemark").val() !== "") ? $("#iptcourtDocFileRemark").val() : null,
			'courtDocFileRelationPerson' : returncourtDocFileRelas_0,
			'fileRelationPerson' : ($("#iptcourtDocFileRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocFileRelationPerson_0").find('option:selected').val() : null,
			// 債證續行表
			'debtContinueDays' : ($("#iptcourtDocDebtContinueDays").val() !== "") ? $("#iptcourtDocDebtContinueDays").val() : null,
			'debtContinueRemark' : ($("#iptcourtDocDebtContinueRemark").val() !== "") ? $("#iptcourtDocDebtContinueRemark").val() : null,
			'courtDocDebtContinueRelationPerson' : returncourtDocDebtContinueRelas_0,
			'debtContinueRelationPerson' : ($("#iptcourtDocDebtContinueRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocDebtContinueRelationPerson_0").find('option:selected').val() : null,
			// 本票
			'cashierCheckDays' : ($("#iptcourtDocCashierCheckDays").val() !=="") ? $("#iptcourtDocCashierCheckDays").val() : null,
			'cashierCheckRemark' : ($("#iptcourtDocCashierCheckRemark").val() !== "") ? $("#iptcourtDocCashierCheckRemark").val() : null,
			'courtDocCashierCheckRelationPerson' : returncourtDocCashierCheckRelas_0,
			'cashierCheckRelationPerson' : ($("#iptcourtDocCashierCheckRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocCashierCheckRelationPerson_0").find('option:selected').val() : null,
			// 回復所有權登記
			'recoveryRemark' : ($("#iptcourtDocRecoveryRemark").val() !== "") ? $("#iptcourtDocRecoveryRemark").val() : null,
			'courtDocRecoveryRelationPerson' : returncourtDocRecoveryRelas_0,
			'recoveryRelationPerson' : ($("#iptcourtDocRecoveryRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocRecoveryRelationPerson_0").find('option:selected').val() : null,
			// 其他
			'otherValues' : ($("#iptcourtDocOtherName").val() !== "") ? $("#iptcourtDocOtherName").val() : null,
			'otherDays' : ($("#iptcourtDocOtherDays").val() !== "") ? $("#iptcourtDocOtherDays").val() : null,
			'otherRemark' : ($("#iptcourtDocOtherRemark").val() !== "")? $("#iptcourtDocOtherRemark").val() : null,
			'courtDocOtherRelationPerson' : returncourtDocOtherRelas_0,
			'otherRelationPerson' : ($("#iptcourtDocOtherRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocOtherRelationPerson_0").find('option:selected').val() : null,
			'edit' : ($("#iptcourtDocEdit").val() !== "")? $("#iptcourtDocEdit").val() : null,
			// 繳費(含補繳)
			'programCost' : ($("#iptcourtDocProgramCost").val() !== "")? $("#iptcourtDocProgramCost").val() : null,
			'programDays' : ($("#iptcourtDocProgramDays").val() !== "") ? $("#iptcourtDocProgramDays").val() : null,
			'legalActionCost' : ($("#iptcourtDocLegalActionCost").val() !== "") ? $("#iptcourtDocLegalActionCost").val() : null,
			'legalActionDays' : ($("#iptcourtDocLegalActionDays").val() !== "") ? $("#iptcourtDocLegalActionDays").val() : null,
			'excuteCost' : ($("#iptcourtDocExcuteCost").val() !== "") ? $("#iptcourtDocExcuteCost").val() : null,
			'excuteDays' : ($("#iptcourtDocExcuteDays").val() !== "") ? $("#iptcourtDocExcuteDays").val() : null,
			'replacementCost' : ($("#iptcourtDocReplacementCost").val() !== "") ? $("#iptcourtDocReplacementCost").val() : null,
			'replacementDays' : ($("#iptcourtDocReplacementDays").val() !== "") ? $("#iptcourtDocReplacementDays").val() : null,
			'sectorCost' : ($("#iptcourtDocSectorCost").val() !== "") ? $("#iptcourtDocSectorCost").val() : null,
			'sectorDays' : ($("#iptcourtDocSectorDays").val() !== "") ? $("#iptcourtDocSectorDays").val() : null,
			'valuationCost' : ($("#iptcourtDocValuationCost").val() !== "") ? $("#iptcourtDocValuationCost").val() : null,
			'valuationDays' : ($("#iptcourtDocValuationDays").val() !== "") ? $("#iptcourtDocValuationDays").val() : null,
			'rebirthCost' : ($("#iptcourtDocRebirthCost").val() !== "") ? $("#iptcourtDocRebirthCost").val() : null,
			'rebirthDays' : ($("#iptcourtDocRebirthDays").val() !== "") ? $("#iptcourtDocRebirthDays").val() : null,
			'measureCost' : ($("#iptcourtDocMeasureCost").val() !== "") ? $("#iptcourtDocMeasureCost").val() : null,
			'measureDays' : ($("#iptcourtDocMeasureDays").val() !== "") ? $("#iptcourtDocMeasureDays").val() : null,
			'saveCost' : ($("#iptcourtDocSaveCost").val() !== "") ? $("#iptcourtDocSaveCost").val() : null,
			'saveDays' : ($("#iptcourtDocSaveDays").val() !== "") ? $("#iptcourtDocSaveDays").val() : null,
			'centralizedCost' : ($("#iptcourtDocCentralizedCost").val() !== "") ? $("#iptcourtDocCentralizedCost").val() : null,
			'centralizedDays' : ($("#iptcourtDocCentralizedDays").val() !== "") ? $("#iptcourtDocCentralizedDays").val() : null,
			'insuranceCost' : ($("#iptcourtDocInsuranceCost").val() !== "") ? $("#iptcourtDocInsuranceCost").val() : null,
			'insuranceDays' : ($("#iptcourtDocInsuranceDays").val() !== "") ? $("#iptcourtDocInsuranceDays").val() : null,
			'postCost' : ($("#iptcourtDocPostCost").val() !== "") ? $("#iptcourtDocPostCost").val() : null,
			'postDays' : ($("#iptcourtDocPostDays").val() !== "") ? $("#iptcourtDocPostDays").val() : null,
			// 登報
			'publishDays' : ($("#iptcourtDocPublishDays").val() !== "") ? $("#iptcourtDocPublishDays").val() : null,
			'publishObject' : ($("#iptcourtDocPublishObject").find('option:selected').val() !== "") ? $("#iptcourtDocPublishObject").find('option:selected').val() : null,
			'publishThings' : ($("#iptcourtDocPublishThings").find('option:selected').val() !== "") ? $("#iptcourtDocPublishThings").find('option:selected').val() : null,
			'publishRemark' : ($("#iptcourtDocPublishRemark").val() !== "") ? $("#iptcourtDocPublishRemark").val() : null,
			// 開庭
			'toCourtDate' : ($("#iptcourtDocToCourtDate").val() !== "") ? $("#iptcourtDocToCourtDate").val() : null,
			'toCourtTime' : ($("#iptcourtDocToCourtTime").val() !== "") ? $("#iptcourtDocToCourtTime").val() : null,
			'toCourtType' : ($("#iptcourtDocToCourtType").val() !== "" ) ? $("#iptcourtDocToCourtType").val() : null,
			'toCourtNotice' : ($("#iptcourtDocToCourtNotice").val() !== "") ? $("#iptcourtDocToCourtNotice").val() : null,
			'toCourtAppointmentLetter' : ($("#ckbcourtDocAppointmentLetter:checked").val() !== "")? $("#ckbcourtDocAppointmentLetter:checked").val() : null,
			'toCourtAppointmentLetterCriminal' : ($("#ckbcourtDocAppointmentLetterCriminal:checked").val() !== "") ? $("#ckbcourtDocAppointmentLetterCriminal:checked").val() : null,
			'toCourtApplyBook' : ($("#ckbcourtDocToCourtApplyBook:checked").val() !== "") ? $("#ckbcourtDocToCourtApplyBook:checked").val() : null,
			'toCourtDeail' : ($("#ckbcourtDocToCourtDetail:checked").val() !== "") ? $("#ckbcourtDocToCourtDetail:checked").val() : null,
			'toCourtOther' : ($("#ckbcourtDocToCourtOther:checked").val() !== "") ? $("#ckbcourtDocToCourtOther:checked").val() : null,
			'toCourtContent' : ($("#iptcourtDocToCourtOther").val() !== "") ? $("#iptcourtDocToCourtOther").val() : null,
			// 導往執行
			'executionDate' : ($("#iptcourtDocExecutionDate").val() !== "") ? $("#iptcourtDocExecutionDate").val() : null,
			'executionTime' : ($("#iptcourtDocExecutionTime").val() !== "") ? $("#iptcourtDocExecutionTime").val() : null,
			'executionAppointmentLetter' : ($("#ckbcourtDocExecutionAppointmentLetter:checked").val() !== "") ? $("#ckbcourtDocExecutionAppointmentLetter:checked").val() : null,
			'executionOther' : ($("#ckbcourtDocExecutionOther:checked").val() !== "") ? $("#ckbcourtDocExecutionOther:checked").val() : null,
			'executionOtherContent' : ($("#iptcourtDocExecutionOther").val() !== "") ? $("#iptcourtDocExecutionOther").val() : null,
			// Vo
			'disCourtYearCourt' : $("#iptcourtDocCourtYearCourt").find('option:selected').text(),
			'disTypeOne' : $("#iptcourtDocTypeOne").find('option:selected').text(),
			'disTypeTwo' : $("#iptcourtDocTypeTwo").find('option:selected').text(),
			'disDocStatus' : $("#iptcourtDocDocStatus").find('option:selected').text()
		};
			
		courtDoc.subItems = [];
		courtDoc.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			// add By Jia 2017-08-10 如果頁籤已經關閉 不要push進去
			if($("#licourtDoctab_" + i).size() > 0){
			var shadow; // add By Jia 2017-08-11 影本值	
			// add By Jia 2017-08-11 空值判斷
			var emptyReturn = law.addDoc.courtDoc.courtDocRegex(i);
			if(emptyReturn.isEmpty){
				return emptyReturn;
			}
			// add By Jia 2017-08-14 格式判斷
			var isRegexReturn = law.addDoc.courtDoc.courtDocRegex(i);
			if(isRegexReturn.isRegexp){
				return isRegexReturn;
			}
			
			if($("#rdocourtDocShadow" + i).is(':checked')){
				shadow = $("#rdocourtDocShadow" + i + ":checked").val();
			}else if($("#rdocourtDocShadowBank" + i).is(':checked')){
				shadow = $("#rdocourtDocShadowBank" + i + ":checked").val();
			}else{
				shadow = null;
			}
			
			returncourtDocRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocRelaId" : ($("#iptcourtDocRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocRelas_0.push(relainfo);
			}
			
			returncourtDocTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocTranscriptsRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocTranscriptsRelaId" : ($("#iptcourtDocTranscriptsRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocTranscriptsRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocCoOwnedTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocCoOwnedTranscriptsRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocCoOwnedTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocCoOwnedTranscriptsRelaId" : ($("#iptcourtDocCoOwnedTranscriptsRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocCoOwnedTranscriptsRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocCoOwnedTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocCoOwnedTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocMortgageeTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocMortgageeTranscriptsRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocMortgageeTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocMortgageeTranscriptsRelaId" : ($("#iptcourtDocMortgageeTranscriptsRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocMortgageeTranscriptsRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocMortgageeTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocMortgageeTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocLawTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocLawTranscriptsRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocLawTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocLawTranscriptsRelaId" : ($("#iptcourtDocLawTranscriptsRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocLawTranscriptsRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocLawTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocLawTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocHeirTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocHeirTranscriptsRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocHeirTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocHeirTranscriptsRelaId" : ($("#iptcourtDocHeirTranscriptsRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocHeirTranscriptsRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocHeirTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocHeirTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocDirtTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDirtTranscriptsRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocDirtTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocDirtTranscriptsRelaId" : ($("#iptcourtDocDirtTranscriptsRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocDirtTranscriptsRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocDirtTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDirtTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocBuiltTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocBuiltTranscriptsRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocBuiltTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocBuiltTranscriptsRelaId" : ($("#iptcourtDocBuiltTranscriptsRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocBuiltTranscriptsRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocBuiltTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocBuiltTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocDistributionRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDistributionRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocDistributionRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocDistributionRelaId" : ($("#iptcourtDocDistributionRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocDistributionRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocDistributionRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDistributionRelas_0.push(relainfo);
			}
			
			returncourtDocThingThirdRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocThingThirdRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocThingThirdRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = { 
						"courtDocThingThirdRelaId" : ($("#iptcourtDocThingThirdRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocThingThirdRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocThingThirdRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocThingThirdRelas_0.push(relainfo);
			}
			
			returncourtDocThingDebtRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocThingDebtRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocThingDebtRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = {
						"courtDocThingDebtRelaId" : ($("#iptcourtDocThingDebtRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocThingDebtRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocThingDebtRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocThingDebtRelas_0.push(relainfo);
			}
			
			returncourtDocCoOwnedRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocCoOwnedRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocCoOwnedRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = {
						"courtDocCoOwnedRelaId" : ($("#iptcourtDocCoOwnedRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocCoOwnedRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocCoOwnedRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocCoOwnedRelas_0.push(relainfo);
			}
			
			returncourtDocDebtDocRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDebtDocRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocDebtDocRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = {
						"courtDocDebtDocRelaId" : ($("#iptcourtDocDebtDocRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocDebtDocRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocCoOwnedRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDebtDocRelas_0.push(relainfo);
			}
			
			returncourtDocDetailRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDetailRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocDetailRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = {
						"courtDocDetailRelaId" : ($("#iptcourtDocDetailRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocDetailRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocDetailRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDetailRelas_0.push(relainfo);
			}
			
			returncourtDocFileRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocFileRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocFileRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = {
						"courtDocFileRelaId" : ($("#iptcourtDocFileRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocFileRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocFileRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocFileRelas_0.push(relainfo);
			}
			
			returncourtDocDebtContinueRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDebtContinueRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocDebtContinueRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = {
						"courtDocDebtContinueRelaId" : ($("#iptcourtDocDebtContinueRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocDebtContinueRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocDebtContinueRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDebtContinueRelas_0.push(relainfo);
			}
			
			returncourtDocCashierCheckRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocCashierCheckRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocCashierCheckRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = {
						"courtDocCashierCheckRelaId" : ($("#iptcourtDocCashierCheckRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocCashierCheckRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocCashierCheckRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocCashierCheckRelas_0.push(relainfo);
			}
			
			returncourtDocRecoveryRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocRecoveryRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocRecoveryRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = {
						"courtDocRecoveryRelaId" : ($("#iptcourtDocRecoveryRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocRecoveryRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocRecoveryRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocRecoveryRelas_0.push(relainfo);
			}
			
			returncourtDocOtherRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocOtherRelaNum[displayNum]; j++){
				var rela_ID = $("#iptcourtDocOtherRelationPerson" + i + "_" + j).find('option:selected').val().split(",");
				relainfo = {
						"courtDocOtherRelaId" : ($("#iptcourtDocOtherRelationPersonId" + i + "_" + j).val() != "" ) ? $("#iptcourtDocOtherRelationPersonId" + i + "_" + j).val() : null,
						"num" : j,
						"ID" : rela_ID[0],
						"P_ID" : rela_ID[1],
						"name"	: $("#iptcourtDocOtherRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocOtherRelas_0.push(relainfo);
			}
			
					var subItems = {
						'bankId' : law.addDoc.bankId,
						'bankName' : law.addDoc.bankName,
						'gProdId' : law.addDoc.gprodId,
						'gProdName' : law.addDoc.gprodName,
						'debtID' : law.addDoc.ID,
						'debtName' : law.addDoc.debtName,
						'courtDocId' : ($("#iptcourtDocDocId" + i).val() !== "" ) ? $("#iptcourtDocDocId" + i).val() : null,
						'shareCaseId0' : ($("#iptcourtDocShareCaseId" + i + "_0").val() !== "")? $("#iptcourtDocShareCaseId" + i + "_0").val() : null,
						'shareCaseId1' : ($("#iptcourtDocShareCaseId" + i + "_1").val() !== "")? $("#iptcourtDocShareCaseId" + i + "_1").val() : null,
						'shareCaseId2' : ($("#iptcourtDocShareCaseId" + i + "_2").val() !== "")? $("#iptcourtDocShareCaseId" + i + "_2").val() : null,
						'shareCaseId3' : ($("#iptcourtDocShareCaseId" + i + "_3").val() !== "")? $("#iptcourtDocShareCaseId" + i + "_3").val() : null,
						'shadow' : shadow,
						'receivedDate' : $("#iptcourtDocReceivedDate" + i).val(),
						'bankDate' : ($("#iptcourtDocBankDate" + i).val() !== "")? $("#iptcourtDocBankDate" + i).val() : null,
						'docStatus' : $("#iptcourtDocDocStatus" + i).find('option:selected').val(),
						'typeOne' : $("#iptcourtDocTypeOne" + i).find('option:selected').val(),
						'typeTwo' : $("#iptcourtDocTypeTwo" + i).find('option:selected').val(),
						'oldBankName' : ($("#iptcourtDocOldBankName" + i).find('option:selected').val() !== "")? $("#iptcourtDocOldBankName" + i).find('option:selected').val() : null,
						'courtDocRelationPerson' : returncourtDocRelas_0,
						'relationPerson' : $("#iptcourtDocRelationPerson" + i + "_0").find('option:selected').val(),
						'courtYearCourt' : $("#iptcourtDocCourtYearCourt" + i).find('option:selected').val(),
						'courtYearYear' : $("#iptcourtDocCourtYearYear" + i).val(),
						'courtYearTxt' : $("#iptcourtDocCourtYearTxt" + i).val(),
						'courtYearShare' : $("#iptcourtDocCourtYearShare" + i).val(),
						'courtYearCaseId' : $("#iptcourtDocCourtYearCaseId" + i).val(),
						'ruledDate' : ($("#iptcourtDocRuledDate" + i).val() !== "")? $("#iptcourtDocRuledDate" + i).val() : null,
						'ruledAmount' : ($("#iptcourtDocRuledAmount" + i).val() !== "")? $("#iptcourtDocRuledAmount" + i).val() : null,
						'applyConfirmationDate' : ($("#iptcourtDocApplyConfirmationDate" + i).val() !== "")? $("#iptcourtDocApplyConfirmationDate" + i).val() : null,
						'receivedConfirmationDate' : ($("#iptcourtDocReceivedConfirmationDate" + i).val() !== "")? $("#iptcourtDocReceivedConfirmationDate" + i).val() : null,
						'failureDate' : ($("#iptcourtDocFailureDate" + i).val() !== "")? $("#iptcourtDocFailureDate" + i).val() : null,
						'applyLawThird' : ($("#iptcourtDocApplyLawThird" + i).val() !== "") ? $("#iptcourtDocApplyLawThird" + i).val() : null,
						'addAddress' : ($("#iptcourtDocAddAddress" + i).val() !== "")? $("#iptcourtDocAddAddress" + i).val() : null,
						'distributionAmount' : ($("#iptcourtDocDistributionAmount" + i).val() !== "")? $("#iptcourtDocDistributionAmount" + i).val() : null,
						'approvedDelayDate' : ($("#iptcourtDocApprovedDelayDate" + i).val() !== "")? $("#iptcourtDocApprovedDelayDate" + i).val() : null,
						'delayEndDate' : ($("#iptcourtDocDelayEndDate" + i).val() !== "")? $("#iptcourtDocDelayEndDate" + i).val() : null,
						'sectorDate' : ($("#iptcourtDocSectorDate" + i).val() !== "")? $("#iptcourtDocSectorDate" + i).val() : null,
						'measureDate' : ($("#iptcourtDocMeasureDate" + i).val() !== "")? $("#iptcourtDocMeasureDate" + i).val() : null,
						'valuationDate' : ($("#iptcourtDocValuationDate" + i).val() !== "")? $("#iptcourtDocValuationDate" + i).val() : null,
						'rebirthDate' : ($("#iptcourtDocRebirthDate" + i).val() !== "")? $("#iptcourtDocRebirthDate" + i).val() : null,
						'surveyDate' : ($("#iptcourtDocSurveyDate" + i).val() !== "")? $("#iptcourtDocSurveyDate" + i).val() : null,
						'inquiryDate' : ($("#iptcourtDocInquiryDate" + i).val() !== "")? $("#iptcourtDocInquiryDate" + i).val() : null,
						'firstSaleDate' : ($("#iptcourtDocFirstSaleDate" + i).val() !== "")? $("#iptcourtDocFirstSaleDate" + i).val() : null,
						'secondSaleDate' : ($("#iptcourtDocSecondSaleDate" + i).val() !== "")? $("#iptcourtDocSecondSaleDate" + i).val() : null,
						'thirdSaleDate' : ($("#iptcourtDocThirdSaleDate" + i).val() !== "")? $("#iptcourtDocThirdSaleDate" + i).val() : null,
						'postBuyDate' : ($("#iptcourtDocPostBuyDate" + i).val() !== "")? $("#iptcourtDocPostBuyDate" + i).val() : null,
						'postEndDate' : ($("#iptcourtDocPostEndDate" + i).val() !== "")? $("#iptcourtDocPostEndDate" + i).val() : null,
						'reduceSaleDate' : ($("#iptcourtDocReduceSaleDate" + i).val() !== "")? $("#iptcourtDocReduceSaleDate" + i).val() : null,
						'destoryDate' : ($("#iptcourtDocDestoryDate" + i).val() !== "")? $("#iptcourtDocDestoryDate" + i).val() : null,
						'realDistributionDate' : ($("#iptcourtDocRealDistributionDate" + i).val() !== "")? $("#iptcourtDocRealDistributionDate" + i).val() : null,
						'progress' : ($("#iptcourtDocProgress" + i).val() !== "")? $("#iptcourtDocProgress" + i).val() : null,
						'remark' : ($("#iptcourtDocRemark" + i).val() !== "")? $("#iptcourtDocRemark" + i).val() : null,
						// 陳報
						'applyDebtDays' : ($("#iptcourtDocApplyDebtDays" + i).val() !== "")? $("#iptcourtDocApplyDebtDays" + i).val() : null,
						'repayDays' : ($("#iptcourtDocRepayDays" + i).val() !== "")? $("#iptcourtDocRepayDays" + i).val() : null,
						'useDays' : ($("#iptcourtDocUseDays" + i).val() !== "")? $("#iptcourtDocUseDays" + i).val() : null,
						'opinionDays' : ($("#iptcourtDocOpinionDays" + i).val() !== "")? $("#iptcourtDocOpinionDays" + i).val() : null,
						'accountDays' : ($("#iptcourtDocAccountDays" + i).val() !== "")? $("#iptcourtDocAccountDays" + i).val() : null,
						'pleaseDays' : ($("#iptcourtDocPleaseDays" + i).val() !== "")? $("#iptcourtDocPleaseDays" + i).val() : null,
						'reportOther' : ($("#iptcourtDocReportOther" + i).val() !== "")? $("#iptcourtDocReportOther" + i).val() : null,
						'reportOtherDays' : ($("#iptcourtDocReportOtherDays" + i).val() !== "")? $("#iptcourtDocReportOtherDays" + i).val() : null,
						'reportDescription' : ($("#iptcourtDocReportDescription" + i).val() !== "")? $("#iptcourtDocReportDescription" + i).val() : null,
						//補正內容 戶謄
						'transcriptsDays' : ($("#iptcourtDocTranscriptsDays" + i ).val() !== "")? $("#iptcourtDocTranscriptsDays" + i ).val() : null,
						'transcriptsRemark' : ($("#iptcourtDocTranscriptsRemark" + i ).val() !== "")? $("#iptcourtDocTranscriptsRemark" + i ).val() : null,
						'courtDocTranscriptsRelationPerson' : returncourtDocTranscriptsRelas_0,
						'transcriptsRelationPerson' : ($("#iptcourtDocTranscriptsRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocTranscriptsRelationPerson_0").find('option:selected').val() : null,
						// 共有人戶謄
						'coOwnedTranscriptsDays' : ($("#iptcourtDocCoOwnedTranscriptsDays" + i ).val() !== "")? $("#iptcourtDocCoOwnedTranscriptsDays" + i ).val() : null,
						'coOwnedTranscriptsRemark' : ($("#iptcourtDocCoOwnedTranscriptsRemark" + i ).val() !== "")? $("#iptcourtDocCoOwnedTranscriptsRemark" + i ).val() : null,
						'courtDocCoOwnedTranscriptsRelationPerson' : returncourtDocCoOwnedTranscriptsRelas_0,
						'coOwnedTranscriptsRelationPerson' : ($("#iptcourtDocCoOwnedTranscriptsRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocCoOwnedTranscriptsRelationPerson_0").find('option:selected').val() : null,
						// 抵押權人戶謄
						'mortgageeTranscriptsDays' : ($("#iptcourtDocMortgageeTranscriptsDays" + i ).val() !== "")? $("#iptcourtDocMortgageeTranscriptsDays" + i ).val() : null,
						'mortgageeTranscriptsRemark' : ($("#iptcourtDocMortgageeTranscriptsRemark" + i ).val() !== "")? $("#iptcourtDocMortgageeTranscriptsRemark" + i ).val() : null,
						'courtDocMortgageeTranscriptsRelationPerson' : returncourtDocMortgageeTranscriptsRelas_0,
						'mortgageeTranscriptsRelationPerson' : ($("#iptcourtDocMortgageeTranscriptsRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocMortgageeTranscriptsRelationPerson_0").find('option:selected').val() : null,
						// 法代戶謄
						'lawTranscriptsDays' : ($("#iptcourtDocLawTranscriptsDays" + i ).val() !== "")? $("#iptcourtDocLawTranscriptsDays" + i ).val() : null,
						'lawTranscriptsRemark' : ($("#iptcourtDocLawTranscriptsRemark" + i ).val() !== "")? $("#iptcourtDocLawTranscriptsRemark" + i ).val() : null,
						'courtDocLawTranscriptsRelationPerson' : returncourtDocLawTranscriptsRelas_0,
						'lawTranscriptsRelationPerson' : ($("#iptcourtDocLawTranscriptsRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocLawTranscriptsRelationPerson_0").find('option:selected').val() : null,
						// 繼承人戶謄
						'heirTranscriptsDays' : ($("#iptcourtDocHeirTranscriptsDays" + i ).val() !== "")? $("#iptcourtDocHeirTranscriptsDays" + i ).val() : null,
						'heirTranscriptsRemark' : ($("#iptcourtDocHeirTranscriptsRemark" + i ).val() !== "")? $("#iptcourtDocHeirTranscriptsRemark" + i ).val() : null,
						'courtDocHeirTranscriptsRelationPerson' : returncourtDocHeirTranscriptsRelas_0,
						'heirTranscriptsRelationPerson' : ($("#iptcourtDocHeirTranscriptsRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocHeirTranscriptsRelationPerson_0").find('option:selected').val() : null,
						// 土謄
						'dirtTranscriptsDays' : ($("#iptcourtDocDirtTranscriptsDays" + i ).val() !== "")? $("#iptcourtDocDirtTranscriptsDays" + i ).val() : null,
						'dirtTranscriptsRemark' : ($("#iptcourtDocDirtTranscriptsRemark" + i ).val() !== "") ? $("#iptcourtDocDirtTranscriptsRemark" + i ).val() : null,
						'courtDocDirtTranscriptsRelationPerson' : returncourtDocDirtTranscriptsRelas_0,
						'dirtTranscriptsRelationPerson' : ($("#iptcourtDocDirtTranscriptsRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocDirtTranscriptsRelationPerson_0").find('option:selected').val() : null,
						// 建謄
						'builtTranscriptsDays' : ($("#iptcourtDocBuiltTranscriptsDays" + i ).val() !== "") ? $("#iptcourtDocBuiltTranscriptsDays" + i ).val() : null,
						'builtTranscriptsRemark' : ($("#iptcourtDocBuiltTranscriptsRemark" + i ).val() !== "")? $("#iptcourtDocBuiltTranscriptsRemark" + i ).val() : null,
						'courtDocBuiltTranscriptsRelationPerson' : returncourtDocBuiltTranscriptsRelas_0,
						'builtTranscriptsRelationPerson' : ($("#iptcourtDocBuiltTranscriptsRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocBuiltTranscriptsRelationPerson_0").find('option:selected').val() : null,
						// 分配表
						'distributionDays' : ($("#iptcourtDocDistributionDays" + i ).val() !== "") ? $("#iptcourtDocDistributionDays" + i ).val() : null,
						'distributionRemark' : ($("#iptcourtDocDistributionRemark" + i ).val() !== "") ? $("#iptcourtDocDistributionRemark" + i ).val() : null,
						'courtDocDistributionRelationPerson' : returncourtDocDistributionRelas_0,
						'distributionRelationPerson' : ($("#iptcourtDocDistributionRelationPerson_0").find('option:selected').val() !== "") ? $("#iptcourtDocDistributionRelationPerson_0").find('option:selected').val() : null,
						// 事項表(第三人)
						'thingThirdDays' : ($("#iptcourtDocThingThirdDays" + i ).val() !== "") ? $("#iptcourtDocThingThirdDays" + i ).val() : null,
						'thingThirdRemark' : ($("#iptcourtDocThingThirdRemark" + i ).val() !== "") ? $("#iptcourtDocThingThirdRemark" + i ).val() : null,
						'courtDocThingThirdRelationPerson' : returncourtDocThingThirdRelas_0,
						'thingThirdRelationPerson' : ($("#iptcourtDocThingThirdRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocThingThirdRelationPerson_0").find('option:selected').val() : null,
						// 事項表(債權人)
						'thingDebtDays' : ($("#iptcourtDocThingDebtDays" + i ).val() !== "")? $("#iptcourtDocThingDebtDays" + i ).val() : null,
						'thingDebtRemark' : ($("#iptcourtDocThingDebtRemark" + i ).val() !=="")? $("#iptcourtDocThingDebtRemark" + i ).val() : null,
						'courtDocThingDebtRelationPerson' : returncourtDocThingDebtRelas_0,
						'thingDebtRelationPerson' : ($("#iptcourtDocThingDebtRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocThingDebtRelationPerson_0").find('option:selected').val() : null,
						// 共有人名冊
						'coOwnedDays' : ($("#iptcourtDocCoOwnedDays" + i ).val() !== "")? $("#iptcourtDocCoOwnedDays" + i ).val() : null,
						'coOwnedRemark' : ($("#iptcourtDocCoOwnedRemark" + i ).val() !== "")? $("#iptcourtDocCoOwnedRemark" + i ).val() : null,
						'courtDocCoOwnedRelationPerson' : returncourtDocCoOwnedRelas_0,
						'coOwnedRelationPerson' : ($("#iptcourtDocCoOwnedRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocCoOwnedRelationPerson_0").find('option:selected').val() : null,
						// 債權文件
						'debtDocDays' : ($("#iptcourtDocDebtDocDays" + i ).val() !== "")? $("#iptcourtDocDebtDocDays" + i ).val() : null,
						'debtDocRemark' : ($("#iptcourtDocDebtDocRemark" + i ).val() !== "")? $("#iptcourtDocDebtDocRemark" + i ).val() : null,
						'courtDocDebtDocRelationPerson' : returncourtDocDebtDocRelas_0,
						'debtDocRelationPerson' : ($("#iptcourtDocDebtDocRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocDebtDocRelationPerson_0").find('option:selected').val() : null,
						// 帳務明細
						'detailDays' : ($("#iptcourtDocDetailDays" + i ).val() !== "")? $("#iptcourtDocDetailDays" + i ).val() : null,
						'detailRemark' : ($("#iptcourtDocDetailRemark" + i ).val() !== "")? $("#iptcourtDocDetailRemark" + i ).val() : null,
						'courtDocDetailRelationPerson' : returncourtDocDetailRelas_0,
						'detailRelationPerson' : ($("#iptcourtDocDetailRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocDetailRelationPerson_0").find('option:selected').val() : null,
						// 執行名義
						'fileDays' : ($("#iptcourtDocFileDays" + i ).val() !== "")? $("#iptcourtDocFileDays" + i ).val() : null,
						'fileRemark' : ($("#iptcourtDocFileRemark" + i ).val() !== "")? $("#iptcourtDocFileRemark" + i ).val() : null,
						'courtDocFileRelationPerson' : returncourtDocFileRelas_0,
						'fileRelationPerson' : ($("#iptcourtDocFileRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocFileRelationPerson_0").find('option:selected').val() : null,
						// 債證續行表
						'debtContinueDays' : ($("#iptcourtDocDebtContinueDays" + i ).val() !== "")? $("#iptcourtDocDebtContinueDays" + i ).val() : null,
						'debtContinueRemark' : ($("#iptcourtDocDebtContinueRemark" + i ).val() !== "")? $("#iptcourtDocDebtContinueRemark" + i ).val() : null,
						'courtDocDebtContinueRelationPerson' : returncourtDocDebtContinueRelas_0,
						'debtContinueRelationPerson' : ($("#iptcourtDocDebtContinueRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocDebtContinueRelationPerson_0").find('option:selected').val() : null,
						// 本票
						'cashierCheckDays' : ($("#iptcourtDocCashierCheckDays" + i ).val() !== "")? $("#iptcourtDocCashierCheckDays" + i ).val() : null,
						'cashierCheckRemark' : ($("#iptcourtDocCashierCheckRemark" + i ).val() !== "")? $("#iptcourtDocCashierCheckRemark" + i ).val() : null,
						'courtDocCashierCheckRelationPerson' : returncourtDocCashierCheckRelas_0,
						'cashierCheckRelationPerson' : ($("#iptcourtDocCashierCheckRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocCashierCheckRelationPerson_0").find('option:selected').val() : null,
						// 回復所有權登記
						'recoveryRemark' : ($("#iptcourtDocRecoveryRemark" + i ).val() !== "")? $("#iptcourtDocRecoveryRemark" + i ).val() : null,
						'courtDocRecoveryRelationPerson' : returncourtDocRecoveryRelas_0,
						'recoveryRelationPerson' : ($("#iptcourtDocRecoveryRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocRecoveryRelationPerson_0").find('option:selected').val() : null,
						// 其他
						'otherValues' : ($("#iptcourtDocOtherName" + i ).val() !== "")? $("#iptcourtDocOtherName" + i ).val() : null,
						'otherDays' : ($("#iptcourtDocOtherDays" + i ).val() !== "")? $("#iptcourtDocOtherDays" + i ).val() : null,
						'otherRemark' : ($("#iptcourtDocOtherRemark" + i ).val() !== "")? $("#iptcourtDocOtherRemark" + i ).val() : null,
						'courtDocOtherRelationPerson' : returncourtDocOtherRelas_0,
						'otherRelationPerson' : ($("#iptcourtDocOtherRelationPerson_0").find('option:selected').val() !== "")? $("#iptcourtDocOtherRelationPerson_0").find('option:selected').val() : null,
						'edit' : ($("#iptcourtDocEdit" + i ).val() !== "")? $("#iptcourtDocEdit" + i ).val() : null,
						// 繳費(含補繳)
						'programCost' : ($("#iptcourtDocProgramCost" + i ).val() !== "")? $("#iptcourtDocProgramCost" + i ).val() : null,
						'programDays' : ($("#iptcourtDocProgramDays" + i ).val() !== "")? $("#iptcourtDocProgramDays" + i ).val() : null,
						'legalActionCost' : ($("#iptcourtDocLegalActionCost" + i ).val() !== "")? $("#iptcourtDocLegalActionCost" + i ).val() : null,
						'legalActionDays' : ($("#iptcourtDocLegalActionDays" + i ).val() !== "")? $("#iptcourtDocLegalActionDays" + i ).val() : null,
						'excuteCost' : ($("#iptcourtDocExcuteCost" + i ).val() !== "")? $("#iptcourtDocExcuteCost" + i ).val() : null,
						'excuteDays' : ($("#iptcourtDocExcuteDays" + i ).val() !== "")? $("#iptcourtDocExcuteDays" + i ).val() : null,
						'replacementCost' : ($("#iptcourtDocReplacementCost" + i ).val() !== "")? $("#iptcourtDocReplacementCost" + i ).val() : null,
						'replacementDays' : ($("#iptcourtDocReplacementDays" + i ).val() !== "")? $("#iptcourtDocReplacementDays" + i ).val() : null,
						'sectorCost' : ($("#iptcourtDocSectorCost" + i ).val() !== "")? $("#iptcourtDocSectorCost" + i ).val() : null,
						'sectorDays' : ($("#iptcourtDocSectorDays" + i ).val() !== "")? $("#iptcourtDocSectorDays" + i ).val() : null,
						'valuationCost' : ($("#iptcourtDocValuationCost" + i ).val() !== "")? $("#iptcourtDocValuationCost" + i ).val() : null,
						'valuationDays' : ($("#iptcourtDocValuationDays" + i ).val() !== "")? $("#iptcourtDocValuationDays" + i ).val() : null,
						'rebirthCost' : ($("#iptcourtDocRebirthCost" + i ).val() !== "")? $("#iptcourtDocRebirthCost" + i ).val() : null,
						'rebirthDays' : ($("#iptcourtDocRebirthDays" + i ).val() !== "")? $("#iptcourtDocRebirthDays" + i ).val() : null,
						'measureCost' : ($("#iptcourtDocMeasureCost" + i ).val() !== "")? $("#iptcourtDocMeasureCost" + i ).val() : null,
						'measureDays' : ($("#iptcourtDocMeasureDays" + i ).val() !== "")? $("#iptcourtDocMeasureDays" + i ).val() : null,
						'saveCost' : ($("#iptcourtDocSaveCost" + i ).val() !== "")? $("#iptcourtDocSaveCost" + i ).val() : null,
						'saveDays' : ($("#iptcourtDocSaveDays" + i ).val() !== "")? $("#iptcourtDocSaveDays" + i ).val() : null,
						'centralizedCost' : ($("#iptcourtDocCentralizedCost" + i ).val() !== "")? $("#iptcourtDocCentralizedCost" + i ).val() : null,
						'centralizedDays' : ($("#iptcourtDocCentralizedDays" + i ).val() !== "")? $("#iptcourtDocCentralizedDays" + i ).val() : null,
						'insuranceCost' : ($("#iptcourtDocInsuranceCost" + i ).val() !== "")? $("#iptcourtDocInsuranceCost" + i ).val() : null,
						'insuranceDays' : ($("#iptcourtDocInsuranceDays" + i ).val() !== "")? $("#iptcourtDocInsuranceDays" + i ).val() : null,
						'postCost' : ($("#iptcourtDocPostCost" + i ).val() !== "")? $("#iptcourtDocPostCost" + i ).val() : null,
						'postDays' : ($("#iptcourtDocPostDays" + i ).val() !== "")? $("#iptcourtDocPostDays" + i ).val() : null,
						// 登報
						'publishDays' : ($("#iptcourtDocPublishDays" + i ).val() !== "")? $("#iptcourtDocPublishDays" + i ).val() : null,
						'publishObject' : ($("#iptcourtDocPublishObject" + i ).find('option:selected').val() !== "")? $("#iptcourtDocPublishObject" + i ).find('option:selected').val() : null,
						'publishThings' : ($("#iptcourtDocPublishThings" + i ).find('option:selected').val() !== "")? $("#iptcourtDocPublishThings" + i ).find('option:selected').val() : null,
						'publishRemark' : ($("#iptcourtDocPublishRemark" + i ).val() !== "")? $("#iptcourtDocPublishRemark" + i ).val() : null,
						// 開庭
						'toCourtDate' : ($("#iptcourtDocToCourtDate" + i ).val() !== "")? $("#iptcourtDocToCourtDate" + i ).val() : null,
						'toCourtTime' : ($("#iptcourtDocToCourtTime" + i ).val() !== "")? $("#iptcourtDocToCourtTime" + i ).val() : null,
						'toCourtType' : ($("#iptcourtDocToCourtType" + i ).val() !== "")? $("#iptcourtDocToCourtType" + i ).val() : null,
						'toCourtNotice' : ($("#iptcourtDocToCourtNotice" + i ).val() !== "") ? $("#iptcourtDocToCourtNotice" + i ).val() : null,
						'toCourtAppointmentLetter' : ($("#ckbcourtDocAppointmentLetter" + i + ":checked").val() !== "")? $("#ckbcourtDocAppointmentLetter" + i + ":checked").val() : null,
						'toCourtAppointmentLetterCriminal' : ($("#ckbcourtDocAppointmentLetterCriminal" + i + ":checked").val() !== "")? $("#ckbcourtDocAppointmentLetterCriminal" + i + ":checked").val() : null,
						'toCourtApplyBook' : ($("#ckbcourtDocToCourtApplyBook" + i + ":checked").val() !== "")? $("#ckbcourtDocToCourtApplyBook" + i + ":checked").val() : null,
						'toCourtDeail' : ($("#ckbcourtDocToCourtDetail" + i + ":checked").val() !== "")? $("#ckbcourtDocToCourtDetail" + i + ":checked").val() : null,
						'toCourtOther' : ($("#ckbcourtDocToCourtOther" + i + ":checked").val() !== "")? $("#ckbcourtDocToCourtOther" + i + ":checked").val() : null,
						'toCourtContent' : ($("#iptcourtDocToCourtOther" + i).val() !== "")? $("#iptcourtDocToCourtOther" + i).val() : null,
						// 導往執行
						'executionDate' : ($("#iptcourtDocExecutionDate" + i).val() !== "")? $("#iptcourtDocExecutionDate" + i).val() : null,
						'executionTime' : ($("#iptcourtDocExecutionTime" + i).val() !== "")? $("#iptcourtDocExecutionTime" + i).val() : null,
						'executionAppointmentLetter' : ($("#ckbcourtDocExecutionAppointmentLetter" + i + ":checked").val() !== "")? $("#ckbcourtDocExecutionAppointmentLetter" + i + ":checked").val() : null,
						'executionOther' : ($("#ckbcourtDocExecutionOther" + i + ":checked").val() !== "")? $("#ckbcourtDocExecutionOther" + i + ":checked").val() : null,
						'executionOtherContent' : ($("#iptcourtDocExecutionOther" + i).val() !== "")? $("#iptcourtDocExecutionOther" + i).val() : null,
						// Vo
						'disCourtYearCourt' : $("#iptcourtDocCourtYearCourt" + i).find('option:selected').text(),
						'disTypeOne' : $("#iptcourtDocTypeOne" + i).find('option:selected').text(),
						'disTypeTwo' : $("#iptcourtDocTypeTwo" + i).find('option:selected').text(),
						'disDocStatus' : $("#iptcourtDocDocStatus" + i).find('option:selected').text(),
						'tempCount' : i
					}
					
				courtDoc.subItems.push(subItems);
			}
		}

		returncourtDoc = JSON.stringify(courtDoc.subItems);
		return returncourtDoc;
	},
	// add By Jia 2017-08-10 若必選欄位有空則return並提示
	//index : 第幾頁籤 index = undefined 表示首頁
	courtDocRegex : function(index){
		var isEmpty;
		var returnSaveCourtDoc;
		var returncourtDoc = "";
		var isRegexp;
		if(index === undefined){
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocDocStatus", "法院文[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocReceivedDate", "法院文[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocTypeOne", "法院文[文件類別]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocTypeTwo", "法院文[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocRelationPerson_0", "法院文[相對人]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocCourtYearCourt", "法院文[法院年字案股 : 法院]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocCourtYearYear", "法院文[法院年字案股 : 年度]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocCourtYearTxt", "法院文[法院年字案股 : 字]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocCourtYearShare", "法院文[法院年字案股 : 股別]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocCourtYearCaseId", "法院文[法院年字案股 : 案號]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			if($("#iptcourtDocShareCaseId_0").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocShareCaseId_0", law.regex.numberRegex, "法院文[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocShareCaseId_1").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocShareCaseId_1", law.regex.numberRegex, "法院文[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocShareCaseId_2").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocShareCaseId_2", law.regex.numberRegex, "法院文[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocShareCaseId_3").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocShareCaseId_3", law.regex.numberRegex, "法院文[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCourtYearYear").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCourtYearYear", law.regex.numberRegex, "法院文[法院年字案股 : 年度]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCourtYearCaseId").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCourtYearCaseId", law.regex.numberRegex, "法院文[法院年字案股 : 案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocRuledAmount").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocRuledAmount", law.regex.numberRegex, "法院文[裁定金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDistributionAmount").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDistributionAmount", law.regex.numberRegex, "法院文[裁定金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocApplyDebtDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocApplyDebtDays", law.regex.numberRegex, "法院文[申報債權-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocRepayDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocRepayDays", law.regex.numberRegex, "法院文[受償情形-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocUseDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocUseDays", law.regex.numberRegex, "法院文[使用情形-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocOpinionDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocOpinionDays", law.regex.numberRegex, "法院文[陳報意見-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocAccountDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocAccountDays", law.regex.numberRegex, "法院文[匯款帳戶-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocPleaseDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocPleaseDays", law.regex.numberRegex, "法院文[陳報匯款入帳聲請書-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocReportOtherDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocReportOtherDays", law.regex.numberRegex, "法院文[陳報其他-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocTranscriptsDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocTranscriptsDays", law.regex.numberRegex, "法院文[補正-戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCoOwnedTranscriptsDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCoOwnedTranscriptsDays", law.regex.numberRegex, "法院文[補正-共有人戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocMortgageeTranscriptsDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocMortgageeTranscriptsDays", law.regex.numberRegex, "法院文[補正-抵押權人戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocLawTranscriptsDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocLawTranscriptsDays", law.regex.numberRegex, "法院文[補正-法代戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocHeirTranscriptsDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocHeirTranscriptsDays", law.regex.numberRegex, "法院文[補正-繼承人戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDirtTranscriptsDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDirtTranscriptsDays", law.regex.numberRegex, "法院文[補正-土謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocBuiltTranscriptsDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocBuiltTranscriptsDays", law.regex.numberRegex, "法院文[補正-建謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDistributionDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDistributionDays", law.regex.numberRegex, "法院文[補正-分配表 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocThingThirdDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocThingThirdDays", law.regex.numberRegex, "法院文[補正-事項表(第三人) 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocThingDebtDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocThingDebtDays", law.regex.numberRegex, "法院文[補正-事項表(債權人) 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCoOwnedDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCoOwnedDays", law.regex.numberRegex, "法院文[補正-共有人名冊 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDebtDocDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDebtDocDays", law.regex.numberRegex, "法院文[補正-債權文件 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDetailDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDetailDays", law.regex.numberRegex, "法院文[補正-帳務明細 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocFileDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocFileDays", law.regex.numberRegex, "法院文[補正-執名附件 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDebtContinueDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDebtContinueDays", law.regex.numberRegex, "法院文[補正-債證續行表 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCashierCheckDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCashierCheckDays", law.regex.numberRegex, "法院文[補正-本票 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocOtherDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocOtherDays", law.regex.numberRegex, "法院文[補正-其它 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocProgramCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocProgramCost", law.regex.numberRegex, "法院文[繳費-程序費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocProgramDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocProgramDays", law.regex.numberRegex, "法院文[繳費-程序費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocLegalActionCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocLegalActionCost", law.regex.numberRegex, "法院文[繳費-訴訟費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocLegalActionDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocLegalActionDays", law.regex.numberRegex, "法院文[繳費-訴訟費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocExcuteCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocExcuteCost", law.regex.numberRegex, "法院文[繳費-執行費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocExcuteDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocExcuteDays", law.regex.numberRegex, "法院文[繳費-執行費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocReplacementCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocReplacementCost", law.regex.numberRegex, "法院文[繳費-補發費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocReplacementDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocReplacementDays", law.regex.numberRegex, "法院文[繳費-補發費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocSectorCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocSectorCost", law.regex.numberRegex, "法院文[繳費-指界費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocSectorDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocSectorDays", law.regex.numberRegex, "法院文[繳費-指界費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocValuationCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocValuationCost", law.regex.numberRegex, "法院文[繳費-鑑價費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocValuationDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocValuationDays", law.regex.numberRegex, "法院文[繳費-鑑價費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocRebirthCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocRebirthCost", law.regex.numberRegex, "法院文[繳費-複丈費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocRebirthDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocRebirthDays", law.regex.numberRegex, "法院文[繳費-複丈費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocMeasureCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocMeasureCost", law.regex.numberRegex, "法院文[繳費-測量費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocMeasureDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocMeasureDays", law.regex.numberRegex, "法院文[繳費-測量費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocSaveCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocSaveCost", law.regex.numberRegex, "法院文[繳費-提存金 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocSaveDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocSaveDays", law.regex.numberRegex, "法院文[繳費-提存金 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCentralizedCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCentralizedCost", law.regex.numberRegex, "法院文[繳費-集保 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCentralizedDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCentralizedDays", law.regex.numberRegex, "法院文[繳費-集保 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocInsuranceCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocInsuranceCost", law.regex.numberRegex, "法院文[繳費-保單 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocInsuranceDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocInsuranceDays", law.regex.numberRegex, "法院文[繳費-保單 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocPostCost").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocPostCost", law.regex.numberRegex, "法院文[繳費-郵局 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocPostDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocPostDays", law.regex.numberRegex, "法院文[繳費-郵局 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocPublishDays").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocPublishDays", law.regex.numberRegex, "法院文[登報-登報-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
		}else{
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocDocStatus" + index, "法院文[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocReceivedDate" + index, "法院文[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocTypeOne" + index, "法院文[文件類別]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocTypeTwo" + index, "法院文[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocRelationPerson" + index + "_0", "法院文[相對人]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptcourtDocCourtYearCourt" + index, "法院文[法院年字案股 : 法院]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocCourtYearYear" + index, "法院文[法院年字案股 : 年度]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocCourtYearTxt" + index, "法院文[法院年字案股 : 字]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocCourtYearShare" + index, "法院文[法院年字案股 : 股別]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			isEmpty = law.common.checkIsEmpty("iptcourtDocCourtYearCaseId" + index, "法院文[法院年字案股 : 案號]");
			if(isEmpty.isEmpty){
				returnSaveCourtDoc = { isEmpty : true, regexString : isEmpty.regexString, returncourtDoc : returncourtDoc}
				return returnSaveCourtDoc;
			}
			if($("#iptcourtDocShareCaseId"  + index + "_0").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocShareCaseId" + index + "_0", law.regex.numberRegex, "法院文[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocShareCaseId" + index + "_1").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocShareCaseId" + index + "_1", law.regex.numberRegex, "法院文[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocShareCaseId" + index + "_2").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocShareCaseId" + index + "_2", law.regex.numberRegex, "法院文[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocShareCaseId" + index + "_3").val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocShareCaseId" + index + "_3", law.regex.numberRegex, "法院文[共用案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCourtYearYear" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCourtYearYear" + index, law.regex.numberRegex, "法院文[法院年字案股 : 年度]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCourtYearCaseId" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCourtYearCaseId" + index, law.regex.numberRegex, "法院文[法院年字案股 : 案號]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocRuledAmount" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocRuledAmount" + index, law.regex.numberRegex, "法院文[裁定金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDistributionAmount" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDistributionAmount" + index, law.regex.numberRegex, "法院文[裁定金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocApplyDebtDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocApplyDebtDays" + index, law.regex.numberRegex, "法院文[申報債權-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocRepayDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocRepayDays" + index, law.regex.numberRegex, "法院文[受償情形-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocUseDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocUseDays" + index, law.regex.numberRegex, "法院文[使用情形-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocOpinionDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocOpinionDays" + index, law.regex.numberRegex, "法院文[陳報意見-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocAccountDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocAccountDays" + index, law.regex.numberRegex, "法院文[匯款帳戶-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocPleaseDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocPleaseDays" + index, law.regex.numberRegex, "法院文[陳報匯款入帳聲請書-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocReportOtherDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocReportOtherDays" + index, law.regex.numberRegex, "法院文[陳報其他-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocTranscriptsDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocTranscriptsDays" + index, law.regex.numberRegex, "法院文[補正-戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCoOwnedTranscriptsDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCoOwnedTranscriptsDays" + index, law.regex.numberRegex, "法院文[補正-共有人戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocMortgageeTranscriptsDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocMortgageeTranscriptsDays" + index, law.regex.numberRegex, "法院文[補正-抵押權人戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocLawTranscriptsDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocLawTranscriptsDays" + index, law.regex.numberRegex, "法院文[補正-法代戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocHeirTranscriptsDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocHeirTranscriptsDays" + index, law.regex.numberRegex, "法院文[補正-繼承人戶謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDirtTranscriptsDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDirtTranscriptsDays" + index, law.regex.numberRegex, "法院文[補正-土謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocBuiltTranscriptsDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocBuiltTranscriptsDays" + index, law.regex.numberRegex, "法院文[補正-建謄 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDistributionDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDistributionDays" + index, law.regex.numberRegex, "法院文[補正-分配表 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocThingThirdDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocThingThirdDays" + index, law.regex.numberRegex, "法院文[補正-事項表(第三人) 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocThingDebtDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocThingDebtDays" + index, law.regex.numberRegex, "法院文[補正-事項表(債權人) 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCoOwnedDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCoOwnedDays" + index, law.regex.numberRegex, "法院文[補正-共有人名冊 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDebtDocDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDebtDocDays" + index, law.regex.numberRegex, "法院文[補正-債權文件 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDetailDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDetailDays" + index, law.regex.numberRegex, "法院文[補正-帳務明細 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocFileDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocFileDays" + index, law.regex.numberRegex, "法院文[補正-執名附件 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocDebtContinueDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocDebtContinueDays" + index, law.regex.numberRegex, "法院文[補正-債證續行表 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCashierCheckDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCashierCheckDays" + index, law.regex.numberRegex, "法院文[補正-本票 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocOtherDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocOtherDays" + index, law.regex.numberRegex, "法院文[補正-其它 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocProgramCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocProgramCost" + index, law.regex.numberRegex, "法院文[繳費-程序費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocProgramDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocProgramDays" + index, law.regex.numberRegex, "法院文[繳費-程序費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocLegalActionCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocLegalActionCost" + index, law.regex.numberRegex, "法院文[繳費-訴訟費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocLegalActionDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocLegalActionDays" + index, law.regex.numberRegex, "法院文[繳費-訴訟費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocExcuteCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocExcuteCost" + index, law.regex.numberRegex, "法院文[繳費-執行費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocExcuteDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocExcuteDays" + index, law.regex.numberRegex, "法院文[繳費-執行費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocReplacementCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocReplacementCost" + index, law.regex.numberRegex, "法院文[繳費-補發費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocReplacementDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocReplacementDays" + index, law.regex.numberRegex, "法院文[繳費-補發費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocSectorCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocSectorCost" + index, law.regex.numberRegex, "法院文[繳費-指界費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocSectorDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocSectorDays" + index, law.regex.numberRegex, "法院文[繳費-指界費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocValuationCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocValuationCost" + index, law.regex.numberRegex, "法院文[繳費-鑑價費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocValuationDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocValuationDays" + index, law.regex.numberRegex, "法院文[繳費-鑑價費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocRebirthCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocRebirthCost" + index, law.regex.numberRegex, "法院文[繳費-複丈費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocRebirthDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocRebirthDays" + index, law.regex.numberRegex, "法院文[繳費-複丈費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocMeasureCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocMeasureCost" + index, law.regex.numberRegex, "法院文[繳費-測量費 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocMeasureDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocMeasureDays" + index, law.regex.numberRegex, "法院文[繳費-測量費 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocSaveCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocSaveCost" + index, law.regex.numberRegex, "法院文[繳費-提存金 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocSaveDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocSaveDays" + index, law.regex.numberRegex, "法院文[繳費-提存金 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCentralizedCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCentralizedCost" + index, law.regex.numberRegex, "法院文[繳費-集保 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocCentralizedDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocCentralizedDays" + index, law.regex.numberRegex, "法院文[繳費-集保 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocInsuranceCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocInsuranceCost" + index, law.regex.numberRegex, "法院文[繳費-保單 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocInsuranceDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocInsuranceDays" + index, law.regex.numberRegex, "法院文[繳費-保單 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocPostCost" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocPostCost" + index, law.regex.numberRegex, "法院文[繳費-郵局 金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocPostDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocPostDays" + index, law.regex.numberRegex, "法院文[繳費-郵局 繳費期限]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
			if($("#iptcourtDocPublishDays" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptcourtDocPublishDays" + index, law.regex.numberRegex, "法院文[登報-登報-文到 日內]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveCourtDoc = { isRegexp : true, regexString : isRegexp.regexString, returncourtDoc : returncourtDoc}
					return returnSaveCourtDoc;
				}
			}
		}
		// 全部為空驗證通過
		returnSaveCourtDoc = { isEmpty : false, isRegexp : false};
		return returnSaveCourtDoc;
	},
	// 從文管系統進入 初始化頁籤
	initopenCourtDocsubtab : function (couetDocDocInfo){
		var courtDoc = law.addDoc.courtDoc;
		var i = 0;
		$("#iptcourtDocShareCaseId_0").val(couetDocDocInfo.shareCaseId0 !== undefined ? couetDocDocInfo.shareCaseId0 : "");// 共用案號1
		$("#iptcourtDocShareCaseId_1").val(couetDocDocInfo.shareCaseId1 !== undefined ? couetDocDocInfo.shareCaseId1 : "");// 共用案號2
		$("#iptcourtDocShareCaseId_2").val(couetDocDocInfo.shareCaseId2 !== undefined ? couetDocDocInfo.shareCaseId2 : "");// 共用案號3
		$("#iptcourtDocShareCaseId_3").val(couetDocDocInfo.shareCaseId3 !== undefined ? couetDocDocInfo.shareCaseId3 : "");// 共用案號4
		if(couetDocDocInfo.shadow !== undefined){
			if(couetDocDocInfo.shadow === "0"){
				$("#rdocourtDocShadow").prop("checked", true);
			}else if(couetDocDocInfo.shadow === "1"){
				$("#rdocourtDocShadowBank").prop("checked", true);
			}
		}
		$("#iptcourtDocBankDate").val(couetDocDocInfo.bankDate !== undefined ? couetDocDocInfo.bankDate : "");// 業主調件日
		$("#iptcourtDocReceivedDate").val(couetDocDocInfo.receivedDate);// 收文日期
		law.common.selectOption("#iptcourtDocDocStatus", courtDoc.DocStatus, couetDocDocInfo.docStatus, true);// 文件狀態
		law.common.selectOption("#iptcourtDocTypeOne", courtDoc.TypeOne, couetDocDocInfo.typeOne, true);// 文件類別
		law.common.selectOption("#iptcourtDocTypeTwo", courtDoc.TypeTwo, couetDocDocInfo.typeTwo, true);// 文件項目
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptcourtDocBankName").append(BankNameSelectOption);
		$("#iptcourtDocBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');// 債權人
		
		//動態跑出原債權人
		if($("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B1" ||
				$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B2" ||
				$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B3" ||
				$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B4" ||
				$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B5" ||
				$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B6" ||
				$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B7" ||
				$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-CD" ||
				$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-CR"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.TSBOldBankName, couetDocDocInfo.oldBankName, true);
		}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "FEI_BK"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.FEIOldBankName, couetDocDocInfo.oldBankName, true);
		}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "SK_BK"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.SKOldBankName, couetDocDocInfo.oldBankName, true);
		}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "YT_AMC" ||
				$("#iptcourtDocBankName").find('option:selected').val() ===  "YT_IS"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.YTOldBankName, couetDocDocInfo.oldBankName, true);
		}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "FI-AMC"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.FIOldBankName, couetDocDocInfo.oldBankName, true);
		}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "TS-AMC"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.TSAOldBankName, couetDocDocInfo.oldBankName, true);
		}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "TAMCO"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.TAMCOOldBankName, couetDocDocInfo.oldBankName, true);
		}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "ORIX_AMC"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.ORIXOldBankName, couetDocDocInfo.oldBankName, true);
		}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "MT-IS"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.MTOldBankName, couetDocDocInfo.oldBankName, true);
		}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "UN_IS"){
			law.common.selectOption("#iptcourtDocOldBankName", courtDoc.UNOldBankName, couetDocDocInfo.oldBankName, true);
		}else{
			var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
			$("#iptcourtDocOldBankName" + " option").remove();
			$("#iptcourtDocOldBankName").append(selectNull);
		}
		
		for(;i < couetDocDocInfo.courtDocRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocRelationPerson[i].ID + "," + couetDocDocInfo.courtDocRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocRelationPersonId_" + i).val(couetDocDocInfo.courtDocRelationPerson[i].courtDocRelaId);
		}
		
		law.common.selectOption("#iptcourtDocCourtYearCourt", courtDoc.CourtYearCourt, couetDocDocInfo.courtYearCourt, true); // 法院年字案股 法院
		$("#iptcourtDocCourtYearYear").val(couetDocDocInfo.courtYearYear !== undefined ? couetDocDocInfo.courtYearYear : "");// 法院年字案股 年度
		$("#iptcourtDocCourtYearTxt").val(couetDocDocInfo.courtYearTxt !== undefined ? couetDocDocInfo.courtYearTxt : "");// 法院年字案股 字
		$("#iptcourtDocCourtYearShare").val(couetDocDocInfo.courtYearShare !== undefined ? couetDocDocInfo.courtYearShare : "");// 法院年字案股 股別
		$("#iptcourtDocCourtYearCaseId").val(couetDocDocInfo.courtYearCaseId !== undefined ? couetDocDocInfo.courtYearCaseId : "");// 法院年字案股 案號
		
		$("#iptcourtDocRuledDate").val(couetDocDocInfo.ruledDate !== undefined ? couetDocDocInfo.ruledDate : "");// 收到裁定日
		$("#iptcourtDocRuledAmount").val(couetDocDocInfo.ruledAmount !== 0 ? couetDocDocInfo.ruledAmount : "");// 裁定金額
		$("#iptcourtDocApplyConfirmationDate").val(couetDocDocInfo.applyConfirmationDate !== undefined ? couetDocDocInfo.applyConfirmationDate : "");// 聲請確證日
		$("#iptcourtDocReceivedConfirmationDate").val(couetDocDocInfo.receivedConfirmationDate !== undefined ? couetDocDocInfo.receivedConfirmationDate : "");// 收確證日
		$("#iptcourtDocFailureDate").val(couetDocDocInfo.failureDate !== undefined ? couetDocDocInfo.failureDate : "");// 失效日
		$("#iptcourtDocApplyLawThird").val(couetDocDocInfo.applyLawThird !== undefined ? couetDocDocInfo.applyLawThird : "");// 扣薪第三人(25字)
		$("#iptcourtDocAddAddress").val(couetDocDocInfo.addAddress !== undefined ? couetDocDocInfo.addAddress : "");// 扣薪第三人地址(30字)
		$("#iptcourtDocDistributionAmount").val(couetDocDocInfo.distributionAmount !== 0 ? couetDocDocInfo.distributionAmount : "");// 分配金額
		$("#iptcourtDocApprovedDelayDate").val(couetDocDocInfo.approvedDelayDate !== undefined ? couetDocDocInfo.approvedDelayDate : "");// 核准暫緩日
		$("#iptcourtDocDelayEndDate").val(couetDocDocInfo.delayEndDate !== undefined ? couetDocDocInfo.delayEndDate : "");// 暫緩到期日
		$("#iptcourtDocSectorDate").val(couetDocDocInfo.sectorDate !== undefined ? couetDocDocInfo.sectorDate : "");// 查封指界日
		$("#iptcourtDocMeasureDate").val(couetDocDocInfo.measureDate !== undefined ? couetDocDocInfo.measureDate : "");// 測量日
		$("#iptcourtDocValuationDate").val(couetDocDocInfo.valuationDate !== undefined ? couetDocDocInfo.valuationDate : "");// 鑑價日
		$("#iptcourtDocRebirthDate").val(couetDocDocInfo.rebirthDate !== undefined ? couetDocDocInfo.rebirthDate : "");// 複丈日
		$("#iptcourtDocSurveyDate").val(couetDocDocInfo.surveyDate !== undefined ? couetDocDocInfo.surveyDate : "");// 履勘日
		$("#iptcourtDocInquiryDate").val(couetDocDocInfo.inquiryDate !== undefined ? couetDocDocInfo.inquiryDate : "");// 詢價日
		$("#iptcourtDocFirstSaleDate").val(couetDocDocInfo.firstSaleDate !== undefined ? couetDocDocInfo.firstSaleDate : "");// 一拍日
		$("#iptcourtDocSecondSaleDate").val(couetDocDocInfo.secondSaleDate !== undefined ? couetDocDocInfo.secondSaleDate : "");// 二拍日
		$("#iptcourtDocThirdSaleDate").val(couetDocDocInfo.thirdSaleDate !== undefined ? couetDocDocInfo.thirdSaleDate : "");// 三拍日
		$("#iptcourtDocPostBuyDate").val(couetDocDocInfo.postBuyDate !== undefined ? couetDocDocInfo.postBuyDate : "");// 公告應買日
		$("#iptcourtDocPostEndDate").val(couetDocDocInfo.postEndDate !== undefined ? couetDocDocInfo.postEndDate : "");// 公告到期日
		$("#iptcourtDocReduceSaleDate").val(couetDocDocInfo.reduceSaleDate !== undefined ? couetDocDocInfo.reduceSaleDate : "");// 減拍日
		$("#iptcourtDocDestoryDate").val(couetDocDocInfo.destoryDate !== undefined ? couetDocDocInfo.destoryDate : "");// 塗銷登記日
		$("#iptcourtDocRealDistributionDate").val(couetDocDocInfo.realDistributionDate !== undefined ? couetDocDocInfo.realDistributionDate : "");// 實際分配日
		$("#iptcourtDocProgress").val(couetDocDocInfo.progress !== undefined ? couetDocDocInfo.progress : "");// 進度
		$("#iptcourtDocRemark").val(couetDocDocInfo.remark !== undefined ? couetDocDocInfo.remark : "");// 備註
		
		$("#iptcourtDocApplyDebtDays").val(couetDocDocInfo.applyDebtDays !== 0 ? couetDocDocInfo.applyDebtDays : "");// 申報債權-文到日內
		$("#iptcourtDocRepayDays").val(couetDocDocInfo.repayDays !== 0 ? couetDocDocInfo.repayDays : "");// 受償情形-文到日內
		$("#iptcourtDocUseDays").val(couetDocDocInfo.useDays !== 0 ? couetDocDocInfo.useDays : "");// 使用情形-文到日內
		$("#iptcourtDocOpinionDays").val(couetDocDocInfo.opinionDays !== 0 ? couetDocDocInfo.opinionDays : "");// 陳報意見-文到日內
		$("#iptcourtDocAccountDays").val(couetDocDocInfo.accountDays !== 0 ? couetDocDocInfo.accountDays : "");// 匯款帳戶-文到日內
		$("#iptcourtDocPleaseDays").val(couetDocDocInfo.pleaseDays !== 0 ? couetDocDocInfo.pleaseDays : "");// 陳報匯款入帳聲請書-文到日內
		$("#iptcourtDocReportOther").val(couetDocDocInfo.reportOther !== undefined ? couetDocDocInfo.reportOther : "");// 陳報其他
		$("#iptcourtDocReportOtherDays").val(couetDocDocInfo.reportOtherDays !== 0 ? couetDocDocInfo.reportOtherDays : "");// 陳報其他-文到日內
		$("#iptcourtDocReportDescription").val(couetDocDocInfo.reportDescription !== undefined ? couetDocDocInfo.reportDescription : "");// 陳報說明
		
		$("#iptcourtDocTranscriptsDays").val(couetDocDocInfo.transcriptsDays !== 0 ? couetDocDocInfo.transcriptsDays : "");// 戶謄日內
		$("#iptcourtDocTranscriptsRemark").val(couetDocDocInfo.transcriptsRemark !== undefined ? couetDocDocInfo.transcriptsRemark : "");// 戶謄備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocTranscriptsRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocTranscriptsRelationPerson[i].ID + "," + couetDocDocInfo.courtDocTranscriptsRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocTranscriptsRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocTranscriptsRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocTranscriptsRelationPersonId_" + i).val(couetDocDocInfo.courtDocTranscriptsRelationPerson[i].courtDocTranscriptsRelaId);
		}
		
		$("#iptcourtDocCoOwnedTranscriptsDays").val(couetDocDocInfo.coOwnedTranscriptsDays !== 0 ? couetDocDocInfo.coOwnedTranscriptsDays : "");// 共有人戶謄日內
		$("#iptcourtDocCoOwnedTranscriptsRemark").val(couetDocDocInfo.coOwnedTranscriptsRemark !== undefined ? couetDocDocInfo.coOwnedTranscriptsRemark : "");// 共有人戶謄備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocCoOwnedTranscriptsRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocCoOwnedTranscriptsRelationPerson[i].ID + "," + couetDocDocInfo.courtDocCoOwnedTranscriptsRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocCoOwnedTranscriptsRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocCoOwnedTranscriptsRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocCoOwnedTranscriptsRelationPersonId_" + i).val(couetDocDocInfo.courtDocCoOwnedTranscriptsRelationPerson[i].courtDocCoOwnedTranscriptsRelaId);
		}
		
		$("#iptcourtDocMortgageeTranscriptsDays").val(couetDocDocInfo.mortgageeTranscriptsDays !== 0 ? couetDocDocInfo.mortgageeTranscriptsDays : "");// 抵押權人戶謄日內
		$("#iptcourtDocMortgageeTranscriptsRemark").val(couetDocDocInfo.mortgageeTranscriptsRemark !== undefined ? couetDocDocInfo.mortgageeTranscriptsRemark : "");// 抵押權人戶謄備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocMortgageeTranscriptsRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocMortgageeTranscriptsRelationPerson[i].ID + "," + couetDocDocInfo.courtDocMortgageeTranscriptsRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocMortgageeTranscriptsRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocMortgageeTranscriptsRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocMortgageeTranscriptsRelationPersonId_" + i).val(couetDocDocInfo.courtDocMortgageeTranscriptsRelationPerson[i].courtDocMortgageeTranscriptsRelaId);
		}
		
		$("#iptcourtDocLawTranscriptsDays").val(couetDocDocInfo.lawTranscriptsDays !== 0 ? couetDocDocInfo.lawTranscriptsDays : "");// 法代戶謄日內
		$("#iptcourtDocLawTranscriptsRemark").val(couetDocDocInfo.lawTranscriptsRemark !== undefined ? couetDocDocInfo.lawTranscriptsRemark : "");// 法代戶謄備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocLawTranscriptsRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocLawTranscriptsRelationPerson[i].ID + "," + couetDocDocInfo.courtDocLawTranscriptsRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocLawTranscriptsRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocLawTranscriptsRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocLawTranscriptsRelationPersonId_" + i).val(couetDocDocInfo.courtDocLawTranscriptsRelationPerson[i].courtDocLawTranscriptsRelaId);
		}

		$("#iptcourtDocHeirTranscriptsDays").val(couetDocDocInfo.heirTranscriptsDays !== 0 ? couetDocDocInfo.heirTranscriptsDays : "");// 繼承人戶謄日內
		$("#iptcourtDocHeirTranscriptsRemark").val(couetDocDocInfo.heirTranscriptsRemark !== undefined ? couetDocDocInfo.heirTranscriptsRemark : "");// 繼承人戶謄備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocHeirTranscriptsRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocHeirTranscriptsRelationPerson[i].ID + "," + couetDocDocInfo.courtDocHeirTranscriptsRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocHeirTranscriptsRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocHeirTranscriptsRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocHeirTranscriptsRelationPersonId_" + i).val(couetDocDocInfo.courtDocHeirTranscriptsRelationPerson[i].courtDocHeirTranscriptsRelaId);
		}

		$("#iptcourtDocDirtTranscriptsDays").val(couetDocDocInfo.dirtTranscriptsDays !== 0 ? couetDocDocInfo.dirtTranscriptsDays : "");// 土謄日內
		$("#iptcourtDocDirtTranscriptsRemark").val(couetDocDocInfo.dirtTranscriptsRemark !== undefined ? couetDocDocInfo.dirtTranscriptsRemark : "");// 土謄備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocDirtTranscriptsRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocDirtTranscriptsRelationPerson[i].ID + "," + couetDocDocInfo.courtDocDirtTranscriptsRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocDirtTranscriptsRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocDirtTranscriptsRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocDirtTranscriptsRelationPersonId_" + i).val(couetDocDocInfo.courtDocDirtTranscriptsRelationPerson[i].courtDocDirtTranscriptsRelaId);
		}

		$("#iptcourtDocBuiltTranscriptsDays").val(couetDocDocInfo.builtTranscriptsDays !== 0 ? couetDocDocInfo.builtTranscriptsDays : "");// 建謄日內
		$("#iptcourtDocBuiltTranscriptsRemark").val(couetDocDocInfo.builtTranscriptsRemark !== undefined ? couetDocDocInfo.builtTranscriptsRemark : "");// 建謄備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocBuiltTranscriptsRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocBuiltTranscriptsRelationPerson[i].ID + "," + couetDocDocInfo.courtDocBuiltTranscriptsRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocBuiltTranscriptsRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocBuiltTranscriptsRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocBuiltTranscriptsRelationPersonId_" + i).val(couetDocDocInfo.courtDocBuiltTranscriptsRelationPerson[i].courtDocBuiltTranscriptsRelaId);
		}

		$("#iptcourtDocDistributionDays").val(couetDocDocInfo.distributionDays !== 0 ? couetDocDocInfo.distributionDays : "");// 分配表日內
		$("#iptcourtDocDistributionRemark").val(couetDocDocInfo.distributionRemark !== undefined ? couetDocDocInfo.distributionRemark : "");// 分配表備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocDistributionRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocDistributionRelationPerson[i].ID + "," + couetDocDocInfo.courtDocDistributionRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocDistributionRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocDistributionRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocDistributionRelationPersonId_" + i).val(couetDocDocInfo.courtDocDistributionRelationPerson[i].courtDocDistributionRelaId);
		}

		$("#iptcourtDocThingThirdDays").val(couetDocDocInfo.thingThirdDays !== 0 ? couetDocDocInfo.thingThirdDays : "");// 事項表(第三人)日內
		$("#iptcourtDocThingThirdRemark").val(couetDocDocInfo.thingThirdRemark !== undefined ? couetDocDocInfo.thingThirdRemark : "");// 事項表(第三人)備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocThingThirdRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocThingThirdRelationPerson[i].ID + "," + couetDocDocInfo.courtDocThingThirdRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocThingThirdRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocThingThirdRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocThingThirdRelationPersonId_" + i).val(couetDocDocInfo.courtDocThingThirdRelationPerson[i].courtDocThingThirdRelaId);
		}

		$("#iptcourtDocThingDebtDays").val(couetDocDocInfo.thingDebtDays !== 0 ? couetDocDocInfo.thingDebtDays : "");// 事項表(債權人)日內
		$("#iptcourtDocThingDebtRemark").val(couetDocDocInfo.thingDebtRemark !== undefined ? couetDocDocInfo.thingDebtRemark : "");// 事項表(債權人)備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocThingDebtRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocThingDebtRelationPerson[i].ID + "," + couetDocDocInfo.courtDocThingDebtRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocThingDebtRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocThingDebtRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocThingDebtRelationPersonId_" + i).val(couetDocDocInfo.courtDocThingDebtRelationPerson[i].courtDocThingDebtRelaId);
		}

		$("#iptcourtDocCoOwnedDays").val(couetDocDocInfo.coOwnedDays !== 0 ? couetDocDocInfo.coOwnedDays : "");// 共有人名冊日內
		$("#iptcourtDocCoOwnedRemark").val(couetDocDocInfo.coOwnedRemark !== undefined ? couetDocDocInfo.coOwnedRemark : "");// 共有人名冊備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocCoOwnedRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocCoOwnedRelationPerson[i].ID + "," + couetDocDocInfo.courtDocCoOwnedRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocCoOwnedRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocCoOwnedRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocCoOwnedRelationPersonId_" + i).val(couetDocDocInfo.courtDocCoOwnedRelationPerson[i].courtDocCoOwnedRelaId);
		}

		$("#iptcourtDocDebtDocDays").val(couetDocDocInfo.debtDocDays !== 0 ? couetDocDocInfo.debtDocDays : "");// 債權文件日內
		$("#iptcourtDocDebtDocRemark").val(couetDocDocInfo.debtDocRemark !== undefined ? couetDocDocInfo.debtDocRemark : "");// 債權文件備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocDebtDocRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocDebtDocRelationPerson[i].ID + "," + couetDocDocInfo.courtDocDebtDocRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocDebtDocRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocDebtDocRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocDebtDocRelationPersonId_" + i).val(couetDocDocInfo.courtDocDebtDocRelationPerson[i].courtDocDebtDocRelaId);
		}

		$("#iptcourtDocDetailDays").val(couetDocDocInfo.detailDays !== 0 ? couetDocDocInfo.detailDays : "");// 帳務明細日內
		$("#iptcourtDocDetailRemark").val(couetDocDocInfo.detailRemark !== undefined ? couetDocDocInfo.detailRemark : "");// 帳務明細備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocDetailRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocDetailRelationPerson[i].ID + "," + couetDocDocInfo.courtDocDetailRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocDetailRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocDetailRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocDetailRelationPersonId_" + i).val(couetDocDocInfo.courtDocDetailRelationPerson[i].courtDocDetailRelaId);
		}

		$("#iptcourtDocFileDays").val(couetDocDocInfo.fileDays !== 0 ? couetDocDocInfo.fileDays : "");// 執名附件日內
		$("#iptcourtDocFileRemark").val(couetDocDocInfo.fileRemark !== undefined ? couetDocDocInfo.fileRemark : "");// 執名附件備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocFileRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocFileRelationPerson[i].ID + "," + couetDocDocInfo.courtDocFileRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocFileRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocFileRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocFileRelationPersonId_" + i).val(couetDocDocInfo.courtDocFileRelationPerson[i].courtDocFileRelaId);
		}

		$("#iptcourtDocDebtContinueDays").val(couetDocDocInfo.debtContinueDays !== 0 ? couetDocDocInfo.debtContinueDays : "");// 債證續行表日內
		$("#iptcourtDocDebtContinueRemark").val(couetDocDocInfo.debtContinueRemark !== undefined ? couetDocDocInfo.debtContinueRemark : "");// 債證續行表備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocDebtContinueRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocDebtContinueRelationPerson[i].ID + "," + couetDocDocInfo.courtDocDebtContinueRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocDebtContinueRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocDebtContinueRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocDebtContinueRelationPersonId_" + i).val(couetDocDocInfo.courtDocDebtContinueRelationPerson[i].courtDocDebtContinueRelaId);
		}

		$("#iptcourtDocCashierCheckDays").val(couetDocDocInfo.cashierCheckDays !== 0 ? couetDocDocInfo.cashierCheckDays : "");// 本票日內
		$("#iptcourtDocCashierCheckRemark").val(couetDocDocInfo.cashierCheckRemark !== undefined ? couetDocDocInfo.cashierCheckRemark : "");// 本票備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocCashierCheckRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocCashierCheckRelationPerson[i].ID + "," + couetDocDocInfo.courtDocCashierCheckRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocCashierCheckRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocCashierCheckRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocCashierCheckRelationPersonId_" + i).val(couetDocDocInfo.courtDocCashierCheckRelationPerson[i].courtDocCashierCheckRelaId);
		}

		$("#iptcourtDocRecoveryRemark").val(couetDocDocInfo.recoveryRemark !== undefined ? couetDocDocInfo.recoveryRemark : "");// 回復所有權登記備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocRecoveryRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocRecoveryRelationPerson[i].ID + "," + couetDocDocInfo.courtDocRecoveryRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocRecoveryRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocRecoveryRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocRecoveryRelationPersonId_" + i).val(couetDocDocInfo.courtDocRecoveryRelationPerson[i].courtDocRecoveryRelaId);
		}

		$("#iptcourtDocOtherName").val(couetDocDocInfo.otherValues !== undefined ? couetDocDocInfo.otherValues : "");// 其它
		$("#iptcourtDocOtherDays").val(couetDocDocInfo.otherDays !== 0 ? couetDocDocInfo.otherDays : "");// 其它日內
		$("#iptcourtDocOtherRemark").val(couetDocDocInfo.otherRemark !== undefined ? couetDocDocInfo.otherRemark : "");// 其它備註
		
		i = 0;
		for(;i < couetDocDocInfo.courtDocOtherRelationPerson.length; i++){
			var selectVal = couetDocDocInfo.courtDocOtherRelationPerson[i].ID + "," + couetDocDocInfo.courtDocOtherRelationPerson[i].P_ID;
			if(i !== 0){
				law.addDoc.courtDoc.addcourtDocOtherRelaTd(0);
			}
			law.common.selectRelaOption("#iptcourtDocOtherRelationPerson_" + i, law.addDoc.rela, selectVal, true); // 相對人
			$("#iptcourtDocOtherRelationPersonId_" + i).val(couetDocDocInfo.courtDocOtherRelationPerson[i].courtDocOtherRelaId);
		}

		$("#iptcourtDocEdit").val(couetDocDocInfo.edit !== undefined ? couetDocDocInfo.edit : "");// 補正說明
		
		$("#iptcourtDocProgramCost").val(couetDocDocInfo.programCost !== 0 ? couetDocDocInfo.programCost : "");// 程序費-金額
		$("#iptcourtDocProgramDays").val(couetDocDocInfo.programDays !== 0 ? couetDocDocInfo.programDays : "");// 程序費-繳費期限
		$("#iptcourtDocLegalActionCost").val(couetDocDocInfo.legalActionCost !== 0 ? couetDocDocInfo.legalActionCost : "");// 訴訟費-金額
		$("#iptcourtDocLegalActionDays").val(couetDocDocInfo.legalActionDays !== 0 ? couetDocDocInfo.legalActionDays : "");// 訴訟費-繳費期限
		$("#iptcourtDocExcuteCost").val(couetDocDocInfo.excuteCost !== 0 ? couetDocDocInfo.excuteCost : "");// 執行費-金額
		$("#iptcourtDocExcuteDays").val(couetDocDocInfo.excuteDays !== 0 ? couetDocDocInfo.excuteDays : "");// 執行費-繳費期限
		$("#iptcourtDocReplacementCost").val(couetDocDocInfo.replacementCost !== 0 ? couetDocDocInfo.replacementCost : "");// 補發費-金額
		$("#iptcourtDocReplacementDays").val(couetDocDocInfo.replacementDays !== 0 ? couetDocDocInfo.replacementDays : "");// 補發費-繳費期限
		$("#iptcourtDocSectorCost").val(couetDocDocInfo.sectorCost !== 0 ? couetDocDocInfo.sectorCost : "");// 指界費-金額
		$("#iptcourtDocSectorDays").val(couetDocDocInfo.sectorDays !== 0 ? couetDocDocInfo.sectorDays : "");// 指界費-繳費期限
		$("#iptcourtDocValuationCost").val(couetDocDocInfo.valuationCost !== 0 ? couetDocDocInfo.valuationCost : "");// 鑑價費-金額
		$("#iptcourtDocValuationDays").val(couetDocDocInfo.valuationDays !== 0 ? couetDocDocInfo.valuationDays : "");// 鑑價費-繳費期限
		$("#iptcourtDocRebirthCost").val(couetDocDocInfo.rebirthCost !== 0 ? couetDocDocInfo.rebirthCost : "");// 複丈費-金額
		$("#iptcourtDocRebirthDays").val(couetDocDocInfo.rebirthDays !== 0 ? couetDocDocInfo.rebirthDays : "");// 複丈費-繳費期限
		$("#iptcourtDocMeasureCost").val(couetDocDocInfo.measureCost !== 0 ? couetDocDocInfo.measureCost : "");// 測量費-金額
		$("#iptcourtDocMeasureDays").val(couetDocDocInfo.measureDays !== 0 ? couetDocDocInfo.measureDays : "");// 測量費-繳費期限
		$("#iptcourtDocSaveCost").val(couetDocDocInfo.saveCost !== 0 ? couetDocDocInfo.saveCost : "");// 提存金-金額
		$("#iptcourtDocSaveDays").val(couetDocDocInfo.saveDays !== 0 ? couetDocDocInfo.saveDays : "");// 提存金-繳費期限
		$("#iptcourtDocCentralizedCost").val(couetDocDocInfo.centralizedCost !== 0 ? couetDocDocInfo.centralizedCost : "");// 集保-金額
		$("#iptcourtDocCentralizedDays").val(couetDocDocInfo.centralizedDays !== 0 ? couetDocDocInfo.centralizedDays : "");// 集保-繳費期限
		$("#iptcourtDocInsuranceCost").val(couetDocDocInfo.insuranceCost !== 0 ? couetDocDocInfo.insuranceCost : "");// 保單-金額
		$("#iptcourtDocInsuranceDays").val(couetDocDocInfo.insuranceDays !== 0 ? couetDocDocInfo.insuranceDays : "");// 保單-繳費期限
		$("#iptcourtDocPostCost").val(couetDocDocInfo.postCost !== 0 ? couetDocDocInfo.postCost : "");// 郵局-金額
		$("#iptcourtDocPostDays").val(couetDocDocInfo.postDays !== 0 ? couetDocDocInfo.postDays : "");// 郵局-繳費期限
		
		$("#iptcourtDocPublishDays").val(couetDocDocInfo.publishDays !== 0 ? couetDocDocInfo.publishDays : "");// 登報-文到日內
		law.common.selectOption("#iptcourtDocPublishObject", courtDoc.PublishObject, couetDocDocInfo.publishObject, true);
		law.common.selectOption("#iptcourtDocPublishThings", courtDoc.PublishThings, couetDocDocInfo.publishThings, true);// 登報-事項
		$("#iptcourtDocPublishRemark").val(couetDocDocInfo.publishRemark !== undefined ? couetDocDocInfo.publishRemark : "");// 登報-備註
		
		$("#iptcourtDocToCourtDate").val(couetDocDocInfo.toCourtDate !== undefined ? couetDocDocInfo.toCourtDate : "");// 開庭日期
		$("#iptcourtDocToCourtTime").val(couetDocDocInfo.toCourtTime !== undefined ? couetDocDocInfo.toCourtTime : "");// 開庭時間
		$("#iptcourtDocToCourtType").val(couetDocDocInfo.toCourtType !== undefined ? couetDocDocInfo.toCourtType : "");// 期日種類
		$("#iptcourtDocToCourtNotice").val(couetDocDocInfo.toCourtNotice !== undefined ? couetDocDocInfo.toCourtNotice : "");// 注意事項
		if(couetDocDocInfo.toCourtAppointmentLetter !== undefined && couetDocDocInfo.toCourtAppointmentLetter === "1"){// 委任狀
			$("#ckbcourtDocAppointmentLetter").prop("checked", true);
		}
		if(couetDocDocInfo.toCourtAppointmentLetterCriminal !== undefined && couetDocDocInfo.toCourtAppointmentLetterCriminal === "1"){// 委任狀(刑事)
			$("#ckbcourtDocAppointmentLetterCriminal").prop("checked", true);
		}
		if(couetDocDocInfo.toCourtApplyBook !== undefined && couetDocDocInfo.toCourtApplyBook === "1"){// 申請書
			$("#ckbcourtDocToCourtApplyBook").prop("checked", true);
		}
		if(couetDocDocInfo.toCourtDetail !== undefined && couetDocDocInfo.toCourtDetail === "1"){//帳務明細
			$("#ckbcourtDocToCourtDetail").prop("checked", true);
		}
		if(couetDocDocInfo.toCourtOther !== undefined && couetDocDocInfo.toCourtOther === "1"){// 其他V
			$("#ckbcourtDocToCourtOther").prop("checked", true);
			$("#iptcourtDocToCourtOther").val(couetDocDocInfo.toCourtOtherContent !== undefined ? couetDocDocInfo.toCourtOtherContent : "");// 其他
		}
		
		$("#iptcourtDocExecutionDate").val(couetDocDocInfo.executionDate !== undefined ? couetDocDocInfo.executionDate : "");// 導往執行日期
		$("#iptcourtDocExecutionTime").val(couetDocDocInfo.executionTime !== undefined ? couetDocDocInfo.executionTime : "");// 導往執行時間
		if(couetDocDocInfo.executionAppointmentLetter !== undefined && couetDocDocInfo.executionAppointmentLetter === "1"){//委任狀
			$("#ckbcourtDocExecutionAppointmentLetter").prop("checked", true);
		}
		if(couetDocDocInfo.executionOther !== undefined && couetDocDocInfo.executionOther === "1"){// 其他V
			$("#ckbcourtDocExecutionOther").prop("checked", true);
			$("#iptcourtDocExecutionOther").val(couetDocDocInfo.executionOtherContent !== undefined ? couetDocDocInfo.executionOtherContent : "");// 其他
		}
	}
}

	// Close icon: removing the tab on click
	$("#courtDocsubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var courtDoc = law.addDoc.courtDoc;
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		var liid = $(this).closest("li")["0"].id;
		courtDoc.courtDocexistsubtabs[liid.substring(liid.indexOf("_") + 1)] = false;
		courtDoc.courtDocactivesubtabcount--;
		courtDoc.courtDocsubtabs.tabs({ active: courtDoc.courtDocactivesubtabcount});
	});
	
 (function(){
	//將日期欄位格式化
 	law.common.formatInputItemToDate("#iptcourtDocReceivedDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocBankDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocRuledDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocApplyConfirmationDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocReceivedConfirmationDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocFailureDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocApprovedDelayDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocDelayEndDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocSectorDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocMeasureDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocValuationDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocRebirthDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocSurveyDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocInquiryDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocFirstSaleDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocSecondSaleDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocThirdSaleDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocPostBuyDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocPostEndDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocReduceSaleDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocDestoryDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocRealDistributionDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocToCourtDate", "yy-mm-dd");
 	law.common.formatInputItemToDate("#iptcourtDocExecutionDate", "yy-mm-dd");
    
 	law.addDoc.courtDoc.controlcourtDocEditCKB(0);
})();
// 法院文 end	
	