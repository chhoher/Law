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
	
	var dialog;
	dialog = $("#setrole-dialog-form").dialog({
		autoOpen : false,
		height : 570,
		width : 350,
		modal : true,
		buttons : {
			'新增' : setRoleFunction,
			'取消' : function() {
				dialog.dialog("close");
			}
		}
	});
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
	
	function setRoleFunction(){
		var saveselectRoleIds = [];
		var datatable = $("#setRoleTable").dataTable();
		$("input:checked", datatable.fnGetNodes()).each(function(){
			saveselectRoleIds.push($(this).val());
		});
		
		var userdatatable = $("#userTable").dataTable();
		
		$.ajax({
				url : 'sys/user/userAction!setUserRole.action',
				data : {
					'saveselectRoleIds' : saveselectRoleIds,
					'saveselectuserId' : userdatatable.fnGetData('.selected').memno
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
					searchUser();
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
	
	// 選擇角色按鈕
	$("#btnsetRole").button().on("click",function() {
		var datatable = $("#setRoleTable").dataTable();
		datatable.fnClearTable();
		var userdatatable = $("#userTable").dataTable();
		var json = "";
		$.ajax({
			url : 'sys/user/userAction!selectedUserRole.action',
			data : {
				'selecteduserId' : userdatatable.fnGetData('.selected').memno
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
		
		dialog.dialog("open");
	});
	// ===== 功能列按鈕 end =====
});