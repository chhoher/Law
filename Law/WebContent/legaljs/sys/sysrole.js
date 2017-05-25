/**
 * Add By Jia 2017-03-07 sysfile.js 實作file.jsp 主要用於新增、查詢
 */

// 宣告全域變數
var roleTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#roleTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, roleTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#roleTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$(function() {
	
	// 定義新增的視窗內容
	var dialog,
			functiondialog, 
			form, 
			iptaddroleCode = $("#iptaddroleCode"), 
			iptaddroleName = $("#iptaddroleName"),
			allFields = $([]).add(iptaddroleCode).add(iptaddroleName), 
			tips = $(".validateTips");
	
	// ===== function start =====
	
	// 新增欄位
	function addRole() {
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		valid = valid && checkLength(tips, iptaddroleCode, "角色代號", 3, 10);
		valid = valid && checkLength(tips, iptaddroleName, "角色名稱", 0, 10);
		if (valid) {
			$.ajax({
				url : '../pages/sys/user/roleAction!addRole.action',
				data : {
					'iptaddroleCode' : iptaddroleCode.val(),
					'iptaddroleName' : iptaddroleName.val()
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
					searchRole();
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		}
		return valid;
	}
			
	// add by Jia search function
	function searchRole(code, name) {
		var datatable = $("#roleTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : '../pages/sys/user/roleAction!findRole.action',
			data : {
				'iptsearchroleCode' : code,
				'iptsearchroleName' : name
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

	// add by Jia ===== 定義新增時彈跳的視窗 start =====
	dialog = $("#role-dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 350,
		modal : true,
		buttons : {
			'新增' : addRole,
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
		addRole();
	});
	
	functiondialog = $("#functionRole-dialog-form").dialog({
		autoOpen : false,
		height : 500,
		width : 350,
		modal : true,
		button : {
			'新增' : addRole,
			'取消' : function() {
				functiondialog.dialog("close");
			}
		}
	});
	// add by Jia ===== 定義新增時彈跳的視窗 end =====
	
	// ===== 功能列按鈕 start =====
	
	// 新增欄位按鈕
	$("#btnaddrole").button().on("click", function() {
		dialog.dialog("open");
		refreshTipText(tips);
	});
	
	// 查詢按鈕
	$("#btnqueryrole").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchroleCode = $("#iptsearchroleCode").val(),
			iptsearchroleName = $("#iptsearchroleName").val();
		searchRole(iptsearchroleCode, iptsearchroleName);
	});
	
	//設定許可權
	$("#btnsetrolefunction").button().on("click", function() {
		functiondialog.dialog("open");
	});
	// ===== 功能列按鈕 end =====
});