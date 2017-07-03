/**
 * Add By Jia 2017-05-11 docaddDoc.js 實作addDoc.jsp 
 */
 
 // 執行名義 start
law.addDoc.cen = {
	censubtabcount : 0,
	censubtabs : $("#censubtabs").tabs(),
	cenactivesubtabcount : 0,
	addcensubtab : function (){
		var cenactivesubtabcount = law.addDoc.cen.cenactivesubtabcount;
		var censubtabcount = law.addDoc.cen.censubtabcount;
		var censubtabs = law.addDoc.cen.censubtabs;
		var tabTitle = "執行名義";
		var tabId = "tabs-" + censubtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>"+
           	 	"<tr>"+
					"<td><label>共用案號</label></td>"+
					"<td><input id='iptcentitlementShareCaseId"+censubtabcount+"'></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>業主調件日</label></td>"+
					"<td><input id='iptcentitlementBankDate"+censubtabcount+"' ></input></td>"+
					"<td><label>*收文日期</label></td>"+
					"<td><input id='iptcentitlementreceivedDate"+censubtabcount+"' ></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>*文件類別</label></td>"+
					"<td><input id='iptcentitlementTypeOne"+censubtabcount+"' ></input></td>"+
					"<td><label>*文件項目</label></td>"+
					"<td><input id='iptcentitlementTypeTwo"+censubtabcount+"' ></input></td>"+
					"<td><label>*債權人</label></td>"+
					"<td><input id='iptcentitlementBankName"+censubtabcount+"' ></input></td>"+
					"<td><label>原債權人</label></td>"+
					"<td><input id='iptcentitlementOldBankName"+censubtabcount+"' ></input></td>"+
				"</tr>"+
					"<td><label>*法院年字案股</label></td>"+
					"<td><input id='iptcentitlementCourtYearCourt"+censubtabcount+"' ></input></td>"+
					"<td><label>年度</label></td>"+
					"<td><input id='iptcentitlementCourtYearYear"+censubtabcount+"' ></input></td>"+
					"<td><label>字</label></td>"+
					"<td><input id='iptcentitlementCourtYearTxt"+censubtabcount+"' ></input></td>"+
					"<td><label>股別</label></td>"+
					"<td><input id='iptcentitlementCourtYearShare"+censubtabcount+"' ></input></td>"+
					"<td><label>案號</label></td>"+
					"<td><input id='iptcentitlementCourtYearCaseId"+censubtabcount+"' ></input></td>"+
				"<tr>"+
					"<td><label>*發文日期</label></td>"+
					"<td><input id='iptcentitlementSendDate"+censubtabcount+"' ></input></td>"+
					"<td><label>*最近執行日期</label></td>"+
					"<td><input id='iptcentitlementNewSendDate"+censubtabcount+"' ></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>備註</label></td>"+
					"<td><input id='iptcentitlementRemark"+censubtabcount+"'></input></td>"+
				"</tr>"+
           	" </table>";
           	
		law.addDoc.cen.censubtabcount ++ ;
		law.addDoc.cen.cenactivesubtabcount ++;
		
		law.addDoc.cen.censubtabs.find(".ui-tabs-nav").append(li);
		law.addDoc.cen.censubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		law.addDoc.cen.censubtabs.tabs("refresh");
		law.addDoc.cen.censubtabs.tabs({ active: law.addDoc.cen.cenactivesubtabcount});
	}
};

	// Close icon: removing the tab on click
	$("#censubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		law.addDoc.cen.cenactivesubtabcount--;
		law.addDoc.cen.censubtabs.tabs({ active: law.addDoc.cen.cenactivesubtabcount});
	});
// 執行名義 end
	
