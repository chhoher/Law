/**
 * Add By Jia 2017-03-07 sysfile.js 實作file.jsp 主要用於新增、查詢
 */

// 宣告全域變數
var userTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#userTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, userTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#userTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$(function() {
	
	// ===== function start =====
	
	// add by Jia search function
	function searchUser(name) {
		var datatable = $("#userTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : '../pages/sys/user/userAction!findAllmemdb.action',
			data : {
				'iptsearchuserName' : name
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
	$("#btnqueryuser").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchuserName = $("#iptsearchuserName").val();
		searchUser(iptsearchuserName);
	});
	
	// ===== 功能列按鈕 end =====
});