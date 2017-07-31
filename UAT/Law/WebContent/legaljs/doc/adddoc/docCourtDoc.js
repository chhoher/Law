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
				"<td><select id='iptcourtDocRelationPerson" + displaynum + "_" + courtDoc.courtDocRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#iptcourtDocRelationPersonTr" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocRelationPerson" + displaynum + "_" + courtDoc.courtDocRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocTranscriptsRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocCoOwnedTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocCoOwnedTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocCoOwnedTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocCoOwnedTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocCoOwnedTranscriptsRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocMortgageeTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocMortgageeTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocMortgageeTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocMortgageeTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocMortgageeTranscriptsRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocLawTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocLawTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocLawTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocLawTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocLawTranscriptsRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocHeirTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocHeirTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocHeirTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocHeirTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocHeirTranscriptsRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocHeirTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocHeirTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocHeirTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocHeirTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocHeirTranscriptsRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocDirtTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocDirtTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocDirtTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDirtTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocDirtTranscriptsRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocBuiltTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocBuiltTranscriptsRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocBuiltTranscripts" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocBuiltTranscriptsRelationPerson" + displaynum + "_" + courtDoc.courtDocBuiltTranscriptsRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocDistributionRelationPerson" + displaynum + "_" + courtDoc.courtDocDistributionRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocDistribution" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDistributionRelationPerson" + displaynum + "_" + courtDoc.courtDocDistributionRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocThingThirdRelationPerson" + displaynum + "_" + courtDoc.courtDocThingThirdRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocThingThird" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocThingThirdRelationPerson" + displaynum + "_" + courtDoc.courtDocThingThirdRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocThingDebtRelationPerson" + displaynum + "_" + courtDoc.courtDocThingDebtRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocThingDebt" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocThingDebtRelationPerson" + displaynum + "_" + courtDoc.courtDocThingDebtRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocCoOwnedRelationPerson" + displaynum + "_" + courtDoc.courtDocCoOwnedRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocCoOwned" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocCoOwnedRelationPerson" + displaynum + "_" + courtDoc.courtDocCoOwnedRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocDebtDocRelationPerson" + displaynum + "_" + courtDoc.courtDocDebtDocRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocDebtDoc" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDebtDocRelationPerson" + displaynum + "_" + courtDoc.courtDocDebtDocRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocDetailRelationPerson" + displaynum + "_" + courtDoc.courtDocDetailRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocDetail" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDetailRelationPerson" + displaynum + "_" + courtDoc.courtDocDetailRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocFileRelationPerson" + displaynum + "_" + courtDoc.courtDocFileRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocFile" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocFileRelationPerson" + displaynum + "_" + courtDoc.courtDocFileRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocDebtContinueRelationPerson" + displaynum + "_" + courtDoc.courtDocDebtContinueRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocDebtContinue" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocDebtContinueRelationPerson" + displaynum + "_" + courtDoc.courtDocDebtContinueRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocCashierCheckRelationPerson" + displaynum + "_" + courtDoc.courtDocCashierCheckRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocCashierCheck" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocCashierCheckRelationPerson" + displaynum + "_" + courtDoc.courtDocCashierCheckRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocRecoveryRelationPerson" + displaynum + "_" + courtDoc.courtDocRecoveryRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocRecovery" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocRecoveryRelationPerson" + displaynum + "_" + courtDoc.courtDocRecoveryRelaNum[num], law.addDoc.rela);
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
				"<td><select id='iptcourtDocOtherRelationPerson" + displaynum + "_" + courtDoc.courtDocOtherRelaNum[num] + "'><option value=''>請選擇</option></select></td>";
					
		$("#trcourtDocOther" + displaynum ).append(tdString);
		law.common.selectRelaOption("#iptcourtDocOtherRelationPerson" + displaynum + "_" + courtDoc.courtDocOtherRelaNum[num], law.addDoc.rela);
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
						"<td><input type='radio' name='courtDocShadow" + courtDocsubtabcount + "' value='1' id='rdocourtDocShadowBank" + courtDocsubtabcount + "' >業主收文僅提供影本</td>" +
						"<td><label>文件狀態</label></td>" +
						"<td><select id='iptcourtDocDocStatus" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"</tr>" +
					"<tr>" +
						"<td><label>業主調件日</label></td>" +
						"<td><input id='iptcourtDocBankDate" + courtDocsubtabcount + "' ></input></td>" +
						"<td><label>收文日期</label></td>" +
						"<td><input id='iptcourtDocReceivedDate" + courtDocsubtabcount + "' ></input></td>" +
					"</tr>" +
					"<tr>" +
						"<td><label>文件類別</label></td>" +
						"<td><select id='iptcourtDocTypeOne" + courtDocsubtabcount + "' ><option value=''>請選擇</option></select></td>" +
						"<td><label>文件項目</label></td>" +
						"<td><select id='iptcourtDocTypeTwo" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
						"<td><label>債權人</label></td>" +
						"<td><select id='iptcourtDocBankName" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
						"<td><label>原債權人</label></td>" +
						"<td><select id='iptcourtDocOldBankName" + courtDocsubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"</tr>" +
				"</table>" +
				"<table>" +
					"<tr id='iptcourtDocRelationPersonTr" + courtDocsubtabcount + "'>" +
						"<td><label>相對人</label></td>" +
						"<td><select id='iptcourtDocRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
						"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
					"</tr>" +
				"</table>" +
				"<table style='background-color:#FFEBCD;'>" +
					"<tr>" +
						"<td><label>法院年字案股</label></td>" +
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
							"<td><select id='iptcourtDocTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocTranscriptsRelaTd(" + ( courtDocsubtabcount + 1 ) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocCoOwnedTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocCoOwnedTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocCoOwnedTranscriptsSub" + courtDocsubtabcount + "'>共有人戶謄</td>" +
							"<td><input id='iptcourtDocCoOwnedTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocCoOwnedTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocCoOwnedTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocCoOwnedTranscriptsRelaTd(" + (courtDocsubtabcount + 1 ) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocMortgageeTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocMortgageeTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocMortgageeTranscriptsSub" + courtDocsubtabcount + "'>抵押權人戶謄</td>" +
							"<td><input id='iptcourtDocMortgageeTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocMortgageeTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocMortgageeTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocMortgageeTranscriptsRelaTd(" + (courtDocsubtabcount +1 ) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocLawTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocLawTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocLawTranscriptsSub" + courtDocsubtabcount + "'>法代戶謄</td>" +
							"<td><input id='iptcourtDocLawTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocLawTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocLawTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocLawTranscriptsRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocHeirTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocHeirTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocHeirTranscriptsSub" + courtDocsubtabcount + "'>繼承人戶謄</td>" +
							"<td><input id='iptcourtDocHeirTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocHeirTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocHeirTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocHeirTranscriptsRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		           	 	"</tr>" +
		        	 	"<tr id='trcourtDocDirtTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDirtTranscriptsSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDirtTranscriptsSub" + courtDocsubtabcount + "'>土謄</td>" +
							"<td><input id='iptcourtDocDirtTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDirtTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDirtTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDirtTranscriptsRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocBuiltTranscripts" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocBuiltTranscripts" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocBuiltTranscriptsSub" + courtDocsubtabcount + "'>建謄</td>" +
							"<td><input id='iptcourtDocBuiltTranscriptsDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocBuiltTranscriptsRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocBuiltTranscriptsRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocBuiltTranscriptsRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocDistribution" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDistributionSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDistributionSub" + courtDocsubtabcount + "'>分配表</td>" +
							"<td><input id='iptcourtDocDistributionDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDistributionRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDistributionRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDistributionRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocThingThird" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocThingThirdSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocThingThirdSub" + courtDocsubtabcount + "'>事項表(第三人)</td>" +
							"<td><input id='iptcourtDocThingThirdDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocThingThirdRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocThingThirdRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocThingThirdRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocThingDebt" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocThingDebtSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocThingDebtSub" + courtDocsubtabcount + "'>事項表(債權人)</td>" +
							"<td><input id='iptcourtDocThingDebtDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocThingDebtRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocThingDebtRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocThingDebtRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocCoOwned" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocCoOwnedSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocCoOwnedSub" + courtDocsubtabcount + "'>共有人名冊</td>" +
							"<td><input id='iptcourtDocCoOwnedDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocCoOwnedRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocCoOwnedRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocCoOwnedRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocDebtDoc" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDebtDocSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDebtDocSub" + courtDocsubtabcount + "'>債權文件</td>" +
							"<td><input id='iptcourtDocDebtDocDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDebtDocRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDebtDocRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDebtDocRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocDetail" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDetailSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDetailSub" + courtDocsubtabcount + "'>帳務明細</td>" +
							"<td><input id='iptcourtDocDetailDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDetailRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDetailRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDetailRelaTd(" + (courtDocsubtabcount + 1 ) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocFile" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocFileSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocFileSub" + courtDocsubtabcount + "'>執名附件</td>" +
							"<td><input id='iptcourtDocFileDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocFileRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocFileRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocFileRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocDebtContinue" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocDebtContinueSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocDebtContinueSub" + courtDocsubtabcount + "'>債證續行表</td>" +
							"<td><input id='iptcourtDocDebtContinueDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocDebtContinueRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocDebtContinueRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocDebtContinueRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		        	 	"<tr id='trcourtDocCashierCheck" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocCashierCheckSub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocCashierCheckSub" + courtDocsubtabcount + "'>本票</td>" +
							"<td><input id='iptcourtDocCashierCheckDays" + courtDocsubtabcount + "' style='width : 50px'></input></td>" +
		   	 				"<td><label>日內</label></td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocCashierCheckRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocCashierCheckRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
							"<td><img src='../images/plus.png' onclick='law.addDoc.courtDoc.addcourtDocCashierCheckRelaTd(" + (courtDocsubtabcount + 1) + ")'></td>" +
		        	 	"</tr>" +
		           	 "</table>" +
		           	 "<table>" +
		        	 	"<tr id='trcourtDocRecovery" + courtDocsubtabcount + "'>" +
		           	 		"<td><input type='checkbox' name='namecourtDocRecoverySub" + courtDocsubtabcount + "' value='transcripts' id='ckbcourtDocRecoverySub" + courtDocsubtabcount + "'>回復所有權登記</td>" +
		   	 				"<td><label>備註</label></td>" +
							"<td><input id='iptcourtDocRecoveryRemark" + courtDocsubtabcount + "' ></input></td>" +
							"<td><label>相對人</label></td>" +
							"<td><select id='iptcourtDocRecoveryRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
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
							"<td><select id='iptcourtDocOtherRelationPerson" + courtDocsubtabcount + "_0'><option value=''>請選擇</option></select></td>" +
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
	   
	    law.common.selectOption("#iptcourtDocDocStatus" + courtDocsubtabcount, courtDoc.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
	    law.common.selectOption("#iptcourtDocTypeOne" + courtDocsubtabcount, courtDoc.TypeOne, "8aa2e72a5d4f763e015d4f8771c20005");
		law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.TypeTwo);
		$("#iptcourtDocTypeOne" + courtDocsubtabcount).change(function(i) {
			if($("#iptcourtDocTypeOne" + courtDocsubtabcount).find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f8771c20005"){
				law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.TypeTwo);
			}else if($("#iptcourtDocTypeOne" + courtDocsubtabcount).find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f878ed50006"){
				law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.ImmovablesTypeTwo);
			}else if($("#iptcourtDocTypeOne" + courtDocsubtabcount).find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f87dca70008"){
				law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.CenTypeTwo);
			}else if($("#iptcourtDocTypeOne" + courtDocsubtabcount).find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f87b79f0007"){
				law.common.selectOption("#iptcourtDocTypeTwo" + courtDocsubtabcount, courtDoc.DebtTypeTwo);
			}
		
		});
		law.common.selectOption("#iptcourtDocBankName" + courtDocsubtabcount, courtDoc.BankName);
		law.common.selectOption("#iptcourtDocCourtYearCourt" + courtDocsubtabcount, courtDoc.CourtYearCourt);
		law.common.selectOption("#iptcourtDocPublishObject" + courtDocsubtabcount, courtDoc.PublishObject);
		law.common.selectOption("#iptcourtDocPublishThings" + courtDocsubtabcount, courtDoc.PublishThings);
		law.common.selectRelaOption("#iptcourtDocRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		
		//補正下拉選項
		law.common.selectRelaOption("#iptcourtDocTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocCoOwnedTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocMortgageeTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocLawTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocHeirTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocDirtTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocBuiltTranscriptsRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocDistributionRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocThingThirdRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocThingDebtRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocCoOwnedRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocDebtDocRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocDetailRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocFileRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocDebtContinueRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocCashierCheckRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocRecoveryRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		law.common.selectRelaOption("#iptcourtDocOtherRelationPerson" + courtDocsubtabcount + "_0", law.addDoc.rela);
		
		// 動態跑出原債權人
		$("#iptcourtDocBankName" + courtDocsubtabcount).change(function(i) {
			if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B1" ||
					$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B2" ||
					$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B3" ||
					$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B4" ||
					$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B5" ||
					$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B6" ||
					$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-B7" ||
					$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-CD" ||
					$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-CR"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.TSBOldBankName);
			}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "FEI_BK"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.FEIOldBankName);
			}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "SK_BK"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.SKOldBankName);
			}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "YT_AMC" ||
					$("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "YT_IS"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.YTOldBankName);
			}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "FI-AMC"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.FIOldBankName);
			}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TS-AMC"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.TSAOldBankName);
			}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "TAMCO"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.TAMCOOldBankName);
			}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "ORIX_AMC"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.ORIXOldBankName);
			}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "MT-IS"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.MTOldBankName);
			}else if($("#iptcourtDocBankName" + courtDocsubtabcount).find('option:selected').val() ===  "UN_IS"){
				law.common.selectOption("#iptcourtDocOldBankName" + courtDocsubtabcount, courtDoc.UNOldBankName);
			}else{
				var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
				$("#iptcourtDocOldBankName" + courtDocsubtabcount + " option").remove();
				$("#iptcourtDocOldBankName" + courtDocsubtabcount).append(selectNull);
			}
		});
		
		//設定收文日期為當日
		$("#iptcourtDocReceivedDate" + courtDocsubtabcount).val(courtDoc.ReceivedDate);
		
		//設定相對人 = 0
		law.addDoc.courtDoc.courtDocRelaNum[(courtDocsubtabcount+1)] = 0;
		
		//設定勾勾
 		law.addDoc.courtDoc.controlcourtDocEditCKB(courtDocsubtabcount+1);
	},
	// 初始化
	initcourtDocsubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, BankName, TSBOldBankName, 
			CourtYearCourt,	ImmovablesTypeTwo, CenTypeTwo, DebtTypeTwo, PublishObject, PublishThings, 
			FEIOldBankName, SKOldBankName,YTOldBankName, FIOldBankName, TSAOldBankName, 
			TAMCOOldBankName, ORIXOldBankName, MTOldBankName, UNOldBankName){
		var initsub = law.addDoc.courtDoc;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.BankName = BankName;
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
			
		for( ; i <= law.addDoc.courtDoc.courtDocRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocCoOwnedTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocCoOwnedTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocCoOwnedTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocCoOwnedTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocMortgageeTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocMortgageeTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocMortgageeTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocMortgageeTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocLawTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocLawTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocLawTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocLawTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocHeirTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocHeirTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocHeirTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocHeirTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDirtTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocDirtTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocDirtTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocDirtTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocBuiltTranscriptsRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocBuiltTranscriptsRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocBuiltTranscriptsRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocBuiltTranscriptsRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDistributionRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocDistributionRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocDistributionRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocDistributionRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocThingThirdRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocThingThirdRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocThingThirdRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocThingThirdRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocThingDebtRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocThingDebtRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocThingDebtRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocThingDebtRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocCoOwnedRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocCoOwnedRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocCoOwnedRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocCoOwnedRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDebtDocRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocDebtDocRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocDebtDocRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocDebtDocRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDetailRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocDetailRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocDetailRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocDetailRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocFileRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocFileRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocFileRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocFileRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocDebtContinueRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocDebtContinueRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocDebtContinueRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocDebtContinueRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocCashierCheckRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocCashierCheckRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocCashierCheckRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocCashierCheckRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocRecoveryRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocRecoveryRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocRecoveryRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocRecoveryRelas_0.push(relainfo);
		}
		
		i = 0;
		for( ; i <= law.addDoc.courtDoc.courtDocOtherRelaNum[0]; i++){
			relainfo = { 
				"ID" : $("#iptcourtDocOtherRelationPerson_" + i).find('option:selected').val(),
				"name"	: $("#iptcourtDocOtherRelationPerson_" + i).find('option:selected').text()
				};
			returncourtDocOtherRelas_0.push(relainfo);
		}
		
		var topItem = {
			'shareCaseId0' : $("#iptcourtDocShareCaseId_0").val(),
			'shareCaseId1' : $("#iptcourtDocShareCaseId_1").val(),
			'shareCaseId2' : $("#iptcourtDocShareCaseId_2").val(),
			'shareCaseId3' : $("#iptcourtDocShareCaseId_3").val(),
			'shadow' : $("#rdocourtDocShadow:checked").val(),
			'receivedDate' : $("#iptcourtDocReceivedDate").val(),
			'bankDate' : $("#iptcourtDocBankDate").val(),
			'docStatus' : $("#iptcourtDocDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptcourtDocTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptcourtDocTypeTwo").find('option:selected').val(),
			'bankName' : $("#iptcourtDocBankName").find('option:selected').val(),
			'oldBankName' : $("#iptcourtDocOldBankName").find('option:selected').val(),
			'courtDocRelationPerson' : returncourtDocRelas_0,
			'relationPerson' : $("#iptcourtDocRelationPerson_0").find('option:selected').val(),
			'courtYearCourt' : $("#iptcourtDocCourtYearCourt").find('option:selected').val(),
			'courtYearYear' : $("#iptcourtDocCourtYearYear").val(),
			'courtYearTxt' : $("#iptcourtDocCourtYearTxt").val(),
			'courtYearShare' : $("#iptcourtDocCourtYearShare").val(),
			'courtYearCaseId' : $("#iptcourtDocCourtYearCaseId").val(),
			'ruledDate' : $("#iptcourtDocRuledDate").val(),
			'ruledAmount' : $("#iptcourtDocRuledAmount").val(),
			'applyConfirmationDate' : $("#iptcourtDocApplyConfirmationDate").val(),
			'receivedConfirmationDate' : $("#iptcourtDocReceivedConfirmationDate").val(),
			'failureDate' : $("#iptcourtDocFailureDate").val(),
			'applyLawThird' : $("#iptcourtDocApplyLawThird").val(),
			'addAddress' : $("#iptcourtDocAddAddress").val(),
			'distributionAmount' : $("#iptcourtDocDistributionAmount").val(),
			'approvedDelayDate' : $("#iptcourtDocApprovedDelayDate").val(),
			'delayEndDate' : $("#iptcourtDocDelayEndDate").val(),
			'sectorDate' : $("#iptcourtDocSectorDate").val(),
			'measureDate' : $("#iptcourtDocMeasureDate").val(),
			'valuationDate' : $("#iptcourtDocValuationDate").val(),
			'rebirthDate' : $("#iptcourtDocRebirthDate").val(),
			'surveyDate' : $("#iptcourtDocSurveyDate").val(),
			'inquiryDate' : $("#iptcourtDocInquiryDate").val(),
			'firstSaleDate' : $("#iptcourtDocFirstSaleDate").val(),
			'secondSaleDate' : $("#iptcourtDocSecondSaleDate").val(),
			'thirdSaleDate' : $("#iptcourtDocThirdSaleDate").val(),
			'postBuyDate' : $("#iptcourtDocPostBuyDate").val(),
			'postEndDate' : $("#iptcourtDocPostEndDate").val(),
			'reduceSaleDate' : $("#iptcourtDocReduceSaleDate").val(),
			'destoryDate' : $("#iptcourtDocDestoryDate").val(),
			'realDistributionDate' : $("#iptcourtDocRealDistributionDate").val(),
			'progress' : $("#iptcourtDocProgress").val(),
			'remark' : $("#iptcourtDocRemark").val(),
			// 陳報
			'applyDebtDays' : $("#iptcourtDocApplyDebtDays").val(),
			'repayDays' : $("#iptcourtDocRepayDays").val(),
			'useDays' : $("#iptcourtDocUseDays").val(),
			'opinionDays' : $("#iptcourtDocOpinionDays").val(),
			'accountDays' : $("#iptcourtDocAccountDays").val(),
			'pleaseDays' : $("#iptcourtDocPleaseDays").val(),
			'reportOther' : $("#iptcourtDocReportOther").val(),
			'reportOtherDays' : $("#iptcourtDocReportOtherDays").val(),
			'reportDescription' : $("#iptcourtDocReportDescription").val(),
			//補正內容 戶謄
			'transcriptsDays' : $("#iptcourtDocTranscriptsDays").val(),
			'transcriptsRemark' : $("#iptcourtDocTranscriptsRemark").val(),
			'courtDocTranscriptsRelationPerson' : returncourtDocTranscriptsRelas_0,
			'transcriptsRelationPerson' : $("#iptcourtDocTranscriptsRelationPerson_0").find('option:selected').val(),
			// 共有人戶謄
			'coOwnedTranscriptsDays' : $("#iptcourtDocCoOwnedTranscriptsDays").val(),
			'coOwnedTranscriptsRemark' : $("#iptcourtDocCoOwnedTranscriptsRemark").val(),
			'courtDocCoOwnedTranscriptsRelationPerson' : returncourtDocCoOwnedTranscriptsRelas_0,
			'coOwnedTranscriptsRelationPerson' : $("#iptcourtDocCoOwnedTranscriptsRelationPerson_0").find('option:selected').val(),
			// 抵押權人戶謄
			'mortgageeTranscriptsDays' : $("#iptcourtDocMortgageeTranscriptsDays").val(),
			'mortgageeTranscriptsRemark' : $("#iptcourtDocMortgageeTranscriptsRemark").val(),
			'courtDocMortgageeTranscriptsRelationPerson' : returncourtDocMortgageeTranscriptsRelas_0,
			'mortgageeTranscriptsRelationPerson' : $("#iptcourtDocMortgageeTranscriptsRelationPerson_0").find('option:selected').val(),
			// 法代戶謄
			'lawTranscriptsDays' : $("#iptcourtDocLawTranscriptsDays").val(),
			'lawTranscriptsRemark' : $("#iptcourtDocLawTranscriptsRemark").val(),
			'courtDocLawTranscriptsRelationPerson' : returncourtDocLawTranscriptsRelas_0,
			'lawTranscriptsRelationPerson' : $("#iptcourtDocLawTranscriptsRelationPerson_0").find('option:selected').val(),
			// 繼承人戶謄
			'heirTranscriptsDays' : $("#iptcourtDocHeirTranscriptsDays").val(),
			'heirTranscriptsRemark' : $("#iptcourtDocHeirTranscriptsRemark").val(),
			'courtDocHeirTranscriptsRelationPerson' : returncourtDocHeirTranscriptsRelas_0,
			'heirTranscriptsRelationPerson' : $("#iptcourtDocHeirTranscriptsRelationPerson_0").find('option:selected').val(),
			// 土謄
			'dirtTranscriptsDays' : $("#iptcourtDocDirtTranscriptsDays").val(),
			'dirtTranscriptsRemark' : $("#iptcourtDocDirtTranscriptsRemark").val(),
			'courtDocDirtTranscriptsRelationPerson' : returncourtDocDirtTranscriptsRelas_0,
			'dirtTranscriptsRelationPerson' : $("#iptcourtDocDirtTranscriptsRelationPerson_0").find('option:selected').val(),
			// 建謄
			'builtTranscriptsDays' : $("#iptcourtDocBuiltTranscriptsDays").val(),
			'builtTranscriptsRemark' : $("#iptcourtDocBuiltTranscriptsRemark").val(),
			'courtDocBuiltTranscriptsRelationPerson' : returncourtDocBuiltTranscriptsRelas_0,
			'builtTranscriptsRelationPerson' : $("#iptcourtDocBuiltTranscriptsRelationPerson_0").find('option:selected').val(),
			// 分配表
			'distributionDays' : $("#iptcourtDocDistributionDays").val(),
			'distributionRemark' : $("#iptcourtDocDistributionRemark").val(),
			'courtDocDistributionRelationPerson' : returncourtDocDistributionRelas_0,
			'distributionRelationPerson' : $("#iptcourtDocDistributionRelationPerson_0").find('option:selected').val(),
			// 事項表(第三人)
			'thingThirdDays' : $("#iptcourtDocThingThirdDays").val(),
			'thingThirdRemark' : $("#iptcourtDocThingThirdRemark").val(),
			'courtDocThingThirdRelationPerson' : returncourtDocThingThirdRelas_0,
			'thingThirdRelationPerson' : $("#iptcourtDocThingThirdRelationPerson_0").find('option:selected').val(),
			// 事項表(債權人)
			'thingDebtDays' : $("#iptcourtDocThingDebtDays").val(),
			'thingDebtRemark' : $("#iptcourtDocThingDebtRemark").val(),
			'courtDocThingDebtRelationPerson' : returncourtDocThingDebtRelas_0,
			'thingDebtRelationPerson' : $("#iptcourtDocThingDebtRelationPerson_0").find('option:selected').val(),
			// 共有人名冊
			'coOwnedDays' : $("#iptcourtDocCoOwnedDays").val(),
			'coOwnedRemark' : $("#iptcourtDocCoOwnedRemark").val(),
			'courtDocCoOwnedRelationPerson' : returncourtDocCoOwnedRelas_0,
			'coOwnedRelationPerson' : $("#iptcourtDocCoOwnedRelationPerson_0").find('option:selected').val(),
			// 債權文件
			'debtDocDays' : $("#iptcourtDocDebtDocDays").val(),
			'debtDocRemark' : $("#iptcourtDocDebtDocRemark").val(),
			'courtDocDebtDocRelationPerson' : returncourtDocDebtDocRelas_0,
			'debtDocRelationPerson' : $("#iptcourtDocDebtDocRelationPerson_0").find('option:selected').val(),
			// 帳務明細
			'detailDays' : $("#iptcourtDocDetailDays").val(),
			'detailRemark' : $("#iptcourtDocDetailRemark").val(),
			'courtDocDetailRelationPerson' : returncourtDocDetailRelas_0,
			'detailRelationPerson' : $("#iptcourtDocDetailRelationPerson_0").find('option:selected').val(),
			// 執行名義
			'fileDays' : $("#iptcourtDocFileDays").val(),
			'fileRemark' : $("#iptcourtDocFileRemark").val(),
			'courtDocFileRelationPerson' : returncourtDocFileRelas_0,
			'fileRelationPerson' : $("#iptcourtDocFileRelationPerson_0").find('option:selected').val(),
			// 債證續行表
			'debtContinueDays' : $("#iptcourtDocDebtContinueDays").val(),
			'debtContinueRemark' : $("#iptcourtDocDebtContinueRemark").val(),
			'courtDocDebtContinueRelationPerson' : returncourtDocDebtContinueRelas_0,
			'debtContinueRelationPerson' : $("#iptcourtDocDebtContinueRelationPerson_0").find('option:selected').val(),
			// 本票
			'cashierCheckDays' : $("#iptcourtDocCashierCheckDays").val(),
			'cashierCheckRemark' : $("#iptcourtDocCashierCheckRemark").val(),
			'courtDocCashierCheckRelationPerson' : returncourtDocCashierCheckRelas_0,
			'cashierCheckRelationPerson' : $("#iptcourtDocCashierCheckRelationPerson_0").find('option:selected').val(),
			// 回復所有權登記
			'recoveryRemark' : $("#iptcourtDocRecoveryRemark").val(),
			'courtDocRecoveryRelationPerson' : returncourtDocRecoveryRelas_0,
			'recoveryRelationPerson' : $("#iptcourtDocRecoveryRelationPerson_0").find('option:selected').val(),
			// 其他
			'otherValues' : $("#iptcourtDocOtherName").val(),
			'otherDays' : $("#iptcourtDocOtherDays").val(),
			'otherRemark' : $("#iptcourtDocOtherRemark").val(),
			'courtDocOtherRelationPerson' : returncourtDocOtherRelas_0,
			'otherRelationPerson' : $("#iptcourtDocOtherRelationPerson_0").find('option:selected').val(),
			'edit' : $("#iptcourtDocEdit").val(),
			// 繳費(含補繳)
			'programCost' : $("#iptcourtDocProgramCost").val(),
			'programDays' : $("#iptcourtDocProgramDays").val(),
			'legalActionCost' : $("#iptcourtDocLegalActionCost").val(),
			'legalActionDays' : $("#iptcourtDocLegalActionDays").val(),
			'excuteCost' : $("#iptcourtDocExcuteCost").val(),
			'excuteDays' : $("#iptcourtDocExcuteDays").val(),
			'replacementCost' : $("#iptcourtDocReplacementCost").val(),
			'replacementDays' : $("#iptcourtDocReplacementDays").val(),
			'sectorCost' : $("#iptcourtDocSectorCost").val(),
			'sectorDays' : $("#iptcourtDocSectorDays").val(),
			'valuationCost' : $("#iptcourtDocValuationCost").val(),
			'valuationDays' : $("#iptcourtDocValuationDays").val(),
			'rebirthCost' : $("#iptcourtDocRebirthCost").val(),
			'rebirthDays' : $("#iptcourtDocRebirthDays").val(),
			'measureCost' : $("#iptcourtDocMeasureCost").val(),
			'measureDays' : $("#iptcourtDocMeasureDays").val(),
			'saveCost' : $("#iptcourtDocSaveCost").val(),
			'saveDays' : $("#iptcourtDocSaveDays").val(),
			'centralizedCost' : $("#iptcourtDocCentralizedCost").val(),
			'centralizedDays' : $("#iptcourtDocCentralizedDays").val(),
			'insuranceCost' : $("#iptcourtDocInsuranceCost").val(),
			'insuranceDays' : $("#iptcourtDocInsuranceDays").val(),
			'postCost' : $("#iptcourtDocPostCost").val(),
			'postDays' : $("#iptcourtDocPostDays").val(),
			// 登報
			'publishDays' : $("#iptcourtDocPublishDays").val(),
			'publishObject' : $("#iptcourtDocPublishObject").find('option:selected').val(),
			'publishThings' : $("#iptcourtDocPublishThings").find('option:selected').val(),
			'publishRemark' : $("#iptcourtDocPublishRemark").val(),
			// 開庭
			'toCourtDate' : $("#iptcourtDocToCourtDate").val(),
			'toCourtTime' : $("#iptcourtDocToCourtTime").val(),
			'toCourtType' : $("#iptcourtDocToCourtType").val(),
			'toCourtNotice' : $("#iptcourtDocToCourtNotice").val(),
			'toCourtAppointmentLetter' : $("#ckbcourtDocAppointmentLetter:checked").val(),
			'toCourtAppointmentLetterCriminal' : $("#ckbcourtDocAppointmentLetterCriminal:checked").val(),
			'toCourtApplyBook' : $("#ckbcourtDocToCourtApplyBook:checked").val(),
			'toCourtDeail' : $("#ckbcourtDocToCourtDetail:checked").val(),
			'toCourtOther' : $("#ckbcourtDocToCourtOther:checked").val(),
			'toCourtContent' : $("#iptcourtDocToCourtOther").val(),
			// 導往執行
			'executionDate' : $("#iptcourtDocExecutionDate").val(),
			'executionTime' : $("#iptcourtDocExecutionTime").val(),
			'executionAppointmentLetter' : $("#ckbcourtDocExecutionAppointmentLetter:checked").val(),
			'executionOther' : $("#ckbcourtDocExecutionOther:checked").val(),
			'executionOtherContent' : $("#iptcourtDocExecutionOther").val()
		};
			
		courtDoc.subItems = [];
		courtDoc.subItems.push(topItem);
			
		i = 0;
		for ( ; i < length; i++ ) {
			returncourtDocRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocRelas_0.push(relainfo);
			}
			
			returncourtDocTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocCoOwnedTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocCoOwnedTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocCoOwnedTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocCoOwnedTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocCoOwnedTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocMortgageeTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocMortgageeTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocMortgageeTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocMortgageeTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocMortgageeTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocLawTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocLawTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocLawTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocLawTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocLawTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocHeirTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocHeirTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocHeirTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocHeirTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocHeirTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocDirtTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDirtTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocDirtTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocDirtTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDirtTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocBuiltTranscriptsRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocBuiltTranscriptsRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocBuiltTranscriptsRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocBuiltTranscriptsRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocBuiltTranscriptsRelas_0.push(relainfo);
			}
			
			returncourtDocDistributionRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDistributionRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocDistributionRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocDistributionRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDistributionRelas_0.push(relainfo);
			}
			
			returncourtDocThingThirdRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocThingThirdRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocThingThirdRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocThingThirdRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocThingThirdRelas_0.push(relainfo);
			}
			
			returncourtDocThingDebtRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocThingDebtRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocThingDebtRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocThingDebtRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocThingDebtRelas_0.push(relainfo);
			}
			
			returncourtDocCoOwnedRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocCoOwnedRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocCoOwnedRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocCoOwnedRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocCoOwnedRelas_0.push(relainfo);
			}
			
			returncourtDocDebtDocRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDebtDocRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocDebtDocRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocDebtDocRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDebtDocRelas_0.push(relainfo);
			}
			
			returncourtDocDetailRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDetailRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocDetailRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocDetailRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDetailRelas_0.push(relainfo);
			}
			
			returncourtDocFileRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocFileRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocFileRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocFileRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocFileRelas_0.push(relainfo);
			}
			
			returncourtDocDebtContinueRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocDebtContinueRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocDebtContinueRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocDebtContinueRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocDebtContinueRelas_0.push(relainfo);
			}
			
			returncourtDocCashierCheckRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocCashierCheckRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocCashierCheckRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocCashierCheckRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocCashierCheckRelas_0.push(relainfo);
			}
			
			returncourtDocRecoveryRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocRecoveryRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocRecoveryRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocRecoveryRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocRecoveryRelas_0.push(relainfo);
			}
			
			returncourtDocOtherRelas_0 = [];
			displayNum = i + 1;
			j = 0;
			for( ; j <= law.addDoc.courtDoc.courtDocOtherRelaNum[displayNum]; j++){
				relainfo = { 
					"ID" : $("#iptcourtDocOtherRelationPerson" + i + "_" + j).find('option:selected').val(),
					"name"	: $("#iptcourtDocOtherRelationPerson" + i + "_" + j).find('option:selected').text()
					};
				returncourtDocOtherRelas_0.push(relainfo);
			}
			
				var subItems = {
					'shareCaseId0' : $("#iptcourtDocShareCaseId" + i + "_0").val(),
					'shareCaseId1' : $("#iptcourtDocShareCaseId" + i + "_1").val(),
					'shareCaseId2' : $("#iptcourtDocShareCaseId" + i + "_2").val(),
					'shareCaseId3' : $("#iptcourtDocShareCaseId" + i + "_3").val(),
					'shadow' : $("#rdocourtDocShadow" + i + ":checked").val(),
					'receivedDate' : $("#iptcourtDocReceivedDate" + i).val(),
					'bankDate' : $("#iptcourtDocBankDate" + i).val(),
					'docStatus' : $("#iptcourtDocDocStatus" + i).find('option:selected').val(),
					'typeOne' : $("#iptcourtDocTypeOne" + i).find('option:selected').val(),
					'typeTwo' : $("#iptcourtDocTypeTwo" + i).find('option:selected').val(),
					'bankName' : $("#iptcourtDocBankName" + i).find('option:selected').val(),
					'oldBankName' : $("#iptcourtDocOldBankName" + i).find('option:selected').val(),
					'courtDocRelationPerson' : returncourtDocRelas_0,
					'relationPerson' : $("#iptcourtDocRelationPerson" + i + "_0").find('option:selected').val(),
					'courtYearCourt' : $("#iptcourtDocCourtYearCourt" + i).find('option:selected').val(),
					'courtYearYear' : $("#iptcourtDocCourtYearYear" + i).val(),
					'courtYearTxt' : $("#iptcourtDocCourtYearTxt" + i).val(),
					'courtYearShare' : $("#iptcourtDocCourtYearShare" + i).val(),
					'courtYearCaseId' : $("#iptcourtDocCourtYearCaseId" + i).val(),
					'ruledDate' : $("#iptcourtDocRuledDate" + i).val(),
					'ruledAmount' : $("#iptcourtDocRuledAmount" + i).val(),
					'applyConfirmationDate' : $("#iptcourtDocApplyConfirmationDate" + i).val(),
					'receivedConfirmationDate' : $("#iptcourtDocReceivedConfirmationDate" + i).val(),
					'failureDate' : $("#iptcourtDocFailureDate" + i).val(),
					'applyLawThird' : $("#iptcourtDocApplyLawThird" + i).val(),
					'addAddress' : $("#iptcourtDocAddAddress" + i).val(),
					'distributionAmount' : $("#iptcourtDocDistributionAmount" + i).val(),
					'approvedDelayDate' : $("#iptcourtDocApprovedDelayDate" + i).val(),
					'delayEndDate' : $("#iptcourtDocDelayEndDate" + i).val(),
					'sectorDate' : $("#iptcourtDocSectorDate" + i).val(),
					'measureDate' : $("#iptcourtDocMeasureDate" + i).val(),
					'valuationDate' : $("#iptcourtDocValuationDate" + i).val(),
					'rebirthDate' : $("#iptcourtDocRebirthDate" + i).val(),
					'surveyDate' : $("#iptcourtDocSurveyDate" + i).val(),
					'inquiryDate' : $("#iptcourtDocInquiryDate" + i).val(),
					'firstSaleDate' : $("#iptcourtDocFirstSaleDate" + i).val(),
					'secondSaleDate' : $("#iptcourtDocSecondSaleDate" + i).val(),
					'thirdSaleDate' : $("#iptcourtDocThirdSaleDate" + i).val(),
					'postBuyDate' : $("#iptcourtDocPostBuyDate" + i).val(),
					'postEndDate' : $("#iptcourtDocPostEndDate" + i).val(),
					'reduceSaleDate' : $("#iptcourtDocReduceSaleDate" + i).val(),
					'destoryDate' : $("#iptcourtDocDestoryDate" + i).val(),
					'realDistributionDate' : $("#iptcourtDocRealDistributionDate" + i).val(),
					'progress' : $("#iptcourtDocProgress" + i).val(),
					'remark' : $("#iptcourtDocRemark" + i).val(),
					// 陳報
					'applyDebtDays' : $("#iptcourtDocApplyDebtDays" + i).val(),
					'repayDays' : $("#iptcourtDocRepayDays" + i).val(),
					'useDays' : $("#iptcourtDocUseDays" + i).val(),
					'opinionDays' : $("#iptcourtDocOpinionDays" + i).val(),
					'accountDays' : $("#iptcourtDocAccountDays" + i).val(),
					'pleaseDays' : $("#iptcourtDocPleaseDays" + i).val(),
					'reportOther' : $("#iptcourtDocReportOther" + i).val(),
					'reportOtherDays' : $("#iptcourtDocReportOtherDays" + i).val(),
					'reportDescription' : $("#iptcourtDocReportDescription" + i).val(),
					//補正內容 戶謄
					'transcriptsDays' : $("#iptcourtDocTranscriptsDays" + i ).val(),
					'transcriptsRemark' : $("#iptcourtDocTranscriptsRemark" + i ).val(),
					'courtDocTranscriptsRelationPerson' : returncourtDocTranscriptsRelas_0,
					'transcriptsRelationPerson' : $("#iptcourtDocTranscriptsRelationPerson_0").find('option:selected').val(),
					// 共有人戶謄
					'coOwnedTranscriptsDays' : $("#iptcourtDocCoOwnedTranscriptsDays" + i ).val(),
					'coOwnedTranscriptsRemark' : $("#iptcourtDocCoOwnedTranscriptsRemark" + i ).val(),
					'courtDocCoOwnedTranscriptsRelationPerson' : returncourtDocCoOwnedTranscriptsRelas_0,
					'coOwnedTranscriptsRelationPerson' : $("#iptcourtDocCoOwnedTranscriptsRelationPerson_0").find('option:selected').val(),
					// 抵押權人戶謄
					'mortgageeTranscriptsDays' : $("#iptcourtDocMortgageeTranscriptsDays" + i ).val(),
					'mortgageeTranscriptsRemark' : $("#iptcourtDocMortgageeTranscriptsRemark" + i ).val(),
					'courtDocMortgageeTranscriptsRelationPerson' : returncourtDocMortgageeTranscriptsRelas_0,
					'mortgageeTranscriptsRelationPerson' : $("#iptcourtDocMortgageeTranscriptsRelationPerson_0").find('option:selected').val(),
					// 法代戶謄
					'lawTranscriptsDays' : $("#iptcourtDocLawTranscriptsDays" + i ).val(),
					'lawTranscriptsRemark' : $("#iptcourtDocLawTranscriptsRemark" + i ).val(),
					'courtDocLawTranscriptsRelationPerson' : returncourtDocLawTranscriptsRelas_0,
					'lawTranscriptsRelationPerson' : $("#iptcourtDocLawTranscriptsRelationPerson_0").find('option:selected').val(),
					// 繼承人戶謄
					'heirTranscriptsDays' : $("#iptcourtDocHeirTranscriptsDays" + i ).val(),
					'heirTranscriptsRemark' : $("#iptcourtDocHeirTranscriptsRemark" + i ).val(),
					'courtDocHeirTranscriptsRelationPerson' : returncourtDocHeirTranscriptsRelas_0,
					'heirTranscriptsRelationPerson' : $("#iptcourtDocHeirTranscriptsRelationPerson_0").find('option:selected').val(),
					// 土謄
					'dirtTranscriptsDays' : $("#iptcourtDocDirtTranscriptsDays" + i ).val(),
					'dirtTranscriptsRemark' : $("#iptcourtDocDirtTranscriptsRemark" + i ).val(),
					'courtDocDirtTranscriptsRelationPerson' : returncourtDocDirtTranscriptsRelas_0,
					'dirtTranscriptsRelationPerson' : $("#iptcourtDocDirtTranscriptsRelationPerson_0").find('option:selected').val(),
					// 建謄
					'builtTranscriptsDays' : $("#iptcourtDocBuiltTranscriptsDays" + i ).val(),
					'builtTranscriptsRemark' : $("#iptcourtDocBuiltTranscriptsRemark" + i ).val(),
					'courtDocBuiltTranscriptsRelationPerson' : returncourtDocBuiltTranscriptsRelas_0,
					'builtTranscriptsRelationPerson' : $("#iptcourtDocBuiltTranscriptsRelationPerson_0").find('option:selected').val(),
					// 分配表
					'distributionDays' : $("#iptcourtDocDistributionDays" + i ).val(),
					'distributionRemark' : $("#iptcourtDocDistributionRemark" + i ).val(),
					'courtDocDistributionRelationPerson' : returncourtDocDistributionRelas_0,
					'distributionRelationPerson' : $("#iptcourtDocDistributionRelationPerson_0").find('option:selected').val(),
					// 事項表(第三人)
					'thingThirdDays' : $("#iptcourtDocThingThirdDays" + i ).val(),
					'thingThirdRemark' : $("#iptcourtDocThingThirdRemark" + i ).val(),
					'courtDocThingThirdRelationPerson' : returncourtDocThingThirdRelas_0,
					'thingThirdRelationPerson' : $("#iptcourtDocThingThirdRelationPerson_0").find('option:selected').val(),
					// 事項表(債權人)
					'thingDebtDays' : $("#iptcourtDocThingDebtDays" + i ).val(),
					'thingDebtRemark' : $("#iptcourtDocThingDebtRemark" + i ).val(),
					'courtDocThingDebtRelationPerson' : returncourtDocThingDebtRelas_0,
					'thingDebtRelationPerson' : $("#iptcourtDocThingDebtRelationPerson_0").find('option:selected').val(),
					// 共有人名冊
					'coOwnedDays' : $("#iptcourtDocCoOwnedDays" + i ).val(),
					'coOwnedRemark' : $("#iptcourtDocCoOwnedRemark" + i ).val(),
					'courtDocCoOwnedRelationPerson' : returncourtDocCoOwnedRelas_0,
					'coOwnedRelationPerson' : $("#iptcourtDocCoOwnedRelationPerson_0").find('option:selected').val(),
					// 債權文件
					'debtDocDays' : $("#iptcourtDocDebtDocDays" + i ).val(),
					'debtDocRemark' : $("#iptcourtDocDebtDocRemark" + i ).val(),
					'courtDocDebtDocRelationPerson' : returncourtDocDebtDocRelas_0,
					'debtDocRelationPerson' : $("#iptcourtDocDebtDocRelationPerson_0").find('option:selected').val(),
					// 帳務明細
					'detailDays' : $("#iptcourtDocDetailDays" + i ).val(),
					'detailRemark' : $("#iptcourtDocDetailRemark" + i ).val(),
					'courtDocDetailRelationPerson' : returncourtDocDetailRelas_0,
					'detailRelationPerson' : $("#iptcourtDocDetailRelationPerson_0").find('option:selected').val(),
					// 執行名義
					'fileDays' : $("#iptcourtDocFileDays" + i ).val(),
					'fileRemark' : $("#iptcourtDocFileRemark" + i ).val(),
					'courtDocFileRelationPerson' : returncourtDocFileRelas_0,
					'fileRelationPerson' : $("#iptcourtDocFileRelationPerson_0").find('option:selected').val(),
					// 債證續行表
					'debtContinueDays' : $("#iptcourtDocDebtContinueDays" + i ).val(),
					'debtContinueRemark' : $("#iptcourtDocDebtContinueRemark" + i ).val(),
					'courtDocDebtContinueRelationPerson' : returncourtDocDebtContinueRelas_0,
					'debtContinueRelationPerson' : $("#iptcourtDocDebtContinueRelationPerson_0").find('option:selected').val(),
					// 本票
					'cashierCheckDays' : $("#iptcourtDocCashierCheckDays" + i ).val(),
					'cashierCheckRemark' : $("#iptcourtDocCashierCheckRemark" + i ).val(),
					'courtDocCashierCheckRelationPerson' : returncourtDocCashierCheckRelas_0,
					'cashierCheckRelationPerson' : $("#iptcourtDocCashierCheckRelationPerson_0").find('option:selected').val(),
					// 回復所有權登記
					'recoveryRemark' : $("#iptcourtDocRecoveryRemark" + i ).val(),
					'courtDocRecoveryRelationPerson' : returncourtDocRecoveryRelas_0,
					'recoveryRelationPerson' : $("#iptcourtDocRecoveryRelationPerson_0").find('option:selected').val(),
					// 其他
					'otherValues' : $("#iptcourtDocOtherName" + i ).val(),
					'otherDays' : $("#iptcourtDocOtherDays" + i ).val(),
					'otherRemark' : $("#iptcourtDocOtherRemark" + i ).val(),
					'courtDocOtherRelationPerson' : returncourtDocOtherRelas_0,
					'otherRelationPerson' : $("#iptcourtDocOtherRelationPerson_0").find('option:selected').val(),
					'edit' : $("#iptcourtDocEdit" + i ).val(),
					// 繳費(含補繳)
					'programCost' : $("#iptcourtDocProgramCost" + i ).val(),
					'programDays' : $("#iptcourtDocProgramDays" + i ).val(),
					'legalActionCost' : $("#iptcourtDocLegalActionCost" + i ).val(),
					'legalActionDays' : $("#iptcourtDocLegalActionDays" + i ).val(),
					'excuteCost' : $("#iptcourtDocExcuteCost" + i ).val(),
					'excuteDays' : $("#iptcourtDocExcuteDays" + i ).val(),
					'replacementCost' : $("#iptcourtDocReplacementCost" + i ).val(),
					'replacementDays' : $("#iptcourtDocReplacementDays" + i ).val(),
					'sectorCost' : $("#iptcourtDocSectorCost" + i ).val(),
					'sectorDays' : $("#iptcourtDocSectorDays" + i ).val(),
					'valuationCost' : $("#iptcourtDocValuationCost" + i ).val(),
					'valuationDays' : $("#iptcourtDocValuationDays" + i ).val(),
					'rebirthCost' : $("#iptcourtDocRebirthCost" + i ).val(),
					'rebirthDays' : $("#iptcourtDocRebirthDays" + i ).val(),
					'measureCost' : $("#iptcourtDocMeasureCost" + i ).val(),
					'measureDays' : $("#iptcourtDocMeasureDays" + i ).val(),
					'saveCost' : $("#iptcourtDocSaveCost" + i ).val(),
					'saveDays' : $("#iptcourtDocSaveDays" + i ).val(),
					'centralizedCost' : $("#iptcourtDocCentralizedCost" + i ).val(),
					'centralizedDays' : $("#iptcourtDocCentralizedDays" + i ).val(),
					'insuranceCost' : $("#iptcourtDocInsuranceCost" + i ).val(),
					'insuranceDays' : $("#iptcourtDocInsuranceDays" + i ).val(),
					'postCost' : $("#iptcourtDocPostCost" + i ).val(),
					'postDays' : $("#iptcourtDocPostDays" + i ).val(),
					// 登報
					'publishDays' : $("#iptcourtDocPublishDays" + i ).val(),
					'publishObject' : $("#iptcourtDocPublishObject" + i ).find('option:selected').val(),
					'publishThings' : $("#iptcourtDocPublishThings" + i ).find('option:selected').val(),
					'publishRemark' : $("#iptcourtDocPublishRemark" + i ).val(),
					// 開庭
					'toCourtDate' : $("#iptcourtDocToCourtDate" + i ).val(),
					'toCourtTime' : $("#iptcourtDocToCourtTime" + i ).val(),
					'toCourtType' : $("#iptcourtDocToCourtType" + i ).val(),
					'toCourtNotice' : $("#iptcourtDocToCourtNotice" + i ).val(),
					'toCourtAppointmentLetter' : $("#ckbcourtDocAppointmentLetter" + i + ":checked").val(),
					'toCourtAppointmentLetterCriminal' : $("#ckbcourtDocAppointmentLetterCriminal" + i + ":checked").val(),
					'toCourtApplyBook' : $("#ckbcourtDocToCourtApplyBook" + i + ":checked").val(),
					'toCourtDeail' : $("#ckbcourtDocToCourtDetail" + i + ":checked").val(),
					'toCourtOther' : $("#ckbcourtDocToCourtOther" + i + ":checked").val(),
					'toCourtContent' : $("#iptcourtDocToCourtOther" + i).val(),
					// 導往執行
					'executionDate' : $("#iptcourtDocExecutionDate" + i).val(),
					'executionTime' : $("#iptcourtDocExecutionTime" + i).val(),
					'executionAppointmentLetter' : $("#ckbcourtDocExecutionAppointmentLetter" + i + ":checked").val(),
					'executionOther' : $("#ckbcourtDocExecutionOther" + i + ":checked").val(),
					'executionOtherContent' : $("#iptcourtDocExecutionOther" + i).val()
				}
				
			courtDoc.subItems.push(subItems);
		}

		returncourtDoc = JSON.stringify(courtDoc.subItems);
		return returncourtDoc;
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
	