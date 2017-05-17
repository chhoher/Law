/**
 * Add By Jia 2017-03-07 recordcekcheckform.js 實作checkform.jsp 主要用於新增、查詢、刪除申請表單
 */

// 宣告全域變數
var recordcekformTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#recordcheckformTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, recordcekformTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#recordcheckformTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$(function() {
	
	// 定義新增的視窗內容
	var dialog, 
			form, 
			iptsignedCaseNo = $("#iptsignedCaseNo"), 
			allFields = $([]).add(iptsignedCaseNo), 
			tips = $(".validateTips");

	// ===== function start =====
	// 新增簽核表單
	function addRecCheckform() {
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		valid = valid && checkLength(tips, iptsignedCaseNo, "表單編號", 3, 10);
		valid = valid	&& checkRegexp(tips, iptsignedCaseNo,/^([0-9a-z_\s])+$/i, "表單編號必須為 a-z 0-9");
		if (valid) {
			var useruserID = "";
			$.ajax({
				url : '../pages/sys/login/loginAction!loginUserInfo.action',
				type : "POST",
				dataType : 'json',
				success : function(response){
					useruserID = response.data.userID;
					window.open('../pages/cek/signedform.jsp?caseId=' + iptsignedCaseNo.val() + '' +
							'&userId=' + useruserID + '&type=1');
				},
				error : function(xhr, ajaxOptions, thrownError){
					alert(xhr.status);
					alert(thrownError);
				}
			});
		}
		return valid;
	}

	// add by Jia search function
	function searchRecordCheckform(startdate, enddate, applyUserId, status) {
		var datatable = $("#recordcheckformTable").dataTable();
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
	
	// add by Jia delete function
	function deleteCheckform(){
		var datatable = $("#cekformTable").dataTable();
		$.ajax({
			url : '../pages/cek/checkformAction!deleteCekform.action',
			data : {
				'deleteformId' : datatable.fnGetData('.selected').checkformId,
				'deleteformCode' : datatable.fnGetData('.selected').checkformCode,
				'deleteformType' : datatable.fnGetData('.selected').checkformType,
				'deleteformName' : datatable.fnGetData('.selected').checkformName,
				'deleteformCreatedatetime' : datatable.fnGetData('.selected').createDatatime,
				'deleteformCreateuserId' : datatable.fnGetData('.selected').createUserId,
				'deleteformFlowId' : datatable.fnGetData('.selected').flowId,
				'deleteformModifydatetime' : datatable.fnGetData('.selected').modifyDatetime,
				'deleteformModifyuserId' : datatable.fnGetData('.selected').modifyUserId,
				'deleteformstatus' : datatable.fnGetData('.selected').status
			},
			type : "POST",
			dataType : 'json',
			success : function(response) {
				if (response.success) {
					alert(response.msg);
					dialog.dialog("close");
				} else {
					alert(response.msg);
					dialog.dialog("close");
				}
				searchCheckform();
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
	
	// ===== function end =====

	// add by Jia ===== 定義新增時彈跳的視窗 start =====
	dialog = $("#recordcheckform-dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 350,
		modal : true,
		buttons : {
			'新增' : addRecCheckform,
			'取消' : function() {
				dialog.dialog("close");
			}
		},
		close : function() {
			form[0].reset();
			allFields.removeClass("ui-state-error");
		}
	});

	// 按下Enter的動作
	form = dialog.find("form").on("submit", function(event) {
		event.preventDefault();
		addRecCheckform();
	});
	// add by Jia ===== 定義新增時彈跳的視窗 end =====
	
	// ===== 功能列按鈕 start =====
	// 新增表單按鈕
	$("#btnaddrecordcheckform").button().on("click", function() {
		dialog.dialog("open");
		refreshTipText(tips);
	});
	
	// 查詢按鈕
	$("#btnqueryrecordcheckform").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchrecordcheckformCreateDateS = $("#iptsearchrecordcheckformCreateDateS").val(), 
				iptsearchrecordcheckformCreateDateE = $("#iptsearchrecordcheckformCreateDateE").val(), 
				iptsearchrecordcheckformApplyUserId = $("#iptsearchrecordcheckformApplyUserId").val(), 
				iptsearchrecordcheckStatus = $("#iptsearchrecordcheckStatus").val();
		searchRecordCheckform(iptsearchrecordcheckformCreateDateS, iptsearchrecordcheckformCreateDateE, 
						iptsearchrecordcheckformApplyUserId,iptsearchrecordcheckStatus);
	});
	
	// 刪除按鈕
	$("#btndeleterecordcheckform").button().on("click",function() {
		deleteCheckform();
	});

	// 查看表單
	$("#btnopenrecordcheckform").button().on("click",function(){
		var datatable = $("#recordcheckformTable").dataTable();
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
							'&userId=' + useruserID + '&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + datatable.fnGetData('.selected').status);
				}else if(response.data.memadm == "N" && datatable.fnGetData('.selected').status == 2){
					window.open('../pages/cek/signedform.jsp?caseId=' + datatable.fnGetData('.selected').caseId + '' +
						'&userId=' + useruserID + '&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + 5);
				}else if(datatable.fnGetData('.selected').status == 4){
					if(datatable.fnGetData('.selected').receivedUserId == response.data.memno){
						window.open('../pages/cek/signedform.jsp?caseId=' + datatable.fnGetData('.selected').caseId + '' +
								'&userId=' + useruserID + '&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + datatable.fnGetData('.selected').status);
					}else{
						window.open('../pages/cek/signedform.jsp?caseId=' + datatable.fnGetData('.selected').caseId + '' +
								'&userId=' + useruserID + '&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + 5);
					}
				}else{
					window.open('../pages/cek/signedform.jsp?caseId=' + datatable.fnGetData('.selected').caseId + '' +
							'&userId=' + useruserID + '&signedId=' + datatable.fnGetData('.selected').signedId + '&type=' + datatable.fnGetData('.selected').status);
				}
			},
			error : function(xhr, ajaxOptions, thrownError){
				alert(xhr.status);
				alert(thrownError);
			}
		});
		
//		document.location.href="pages/cek/signedform.jsp";
	});
	// ===== 功能列按鈕 end =====
	
});