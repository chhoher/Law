/**
 * 
 */


$(function() {
	//申調日期-產生小月曆
	$('#abborrowdatebeg').datepicker({
	    dateFormat: 'yy-mm-dd'
	});
	$('#abborrowdateend').datepicker({
	    dateFormat: 'yy-mm-dd'
	});	
	//全選
	$("#select_all_id").on('click', function(){
	      // Get all rows with search applied
		  var abDatatable = $("#applyborrowfTable").DataTable();
	      var rows = abDatatable.rows({ 'search': 'applied' }).nodes();
	      // Check/uncheck checkboxes for all rows in the table
	      $('input[type="checkbox"]', rows).prop('checked', this.checked);
	 });
	
	//查詢
	$("#applyborrowsearch").button().on("click",function() {
		var caseId        = $("#abcaseId").val(),            
			borrowstatus  = $("#abborrowstatus").val(),     //文管狀態
			storagestatus = $("#abstoragestatus").val(),	//是否在庫
			debtname	  = $("#abdebtname").val(),         //姓名
			ID 			  = $("#absearchID").val(),         //ID
			borrowdatebeg = $("#abborrowdatebeg").val(),    //申調起日
			borrowdateend = $("#abborrowdateend").val();    //申調迄日
		    borrowUser    = $("#abborrowUserid").val();		//申調人
		//-----------select value
		var s_borrowreason = $("option:selected",'select[name="abborrowreason"]').text();    //申調原因
		var s_bankname     = $("option:selected",'select[name="abbankname"]').text();         //委託公司
		

		//文件編號:以分號區隔
		var s_doccode = new Array();
		s_doccode =  $("#abdoccode").val().split(";");

		searchborrowlist(caseId, debtname, ID, s_doccode, s_bankname, s_borrowreason, 
				borrowdatebeg, borrowdateend, borrowUser, borrowstatus, storagestatus);
		
		
	});
	
//列印明細
	$("#applyborrowprintout").button().on("click",function() {
		var abDatatable = $("#applyborrowfTable").DataTable();
		var abdatatable = $("#applyborrowfTable").dataTable();
		var rowTr = $(this).closest('tr');
		var data = abDatatable.row(rowTr).data();
		var printBorrowInfoString;
		var printBorrowInfo = [];

 
		$(abdatatable.fnGetNodes()).each(function(){
			var data = "",
				printData = "";
			var rowTr = $(this).closest('tr');
			
			// Get row data
		 	data = abDatatable.row(rowTr).data();
		 	
		 	// 組出借調資訊
		 	var checkBox, cancelReason, bankName, prodName, caseId, debtName, ID, docCode, doctype,
		 		docitem, borrowstatus, courtYearInfo, sourceDocInfo, borrowReason, lawcode, storagestatus,
		 		borrowcancelflag, borrowUser, borrowDate, progressUser, progressDate;
		 	
		 	cancelReason = $("#iptapplyBorrow_" + data.docCode).val();
		 	cancelReason = cancelReason == null ? "": cancelReason;
		 	
		 	//若有勾選為TRUE
		 	checkBox = "";
		 	if ($("#ckbapplyBorrow_" + data.docCode).prop("checked")  == true){
		 		checkBox = "v";
		 		}
	
		printData = {
				checkBox       : checkBox,
				cancelReason   : cancelReason,
				bankName       : data.bankName,
				prodName       : data.prodName,
				caseId 	       : data.caseId,
				debtName       : data.debtName,
				ID             : data.ID,
				docCode        : data.docCode,
				typeOne        : data.typeOne,
				typeTwo        : data.typeTwo,
				borrowStatus   : data.borrowStatus,
				courtYearInfo  : data.courtYearInfo,
				sourceDocInfo  : data.sourceDocInfo,
				borrowReason   : data.borrowReason,
				lawCode        : data.lawCode,
				O_C            : data.O_C,
				docStatus      : data.docStatus,
				borrowUserName : data.borrowUserName,
				borrowDatetime : data.borrowDatetime,
				progressUserName : data.progressUserName,
				disProgressDatetime  : data.disProgressDatetime
		}
		printBorrowInfo.push(printData);
		printBorrowInfoString = JSON.stringify(printBorrowInfo); 
		});

		$.ajax({
			url : '../pages/doc/borrow/docBorrowAction!printMoveDocs.action',
			data : {
				"printMoveDocInfo" : printBorrowInfoString,
				"printType" : 2
			},
			type : "POST",
			dataType : 'json',
			success : function(response) {
				alert("success area~");
				window.location.href = response.downloadPath;
//				window.open(response.downloadPath);
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	});
	
//取消借調
	$("#applyborrowcancel").button().on("click",function() {
		var abdatatable = $("#applyborrowfTable").dataTable();
		var abDatatable = $("#applyborrowfTable").DataTable();
		var s_cancelreason = [];
		var updateCentitlementDocIds = [], updateCourtDocDocIds = [], updateCashierCheckDocIds = [], 
		updateDebtsDocIds = [], updateClaimsDocDocIds = [], updateFileDocDocIds = [], updateOtherDocIds = [];
		var updateBorrowDocIds = [];
		var saveCentitlementDocIds, saveCourtDocDocIds, saveCashierCheckDocIds, saveDebtsDocIds,
			saveClaimsDocDocIds, saveFileDocDocIds, saveOtherDocIds;
		var saveBorrowDocIds;
		var saveCancelReason; 
		
		var batchcancelreason = $("#abbatchcancelReason").val();   //大批輸入取消申請原因

		$("input:checked",abdatatable.fnGetNodes()).each(function(){
			var data = "";
			var rowTr = $(this).closest('tr');        
			
			// Get row data
			data = abDatatable.row(rowTr).data();
	       	if($("#ckbapplyBorrow_" + data.docCode).find('option:selected')){
				
				//若未輸入"取消申請原因"，則放"大批輸入取消申請原因"
				//若"取消申請原因"及"大批輸入取消申請原因"皆有輸入，以"取消申請原因"為主
	       		var cancelReasontext = $("#iptapplyBorrow_" + data.docCode).val(); //取消申請原因
				if(cancelReasontext  == "" || cancelReasontext == null)
				{   
					if (batchcancelreason == "" || batchcancelreason == null){
					alert("請輸入取消申請原因或大批輸入取消申請原因");
					}else{
						cancelReasontext = batchcancelreason;
					}				
				}
				s_cancelreason.push(cancelReasontext);
					
				
				if(data.docType == "A"){
					updateCentitlementDocIds.push(data.docId);  //取得動態產生的INPUT值
				}else if(data.docType == "B"){
					updateCourtDocDocIds.push(data.docId);
				}else if(data.docType == "C"){
					updateCashierCheckDocIds.push(data.docId);
				}else if(data.docType == "D"){
					updateDebtsDocIds.push(data.docId);
				}else if(data.docType == "E"){
					updateClaimsDocDocIds.push(data.docId);
				}else if(data.docType == "F"){
					updateFileDocDocIds.push(data.docId);
				}else if(data.docType == "G"){
					updateOtherDocIds.push(data.docId);
				}
				 	
				 	updateBorrowDocIds.push(data.borrowDocId);
				
				
					
			}
	               
	     })
	     /*
	      s_cancelreason           = s_cancelreason == null ? "": s_cancelreason;
	      updateCentitlementDocIds = updateCentitlementDocIds == null ? "" : updateCentitlementDocIds;
	      updateCourtDocDocIds     = updateCourtDocDocIds  == null ? "" : updateCourtDocDocIds;
	      updateCashierCheckDocIds = updateCashierCheckDocIds == null ? "" : updateCashierCheckDocIds;
	      updateDebtsDocIds        = updateDebtsDocIds == null ? "" : updateDebtsDocIds;
	      updateClaimsDocDocIds    = updateClaimsDocDocIds == null ? "" : updateClaimsDocDocIds;
	      updateFileDocDocIds      = updateFileDocDocIds == null ? "" : updateFileDocDocIds;
	      updateOtherDocIds        = updateOtherDocIds  == null ? "" : updateOtherDocIds;
	      updateBorrowDocIds       = updateBorrowDocIds == null ? "" : updateBorrowDocIds;
	      */
	      saveCancelReason       = JSON.stringify(s_cancelreason); 
	      saveCentitlementDocIds = JSON.stringify(updateCentitlementDocIds);
		  saveCourtDocDocIds = JSON.stringify(updateCourtDocDocIds);
		  saveCashierCheckDocIds = JSON.stringify(updateCashierCheckDocIds);
		  saveDebtsDocIds = JSON.stringify(updateDebtsDocIds);
		  saveClaimsDocDocIds = JSON.stringify(updateClaimsDocDocIds);
		  saveFileDocDocIds = JSON.stringify(updateFileDocDocIds);
		  saveOtherDocIds = JSON.stringify(updateOtherDocIds);
		  saveBorrowDocIds = JSON.stringify(updateBorrowDocIds);
		  
	      if (s_cancelreason.length > 0){
	    	  cancelborrow(saveCancelReason, saveCentitlementDocIds, saveCourtDocDocIds, saveCashierCheckDocIds, saveDebtsDocIds,
	    			  saveClaimsDocDocIds, saveFileDocDocIds, saveOtherDocIds, saveBorrowDocIds);   
	      }
	});

	
	
	
	//查詢
	function searchborrowlist(caseId, debtname, ID, s_doccode, s_bankname, s_borrowreason, 
			borrowdatebeg, borrowdateend, borrowUser, borrowstatus, storagestatus) {
		var abdatatable = $("#applyborrowfTable").dataTable();
		abdatatable.fnClearTable();
		var json = "";
		
		$.ajax({			
			url : '../pages/doc/borrow/docBorrowAction!loadborrowDocs.action',
			data : {
				
				'type'                : 2,   
				'caseId'              : caseId,                //案號
				'abborrowstatus'      : borrowstatus,          //文管狀態
				'isInStore'           : storagestatus,         //庫存狀態
				'debtName'            : debtname,              //姓名
				'ID'                  : ID,                    //ID
				'borrowStartDate'     : borrowdatebeg,         //申調日期
				'borrowEndDate'       : borrowdateend,
				'borrowUserName'      : borrowUser, 		    //申調人 		 
				//-----------select value
				'bankName'            : s_bankname,			  //委託公司
				'borrowReason'        : s_borrowreason,       //申調原因
				'docCode'             : s_doccode             //文件編號   
				       
				
			},
			type : 'POST',
			dataType : 'json',
			success : function(response) {
				
				
			    json = response.responseLDocBorrow; 
			    //acion.java回傳response的data/process結果為SUCCESS，若沒傳SUCCESS會不走來這段
			   
			    
			    abdatatable.fnClearTable();
			 	if (response.responseLDocBorrow != '') {
			 		abdatatable.fnAddData(json);
			 		$(abdatatable.fnGetData()).each(function(i){
			 			
				 		$("#applyBorrowselect_" + abdatatable.fnGetData(i).docCode).empty();
				 		$("#applyBorrowEdit_" + abdatatable.fnGetData(i).docCode).empty();
				 		$("#applyBorrowselect_" + abdatatable.fnGetData(i).docCode).append(law.doc.applyBorrowselect($(this).val(), abdatatable.fnGetData(i).docCode));
				 		$("#applyBorrowEdit_" + abdatatable.fnGetData(i).docCode).append(law.doc.applyBorrowtext($(this).val(), abdatatable.fnGetData(i).docCode));
				 		

				 		
				 	});
					
				  	
				}
			 	abdatatable.fnDraw();	
			 
			 	
			
				
			 				
	
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("error!!!");
				alert(xhr.status);
				alert(thrownError);
			}
		
		});
	}
	
	function cancelborrow(saveCancelReason, saveCentitlementDocIds, saveCourtDocDocIds, saveCashierCheckDocIds, 
			saveDebtsDocIds, saveClaimsDocDocIds, saveFileDocDocIds, saveOtherDocIds, saveBorrowDocIds){
			
		var abdatatable = $("#applyborrowfTable").dataTable();
		
				
		$.ajax({			
			url : '../pages/doc/borrow/docBorrowAction!saveCancelMoveDocs.action',
			data : {                         
				'saveCancelReason'          : saveCancelReason,               //取消申請原因
				'saveCentitlementDocIds'    : saveCentitlementDocIds,     //執行名義
				'saveCourtDocDocIds'     	: saveCourtDocDocIds,         //法院文
				'saveCashierCheckDocIds'    : saveCashierCheckDocIds,     //本票
				'saveDebtsDocIds'           : saveDebtsDocIds,			//債讓
				'saveClaimsDocDocIds'       : saveClaimsDocDocIds,        //債權文件
				'saveFileDocDocIds'         : saveFileDocDocIds,          //卷宗
				'saveOtherDocIds'           : saveOtherDocIds,	        //其他
				'saveBorrowDocIds'          : saveBorrowDocIds,	        //申調紀錄ID
				'updateType'                : "0"                       //取消申請調借
			},
			type : "POST",
			dataType : 'json',
			success : function(response) {
				
			    initalTextbox();
			    abdatatable.fnClearTable();
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert("error!!!");
				alert(xhr.status);
				alert(thrownError);
			}
		
		});
	}
	function initalTextbox(){
		$("#abcaseId").val("");             //案號 
		$("#abdebtname").val("");          //姓名
		$("#absearchID").val("");          //ID
		$("#abborrowdatebeg").val("");     //申調起日
		$("#abborrowdateend").val("");     //申調迄日
	    $("#abborrowUser_id").val("");      //申調人
	    $("#abdoccode").val("");           //文件編號
	    $("#abbatchcancelReason").val("");
	    
	    $( "#abstoragestatus_id")[0].selectedIndex = 0; //是否在庫
	    $( "#abborrowstatus_id")[0].selectedIndex = 0;  //文管狀態
	    $( "#abborrowreason_id")[0].selectedIndex = 0;
	    $( "#abbankname_id")[0].selectedIndex = 0;
	
	
	}
	
	
	
});

(function(){
	// 選項動態組出畫面的String
	// 定義動態產生的inputbox, checkbox
	law.doc.applyBorrowselect = function applyBorrowselect(type, rowDocId) {
		
		var returnString;
		returnString = '<input id="ckbapplyBorrow_'+ rowDocId + '" type="checkbox" value=' + full.docCode + 'class="editor-active">';
		return returnString;
	}
	law.doc.applyBorrowtext = function applyBorrowtext(type, rowDocId) {

		var returnString;
		returnString = '<input id="iptapplyBorrow_'+ rowDocId + '" ></input>';
		
		return returnString;
	}
	
 })();