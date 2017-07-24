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
			console.log(data);
			
			saveData = {
				bankName : data.bankName,
				prodName : "",
				caseId : data.caseId,
				debtName : data.debtName,
				ID : "",
				docCode : data.docCode,
				typeOne : data.typeOne,
				typeTwo : data.typeTwo,
				docStatus : data.docStatus,
				courtYearInfo : data.courtYearInfo,
				sourceDocInfo : data.sourceDocInfo,
				borrowReason : $("#applyBorrow_" + data.docCode).find('option:selected').text(),
				lawCode : 0,
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
				borrowSubLawCode : "",
				docId : 0
			}
			
			saveBorrowInfo.push(saveData);
			saveBorrowInfoString = JSON.stringify(saveBorrowInfo); 
			
			$.ajax({
				url : "../pages/doc/documents/docAction!saveBorrowDocs.action",
				data : {
					"docCodes" : docCodes,
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
			
			printData = {
				bankName : data.bankName,
				prodName : "",
				caseId : data.caseId,
				debtName : data.debtName,
				ID : "",
				docCode : data.docCode,
				typeOne : data.typeOne,
				typeTwo : data.typeTwo,
				docStatus : data.docStatus,
				courtYearInfo : data.courtYearInfo,
				sourceDocInfo : data.sourceDocInfo,
				borrowReason : $("#applyBorrow_" + data.docCode).find('option:selected').text(),
				lawCode : 0,
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
				borrowSubLawCode : "",
				docId : 0
			}
			
			printBorrowInfo.push(printData);
			printBorrowInfoString = JSON.stringify(printBorrowInfo); 
			
			$.ajax({
				url : "../pages/doc/documents/docAction!printBorrowDocs.action",
				data : {
					"printBorrowInfo" : printBorrowInfoString
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
	law.doc.applyBorrowString = function applyBorrowString(type, rowDocId) {
		var certificate, // 遞狀
			backCertificate, // 遞狀退件(業主)
			toCourt, // 開庭
			commonsBorrow, // 一般借調
			subBorrow; // 預借(遞狀)
		var returnString;
		
		// 遞狀
		if(type === "8aa2e72a5d5efd74015d5f474dd50002"){
			returnString = "<label>法務編號</label><input id='iptborrowDocLawCode_" + rowDocId + "' ></input>";
		}
		
		// 遞狀退件(業主)
		else if(type === "8aa2e72a5d5efd74015d5f478ecc0003"){
			returnString = "<label>指定退件日期</label><input id='iptborrowDocBackDate_" + rowDocId + "' ></input></br><label>退件原因</label><input id='iptborrowDocBackReason_" + rowDocId + "' ></input>";
		}
		
		// 開庭
		else if(type === "8aa2e72a5d5efd74015d5f486f120004"){
			returnString = "<label>開庭日期</label><input id='iptborrowDocToCourtDate_" + rowDocId + "' style='width: 100px;'></input><label>法務編號</label><input id='iptborrowDocToCourtLawCode_" + rowDocId + "' style='width: 100px;'></input>" +
					"</br><select id='applyBorrowCourtYearCourt_" +  rowDocId + "'><option value=''>請選擇</option></select><input id='applyBorrowCourtYearYear_" + rowDocId + "'  style='width: 50px;'><label>年</label>" +
							"<input id='applyBorrowCourtYearTxt_" + rowDocId + "' style='width: 50px;'><label>字</label><input id='applyBorrowCourtYearCaseId_" + rowDocId + "' style='width: 50px;'><label>案號</label>" +
									"<input id='applyBorrowCourtYearShare_" + rowDocId + "' style='width: 50px;'><label>股</label>";
		}
		
		// 一般借調
		else if(type === "8aa2e72a5d5efd74015d5f489e0b0005"){
			returnString = "<label>原因</label><input id='iptborrowDocReason_" + rowDocId + "' ></input>";
		}
		
		// 預借(遞狀)
		else if(type === "8aa2e72a5d5efd74015d5f48db170006"){
			returnString = "<label>法務編號</label><input id='iptborrowDocSubLawCode_" + rowDocId + "' ></input>";
		}
		
		return returnString;
	}
	
 })();