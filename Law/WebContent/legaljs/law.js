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
	selectOption = function(id, array, selectId){
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
	},
	
	/*
	 * add By Jia 2017-06-27
	 * 帶入相對人
	 */
	selectRelaOption = function(id, array, selectId){
		var docArray = array,
			seloption = "";
		$(id + " option").remove();
		$.each(docArray,function(i){
			seloption += '<option value="'+docArray[i].Row_ID+'">'+docArray[i].Name+'</option>'; 
		});
		$(id).append(seloption);
		if(selectId !== undefined){
			$(id + ' option[value=' + selectId + ']').attr('selected', 'selected');
		}
	};
	
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
 		removeTabs : removeTabs
 	};
 	
 	// addDoc物件
 	law.addDoc = {};
 	
 	law.getObject = getObject;
 	
 	// 新增通用function
 	law.common = {
 		selectOption : selectOption,
 		selectRelaOption : selectRelaOption
 	};
 	
 	// 新增regex
 	law.regex = {};
 	/*
 	 * 加入law到window裡
 	 */
 	window.law = law;
 } )();