// 法院文 start
var courtDocsubtabcount = 0;
var courtDocactivesubtabcount = 0;
var courtDocsubtabs = $("#courtDocsubtabs").tabs();
	function addcourtDocsubtab() {
		courtDocsubtabcount ++ ;
		courtDocactivesubtabcount ++;
		
		var tabTitle = "執行名義";
		var tabId = "tabs-" + courtDocsubtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>"+
           	 	"<tr>"+
					"<td><label>共用案號</label></td>"+
					"<td><input id='iptcentitlementShareCaseId"+courtDocsubtabcount+"'></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>業主調件日</label></td>"+
					"<td><input id='iptcentitlementBankDate"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>*收文日期</label></td>"+
					"<td><input id='iptcentitlementreceivedDate"+courtDocsubtabcount+"' ></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>*文件類別</label></td>"+
					"<td><input id='iptcentitlementTypeOne"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>*文件項目</label></td>"+
					"<td><input id='iptcentitlementTypeTwo"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>*債權人</label></td>"+
					"<td><input id='iptcentitlementBankName"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>原債權人</label></td>"+
					"<td><input id='iptcentitlementOldBankName"+courtDocsubtabcount+"' ></input></td>"+
				"</tr>"+
					"<td><label>*法院年字案股</label></td>"+
					"<td><input id='iptcentitlementCourtYearCourt"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>年度</label></td>"+
					"<td><input id='iptcentitlementCourtYearYear"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>字</label></td>"+
					"<td><input id='iptcentitlementCourtYearTxt"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>股別</label></td>"+
					"<td><input id='iptcentitlementCourtYearShare"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>案號</label></td>"+
					"<td><input id='iptcentitlementCourtYearCaseId"+courtDocsubtabcount+"' ></input></td>"+
				"<tr>"+
					"<td><label>*發文日期</label></td>"+
					"<td><input id='iptcentitlementSendDate"+courtDocsubtabcount+"' ></input></td>"+
					"<td><label>*最近執行日期</label></td>"+
					"<td><input id='iptcentitlementNewSendDate"+courtDocsubtabcount+"' ></input></td>"+
				"</tr>"+
				"<tr>"+
					"<td><label>備註</label></td>"+
					"<td><input id='iptcentitlementRemark"+courtDocsubtabcount+"'></input></td>"+
				"</tr>"+
           	" </table>";
		
		courtDocsubtabs.find(".ui-tabs-nav").append(li);
		courtDocsubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		courtDocsubtabs.tabs("refresh");
		courtDocsubtabs.tabs({ active: courtDocactivesubtabcount});
	}
	
	// Close icon: removing the tab on click
	courtDocsubtabs.on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		courtDocactivesubtabcount--;
		courtDocsubtabs.tabs({ active: courtDocactivesubtabcount});
	});
// 法院文 end
	
// 本票 start
var cashierChecksubtabcount = 0;
var cashierCheckactivesubtabcount = 0;
var cashierChecksubtabs = $("#cashierChecksubtabs").tabs();
	function addcashierChecksubtab() {
		cashierChecksubtabcount ++ ;
		cashierCheckactivesubtabcount ++;
		
		var tabTitle = "本票";
		var tabId = "tabs-" + cashierChecksubtabcount;
		
		var tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptcashierCheckReceivedDate" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptcashierCheckBankDate" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><input id='iptcashierCheckDocStatus" + cashierChecksubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><input id='iptcashierCheckTypeOne" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><input id='iptcashierCheckTypeTwo" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>債權人</label></td>" +
					"<td><input id='iptcashierCheckBankName" + cashierChecksubtabcount + "'></input></td>" +
					"<td><label>原債權人</label></td>" +
					"<td><input id='iptcashierCheckOldBankName" + cashierChecksubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>相對人</label></td>" +
					"<td><input id='iptcashierCheckRelationPerson" + cashierChecksubtabcount + "'></input></td>" +
				"</tr>" +
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
		
		cashierChecksubtabs.find(".ui-tabs-nav").append(li);
		cashierChecksubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		cashierChecksubtabs.tabs("refresh");
		cashierChecksubtabs.tabs({ active: cashierCheckactivesubtabcount});
	}
	
	// Close icon: removing the tab on click
	cashierChecksubtabs.on("click", "span.ui-icon-close", function() {
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		cashierCheckactivesubtabcount--;
		cashierChecksubtabs.tabs({ active: cashierCheckactivesubtabcount});
	});
// 本票 end
	
$(function() {
	
	// ===== function start =====
	
	function saveaddDoc(){
		
		var returnCashierCheck = law.addDoc.cashierCheck.returnAllsubtabJson(),// 儲存(本票)
			returnDebts = law.addDoc.debts.returnAllsubtabJson(),// 儲存(債讓)
			returnClaim = law.addDoc.claimsDoc.returnAllsubtabJson(),// 儲存(債權文件)
			returnFile = law.addDoc.file.returnAllsubtabJson(),// 儲存(卷宗)
			returnOther = law.addDoc.other.returnAllsubtabJson();// 儲存(其他)

		$.ajax({
					url : '../pages/doc/documents/docAction!saveaddDoc.action',
					data : {
						caseId : law.addDoc.caseId,
						returnCashierCheck : returnCashierCheck,
						returnDebts : returnDebts,
						returnClaim : returnClaim,
						returnFile : returnFile,
						returnOther : returnOther,
						docInfoId : law.addDoc.docInfoId
						},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						if (response.success) {
							alert(response.msg);
						} else {
							alert(response.msg);
						}
					},
					error : function(xhr, ajaxOptions, thrownError) {
						alert(xhr.status);
						alert(thrownError);
					}
				});
	}
	// ===== function end =====

	// ===== 功能列按鈕 start =====
	// 儲存按鈕
	$("#btnsaveaddDoc").button().on("click",function() {
		saveaddDoc();
	});
	
	// ===== 功能列按鈕 end =====
	
});

