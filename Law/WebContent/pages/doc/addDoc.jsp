<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-05-12 文管新增的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docaddDoc.js"></script>
<script type="text/javascript" src="../legaljs/doc/adddoc/docCentitlement.js"></script>
<script type="text/javascript" src="../legaljs/doc/adddoc/docCashierCheck.js"></script>
<script type="text/javascript" src="../legaljs/doc/adddoc/docDebts.js"></script>
<script type="text/javascript" src="../legaljs/doc/adddoc/docClaimsDoc.js"></script>
<script type="text/javascript" src="../legaljs/doc/adddoc/docFile.js"></script>
<script type="text/javascript" src="../legaljs/doc/adddoc/docOther.js"></script>
<head>
<title>文管新增</title>
</head>
<body>
	<script type="text/javascript">
		$(document).ready(function() {
			
			var opt={
		    		"sDom": '<"top">rt<"bottom"><"clear">',
		    		"bSort": false,
		    		"bPaginate" : false,
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		    		"columns": [
		                { "data": "Bank_alias" },
		                { "data": "Case_ID" },
		                { "data": "name" },
		                { "data": "ID" },
		                { "data": "PriDebt_amount" },
		                { "data": "ctCase_d" },
		                { "data": "O_or_C",
		                	"render": function ( data, type, full, meta ) {
								if(data == "O"){
									return "庫存"
								}else{
									return "退案"
								}
		                	}   
		                }
		            ]
		            };
		    $("#caseInfoTable").dataTable(opt);

			var json = "", relajson = "";
		    var datatable = "";
			datatable = $("#caseInfoTable").dataTable();
		    datatable.fnClearTable();
			$.ajax({
				url : '../pages/doc/documents/docAction!loadCaseInfo.action',
				data : {
					'iptsearchcaseId' : <%=request.getParameter("caseId")%>
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					json = response.data;
					datatable.fnClearTable();
					if (response.data != '') {
						datatable.fnAddData(json);
						
						// Add By Jia 2017-06-22 初始化表單，若是新表單給予一個新的ID
						$.ajax({
							url : '../pages/doc/documents/docAction!initaddDoc.action',
							data : {
								'caseId' : <%=request.getParameter("caseId")%>
							},
							type : "POST",
							dataType : 'json',
							success : function(response) {
								law.addDoc.docInfoId = response.docInfoId;
							},
							error : function(xhr, ajaxOptions, thrownError) {
								alert(xhr.status);
								alert(thrownError);
							}
						});
						
					}
					datatable.fnDraw();
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
		    
			// Add By Jia 2017-06-27 抓出該案件相對人資料
			$.ajax({
				url : '../pages/doc/documents/docAction!loadCaseRela.action',
				data : {
					'iptsearchcaseId' : <%=request.getParameter("caseId")%>
				},
				type : "POST",
				dataType : 'json',
				success : function(response) {
					relajson = response.Reladata;
					law.addDoc.rela = relajson;

					// 執行名義相對人初始化
					law.common.selectRelaOption("#iptcentitlementRelationPerson_0", law.addDoc.rela);
					law.addDoc.centitlement.centitlementRelaNum[0] = 0;
					//補正下拉選項
					law.common.selectRelaOption("#iptcentitlementTranscriptsRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementCoOwnedTranscriptsRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementMortgageeTranscriptsRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementLawTranscriptsRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementHeirTranscriptsRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementDirtTranscriptsRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementBuiltTranscriptsRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementDistributionRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementThingThirdRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementThingDebtRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementCoOwnedRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementDebtDocRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementDetailRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementFileRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementDebtContinueRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementCashierCheckRelationPerson_0", law.addDoc.rela);
					law.common.selectRelaOption("#iptcentitlementOtherRelationPerson_0", law.addDoc.rela);
					law.addDoc.centitlement.centitlementTranscriptsRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementCoOwnedTranscriptsRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementMortgageeTranscriptsRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementLawTranscriptsRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementHeirTranscriptsRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementDirtTranscriptsRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementBuiltTranscriptsRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementDistributionRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementThingThirdRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementThingDebtRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementCoOwnedRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementDebtDocRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementDetailRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementFileRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementDebtContinueRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementCashierCheckRelaNum[0] = 0;
					law.addDoc.centitlement.centitlementOtherRelaNum[0] = 0;
					
					// 本票相對人初始化
					law.common.selectRelaOption("#iptcashierCheckRelationPerson_0", law.addDoc.rela);
					law.addDoc.cashierCheck.cashierCheckRelaNum[0] = 0;
					
					// 債讓相對人初始化
					law.common.selectRelaOption("#iptdebtsRelationPerson_0", law.addDoc.rela);
					law.addDoc.debts.debtsRelaNum[0] = 0;
					
					// 債權文件相對人初始化
					law.common.selectRelaOption("#iptclaimsDocRelationPerson_0", law.addDoc.rela);
					law.addDoc.claimsDoc.claimsDocRelaNum[0] = 0;
					
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			
		    //Add By Jia 2017-06-07 初始化下拉選項的內容
		    $.ajax({
				url : '../pages/doc/documents/docAction!initSelectOption.action',
				type : "POST",
				dataType : 'json',
				success : function(response) {
					var centitlement = law.addDoc.centitlement,
						cashierCheck = law.addDoc.cashierCheck,
						debts = law.addDoc.debts,
						claimsDoc = law.addDoc.claimsDoc,
						file = law.addDoc.file,
						other = law.addDoc.other;
									
					// 將當前caseId 存入
					law.addDoc.caseId =  <%=request.getParameter("caseId")%>;

					// =====執行名義start=====
					law.addDoc.centitlement.initcentitlementsubtab(response.nowDate, response.DocStatus, response.TypeOne, 
							response.centitlementTypeTwo, response.BankName, response.OldBankName, 
							response.CourtYearCourt, response.SourceDoc);
					//設定收文日期為當日
					$("#iptcentitlementReceivedDate").val(response.nowDate);
					//執行名義下拉選項
					law.common.selectOption("#iptcentitlementDocStatus", centitlement.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
					law.common.selectOption("#iptcentitlementTypeOne", centitlement.TypeOne, "8aa2e72a5c812434015c812f07cd0001");
					law.common.selectOption("#iptcentitlementTypeTwo", centitlement.TypeTwo);
					law.common.selectOption("#iptcentitlementBankName", centitlement.BankName);
					law.common.selectOption("#iptcentitlementOldBankName", centitlement.OldBankName);
					law.common.selectOption("#iptcentitlementCourtYearCourt", centitlement.CourtYearCourt);
					law.common.selectOption("#iptcentitlementSourceDoc_0", centitlement.SourceDoc);
					law.common.selectOption("#iptcentitlementSourceDocCourtYearCourt_0", centitlement.CourtYearCourt);
					law.addDoc.centitlement.centitlementSourceDocNum[0] = 0;
					// =====執行名義end=====
					
					// =====本票start=====
					law.addDoc.cashierCheck.initcashierChecksubtab(response.nowDate, response.DocStatus, response.TypeOne, 
							response.cashierCheckTypeTwo, response.BankName, response.OldBankName);
					//設定收文日期為當日
					$("#iptcashierCheckReceivedDate").val(response.nowDate);
					//債讓下拉選項
					law.common.selectOption("#iptcashierCheckDocStatus", cashierCheck.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
					law.common.selectOption("#iptcashierCheckTypeOne", cashierCheck.TypeOne, "8aa2e72a5c812434015c812fc56a0007");
					law.common.selectOption("#iptcashierCheckTypeTwo", cashierCheck.TypeTwo);
					law.common.selectOption("#iptcashierCheckBankName", cashierCheck.BankName);
					law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.OldBankName);
					// =====本票end=====
					
					// =====債讓start=====
					law.addDoc.debts.initdebtssubtab(response.nowDate, response.DocStatus, response.TypeOne, 
							response.debtsTypeTwo, response.BankName, response.OldBankName, response.CourtYearCourt);
					//設定收文日期為當日
					$("#iptdebtsReceivedDate").val(response.nowDate);
					//債讓下拉選項
					law.common.selectOption("#iptdebtsDocStatus", debts.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
					law.common.selectOption("#iptdebtsTypeOne", debts.TypeOne, "8aa2e72a5c812434015c81303cbf0008");
					law.common.selectOption("#iptdebtsTypeTwo", debts.TypeTwo);
					law.common.selectOption("#iptdebtsBankName", debts.BankName);
					law.common.selectOption("#iptdebtsOldBankName", debts.OldBankName);
					law.common.selectOption("#iptdebtsCourtYearCourt", debts.CourtYearCourt);
					// =====債讓end=====
						
					// =====債權文件start=====
					law.addDoc.claimsDoc.initclaimsDocsubtab(response.nowDate, response.DocStatus, response.TypeOne, 
							response.claimDocTypeTwo, response.BankName, response.OldBankName);
					//設定收文日期為當日
					$("#iptclaimsDocReceivedDate").val(response.nowDate);
					//債權文件下拉選項
					law.common.selectOption("#iptclaimsDocDocStatus", claimsDoc.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
					law.common.selectOption("#iptclaimsDocTypeOne", claimsDoc.TypeOne, "8aa2e72a5c812434015c812fa6890006");
					law.common.selectOption("#iptclaimsDocTypeTwo", claimsDoc.TypeTwo);
					law.common.selectOption("#iptclaimsDocBankName", claimsDoc.BankName);
					law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.OldBankName);
					// =====債權文件end=====
						
					// =====卷宗start=====
					law.addDoc.file.initfilesubtab(response.nowDate, response.DocStatus, response.TypeOne, response.fileTypeTwo, response.BankName);
					//設定收文日期為當日
					$("#iptfileReceivedDate").val(response.nowDate);
					//卷宗下拉選項
					law.common.selectOption("#iptfileDocStatus", file.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
					law.common.selectOption("#iptfileTypeOne", file.TypeOne, "8aa2e72a5c812434015c813055070009");
					law.common.selectOption("#iptfileTypeTwo", file.TypeTwo);
					law.common.selectOption("#iptfileBankName", file.BankName);
					// =====卷宗end=====
					
					// =====其他start=====
					// 初始化其他選項
					law.addDoc.other.initothersubtab(response.nowDate, response.DocStatus, response.TypeOne, response.otherTypeTwo, response.BankName);

					//設定收文日期為當日
					$("#iptotherReceivedDate").val(response.nowDate);
					//其他下拉選項
					law.common.selectOption("#iptotherDocStatus", other.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001");
					law.common.selectOption("#iptotherTypeOne", other.TypeOne, "8aa2e72a5c812434015c81307418000a");
					law.common.selectOption("#iptotherTypeTwo", other.TypeTwo);
					law.common.selectOption("#iptotherBankName", other.BankName);	
					// =====其他end=====
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});
			
		    var $slave = $("#subtabs").tabs();
		});
	</script>
<div>
	
　<div style="margin:5px 5px 5px 5px">
		<table id="caseInfoTable"  class="display" cellspacing="0" width="100%">
		    <thead>
            <tr>
                <th>委託公司</th>
                <th>案號</th>
                <th>債務人</th>
                <th>ID</th>
                <th>委託金額</th>
                <th>委託日期</th>
                <th>庫存或退案</th>
            </tr>
        </thead>
    </table>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		<table>
			<tr>
				<td>
					<button class="ui-button ui-widget ui-corner-all" id ="btnsaveaddDoc">
					    <span class="ui-icon ui-icon-gear"></span> 儲存
					</button>
					<button class="ui-button ui-widget ui-corner-all" id ="btnqueryCekcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 連結到本案文管系統
				  	</button>
				  	<button class="ui-button ui-widget ui-corner-all" id ="btndeleteCekcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 連結到法務申請
				  	</button>
				</td>
			</tr>
		</table>
	</div>
	
	<div>
	<input type="checkbox" name="docType" value="all" id="ckbaddDocAll" checked>全選
	<input type="checkbox" name="docType" value="entitlementForeclosure" id="ckbaddDocentitlementForeclosure">執行名義
	<input type="checkbox" name="docType" value="courtDoc" id="ckbaddDoccourtDoc">法院文
	<input type="checkbox" name="docType" value="cashierCheck" id="ckbaddDoccashierCheck">本票
	<input type="checkbox" name="docType" value="debts" id="ckbaddDocdebts">債讓
	<input type="checkbox" name="docType" value="claimsDoc" id="ckbaddDocclaimsDoc">債權文件
	<input type="checkbox" name="docType" value="file" id="ckbaddDocfile">卷宗
	<input type="checkbox" name="docType" value="other" id="ckbaddDocother">其它
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocentitlementForeclosure">
	執行名義 <img alt="新增執行名義" src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementsubtab()">

        <div id="censubtabs">
          <ul>
            <li><a href="#censubtabs-0">執行名義</a></li>
          </ul>
          <div id="censubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>共用案號</label></td>
					<td><input id="iptcentitlementShareCaseId_0"></input></td>
					<td><input id="iptcentitlementShareCaseId_1"></input></td>
					<td><input id="iptcentitlementShareCaseId_2"></input></td>
					<td><input id="iptcentitlementShareCaseId_3"></input></td>
				</tr>
			</table>
			<table>
           	 	<tr>
					<td><input type="radio" name="centitlementShadow" value="all" id="rdocentitlementShadow" checked>影本</td>
					<td><input type="radio" name="centitlementShadow" value="all" id="rdocentitlementShadowBank" >業主收文僅提供影本</td>
					<td><label>文件狀態</label></td>
					<td><select id="iptcentitlementDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptcentitlementReceivedDate" ></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptcentitlementBankDate" ></input></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><select id="iptcentitlementTypeOne" disabled ><option value="">請選擇</option></select></td>
					<td><label>文件項目</label></td>
					<td><select id="iptcentitlementTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptcentitlementBankName"><option value="">請選擇</option></select></td>
					<td><label>原債權人</label></td>
					<td><select id="iptcentitlementOldBankName"><option value="">請選擇</option></select></td>
				</tr>
				</table>
			<table>
				<tr id="iptcentitlementRelationPersonTr">
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementRelaTd(0)"></td>
				</tr>
			</table>
			<table>
				<tr bgcolor="#FFEBCD" >
					<td><label>法院年字案股</label></td>
					<td><select id="iptcentitlementCourtYearCourt"><option value="">請選擇</option></select></td>
					<td><label>年度</label></td>
					<td><input id="iptcentitlementCourtYearYear" ></input></td>
					<td><label>字</label></td>
					<td><input id="iptcentitlementCourtYearTxt" ></input></td>
					<td><label>股別</label></td>
					<td><input id="iptcentitlementCourtYearShare" ></input></td>
					<td><label>案號</label></td>
					<td><input id="iptcentitlementCourtYearCaseId" ></input></td>
				</tr>
			</table>
			<table id="tcentitlementSourceDoc">
				<tr>
					<td><label>原始憑證</label></td>
					<td><select id="iptcentitlementSourceDoc_0"><option value="">請選擇</option></select>
					<select id="iptcentitlementSourceDocCourtYearCourt_0"><option value="">請選擇</option></select></td>
					<td><label>年度</label></td>
					<td><input id="iptcentitlementSourceDocCourtYearYear_0" ></input></td>
					<td><label>字</label></td>
					<td><input id="iptcentitlementSourceDocCourtYearTxt_0" ></input></td>
					<td><label>股別</label></td>
					<td><input id="iptcentitlementSourceDocCourtYearShare_0" ></input></td>
					<td><label>案號</label></td>
					<td><input id="iptcentitlementSourceDocCourtYearCaseId_0" ></input><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementSourceDocT(0)"></td>
				</tr>
			</table>
			<table>
				<tr>
					<td><label>發文日期</label></td>
					<td><input id="iptcentitlementSendDate" ></input></td>
					<td><label>最近執行日期</label></td>
					<td><input id="iptcentitlementNewSendDate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptcentitlementRemark" ></input></td>
				</tr>
           	 </table>
			<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
           	 <table>
           	 	<tr bgcolor="#90EE90"><td style="font-weight:bold;" align="center">補正</td></tr>
           	 	<tr>
           	 		<td>
           	 			<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
		           	 		<div>
								<input type="checkbox" name="ckbcentitlement" value="all" id="ckbcentitlementAll" checked>全選
								<input type="checkbox" name="ckbcentitlement" value="transcripts" id="ckbcentitlementTranscripts">戶謄
								<input type="checkbox" name="ckbcentitlement" value="coOwnedTranscripts" id="ckbcentitlementCoOwnedTranscripts">共有人戶謄
								<input type="checkbox" name="ckbcentitlement" value="mortgageeTranscripts" id="ckbcentitlementMortgageeTranscripts">抵押權人戶謄
								<input type="checkbox" name="ckbcentitlement" value="lawTranscripts" id="ckbcentitlementLawTranscripts">法代戶謄
								<input type="checkbox" name="ckbcentitlement" value="heirTranscripts" id="ckbcentitlementHeirTranscripts">繼承人戶謄
								<input type="checkbox" name="ckbcentitlement" value="dirtTranscripts" id="ckbcentitlementDirtTranscripts">土謄
								<input type="checkbox" name="ckbcentitlement" value="builtTranscripts" id="ckbcentitlementBuiltTranscripts">建謄
								<input type="checkbox" name="ckbcentitlement" value="distribution" id="ckbcentitlementDistribution">分配表
								<input type="checkbox" name="ckbcentitlement" value="thingThird" id="ckbcentitlementThingThird">事項表(第三人)
								<input type="checkbox" name="ckbcentitlement" value="thingDebt" id="ckbcentitlementThingDebt">事項表(債權人)
								<input type="checkbox" name="ckbcentitlement" value="coOwned" id="ckbcentitlementCoOwned">共有人名冊
								<input type="checkbox" name="ckbcentitlement" value="debtDoc" id="ckbcentitlementDebtDoc">債權文件
								<input type="checkbox" name="ckbcentitlement" value="detail" id="ckbcentitlementDetail">帳務明細
								<input type="checkbox" name="ckbcentitlement" value="file" id="ckbcentitlementFile">執名附件
								<input type="checkbox" name="ckbcentitlement" value="debtContinue" id="ckbcentitlementDebtContinue">債證續行表
							</div>
							<div>
								<input type="checkbox" name="ckbcentitlement" value="cashierCheck" id="ckbcentitlementCashierCheck">本票
								<input type="checkbox" name="ckbcentitlement" value="other" id="ckbcentitlementOther">其它
							</div>
						</div>
					</td>
           	 	</tr>
           	 </table>
           	 <table>
           	 	<tr id="trcentitlementTranscripts">
           	 		<td><input type="checkbox" name="namecentitlementTranscriptsSub" value="transcripts" id="ckbcentitlementTranscriptsSub">戶謄</td>
           	 		<td><input id="iptcentitlementTranscriptsDays" ></input></td>
           	 		<td><label>日內</label></td>
           	 		<td><label>備註</label></td>
					<td><input id="iptcentitlementTranscriptsRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementTranscriptsRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementTranscriptsRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementCoOwnedTranscripts">
           	 		<td><input type="checkbox" name="namecentitlementCoOwnedTranscriptsSub" value="transcripts" id="ckbcentitlementCoOwnedTranscriptsSub">共有人戶謄</td>
					<td><input id="iptcentitlementCoOwnedTranscriptsDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementCoOwnedTranscriptsRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementCoOwnedTranscriptsRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementCoOwnedTranscriptsRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementMortgageeTranscripts">
           	 		<td><input type="checkbox" name="namecentitlementMortgageeTranscriptsSub" value="transcripts" id="ckbcentitlementMortgageeTranscriptsSub">抵押權人戶謄</td>
					<td><input id="iptcentitlementMortgageeTranscriptsDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementMortgageeTranscriptsRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementMortgageeTranscriptsRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementMortgageeTranscriptsRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementLawTranscripts">
           	 		<td><input type="checkbox" name="namecentitlementLawTranscriptsSub" value="transcripts" id="ckbcentitlementLawTranscriptsSub">法代戶謄</td>
					<td><input id="iptcentitlementLawTranscriptsDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementLawTranscriptsRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementLawTranscriptsRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementLawTranscriptsRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementHeirTranscripts">
           	 		<td><input type="checkbox" name="namecentitlementHeirTranscriptsSub" value="transcripts" id="ckbcentitlementHeirTranscriptsSub">繼承人戶謄</td>
					<td><input id="iptcentitlementHeirTranscriptsDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementHeirTranscriptsRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementHeirTranscriptsRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementHeirTranscriptsRelaTd(0)"></td>
           	 	</tr>
        	 	<tr id="trcentitlementDirtTranscripts">
           	 		<td><input type="checkbox" name="namecentitlementDirtTranscriptsSub" value="transcripts" id="ckbcentitlementDirtTranscriptsSub">土謄</td>
					<td><input id="iptcentitlementDirtTranscriptsDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementDirtTranscriptsRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementDirtTranscriptsRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementDirtTranscriptsRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementBuiltTranscripts">
           	 		<td><input type="checkbox" name="namecentitlementBuiltTranscripts" value="transcripts" id="ckbcentitlementBuiltTranscriptsSub">建謄</td>
					<td><input id="iptcentitlementBuiltTranscriptsDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementBuiltTranscriptsRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementBuiltTranscriptsRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementBuiltTranscriptsRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementDistribution">
           	 		<td><input type="checkbox" name="namecentitlementDistributionSub" value="transcripts" id="ckbcentitlementDistributionSub">分配表</td>
					<td><input id="iptcentitlementDistributionDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementDistributionRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementDistributionRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementDistributionRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementThingThird">
           	 		<td><input type="checkbox" name="namecentitlementThingThirdSub" value="transcripts" id="ckbcentitlementThingThirdSub">事項表(第三人)</td>
					<td><input id="iptcentitlementThingThirdDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementThingThirdRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementThingThirdRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementThingThirdRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementThingDebt">
           	 		<td><input type="checkbox" name="namecentitlementThingDebtSub" value="transcripts" id="ckbcentitlementThingDebtSub">事項表(債權人)</td>
					<td><input id="iptcentitlementThingDebtDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementThingDebtRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementThingDebtRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementThingDebtRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementCoOwned">
           	 		<td><input type="checkbox" name="namecentitlementCoOwnedSub" value="transcripts" id="ckbcentitlementCoOwnedSub">共有人名冊</td>
					<td><input id="iptcentitlementCoOwnedDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementCoOwnedRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementCoOwnedRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementCoOwnedRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementDebtDoc">
           	 		<td><input type="checkbox" name="namecentitlementDebtDocSub" value="transcripts" id="ckbcentitlementDebtDocSub">債權文件</td>
					<td><input id="iptcentitlementDebtDocDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementDebtDocRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementDebtDocRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementDebtDocRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementDetail">
           	 		<td><input type="checkbox" name="namecentitlementDetailSub" value="transcripts" id="ckbcentitlementDetailSub">帳務明細</td>
					<td><input id="iptcentitlementDetailDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementDetailRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementDetailRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementDetailRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementFile">
           	 		<td><input type="checkbox" name="namecentitlementFileSub" value="transcripts" id="ckbcentitlementFileSub">執名附件</td>
					<td><input id="iptcentitlementFileDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementFileRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementFileRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementFileRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementDebtContinue">
           	 		<td><input type="checkbox" name="namecentitlementDebtContinueSub" value="transcripts" id="ckbcentitlementDebtContinueSub">債證續行表</td>
					<td><input id="iptcentitlementDebtContinueDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementDebtContinueRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementDebtContinueRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementDebtContinueRelaTd(0)"></td>
        	 	</tr>
        	 	<tr id="trcentitlementCashierCheck">
           	 		<td><input type="checkbox" name="namecentitlementCashierCheckSub" value="transcripts" id="ckbcentitlementCashierCheckSub">本票</td>
					<td><input id="iptcentitlementCashierCheckDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementCashierCheckRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementCashierCheckRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementCashierCheckRelaTd(0)"></td>
        	 	</tr>
           	 </table>
           	 <table>
        	 	<tr id="trcentitlementOther">
           	 		<td><input type="checkbox" name="namecentitlementOtherSub" value="transcripts" id="ckbcentitlementOtherSub">其它</td>
					<td><input id="iptcentitlementOtherName" ></input><input id="iptcentitlementOtherDays" ></input></td>
   	 				<td><label>日內</label></td>
   	 				<td><label>備註</label></td>
					<td><input id="iptcentitlementOtherRemark" ></input></td>
					<td><label>相對人</label></td>
					<td><select id="iptcentitlementOtherRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementOtherRelaTd(0)"></td>
        	 	</tr>
           	 </table>
           	 <table>
           	 	<tr>
           	 		<td><label>補正說明</label></td>
           	 		<td><input id="iptcentitlementEdit"></input></td>
           	 	</tr>
           	 </table>
           	</div>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDoccourtDoc">
	法院文<img alt="新增法院文" src="../images/plus.png" onclick="addcourtDocsubtab()">
		
		<div id="courtDocsubtabs">
          <ul>
            <li><a href="#courtDocsubtabs-0">法院文</a><span	class="ui-icon ui-icon-close" role="presentation">Remove Tab</span></li>
          </ul>
          <div id="courtDocsubtabs-0">
            <div>
				<table>
	           	 	<tr>
						<td><label>共用案號</label></td>
						<td><input id="iptcourtDocShareCaseId"></input></td>
					</tr>
	           	 	<tr>
						<td><input type="radio" name="courtDocShadow" value="all" id="rdocourtDocShadow" checked>影本</td>
						<td><input type="radio" name="courtDocShadow" value="all" id="rdocourtDocShadowBank" checked>業主收文僅提供影本</td>
						<td><label>文件狀態</label></td>
						<td><select id="iptcourtDocDocStatus"><option value="">請選擇</option></select></td>
					</tr>
					<tr>
						<td><label>收文日期</label></td>
						<td><input id="iptcourtDocReceivedDate" ></input></td>
						<td><label>業主調件日</label></td>
						<td><input id="iptcourtDocBankDate" ></input></td>
						<td><label>委任狀編號</label></td>
						<td><input id="iptcourtDocLetter" ></input></td>
					</tr>
					<tr>
						<td><label>文件類別</label></td>
						<td><select id="iptcourtDocTypeOne"><option value="">請選擇</option></select></td>
						<td><label>文件項目</label></td>
						<td><select id="iptcourtDocTypeTwo"><option value="">請選擇</option></select></td>
						<td><label>債權人</label></td>
						<td><select id="iptcourtDocBankName"><option value="">請選擇</option></select></td>
						<td><label>原債權人</label></td>
						<td><select id="iptcourtDocOldBankName"><option value="">請選擇</option></select></td>
					</tr>
					<tr bgcolor="#FFEBCD" >
						<td><label>法院年字案股</label></td>
						<td><select id="iptcourtDocCourtYearCourt"><option value="">請選擇</option></select></td>
						<td><label>年度</label></td>
						<td><input id="iptcourtDocCourtYearYear" ></input></td>
						<td><label>字</label></td>
						<td><input id="iptcourtDocCourtYearTxt" ></input></td>
						<td><label>股別</label></td>
						<td><input id="iptcourtDocCourtYearShare" ></input></td>
						<td><label>案號</label></td>
						<td><input id="iptcourtDocCourtYearCaseId" ></input></td>
					</tr>
           	 	</table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDoccashierCheck">
	本票<img alt="新增本票" src="../images/plus.png" onclick="law.addDoc.cashierCheck.addcashierChecksubtab()">

        <div id="cashierChecksubtabs">
          <ul>
            <li><a href="#cashierChecksubtabs-0">本票</a></li>
          </ul>
          <div id="cashierChecksubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptcashierCheckReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptcashierCheckBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><select id="iptcashierCheckDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><select id="iptcashierCheckTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label>文件項目</label></td>
					<td><select id="iptcashierCheckTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptcashierCheckBankName"><option value="">請選擇</option></select></td>
					<td><label>原債權人</label></td>
					<td><select id="iptcashierCheckOldBankName"><option value="">請選擇</option></select></td>
				</tr>
			</table>
			<table>
				<tr id="iptcashierCheckRelationPersonTr">
					<td><label>相對人</label></td>
					<td><select id="iptcashierCheckRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.cashierCheck.addcashierCheckRelaTd(0)"></td>
				</tr>
			</table>
			<table>
				<tr>
					<td><label>本票發票日</label></td>
					<td><input id="iptcashierCheckStartDate" ></input></td>
					<td><label>本票金額</label></td>
					<td><input id="iptcashierCheckAmount" ></input></td>
					<td><label>本票到期日</label></td>
					<td><input id="iptcashierCheckEndDate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptcashierCheckRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocdebts">
	債讓<img alt="債讓" src="../images/plus.png" onclick="law.addDoc.debts.adddebtssubtab()">

        <div id="debtssubtabs">
          <ul>
            <li><a href="#debtssubtabs-0">債讓</a></li>
          </ul>
          <div id="debtssubtabs-0">

        <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptdebtsReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptdebtsBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><select id="iptdebtsDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><select id="iptdebtsTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label>文件項目</label></td>
					<td><select id="iptdebtsTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptdebtsBankName"><option value="">請選擇</option></select></td>
					<td><label>原債權人</label></td>
					<td><select id="iptdebtsOldBankName"><option value="">請選擇</option></select></td>
				</tr>
			</table>
			<table>
				<tr id="iptdebtsRelationPersonTr">
					<td><label>相對人</label></td>
					<td><select id="iptdebtsRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.debts.adddebtsRelaTd(0)"></td>
				</tr>
			</table>
			<table>
				<tr bgcolor="#FFEBCD" >
					<td><label>法院年字案股</label></td>
					<td><select id="iptdebtsCourtYearCourt"><option value="">請選擇</option></select></td>
					<td><label>年度</label></td>
					<td><input id="iptdebtsCourtYearYear" ></input></td>
					<td><label>字</label></td>
					<td><input id="iptdebtsCourtYearTxt" ></input></td>
					<td><label>股別</label></td>
					<td><input id="iptdebtsCourtYearShare" ></input></td>
					<td><label>案號</label></td>
					<td><input id="iptdebtsCourtYearCaseId" ></input></td>
				</tr>
				<tr>
					<td><label>債讓日</label></td>
					<td><input id="iptdebtsDate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptdebtsRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
          </div>
  	</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocclaimsDoc">
	債權文件<img alt="債權文件" src="../images/plus.png" onclick="law.addDoc.claimsDoc.addclaimsDocsubtab()">

        <div id="claimsDocsubtabs">
          <ul>
            <li><a href="#claimsDocsubtabs-0">債權文件</a></li>
          </ul>
          <div id="claimsDocsubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptclaimsDocReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptclaimsDocBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><select id="iptclaimsDocDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><select id="iptclaimsDocTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label>文件項目</label></td>
					<td><select id="iptclaimsDocTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptclaimsDocBankName"><option value="">請選擇</option></select></td>
					<td><label>原債權人</label></td>
					<td><select id="iptclaimsDocOldBankName"><option value="">請選擇</option></select></td>
				</tr>
			</table>
			<table>
				<tr id="iptclaimsDocRelationPersonTr">
					<td><label>相對人</label></td>
					<td><select id="iptclaimsDocRelationPerson_0"><option value="">請選擇</option></select></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.claimsDoc.addclaimsRelaTd(0)"></td>
				</tr>
			</table>
			<table>
				<tr>
					<td><label>額度</label></td>
					<td><input id="iptclaimsDocQuota" ></input></td>
					<td><label>利率</label></td>
					<td><input id="iptclaimsDocInterestRate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptclaimsDocRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocfile">
	卷宗<img alt="卷宗" src="../images/plus.png" onclick="law.addDoc.file.addfilesubtab()">

        <div id="filesubtabs">
          <ul>
            <li><a href="#filesubtabs-0">卷宗</a></li>
          </ul>
          <div id="filesubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptfileReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptfileBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><select id="iptfileDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><select id="iptfileTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label>文件項目</label></td>
					<td><select id="iptfileTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptfileBankName"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>份數</label></td>
					<td><input id="iptfileNums" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptfileRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDocother">
	其它<img alt="其它" src="../images/plus.png" onclick="law.addDoc.other.addothersubtab()">

        <div id="othersubtabs">
          <ul>
            <li><a href="#othersubtabs-0">其它</a></li>
          </ul>
          <div id="othersubtabs-0">
            <div>
           	 <table>
           	 	<tr>
					<td><label>收文日期</label></td>
					<td><input id="iptotherReceivedDate"></input></td>
					<td><label>業主調件日</label></td>
					<td><input id="iptotherBankDate" ></input></td>
					<td><label>文件狀態</label></td>
					<td><select id="iptotherDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>文件類別</label></td>
					<td><select id="iptotherTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label>文件項目</label></td>
					<td><select id="iptotherTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptotherBankName"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>收據種類</label></td>
					<td><input id="iptotherReceiptType" ></input></td>
					<td><label>收據金額</label></td>
					<td><input id="iptotherReceiptAmount" ></input></td>
					<td><label>法院製發日</label></td>
					<td><input id="iptotherCourtDate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptotherRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	</div>
</body>
</html>