<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@taglib prefix="s" uri="/struts-tags" %>

<!DOCTYPE html>
<html>
<head>
<title>歷史記錄</title>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<script type="text/javascript" src="../legaljs/doc/historyQuery.js"></script>


</head>

<body>



<script type="text/javascript">

$(document).ready(function() {
    var opt=$('#historyqueryTable').DataTable({
    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
    		"bJQueryUI": true,	
    		//"bFilter"  : false,                 //Cancel searchbar
    		//"searching": false,						//Cancel searchbar
    		"columns": [
    			{ "data": null },
                { "data": "bankname" },
    			{ "data": "prodname" },
                { "data": "caseId" },
                { "data": "name" },
                { "data": "id" },
                { "data": "docno" },
                { "data": "doctype" },
                { "data": "docitem" },
                { "data": "docstatus" },
                { "data": "courtYearInfo" },
                { "data": "sourceDocInfo" },
                { "data": "borrowReason" },
                { "data": "lawcode" },
                { "data": "borrowDate" },
                { "data": "borrowUser" },
                { "data": "procdate" },
                { "data": "procname" },
                { "data": "checkDate" },
                { "data": "checkUser" },
                { "data": "backDate" },
                { "data": "backUser" },
                { "data": "lastproctime" },
                { "data": "lastprocname" },
                { "data": "correct" },
                { "data": "department" },
                { "data": "employee_tel" }
            ],
            	"columnDefs" : [{                             //增加索引
           		 	"searchable" : false,
            		"orderable"  : false,
           		 	"targets"    : 0
           		 
           		 }],
    			"order" :[[1,'asc']]
    });
	
    
    opt.on('order.dt search.dt',
    function(){
    	opt.column(0,{
    		search : 'applied',
			order  :  'applied'    		
    	}).nodes().each(function(cell, i){
    		cell.innerHTML = i + 1;
    	});
    }).draw();
    
   
    
    
  });
    
</script>

