/**
 * Add By Jia 2017-08-07 docmoveCheck.js 實作moveCheck.jsp 
 */
 
$(function() {
	
	// ===== function start =====
	
	// add by Jia 查詢調卷帶簽收文件 function
	function queryMoveCheckDoc(caseId, bankName, debtName, borrowReason, 
			ID, borrowStartDate, borrowEndDate, docCode, borrowUserName) {
		var docMoveCheckDocTable = "";
		docMoveCheckDocTable = $("#moveCheckDocTable").dataTable();
		
		    $.ajax({
				url : '../pages/doc/borrow/docBorrowAction!loadborrowDocs.action',
				data : {
					"type" : 1,
					"caseId" : caseId,
					"bankName" : bankName,
					"debtName" : debtName,
					"borrowReason" : borrowReason,
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
					docMoveCheckDocTable.fnClearTable();
					if (json.length !== 0) {
						docMoveCheckDocTable.fnAddData(json);
					}
					docMoveCheckDocTable.fnDraw();
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		
	}
	
	// add by Jia 匯出調卷待簽收excel function
	function printMoveCheckDoc() {
		var docsdatatable = "",docDataTable="",printMoveCheckDocInfoString;
		var printMoveCheckDocInfo = [];
		docsdatatable = $("#moveCheckDocTable").dataTable();
		docDataTable = $("#moveCheckDocTable").DataTable();
		
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
				borrowUserName : data.borrowUserName,
				borrowUserId : data.borrowUserId,
//				borrowDatetime : data.borrowDatetime,
//				progressDatetime : data.disProgressDatetime,
				borrowDatetime : null,
				progressDatetime : null,
				progressUserId : data.progressUserId,
				progressUserName : data.progressUserName
			}
			
			printMoveCheckDocInfo.push(printData);
			
		});
		
		printMoveCheckDocInfoString = JSON.stringify(printMoveCheckDocInfo);
		$.ajax({
				url : "../pages/doc/borrow/docBorrowAction!printMoveDocs.action",
				data : {
					"printMoveDocInfo" : printMoveCheckDocInfoString,
					"printType" : 1
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
	
	// add By Jia 2017-08-07 修改調卷的狀態
	// updateType = 2 表示確定簽收
	// updateType = 3 表示取消調卷
	function updateMoveCheckDoc(updateType){
		var moveCheckDocsdatatable, moveCheckDocsDataTable;
		var updateCentitlementDocIds = [], updateCourtDocDocIds = [], updateCashierCheckDocIds = [], 
			updateDebtsDocIds = [], updateClaimsDocDocIds = [], updateFileDocDocIds = [], updateOtherDocIds = [];
		var updateBorrowDocIds = [];
		var saveCentitlementDocIds, saveCourtDocDocIds, saveCashierCheckDocIds, saveDebtsDocIds,
			saveClaimsDocDocIds, saveFileDocDocIds, saveOtherDocIds;
		var saveBorrowDocIds;
		
		moveCheckDocsdatatable = $("#moveCheckDocTable").dataTable();
		moveCheckDocsDataTable = $("#moveCheckDocTable").DataTable();
		
		$("input:checked",moveCheckDocsdatatable.fnGetNodes()).each(function(){
			var data = "",
				saveData = "";
			var rowTr = $(this).closest('tr');
			
			// Get row data
		 	data = moveCheckDocsDataTable.row(rowTr).data();
		 	
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
				queryMoveCheckDoc();
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
	$("#btnqueryMoveCheckDoc").button().on("click",function() {
		var caseId = $("#iptsearchMoveCheckDocCaseId").val(),
			bankName = $("#cobsearchMoveCheckDocBankName").find('option:selected').val(),
			debtName = $("#iptsearchMoveCheckDocDebtName").val(),
			borrowReason = $("#cobMoveCheckDocBorrowReason").find("option:selected").val(),
			ID = $("#iptsearchMoveCheckDocID").val(),
			borrowStartDate = $("#iptsearchMoveCheckDocBorrowStartDate").val(),
			borrowEndDate = $("#iptsearchMoveCheckDocBorrowEndDate").val(),
			docCode = $("#iptsearchMoveCheckDocDocCode").val(),
			borrowUserName = $("#cobsearchMoveCheckDocBorrowUserName").val();
			
		queryMoveCheckDoc(caseId, bankName, debtName, borrowReason, 
			ID, borrowStartDate, borrowEndDate, docCode, borrowUserName);
	});
	
	// 匯出調卷Excel
	$("#btnprintMoveCheckDoc").button().on("click",function(){
		printMoveCheckDoc();
	});
	
	// 確定簽收
	$("#btncheckMoveCheckDoc").button().on("click", function(){
		updateMoveCheckDoc(2);
	});
	
	// 取消調卷
	$("#btncancelMoveCheckDoc").button().on("click", function(){
		updateMoveCheckDoc(3);
	});
	// ===== 功能列按鈕 end =====
	
});