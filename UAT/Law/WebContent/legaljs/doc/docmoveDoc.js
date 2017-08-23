/**
 * Add By Jia 2017-07-26 docmoveDoc.js 實作moveDoc.jsp 
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
					"type" : 0,
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
	function printMoveDoc() {
		var docsdatatable = "",docDataTable="",printMoveDocInfoString;
		var printMoveDocInfo = [];
		docsdatatable = $("#moveDocTable").dataTable();
		docDataTable = $("#moveDocTable").DataTable();
		
		$(docsdatatable.fnGetNodes()).each(function(){
			var data = "",
				printData = "";
			var rowTr = $(this).closest('tr');
			
			// Get row data
		 	data = docDataTable.row(rowTr).data();
			
			printData = {
				rowNum : data.rowNum,
				checkBox : data.checkBox,
				bankName : data.bankName,
				prodName : data.prodName,
				caseId : data.caseId,
				debtName : data.debtName,
				ID : data.ID,
				docCode : data.docCode,
				typeOne : data.typeOne,
				typeTwo : data.typeTwo,
				docStatus : data.docStatus,
				courtYearInfo : data.courtYearInfo,
				sourceDocInfo : data.sourceDocInfo,
				borrowReason : data.borrowReason,
				lawCode : data.lawCode,
				O_C : data.O_C,
				borrowStatus : data.borrowStatus,
				borrowUserName : data.borrowUserName,
				borrowUserId : data.borrowUserId,
//				borrowDatetime : data.borrowDatetime,
//				progressDatetime : data.disProgressDatetime,
				borrowDatetime : null,
				progressDatetime : null,
				progressUserId : data.progressUserId,
				progressUserName : data.progressUserName,
				shareCaseId : data.shareCaseId
			}
			
			printMoveDocInfo.push(printData);
			
		});
		
		printMoveDocInfoString = JSON.stringify(printMoveDocInfo);
		
		$.ajax({
				url : "../pages/doc/borrow/docBorrowAction!printMoveDocs.action",
				data : {
					"printMoveDocInfo" : printMoveDocInfoString,
					"printType" : 0
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
    				window.location.href = response.downloadPath;
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		
	}
	
	// add By Jia 2017-08-07 確認調出
	// updateType = 0 表示確定調卷
	// updateType = 1 表示取消借調
	function updateMoveDoc(updateType){
		var moveDocsdatatable, moveDocsDataTable;
		var updateCentitlementDocIds = [], updateCourtDocDocIds = [], updateCashierCheckDocIds = [], 
			updateDebtsDocIds = [], updateClaimsDocDocIds = [], updateFileDocDocIds = [], updateOtherDocIds = [];
		var updateBorrowDocIds = [];
		var saveCentitlementDocIds, saveCourtDocDocIds, saveCashierCheckDocIds, saveDebtsDocIds,
			saveClaimsDocDocIds, saveFileDocDocIds, saveOtherDocIds;
		var saveBorrowDocIds;
		
		moveDocsdatatable = $("#moveDocTable").dataTable();
		moveDocsDataTable = $("#moveDocTable").DataTable();
		
		$("input:checked",moveDocsdatatable.fnGetNodes()).each(function(){
			var data = "",
				saveData = "";
			var rowTr = $(this).closest('tr');
			
			// Get row data
		 	data = moveDocsDataTable.row(rowTr).data();
		 	
		 	if(data.docType === "A"){
		 		updateCentitlementDocIds.push(data.docId);
		 	}else if(data.docType === "B"){
		 		updateCourtDocDocIds.push(data.docId);
		 	}else if(data.docType === "C"){
		 		updateCashierCheckDocIds.push(data.docId);
		 	}else if(data.docType === "D"){
		 		updateDebtsDocIds.push(data.docId);
		 	}else if(data.docType === "E"){
		 		updateClaimsDocDocIds.push(data.docId);
		 	}else if(data.docType === "F"){
		 		updateFileDocDocIds.push(data.docId);
		 	}else if(data.docType === "G"){
		 		updateOtherDocIds.push(data.docId);
		 	}
		 	
		 	updateBorrowDocIds.push(data.borrowDocId);
		});
		
		saveCentitlementDocIds = JSON.stringify(updateCentitlementDocIds);
		saveCourtDocDocIds = JSON.stringify(updateCourtDocDocIds);
		saveCashierCheckDocIds = JSON.stringify(updateCashierCheckDocIds);
		saveDebtsDocIds = JSON.stringify(updateDebtsDocIds);
		saveClaimsDocDocIds = JSON.stringify(updateClaimsDocDocIds);
		saveFileDocDocIds = JSON.stringify(updateFileDocDocIds);
		saveOtherDocIds = JSON.stringify(updateOtherDocIds);
		saveBorrowDocIds = JSON.stringify(updateBorrowDocIds);
		
		$.ajax({
			url : "../pages/doc/borrow/docBorrowAction!saveMoveDocs.action",
			data : {
				"saveCentitlementDocIds" : saveCentitlementDocIds,
				"saveCourtDocDocIds" : saveCourtDocDocIds,
				"saveCashierCheckDocIds" : saveCashierCheckDocIds,
				"saveDebtsDocIds" : saveDebtsDocIds,
				"saveClaimsDocDocIds" : saveClaimsDocDocIds,
				"saveFileDocDocIds" : saveFileDocDocIds,
				"saveOtherDocIds" : saveOtherDocIds,
				"saveBorrowDocIds" : saveBorrowDocIds,
				"updateType" : updateType
			},
			type : "POST",
			dataType : 'json',
			success : function(response) {
				alert(response.msg);
				queryMoveDoc();
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
	
	// 匯出調卷Excel
	$("#btnprintMoveDoc").button().on("click",function(){
		printMoveDoc();
	});
	
	// 確定調出
	$("#btncheckMoveDoc").button().on("click", function(){
		updateMoveDoc(0);
	});
	
	// 取消借調
	$("#btncancelMoveDoc").button().on("click", function(){
		updateMoveDoc(1);
	});
	// ===== 功能列按鈕 end =====
	
});