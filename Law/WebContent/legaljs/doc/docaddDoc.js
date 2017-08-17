/**
 * Add By Jia 2017-05-11 docaddDoc.js 實作addDoc.jsp 
 */
 
$(function() {
	// 定義Regex
	var addDocRegexdialog = $("#addDocRegex").dialog({
		autoOpen : false,
		height : 100,
		width : 500,
		modal : true
	});
	
	// 定義儲存完的視窗
	var saveEndDiv = $("#saveEndDiv").dialog({
		autoOpen : false,
		height : 600,
		width : 1000,
		modal : true
	});
	
	
	// ===== function start =====
	
	function saveaddDoc(){
		
		var returnCentitlement = null,// 儲存(執行名義)
			returnCourtDoc = null,// 儲存(法院文)
			returnCashierCheck = null,// 儲存(本票)
			returnDebts = null,// 儲存(債讓)
			returnClaim = null,// 儲存(債權文件)
			returnFile = null,// 儲存(卷宗)
			returnOther = null;// 儲存(其他)
		
		var checkAll = $("#ckbaddDocAll").is(':checked'),
			checkCentitlement = $("#ckbaddDocentitlementForeclosure").is(':checked'),
			checkCourtDoc = $("#ckbaddDoccourtDoc").is(':checked'),
			checkCashierCheck = $("#ckbaddDoccashierCheck").is(':checked'),
			checkDebts = $("#ckbaddDocdebts").is(':checked'),
			checkClaimsDoc = $("#ckbaddDocclaimsDoc").is(':checked'),
			checkDocFile = $("#ckbaddDocfile").is(':checked'),
			checkOther = $("#ckbaddDocother").is(':checked');
			
		if(checkAll){
			returnCentitlement = law.addDoc.centitlement.returnAllsubtabJson(),// 儲存(執行名義)
			returnCourtDoc = law.addDoc.courtDoc.returnAllsubtabJson(),// 儲存(法院文)
			returnCashierCheck = law.addDoc.cashierCheck.returnAllsubtabJson(),// 儲存(本票)
			returnDebts = law.addDoc.debts.returnAllsubtabJson(),// 儲存(債讓)
			returnClaim = law.addDoc.claimsDoc.returnAllsubtabJson(),// 儲存(債權文件)
			returnFile = law.addDoc.file.returnAllsubtabJson(),// 儲存(卷宗)
			returnOther = law.addDoc.other.returnAllsubtabJson();// 儲存(其他)
			if(returnCentitlement.isEmpty){
				$("#addDocRegexTxt").text(returnCentitlement.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnCentitlement.isRegexp){
				$("#addDocRegexTxt").text(returnCentitlement.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnCourtDoc.isEmpty){
				$("#addDocRegexTxt").text(returnCourtDoc.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnCourtDoc.isRegexp){
				$("#addDocRegexTxt").text(returnCourtDoc.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnCashierCheck.isEmpty){
				$("#addDocRegexTxt").text(returnCashierCheck.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnCashierCheck.isRegexp){
				$("#addDocRegexTxt").text(returnCashierCheck.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnDebts.isEmpty){
				$("#addDocRegexTxt").text(returnDebts.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnDebts.isRegexp){
				$("#addDocRegexTxt").text(returnDebts.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnClaim.isEmpty){
				$("#addDocRegexTxt").text(returnClaim.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnClaim.isRegexp){
				$("#addDocRegexTxt").text(returnClaim.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnFile.isEmpty){
				$("#addDocRegexTxt").text(returnFile.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnFile.isRegexp){
				$("#addDocRegexTxt").text(returnFile.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnOther.isEmpty){
				$("#addDocRegexTxt").text(returnOther.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
			if(returnOther.isRegexp){
				$("#addDocRegexTxt").text(returnOther.regexString);
				addDocRegexdialog.dialog("open");
				return;
			}
		}else{
			var hasCheck = 0;
			if(checkCentitlement){
				returnCentitlement = law.addDoc.centitlement.returnAllsubtabJson();// 儲存(執行名義)
				hasCheck ++;
				if(returnCentitlement.isEmpty){
					$("#addDocRegexTxt").text(returnCentitlement.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
				if(returnCentitlement.isRegexp){
					$("#addDocRegexTxt").text(returnCentitlement.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
			}
			if(checkCourtDoc){
				returnCourtDoc = law.addDoc.courtDoc.returnAllsubtabJson();// 儲存(法院文)
				hasCheck ++;
				if(returnCourtDoc.isEmpty){
					$("#addDocRegexTxt").text(returnCourtDoc.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
				if(returnCourtDoc.isRegexp){
					$("#addDocRegexTxt").text(returnCourtDoc.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
			}
			if(checkCashierCheck){
				returnCashierCheck = law.addDoc.cashierCheck.returnAllsubtabJson();// 儲存(本票)
				hasCheck ++;
				if(returnCashierCheck.isEmpty){
					$("#addDocRegexTxt").text(returnCashierCheck.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
				if(returnCashierCheck.isRegexp){
					$("#addDocRegexTxt").text(returnCashierCheck.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
			}
			if(checkDebts){
				returnDebts = law.addDoc.debts.returnAllsubtabJson();// 儲存(債讓)
				hasCheck ++;
				if(returnDebts.isEmpty){
					$("#addDocRegexTxt").text(returnDebts.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
				if(returnDebts.isRegexp){
					$("#addDocRegexTxt").text(returnDebts.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
			}
			if(checkClaimsDoc){
				returnClaim = law.addDoc.claimsDoc.returnAllsubtabJson();// 儲存(債權文件)
				hasCheck ++;
				if(returnClaim.isEmpty){
					$("#addDocRegexTxt").text(returnClaim.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
				if(returnClaim.isRegexp){
					$("#addDocRegexTxt").text(returnClaim.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
			}
			if(checkDocFile){
				returnFile = law.addDoc.file.returnAllsubtabJson();// 儲存(卷宗)
				hasCheck ++;
				if(returnFile.isEmpty){
					$("#addDocRegexTxt").text(returnFile.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
				if(returnFile.isRegexp){
					$("#addDocRegexTxt").text(returnFile.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
			}
			if(checkOther){
				returnOther = law.addDoc.other.returnAllsubtabJson();// 儲存(其他)
				hasCheck ++;
				if(returnOther.isEmpty){
					$("#addDocRegexTxt").text(returnOther.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
				if(returnOther.isRegexp){
					$("#addDocRegexTxt").text(returnOther.regexString);
					addDocRegexdialog.dialog("open");
					return;
				}
			}
			
			if(hasCheck === 0){
				$("#addDocRegexTxt").text("請勾選至少一項文件");
				addDocRegexdialog.dialog("open");
				return;
			}
		}
			
		$.ajax({
					url : '../pages/doc/documents/docAction!saveaddDoc.action',
					data : {
						caseId : law.addDoc.caseId,
						returnCentitlement : returnCentitlement,
						returnCourtDoc : returnCourtDoc,
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
						
						saveEndDiv.dialog("open");
						//add By Jia 2017-08-11 將儲存結果回傳前端
						//文件資訊的表格
					    var docsdatatable = $("#docSaveEndTable").dataTable();
					    var saveEndDateTable = $("#docSaveEndTable").DataTable();
						$("#docSaveEndTable").dataTable().fnClearTable();
						saveEndDateTable = $("#docSaveEndTable").DataTable();
						saveEndDateTable.on( 'order.dt search.dt', function () {
							saveEndDateTable.column(0, {search:'applied', order:'applied'}).nodes().each( function (cell, i) {
					            cell.innerHTML = i+1;
					        } );
					    } ).draw();
						if (response.success) {
							var json = response.responseDocInfo;
							docsdatatable.fnClearTable();
							if (json.length !== 0) {
								var i = 0;
								console.log(json.length);
								//$("#btnsaveaddDoc").button( "disable" );
								docsdatatable.fnAddData(json);
								for(;i < json.length; i ++){
									if(json[i].docType === "A"){
										if(json[i].tempCount === undefined){
											$("#iptcentitlementDocType").val(json[i].docType);
											$("#iptcentitlementDocId").val(json[i].docId);
										}else{
											$("#iptcentitlementDocType" + json[i].tempCount).val(json[i].docType);
											$("#iptcentitlementDocId" + json[i].tempCount).val(json[i].docId);
										}
									}else if(json[i].docType === "B"){
										if(json[i].tempCount === undefined){
											$("#iptcourtDocDocType").val(json[i].docType);
											$("#iptcourtDocDocId").val(json[i].docId);
										}else{
											$("#iptcourtDocDocType" + json[i].tempCount).val(json[i].docType);
											$("#iptcourtDocDocId" + json[i].tempCount).val(json[i].docId);
										}
									}else if(json[i].docType === "C"){
										if(json[i].tempCount === undefined){
											$("#iptcashierCheckDocType").val(json[i].docType);
											$("#iptcashierCheckDocId").val(json[i].docId);
										}else{
											$("#iptcashierCheckDocType" + json[i].tempCount).val(json[i].docType);
											$("#iptcashierCheckDocId" + json[i].tempCount).val(json[i].docId);
										}
									}else if(json[i].docType === "D"){
										if(json[i].tempCount === undefined){
											$("#iptdebtsDocType").val(json[i].docType);
											$("#iptdebtsDocId").val(json[i].docId);
										}else{
											$("#iptdebtsDocType" + json[i].tempCount).val(json[i].docType);
											$("#iptdebtsDocId" + json[i].tempCount).val(json[i].docId);
										}
									}else if(json[i].docType === "E"){
										if(json[i].tempCount === undefined){
											$("#iptclaimsDocDocType").val(json[i].docType);
											$("#iptclaimsDocDocId").val(json[i].docId);
										}else{
											$("#iptclaimsDocDocType" + json[i].tempCount).val(json[i].docType);
											$("#iptclaimsDocDocId" + json[i].tempCount).val(json[i].docId);
										}
									}else if(json[i].docType === "F"){
										if(json[i].tempCount === undefined){
											$("#iptfileDocType").val(json[i].docType);
											$("#iptfileDocId").val(json[i].docId);
										}else{
											$("#iptfileDocType" + json[i].tempCount).val(json[i].docType);
											$("#iptfileDocId" + json[i].tempCount).val(json[i].docId);
										}
									}else if(json[i].docType === "G"){
										if(json[i].tempCount === undefined){
											$("#iptotherDocType").val(json[i].docType);
											$("#iptotherDocId").val(json[i].docId);
										}else{
											$("#iptotherDocType" + json[i].tempCount).val(json[i].docType);
											$("#iptotherDocId" + json[i].tempCount).val(json[i].docId);
										}
									}
								}
							}
							docsdatatable.fnDraw();
							
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
	
	// 連結文管系統
	$("#btnLinkDocSystem").button().on("click",function() {
		law.doc.todocSystem(law.addDoc.caseId);
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
