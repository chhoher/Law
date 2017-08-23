/**
 * Add By Jia 2017-06-14 docdocSystem.js 實作docSystem.jsp 
 */
 
$(function() {
	
	// ===== function start =====
	
	// add by Jia 申請借調 function
	function borrowDoc() {
		var docsdatatable = "",docDataTable="",saveBorrowInfoString;
		var saveBorrowInfo = [], docCodes = [], saveJson = {};
		docsdatatable = $("#docSystemCaseDocsTable").dataTable();
		docDataTable = $("#docSystemCaseDocsTable").DataTable();
		
		$("input:checked",docsdatatable.fnGetNodes()).each(function(){
			var data = "",
				saveData = "";
			var rowTr = $(this).closest('tr');
			docCodes.push($(this).val());
			
			// Get row data
		 	data = docDataTable.row(rowTr).data();
			
		 	// 組出借調資訊
		 	var borrowInfo,lawCode,borrowBackDate,borrowBackReason,borrowToCourtDate,borrowToCourtLawCode,
		 		borrowCourtYearCourt,borrowCourtYearYear,borrowCourtYearTxt,borrowCourtYearCaseId,
		 		borrowCourtYearShare,borrowCommonReason,borrowSubLawCode;
		 	
		 	// 遞狀
			if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f474dd50002"){
				lawCode = $("#iptborrowDocLawCode_" + data.docCode).val();
				borrowInfo = "-遞狀【" + lawCode + "】";
			}
			
			// 退件(業主)
			else if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f478ecc0003"){
				borrowBackDate = $("#iptborrowDocBackDate_" + data.docCode).val();
				borrowBackReason = $("#iptborrowDocBackReason_" + data.docCode).val();
				borrowInfo = "-退件(業主)【" + borrowBackDate + "-" + borrowBackReason + "】";
			}
			
			// 開庭
			else if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f486f120004"){
				var courtName;
				borrowToCourtDate = $("#iptborrowDocToCourtDate_" + data.docCode).val();
				borrowToCourtLawCode = $("#iptborrowDocToCourtLawCode_" + data.docCode).val();
				borrowCourtYearCourt = $("#applyBorrowCourtYearCourt_" + data.docCode).find('option:selected').val();
				courtName = $("#applyBorrowCourtYearCourt_" + data.docCode).find('option:selected').text();
				borrowCourtYearYear = $("#applyBorrowCourtYearYear_" + data.docCode).val();
				borrowCourtYearTxt = $("#applyBorrowCourtYearTxt_" + data.docCode).val();
				borrowCourtYearCaseId = $("#applyBorrowCourtYearCaseId_" + data.docCode).val();
				borrowCourtYearShare = $("#applyBorrowCourtYearShare_" + data.docCode).val();
				borrowInfo = "-開庭【" + borrowToCourtLawCode + "】【" + borrowToCourtDate + "-" + courtName + "/" + 
					borrowCourtYearYear + "/" + borrowCourtYearTxt + "/" + borrowCourtYearCaseId + "/" + borrowCourtYearShare + "】";
			}
			
			// 一般借調
			else if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f489e0b0005"){
				borrowCommonReason = $("#iptborrowDocReason_" + data.docCode).val();
				borrowInfo = "-一般借調【" + borrowCommonReason + "】";
			}
			
			// 預借(遞狀)
			else if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f48db170006"){
				borrowSubLawCode = $("#iptborrowDocSubLawCode_" + data.docCode).val();
				borrowInfo = "-預借(遞狀)【" + borrowSubLawCode + "】";
			}
			
			saveData = {
				// borrowList
				caseId : data.caseId,
				debtName : data.debtName,
				ID : data.ID,
				docCode : data.docCode,
				docStatus : data.docStatus,
				borrowStatus : 0, //申調固定帶0
				borrowReason : $("#applyBorrow_" + data.docCode).find('option:selected').val(),
				docId : data.docId,
				docType : data.docType,
				borrowInfo : borrowInfo,
				lawCode : lawCode,
				borrowBackDate : borrowBackDate,
				borrowBackReason : borrowBackReason,
				borrowToCourtDate : borrowToCourtDate,
				borrowToCourtLawCode : borrowToCourtLawCode,
		 		borrowCourtYearCourt : borrowCourtYearCourt,
		 		borrowCourtYearYear : borrowCourtYearYear,
		 		borrowCourtYearTxt : borrowCourtYearTxt,
		 		borrowCourtYearCaseId : borrowCourtYearCaseId,
		 		borrowCourtYearShare : borrowCourtYearShare,
		 		borrowCommonReason : borrowCommonReason,
		 		borrowSubLawCode : borrowSubLawCode,			
				borrowUserName : "ABC",
				borrowUserId : "ABC",
				borrowDatetime : "2017-07-24",
				bankName : data.bankName,
				prodName : "",
				typeOne : data.typeOne,
				typeTwo : data.typeTwo,
				courtYearInfo : data.courtYearInfo,
				sourceDocInfo : data.sourceDocInfo,
				//progressDatetime : "2017-07-24",
				progressUserId : "",
				progressUserName : "",
				checkDatetime : "2017-07-24",
				checkUserId : "",
				checkUserName : "",
				backDatetime : "2017-07-24",
				backUserId : "",
				backUserName : "",
				finalProgressDatetime : "2017-07-24",
				finalProgressUserId : "",
				finalProgressUserName : "",
				edit : data.edit,
				business : "",
				businessAccount : ""
			}
			
			saveBorrowInfo.push(saveData);
			
		});
		
		saveBorrowInfoString = JSON.stringify(saveBorrowInfo); 
			
			$.ajax({
				url : "../pages/doc/documents/docAction!saveBorrowDocs.action",
				data : {
					"saveBorrowInfo" : saveBorrowInfoString,
					"caseId" : law.doc.caseId
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					// 將文件資料帶入表格
				    var docsdatatable = $("#docSystemCaseDocsTable").dataTable();
				    docsdatatable.fnClearTable();
					var json = response.responseCaseInfo;
					docsdatatable.fnClearTable();
					if (json.length !== 0) {
						docsdatatable.fnAddData(json);
					}
					docsdatatable.fnDraw();
					
					// Add By Jia 2017-07-21 當選項變更時動態改變畫面
		    		$(docsdatatable.fnGetData()).each(function(i){
						$( "#applyBorrow_" + this.docCode ).change(function() {
							$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).empty();
							$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).append(law.doc.applyBorrowString($(this).val(), docsdatatable.fnGetData(i).docCode, 
									"", "", "", "", "", "", "", "", "", "", "", "", "", "請選擇"));
							
							//將地院的下拉選項帶進去
							if($(this).val() === "8aa2e72a5d5efd74015d5f486f120004"){
								law.common.selectOption("#applyBorrowCourtYearCourt_" + docsdatatable.fnGetData(i).docCode, law.doc.courtSelectOption);
						 		law.common.formatInputItemToDate("#iptborrowDocToCourtDate_" + docsdatatable.fnGetData(i).docCode, "yy-mm-dd");
							}else if($(this).val() === "8aa2e72a5d5efd74015d5f478ecc0003"){
								law.common.formatInputItemToDate("#iptborrowDocBackDate_" + docsdatatable.fnGetData(i).docCode, "yy-mm-dd");
							}
							
							// 勾勾控制
							if($("#applyBorrow_" + docsdatatable.fnGetData(i).docCode).find('option:selected').val() === ''){
								$("#ckbapplyBorrow_" + docsdatatable.fnGetData(i).docCode).prop("checked", false);
							}else{
								$("#ckbapplyBorrow_" + docsdatatable.fnGetData(i).docCode).prop("checked", true);								
							}

							
						});
						
						// 勾勾按下去的動作
						$("#ckbapplyBorrow_" + docsdatatable.fnGetData(i).docCode).on( "click", function(){
							if($("#ckbapplyBorrow_" + docsdatatable.fnGetData(i).docCode).is(':checked')){
								$( "#applyBorrow_" + docsdatatable.fnGetData(i).docCode)[0].selectedIndex = 4;

								$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).empty();// 先清除一般借調的填寫框
								$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).append(// 將一般借調的填寫框加入下方
										law.doc.applyBorrowString($( "#applyBorrow_" + docsdatatable.fnGetData(i).docCode).val(), docsdatatable.fnGetData(i).docCode, "", "", "", "", "", "", "", "", "", "", "", "", "", "請選擇"));
								
							}else{
								$( "#applyBorrow_" + docsdatatable.fnGetData(i).docCode)[0].selectedIndex = 0;
								$("#applyBorrowEdit_" + docsdatatable.fnGetData(i).docCode).empty();// 清除所填寫的框框
							}
						});
						
					});
					
		    		// 若登入角色具文管科權限，將欄位打開
					if(law.doc.loginRoleIds.indexOf('8aa2e72a5de4091a015de41369710000') >= 0){
					    var toHiddenColumnTable = $('#docSystemCaseDocsTable').DataTable();
					    toHiddenColumnTable.column( 1 ).visible( true );
					}
					
					alert(response.msg);
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		
	}
	
	// add by Jia 匯出借調excel function
	function printBorrowDoc() {
		var docsdatatable = "",docDataTable="",printBorrowInfoString;
		var printBorrowInfo = [];
		docsdatatable = $("#docSystemCaseDocsTable").dataTable();
		docDataTable = $("#docSystemCaseDocsTable").DataTable();
		
		$(docsdatatable.fnGetNodes()).each(function(){
			var data = "",
				printData = "";
			var rowTr = $(this).closest('tr');
			
			// Get row data
		 	data = docDataTable.row(rowTr).data();
		 	
		 	// 組出借調資訊
		 	var borrowInfo,lawCode,borrowBackDate,borrowBackReason,borrowToCourtDate,borrowToCourtLawCode,
		 		borrowCourtYearCourt,borrowCourtYearYear,borrowCourtYearTxt,borrowCourtYearCaseId,
		 		borrowCourtYearShare,borrowCommonReason,borrowSubLawCode;
			
		 	// 遞狀
			if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f474dd50002"){
				lawCode = $("#iptborrowDocLawCode_" + data.docCode).val();
			}
			
			// 退件(業主)
			else if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f478ecc0003"){
				borrowBackDate = $("#iptborrowDocBackDate_" + data.docCode).val();
				borrowBackReason = $("#iptborrowDocBackReason_" + data.docCode).val();
			}
			
			// 開庭
			else if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f486f120004"){
				borrowToCourtDate = $("#iptborrowDocToCourtDate_" + data.docCode).val();
				borrowToCourtLawCode = $("#iptborrowDocToCourtLawCode_" + data.docCode).val();
				borrowCourtYearCourt = $("#applyBorrowCourtYearCourt_" + data.docCode).find('option:selected').val();
				borrowCourtYearYear = $("#applyBorrowCourtYearYear_" + data.docCode).val();
				borrowCourtYearTxt = $("#applyBorrowCourtYearTxt_" + data.docCode).val();
				borrowCourtYearCaseId = $("#applyBorrowCourtYearCaseId_" + data.docCode).val();
				borrowCourtYearShare = $("#applyBorrowCourtYearShare_" + data.docCode).val();
			}
			
			// 一般借調
			else if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f489e0b0005"){
				borrowCommonReason = $("#iptborrowDocReason_" + data.docCode).val();
			}
			
			// 預借(遞狀)
			else if($("#applyBorrow_" + data.docCode).find('option:selected').val() === "8aa2e72a5d5efd74015d5f48db170006"){
				borrowSubLawCode = $("#iptborrowDocSubLawCode_" + data.docCode).val();
			}
		 		
			printData = {
				bankName : data.bankName,
				prodName : "",
				caseId : data.caseId,
				debtName : data.debtName,
				ID : data.ID,
				docCode : data.docCode,
				typeOne : data.typeOne,
				typeTwo : data.typeTwo,
				docStatus : data.docStatus,
				courtYearInfo : data.courtYearInfo,
				sourceDocInfo : data.sourceDocInfo,
				borrowReason : $("#applyBorrow_" + data.docCode).find('option:selected').text(),
				docId : data.docId,
				docType : data.docType,
				borrowInfo : borrowInfo,
				lawCode : lawCode,
				borrowBackDate : borrowBackDate,
				borrowBackReason : borrowBackReason,
				borrowToCourtDate : borrowToCourtDate,
				borrowToCourtLawCode : borrowToCourtLawCode,
		 		borrowCourtYearCourt : borrowCourtYearCourt,
		 		borrowCourtYearYear : borrowCourtYearYear,
		 		borrowCourtYearTxt : borrowCourtYearTxt,
		 		borrowCourtYearCaseId : borrowCourtYearCaseId,
		 		borrowCourtYearShare : borrowCourtYearShare,
		 		borrowCommonReason : borrowCommonReason,
		 		borrowSubLawCode : borrowSubLawCode,			
				borrowUserName : "ABC",
				borrowUserId : "ABC",
				borrowDatetime : "2017-07-24",
				progressDatetime : "2017-07-24",
				progressUserId : "",
				progressUserName : "",
				checkDatetime : "2017-07-24",
				checkUserId : "",
				checkUserName : "",
				backDatetime : "2017-07-24",
				backUserId : "",
				backUserName : "",
				finalProgressDatetime : "2017-07-24",
				finalProgressUserId : "",
				finalProgressUserName : "",
				edit : data.edit,
				business : "",
				businessAccount : "",
				borrowInfo : "",
				borrowLawCode : "",
				borrowBackDate : "2017-07-24",
				borrowBackReason : "",
				borrowToCourtDate : "2017-07-24",
				borrowToCourtLawCode : "",
				borrowCourtYearCourt : "",
				borrowCourtYearYear : 0,
				borrowCourtYearTxt : "",
				borrowCourtYearCaseId : 0,
				borrowCourtYearShare : "",
				borrowCommonsReason : "",
				borrowSubLawCode : ""
			}
			
			printBorrowInfo.push(printData);
			printBorrowInfoString = JSON.stringify(printBorrowInfo); 
			
		});
		
		$.ajax({
				url : "../pages/doc/documents/docAction!printBorrowDocs.action",
				data : {
					"printBorrowInfo" : printBorrowInfoString
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
    				window.location.href = response.downloadPath;
//					window.open(response.downloadPath);
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		
	}
	
	// ===== function end =====

	// ===== 功能列按鈕 start =====
	// 申請借調
	$("#btnborrowDoc").button().on("click",function() {
		borrowDoc();
	});
	
	$("#btnprintBorrowDoc").button().on("click",function(){
		printBorrowDoc();
	});
	// ===== 功能列按鈕 end =====
	
});

 (function(){
	// 選項動態組出畫面的String
	law.doc.applyBorrowString = function applyBorrowString(type, rowDocId, isDisabled, initTxt1, initTxt2, initTxt3, 
			initTxt4, initTxt5, initTxt6, initTxt7, initTxt8, initTxt9, initTxt10, initTxt11, initCourt, initDisCourt) {
		var certificate, // 遞狀
			backCertificate, // 退件(業主)
			toCourt, // 開庭
			commonsBorrow, // 一般借調
			subBorrow; // 預借(遞狀)
		var returnString;
		
		// 遞狀
		if(type === "8aa2e72a5d5efd74015d5f474dd50002"){
			returnString = "<label>法務編號</label><input id='iptborrowDocLawCode_" + rowDocId + "' value='" + initTxt1 + "' " + isDisabled + "></input>";
		}
		
		// 退件(業主)
		else if(type === "8aa2e72a5d5efd74015d5f478ecc0003"){
			returnString = "<label>指定退件日期</label><input id='iptborrowDocBackDate_" + rowDocId + "' value='" + initTxt2 + "' " + isDisabled + "></input>" +
					"</br><label>退件原因</label><input id='iptborrowDocBackReason_" + rowDocId + "' value='" + initTxt3 + "' " + isDisabled + "></input>";
		}
		
		// 開庭
		else if(type === "8aa2e72a5d5efd74015d5f486f120004"){
			returnString = "<label>開庭日期</label><input id='iptborrowDocToCourtDate_" + rowDocId + "' value= '" + initTxt4 + "' " + isDisabled + " style='width: 100px;'></input><label>法務編號</label>" +
					"<input id='iptborrowDocToCourtLawCode_" + rowDocId + "' value='" + initTxt5 + "' " + isDisabled + " style='width: 100px;'></input>" +
					"</br><select id='applyBorrowCourtYearCourt_" +  rowDocId + "' " + isDisabled + "><option value='" + initCourt + "'>" + initDisCourt + "</option></select>" +
							"<input id='applyBorrowCourtYearYear_" + rowDocId + "' value='" + initTxt6 + "' " + isDisabled + " style='width: 50px;'><label>年</label>" +
							"<input id='applyBorrowCourtYearTxt_" + rowDocId + "' value='" + initTxt7 + "' " + isDisabled + " style='width: 50px;'><label>字</label>" +
									"<input id='applyBorrowCourtYearCaseId_" + rowDocId + "' value='" + initTxt8 + "' " + isDisabled + " style='width: 50px;'><label>案號</label>" +
									"<input id='applyBorrowCourtYearShare_" + rowDocId + "' value='" + initTxt9 + "' " + isDisabled + " style='width: 50px;'><label>股</label>";
		}
		
		// 一般借調
		else if(type === "8aa2e72a5d5efd74015d5f489e0b0005"){
			returnString = "<label>原因</label><input id='iptborrowDocReason_" + rowDocId + "' value='" + initTxt10 + "' " + isDisabled + "></input>";
		}
		
		// 預借(遞狀)
		else if(type === "8aa2e72a5d5efd74015d5f48db170006"){
			returnString = "<label>法務編號</label><input id='iptborrowDocSubLawCode_" + rowDocId + "' value='" + initTxt11 + "' " + isDisabled + "></input>";
		}
		
		return returnString;
	}
	
	law.doc.editDocStatus = function editDocStatus(rowDocId, rowIndex){
		$.ajax({
					url : '../pages/doc/documents/docAction!updateDocStatus.action',
					data : {
						docId : rowDocId,
						updateDocStatus : $("#editDoc_" + rowDocId).find('option:selected').val(),
						updateDisDocStatus : $("#editDoc_" + rowDocId).find('option:selected').text()
						},
					type : "POST",
					dataType : 'json',
					success : function(response) {
						if (response.success) {
							var editDataTable = $("#docSystemCaseDocsTable").DataTable();
							var rowData = editDataTable.data()[rowIndex];
							rowData.disDocStatus = $("#editDoc_" + rowDocId).find('option:selected').text();
							rowData.docStatus = $("#editDoc_" + rowDocId).find('option:selected').val();
							editDataTable.row(rowIndex).data(rowData).draw();
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
	
	law.doc.editDocs = function editDocs(caseId, rowDocType, rowDocId){
		law.doc.toaddDoc(caseId, rowDocType, rowDocId);
	}
	
	law.doc.openFile = function openFile(rowCaseId, fileName){
		// download 影像檔
		$.ajax({
			url : '../pages/doc/documents/docAction!downloadImgFile.action',
			type : "POST",
			dataType : 'json',
			data : {
				rowCaseId : rowCaseId,
				fileName : fileName
			},
			success : function(response) {
				if (response.length !== 0) {
					var pathAndName = "../upload/temp/" + response.imguuid + "/" + response.imgFileName;
			
					window.location.href = pathAndName;
				}
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
 })();