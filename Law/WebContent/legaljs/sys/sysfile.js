/**
 * Add By Jia 2017-03-07 sysfile.js 實作file.jsp 主要用於新增、查詢
 */

// 宣告全域變數
var fileTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#fileTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, fileTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#fileTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

var formatDatetime;

$(function() {
	
	// 定義新增的視窗內容
	var dialog, 
			form, 
			iptaddfileName = $("#iptaddfileName"), 
			iptaddfileupload = $("#fileupload"),
			allFields = $([]).add(iptaddfileName), 
			tips = $(".validateTips");

	// ===== function start =====
	// 新增文件
	function addFile() {
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		valid = valid && checkLength(tips, iptaddfileName, "文件名稱", 3, 10);
		if (valid) {
			$.ajax({
				url : '../pages/sys/file/fileAction!addFile.action',
				data : {
					'iptaddfileName' : iptaddfileName.val(),
					'iptaddfileupload' : iptaddfileupload.val().split('/').pop().split('\\').pop(),
					'iptaddfileuploaddatetime' : formatDatetime
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
					searchFile();
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
	function searchFile(name) {
		var datatable = $("#fileTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : '../pages/sys/file/fileAction!findFile.action',
			data : {
				'iptsearchfileName' : name
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
	function deleteFile(){
		var datatable = $("#fileTable").dataTable();
		$.ajax({
			url : '../pages/sys/file/fileAction!deleteFile.action',
			data : {
				'deletefileId' : datatable.fnGetData('.selected').fileId,
				'deletefileName' : datatable.fnGetData('.selected').fileName,
				'deletefileDisplayName' : datatable.fnGetData('.selected').fileDisplayName,
				'deletefileType' : datatable.fnGetData('.selected').fileType,
				'deletefilePath' : datatable.fnGetData('.selected').filePath,
				'deletefilecreateDatetime' : datatable.fnGetData('.selected').createDatetime,
				'deletefilecreateUserId' : datatable.fnGetData('.selected').createUserId,
				'deletefilemodifyDatetime' : datatable.fnGetData('.selected').modifyDatetime,
				'deletefilemodifyUserId' : datatable.fnGetData('.selected').modifyUserId,
				'deletefileisDelete' : datatable.fnGetData('.selected').isDelete,
				'deletefileOwner' : datatable.fnGetData('.selected').fileOwner,
				'deletefileSigned' : datatable.fnGetData('.selected').fileSigned
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
				searchFile();
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
	// ===== function end =====

	// add by Jia ===== 定義新增時彈跳的視窗 start =====
	dialog = $("#file-dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 500,
		modal : true,
		buttons : {
			'新增' : addFile,
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
		addFile();
	});
	// add by Jia ===== 定義新增時彈跳的視窗 end =====

	// ===== 功能列按鈕 start =====
	// 新增欄位按鈕
	$("#btnaddfile").button().on("click", function() {
		dialog.dialog("open");
		refreshTipText(tips);
	});

	// 查詢按鈕
	$("#btnqueryfile").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchfileName = $("#iptsearchfileName").val();
		searchFile(iptsearchfileName);
	});
	
	// 刪除按鈕
	$("#btndeletefile").button().on("click",function() {
		deleteFile();
	});
	
	// ===== 功能列按鈕 end =====
});