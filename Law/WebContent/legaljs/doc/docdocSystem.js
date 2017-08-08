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
			
			// 遞狀退件(業主)
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
					"saveBorrowInfo" : saveBorrowInfoString
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
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
			
			// 遞狀退件(業主)
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
	law.doc.applyBorrowString = function applyBorrowString(type, rowDocId, initTxt1, initTxt2, initTxt3, 
			initTxt4, initTxt5, initTxt6, initTxt7, initTxt8, initTxt9, initTxt10, initTxt11) {
		var certificate, // 遞狀
			backCertificate, // 遞狀退件(業主)
			toCourt, // 開庭
			commonsBorrow, // 一般借調
			subBorrow; // 預借(遞狀)
		var returnString;
		
		// 遞狀
		if(type === "8aa2e72a5d5efd74015d5f474dd50002"){
			returnString = "<label>法務編號</label><input id='iptborrowDocLawCode_" + rowDocId + "' value='" + initTxt1 + "'></input>";
		}
		
		// 遞狀退件(業主)
		else if(type === "8aa2e72a5d5efd74015d5f478ecc0003"){
			returnString = "<label>指定退件日期</label><input id='iptborrowDocBackDate_" + rowDocId + "' value='" + initTxt2 + "'></input>" +
					"</br><label>退件原因</label><input id='iptborrowDocBackReason_" + rowDocId + "' value='" + initTxt3 + "'></input>";
		}
		
		// 開庭
		else if(type === "8aa2e72a5d5efd74015d5f486f120004"){
			returnString = "<label>開庭日期</label><input id='iptborrowDocToCourtDate_" + rowDocId + "' value= '" + initTxt3 + "' style='width: 100px;'></input><label>法務編號</label>" +
					"<input id='iptborrowDocToCourtLawCode_" + rowDocId + "' value='" + initTxt4 + "' style='width: 100px;'></input>" +
					"</br><select id='applyBorrowCourtYearCourt_" +  rowDocId + "'><option value=''>請選擇</option></select>" +
							"<input id='applyBorrowCourtYearYear_" + rowDocId + "' value='" + initTxt6 + "' style='width: 50px;'><label>年</label>" +
							"<input id='applyBorrowCourtYearTxt_" + rowDocId + "' value='" + initTxt7 + "' style='width: 50px;'><label>字</label>" +
									"<input id='applyBorrowCourtYearCaseId_" + rowDocId + "' value='" + initTxt8 + "' style='width: 50px;'><label>案號</label>" +
									"<input id='applyBorrowCourtYearShare_" + rowDocId + "' value='" + initTxt9 + "' style='width: 50px;'><label>股</label>";
		}
		
		// 一般借調
		else if(type === "8aa2e72a5d5efd74015d5f489e0b0005"){
			returnString = "<label>原因</label><input id='iptborrowDocReason_" + rowDocId + "' value='" + initTxt10 + "'></input>";
		}
		
		// 預借(遞狀)
		else if(type === "8aa2e72a5d5efd74015d5f48db170006"){
			returnString = "<label>法務編號</label><input id='iptborrowDocSubLawCode_" + rowDocId + "' value='" + initTxt11 + "'></input>";
		}
		
		return returnString;
	}
	
 })();