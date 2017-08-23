<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>申請借調</title>
<script type="text/javascript" src="../legaljs/doc/docapplyBorrowFunction.js"></script>
<head>
<style>
    .MinWidth0 {
        min-width: 70px;
    }
    
    .borrowWidth{
    	min-width:150px;
    }
        
    .titleWidth{
    	min-width:15px;
    	 text-align:center;
    }
</style>
</head>
<body>

<script type="text/javascript">

$(document).ready(function() {
	
    var abDataTable=$("#applyborrowfTable").DataTable({
    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
    		"bJQueryUI":        true,
            "bAutoWidth":       false, 
            "columnDefs": [{
       		 	"searchable" : false,
        		"orderable"  : false,
                targets: '_all',
                className: 'MinWidth0 dt-center',
            }],
    		"aoColumns": [
    			{ "data": null ,"className" : "titleWidth"},
    			{ "data": "selectflag" ,"className" : "titleWidth",
                	"render": function ( data, type, full, meta ) {
                		var checkBoxString = '<input id="ckbapplyBorrow_' + full.docCode + '" type="checkbox" value=' + full.docCode + ' class="editor-active">';
                		var editString = "<div id='applyBorrowselect_" + full.docCode + "'></div>";
                		
                		return checkBoxString +editString;
                	}   
                },
                { "data": "cancelReason" , "className" : "borrowWidth" ,
                	"render": function ( data, type, full, meta ) {
                  		var returnString = '<input id="iptapplyBorrow_' +  full.docCode + '" size="15">';
                		var editString = "<div id='applyBorrowEdit_" + full.docCode + "'></div>";
                		
                		return returnString + editString;
                	}   
                },
            	{ "data": "bankName" },
    			{ "data": "prodName" },
                { "data": "caseId" },
                { "data": "debtName" },
                { "data": "ID" },
                { "data": "docCode" },
                { "data": "typeOne" },
                { "data": "typeTwo" },
                { "data": "borrowStatus", 
                	"render": function ( data, type, full, meta ) {
                		if(data == "0"){ return "申請借調"} else
                		if(data == "1"){ return "取消調卷"} else
                		if(data == "2"){ return "借出"} else
                		if(data == "3"){ return "歸還"} else
                		if(data == "4"){ return "取消借調"}	
                	}	
                },
                { "data": "courtYearInfo" },
                { "data": "sourceDocInfo" },
                { "data": "borrowReason" },
                { "data": "lawCode" },
                { "data": "O_C", 
                	"render": function ( data, type, full, meta ) {
						if(data == "O"){
							return "庫存"
						}else{
							return "退案"
						}
                	 },
                },
                { "data": "docStatus" },
                { "data": "borrowUserName" },
                { "data": "borrowDatetime" },
                { "data": "progressUserName" },
                { "data": "disProgressDatetime" }

            ],
				"fnRowCallback": function( row, data, dataIndex ) {
                
                if (data["docStatus"].trim() == "取消申請" ) {              	
                    $( row ).css( "background-color", "#80ff80" );//green  
                }
                if (data["O_C"].trim() == "已退案" ) {
                    $( row ).css( "background-color", "#ff6666" );//red 
                }
            },

    			"order" :[[1,'asc']]
    		
    });
	
    
    abDataTable.on('order.dt search.dt',
    function(){
    	abDataTable.column(0,{
    		search : 'applied',
			order  :  'applied'    		
    	}).nodes().each(function(cell, i){
    		cell.innerHTML = i + 1;
    	});
    }).draw();
	
	
    //Add By Jhih 2017-08-03 初始化下拉選項的內容
    $.ajax({
		url : '../pages/doc/borrow/docBorrowAction!initMoveDocSelectOption.action',
		type : "POST",
		dataType : 'json',
		success : function(response) {
				
			var noneSelect = "<option value=''>請選擇</option>";
			
			//委託公司
	    	law.common.selectOption("#abbankname_id", response.bankName);
			$("#abbankname_id").prepend(noneSelect);
			$( "#abbankname_id")[0].selectedIndex = 0;
		
			//申調原因
			law.common.selectOption("#abborrowreason_id", response.borrowReason);
			$("#abborrowreason_id").prepend(noneSelect);
			$( "#abborrowreason_id")[0].selectedIndex = 0;
		

		},
		error : function(xhr, ajaxOptions, thrownError) {
			alert(xhr.status);
			alert(thrownError);
		}
	});    
    
   
    
    
  //Add By Jhih 2017-08-16 一開始就顯示該申請人資料
	var abdatatable = $("#applyborrowfTable").dataTable();
	abdatatable.fnClearTable();
	var json = "";
	    
	$.ajax({			 
		url : '../pages/doc/borrow/docBorrowAction!loadborrowDocs.action',
		data : {
			'type' : "I",   
		},
		type : 'POST',
		dataType : 'json',
		success : function(response) {
			
			
		    json = response.responseLDocBorrow; 
		    abdatatable.fnClearTable();
		 	if (response.responseLDocBorrow != '') {
		 		abdatatable.fnAddData(json);
		 		$(abdatatable.fnGetData()).each(function(i){
		 			
			 		$("#applyBorrowselect_" + abdatatable.fnGetData(i).docCode).empty();
			 		$("#applyBorrowEdit_" + abdatatable.fnGetData(i).docCode).empty();
			 		$("#applyBorrowselect_" + abdatatable.fnGetData(i).docCode).append(law.doc.applyBorrowselect($(this).val(), abdataTable.fnGetData(i).docCode));
			 		$("#applyBorrowEdit_" + abdatatable.fnGetData(i).docCode).append(law.doc.applyBorrowtext($(this).val(), abdataTable.fnGetData(i).docCode));

			 	});
				
			  	
			}
		 	abDatatable.fnDraw();	

		},
		error : function(xhr, ajaxOptions, thrownError) {
			alert("error!!!");
			alert(xhr.status);
			alert(thrownError);
		}
	
	});
  });
    