<div>
	<div style="overflow: auto;margin:1px 1px 1px 1px" class="ui-widget-content">
		<table width="100%"> 
		<!--  <table border="1">--調整表格線的粗細-->
			<colgroup span= "1" width = "100"></colgroup><!-- 定義表格寬度 -->
			<colgroup span= "1" width = "80"></colgroup>
			<colgroup span= "1" width = "80"></colgroup>
			<colgroup span= "1" width = "80"></colgroup>
			<colgroup span= "1" width = "120"></colgroup>
			
			
			<tr>
				<td>
			    	<label for="labsearchcaseId">案號     </label>
			    </td>
			    <td>
					<input id="hqsearchcaseId" size ="10" ></input>
				</td>

				<td rowspan = "2">	
				<label for="labsdocstatus">狀態(複選) </label>
				</td>
			    <td rowspan ="2">
				<select size="3" name="docstatus" multiple  class="opts" id="docstatusid" >
  					<option selected value="DEFAULT">文管狀態</option>	
  					<option value="SEL1">在庫</option>
 				 	<option value="SEL2">預借</option>
 				 	<option value="SEL3">申請調件</option>
 				 	<option value="SEL4">調件待簽收</option>
 				 	<option value="SEL5">調件已簽收</option>
 				 	<option value="SEL6">在法院</option>
 				 	<option value="SEL7">換發債證</option>
 				 	<option value="SEL8">地院寄給業主</option>
 				 	<option value="SEL9">法院沒入</option>
 				 	<option value="SEL10">預備退件(業主)</option>
 				 	<option value="SEL11">退件(業主)</option>
 				    <option value="SEL12">債務人結清取回+在庫+(借用)申調中</option>
 				 </select>	
				</td>

			</tr>
			
			<tr>
				<td>
			    	<label for="labsearchdebtorName">姓名     </label>
			    </td>
			    <td>	
					<input id="hqsearchdebtorName" size ="10" ></input>
				</td>
				 <!-- &nbsp:不會被間斷的空白 -->
			</tr>
			<tr>
				<td> 
			    	<label for="labsearchdebtorID">ID</label>
			    </td>
			    <td>	
					<input id="hqsearchdebtorID" size ="10" ></input>
				</td>
				<td rowspan ="2">
					<label for="labsdoctype">文件類別 </label>
					
				</td>
				<td rowspan ="2">	
					<select size="3" name="doctype" class="opts">
  					<option selected value="DEFAULT">文件類別</option>	
  					<option value="SEL1">01執行名義</option>
  					<option value="SEL2">02法院文</option>
 				 	<option value="SEL3">03法院文(不動產)</option>
 				 	<option value="SEL4">04法院文(金錢債權)</option>
 				 	<option value="SEL5">05法院文(取執)</option>
 				 	<option value="SEL6">06債權文件</option>
 				 	<option value="SEL7">07本票</option>
 				 	<option value="SEL8">08債讓</option>
 				 	<option value="SEL9">09券宗</option>
 				 	<option value="SEL10">10其他</option>
					</select>
				</td>
				

			</tr>

			<tr>
			  <td>	
			 	<label for="labsapplyrsn">申調原因: </label>
			  </td>
			  <td>
				<select name="applyrsn" class="opts">
  					<option selected value="DEFAULT">退件(業主)</option>	
  					<option value="SEL1">開庭</option>
 				 	<option value="SEL2">一般借閱</option>
 				 	<option value="SEL3"></option>
				</select>
	          </td>
	        
	         </tr>  
	         <tr>	
			  <td>
				<label for="labsearchdocNo">文件編號<br>(可多筆輸入)</label>
			  </td>
			  <td>
				<input size ="20" id="hqsearchdocNo"></input>
			  </td>
			  <td rowspan ="2">	
					<label for="labsdocitem">文件項目 </label>
			 </td>
				<td rowspan ="2">	
					<select size="3" name="docitem" class="opts">
  						<option selected value="DEFAULT">文件項目(ALL)</option>	
  						<option value="SEL1">債權憑證</option>
	 				 	<option value="SEL2">支付命令</option>
 				 		<option value="SEL3">支付命令確證</option>
 					 	<option value="SEL4">本票裁定</option>
 					 	<option value="SEL5">本票裁定確證</option>
 					 	<option value="SEL6">判決</option>
 					 	<option value="SEL7">判決確證</option>
	 				 	<option value="SEL8">和解筆錄</option>
 				 		<option value="SEL9">調解筆錄</option>
 					 	<option value="SEL10">拍賣抵押裁定</option>
 				 		<option value="SEL11">拍賣抵押裁定-確證</option>
 				 		<option value="SEL12">假扣押裁定</option>
 					 	<option value="SEL13">認可狀</option>
 					 	<option value="SEL14">認可狀確證</option>
 					 	<option value="SEL15">支付命令(附件)</option>
 					 	<option value="SEL16">支付命令(附表)</option>
	 				 	<option value="SEL17">支付命令(續行表)</option>
 				 		<option value="SEL18">本票裁定(附表)</option>
 					 	<option value="SEL19">本票裁定(續行表)</option>
 					 	<option value="SEL20">判決(附表)</option>
 					 	<option value="SEL21">判決(續行表)</option>
 					 	<option value="SEL22">和解筆錄(附表)</option>
	 				 	<option value="SEL23">和解筆錄(續行表)</option>
 				 		<option value="SEL24">拍賣抵押物裁定(附表)</option>
 					 	<option value="SEL25">拍賣抵押物裁定(續行表)</option>
 					 	<option value="SEL26">假扣押裁定(附表)</option>
 					 	<option value="SEL27">假扣押裁定(續行表)</option>
 					 	<option value="SEL28">債權憑證(附表)</option>
	 				 	<option value="SEL29">債權憑證(續行表)</option>
 				 		<option value="SEL30">認可狀(附表)</option>
 					 	<option value="SEL31">認可狀(續行表)</option>
 					 	<option value="SEL32">調解筆錄(附表)</option>
 					 	<option value="SEL33">調解筆錄(續行表)</option>
 					 	<option value="SEL34">更正裁定</option>
	 				 	<option value="SEL35">清算不免責裁定</option>
 				 		<option value="SEL36">拍賣</option>
 				 		<option value="SEL37">全卷影像</option>
 				 		<option value="SEL38">測量</option>
 				 		<option value="SEL39">鑑價通知</option>
 				 		<option value="SEL40">詢價通知</option>
 				 		<option value="SEL41">拍賣登報</option>
 				 		<option value="SEL42">拍賣公告</option>
 				 		<option value="SEL43">領分配款</option>
 				 		<option value="SEL44">扣押命令</option>
 				 		<option value="SEL45">收取命令</option>
 				 		<option value="SEL46">公示送達</option>
 				 		<option value="SEL47">第三人異議</option>
 					 	<option value="SEL48">併案通知</option>
 				 		<option value="SEL49">其他法律行動</option>
 				 		<option value="SEL50">移轉命令</option>
 				 		<option value="SEL51">移轉命令(扣移)</option>
 					 	<option value="SEL52">通知陳報債權</option>
 					 	<option value="SEL53">囑託查封通知</option>
 					 	<option value="SEL54">塗銷查封通知函</option>
 					 	<option value="SEL55">提存所通知</option>
 					 	<option value="SEL56">實行分配</option>
 					 	<option value="SEL57">縣市政府通知</option>
 					 	<option value="SEL58">稅捐處通知</option>
 					 	<option value="SEL59">補正通知</option>
 					 	<option value="SEL60">退還原繳文件</option>
 					 	<option value="SEL61">電匯通知</option>
 					 	<option value="SEL62">支命異議</option>
 					 	<option value="SEL63">查封通知函</option>
 					 	<option value="SEL64">更生執行名義</option>
 					 	<option value="SEL65">開庭通知</option>
 					 	<option value="SEL66">民事裁定</option>
 					 	<option value="SEL67">公送登報</option>
	 				 	<option value="SEL68">通知公送登報</option>
 					 	<option value="SEL69">民事執行處通知</option>
 					 	<option value="SEL70">民事庭(簡易)通知</option>
 				 		<option value="SEL71">刑事庭通知</option>
 					 	<option value="SEL72">檢察署通知</option>
 					 	<option value="SEL73">地政機關通知</option>
 					 	<option value="SEL74">戶政機關通知</option>
 					 	<option value="SEL75">法務部行政執行署通知</option>
	 				 	<option value="SEL76">申請書</option>
 				 		<option value="SEL77">約定書</option>
 					 	<option value="SEL78">申請書(約定書)</option>
 					 	<option value="SEL79">申請書(借據)</option>
 					 	<option value="SEL80">契約書</option>
 					 	<option value="SEL81">借據</option>
	 				 	<option value="SEL82">他項權利證明書</option>
	 				 	<option value="SEL83">抵押權移轉變更契約書</option>
 					 	<option value="SEL84">抵押權設定契約書</option>
 					 	<option value="SEL85">其他約定事項</option>
 				 		<option value="SEL86">股票</option>
 					 	<option value="SEL87">其他</option>
 					 	<option value="SEL88">本票</option>
 					 	<option value="SEL89">申請書(本票)</option>
 					 	<option value="SEL90">債權讓與證明書</option>
 					 	<option value="SEL91">債權讓與通知函(回執)</option>
 				 		<option value="SEL92">債權讓與通知函(退信)</option>
 					 	<option value="SEL93">卷宗</option>
 					 	<option value="SEL94">存證信函</option>
 					 	<option value="SEL95">存證信函(回執)</option>
 					 	<option value="SEL96">存證信函(退信)</option>
	 				 	<option value="SEL97">公文</option>
 				 		<option value="SEL98">命令</option>
 					 	<option value="SEL99">收據</option>
 					 	<option value="SEL100">繳費單</option>
 					 	<option value="SEL101">帳務畫面</option>
 					 	<option value="SEL102">帳單</option>
	 				 	<option value="SEL103">債權憑證</option>
 				 		<option value="SEL104">支付命令</option>
 				 		<option value="SEL105">支付命令確證</option>
 				 		<option value="SEL106">本票裁定</option>
 				 		<option value="SEL107">本票裁定確證</option>
 				 		<option value="SEL108">判決</option>
 				 		<option value="SEL109">判決確證</option>
 				 		<option value="SEL110">和解筆錄</option>
 				 		<option value="SEL111">調解筆錄</option>
 				 		<option value="SEL112">拍賣抵押物裁定</option>
 				 		<option value="SEL113">拍賣抵押物裁定-確證</option>
 				 		<option value="SEL114">假扣押裁定</option>
 				 		<option value="SEL115">認可狀</option>
 				 		<option value="SEL116">認可狀確證</option>
					</select>
				</td>
			  
			  

			</tr>
			
			<tr>
				<td>
					<label for="labsapptcom">委託公司 </label>
				</td>
			    <td>	
					<select name="apptcom" class="opts">
  						<option selected value="DEFAULT">永豐銀行</option>	
  						<option value="SEL1">遠東銀行</option>
  						<option value="SEL2">台新銀行</option>
 				 		<option value="SEL3"></option>
					</select>
				</td>

			</tr>
			<tr>
				<td>	
					<label for="labsprodtype">產品別 </label>
				</td>
			    <td>	
					<select name="prodtype" class="opts">
  						<option selected value="DEFAULT">產品別</option>
  						<option value="SEL1">信用卡</option>	
  						<option value="SEL2">房貸</option>
 				 		<option value="SEL3">信貸</option>
 				 		<option value="SEL4">車貸</option>
 				 	</select>
				</td>
				<td>
					<label for="labsreceivedate">收文日期 </label>
					
				</td>
				<td>
					<input id="hqsearchreceivebegd" size = "10"></input>  ~
					<input id="hqsearchreceiveendd" size = "10"></input>
				</td>	
				
			</tr>
			<tr>
			  <td rowspan ="2">
				<label for="labsearchasignname" size= "10">簽收人</label>
			  </td>	
			  <td rowspan ="2">
				<select size="2" name="asignname" class="opts"  id= "asignnameid">
  					<option></option>
  				 	<option selected value="DEFAULT">簽收人</option>	
  					<option value="SEL1">王小明</option>
 				 	<option value="SEL2"></option>
 				 	<option value="SEL3"></option>
				 
 				 </select>	
				</td>	
				<td>
					<label for="labsprocdate">處理日期 </label>
				</td>
				<td>
					<input id="hqsearchprocbegd" size = "10"></input>  ~								
					<input id="hqsearchprocendd" size = "10"></input>
				</td>
				<td  rowspan ="2">
					<button class="ui-button ui-widget ui-corner-all" id="hqsearch"> 查詢 </button> 	
					<button class="ui-button ui-widget ui-corner-all" id="hqexport"> 匯出EXCEL </button>
				</td>
				
			</tr>
			<tr>

				<td>
					<label for="labasigndate">簽收日期 </label>
			 	</td>
			    <td>
					<input id="hqsearchasignbegd" size = "10"></input>  ~									
					<input id="hqsearchasignendd" size = "10"></input>
			    </td>
			    

				
			</tr>
			<tr>
				<td>
				</td>
				<td>
				</td>
				<td>
					<label for="labsapplydate">申調日期 </label>
					
				</td>
				<td>
					<input id="hqsearchapplybegd" size = "10"></input>  ~						
					<input id="hqsearchapplyendd" size = "10"></input>
				</td>
				
			</tr>

		</table>

 	<div style="margin:5px 5px 5px 5px">
		<table id="historyqueryTable" class="display" cellspacing="0" width="100%" >
		    <thead>
            <tr>
                <th></th>
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
                <th>申調日期</th>
                <th>申調人員</th>
                <th>處理日期</th>
                <th>處理人員</th>
                <th>簽收日期</th>
                <th>簽收人</th>
                <th>退件日期</th>
                <th>退件人員</th>
                <th>最後作業<br>日期時間</th>
                <th>最後作業人員</th>
                <th>補正</th>
                <th>業務單位</th>
                <th>業務人員/分機</th>
            </tr>
        </thead>
        <tfoot>
            <tr>
                <th></th>
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
                <th>申調日期</th>
                <th>申調人員</th>
                <th>處理日期</th>
                <th>處理人員</th>
                <th>簽收日期</th>
                <th>簽收人</th>
                <th>退件日期</th>
                <th>退件人員</th>
                <th>最後作業日期時間</th>
                <th>最後作業人員</th>
                <th>補正</th>
                <th>業務單位</th>
                <th>業務人員/分機</th>
            </tr>
        </tfoot>
    </table>

	</div>
</div> 


</body>

</html>
