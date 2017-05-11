/**
 * Add By Jia 2017-03-07 cekcheckform.js 實作form.jsp 主要用於新增、查詢、設定簽核的表單
 */

// 宣告全域變數
var cekformTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#cekformTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, cekformTableselected);
//	if (index === -1) {
//		cekformTableselected.push(id);
//	} else {
//		cekformTableselected.splice(index, 1);
//	}
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#cekformTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
	//$(this).toggleClass('selected');
//	console.log(cekformTableselected);
});

$(function() {
	
	// 定義新增的視窗內容
	var dialog, 
			form, 
			iptcheckformCode = $("#iptcheckformCode"), 
			iptcheckformType = $("#iptcheckformType"), 
			iptcheckformName = $("#iptcheckformName"), 
			allFields = $([]).add(iptcheckformCode).add(iptcheckformType).add(iptcheckformName), 
			tips = $(".validateTips");

	// ===== function start =====
	// 新增簽核表單
	function addCheckform() {
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		valid = valid && checkLength(tips, iptcheckformCode, "表單編號", 3, 10);
		valid = valid && checkLength(tips, iptcheckformType, "表單類型", 6, 10);
		valid = valid && checkLength(tips, iptcheckformName, "表單名稱", 5, 20);
		valid = valid	&& checkRegexp(tips, iptcheckformCode,/^[a-z]([0-9a-z_\s])+$/i, "表單編號必須為 a-z 0-9");
		if (valid) {
			$.ajax({
				url : 'pages/cek/checkformAction!addCekform.action',
				data : {
					'iptcheckformCode' : iptcheckformCode.val(),
					'iptcheckformType' : iptcheckformType.val(),
					'iptcheckformName' : iptcheckformName.val()
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
		return valid;
	}

	// add by Jia search function
	function searchCheckform(code, type, name) {
		var datatable = $("#cekformTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : 'pages/cek/checkformAction!findCekForm.action',
			data : {
				'iptsearchformCode' : code,
				'iptsearchformType' : type,
				'iptsearchformName' : name
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
		//console.log(datatable.fnGetData('.selected'));
		//console.log(datatable.fnGetPosition('.selected'));
		//console.log(oTable.fnGetData( datatable.fnGetPosition('.selected') ));
		//datatable.fnDeleteRow('.selected');
		$.ajax({
			url : 'pages/cek/checkformAction!deleteCekform.action',
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
	
	// 打開新增欄位的時候，讀取所有欄位以及目前該表單所選欄位
	function initialCheckformColumns(){
		var hasSelectedTable = false;
		var datatable = $("#cekformTable").dataTable();
		if(datatable.fnGetData('.selected') != null){
		
			// 讀取全部的欄位，包含有選和沒選
			$.ajax({
				url : 'pages/cek/checkformAction!findCheckformColumn.action',
				data : {
					'selectedformId' : datatable.fnGetData('.selected').checkformId
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					initialSelectedBox(response.leftdata,response.rightdata); //初始化selectedBox
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			hasSelectedTable = true;
		}else{
			hasSelectedTable = false;
		}
		return hasSelectedTable;
	}
	
	// 打開新增表單附件的時候，讀取所有附件以及目前該表單所選附件
	function initialCheckformFiles(){
		var hasSelectedTable = false;
		var datatable = $("#cekformTable").dataTable();
		if(datatable.fnGetData('.selected') != null){
		
			// 讀取全部的欄位，包含有選和沒選
			$.ajax({
				url : 'pages/cek/checkformAction!findCheckformFile.action',
				data : {
					'selectedformId' : datatable.fnGetData('.selected').checkformId
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					initialSelectedFileBox(response.leftdata,response.rightdata); //初始化selectedBox
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			hasSelectedTable = true;
		}else{
			hasSelectedTable = false;
		}
		return hasSelectedTable;
	}
	
	// 設定完欄位後儲存動作
	function addCheckformColumns(){
		var datatable = $("#cekformTable").dataTable();
		//讀取右邊全部選項
		var rightarr = [];
		$("#selectedBox-selectRight > option").each(function(){
		   rightarr.push(this.value);
		});
		var rightstr = rightarr.join(','); // 將值轉換到rightstr
		//格式 "column_id-checkform_column_id, column_id-checkform_column_id, column_id-checkform_column_id, column_id-undefined"
		
		//讀取左邊全部選項
		var leftarr = [];
		$("#selectedBox-selectLeft > option").each(function(){
		   leftarr.push(this.value);
		});
		var leftstr = leftarr.join(','); // 將值轉換到leftstr
		
		$.ajax({
				url : 'pages/cek/checkformAction!saveSelectedColumn.action',
				data : {
					'saveColumns' : rightstr,
					'saveCheckform' : datatable.fnGetData('.selected').checkformId,
					'removeColumns' : leftstr
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					if (response.success) {
						alert(response.msg);
						columndialog.dialog("close");
					} else {
						alert(response.msg);
						columndialog.dialog("close");
					}
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
	}
	
	// 設定完附件後儲存動作
	function addCheckformFiles(){
		var datatable = $("#cekformTable").dataTable();
		//讀取右邊全部選項
		var rightarr = [];
		$("#selectedBox-selectRight > option").each(function(){
		   rightarr.push(this.value);
		});
		var rightstr = rightarr.join(','); // 將值轉換到rightstr
		//格式 "column_id-checkform_column_id, column_id-checkform_column_id, column_id-checkform_column_id, column_id-undefined"
		
		//讀取左邊全部選項
		var leftarr = [];
		$("#selectedBox-selectLeft > option").each(function(){
		   leftarr.push(this.value);
		});
		var leftstr = leftarr.join(','); // 將值轉換到leftstr
		
		$.ajax({
				url : 'pages/cek/checkformAction!saveSelectedFile.action',
				data : {
					'saveFiles' : rightstr,
					'saveCheckform' : datatable.fnGetData('.selected').checkformId,
					'removeFiles' : leftstr
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					if (response.success) {
						alert(response.msg);
						columndialog.dialog("close");
					} else {
						alert(response.msg);
						columndialog.dialog("close");
					}
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
	}
	// ===== function end =====

	// add by Jia ===== 定義新增時彈跳的視窗 start =====
	dialog = $("#check-dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 350,
		modal : true,
		buttons : {
			'新增' : addCheckform,
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
		addCheckform();
	});
	// add by Jia ===== 定義新增時彈跳的視窗 end =====
	
	// add by Jia ===== 定義新增欄位時彈跳的視窗 start =====
	$("#divSelectedBox").load("commons/selectedBox.html"); 
	var columndialog = $("#divSelectedBox").dialog({
		autoOpen : false,
		height : 350,
		width : 470,
		modal : true,
		buttons : {
			'新增' : addCheckformColumns,
			'取消' : function() {
				columndialog.dialog("close");
			}
		},
		close : function() {
			form[0].reset();
			allFields.removeClass("ui-state-error");
		}
	});
	// add by Jia ===== 定義新增欄位時彈跳的視窗 end =====
	
	// add by Jia ===== 定義新增附件時彈跳的視窗 start =====
	$("#divSelectedBox").load("commons/selectedBox.html"); 
	var filesdialog = $("#divSelectedBox").dialog({
		autoOpen : false,
		height : 350,
		width : 470,
		modal : true,
		buttons : {
			'新增' : addCheckformFiles,
			'取消' : function() {
				filesdialog.dialog("close");
			}
		},
		close : function() {
			form[0].reset();
			allFields.removeClass("ui-state-error");
		}
	});
	// add by Jia ===== 定義新增附件時彈跳的視窗 end =====
	
	// ===== 功能列按鈕 start =====
	// 新增表單按鈕
	$("#btnaddCekcheckform").button().on("click", function() {
		dialog.dialog("open");
		refreshTipText(tips);
	});
	
	// 查詢按鈕
	$("#btnqueryCekcheckform").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchformCode = $("#iptsearchformCode").val(), 
				iptsearchformType = $("#iptsearchformType").val(), 
				iptsearchformName = $("#iptsearchformName").val();
		searchCheckform(iptsearchformCode, iptsearchformType,iptsearchformName);
	});
	
	// 刪除按鈕
	$("#btndeleteCekcheckform").button().on("click",function() {
		deleteCheckform();
	});

	// 新增欄位按鈕
	$("#btnaddCheckformColumns").button().on("click", function() {
		if(initialCheckformColumns()){
			columndialog.dialog("open");
		}else{
			alert('請選擇表單');
		}
	});
	
	//新增檔案按鈕
	$("#btnaddCheckformFiles").button().on("click", function(){
		if(initialCheckformFiles()){
			filesdialog.dialog("open");
		}else{
			alert('請選擇表單');
		}
	});
	// ===== 功能列按鈕 end =====
	
});