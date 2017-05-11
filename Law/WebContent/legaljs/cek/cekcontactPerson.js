/**
 * Add By Jia 2017-03-07 column.js 實作column.jsp 主要用於新增、查詢、設定欄位
 */

// 宣告全域變數
var contactPersonTableselected = []; // 宣告選擇的列

//當點選grid的時候會反灰，再點擊一次後取消反灰
$('#contactPersonTable').on('click', 'tr', function() {
	
	var id = this.id;
	var index = $.inArray(id, contactPersonTableselected);
	if ( $(this).hasClass('selected') ) {
        $(this).removeClass('selected');
    }
    else {
    	$("#contactPersonTable").dataTable().$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
    }
});

$(function() {
	
	// 定義新增的視窗內容
	var dialog, 
			form, 
			iptsetcontactPerson = $("#iptsetcontactPerson"), 
			allFields = $([]).add(iptsetcontactPerson), 
			tips = $(".validateTips");

	// ===== function start =====
	// 新增窗口
	function addContactPerson() {
		var datatable = $("#contactPersonTable").dataTable();
		var valid = true;// 看輸入的格式對不對
		allFields.removeClass("ui-state-error");
		if (valid) {
			$.ajax({
				url : 'pages/cek/contactPerson/contactPersonAction!addContactPerson.action',
				data : {
					'iptsetcontactPersonMemnm' : iptsetcontactPerson.find('option:selected').text(),
					'iptsetcontactPersonMemno' : iptsetcontactPerson.find('option:selected').val(),
					'selectedbankName' : datatable.fnGetData('.selected').bankName
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
					searchcontactPerson();
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
	function searchcontactPerson(contactPersonNo, bankName) {
		var datatable = $("#contactPersonTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		$.ajax({
			url : 'pages/cek/contactPerson/contactPersonAction!findAllContactBank.action',
			data : {
				'iptsearchcontactPersonNo' : contactPersonNo,
				'iptsearchbankName' : bankName
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
	dialog = $("#contactPerson-dialog-form").dialog({
		autoOpen : false,
		height : 300,
		width : 350,
		modal : true,
		buttons : {
			'新增' : addContactPerson,
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
	// 設定窗口按鈕
	$("#btnsetcontactPerson").button().on("click", function() {
		
		$.ajax({
				url : 'pages/sys/userAction!findAllmemdb.action',
				type : "POST",
				dataType : 'json',
				success : function(response) {
					json = response.data;
					if(json != null){
						
						$("#iptsetcontactPerson option").remove();
						relaArray = response.data;
						var seloption = "";
						$.each(relaArray,function(i){
							seloption += '<option value="'+relaArray[i].memno+'">'+relaArray[i].memnm+'</option>'; 
						});
						$("#iptsetcontactPerson").append(seloption);
						
					}
				},
				error : function(xhr, ajaxOptions,thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		
		dialog.dialog("open");
		refreshTipText(tips);
	});

	// 查詢按鈕
	$("#btnquerycontactPerson").button().on("click",function() {
		// 定義查詢條件欄位
		var iptsearchcontactPersonNo = $("#iptsearchcontactPersonNo").val(), 
		iptsearchbankName = $("#iptsearchbankName").val();
		searchcontactPerson(iptsearchcontactPersonNo, iptsearchbankName);
	});
	
	// ===== 功能列按鈕 end =====
	
});