/**
 * Add By Jia 2017-06-14 docdocSystem.js 實作docSystem.jsp 
 */
 
$(function() {
	
	// ===== function start =====
	
	// add by Jia 申請借調 function
	function borrowDoc(iptsearchdebtorName, iptsearchdebtorID, iptsearchcaseId, iptsearchdocNo, iptsearchLawCaseId) {
		var docsdatatable = "";
		var saveBorrowInfo = [], docCodes = [], saveJson = {};
		docsdatatable = $("#docSystemCaseDocsTable").dataTable();
		
		$("input:checked",docsdatatable.fnGetNodes()).each(function(){
			docCodes.push($(this).val());
			var docHistory = {
				bankName : 
				prod_name
				case_id
				debt_name
				ID
				doc_code
				type_one
				type_two
				doc_status
				court_year_info
				source_doc_info
				borrow_reason
				law_code
				progress_datetime
				progress_user_id
				progress_user_name
				check_datetime
				check_user_id
				check_user_name
				back_datetime
				back_user_id
				back_user_name
				final_progress_datetime
				final_progress_user_id
				final_progress_user_name
				edit
				business
				business_account
				borrow_info
				borrow_law_code
				borrow_back_date
				borrow_back_reason
				borrow_to_court_date
				borrow_to_court_law_code
				borrow_court_year_court
				borrow_court_year_year
			}
		});
		
		$.ajax({
			url : "../pages/doc/documents/docAction!loadCaseInfo.action",
			data : {
				"docCodes" : docCodes,
				"saveBorrowInfo" : saveBorrowInfo
			},
			type : "POST",
			dataType : 'json',
			success : function(response) {
				
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	}
	
	// ===== function end =====

	// ===== 功能列按鈕 start =====
	// 申請借調
	$("#btnborrowDoc").button().on("click",function() {
		borrowDoc();
		alert("已申請借調完成");
	});
	
	$("#btnprintBorrowDoc").button().on("click",function(){
		alert("printExcel");
	});
	// ===== 功能列按鈕 end =====
	
});

 (function(){
	// 選項動態組出畫面的String
	law.doc.applyBorrowString = function applyBorrowString(type, rowDocId) {
		var certificate, // 遞狀
			backCertificate, // 遞狀退件(業主)
			toCourt, // 開庭
			commonsBorrow, // 一般借調
			subBorrow; // 預借(遞狀)
		var returnString;
		
		// 遞狀
		if(type === "8aa2e72a5d5efd74015d5f474dd50002"){
			returnString = "<label>法務編號</label><input id='iptborrowDocLawCode_" + rowDocId + "' ></input>";
		}
		
		// 遞狀退件(業主)
		else if(type === "8aa2e72a5d5efd74015d5f478ecc0003"){
			returnString = "<label>指定退件日期</label><input id='iptborrowDocBackDate_" + rowDocId + "' ></input></br><label>退件原因</label><input id='iptborrowDocBackReason_" + rowDocId + "' ></input>";
		}
		
		// 開庭
		else if(type === "8aa2e72a5d5efd74015d5f486f120004"){
			returnString = "<label>開庭日期</label><input id='iptborrowDocToCourtDate_" + rowDocId + "' style='width: 100px;'></input><label>法務編號</label><input id='iptborrowDocToCourtLawCode_" + rowDocId + "' style='width: 100px;'></input>" +
					"</br><select id='applyBorrowCourtYearCourt_" +  rowDocId + "'><option value=''>請選擇</option></select><input id='applyBorrowCourtYearYear_" + rowDocId + "'  style='width: 50px;'><label>年</label>" +
							"<input id='applyBorrowCourtYearTxt_" + rowDocId + "' style='width: 50px;'><label>字</label><input id='applyBorrowCourtYearCaseId_" + rowDocId + "' style='width: 50px;'><label>案號</label>" +
									"<input id='applyBorrowCourtYearShare_" + rowDocId + "' style='width: 50px;'><label>股</label>";
		}
		
		// 一般借調
		else if(type === "8aa2e72a5d5efd74015d5f489e0b0005"){
			returnString = "<label>原因</label><input id='iptborrowDocReason_" + rowDocId + "' ></input>";
		}
		
		// 預借(遞狀)
		else if(type === "8aa2e72a5d5efd74015d5f48db170006"){
			returnString = "<label>法務編號</label><input id='iptborrowDocSubLawCode_" + rowDocId + "' ></input>";
		}
		
		return returnString;
	}
	
 })();