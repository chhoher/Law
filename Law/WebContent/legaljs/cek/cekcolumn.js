/**
 * Add By Jia 2017-03-07 column.js 實作column.jsp 主要用於新增、查詢、設定欄位
 */

// 宣告全域變數
var columnTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#columnTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, columnTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#columnTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$(function() {
	
	// 定義新增的視窗內容
	var dialog, 
			form, 
			iptaddcolumnName = $("#iptaddcolumnName"), 
			iptaddcolumnSize = $("#iptaddcolumnSize"), 
			iptaddcolumnType = $("#iptaddcolumnType"), 
			allFields = $([]).add(iptaddcolumnName).add(iptaddcolumnSize).add(iptaddcolumnType), 
			tips = $(".validateTips");

	// ===== function start =====
	// 新增欄位
	function addColumn() {
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		valid = valid && checkLength(tips, iptaddcolumnName, "欄位名稱", 3, 10);
		valid = valid && checkLength(tips, iptaddcolumnType, "欄位類型", 0, 6);
		valid = valid && checkRegexp(tips, iptaddcolumnSize, /^\d+$/, "欄位大小必須為數字");
		if (valid) {
			$.ajax({
				url : 'pages/cek/column/columnAction!addColumn.action',
				data : {
					'iptaddcolumnName' : iptaddcolumnName.val(),
					'iptaddcolumnSize' : iptaddcolumnSize.val(),
					'iptaddcolumnType' : iptaddcolumnType.val()
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
					searchColumn();
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
	function searchColumn(name, type) {
		var datatable = $("#columnTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : 'pages/cek/column/columnAction!findColumn.action',
			data : {
				'iptsearchcolumnName' : name,
				'iptsearchcolumnType' : type
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
	function deleteColumn(){
		var datatable = $("#columnTable").dataTable();
		$.ajax({
			url : 'pages/cek/column/columnAction!deleteColumn.action',
			data : {
				'deletecolumnId' : datatable.fnGetData('.selected').columnId,
				'deletecolumnName' : datatable.fnGetData('.selected').columnName,
				'deletecolumnAlert' : datatable.fnGetData('.selected').columnAlert,
				'deletecolumnIsdefault' : datatable.fnGetData('.selected').columnIsdefault,
				'deletecolumnType' : datatable.fnGetData('.selected').columnType,
				'deletecolumnSize' : datatable.fnGetData('.selected').columnSize,
				'deletecolumnStatus' : datatable.fnGetData('.selected').columnStatus,
				'deletecolumnCreateUserId' : datatable.fnGetData('.selected').createUserId,
				'deletecolumnCreateDatetime' : datatable.fnGetData('.selected').createDatetime,
				'deletecolumnModifyUserId' : datatable.fnGetData('.selected').modifyUserId,
				'deletecolumnModifyDatetime' : datatable.fnGetData('.selected').modifyDatetime
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
				searchColumn();
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
	// ===== function end =====

	// add by Jia ===== 定義新增時彈跳的視窗 start =====
	dialog = $("#column-dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 350,
		modal : true,
		buttons : {
			'新增' : addColumn,
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
		addColumn();
	});
	// add by Jia ===== 定義新增時彈跳的視窗 end =====
	
	// ===== 功能列按鈕 start =====
	// 新增欄位按鈕
	$("#btnaddcolumn").button().on("click", function() {
		dialog.dialog("open");
		refreshTipText(tips);
	});

	// 查詢按鈕
	$("#btnquerycolumn").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchcolumnName = $("#iptsearchcolumnName").val(), 
		iptsearchcolumnType = $("#iptsearchcolumnType").val();
		searchColumn(iptsearchcolumnName, iptsearchcolumnType);
	});
	
	// 刪除按鈕
	$("#btndeletecolumn").button().on("click",function() {
		deleteColumn();
	});
	// ===== 功能列按鈕 end =====
	
});