/**
 * Add By Jia 2017-03-07 recordcekcheckform.js 實作checkform.jsp 主要用於新增、查詢、刪除申請表單
 */

// 宣告全域變數
var recordcekformTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#recordcheckformCloseTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, recordcekformTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#recordcheckformCloseTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$(function() {
	
	// ===== function start =====

	// add by Jia search function
	function searchRecordCheckform(startdate, enddate, applyUserId, status) {
		var datatable = $("#recordcheckformCloseTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : '../pages/cek/recordcheckform/recordcheckformAction!findRecordCheckform.action',
			data : {
				'iptsearchrecordcheckformCreateDateS' : startdate,
				'iptsearchrecordcheckformCreateDateE' : enddate,
				'iptsearchrecordcheckformApplyUserId' : applyUserId,
				'iptsearchrecordcheckStatus' : status
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
	
	// 查詢按鈕
	$("#btnqueryrecordcheckformClose").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchrecordcheckformCreateDateS = $("#iptsearchrecordcheckformCloseCreateDateS").val(), 
				iptsearchrecordcheckformCreateDateE = $("#iptsearchrecordcheckformCloseCreateDateE").val(), 
				iptsearchrecordcheckformApplyUserId = $("#iptsearchrecordcheckformCloseApplyUserId").val(), 
				iptsearchrecordcheckStatus = $("#iptsearchrecordcheckStatusClose").val();
		searchRecordCheckform(iptsearchrecordcheckformCreateDateS, iptsearchrecordcheckformCreateDateE, 
						iptsearchrecordcheckformApplyUserId,iptsearchrecordcheckStatus);
	});
	
	// 查看表單
	$("#btnopenrecordcheckformClose").button().on("click",function(){
		var datatable = $("#recordcheckformCloseTable").dataTable();
		var useruserID = "";
		$.ajax({
			url : '../pages/sys/login/loginAction!loginUserInfo.action',
			type : "POST",
			dataType : 'json',
			success : function(response){
				useruserID = response.data.userID;
				var signedType = 4;
				if(response.data.memadm == "Y" && datatable.fnGetData('.selected').status == 2){
					window.open('../pages/cek/signedform.jsp?caseId=' + datatable.fnGetData('.selected').caseId + '' +
							'&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + datatable.fnGetData('.selected').status);
				}else if(response.data.memadm == "N" && datatable.fnGetData('.selected').status == 2){
					window.open('../pages/cek/signedform.jsp?caseId=' + datatable.fnGetData('.selected').caseId + '' +
						'&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + 5);
				}else if(datatable.fnGetData('.selected').status == 4){
					if(datatable.fnGetData('.selected').receivedUserId == response.data.memno){
						window.open('../pages/cek/signedform.jsp?caseId=' + datatable.fnGetData('.selected').caseId + '' +
								'&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + datatable.fnGetData('.selected').status);
					}else{
						window.open('../pages/cek/signedform.jsp?caseId=' + datatable.fnGetData('.selected').caseId + '' +
								'&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + 5);
					}
				}else{
					window.open('../pages/cek/signedform.jsp?caseId=' + datatable.fnGetData('.selected').caseId + '' +
							'&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + datatable.fnGetData('.selected').status);
				}
			},
			error : function(xhr, ajaxOptions, thrownError){
				alert(xhr.status);
				alert(thrownError);
			}
		});
		
	});
	// ===== 功能列按鈕 end =====
	
});