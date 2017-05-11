/**
 * Add By Jia 2017-03-07 cekvariable.js 實作variable.jsp 主要用於新增、查詢、設定資料(大類小類)
 */

// 宣告全域變數
var variableTableselected = []; // 宣告選擇的列
var variablesubTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#variableTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, variableTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#variableTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$('#variablesubTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, variablesubTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#variablesubTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$(function() {
	
	// 定義新增的視窗內容
	var dialog, 
			variablesubdialog,
			addvariablesubdialog,
			form, 
			iptaddvariableName = $("#iptaddvariableName"), 
			iptaddvariablesubName = $("#iptaddvariablesubName"),
			allFields = $([]).add(iptaddvariableName), 
			tips = $(".validateTips"),
			selectedVariableId;

	// ===== function start =====
	// 新增資料類型
	function addVariable() {
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		valid = valid && checkLength(tips, iptaddvariableName, "資料名稱", 3, 20);
		if (valid) {
			$.ajax({
				url : 'pages/sys/variable/variableAction!addVariable.action',
				data : {
					'iptaddvariableName' : iptaddvariableName.val()
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
					searchVariable();
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
	function searchVariable(name) {
		var datatable = $("#variableTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : 'pages/sys/variable/variableAction!findVariable.action',
			data : {
				'iptsearchvariableName' : name
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
	function deleteVariable(){
		var datatable = $("#variableTable").dataTable();
		$.ajax({
			url : 'pages/sys/variable/variableAction!deleteVariable.action',
			data : {
				'deletevariableId' : datatable.fnGetData('.selected').variableId,
				'deletevariableType' : datatable.fnGetData('.selected').variableType,
				'deletevariableName' : datatable.fnGetData('.selected').variableName,
				'deletevariablecreateDatetime' : datatable.fnGetData('.selected').createDatetime,
				'deletevariablecreateUserId' : datatable.fnGetData('.selected').createUserId,
				'deletevariablemodifyDatetime' : datatable.fnGetData('.selected').modifyDatetime,
				'deletevariablemodifyUserId' : datatable.fnGetData('.selected').modifyUserId,
				'deletevariableisDelete' : datatable.fnGetData('.selected').isDelete
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
				searchVariable();
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
	
	// add by Jia search function
	function searchVariablesub() {
		var datatable = $("#variableTable").dataTable();
		selectedVariableId = datatable.fnGetData('.selected').variableId;
		var json = "";
		$.ajax({
			url : 'pages/sys/variable/variableAction!findVariableSub.action',
			data : {
				'selectedvariableId' : selectedVariableId
			},
			type : "POST",
			dataType : 'json',
			success : function(response) {
				json = response.data;
				datatableVariablesub.fnClearTable();
				if (response.data != '') {
					datatableVariablesub.fnAddData(json);
				}
				datatableVariablesub.fnDraw();
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
	
	function addVariablesub() {
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		valid = valid && checkLength(tips, iptaddvariablesubName, "資料名稱", 3, 20);
		if (valid) {
			$.ajax({
				url : 'pages/sys/variable/variableAction!addVariableSub.action',
				data : {
					'selectedvariableId' : selectedVariableId,
					'iptaddvariablesubName' : iptaddvariablesubName.val()
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
					searchVariablesub();
					addvariablesubdialog.dialog("close");
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		}
		return valid;
	}
	
	// add by Jia delete function(小類)
	function deleteVariablesub(){
		var datatable = $("#variablesubTable").dataTable();
		$.ajax({
			url : 'pages/sys/variable/variableAction!deleteVariable.action',
			data : {
				'deletevariableId' : datatable.fnGetData('.selected').variableId,
				'deletevariableType' : datatable.fnGetData('.selected').variableType,
				'deletevariableName' : datatable.fnGetData('.selected').variableName,
				'deletevariablecreateDatetime' : datatable.fnGetData('.selected').createDatetime,
				'deletevariablecreateUserId' : datatable.fnGetData('.selected').createUserId,
				'deletevariablemodifyDatetime' : datatable.fnGetData('.selected').modifyDatetime,
				'deletevariablemodifyUserId' : datatable.fnGetData('.selected').modifyUserId,
				'deletevariableisDelete' : datatable.fnGetData('.selected').isDelete
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
				searchVariablesub();
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
	// ===== function end =====

	// add by Jia ===== 定義新增時彈跳的視窗 start =====
	dialog = $("#variable-dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 350,
		modal : true,
		buttons : {
			'新增' : addVariable,
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
		addVariable();
	});
	// add by Jia ===== 定義新增時彈跳的視窗 end =====
	
	// ===== 定義資料字典(小類)的彈跳視窗 start
	var subVariableopt={
    		"sDom": '<"top">rt<"bottom"><"clear">',
    		"bJQueryUI":true,	
    		"bSort": false,
    		"columns": [
                { "data": "variableName" }
            ]
	};
    var datatableVariablesub = $("#variablesubTable").dataTable(subVariableopt);
    $("#setvariablesub").hide();// 先把子流程需彈跳的視窗隱藏起來
	// ===== 定義資料字典(小類)的彈跳視窗 end
    
    // ===== 定義新增資料字典(小類)的彈跳視窗 start
	addvariablesubdialog = $("#addvariablesub-dialog-form").dialog({
		autoOpen : false,
		height : 400,
		width : 500,
		modal : true,
		title : '新增資料字典',
		buttons : {
			'新增' : addVariablesub,
			'取消' : function() {
				addvariablesubdialog.dialog("close");
			}
		},
		close : function() {
			form[0].reset();
			allFields.removeClass("ui-state-error");
		}
	});
	// ===== 定義新增資料字典(小類)的彈跳視窗 end
	
	
	// ===== 功能列按鈕 start =====
	// 新增欄位按鈕
	$("#btnaddvariable").button().on("click", function() {
		dialog.dialog("open");
		refreshTipText(tips);
	});

	// 查詢按鈕
	$("#btnqueryvariable").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchvariableName = $("#iptsearchvariableName").val();
		searchVariable(iptsearchvariableName);
	});
	
	// 刪除按鈕
	$("#btndeletevariable").button().on("click",function() {
		deleteVariable();
	});
	
	// 設定資料字典(小類)按鈕
	$("#btnsetvariablesub").button().on("click",function(){
		variablesubdialog = $("#setvariablesub").dialog({
			autoOpen : true,
			height : 400,
			width : 500,
			modal : true,
			title : '資料字典(小類)設定',
			buttons : {
				'取消' : function() {
					variablesubdialog.dialog("close");
				}
			},
			close : function() {
				form[0].reset();
				allFields.removeClass("ui-state-error");
			}
		});
		searchVariablesub();
		variablesubdialog.dialog("open");
	});
	
	// 新增資料名稱(小類)按鈕
	$("#btnaddvariablesub").button().on("click",function() {
		addvariablesubdialog.dialog("open");
		refreshTipText(tips);
	});
	
	// 新增資料名稱(小類)按鈕
	$("#btndeletevariablesub").button().on("click",function() {
		deleteVariablesub();
	});
	// ===== 功能列按鈕 end =====
});