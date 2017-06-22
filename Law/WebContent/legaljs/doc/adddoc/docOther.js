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
					"<td><label>收文日期</label></td>" +
					"<td><input id='iptotherReceivedDate" + othersubtabcount + "'></input></td>" +
					"<td><label>業主調件日</label></td>" +
					"<td><input id='iptotherBankDate" + othersubtabcount + "'></input></td>" +
					"<td><label>文件狀態</label></td>" +
					"<td><select id='iptotherDocStatus" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
				"</tr>" +
				"<tr>" +
					"<td><label>文件類別</label></td>" +
					"<td><select id='iptotherTypeOne" + othersubtabcount + "' disabled><option value=''>請選擇</option></select></td>" +
					"<td><label>文件項目</label></td>" +
					"<td><select id='iptotherTypeTwo" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
					"<td><label>債權人</label></td>" +
					"<td><select id='iptotherBankName" + othersubtabcount + "'><option value=''>請選擇</option></select></td>" +
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
		$( "#iptotherReceivedDate" + othersubtabcount ).datepicker();
	    $( "#iptotherReceivedDate" + othersubtabcount ).datepicker( "option", "dateFormat", "yy-mm-dd" );
		$( "#iptotherBankDate" + othersubtabcount ).datepicker();
	    $( "#iptotherBankDate" + othersubtabcount ).datepicker( "option", "dateFormat", "yy-mm-dd" );
		$( "#iptotherCourtDate" + othersubtabcount ).datepicker();
	    $( "#iptotherCourtDate" + othersubtabcount ).datepicker( "option", "dateFormat", "yy-mm-dd" );
	    
		//其他 文件狀態
		$("#iptotherDocStatus" + othersubtabcount + " option").remove();
		docArray = other.DocStatus;
		seloption = "";
		$.each(docArray,function(i){
			seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
		});
		$("#iptotherDocStatus" + othersubtabcount).append(seloption);
		$('#iptotherDocStatus' + othersubtabcount + ' option[value=8aa2e72a5c8074d5015c8076cfe50001]').attr('selected', 'selected');
		
		//其他 文件類別
		$("#iptotherTypeOne" + othersubtabcount + " option").remove();
		docArray = other.TypeOne;
		seloption = "";
		$.each(docArray,function(i){
			seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
		});
		$("#iptotherTypeOne" + othersubtabcount).append(seloption);
		$('#iptotherTypeOne' + othersubtabcount + ' option[value=8aa2e72a5c812434015c81307418000a]').attr('selected', 'selected');
		
		//其他 文件項目
		$("#iptotherTypeTwo" + othersubtabcount + " option").remove();
		docArray = other.TypeTwo;
		seloption = "";
		$.each(docArray,function(i){
			seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
		});
		$("#iptotherTypeTwo" + othersubtabcount).append(seloption);
		
		//其他 債權人
		$("#iptotherBankName" + othersubtabcount + " option").remove();
		docArray = other.BankName;
		seloption = "";
		$.each(docArray,function(i){
			seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
		});
		$("#iptotherBankName" + othersubtabcount).append(seloption);
		
		//設定收文日期為當日
		$("#iptotherReceivedDate" + othersubtabcount).val(other.ReceivedDate);
			
	},
	// 初始化
	initothersubtab : function (ReceivedDate, DocStatus, TypeOne, TypeTwo, BankName){
		var initsub = law.addDoc.other;
		initsub.ReceivedDate = ReceivedDate;
		initsub.DocStatus = DocStatus;
		initsub.TypeOne = TypeOne;
		initsub.TypeTwo = TypeTwo;
		initsub.BankName = BankName;
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
// 其它 end	
	