(function(){
	 //Add By Jia 2017-05-09 控制checkbox有沒有要顯示下列填寫項目 start
		    $("#ckbaddDocAll").on( "click", function(){
		    	if($("#ckbaddDocAll").is(':checked')){
		    		$("#ckbaddDocentitlementForeclosure").prop("checked", false);
		    		$("#ckbaddDoccourtDoc").prop("checked", false);
		    		$("#ckbaddDoccashierCheck").prop("checked", false);
		    		$("#ckbaddDocdebts").prop("checked", false);
		    		$("#ckbaddDocclaimsDoc").prop("checked", false);
		    		$("#ckbaddDocfile").prop("checked", false);
		    		$("#ckbaddDocother").prop("checked", false);
		    		
		    		$("#divaddDocentitlementForeclosure").show();
		    		$("#divaddDoccourtDoc").show();
		    		$("#divaddDoccashierCheck").show();
		    		$("#divaddDocdebts").show();
		    		$("#divaddDocclaimsDoc").show();
		    		$("#divaddDocfile").show();
		    		$("#divaddDocother").show();
		    	}else{
		    		$("#divaddDocentitlementForeclosure").hide();
		    		$("#divaddDoccourtDoc").hide();
		    		$("#divaddDoccashierCheck").hide();
		    		$("#divaddDocdebts").hide();
		    		$("#divaddDocclaimsDoc").hide();
		    		$("#divaddDocfile").hide();
		    		$("#divaddDocother").hide();
		    	}
		    });
		    $("#ckbaddDocentitlementForeclosure").on( "click", function(){
		    	if($("#ckbaddDocentitlementForeclosure").is(':checked')){
		    		
		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}
		    		
		    		$("#divaddDocentitlementForeclosure").show();
		    	}else{
		    		$("#divaddDocentitlementForeclosure").hide();
		    	}
		    });
		    $("#ckbaddDoccourtDoc").on( "click", function(){
		    	if($("#ckbaddDoccourtDoc").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}
		    		
		    		$("#divaddDoccourtDoc").show();
		    	}else{
		    		$("#divaddDoccourtDoc").hide();
		    	}
		    });
		    $("#ckbaddDoccashierCheck").on( "click", function(){
		    	if($("#ckbaddDoccashierCheck").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}
		    		
		    		$("#divaddDoccashierCheck").show();
		    	}else{
		    		$("#divaddDoccashierCheck").hide();
		    	}
		    });
		    $("#ckbaddDocdebts").on( "click", function(){
		    	if($("#ckbaddDocdebts").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}

		    		$("#divaddDocdebts").show();
		    	}else{
		    		$("#divaddDocdebts").hide();
		    	}
		    });
		    $("#ckbaddDocclaimsDoc").on( "click", function(){
		    	if($("#ckbaddDocclaimsDoc").is(':checked')){
		    		
		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}

		    		$("#divaddDocclaimsDoc").show();
		    	}else{
		    		$("#divaddDocclaimsDoc").hide();
		    	}
		    });
		    $("#ckbaddDocfile").on( "click", function(){
		    	if($("#ckbaddDocfile").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}

		    		$("#divaddDocfile").show();
		    	}else{
		    		$("#divaddDocfile").hide();
		    	}
		    });
		    $("#ckbaddDocother").on( "click", function(){
		    	if($("#ckbaddDocother").is(':checked')){

		    		if($("#ckbaddDocAll").is(':checked')){
		    			$("#ckbaddDocAll").prop("checked", false);
			    		
		    			$("#divaddDocentitlementForeclosure").hide();
			    		$("#divaddDoccourtDoc").hide();
			    		$("#divaddDoccashierCheck").hide();
			    		$("#divaddDocdebts").hide();
			    		$("#divaddDocclaimsDoc").hide();
			    		$("#divaddDocfile").hide();
			    		$("#divaddDocother").hide();
			    	}

		    		$("#divaddDocother").show();
		    	}else{
		    		$("#divaddDocother").hide();
		    	}
		    });
		  //Add By Jia 2017-05-09 控制checkbox有沒有要顯示下列填寫項目 end
})();
