/**
 * Add By Jia 2017-06-22 docOther.js 實作addDoc.jsp 其他的部分 
 */
 
// 其它 start
law.addDoc.other = {
	othersubtabcount : 0,
	otheractivesubtabcount : 0,
	othersubtabs : $("#othersubtabs").tabs(),
	otherexistsubtabs : [],
	addothersubtab : function(){
		var other = law.addDoc.other;
		var othersubtabcount = other.othersubtabcount;
		var otheractivesubtabcount = other.otheractivesubtabcount;
		var othersubtabs = other.othersubtabs;
		var tabTitle = "其它";
		var tabId = "tabs-" + othersubtabcount;
		var tabTemplate = "<li id='liothertab_" + othersubtabcount + "'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));
		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptotherBankDate" + othersubtabcount + "'></input></td>" +
					"<td><label style='color:red'>*收文日期</label></td>" +
					"<td><input id='iptotherReceivedDate" + othersubtabcount + "'></input></td>" +
					"<td><label>委任狀編號</label></td>" +
					"<td><input id='iptotherAppointmentLetterCode" + othersubtabcount + "' ></input></td>" +
					"<td><label style='color:red'>*文件狀態</label></td>" +
					"<td><select id='iptotherDocStatus" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label style='color:red'>*文件類別</label></td>" +
					"<td><select id='iptotherTypeOne" + othersubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*文件項目</label></td>" +
					"<td><select id='iptotherTypeTwo" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptotherBankName" + othersubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>收據種類</label></td>" +
					"<td><input id='iptotherReceiptType" + othersubtabcount + "' ></input></td>" +
					"<td><label>收據金額</label></td>" +
					"<td><input id='iptotherReceiptAmount" + othersubtabcount + "' ></input></td>" +
					"<td><label>法院製發日</label></td>" +
					"<td><input id='iptotherCourtDate" + othersubtabcount + "' ></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptotherRemark" + othersubtabcount + "' ></input></td>" +
				"</tr>" +
           	 "</table>";
       	 var docArray,seloption;
		
		other.othersubtabcount ++ ;
		other.otheractivesubtabcount ++;
		
		other.othersubtabs.find(".ui-tabs-nav").append(li);
		other.othersubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		other.othersubtabs.tabs("refresh");
		other.othersubtabs.tabs({ active:other.otheractivesubtabcount});
           	 
		other.otherexistsubtabs.push(true);
		// 開始初始化
		
		//將日期欄位格式化
		law.common.formatInputItemToDate( "#iptotherReceivedDate" + othersubtabcount , "yy-mm-dd");
		law.common.formatInputItemToDate( "#iptotherBankDate" + othersubtabcount , "yy-mm-dd");
		law.common.formatInputItemToDate( "#iptotherCourtDate" + othersubtabcount , "yy-mm-dd");
	   
		law.common.selectOption("#iptotherDocStatus" + othersubtabcount, other.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
		law.common.selectOption("#iptotherTypeOne" + othersubtabcount, other.TypeOne, "8aa2e72a5c812434015c81307418000a", true);
		law.common.selectOption("#iptotherTypeTwo" + othersubtabcount, other.TypeTwo, undefined, true);
		
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptotherBankName" + othersubtabcount).append(BankNameSelectOption);
		$("#iptotherBankName" + othersubtabcount + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
			
	},
	// 初始化
	initothersubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo){
		var initsub = law.addDoc.other;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
	},
	// 將所有頁籤內容帶出
	returnAllsubtabJson : function(){
		
		var length = law.addDoc.other.othersubtabcount,
			i = 0,
			other = {},
			returnOther = "";
			
		// add By Jia 2017-08-11 空值判斷
		var emptyReturn = law.addDoc.other.otherRegex(undefined);
		if(emptyReturn.isEmpty){
			return emptyReturn;
		}
		// add By Jia 2017-08-14 格式判斷
		var isRegexReturn = law.addDoc.other.otherRegex(undefined);
		if(isRegexReturn.isRegexp){
			return isRegexReturn;
		}
		
		var topItem = {
			'bankId' : law.addDoc.bankId,
			'bankName' : law.addDoc.bankName,
			'gProdId' : law.addDoc.gprodId,
			'gProdName' : law.addDoc.gprodName,
			'debtID' : law.addDoc.ID,
			'debtName' : law.addDoc.debtName,
			'receivedDate' : $("#iptotherReceivedDate").val(),
			'bankDate' : ($("#iptotherBankDate").val() !== "")?$("#iptotherBankDate").val() : null,
			'appointmentLetterCode' : ($("#iptotherAppointmentLetterCode").val() !== "")? $("#iptotherAppointmentLetterCode").val() : null,
			'docStatus' : $("#iptotherDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptotherTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptotherTypeTwo").find('option:selected').val(),
			'receiptType' : ($("#iptotherReceiptType").val() !== "")? $("#iptotherReceiptType").val() : null,
			'receiptAmount' : ($("#iptotherReceiptAmount").val() !== "")? $("#iptotherReceiptAmount").val() : null,
			'courtDate' : ($("#iptotherCourtDate").val() !== "")? $("#iptotherCourtDate").val() : null,
			'remark' : ($("#iptotherRemark").val() !== "")? $("#iptotherRemark").val() : null,
			'disTypeOne' : $("#iptotherTypeOne").find('option:selected').text(),
			'disTypeTwo' : $("#iptotherTypeTwo").find('option:selected').text(),
			'disDocStatus' : $("#iptotherDocStatus").find('option:selected').text()
		};
			
		other.subItems = [];
		other.subItems.push(topItem);
			
		for ( ; i < length; i++ ) {
			if($("#liothertab_" + i).size() > 0){
				// add By Jia 2017-08-11 空值判斷
				var emptyReturn = law.addDoc.other.otherRegex(i);
				if(emptyReturn.isEmpty){
					return emptyReturn;
				}
				// add By Jia 2017-08-14 格式判斷
				var isRegexReturn = law.addDoc.other.otherRegex(i);
				if(isRegexReturn.isRegexp){
					return isRegexReturn;
				}
				
					var subItems = {
						'bankId' : law.addDoc.bankId,
						'bankName' : law.addDoc.bankName,
						'gProdId' : law.addDoc.gprodId,
						'gProdName' : law.addDoc.gprodName,
						'debtID' : law.addDoc.ID,
						'debtName' : law.addDoc.debtName,
						'receivedDate' : $("#iptotherReceivedDate" + i ).val(),
						'bankDate' : ($("#iptotherBankDate" + i ).val() !== "")? $("#iptotherBankDate" + i ).val() : null,
						'appointmentLetterCode' : ($("#iptotherAppointmentLetterCode" + i).val() !== "")? $("#iptotherAppointmentLetterCode" + i).val() : null,
						'docStatus' : $("#iptotherDocStatus" + i ).find('option:selected').val(),
						'typeOne' : $("#iptotherTypeOne" + i ).find('option:selected').val(),
						'typeTwo' : $("#iptotherTypeTwo" + i ).find('option:selected').val(),
						'receiptType' : ($("#iptotherReceiptType" + i ).val() !== "")? $("#iptotherReceiptType" + i ).val() : null,
						'receiptAmount' : ($("#iptotherReceiptAmount" + i ).val() !== "")? $("#iptotherReceiptAmount" + i ).val() : null,
						'courtDate' : ($("#iptotherCourtDate" + i ).val() !== "")? $("#iptotherCourtDate" + i ).val() : null,
						'remark' : ($("#iptotherRemark" + i ).val() !== "")? $("#iptotherRemark" + i ).val() : null,
						'disTypeOne' : $("#iptotherTypeOne" + i).find('option:selected').text(),
						'disTypeTwo' : $("#iptotherTypeTwo" + i).find('option:selected').text(),
						'disDocStatus' : $("#iptotherDocStatus" + i).find('option:selected').text()
				};
				other.subItems.push(subItems);
			}
		}

		returnOther = JSON.stringify(other.subItems);
		return returnOther;
	},
	// add By Jia 2017-08-10 若必選欄位有空則return並提示
	//index : 第幾頁籤 index = undefined 表示首頁
	otherRegex : function(index){
		var isEmpty;
		var isRegexp;
		var returnSaveOther;
		var returnOther = "";
		if(index === undefined){
			isEmpty = law.common.checkSelectIsEmpty("iptotherDocStatus", "其它[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveOther = { isEmpty : true, regexString : isEmpty.regexString, returnOther : returnOther}
				return returnSaveOther;
			}
			isEmpty = law.common.checkIsEmpty("iptotherReceivedDate", "其它[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveOther = { isEmpty : true, regexString : isEmpty.regexString, returnOther : returnOther}
				return returnSaveOther;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptotherTypeTwo", "其它[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveOther = { isEmpty : true, regexString : isEmpty.regexString, returnOther : returnOther}
				return returnSaveOther;
			}
			if($("#iptotherReceiptAmount").val() !== ""){
				isRegexp = law.common.checkRegexp("iptotherReceiptAmount", law.regex.numberRegex, "其它[收據金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveOther = { isRegexp : true, regexString : isRegexp.regexString, returnOther : returnOther}
					return returnSaveOther;
				}
			}
		}else{
			isEmpty = law.common.checkSelectIsEmpty("iptotherDocStatus" + index, "其它[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveOther = { isEmpty : true, regexString : isEmpty.regexString, returnOther : returnOther}
				return returnSaveOther;
			}
			isEmpty = law.common.checkIsEmpty("iptotherReceivedDate" + index, "其它[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveOther = { isEmpty : true, regexString : isEmpty.regexString, returnOther : returnOther}
				return returnSaveOther;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptotherTypeTwo" + index, "其它[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveOther = { isEmpty : true, regexString : isEmpty.regexString, returnOther : returnOther}
				return returnSaveOther;
			}
			if($("#iptotherReceiptAmount" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptotherReceiptAmount" + index, law.regex.numberRegex, "其它[收據金額]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveOther = { isRegexp : true, regexString : isRegexp.regexString, returnOther : returnOther}
					return returnSaveOther;
				}
			}
		}
		// 全部為空驗證通過
		returnSaveOther = { isEmpty : false, isRegexp : false};
		return returnSaveOther;
	}
}
	
	// Close icon: removing the tab on click
	$("#othersubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var other = law.addDoc.other;
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		var liid = $(this).closest("li")["0"].id;
		other.otherexistsubtabs[liid.substring(liid.indexOf("_") + 1)] = false;
		other.otheractivesubtabcount--;
		other.othersubtabs.tabs({ active: other.otheractivesubtabcount});
	});
	
 (function(){
	//將日期欄位格式化
	law.common.formatInputItemToDate( "#iptotherReceivedDate", "yy-mm-dd");
	law.common.formatInputItemToDate( "#iptotherBankDate", "yy-mm-dd");
	law.common.formatInputItemToDate( "#iptotherCourtDate", "yy-mm-dd");
 })();
// 其它 end	
	