/**
 * Add By Jia 2017-03-07 sysfile.js 實作file.jsp 主要用於新增、查詢
 */

// 宣告全域變數
var functionTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#functionTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, functionTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#functionTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$(function() {
	
	// 定義新增的視窗內容
	var dialog,
			functionMenuDialog,
			form, 
			iptaddfunctionName = $("#iptaddfunctionName"), 
			iptaddfunctionUrl = $("#iptaddfunctionUrl"),
			allFields = $([]).add(iptaddfunctionName).add(iptaddfunctionUrl), 
			tips = $(".validateTips");
	
	// ===== function start =====
	
	// 新增功能鏈結
	function addFunction() {
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		valid = valid && checkLength(tips, iptaddfunctionName, "功能鏈結名稱", 1, 20);
		valid = valid && checkLength(tips, iptaddfunctionUrl, "功能鏈結URL", 1 , 200);// TODO By Jia 這裡要改為URL限制
		if (valid) {
			$.ajax({
				url : '../pages/sys/module/functionAction!addFunction.action',
				data : {
					'iptaddfunctionName' : iptaddfunctionName.val(),
					'iptaddfunctionUrl' : iptaddfunctionUrl.val()
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
					searchFunction();
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
	function searchFunction(name) {
		var datatable = $("#functionTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : '../pages/sys/function/functionAction!findFunction.action',
			data : {
				'iptsearchfunctionName' : name
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
	
	function addFunctionMenu(){
		
		if($("#iptaddfunctionMenuUpName").val() == ""){
					$("#iptaddfunctionMenuUpId").val("");
				}
		
		var datatable = $("#functionTable").dataTable();
		if(datatable.fnGetData('.selected') != null){
			$.ajax({
				url : '../pages/sys/menu/menuAction!addMenuPid.action',
				data : {
					'iptaddfunctionModuleId' : datatable.fnGetData('.selected').moduleId,
					'iptaddfunctionMenuUpId' : $("#iptaddfunctionMenuUpId").val()
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					if (response.success) {
						alert(response.msg);
						functionMenuDialog.dialog("close");
					} else {
						alert(response.msg);
						functionMenuDialog.dialog("close");
					}
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		}else{
			
		}
	}
	
	// ===== function end =====

	// add by Jia ===== 定義新增時彈跳的視窗 start =====
	dialog = $("#function-dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 450,
		modal : true,
		buttons : {
			'新增' : addFunction,
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
		addFunction();
	});
	
	functionMenuDialog = $("#functionmenu-dialog-form").dialog({
		autoOpen : false,
		height : 600,
		width :350,
		modal : true,
		buttons :{
			'確定' : addFunctionMenu,
			'取消' : function(){
				functionMenuDialog.dialog("close");
			}
		}
	});
	// add by Jia ===== 定義新增時彈跳的視窗 end =====
	
	// ===== 功能列按鈕 start =====
	
	// 新增欄位按鈕
	$("#btnaddfunction").button().on("click", function() {
		dialog.dialog("open");
		refreshTipText(tips);
	});
	
	// 查詢按鈕
	$("#btnqueryfunction").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchfunctionName = $("#iptsearchfunctionName").val();
		searchFunction(iptsearchfunctionName);
	});
	
	// 目錄設定
	$("#btnsetfunctionmenu").button().on("click",function(){
		var datatable = $("#functionTable").dataTable();
		if(datatable.fnGetData('.selected') != null){
		
			// 讀取全部的欄位，包含有選和沒選
			$.ajax({
				url : '../pages/sys/menu/menuAction!findMenu.action',
				data : {
					'selectedmoduleId' : datatable.fnGetData('.selected').moduleId
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					
					if(response.selectParent != null){
						$("#iptaddfunctionMenuUpName").val(response.selectParent.selectPName);
						$("#iptaddfunctionMenuUpId").val(response.selectParent.selectPId);
					}
					
					var menuJson = response.data;
					$('#functionMenuTree').on("changed.jstree", function (e, data) {
						if(data.selected.length) {
							//需實作點選打開子頁簽方式
							var menuId = data.instance.get_node(data.selected[0]).id;
							var menname = data.instance.get_node(data.selected[0]).text;
							$("#iptaddfunctionMenuUpName").val(menname);
							$("#iptaddfunctionMenuUpId").val(menuId);
						}
					});
					$('#functionMenuTree').jstree('destroy');
					var $menutreeview =$('#functionMenuTree');
					$('#functionMenuTree').jstree({
		                'core': {
		                    'data': menuJson,
		                    'state' : {
		                        'opened' : true
		                      }
		                }
		            }).on('loaded.jstree', function() {
		                $menutreeview.jstree('open_all');
		            });
			},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		functionMenuDialog.dialog("open");
		}else{
			alert("請選擇功能鏈結");
		}
	});
	
	$("#btnsetfunction").button().on("click",function(){
		
		
	});
	// ===== 功能列按鈕 end =====
});