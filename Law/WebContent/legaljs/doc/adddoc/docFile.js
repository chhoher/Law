/**
 * Add By Jia 2017-06-23 docFile.js 實作addDoc.jsp 卷宗的部分 
 */
 
// 卷宗 start

law.addDoc.file = {
	filesubtabcount : 0,
	fileactivesubtabcount : 0,
	filesubtabs : $("#filesubtabs").tabs(),
	fileexistsubtabs : [],
	addfilesubtab : function () {
		
		var file = law.addDoc.file;
		var filesubtabcount = file.filesubtabcount;
		var fileactivesubtabcount = file.fileactivesubtabcount;
		var filesubtabs = file.filesubtabs;
		
		var tabTitle = "卷宗";
		var tabId = "tabs-" + filesubtabcount;
		
		var tabTemplate = "<li id='lifiletab_" + filesubtabcount + "'><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
		
		var label = tabTitle , id = tabId, li = $(tabTemplate.replace(/#\{href\}/g, "#" + id).replace(/#\{label\}/g, label));

		var subtabContentHtml = "<table>" +
           	 	"<tr>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptfileBankDate" + filesubtabcount + "'></input></td>" +
					"<td><label style='color:red'>*收文日期</label></td>" +
					"<td><input id='iptfileReceivedDate" + filesubtabcount + "'></input></td>" +
					"<td><label style='color:red'>*文件狀態</label></td>" +
					"<td><select id='iptfileDocStatus" + filesubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label style='color:red'>*文件類別</label></td>" +
					"<td><select id='iptfileTypeOne" + filesubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label style='color:red'>*文件項目</label></td>" +
					"<td><select id='iptfileTypeTwo" + filesubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptfileBankName" + filesubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>份數</label></td>" +
					"<td><input id='iptfileNums" + filesubtabcount + "'></input></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>備註</label></td>" +
					"<td><input id='iptfileRemark" + filesubtabcount +"'></input></td>" +
				"</tr>" +
           	 "</table>";
		
		file.filesubtabcount ++ ;
		file.fileactivesubtabcount ++;
		
		file.filesubtabs.find(".ui-tabs-nav").append(li);
		file.filesubtabs.append( "<div id='" + id + "'>" + subtabContentHtml + "</div>" );
		file.filesubtabs.tabs("refresh");
		file.filesubtabs.tabs({ active: file.fileactivesubtabcount});
		
		//將日期欄位格式化
		law.common.formatInputItemToDate("#iptfileReceivedDate" + filesubtabcount, "yy-mm-dd");
		law.common.formatInputItemToDate("#iptfileBankDate" + filesubtabcount, "yy-mm-dd");
		
		//卷宗下拉選項
		law.common.selectOption("#iptfileDocStatus" + filesubtabcount, file.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
		law.common.selectOption("#iptfileTypeOne" + filesubtabcount, file.TypeOne, "8aa2e72a5c812434015c813055070009", true);
		law.common.selectOption("#iptfileTypeTwo" + filesubtabcount, file.TypeTwo, undefined, true);
		
		var BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
		$("#iptfileBankName" + filesubtabcount).append(BankNameSelectOption);
		$("#iptfileBankName" + filesubtabcount + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
		
	},
	// 初始化
	initfilesubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo){
		var initsub = law.addDoc.file;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
	},
	// 將所有頁籤內容帶出
	returnAllsubtabJson : function(){
		
		var length = law.addDoc.file.filesubtabcount,
			i = 0,
			file = {},
			returnFile = "";
			
		// add By Jia 2017-08-11 空值判斷
		var emptyReturn = law.addDoc.file.fileRegex(undefined);
		if(emptyReturn.isEmpty){
			return emptyReturn;
		}
		// add By Jia 2017-08-14 格式判斷
		var isRegexReturn = law.addDoc.file.fileRegex(undefined);
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
			'receivedDate' : $("#iptfileReceivedDate").val(),
			'bankDate' : ($("#iptfileBankDate").val() !== "")? $("#iptfileBankDate").val() : null,
			'docStatus' : $("#iptfileDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptfileTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptfileTypeTwo").find('option:selected').val(),
			'nums' : ($("#iptfileNums").val() !== "")? $("#iptfileNums").val() : null,
			'remark' : ($("#iptfileRemark").val() !== "")? $("#iptfileRemark").val() : null,
			'disTypeOne' : $("#iptfileTypeOne").find('option:selected').text(),
			'disTypeTwo' : $("#iptfileTypeTwo").find('option:selected').text(),
			'disDocStatus' : $("#iptfileDocStatus").find('option:selected').text()
		};
			
		file.subItems = [];
		file.subItems.push(topItem);
			
		for ( ; i < length; i++ ) {
			if($("#lifiletab_" + i).size()){
				
				// add By Jia 2017-08-11 空值判斷
				var emptyReturn = law.addDoc.file.fileRegex(i);
				if(emptyReturn.isEmpty){
					return emptyReturn;
				}
				// add By Jia 2017-08-14 格式判斷
				var isRegexReturn = law.addDoc.file.fileRegex(i);
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
						'receivedDate' : $("#iptfileReceivedDate" + i ).val(),
						'bankDate' : ($("#iptfileBankDate" + i ).val() !== "")? $("#iptfileBankDate" + i ).val() : null,
						'docStatus' : $("#iptfileDocStatus" + i ).find('option:selected').val(),
						'typeOne' : $("#iptfileTypeOne" + i ).find('option:selected').val(),
						'typeTwo' : $("#iptfileTypeTwo" + i ).find('option:selected').val(),
						'nums' : ($("#iptfileNums" + i ).val() !== "")? $("#iptfileNums" + i ).val() : null,
						'remark' : ($("#iptfileRemark" + i ).val() !== "")? $("#iptfileRemark" + i ).val() : null,
						'disTypeOne' : $("#iptfileTypeOne" + i).find('option:selected').text(),
						'disTypeTwo' : $("#iptfileTypeTwo" + i).find('option:selected').text(),
						'disDocStatus' : $("#iptfileDocStatus" + i).find('option:selected').text()
				};
				file.subItems.push(subItems);
			}
		}

		returnFile = JSON.stringify(file.subItems);
		return returnFile;
	},
	// add By Jia 2017-08-10 若必選欄位有空則return並提示
	//index : 第幾頁籤 index = undefined 表示首頁
	fileRegex : function(index){
		var isEmpty;
		var isRegexp;
		var returnSaveFile;
		var returnFile = "";
		if(index === undefined){
			isEmpty = law.common.checkSelectIsEmpty("iptfileDocStatus", "卷宗[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveFile = { isEmpty : true, regexString : isEmpty.regexString, returnFile : returnFile}
				return returnSaveFile;
			}
			isEmpty = law.common.checkIsEmpty("iptfileReceivedDate", "卷宗[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveFile = { isEmpty : true, regexString : isEmpty.regexString, returnFile : returnFile}
				return returnSaveFile;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptfileTypeTwo", "卷宗[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveFile = { isEmpty : true, regexString : isEmpty.regexString, returnFile : returnFile}
				return returnSaveFile;
			}
			if($("#iptfileNums").val() !== ""){
				isRegexp = law.common.checkRegexp("iptfileNums", law.regex.numberRegex, "卷宗[份數]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveFile = { isRegexp : true, regexString : isRegexp.regexString, returnFile : returnFile}
					return returnSaveFile;
				}
			}
		}else{
			isEmpty = law.common.checkSelectIsEmpty("iptfileDocStatus" + index, "卷宗[文件狀態]");
			if(isEmpty.isEmpty){
				returnSaveFile = { isEmpty : true, regexString : isEmpty.regexString, returnFile : returnFile}
				return returnSaveFile;
			}
			isEmpty = law.common.checkIsEmpty("iptfileReceivedDate" + index, "卷宗[收文日期]");
			if(isEmpty.isEmpty){
				returnSaveFile = { isEmpty : true, regexString : isEmpty.regexString, returnFile : returnFile}
				return returnSaveFile;
			}
			isEmpty = law.common.checkSelectIsEmpty("iptfileTypeTwo" + index, "卷宗[文件項目]");
			if(isEmpty.isEmpty){
				returnSaveFile = { isEmpty : true, regexString : isEmpty.regexString, returnFile : returnFile}
				return returnSaveFile;
			}
			if($("#iptfileNums" + index).val() !== ""){
				isRegexp = law.common.checkRegexp("iptfileNums" + index, law.regex.numberRegex, "卷宗[份數]須為數字格式");
				if(isRegexp.isRegexp){
					returnSaveFile = { isRegexp : true, regexString : isRegexp.regexString, returnFile : returnFile}
					return returnSaveFile;
				}
			}
		}
		// 全部為空驗證通過
		returnSaveFile = { isEmpty : false, isRegexp : false};
		return returnSaveFile;
	}
	
}

	// Close icon: removing the tab on click
	$("#filesubtabs").tabs().on("click", "span.ui-icon-close", function() {
		var file = law.addDoc.file;
		var panelId = $(this).closest("li").remove().attr(
				"aria-controls");
		$("#" + panelId).remove();
		var liid = $(this).closest("li")["0"].id;
		file.fileexistsubtabs[liid.substring(liid.indexOf("_") + 1)] = false;
		file.fileactivesubtabcount--;
		file.filesubtabs.tabs({ active: file.fileactivesubtabcount});
	});
	
(function(){
	//將日期欄位格式化
	law.common.formatInputItemToDate("#iptfileReceivedDate", "yy-mm-dd");
	law.common.formatInputItemToDate("#iptfileBankDate", "yy-mm-dd");
 })();
// 卷宗 end	