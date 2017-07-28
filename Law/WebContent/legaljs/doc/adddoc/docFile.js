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
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptfileReceivedDate" + filesubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><select id='iptfileDocStatus" + filesubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><select id='iptfileTypeOne" + filesubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><select id='iptfileTypeTwo" + filesubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptfileBankName" + filesubtabcount + "'><option value=''>請選擇</option></select></td>" +
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
		law.common.selectOption("#iptfileDocStatus" + filesubtabcount, file.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
		law.common.selectOption("#iptfileTypeOne" + filesubtabcount, file.TypeOne, "8aa2e72a5c812434015c813055070009");
		law.common.selectOption("#iptfileTypeTwo" + filesubtabcount, file.TypeTwo);
		law.common.selectOption("#iptfileBankName" + filesubtabcount, file.BankName);
		
		//設定收文日期為當日
		$("#iptfileReceivedDate" + filesubtabcount).val(file.ReceivedDate);
	},
	// 初始化
	initfilesubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, BankName){
		var initsub = law.addDoc.file;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.BankName = BankName;
	},
	// 將所有頁籤內容帶出
	returnAllsubtabJson : function(){
		
		var length = law.addDoc.file.filesubtabcount,
			i = 0,
			file = {},
			returnFile = "";
			
		var topItem = {
			'receivedDate' : $("#iptfileReceivedDate").val(),
			'bankDate' : $("#iptfileBankDate").val(),
			'docStatus' : $("#iptfileDocStatus").find('option:selected').val(),
			'typeOne' : $("#iptfileTypeOne").find('option:selected').val(),
			'typeTwo' : $("#iptfileTypeTwo").find('option:selected').val(),
			'bankName' : $("#iptfileBankName").find('option:selected').val(),
			'nums' : $("#iptfileNums").val(),
			'remark' : $("#iptfileRemark").val()
		};
			
		file.subItems = [];
		file.subItems.push(topItem);
			
		for ( ; i < length; i++ ) {
				var subItems = {
					'receivedDate' : $("#iptfileReceivedDate" + i ).val(),
					'bankDate' : $("#iptfileBankDate" + i ).val(),
					'docStatus' : $("#iptfileDocStatus" + i ).find('option:selected').val(),
					'typeOne' : $("#iptfileTypeOne" + i ).find('option:selected').val(),
					'typeTwo' : $("#iptfileTypeTwo" + i ).find('option:selected').val(),
					'bankName' : $("#iptfileBankName" + i ).find('option:selected').val(),
					'nums' : $("#iptfileNums" + i ).val(),
					'remark' : $("#iptfileRemark" + i ).val()
			};
			file.subItems.push(subItems);
		}

		returnFile = JSON.stringify(file.subItems);
		return returnFile;
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