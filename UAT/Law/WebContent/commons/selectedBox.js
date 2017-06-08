
function leftSelectedBoxItem(){
	$("#selectedBox-selectLeft").append($("<option></option>").attr("value", "值").text("文字"));
	var optionsarray = "aaa,bbb,ccc".split(',');
	var seloption = "";
	$.each(optionsarray,function(i){
		seloption += '<option value="'+optionsarray[i]+'">'+optionsarray[i]+'</option>'; 
	});
	$("#selectedBox-selectLeft").append(seloption);
}		

function initialSelectedBox(LeftItemarray,RightItemarray){
	$("#selectedBox-selectLeft option").remove();
	$("#selectedBox-selectRight option").remove();
	var leftseloption = "";
	$.each(LeftItemarray,function(i){
		var optionValue = LeftItemarray[i].columnId+'-'+LeftItemarray[i].vocheckformcolumnId;
		leftseloption += '<option value="'+optionValue+'">'+LeftItemarray[i].columnName+'</option>'; 
	});
	$("#selectedBox-selectLeft").append(leftseloption);
	var rightseloption = "";
	$.each(RightItemarray,function(i){
		var optionValue = RightItemarray[i].columnId+'-'+RightItemarray[i].vocheckformcolumnId;
		rightseloption += '<option value="'+optionValue+'">'+RightItemarray[i].columnName+'</option>'; 
	});
	$("#selectedBox-selectRight").append(rightseloption);
}

function initialSelectedFileBox(LeftItemarray,RightItemarray){
	$("#selectedBox-selectLeft option").remove();
	$("#selectedBox-selectRight option").remove();
	var leftseloption = "";
	$.each(LeftItemarray,function(i){
		var optionValue = LeftItemarray[i].fileId+'-'+LeftItemarray[i].vocheckformfileId;
		leftseloption += '<option value="'+optionValue+'">'+LeftItemarray[i].fileName+'</option>'; 
	});
	$("#selectedBox-selectLeft").append(leftseloption);
	var rightseloption = "";
	$.each(RightItemarray,function(i){
		var optionValue = RightItemarray[i].fileId+'-'+RightItemarray[i].vocheckformfileId;
		rightseloption += '<option value="'+optionValue+'">'+RightItemarray[i].fileName+'</option>'; 
	});
	$("#selectedBox-selectRight").append(rightseloption);
}

$(function() {
		// 【>】 移動到右邊按鈕
		$('#selectedBoxadd').click(function() {
			//點選時判斷有沒有點到
			if (!$("#selectedBox-selectLeft option").is(":selected")) {
				alert("請選擇需要移動的選項")
			}
			//將選取選項刪除並移動到右方給selectright
			else {
				$('#selectedBox-selectLeft option:selected').appendTo('#selectedBox-selectRight');
			}
		});

		//【<】移動到左側按鈕
		$('#selectedBoxremove').click(function() {
			//點選時判斷有沒有點到
			if (!$("#selectedBox-selectRight option").is(":selected")) {
				alert("請選擇需要移動的選項")
			} else {
				$('#selectedBox-selectRight option:selected').appendTo('#selectedBox-selectLeft');
			}
		});

		//【>>】全部移動到右側按鈕
		$('#selectedBoxadd_all').click(function() {
			//將左側所有選項刪除並移動到右側
			$('#selectedBox-selectLeft option').appendTo('#selectedBox-selectRight');
		});

		//【<<】全部移動到左側按鈕
		$('#selectedBoxremove_all').click(function() {
			$('#selectedBox-selectRight option').appendTo('#selectedBox-selectLeft');
		});

		//雙擊左側選項
		$('#selectedBox-selectLeft').dblclick(function() {
			//將點擊選項刪除並移動到右側
			$("option:selected", this).appendTo('#selectedBox-selectRight');
		});

		//雙擊右側選項
		$('#selectedBox-selectRight').dblclick(function() {
			$("option:selected", this).appendTo('#selectedBox-selectLeft');
		});

});
	
	
	