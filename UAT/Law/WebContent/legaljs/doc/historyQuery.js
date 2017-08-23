/**
 * Add By Jia 2017-05-11 docqueryCase.js 實作queryCase.jsp 
 */


$(function() {
	
	// ===== function start =====

	


	// search history
	function searchHistory(hqsearchdebtorName, hqsearchdebtorID, hqsearchcaseId, s_docno, 
			hqsearchreceivebegd, hqsearchreceiveendd, hqsearchapplybegd, hqsearchapplyendd, hqsearchprocbegd,
			hqsearchapplyendd, hqsearchprocbegd, hqsearchprocendd, hqsearchasignbegd, hqsearchasignendd,
			s_applyrsn,	s_apptcom, s_prodtype, s_docstatus, s_docitem, s_doctype, s_asignname) 
	{
		
		var datatable = $("#queryCaseTable").dataTable();
		datatable.fnClearTable();
		var json = "";
		
		$.ajax({			
			url : '../pages/historyquery/historyquery/HistoryQueryAction!searchHistory.action',
			data : {
				'hqsearchdebtorName'  : hqsearchdebtorName,    //姓名
				'hqsearchdebtorID'    : hqsearchdebtorID,      //ID
				'hqsearchcaseId'      : hqsearchcaseId,        //案號
				'hqsearchdocNo'       : s_docno,        //文件編號
				'hqsearchreceivebegd' : hqsearchreceivebegd,   //收文日期
				'hqsearchreceiveendd' : hqsearchreceiveendd,
				'hqsearchapplybegd'   : hqsearchapplybegd,     //申調日期
				'hqsearchapplyendd'   : hqsearchapplyendd, 
				'hqsearchprocbegd'    : hqsearchprocbegd,      //處理日期
				'hqsearchprocendd'    : hqsearchprocendd,
				'hqsearchasignbegd'   : hqsearchasignbegd,     //簽收日期
				'hqsearchasignendd'   : hqsearchasignendd,
				//-----------select value
				's_applyrsn'   : s_applyrsn,       //申調原因
				's_apptcom'    : s_apptcom,        //委託公司
				's_prodtype'   : s_prodtype,       //產品別
				's_docstatus'  : s_docstatus,         //狀態
				's_docitem'    : s_docitem,        //文件項目
				's_doctype'    : s_doctype,        //文件類別
				's_asignname'  : s_asignname,     //簽收人 
				
			},
			type : 'POST',
			dataType : 'json',
			success : function(response) {

			    json = response.List; 
			    //acion.java回傳response的data/process結果為SUCCESS，若沒傳SUCCESS會不走來這段
			    
			    
			    datatable.fnClearTable();
			 	if (response.List != '') {
					datatable.fnAddData(json);
				  	
				}
			 	datatable.fnDraw();			    
			

			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("error!!!");
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}

	// exportrch history
	function exportHistory(hqsearchdebtorName, hqsearchdebtorID, hqsearchcaseId, s_docno, 
			hqsearchreceivebegd, hqsearchreceiveendd, hqsearchapplybegd, hqsearchapplyendd, hqsearchprocbegd,
			hqsearchapplyendd, hqsearchprocbegd, hqsearchprocendd, hqsearchasignbegd, hqsearchasignendd,
			s_applyrsn,	s_apptcom, s_prodtype, s_docstatus, s_docitem, s_doctype, s_asignname) 
	{
		
		
		
		$.ajax({			
			url : '../pages/historyquery/historyquery/HistoryQueryAction!exportHistory.action',
			data : {
				'hqsearchdebtorName'  : hqsearchdebtorName,    //姓名
				'hqsearchdebtorID'    : hqsearchdebtorID,      //ID
				'hqsearchcaseId'      : hqsearchcaseId,        //案號
				'hqsearchdocNo'       : s_docno,        //文件編號
				'hqsearchreceivebegd' : hqsearchreceivebegd,   //收文日期
				'hqsearchreceiveendd' : hqsearchreceiveendd,
				'hqsearchapplybegd'   : hqsearchapplybegd,     //申調日期
				'hqsearchapplyendd'   : hqsearchapplyendd, 
				'hqsearchprocbegd'    : hqsearchprocbegd,      //處理日期
				'hqsearchprocendd'    : hqsearchprocendd,
				'hqsearchasignbegd'   : hqsearchasignbegd,     //簽收日期
				'hqsearchasignendd'   : hqsearchasignendd,
				//-----------select value
				//'s_docno'      : hqsearchdocNo,
				's_applyrsn'   : s_applyrsn,       //申調原因
				's_apptcom'    : s_apptcom,        //委託公司
				's_prodtype'   : s_prodtype,       //產品別
				's_docstatus'  : s_docstatus,         //狀態
				's_docitem'    : s_docitem,        //文件項目
				's_doctype'    : s_doctype,        //文件類別
				's_asignname'  : s_asignname,     //簽收人 
				
			},
			type : 'POST',
			dataType : 'json',
			success : function(response) {
				
						    
			    //acion.java回傳response的data/process結果為SUCCESS，若沒傳SUCCESS會不走來這段
				
			    if (response.downloadPath == "none"){
			    	alert("查無資料");
			    }else{
			    	window.location.href = response.downloadPath;
			    }
			    
//				window.open(response.downloadPath);
			 			
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("error!!!");
				alert(xhr.status);
				alert(thrownError);
			}
		});
		
		
	}
	
	
	
	
	
	
	
	// ===== function end =====
	// ===== 日曆表設置 start =====
	//收文日期
	$('#hqsearchreceivebegd').datepicker({
		  dateFormat: 'yy-mm-dd'
	});
	$('#hqsearchreceiveendd').datepicker({
		  dateFormat: 'yy-mm-dd'
	});			
	//申調日期
	$('#hqsearchapplybegd').datepicker({
	    dateFormat: 'yy-mm-dd'
	});
	$('#hqsearchapplyendd').datepicker({
	    dateFormat: 'yy-mm-dd'
	});	
	//處理日期
	$('#hqsearchprocbegd').datepicker({
        dateFormat: 'yy-mm-dd'
	});
	$('#hqsearchprocendd').datepicker({
        dateFormat: 'yy-mm-dd'
	});
	//簽收日期
	$('#hqsearchasignbegd').datepicker({
        dateFormat: 'yy-mm-dd'
	});
	$('#hqsearchasignendd').datepicker({
        dateFormat: 'yy-mm-dd'
	});


	
	// ===== 功能列按鈕 start =====
		

	// 查詢按鈕顯示於TABLE
	$("#hqsearch").button().on("click",function() {
		var hqsearchdebtorName = $("#hqsearchdebtorName").val(), //姓名
	    hqsearchdebtorID = $("#hqsearchdebtorID").val(),         //ID
		hqsearchcaseId = $("#hqsearchcaseId").val(),             //案號
		             
		hqsearchreceivebegd = $("#hqsearchreceivebegd").val(),  //收文日期
		hqsearchreceiveendd = $("#hqsearchreceiveendd").val(),
		hqsearchapplybegd = $("#hqsearchapplybegd").val(),     //申調日期
		hqsearchapplyendd = $("#hqsearchapplyendd").val(), 
		hqsearchprocbegd = $("#hqsearchprocbegd").val(),       //處理日期
		hqsearchprocendd = $("#hqsearchprocendd").val(),
		hqsearchasignbegd = $("#hqsearchasignbegd").val(),     //簽收日期
		hqsearchasignendd = $("#hqsearchasignendd").val();
		//-----------select value
		var s_applyrsn = $("option:selected",'select[name="applyrsn"]').text();       //申調原因
		var s_apptcom = $("option:selected",'select[name="apptcom"]').text();        //委託公司
		var s_prodtype = $("option:selected",'select[name="prodtype"]').text();      //產品別
		
		var s_docitem = $("option:selected",'select[name="docitem"]').text();               //文件項目
		var s_doctype = $("option:selected",'select[name="doctype"]').text().substring(2);        //文件類別
		var s_asignname = $("option:selected",'select[name="asignname"]').text();          //簽收人 
		var prodval =$("option:selected",'select[name="prodtype"]').val();
		
		//若輸入預設值，則改為space傳送   
		s_prodtype = ($("option:selected",'select[name="prodtype"]').val() == "DEFAULT" ? "": $("option:selected",'select[name="prodtype"]').text());
		s_docitem = ($("option:selected",'select[name="docitem"]').val() == "DEFAULT" ? "" :$("option:selected",'select[name="docitem"]').text());
		s_doctype =($("option:selected",'select[name="doctype"]').val() == "DEFAULT" ? "" :$("option:selected",'select[name="doctype"]').text().substring(2));
		s_asignname = ($("option:selected",'select[name="asignname"]').val() == "DEFAULT" ? "" : $("option:selected",'select[name="asignname"]').text());
		
		 //文件編號:已分號區隔
		var s_docno = new Array();
		s_docno =  $("#hqsearchdocNo").val().split(";");

		//"狀態" : multiple selected text 處理
		var count = $('#docstatusid option:selected').length;
		var s_docstatus = new Array();
		var i = 0;
		
		$('#docstatusid').find("option:selected").each(function(){
	        //optgroup label
	        
	        var statustxt =$(this).text();
	        var statusval =$(this).val();
	        var label = $(this).parent().attr("label");    //取得該項目的label
	        var id = $(this).parent().attr("id");          //取得該項目的ID
	        if (statusval == "DEFAULT"){
	        	s_docstatus = "";
	        }else{
	        	s_docstatus[i] = statustxt ;
	            i= i + 1 ;
	        	
	        }
	        	
			
	       
	    });    
		
		searchHistory(hqsearchdebtorName, hqsearchdebtorID, hqsearchcaseId, s_docno, 
				hqsearchreceivebegd, hqsearchreceiveendd, hqsearchapplybegd, hqsearchapplyendd, hqsearchprocbegd,
				hqsearchapplyendd, hqsearchprocbegd, hqsearchprocendd, hqsearchasignbegd, hqsearchasignendd, s_applyrsn,
				s_apptcom, s_prodtype, s_docstatus, s_docitem, s_doctype, s_asignname);
	});
	
	
	// 匯出EXCEL:查詢結果匯出於EXCEL
	$("#hqexport").button().on("click",function() {
		
		var hqsearchdebtorName = $("#hqsearchdebtorName").val(), //姓名
	    hqsearchdebtorID = $("#hqsearchdebtorID").val(),         //ID
		hqsearchcaseId = $("#hqsearchcaseId").val(),             //案號
		             
		hqsearchreceivebegd = $("#hqsearchreceivebegd").val(),  //收文日期
		hqsearchreceiveendd = $("#hqsearchreceiveendd").val(),
		hqsearchapplybegd = $("#hqsearchapplybegd").val(),     //申調日期
		hqsearchapplyendd = $("#hqsearchapplyendd").val(), 
		hqsearchprocbegd = $("#hqsearchprocbegd").val(),       //處理日期
		hqsearchprocendd = $("#hqsearchprocendd").val(),
		hqsearchasignbegd = $("#hqsearchasignbegd").val(),     //簽收日期
		hqsearchasignendd = $("#hqsearchasignendd").val();
		//-----------select value
		var s_applyrsn = $("option:selected",'select[name="applyrsn"]').text();       //申調原因
		var s_apptcom = $("option:selected",'select[name="apptcom"]').text();        //委託公司
		var s_prodtype = $("option:selected",'select[name="prodtype"]').text();      //產品別
		
		var s_docitem = $("option:selected",'select[name="docitem"]').text();               //文件項目
		var s_doctype = $("option:selected",'select[name="doctype"]').text().substring(2);        //文件類別
		var s_asignname = $("option:selected",'select[name="asignname"]').text();          //簽收人 
		var prodval =$("option:selected",'select[name="prodtype"]').val();
		
		//若輸入預設值，則改為space傳送   
		s_prodtype = ($("option:selected",'select[name="prodtype"]').val() == "DEFAULT" ? "": $("option:selected",'select[name="prodtype"]').text());
		s_docitem = ($("option:selected",'select[name="docitem"]').val() == "DEFAULT" ? "" :$("option:selected",'select[name="docitem"]').text());
		s_doctype =($("option:selected",'select[name="doctype"]').val() == "DEFAULT" ? "" :$("option:selected",'select[name="doctype"]').text().substring(2));
		s_asignname = ($("option:selected",'select[name="asignname"]').val() == "DEFAULT" ? "" : $("option:selected",'select[name="asignname"]').text());
		
		 //文件編號:已分號區隔
		var s_docno = new Array();
		s_docno =  $("#hqsearchdocNo").val().split(";");

		//"狀態" : multiple selected text 處理
		var count = $('#docstatusid option:selected').length;
		var s_docstatus = new Array();
		var i = 0;
		
		$('#docstatusid').find("option:selected").each(function(){
	        //optgroup label
	        
	        var statustxt =$(this).text();
	        var statusval =$(this).val();
	        var label = $(this).parent().attr("label");    //取得該項目的label
	        var id = $(this).parent().attr("id");          //取得該項目的ID
	        if (statusval == "DEFAULT"){
	        	s_docstatus = "";
	        }else{
	        	s_docstatus[i] = statustxt ;
	            i= i + 1 ;
	        	
	        }

		
		});
		exportHistory(hqsearchdebtorName, hqsearchdebtorID, hqsearchcaseId, s_docno, 
				hqsearchreceivebegd, hqsearchreceiveendd, hqsearchapplybegd, hqsearchapplyendd, hqsearchprocbegd,
				hqsearchapplyendd, hqsearchprocbegd, hqsearchprocendd, hqsearchasignbegd, hqsearchasignendd, s_applyrsn,
				s_apptcom, s_prodtype, s_docstatus, s_docitem, s_doctype, s_asignname);
	});
	

})