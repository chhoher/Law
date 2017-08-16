/*!
 * JiaJia write JavaScript Library v1.0
 * 關於法務文管系統內的各種通用function都寫在這裡
 * 必須先import jQuery
 * Date: 2017-06-19
 */
 (function (){
 	var law = {};
 	var 
 		// law.prototype
 		autorName = "JiaJia",
 		version = "1.0",
 		systemName = "Law",
 		
 		// law.tabControl
 		tabArr = [],
 		tabcount = 0,
 		activedNum = 0,
 		
 		// regex
 		tips = "",
 		
	 	/* 定義新增頁簽function
	 	* tabsId 帶入需增加頁簽的位置
	 	* menname 帶入打開頁簽的名稱
	 	* menuUrl 打開頁簽的Url
	 	* menuid 打開頁簽的ID
	 	*/	
 		addTabs = function(tabsId, menuid, menname, menuUrl){
			var tabs = $(tabsId).tabs();
			
					var tabTitle = menname;
					var tabHref = menuUrl;
					var tabId = "tabs-" + menuid;
					var tabTemplate = "<li id='" + tabId + "'><a href='"
							+ tabHref
							+ "'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"
				
					var 
						label = tabTitle, 
						id = tabId, 
						li = $(tabTemplate.replace(/#\{href\}/g,"#" + id).replace(/#\{label\}/g, label));
				
					var key = tabId;
					
					
				if(menuUrl !== undefined && menuUrl !== "無"){
					
					if(law.tabControl.tabArr[key + "_loaded"] === undefined 
							|| law.tabControl.tabArr[key+"_loaded"].isOpened === false){
					
						law.tabControl.tabcount++;
						$("div#tabs ul#ulindex").append(li);
						tabs.tabs("refresh");
						tabs.tabs({
									active : law.tabControl.tabcount
								});
						law.tabControl.activedNum = law.tabControl.tabcount;
					}else{
						tabs.tabs({
							active : law.tabControl.tabArr[key + "_loaded"].tabindex
						});
					}
				
				}
				
	},
	/* 關閉頁籤
 	* tabsId 帶入需關閉頁簽的位置
 	* menname 帶入關閉頁簽的名稱
 	* menuUrl 打開頁簽的Url
 	* menuid 打開頁簽的ID
 	*/	
	closeTabs = function(tabsId){
		if($(tabsId).size() > 0){
			var key = $(tabsId).closest("li")["0"].id;
			law.tabControl.tabArr[key + "_loaded"] = { isOpened : false, tabindex : -1};
			law.tabControl.tabcount--;
			$("#tabs").tabs().tabs({
				active : law.tabControl.activedNum
			});
			var panelId = $(tabsId).closest("li").remove().attr("aria-controls");
				$("#" + panelId).remove();
		}
	},
	
	/*
	 * 當remove tab的時候同時把該物件全部清空
	 */
	removeTabs = function(ObjectName){
		delete law.ObjectName;
	},
	
	/*
	 * 取得物件位置
	 */
	getObject = function(subName){
		return law[subName];
	},
	
	/*
	 * add By Jia 2017-06-23
	 * 帶入初始值(下拉選項)
	 * 固定是L_SYS_VARIABLE裡面的
	 */
	selectOption = function(id, array, selectId, hasNone){
		var docArray = array,
			seloption = "";
		$(id + " option").remove();
		$.each(docArray,function(i){
			seloption += '<option value="'+docArray[i].variableId+'">'+docArray[i].variableName+'</option>'; 
		});
		$(id).append(seloption);
		if(selectId !== undefined){
			$(id + ' option[value=' + selectId + ']').attr('selected', 'selected');
		}
		//多加第一項請選擇
		if(hasNone){
			var noneSelect = "<option value=''>請選擇</option>"; 
			$(id).prepend(noneSelect);
			if(selectId === undefined){
				$(id)[0].selectedIndex = 0;
			}
		}
	},
	
	/*
	 * add By Jia 2017-06-27
	 * 帶入相對人
	 */
	selectRelaOption = function(id, array, selectId, hasNone){
		var docArray = array,
			seloption = "";
		$(id + " option").remove();
		$.each(docArray,function(i){
			seloption += '<option value="'+docArray[i].ID+'">'+docArray[i].Name+'</option>'; 
		});
		$(id).append(seloption);
		if(selectId !== undefined){
			$(id + ' option[value=' + selectId + ']').attr('selected', 'selected');
		}
		//多加第一項請選擇
		if(hasNone){
			var noneSelect = "<option value=''>請選擇</option>"; 
			$(id).prepend(noneSelect);
			if(selectId === undefined){
				$(id)[0].selectedIndex = 0;
			}
		}
	},
	
	/*
	 * add By Jia 2017-07-04
	 * 將日期輸入欄格式化
	 */
	formatInputItemToDate = function(id, formatType){
		$( id ).datepicker();
    	$( id ).datepicker( "option", "dateFormat", formatType );
    	$( id ).datepicker( "option", $.datepicker.regional[ "zh-TW" ] );
	},
	
	deleteFunctionForRecordFile = function(data, datatableId, removeNum){
		// add by Jia 2017-07-11 刪除是將is_delete改成Y
		$.ajax({
			url : 'pages/cek/recordcheckform/recordcheckformAction!deleteSelectSignedFile.action',
			data : {
				'recordFileId' : data
			},
			type : "POST",
			dataType : 'json',
			success : function(response) {
				if (response.success) {
					var datatable = $(datatableId).dataTable();
					datatable.fnDeleteRow(removeNum);
					alert(response.msg);
				} else {
					alert(response.msg);
				}
			},
			error : function(xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);
			}
		});
	},
	//左方補零到幾位數
	paddingLeft = function (str,lenght){
		if(str.length >= lenght)
		return str;
		else
		return paddingLeft("0" +str,lenght);
	},
	// 清除checkbox
	unchecked = function (id1, id2){
		$("#" + id1).prop("checked", false);
		$("#" + id2).prop("checked", false);
	},
	//字串驗證
	checkLength = function (){
		
	},
	//必填欄位是否空
	// id 
	// regexString = "提示訊息"
	// return true = 空 false = 不空
	checkIsEmpty = function (id, regexString){
		var returnObject = {};
		if($("#" + id).val() === ""){
			returnObject = { isEmpty : true, regexString :  regexString + "->不得為空"};
			return returnObject;
		}else{
			returnObject = { isEmpty : false};
			return returnObject
		}
	},
	//必填選擇項欄位是否空
	// id 
	// regexString = "提示訊息"
	// return true = 空 false = 不空
	checkSelectIsEmpty = function (id, regexString){
		var returnObject = {};
		if($("#" + id).find('option:selected').val() === ""){
			returnObject = { isEmpty : true, regexString :  regexString + "->不得為空"};
			return returnObject;
		}else{
			returnObject = { isEmpty : false};
			return returnObject
		}
	},
	checkRegexp = function (id, regexp, regexString) {
		var returnObject = {};
	    if (( regexp.test( $("#" + id).val() ) ) ) {
	    	returnObject = { isRegexp : false};
	        return returnObject;
	    } else {
			returnObject = { isRegexp : true, regexString :  regexString};
	        return returnObject;
	    }
	}
	
 	/*
 	 * 將所有物件塞入law
 	 */
 	law.prototype ={
 		 	autorName : autorName,
 		 	version : version,
 		 	systemName : systemName
 		};
 	
 	law.tabControl = {
 		tabArr : tabArr,
 		tabcount : tabcount,
 		activedNum : activedNum,
 		addTabs : addTabs,
 		closeTabs : closeTabs,
 		removeTabs : removeTabs
 	};
 	
 	// addDoc物件
 	law.addDoc = {};
 	// doc物件
 	law.doc = {};
 	
 	law.getObject = getObject;
 	
 	// 新增通用function
 	law.common = {
 		selectOption : selectOption,
 		selectRelaOption : selectRelaOption,
 		formatInputItemToDate : formatInputItemToDate,
 		paddingLeft : paddingLeft,
 		unchecked : unchecked,
 		checkLength : checkLength,
 		checkIsEmpty : checkIsEmpty,
 		checkSelectIsEmpty : checkSelectIsEmpty,
 		checkRegexp : checkRegexp,
 		tips : tips //regex的提示字串 
 	};
 	
 	// 新增簽核系統類function
 	law.cek = {
 		deleteFunctionForRecordFile : deleteFunctionForRecordFile
 	};
 	
 	// 新增regex
 	law.regex = {
		CNameRegex : '',
		ENameRegex : '',
		emailRegex : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		numberRegex : /^\d+$/, // 驗證非負整數
		dateTimeRegex : /(\d{4})-(\d{2})-(\d{2})/,
		Cyear : /^[0-1]?\d{1,2}/  // 民國年判斷
	};
 	/*
 	 * 加入law到window裡
 	 */
 	window.law = law;
 } )();