</script>


<div>
	<div style="overflow: auto;margin:1px 1px 1px 1px" class="ui-widget-content">
		<table width="100%" > 
		<!--  <table border="1">--調整表格線的粗細-->
			<colgroup span= "1" width = "80"></colgroup><!-- 定義表格寬度 -->
			<colgroup span= "1" width = "80"></colgroup>
			<colgroup span= "1" width = "80"></colgroup>
			<colgroup span= "1" width = "80"></colgroup>
			<colgroup span= "1" width = "80"></colgroup>
			<colgroup span= "1" width = "80"></colgroup>
			
			<tr>
				<td><label for="labsearchabcaseId">案號     </label></td>
			    <td><input id="abcaseId" size ="10" ></input></td>
				<td><label for="labsabbankname">委託公司 </label></td>	
			    <td>	
					<select name="abbandkname" class="opts" id="abbankname_id">
  						<option value="">請選擇</option>
					</select>
				</td>
				<td><label for="labsabstoragestatus">是否在庫 </label>	</td>
			    <td>
				<select size="1" name="abstoragestatus" class="opts" id="abstoragestatus_id" >
  					<option selected value="DEFAULT">是否在庫 </option>	
  					<option value="SEL1">在庫</option>
 				 	<option value="SEL2">退案</option>
 				 </select>	
				</td>
			</tr>
			
			<tr>
				<td><label for="lababdebtName">姓名     </label></td>
			    <td><input id="abdebtname" size ="10" ></input></td>	
				<td><label for="labsabborrowreason">申調原因 </label></td>
			  	<td>
					<select name="abborrowreason" class="opts" id="abborrowreason_id">
  						<option value="">請選擇</option>
					</select>
	         	</td>
	         	<td><label for="labsabborrowstatus">文管狀態 </label>	</td>
			  	<td>
					<select name="abborrowstatus" id="abborrowstatus_id" class="opts">
  						<option selected value="DEFAULT">文管狀態</option>	
  						<option value="SEL1">調卷取消</option>
 					 	<option value="SEL2">申請借調</option>
 					 	<option value="SEL3">取消借調</option>
					</select>
	         	</td>
			</tr>
			<tr>
				<td><label for="labsabID">ID</label></td> 
			    <td><input id="absearchID" size ="10" maxlength="10"></input>
				<td><label for="labsborrowdate">申調日期 </label></td>
				<td colspan="3">
					<input id="abborrowdatebeg" size = "10"></input>  ~						
					<input id="abborrowdateend" size = "10"></input>
				</td>
			</tr>

            <tr>	
			  <td><label for="labsabdoccode">文件編號<br>(可多筆輸入)</label></td>
			  <td><input size ="20" id="abdoccode"></input></td>         		

			  <td><label for="labsabborrowUser">申請人 </label></td>
			  <td><input size ="10" id="abborrowUser_id"></input></td>
			</tr>
			<tr>
				<td></td>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id="applyborrowsearch"> 查詢 </button> 	
					<button class="ui-button ui-widget ui-corner-all" id="applyborrowprintout"> 列印明細 </button>
					<button class="ui-button ui-widget ui-corner-all" id="applyborrowcancel"> 取消借調 </button>
				</td>
			</tr>
		</table>	
		 	<div style="margin:5px 5px 5px 5px">
		<table id="applyborrowfTable" class="display" cellspacing="0" width="100%" >
		    <thead>
            <tr>
                <th></th>
                <th><input type="checkbox" name="select_all" value="1" id="select_all_id"></th>
                <th>取消申請原因</th>
                <th>委託公司</th>
                <th>產品別</th>
                <th>案號</th>
                <th>姓名</th>
                <th>ID</th>
                <th>文件編號</th>
                <th>文件類別</th>
                <th>文件項目</th>
                <th>狀態</th>
                <th>法院案號</th>
                <th>原始憑證</th>
                <th>申調原因</th>
                <th>法務編號</th>
                <th>是否退案</th>
                <th>取消申請</th>
                <th>申調人</th>
                <th>申調日期</th>
                <th>檔管處理人員</th>
                <th>處理日期</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th></th>
                <th></th>
                <th>取消申請原因</th>
                <th>委託公司</th>
                <th>產品別</th>
                <th>案號</th>
                <th>姓名</th>
                <th>ID</th>
                <th>文件編號</th>
                <th>文件類別</th>
                <th>文件項目</th>
                <th>狀態</th>
                <th>法院案號</th>
                <th>原始憑證</th>
                <th>申調原因</th>
                <th>法務編號</th>
                <th>是否退案</th>
                <th>取消申請</th>
                <th>申調人</th>
                <th>申調日期</th>
                <th>檔管處理人員</th>
                <th>處理日期</th>
            </tr>
        </tfoot>
    </table>
    <table>
		<tr>
				<td><label for="lababbatchcancelreason">大批輸入取消申請原因 </label></td>
			    <td><input id="abbatchcancelReason" size ="20" ></input></td>	
		</tr>	    
    </table>

	</div>
	</div>
</div>

</body>
</html>