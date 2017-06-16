/**
 * Add By Jia 2017-06-14 docdocSystem.js 實作docSystem.jsp 
 */
 

	
$(function() {
	
	// ===== function start =====
	
	// add by Jia 申請借調 function
	function secondedDoc(iptsearchdebtorName, iptsearchdebtorID, iptsearchcaseId, iptsearchdocNo, iptsearchLawCaseId) {
		var datatable = $("#queryCaseTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : '../pages/doc/documents/docAction!loadCaseInfo.action',
			data : {
				'iptsearchdebtorName' : iptsearchdebtorName,
				'iptsearchdebtorID' : iptsearchdebtorID,
				'iptsearchcaseId' : iptsearchcaseId,
				'iptsearchdocNo' : iptsearchdocNo,
				'iptsearchLawCaseId' : iptsearchLawCaseId
			},
			type : "POST",
			dataType : 'json',
			success : function(response) {
				json = response.data;
				datatable.fnClearTable();
				if (response.data != '') {
					datatable.fnAddData(json);
				}
				datatable.fnDraw();
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
	$("#btnsecondedDoc").button().on("click",function() {
//		secondedDoc();
		alert("已申請借調完成");
	});
	
	// ===== 功能列按鈕 end =====
	
});