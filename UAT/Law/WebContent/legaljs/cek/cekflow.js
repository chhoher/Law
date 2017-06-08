/**
 * Add By Jia 2017-03-27 cekflow.js 實作flow.jsp 主要用於新增、查詢、設定流程、及子流程設定
 */

// 宣告全域變數
var flowTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#flowTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, flowTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#flowTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$(function() {
	
	// 定義新增的視窗內容
	var dialog,
			flowsubdialog,
			addflowsubdialog,
			form, 
			iptaddflowCode = $("#iptaddflowCode"), 
			iptaddflowType = $("#iptaddflowType"), 
			iptaddflowName = $("#iptaddflowName"), 
			allFields = $([]).add(iptaddflowCode).add(iptaddflowType).add(iptaddflowName), 
			tips = $(".validateTips");

	// ===== function start =====
	// 新增主要流程
	function addFlow() {
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		valid = valid && checkLength(tips, iptaddflowCode, "流程編號", 3, 10);
		valid = valid && checkLength(tips, iptaddflowType, "流程類型", 3, 20);
		valid = valid && checkLength(tips, iptaddflowName, "流程名稱", 5, 20);
		if (valid) {
			$.ajax({
				url : '../pages/cek/flow/flowAction!addFlow.action',
				data : {
					'iptaddflowCode' : iptaddflowCode.val(),
					'iptaddflowType' : iptaddflowType.val(),
					'iptaddflowName' : iptaddflowName.val()
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
					searchFlow();
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
	function searchFlow(code, type, name) {
		var datatable = $("#flowTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : '../pages/cek/flow/flowAction!findFlow.action',
			data : {
				'iptsearchflowCode' : code,
				'iptsearchflowType' : type,
				'iptsearchflowName' : name
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
	function deleteFlow(){
		var datatable = $("#flowTable").dataTable();
		$.ajax({
			url : '../pages/cek/flow/flowAction!deleteFlow.action',
			data : {
				'deleteflowId' : datatable.fnGetData('.selected').flowId,
				'deleteflowCode' : datatable.fnGetData('.selected').flowCode,
				'deleteflowName' : datatable.fnGetData('.selected').flowName,
				'deleteflowType' : datatable.fnGetData('.selected').flowType,
				'deleteisDelete' : datatable.fnGetData('.selected').isDelete,
				'deleteavaliable' : datatable.fnGetData('.selected').avaliable,
				'deletecreateDatetime' : datatable.fnGetData('.selected').createDatetime,
				'deletecreateUserId' : datatable.fnGetData('.selected').createUserId,
				'deletemodifyDatetime' : datatable.fnGetData('.selected').modifyDatetime,
				'deletemodifyUserId' : datatable.fnGetData('.selected').modifyUserId
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
				searchFlow();
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
	
	// add by Jia search function
	function searchFlowsub() {
		var datatable = $("#flowTable").dataTable();
		var json = "";
		$.ajax({
			url : '../pages/cek/flow/flowAction!findFlowSub.action',
			data : {
				'selectedflowId' : datatable.fnGetData('.selected').flowId
			},
			type : "POST",
			dataType : 'json',
			success : function(response) {
				json = response.data;
				datatableFlowsub.fnClearTable();
				if (response.data != '') {
					datatableFlowsub.fnAddData(json);
				}
				datatableFlowsub.fnDraw();
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
	
	// add by Jia 新增流程
	function selectedCombobox(){
		
		alert($("#cobflowType").find('option:selected').text());
	}
	// ===== function end =====

	// add by Jia ===== 定義新增時彈跳的視窗 start =====
	dialog = $("#flow-dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 350,
		modal : true,
		buttons : {
			'新增' : addFlow,
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
		addFlow();
	});
	// add by Jia ===== 定義新增時彈跳的視窗 end =====
	
	// ===== 定義子流程的彈跳視窗 start
	var subFlowopt={
    		"sDom": '<"top">rt<"bottom"><"clear">',
    		"bJQueryUI":true,	
    		"bSort": false,
    		"columns": [
                { "data": "flowsubLevel" },
                { "data": "flowsubName" },
                { "data": "flowsubStyle" }
            ]
	};
    var datatableFlowsub = $("#flowsubTable").dataTable(subFlowopt);
    $("#setflowsub").hide();// 先把子流程需彈跳的視窗隱藏起來
	// ===== 定義子流程的彈跳視窗 end
	
	// ===== 定義新增子流程的彈跳視窗 start
	addflowsubdialog = $("#addflowsub-dialog-form").dialog({
		autoOpen : false,
		height : 400,
		width : 500,
		modal : true,
		title : '流程設定',
		buttons : {
			'新增' : selectedCombobox,
			'取消' : function() {
				addflowsubdialog.dialog("close");
			}
		},
		close : function() {
			form[0].reset();
			allFields.removeClass("ui-state-error");
		}
	});
	// ===== 定義新增子流程的彈跳視窗 end
	
	// ===== 功能列按鈕 start =====
	// 新增流程按鈕
	$("#btnaddflow").button().on("click", function() {
		dialog.dialog("open");
		refreshTipText(tips);
	});

	// 查詢按鈕
	$("#btnqueryflow").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchflowCode = $("#iptsearchflowCode").val(), 
				iptsearchflowType = $("#iptsearchflowType").val(), 
				iptsearchflowName = $("#iptsearchflowName").val();
		searchFlow(iptsearchflowCode, iptsearchflowType, iptsearchflowName);
	});
	
	// 刪除按鈕
	$("#btndeleteflow").button().on("click",function() {
		deleteFlow();
	});
	
	// 設定子流程按鈕
	$("#btnsetSubflow").button().on("click",function(){
		flowsubdialog = $("#setflowsub").dialog({
			autoOpen : true,
			height : 400,
			width : 500,
			modal : true,
			title : '流程設定',
			buttons : {
				'新增' : addFlow,
				'取消' : function() {
					flowsubdialog.dialog("close");
				}
			},
			close : function() {
				form[0].reset();
				allFields.removeClass("ui-state-error");
			}
		});
		searchFlowsub();
		flowsubdialog.dialog("open");
	});
	
	// 子流程內的新增按鈕
	$('#btnaddflowsub').button().on("click",function(){
		addflowsubdialog.dialog("open");
	});
	// ===== 功能列按鈕 end =====
	
});