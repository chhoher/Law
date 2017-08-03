/**
 * Add By Jia 2017-07-26 docdocSum.js 實作docSum.jsp 
 */
 
$(function() {
	
	// ===== function start =====
	
	// add by Jia 查詢需調卷文件 function
	function queryMoveDoc(caseId, bankName, isInStore, debtName, borrowReason, 
			docStatus, ID, borrowStartDate, borrowEndDate, docCode, borrowUserName) {
		var docMoveDocTable = "";
		docMoveDocTable = $("#moveDocTable").dataTable();
		
		    $.ajax({
				url : '../pages/doc/borrow/docBorrowAction!loadborrowDocs.action',
				data : {
					"caseId" : caseId,
					"bankName" : bankName,
					"isInStore" : isInStore,
					"debtName" : debtName,
					"borrowReason" : borrowReason,
					"docStatus" : docStatus,
					"ID" : ID,
					"borrowStartDate" : borrowStartDate,
					"borrowEndDate" : borrowEndDate,
					"docCode" : docCode,
					"borrowUserName" : borrowUserName
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					var json = response.responseLDocBorrow;
					docMoveDocTable.fnClearTable();
					if (json.length !== 0) {
						docMoveDocTable.fnAddData(json);
					}
					docMoveDocTable.fnDraw();
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
	// 查詢需調卷文件
	$("#btnqueryMoveDoc").button().on("click",function() {
		var caseId = $("#iptsearchMoveDocCaseId").val(),
			bankName = $("#cobsearchMoveDocBankName").find('option:selected').val(),
			isInStore = $("#cobsearchMoveDocIsInStore").find('option:selected').val(),
			debtName = $("#iptsearchMoveDocDebtName").val(),
			borrowReason = $("#cobMoveDocBorrowReason").find("option:selected").val(),
			docStatus = $("#cobsearchMoveDocDocStatus").find("option:selected").val(),
			ID = $("#iptsearchMoveDocID").val(),
			borrowStartDate = $("#iptsearchMoveDocBorrowStartDate").val(),
			borrowEndDate = $("#iptsearchMoveDocBorrowEndDate").val(),
			docCode = $("#iptsearchMoveDocDocCode").val(),
			borrowUserName = $("#cobsearchMoveDocBorrowUserName").val();
			
		queryMoveDoc(caseId, bankName, isInStore, debtName, borrowReason, docStatus, 
			ID, borrowStartDate, borrowEndDate, docCode, borrowUserName);
	});
	
	$("#btnprintBorrowDoc").button().on("click",function(){
		printBorrowDoc();
	});
	// ===== 功能列按鈕 end =====
	
});

 (function(){
	
 })();