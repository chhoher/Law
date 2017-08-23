<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<meta http-equiv="x-ua-compatible" content="IE=edge" charset="utf-8">
<!-- Add By Jia 2017-05-12 文管新增的JS功能 -->
<script type="text/javascript" src="../legaljs/doc/docaddDoc.js"></script>
<script type="text/javascript" src="../legaljs/doc/adddoc/docCentitlement.js"></script>
<script type="text/javascript" src="../legaljs/doc/adddoc/docCourtDoc.js"></script>
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
			var openDocType = "<%=request.getParameter("docType")%>";
			var openDocId = "<%=request.getParameter("docId")%>";
			// add By Jia 2017-08-16 打開資料庫已存在文件
			if(openDocType !== "null"){
				$("#ckbaddDocAll").prop("checked", false);
				$("#ckbaddDocentitlementForeclosure").prop("checked", false);
				$("#ckbaddDoccourtDoc").prop("checked", false);
				$("#ckbaddDoccashierCheck").prop("checked", false);
				$("#ckbaddDocdebts").prop("checked", false);
				$("#ckbaddDocclaimsDoc").prop("checked", false);
				$("#ckbaddDocfile").prop("checked", false);
				$("#ckbaddDocother").prop("checked", false);
				$("#divaddDocCheckAll").hide();
				if(openDocType === "A"){
					$("#ckbaddDocentitlementForeclosure").prop("checked", true);
					$("#iptcentitlementDocType").val(openDocType);
					$("#iptcentitlementDocId").val(openDocId);
					$("#divaddDocentitlementForeclosure").hide();
		    		$("#divaddDoccourtDoc").hide();
		    		$("#divaddDoccashierCheck").hide();
		    		$("#divaddDocdebts").hide();
		    		$("#divaddDocclaimsDoc").hide();
		    		$("#divaddDocfile").hide();
		    		$("#divaddDocother").hide();
					$("#divaddDocentitlementForeclosure").show();
					$("#imgaddDocCen").hide();
				}else if(openDocType === "B"){
					$("#ckbaddDoccourtDoc").prop("checked", true);
					$("#iptcourtDocDocType").val(openDocType);
					$("#iptcourtDocDocId").val(openDocId);
					$("#divaddDocentitlementForeclosure").hide();
		    		$("#divaddDoccourtDoc").hide();
		    		$("#divaddDoccashierCheck").hide();
		    		$("#divaddDocdebts").hide();
		    		$("#divaddDocclaimsDoc").hide();
		    		$("#divaddDocfile").hide();
		    		$("#divaddDocother").hide();
					$("#divaddDoccourtDoc").show();
					$("#imgaddDocCourtDoc").hide();
				}else if(openDocType === "C"){
					$("#ckbaddDoccashierCheck").prop("checked", true);
					$("#iptcashierCheckDocType").val(openDocType);
					$("#iptcashierCheckDocId").val(openDocId);
					$("#divaddDocentitlementForeclosure").hide();
		    		$("#divaddDoccourtDoc").hide();
		    		$("#divaddDoccashierCheck").hide();
		    		$("#divaddDocdebts").hide();
		    		$("#divaddDocclaimsDoc").hide();
		    		$("#divaddDocfile").hide();
		    		$("#divaddDocother").hide();
					$("#divaddDoccashierCheck").show();
					$("#imgaddDocCashierCheck").hide();
				}else if(openDocType === "D"){
					$("#ckbaddDocdebts").prop("checked", true);
					$("#iptdebtsDocType").val(openDocType);
					$("#iptdebtsDocId").val(openDocId);
					$("#divaddDocentitlementForeclosure").hide();
		    		$("#divaddDoccourtDoc").hide();
		    		$("#divaddDoccashierCheck").hide();
		    		$("#divaddDocdebts").hide();
		    		$("#divaddDocclaimsDoc").hide();
		    		$("#divaddDocfile").hide();
		    		$("#divaddDocother").hide();
					$("#divaddDocdebts").show();
					$("#imgaddDocDebts").hide();
				}else if(openDocType === "E"){
					$("#ckbaddDocclaimsDoc").prop("checked", true);
					$("#iptclaimsDocDocType").val(openDocType);
					$("#iptclaimsDocDocId").val(openDocId);
					$("#divaddDocentitlementForeclosure").hide();
		    		$("#divaddDoccourtDoc").hide();
		    		$("#divaddDoccashierCheck").hide();
		    		$("#divaddDocdebts").hide();
		    		$("#divaddDocclaimsDoc").hide();
		    		$("#divaddDocfile").hide();
		    		$("#divaddDocother").hide();
					$("#divaddDocclaimsDoc").show();
					$("#imgaddDocClaimsDoc").hide();
				}else if(openDocType === "F"){
					$("#ckbaddDocfile").prop("checked", true);
					$("#iptfileDocType").val(openDocType);
					$("#iptfileDocId").val(openDocId);
					$("#divaddDocentitlementForeclosure").hide();
		    		$("#divaddDoccourtDoc").hide();
		    		$("#divaddDoccashierCheck").hide();
		    		$("#divaddDocdebts").hide();
		    		$("#divaddDocclaimsDoc").hide();
		    		$("#divaddDocfile").hide();
		    		$("#divaddDocother").hide();
					$("#divaddDocfile").show();
					$("#imgaddDocFile").hide();
				}else if(openDocType === "G"){
					$("#ckbaddDocother").prop("checked", true);
					$("#iptotherDocType").val(openDocType);
					$("#iptotherDocId").val(openDocId);
					$("#divaddDocentitlementForeclosure").hide();
		    		$("#divaddDoccourtDoc").hide();
		    		$("#divaddDoccashierCheck").hide();
		    		$("#divaddDocdebts").hide();
		    		$("#divaddDocclaimsDoc").hide();
		    		$("#divaddDocfile").hide();
		    		$("#divaddDocother").hide();
					$("#divaddDocother").show();
					$("#imgaddDocOther").hide();
				}
			}
			var saveEndDateTable;
			var opt={
		    		"sDom": '<"top">rt<"bottom"><"clear">',
		    		"bSort": false,
		    		"bPaginate" : false,
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		    		"columns": [
		                { "data": "Bank_alias" },
		                { "data": "Case_ID" ,
		                	"render": function ( data, type, full, meta ) {
		                		return law.common.paddingLeft(data,8);
		                }},
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
		    
		    var docSaveopt={
		    		"oLanguage":{"sUrl":"../i18n/Chinese-traditional.json"},
		    		"bJQueryUI":true,	
		            "scrollX":        true,
		            "scrollCollapse": true,
	                "bAutoWidth":false,    
		    		"columnDefs": [{
	                    targets: '_all',
	                    className: 'dt-center'
	                }],
	                "order": [[0, "asc"]],
		    		"columns": [
		                { "data": "rowNum" },
		                { "data": "bankName" },
		                { "data": "prodName" },
		                { "data": "caseId" },
		                { "data": "debtName" },
		                { "data": "ID" },
		                { "data": "docCode" },
		                { "data": "typeOne" },
		                { "data": "typeTwo" },
		                { "data": "docStatus" },
		                { "data": "courtYearCourt" },
		                { "data": "sourceDoc" },
		                { "data": "sendDate" },
		                { "data": "newSendDate" },
		                { "data": "remark" },
		                { "data": "report" },
		                { "data": "edit" },
		                { "data": "pay" },
		                { "data": "sendReport" },
		                { "data": "executionDate" },
			            { "data": "toCourtDate" }
		            ]
			};
			$("#docSaveEndTable").dataTable(docSaveopt);
			
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
						
						// Add By Jia 2017-08-01 將案件所需資料寫入 doc資訊
						law.addDoc.bankId = json[0].Bank_ID;
						law.addDoc.bankName = json[0].Bank_alias;
						law.addDoc.gprodId = json[0].G_ID;
						law.addDoc.gprodName = json[0].G_name;
						law.addDoc.ID = json[0].ID;
						law.addDoc.debtName = json[0].name;
						
						BankNameSelectOption = '<option value="'+law.addDoc.bankId+'">'+law.addDoc.bankName+'</option>'; 
						$("#iptcentitlementBankName").append(BankNameSelectOption);
						$("#iptcentitlementBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
						$("#iptcourtDocBankName").append(BankNameSelectOption);
						$("#iptcourtDocBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
						$("#iptcashierCheckBankName").append(BankNameSelectOption);
						$("#iptcashierCheckBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
						$("#iptdebtsBankName").append(BankNameSelectOption);
						$("#iptdebtsBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
						$("#iptclaimsDocBankName").append(BankNameSelectOption);
						$("#iptclaimsDocBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
						$("#iptfileBankName").append(BankNameSelectOption);
						$("#iptfileBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
						$("#iptotherBankName").append(BankNameSelectOption);
						$("#iptotherBankName" + ' option[value=' + law.addDoc.bankId + ']').attr('selected', 'selected');
						
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
					law.common.selectRelaOption("#iptcentitlementRelationPerson_0", law.addDoc.rela, undefined, true);
					law.addDoc.centitlement.centitlementRelaNum[0] = 0;
					
					// 法院文相對人初始化
					law.common.selectRelaOption("#iptcourtDocRelationPerson_0", law.addDoc.rela, undefined, true);
					law.addDoc.courtDoc.courtDocRelaNum[0] = 0;
					//補正下拉選項
					law.common.selectRelaOption("#iptcourtDocTranscriptsRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocCoOwnedTranscriptsRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocMortgageeTranscriptsRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocLawTranscriptsRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocHeirTranscriptsRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocDirtTranscriptsRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocBuiltTranscriptsRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocDistributionRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocThingThirdRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocThingDebtRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocCoOwnedRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocDebtDocRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocDetailRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocFileRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocDebtContinueRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocCashierCheckRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocRecoveryRelationPerson_0", law.addDoc.rela, undefined, true);
					law.common.selectRelaOption("#iptcourtDocOtherRelationPerson_0", law.addDoc.rela, undefined, true);
					law.addDoc.courtDoc.courtDocTranscriptsRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocCoOwnedTranscriptsRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocMortgageeTranscriptsRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocLawTranscriptsRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocHeirTranscriptsRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocDirtTranscriptsRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocBuiltTranscriptsRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocDistributionRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocThingThirdRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocThingDebtRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocCoOwnedRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocDebtDocRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocDetailRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocFileRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocDebtContinueRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocCashierCheckRelaNum[0] = 0;
					law.addDoc.courtDoc.courtDocOtherRelaNum[0] = 0;
					
					// 本票相對人初始化
					law.common.selectRelaOption("#iptcashierCheckRelationPerson_0", law.addDoc.rela, undefined, true);
					law.addDoc.cashierCheck.cashierCheckRelaNum[0] = 0;
					
					// 債讓相對人初始化
					law.common.selectRelaOption("#iptdebtsRelationPerson_0", law.addDoc.rela, undefined, true);
					law.addDoc.debts.debtsRelaNum[0] = 0;
					
					// 債權文件相對人初始化
					law.common.selectRelaOption("#iptclaimsDocRelationPerson_0", law.addDoc.rela, undefined, true);
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
						courtDoc = law.addDoc.courtDoc,
						cashierCheck = law.addDoc.cashierCheck,
						debts = law.addDoc.debts,
						claimsDoc = law.addDoc.claimsDoc,
						file = law.addDoc.file,
						other = law.addDoc.other;
									
					// 將當前caseId 存入
					law.addDoc.caseId =  <%=request.getParameter("caseId")%>;

					// =====執行名義start=====
					law.addDoc.centitlement.initcentitlementsubtab(response.nowDate, response.DocStatus, response.TypeOne, 
							response.centitlementTypeTwo, response.TSBOldBankName, response.CourtYearCourt, 
							response.SourceDoc, response.FEIOldBankName, response.SKOldBankName,
							response.YTOldBankName, response.FIOldBankName, response.TSAOldBankName, response.TAMCOOldBankName,
							response.ORIXOldBankName, response.MTOldBankName, response.UNOldBankName);
					
					//執行名義下拉選項
					law.common.selectOption("#iptcentitlementDocStatus", centitlement.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
					law.common.selectOption("#iptcentitlementTypeOne", centitlement.TypeOne, "8aa2e72a5c812434015c812f07cd0001", true);
					law.common.selectOption("#iptcentitlementTypeTwo", centitlement.TypeTwo, undefined, true);
					law.common.selectOption("#iptcentitlementCourtYearCourt", centitlement.CourtYearCourt, undefined, true);
					law.common.selectOption("#iptcentitlementSourceDoc_0", centitlement.SourceDoc, undefined, true);
					law.common.selectOption("#iptcentitlementSourceDocCourtYearCourt_0", centitlement.CourtYearCourt, undefined, true);
					law.addDoc.centitlement.centitlementSourceDocNum[0] = 0;
					
					if($("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B1" ||
							$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B2" ||
							$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B3" ||
							$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B4" ||
							$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B5" ||
							$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B6" ||
							$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-B7" ||
							$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-CD" ||
							$("#iptcentitlementBankName").find('option:selected').val() ===  "TS-CR"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.TSBOldBankName, undefined, true);
					}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "FEI_BK"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.FEIOldBankName, undefined, true);
					}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "SK_BK"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.SKOldBankName, undefined, true);
					}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "YT_AMC" ||
							$("#iptcentitlementBankName").find('option:selected').val() ===  "YT_IS"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.YTOldBankName, undefined, true);
					}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "FI-AMC"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.FIOldBankName, undefined, true);
					}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "TS-AMC"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.TSAOldBankName, undefined, true);
					}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "TAMCO"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.TAMCOOldBankName, undefined, true);
					}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "ORIX_AMC"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.ORIXOldBankName, undefined, true);
					}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "MT-IS"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.MTOldBankName, undefined, true);
					}else if($("#iptcentitlementBankName").find('option:selected').val() ===  "UN_IS"){
						law.common.selectOption("#iptcentitlementOldBankName", centitlement.UNOldBankName, undefined, true);
					}else{
						var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
						$("#iptcentitlementOldBankName option").remove();
						$("#iptcentitlementOldBankName").append(selectNull);
					}
					
					// =====執行名義end=====
					
					// =====法院文start=====
					law.addDoc.courtDoc.initcourtDocsubtab(response.nowDate, response.DocStatus, response.courtDocTypeOne, 
							response.courtDocTypeTwo, response.TSBOldBankName, response.CourtYearCourt, 
							response.courtDocImmovablesTypeTwo, response.courtDocCenTypeTwo, response.courtDocDebtTypeTwo,
							response.PublishObject, response.PublishThings, response.FEIOldBankName, response.SKOldBankName,
							response.YTOldBankName, response.FIOldBankName, response.TSAOldBankName, response.TAMCOOldBankName,
							response.ORIXOldBankName, response.MTOldBankName, response.UNOldBankName);
					
					//法院文下拉選項
					law.common.selectOption("#iptcourtDocDocStatus", courtDoc.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
					law.common.selectOption("#iptcourtDocTypeOne", courtDoc.TypeOne, "8aa2e72a5d4f763e015d4f8771c20005", true);
					law.common.selectOption("#iptcourtDocTypeTwo", courtDoc.TypeTwo, undefined, true);
					
					$("#iptcourtDocTypeOne").change(function(i) {
						if($("#iptcourtDocTypeOne").find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f8771c20005"){
							law.common.selectOption("#iptcourtDocTypeTwo", courtDoc.TypeTwo, undefined, true);
						}else if($("#iptcourtDocTypeOne").find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f878ed50006"){
							law.common.selectOption("#iptcourtDocTypeTwo", courtDoc.ImmovablesTypeTwo, undefined, true);
						}else if($("#iptcourtDocTypeOne").find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f87dca70008"){
							law.common.selectOption("#iptcourtDocTypeTwo", courtDoc.CenTypeTwo, undefined, true);
						}else if($("#iptcourtDocTypeOne").find('option:selected').val() ===  "8aa2e72a5d4f763e015d4f87b79f0007"){
							law.common.selectOption("#iptcourtDocTypeTwo", courtDoc.DebtTypeTwo, undefined, true);
						}
					
					});
					
					law.common.selectOption("#iptcourtDocCourtYearCourt", courtDoc.CourtYearCourt, undefined, true);
					law.common.selectOption("#iptcourtDocPublishObject", courtDoc.PublishObject, undefined, true);
					law.common.selectOption("#iptcourtDocPublishThings", courtDoc.PublishThings, undefined, true);
					
					if($("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B1" ||
							$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B2" ||
							$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B3" ||
							$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B4" ||
							$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B5" ||
							$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B6" ||
							$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-B7" ||
							$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-CD" ||
							$("#iptcourtDocBankName").find('option:selected').val() ===  "TS-CR"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.TSBOldBankName, undefined, true);
					}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "FEI_BK"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.FEIOldBankName, undefined, true);
					}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "SK_BK"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.SKOldBankName, undefined, true);
					}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "YT_AMC" ||
							$("#iptcourtDocBankName").find('option:selected').val() ===  "YT_IS"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.YTOldBankName, undefined, true);
					}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "FI-AMC"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.FIOldBankName, undefined, true);
					}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "TS-AMC"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.TSAOldBankName, undefined, true);
					}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "TAMCO"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.TAMCOOldBankName, undefined, true);
					}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "ORIX_AMC"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.ORIXOldBankName, undefined, true);
					}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "MT-IS"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.MTOldBankName, undefined, true);
					}else if($("#iptcourtDocBankName").find('option:selected').val() ===  "UN_IS"){
						law.common.selectOption("#iptcourtDocOldBankName", courtDoc.UNOldBankName, undefined, true);
					}else{
						var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
						$("#iptcourtDocOldBankName option").remove();
						$("#iptcourtDocOldBankName").append(selectNull);
					}
					
					// =====法院文end=====
						
					// =====本票start=====
					law.addDoc.cashierCheck.initcashierChecksubtab(response.nowDate, response.DocStatus, response.TypeOne, 
							response.cashierCheckTypeTwo, response.TSBOldBankName, response.FEIOldBankName, response.SKOldBankName,
							response.YTOldBankName, response.FIOldBankName, response.TSAOldBankName, response.TAMCOOldBankName,
							response.ORIXOldBankName, response.MTOldBankName, response.UNOldBankName);
					
					//債讓下拉選項
					law.common.selectOption("#iptcashierCheckDocStatus", cashierCheck.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
					law.common.selectOption("#iptcashierCheckTypeOne", cashierCheck.TypeOne, "8aa2e72a5c812434015c812fc56a0007", true);
					law.common.selectOption("#iptcashierCheckTypeTwo", cashierCheck.TypeTwo, undefined, true);
					
					if($("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B1" ||
							$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B2" ||
							$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B3" ||
							$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B4" ||
							$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B5" ||
							$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B6" ||
							$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-B7" ||
							$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-CD" ||
							$("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-CR"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.TSBOldBankName, undefined, true);
					}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "FEI_BK"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.FEIOldBankName, undefined, true);
					}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "SK_BK"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.SKOldBankName, undefined, true);
					}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "YT_AMC" ||
							$("#iptcashierCheckBankName").find('option:selected').val() ===  "YT_IS"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.YTOldBankName, undefined, true);
					}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "FI-AMC"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.FIOldBankName, undefined, true);
					}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "TS-AMC"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.TSAOldBankName, undefined, true);
					}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "TAMCO"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.TAMCOOldBankName, undefined, true);
					}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "ORIX_AMC"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.ORIXOldBankName, undefined, true);
					}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "MT-IS"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.MTOldBankName, undefined, true);
					}else if($("#iptcashierCheckBankName").find('option:selected').val() ===  "UN_IS"){
						law.common.selectOption("#iptcashierCheckOldBankName", cashierCheck.UNOldBankName, undefined, true);
					}else{
						var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
						$("#iptcashierCheckOldBankName option").remove();
						$("#iptcashierCheckOldBankName").append(selectNull);
					}
					
					// =====本票end=====
					
					// =====債讓start=====
					law.addDoc.debts.initdebtssubtab(response.nowDate, response.DocStatus, response.TypeOne, 
							response.debtsTypeTwo, response.TSBOldBankName, response.CourtYearCourt, response.FEIOldBankName, response.SKOldBankName,
							response.YTOldBankName, response.FIOldBankName, response.TSAOldBankName, response.TAMCOOldBankName,
							response.ORIXOldBankName, response.MTOldBankName, response.UNOldBankName);
					
					//債讓下拉選項
					law.common.selectOption("#iptdebtsDocStatus", debts.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
					law.common.selectOption("#iptdebtsTypeOne", debts.TypeOne, "8aa2e72a5c812434015c81303cbf0008", true);
					law.common.selectOption("#iptdebtsTypeTwo", debts.TypeTwo, undefined, true);
					law.common.selectOption("#iptdebtsCourtYearCourt", debts.CourtYearCourt, undefined, true);
					
					if($("#iptdebtsBankName").find('option:selected').val() ===  "TS-B1" ||
							$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B2" ||
							$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B3" ||
							$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B4" ||
							$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B5" ||
							$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B6" ||
							$("#iptdebtsBankName").find('option:selected').val() ===  "TS-B7" ||
							$("#iptdebtsBankName").find('option:selected').val() ===  "TS-CD" ||
							$("#iptdebtsBankName").find('option:selected').val() ===  "TS-CR"){
						law.common.selectOption("#iptdebtsOldBankName", debts.TSBOldBankName, undefined, true);
					}else if($("#iptdebtsBankName").find('option:selected').val() ===  "FEI_BK"){
						law.common.selectOption("#iptdebtsOldBankName", debts.FEIOldBankName, undefined, true);
					}else if($("#iptdebtsBankName").find('option:selected').val() ===  "SK_BK"){
						law.common.selectOption("#iptdebtsOldBankName", debts.SKOldBankName, undefined, true);
					}else if($("#iptdebtsBankName").find('option:selected').val() ===  "YT_AMC" ||
							$("#iptdebtsBankName").find('option:selected').val() ===  "YT_IS"){
						law.common.selectOption("#iptdebtsOldBankName", debts.YTOldBankName, undefined, true);
					}else if($("#iptdebtsBankName").find('option:selected').val() ===  "FI-AMC"){
						law.common.selectOption("#iptdebtsOldBankName", debts.FIOldBankName, undefined, true);
					}else if($("#iptdebtsBankName").find('option:selected').val() ===  "TS-AMC"){
						law.common.selectOption("#iptdebtsOldBankName", debts.TSAOldBankName, undefined, true);
					}else if($("#iptdebtsBankName").find('option:selected').val() ===  "TAMCO"){
						law.common.selectOption("#iptdebtsOldBankName", debts.TAMCOOldBankName, undefined, true);
					}else if($("#iptdebtsBankName").find('option:selected').val() ===  "ORIX_AMC"){
						law.common.selectOption("#iptdebtsOldBankName", debts.ORIXOldBankName, undefined, true);
					}else if($("#iptdebtsBankName").find('option:selected').val() ===  "MT-IS"){
						law.common.selectOption("#iptdebtsOldBankName", debts.MTOldBankName, undefined, true);
					}else if($("#iptdebtsBankName").find('option:selected').val() ===  "UN_IS"){
						law.common.selectOption("#iptdebtsOldBankName", debts.UNOldBankName, undefined, true);
					}else{
						var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
						$("#iptdebtsOldBankName option").remove();
						$("#iptdebtsOldBankName").append(selectNull);
					}
					
					// =====債讓end=====
						
					// =====債權文件start=====
					law.addDoc.claimsDoc.initclaimsDocsubtab(response.nowDate, response.DocStatus, response.TypeOne, 
							response.claimDocTypeTwo, response.TSBOldBankName, response.FEIOldBankName, response.SKOldBankName,
							response.YTOldBankName, response.FIOldBankName, response.TSAOldBankName, response.TAMCOOldBankName,
							response.ORIXOldBankName, response.MTOldBankName, response.UNOldBankName);
					
					//債權文件下拉選項
					law.common.selectOption("#iptclaimsDocDocStatus", claimsDoc.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
					law.common.selectOption("#iptclaimsDocTypeOne", claimsDoc.TypeOne, "8aa2e72a5c812434015c812fa6890006", true);
					law.common.selectOption("#iptclaimsDocTypeTwo", claimsDoc.TypeTwo, undefined, true);
					
					if($("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B1" ||
							$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B2" ||
							$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B3" ||
							$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B4" ||
							$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B5" ||
							$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B6" ||
							$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-B7" ||
							$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-CD" ||
							$("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-CR"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.TSBOldBankName, undefined, true);
					}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "FEI_BK"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.FEIOldBankName, undefined, true);
					}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "SK_BK"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.SKOldBankName, undefined, true);
					}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "YT_AMC" ||
							$("#iptclaimsDocBankName").find('option:selected').val() ===  "YT_IS"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.YTOldBankName, undefined, true);
					}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "FI-AMC"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.FIOldBankName, undefined, true);
					}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "TS-AMC"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.TSAOldBankName, undefined, true);
					}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "TAMCO"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.TAMCOOldBankName, undefined, true);
					}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "ORIX_AMC"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.ORIXOldBankName, undefined, true);
					}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "MT-IS"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.MTOldBankName, undefined, true);
					}else if($("#iptclaimsDocBankName").find('option:selected').val() ===  "UN_IS"){
						law.common.selectOption("#iptclaimsDocOldBankName", claimsDoc.UNOldBankName, undefined, true);
					}else{
						var selectNull = '<option value="'+""+'">'+"請選擇"+'</option>'; 
						$("#iptclaimsDocOldBankName option").remove();
						$("#iptclaimsDocOldBankName").append(selectNull);
					}
					
					// =====債權文件end=====
						
					// =====卷宗start=====
					law.addDoc.file.initfilesubtab(response.nowDate, response.DocStatus, response.TypeOne, response.fileTypeTwo);
					
					//卷宗下拉選項
					law.common.selectOption("#iptfileDocStatus", file.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
					law.common.selectOption("#iptfileTypeOne", file.TypeOne, "8aa2e72a5c812434015c813055070009", true);
					law.common.selectOption("#iptfileTypeTwo", file.TypeTwo, undefined, true);
					// =====卷宗end=====
					
					// =====其他start=====
					// 初始化其他選項
					law.addDoc.other.initothersubtab(response.nowDate, response.DocStatus, response.TypeOne, response.otherTypeTwo);

					//其他下拉選項
					law.common.selectOption("#iptotherDocStatus", other.DocStatus, "8aa2e72a5c8074d5015c8076cfe50001", true);
					law.common.selectOption("#iptotherTypeOne", other.TypeOne, "8aa2e72a5c812434015c81307418000a", true);
					law.common.selectOption("#iptotherTypeTwo", other.TypeTwo, undefined, true);
					// =====其他end=====
						
					// add By Jia 2017-08-16 打開資料庫已存在文件
					if(openDocType !== "null"){
						
						$.ajax({
							url : '../pages/doc/documents/docAction!initOpenDoc.action',
							data : {
								docType : openDocType,
								docId : openDocId
								},
							type : "POST",
							dataType : 'json',
							success : function(response) {
								var initDocInfo = {
										cenDoc : response.cenDoc,
										courtDocDoc : response.courtDocDoc,
										cashierCheckDoc : response.cashierCheckDoc,
										debtsDoc : response.debtsDoc,
										claimsdocsDoc : response.claimsdocsDoc,
										fileDoc : response.fileDoc,
										otherDoc : response.otherDoc
								};
								
								if(openDocType === "A"){
									law.addDoc.centitlement.initopenCensubtab(initDocInfo.cenDoc);
								}else if(openDocType === "B"){
									law.addDoc.courtDoc.initopenCourtDocsubtab(initDocInfo.courtDocDoc);
								}else if(openDocType === "C"){
									law.addDoc.cashierCheck.initopenCashierChecksubtab(initDocInfo.cashierCheckDoc);
								}else if(openDocType === "D"){
									law.addDoc.debts.initopenDebtssubtab(initDocInfo.debtsDoc);
								}else if(openDocType === "E"){
									law.addDoc.claimsDoc.initopenClaimsdocsubtab(initDocInfo.claimsdocsDoc);
								}else if(openDocType === "F"){
									law.addDoc.file.initopenFilesubtab(initDocInfo.fileDoc);
								}else if(openDocType === "G"){
									law.addDoc.other.initopenOthersubtab(initDocInfo.otherDoc);
								}
							},
							error : function(xhr, ajaxOptions, thrownError) {
								alert(xhr.status);
								alert(thrownError);
							}
						});
						
					}
				},
				error : function(xhr, ajaxOptions, thrownError) {
					alert(xhr.status);
					alert(thrownError);
				}
			});

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
					<button class="ui-button ui-widget ui-corner-all" id ="btnLinkDocSystem">
				    	<span class="ui-icon ui-icon-gear"></span> 連結到本案文管系統
				  	</button>
				  	<!-- <button class="ui-button ui-widget ui-corner-all" id ="btndeleteCekcheckform">
				    	<span class="ui-icon ui-icon-gear"></span> 連結到法務申請
				  	</button> -->
				</td>
			</tr>
		</table>
	</div>
	
	<div id="divaddDocCheckAll">
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
	執行名義 <img alt="新增執行名義" src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementsubtab()" id="imgaddDocCen">

        <div id="censubtabs">
          <ul>
            <li><a href="#censubtabs-0">執行名義</a></li>
          </ul>
          <div id="censubtabs-0">
            <div>
           	 <table>
           	 	<tr style="display:none"><td><input id="iptcentitlementDocType"></input><input id="iptcentitlementDocId"></input></td></tr>
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
					<td><input type="radio" name="centitlementShadow" value="0" id="rdocentitlementShadow">影本</td>
					<td><input type="radio" name="centitlementShadow" value="1" id="rdocentitlementShadowBank" >業主收文僅提供影本
						<button onclick="law.common.unchecked('rdocentitlementShadow', 'rdocentitlementShadowBank')">X</button></td>
					<td><label style="color:red">*文件狀態</label></td>
					<td><select id="iptcentitlementDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label>業主調件日</label></td>
					<td><input id="iptcentitlementBankDate" ></input></td>
					<td><label style="color:red">*收文日期</label></td>
					<td><input id="iptcentitlementReceivedDate" ></input></td>
				</tr>
				<tr>
					<td><label style="color:red">*文件類別</label></td>
					<td><select id="iptcentitlementTypeOne" disabled ><option value="">請選擇</option></select></td>
					<td><label style="color:red">*文件項目</label></td>
					<td><select id="iptcentitlementTypeTwo"><option value="">請選擇</option></select></td>
					<td><label style="color:red">*債權人</label></td>
					<td><select id="iptcentitlementBankName" disabled><option value="">請選擇</option></select></td>
					<td><label>原債權人</label></td>
					<td><select id="iptcentitlementOldBankName"><option value="">請選擇</option></select></td>
				</tr>
				</table>
			<table>
				<tr id="iptcentitlementRelationPersonTr">
					<td><label style="color:red">*相對人</label></td>
					<td><select id="iptcentitlementRelationPerson_0"><option value="">請選擇</option></select>
						<input id="iptcentitlementRelationPersonId_0" style="display:none"></input></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementRelaTd(0)"></td>
				</tr>
			</table>
			<table style="background-color:#FFEBCD;">
				<tr>
					<td><label style="color:red">*法院年字案股</label></td>
					<td><select id="iptcentitlementCourtYearCourt"><option value="">請選擇</option></select></td>
					<td><label>年度</label></td>
					<td><input id="iptcentitlementCourtYearYear" style="width : 50px"></input></td>
					<td><label>字</label></td>
					<td><input id="iptcentitlementCourtYearTxt" style="width : 50px"></input></td>
					<td><label>股別</label></td>
					<td><input id="iptcentitlementCourtYearShare" style="width : 50px"></input></td>
					<td><label>案號</label></td>
					<td><input id="iptcentitlementCourtYearCaseId" style="width : 60px"></input></td>
				</tr>
			</table>
			<table id="tcentitlementSourceDoc">
				<tr>
					<td><label>原始憑證</label><input id="iptcentitlementSourceDocId_0" style="display:none"></input></td>
					<td><select id="iptcentitlementSourceDoc_0"><option value="">請選擇</option></select>
					<select id="iptcentitlementSourceDocCourtYearCourt_0"><option value="">請選擇</option></select></td>
					<td><label>年度</label></td>
					<td><input id="iptcentitlementSourceDocCourtYearYear_0" style="width : 50px"></input></td>
					<td><label>字</label></td>
					<td><input id="iptcentitlementSourceDocCourtYearTxt_0" style="width : 50px"></input></td>
					<td><label>股別</label></td>
					<td><input id="iptcentitlementSourceDocCourtYearShare_0" style="width : 50px"></input></td>
					<td><label>案號</label></td>
					<td><input id="iptcentitlementSourceDocCourtYearCaseId_0" style="width : 60px"></input><img src="../images/plus.png" onclick="law.addDoc.centitlement.addcentitlementSourceDocT(0)"></td>
				</tr>
			</table>
			<table>
				<tr>
					<td><label style="color:red">*發文日期</label></td>
					<td><input id="iptcentitlementSendDate" ></input></td>
					<td><label>最近執行日期</label></td>
					<td><input id="iptcentitlementNewSendDate" ></input></td>
				</tr>
				<tr>
					<td><label>備註</label></td>
					<td><input id="iptcentitlementRemark" ></input></td>
				</tr>
           	 </table>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDoccourtDoc">
	法院文<img alt="新增法院文" src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocsubtab()" id="imgaddDocCourtDoc">
		
		<div id="courtDocsubtabs">
          <ul>
            <li><a href="#courtDocsubtabs-0">法院文</a></li>
          </ul>
          <div id="courtDocsubtabs-0">
            <div>
	           	 <table>
	           	 	<tr style="display:none"><td><input id="iptcourtDocDocType"></input><input id="iptcourtDocDocId"></input></td></tr>
           	 		<tr>
						<td><label>共用案號</label></td>
						<td><input id="iptcourtDocShareCaseId_0"></input></td>
						<td><input id="iptcourtDocShareCaseId_1"></input></td>
						<td><input id="iptcourtDocShareCaseId_2"></input></td>
						<td><input id="iptcourtDocShareCaseId_3"></input></td>
					</tr>
				</table>
				<table>
	           	 	<tr>
						<td><input type="radio" name="courtDocShadow" value="0" id="rdocourtDocShadow" >影本</td>
						<td><input type="radio" name="courtDocShadow" value="1" id="rdocourtDocShadowBank" >業主收文僅提供影本
							<button onclick="law.common.unchecked('rdocourtDocShadow', 'rdocourtDocShadowBank')">X</button></td>
						<td><label style="color:red">*文件狀態</label></td>
						<td><select id="iptcourtDocDocStatus"><option value="">請選擇</option></select></td>
					</tr>
					<tr>
						<td><label>業主調件日</label></td>
						<td><input id="iptcourtDocBankDate" ></input></td>
						<td><label style="color:red">*收文日期</label></td>
						<td><input id="iptcourtDocReceivedDate" ></input></td>
					</tr>
					<tr>
						<td><label style="color:red">*文件類別</label></td>
						<td><select id="iptcourtDocTypeOne" ><option value="">請選擇</option></select></td>
						<td><label style="color:red">*文件項目</label></td>
						<td><select id="iptcourtDocTypeTwo"><option value="">請選擇</option></select></td>
						<td><label style="color:red">*債權人</label></td>
						<td><select id="iptcourtDocBankName" disabled><option value="">請選擇</option></select></td>
						<td><label>原債權人</label></td>
						<td><select id="iptcourtDocOldBankName"><option value="">請選擇</option></select></td>
					</tr>
				</table>
				<table>
					<tr id="iptcourtDocRelationPersonTr">
						<td><label style="color:red">*相對人</label></td>
						<td><select id="iptcourtDocRelationPerson_0"><option value="">請選擇</option></select>
							<input id="iptcourtDocRelationPersonId_0" style="display:none"></input></td>
						<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocRelaTd(0)"></td>
					</tr>
				</table>
				<table style="background-color:#FFEBCD;">
					<tr>
						<td><label style="color:red">*法院年字案股</label></td>
						<td><select id="iptcourtDocCourtYearCourt"><option value="">請選擇</option></select></td>
						<td><label>年度</label></td>
						<td><input id="iptcourtDocCourtYearYear" style="width : 50px"></input></td>
						<td><label>字</label></td>
						<td><input id="iptcourtDocCourtYearTxt" style="width : 50px"></input></td>
						<td><label>股別</label></td>
						<td><input id="iptcourtDocCourtYearShare" style="width : 50px"></input></td>
						<td><label>案號</label></td>
						<td><input id="iptcourtDocCourtYearCaseId" style="width : 60px"></input></td>
					</tr>
				</table>
				<table>
					<tr>
						<td><label>收到裁定日</label></td>
						<td><input id="iptcourtDocRuledDate" ></input></td>
						<td><label>裁定金額</label></td>
						<td><input id="iptcourtDocRuledAmount" ></input></td>
						<td><label>聲請確證日</label></td>
						<td><input id="iptcourtDocApplyConfirmationDate" ></input></td>
					</tr>
					<tr>
						<td><label>收確證日</label></td>
						<td><input id="iptcourtDocReceivedConfirmationDate" ></input></td>
						<td><label>失效日</label></td>
						<td><input id="iptcourtDocFailureDate" ></input></td>
					</tr>
				</table>
				<table>
					<tr>
						<td><label>扣薪第三人(25字)</label></td>
						<td><input id="iptcourtDocApplyLawThird" style="width : 400px"></input></td>
						<td><label>扣薪第三人地址(30字)</label></td>
						<td><input id="iptcourtDocAddAddress" style="width : 500px"></input></td>
					</tr>
				</table>
				<table style="background-color:#8FBC8F;">
					<tr>
						<td><label>分配金額</label></td>
						<td><input id="iptcourtDocDistributionAmount" ></input></td>
						<td><label>核准暫緩日</label></td>
						<td><input id="iptcourtDocApprovedDelayDate" ></input></td>
						<td><label>暫緩到期日</label></td>
						<td><input id="iptcourtDocDelayEndDate" ></input></td>
						<td><label>查封指界日</label></td>
						<td><input id="iptcourtDocSectorDate" ></input></td>
						<td><label>測量日</label></td>
						<td><input id="iptcourtDocMeasureDate" ></input></td>
					</tr>
					<tr>
						<td><label>鑑價日</label></td>
						<td><input id="iptcourtDocValuationDate" ></input></td>
						<td><label>複丈日</label></td>
						<td><input id="iptcourtDocRebirthDate" ></input></td>
						<td><label>履勘日</label></td>
						<td><input id="iptcourtDocSurveyDate" ></input></td>
						<td><label>詢價日</label></td>
						<td><input id="iptcourtDocInquiryDate" ></input></td>
						<td><label>一拍日</label></td>
						<td><input id="iptcourtDocFirstSaleDate" ></input></td>
					</tr>
					<tr>
						<td><label>二拍日</label></td>
						<td><input id="iptcourtDocSecondSaleDate" ></input></td>
						<td><label>三拍日</label></td>
						<td><input id="iptcourtDocThirdSaleDate" ></input></td>
						<td><label>公告應買日</label></td>
						<td><input id="iptcourtDocPostBuyDate" ></input></td>
						<td><label>公告到期日</label></td>
						<td><input id="iptcourtDocPostEndDate" ></input></td>
					</tr>
					<tr>
						<td><label>減拍日</label></td>
						<td><input id="iptcourtDocReduceSaleDate" ></input></td>
						<td><label>塗銷登記日</label></td>
						<td><input id="iptcourtDocDestoryDate" ></input></td>
						<td><label>實際分配日</label></td>
						<td><input id="iptcourtDocRealDistributionDate" ></input></td>
					</tr>
				</table>
				<table>
					<tr>
						<td><label>進度</label></td>
						<td><input id="iptcourtDocProgress" style="width : 900px"></input></td>
					</tr>
					<tr>
						<td><label>備註</label></td>
						<td><input id="iptcourtDocRemark" style="width : 900px"></input></td>
					</tr>
				</table>
				<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
					<div style="overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;" align="center">陳報</div>
		       	 	<table>
		           	 	<tr>
		           	 		<td><label>申報債權-文到</label></td>
							<td><input id="iptcourtDocApplyDebtDays" style="width : 50px"></input></td>
							<td><label>日內</label></td>
		           	 		<td><label>受償情形-文到</label></td>
							<td><input id="iptcourtDocRepayDays" style="width : 50px"></input></td>
							<td><label>日內</label></td>
							<td><label>使用情形-文到</label></td>
							<td><input id="iptcourtDocUseDays" style="width : 50px"></input></td>
							<td><label>日內</label></td>
							<td><label>陳報意見-文到</label></td>
							<td><input id="iptcourtDocOpinionDays" style="width : 50px"></input></td>
							<td><label>日內</label></td>
							<td><label>匯款帳戶-文到</label></td>
							<td><input id="iptcourtDocAccountDays" style="width : 50px"></input></td>
							<td><label>日內</label></td>
		           	 	</tr>
		           	 </table>
		           	 <table>
		           	 	<tr>
		           	 		<td><label>陳報匯款入帳聲請書-文到</label></td>
							<td><input id="iptcourtDocPleaseDays" style="width : 50px"></input></td>
							<td><label>日內</label></td>
		           	 		<td><label>陳報其他</label></td>
							<td><input id="iptcourtDocReportOther" ></input></td>
							<td><label>文到</label></td>
							<td><input id="iptcourtDocReportOtherDays" style="width : 50px"></input></td>
							<td><label>日內</label></td>
		           	 	</tr>
	           	 	</table>
		           	 <table>
		           	 	<tr>
		           	 		<td><label>陳報說明</label></td>
							<td><input id="iptcourtDocReportDescription" ></input></td>
		           	 	</tr>
		           	 </table>
	           	</div>
				<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
					<div style="overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;" align="center">補正</div>
		           	 <table>
		           	 	<tr>
		           	 		<td>
		           	 			<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
				           	 		<div>
										<input type="checkbox" name="ckbcourtDoc" value="all" id="ckbcourtDocAll" checked>全選
										<input type="checkbox" name="ckbcourtDoc" value="transcripts" id="ckbcourtDocTranscripts">戶謄
										<input type="checkbox" name="ckbcourtDoc" value="coOwnedTranscripts" id="ckbcourtDocCoOwnedTranscripts">共有人戶謄
										<input type="checkbox" name="ckbcourtDoc" value="mortgageeTranscripts" id="ckbcourtDocMortgageeTranscripts">抵押權人戶謄
										<input type="checkbox" name="ckbcourtDoc" value="lawTranscripts" id="ckbcourtDocLawTranscripts">法代戶謄
										<input type="checkbox" name="ckbcourtDoc" value="heirTranscripts" id="ckbcourtDocHeirTranscripts">繼承人戶謄
										<input type="checkbox" name="ckbcourtDoc" value="dirtTranscripts" id="ckbcourtDocDirtTranscripts">土謄
										<input type="checkbox" name="ckbcourtDoc" value="builtTranscripts" id="ckbcourtDocBuiltTranscripts">建謄
										<input type="checkbox" name="ckbcourtDoc" value="distribution" id="ckbcourtDocDistribution">分配表
										<input type="checkbox" name="ckbcourtDoc" value="thingThird" id="ckbcourtDocThingThird">事項表(第三人)
										<input type="checkbox" name="ckbcourtDoc" value="thingDebt" id="ckbcourtDocThingDebt">事項表(債權人)
									</div>
									<div>
										<input type="checkbox" name="ckbcourtDoc" value="coOwned" id="ckbcourtDocCoOwned">共有人名冊
										<input type="checkbox" name="ckbcourtDoc" value="debtDoc" id="ckbcourtDocDebtDoc">債權文件
										<input type="checkbox" name="ckbcourtDoc" value="detail" id="ckbcourtDocDetail">帳務明細
										<input type="checkbox" name="ckbcourtDoc" value="file" id="ckbcourtDocFile">執名附件
										<input type="checkbox" name="ckbcourtDoc" value="debtContinue" id="ckbcourtDocDebtContinue">債證續行表
										<input type="checkbox" name="ckbcourtDoc" value="cashierCheck" id="ckbcourtDocCashierCheck">本票
										<input type="checkbox" name="ckbcourtDoc" value="recovery" id="ckbcourtDocRecovery">回復所有權登記
										<input type="checkbox" name="ckbcourtDoc" value="other" id="ckbcourtDocOther">其它
									</div>
								</div>
							</td>
		           	 	</tr>
		           	 </table>
		           	 <table>
		           	 	<tr id="trcourtDocTranscripts">
		           	 		<td><input type="checkbox" name="namecourtDocTranscriptsSub" value="transcripts" id="ckbcourtDocTranscriptsSub">戶謄</td>
		           	 		<td><input id="iptcourtDocTranscriptsDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 		<td><label>備註</label></td>
							<td><input id="iptcourtDocTranscriptsRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocTranscriptsRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocTranscriptsRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocTranscriptsRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocCoOwnedTranscripts">
		           	 		<td><input type="checkbox" name="namecourtDocCoOwnedTranscriptsSub" value="transcripts" id="ckbcourtDocCoOwnedTranscriptsSub">共有人戶謄</td>
							<td><input id="iptcourtDocCoOwnedTranscriptsDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocCoOwnedTranscriptsRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocCoOwnedTranscriptsRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocCoOwnedTranscriptsRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocCoOwnedTranscriptsRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocMortgageeTranscripts">
		           	 		<td><input type="checkbox" name="namecourtDocMortgageeTranscriptsSub" value="transcripts" id="ckbcourtDocMortgageeTranscriptsSub">抵押權人戶謄</td>
							<td><input id="iptcourtDocMortgageeTranscriptsDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocMortgageeTranscriptsRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocMortgageeTranscriptsRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocMortgageeTranscriptsRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocMortgageeTranscriptsRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocLawTranscripts">
		           	 		<td><input type="checkbox" name="namecourtDocLawTranscriptsSub" value="transcripts" id="ckbcourtDocLawTranscriptsSub">法代戶謄</td>
							<td><input id="iptcourtDocLawTranscriptsDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocLawTranscriptsRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocLawTranscriptsRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocLawTranscriptsRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocLawTranscriptsRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocHeirTranscripts">
		           	 		<td><input type="checkbox" name="namecourtDocHeirTranscriptsSub" value="transcripts" id="ckbcourtDocHeirTranscriptsSub">繼承人戶謄</td>
							<td><input id="iptcourtDocHeirTranscriptsDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocHeirTranscriptsRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocHeirTranscriptsRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocHeirTranscriptsRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocHeirTranscriptsRelaTd(0)"></td>
		           	 	</tr>
		        	 	<tr id="trcourtDocDirtTranscripts">
		           	 		<td><input type="checkbox" name="namecourtDocDirtTranscriptsSub" value="transcripts" id="ckbcourtDocDirtTranscriptsSub">土謄</td>
							<td><input id="iptcourtDocDirtTranscriptsDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocDirtTranscriptsRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocDirtTranscriptsRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocDirtTranscriptsRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocDirtTranscriptsRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocBuiltTranscripts">
		           	 		<td><input type="checkbox" name="namecourtDocBuiltTranscripts" value="transcripts" id="ckbcourtDocBuiltTranscriptsSub">建謄</td>
							<td><input id="iptcourtDocBuiltTranscriptsDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocBuiltTranscriptsRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocBuiltTranscriptsRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocBuiltTranscriptsRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocBuiltTranscriptsRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocDistribution">
		           	 		<td><input type="checkbox" name="namecourtDocDistributionSub" value="transcripts" id="ckbcourtDocDistributionSub">分配表</td>
							<td><input id="iptcourtDocDistributionDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocDistributionRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocDistributionRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocDistributionRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocDistributionRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocThingThird">
		           	 		<td><input type="checkbox" name="namecourtDocThingThirdSub" value="transcripts" id="ckbcourtDocThingThirdSub">事項表(第三人)</td>
							<td><input id="iptcourtDocThingThirdDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocThingThirdRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocThingThirdRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocThingThirdRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocThingThirdRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocThingDebt">
		           	 		<td><input type="checkbox" name="namecourtDocThingDebtSub" value="transcripts" id="ckbcourtDocThingDebtSub">事項表(債權人)</td>
							<td><input id="iptcourtDocThingDebtDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocThingDebtRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocThingDebtRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocThingDebtRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocThingDebtRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocCoOwned">
		           	 		<td><input type="checkbox" name="namecourtDocCoOwnedSub" value="transcripts" id="ckbcourtDocCoOwnedSub">共有人名冊</td>
							<td><input id="iptcourtDocCoOwnedDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocCoOwnedRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocCoOwnedRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocCoOwnedRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocCoOwnedRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocDebtDoc">
		           	 		<td><input type="checkbox" name="namecourtDocDebtDocSub" value="transcripts" id="ckbcourtDocDebtDocSub">債權文件</td>
							<td><input id="iptcourtDocDebtDocDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocDebtDocRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocDebtDocRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocDebtDocRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocDebtDocRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocDetail">
		           	 		<td><input type="checkbox" name="namecourtDocDetailSub" value="transcripts" id="ckbcourtDocDetailSub">帳務明細</td>
							<td><input id="iptcourtDocDetailDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocDetailRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocDetailRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocDetailRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocDetailRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocFile">
		           	 		<td><input type="checkbox" name="namecourtDocFileSub" value="transcripts" id="ckbcourtDocFileSub">執名附件</td>
							<td><input id="iptcourtDocFileDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocFileRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocFileRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocFileRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocFileRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocDebtContinue">
		           	 		<td><input type="checkbox" name="namecourtDocDebtContinueSub" value="transcripts" id="ckbcourtDocDebtContinueSub">債證續行表</td>
							<td><input id="iptcourtDocDebtContinueDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocDebtContinueRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocDebtContinueRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocDebtContinueRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocDebtContinueRelaTd(0)"></td>
		        	 	</tr>
		        	 	<tr id="trcourtDocCashierCheck">
		           	 		<td><input type="checkbox" name="namecourtDocCashierCheckSub" value="transcripts" id="ckbcourtDocCashierCheckSub">本票</td>
							<td><input id="iptcourtDocCashierCheckDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocCashierCheckRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocCashierCheckRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocCashierCheckRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocCashierCheckRelaTd(0)"></td>
		        	 	</tr>
		           	 </table>
		           	 <table>
		        	 	<tr id="trcourtDocRecovery">
		           	 		<td><input type="checkbox" name="namecourtDocRecoverySub" value="transcripts" id="ckbcourtDocRecoverySub">回復所有權登記</td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocRecoveryRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocRecoveryRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocRecoveryRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocRecoveryRelaTd(0)"></td>
		        	 	</tr>
		           	 </table>
		           	 <table>
		        	 	<tr id="trcourtDocOther">
		           	 		<td><input type="checkbox" name="namecourtDocOtherSub" value="transcripts" id="ckbcourtDocOtherSub">其它</td>
							<td><input id="iptcourtDocOtherName" ></input><input id="iptcourtDocOtherDays" style="width : 50px"></input></td>
		   	 				<td><label>日內</label></td>
		   	 				<td><label>備註</label></td>
							<td><input id="iptcourtDocOtherRemark" ></input></td>
							<td><label>相對人</label></td>
							<td><select id="iptcourtDocOtherRelationPerson_0"><option value="">請選擇</option></select>
								<input id="iptcourtDocOtherRelationPersonId_0" style="display:none"></input></td>
							<td><img src="../images/plus.png" onclick="law.addDoc.courtDoc.addcourtDocOtherRelaTd(0)"></td>
		        	 	</tr>
		           	 </table>
		           	 <table>
		           	 	<tr>
		           	 		<td><label>補正說明</label></td>
		           	 		<td><input id="iptcourtDocEdit"></input></td>
		           	 	</tr>
		           	 </table>
           		</div>
           	
           		<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
					<div style="overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;" align="center">繳費(含補繳)</div>
		       	 	<table>
		           	 	<tr>
		           	 		<td><label>程序費-金額</label></td>
							<td><input id="iptcourtDocProgramCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocProgramDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 		<td><label>訴訟費-金額</label></td>
							<td><input id="iptcourtDocLegalActionCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocLegalActionDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 	</tr>
		           	 	<tr>
		           	 		<td><label>執行費-金額</label></td>
							<td><input id="iptcourtDocExcuteCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocExcuteDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 		<td><label>補發費-金額</label></td>
							<td><input id="iptcourtDocReplacementCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocReplacementDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 	</tr>
		           	 	<tr>
		           	 		<td><label>指界費-金額</label></td>
							<td><input id="iptcourtDocSectorCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocSectorDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 		<td><label>鑑價費-金額</label></td>
							<td><input id="iptcourtDocValuationCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocValuationDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 	</tr>
		           	 	<tr>
		           	 		<td><label>複丈費-金額</label></td>
							<td><input id="iptcourtDocRebirthCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocRebirthDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 		<td><label>測量費-金額</label></td>
							<td><input id="iptcourtDocMeasureCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocMeasureDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 	</tr>
		           	 	<tr>
		           	 		<td><label>提存金-金額</label></td>
							<td><input id="iptcourtDocSaveCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocSaveDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 		<td><label>集保-金額</label></td>
							<td><input id="iptcourtDocCentralizedCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocCentralizedDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 	</tr>
		           	 	<tr>
		           	 		<td><label>保單-金額</label></td>
							<td><input id="iptcourtDocInsuranceCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocInsuranceDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 		<td><label>郵局-金額</label></td>
							<td><input id="iptcourtDocPostCost" ></input></td>
							<td><label>繳費期限</label></td>
							<td><input id="iptcourtDocPostDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
		           	 	</tr>
		       	 	</table>
	           	</div>
	           	
	           	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
					<div style="overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;" align="center">登報</div>
		       	 	<table>
		           	 	<tr>
		           	 		<td><label>登報-文到</label></td>
							<td><input id="iptcourtDocPublishDays" style="width : 50px"></input></td>
		           	 		<td><label>日內</label></td>
							<td><select id="iptcourtDocPublishObject"><option value="">請選擇</option></select></td>
		           	 		<td><label>事項</label></td>
							<td><select id="iptcourtDocPublishThings"><option value="">請選擇</option></select></td>
							<td><label>備註</label></td>
							<td><input id="iptcourtDocPublishRemark" ></input></td>
		           	 	</tr>
		       	 	</table>
	           	</div>
	           	
	           	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
					<div style="overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;" align="center">開庭</div>
		       	 	<table>
		           	 	<tr>
		           	 		<td><label>開庭日期</label></td>
							<td><input id="iptcourtDocToCourtDate" ></input></td>
		           	 		<td><label>開庭時間</label></td>
							<td><input id="iptcourtDocToCourtTime" ></input></td>
		           	 		<td><label>期日種類</label></td>
							<td><input id="iptcourtDocToCourtType" ></input></td>
		           	 	</tr>
		           	 	<tr>
							<td><label>注意事項</label></td>
							<td><input id="iptcourtDocToCourtNotice" ></input></td>
						</tr>
		       	 	</table>
		       	 	<table>
		       	 		<tr>
		       	 			<td><input type="checkbox" name="ckbcourtDocToCourt" value="1" id="ckbcourtDocAppointmentLetter">委任狀</td>
		       	 			<td><input type="checkbox" name="ckbcourtDocToCourt" value="1" id="ckbcourtDocAppointmentLetterCriminal">委任狀(刑事)</td>
		       	 			<td><input type="checkbox" name="ckbcourtDocToCourt" value="1" id="ckbcourtDocToCourtApplyBook">申請書</td>
		       	 			<td><input type="checkbox" name="ckbcourtDocToCourt" value="1" id="ckbcourtDocToCourtDetail">帳務明細</td>
		       	 			<td><input type="checkbox" name="ckbcourtDocToCourt" value="1" id="ckbcourtDocToCourtOther">其他</td>
							<td><input id="iptcourtDocToCourtOther" ></input></td>
		       	 		</tr>
		       	 	</table>
	           	</div>
	           	
	           	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content">
					<div style="overflow: auto;margin:5px 5px 5px 5px;background-color:#90EE90;font-weight:bold;" align="center">導往執行</div>
		       	 	<table>
		           	 	<tr>
		           	 		<td><label>導往執行日期</label></td>
							<td><input id="iptcourtDocExecutionDate" ></input></td>
		           	 		<td><label>導往執行時間</label></td>
							<td><input id="iptcourtDocExecutionTime" ></input></td>
		           	 	</tr>
		       	 	</table>
		       	 	<table>
		       	 		<tr>
		       	 			<td><input type="checkbox" name="ckbcourtDocExecution" value="1" id="ckbcourtDocExecutionAppointmentLetter">委任狀</td>
		       	 			<td><input type="checkbox" name="ckbcourtDocExecution" value="1" id="ckbcourtDocExecutionOther">其他</td>
							<td><input id="iptcourtDocExecutionOther" ></input></td>
		       	 		</tr>
		       	 	</table>
	           	</div>
           	</div>
            
          </div>
  		</div>
	</div>
	
	<div style="overflow: auto;margin:5px 5px 5px 5px" class="ui-widget-content" id="divaddDoccashierCheck">
	本票<img alt="新增本票" src="../images/plus.png" onclick="law.addDoc.cashierCheck.addcashierChecksubtab()" id="imgaddDocCashierCheck">

        <div id="cashierChecksubtabs">
          <ul>
            <li><a href="#cashierChecksubtabs-0">本票</a></li>
          </ul>
          <div id="cashierChecksubtabs-0">
            <div>
           	 <table>
           	 	<tr style="display:none"><td><input id="iptcashierCheckDocType"></input><input id="iptcashierCheckDocId"></input></td></tr>
           	 	<tr>
					<td><label>業主調件日</label></td>
					<td><input id="iptcashierCheckBankDate" ></input></td>
					<td><label style="color:red">*收文日期</label></td>
					<td><input id="iptcashierCheckReceivedDate"></input></td>
					<td><label style="color:red">*文件狀態</label></td>
					<td><select id="iptcashierCheckDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label style="color:red">*文件類別</label></td>
					<td><select id="iptcashierCheckTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label style="color:red">*文件項目</label></td>
					<td><select id="iptcashierCheckTypeTwo"><option value="">請選擇</option></select></td>
					<td><label style="color:red">*債權人</label></td>
					<td><select id="iptcashierCheckBankName" disabled><option value="">請選擇</option></select></td>
					<td><label>原債權人</label></td>
					<td><select id="iptcashierCheckOldBankName"><option value="">請選擇</option></select></td>
				</tr>
			</table>
			<table>
				<tr id="iptcashierCheckRelationPersonTr">
					<td><label style="color:red">*相對人</label></td>
					<td><select id="iptcashierCheckRelationPerson_0"><option value="">請選擇</option></select>
						<input id="iptcashierCheckRelationPersonId_0" style="display:none"></input></td>
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
	債讓<img alt="債讓" src="../images/plus.png" onclick="law.addDoc.debts.adddebtssubtab()" id="imgaddDocDebts">

        <div id="debtssubtabs">
          <ul>
            <li><a href="#debtssubtabs-0">債讓</a></li>
          </ul>
          <div id="debtssubtabs-0">

        <div>
           	 <table>
           	 	<tr style="display:none"><td><input id="iptdebtsDocType"></input><input id="iptdebtsDocId"></input></td></tr>
           	 	<tr>
					<td><label>業主調件日</label></td>
					<td><input id="iptdebtsBankDate" ></input></td>
					<td><label style="color:red">*收文日期</label></td>
					<td><input id="iptdebtsReceivedDate"></input></td>
					<td><label style="color:red">*文件狀態</label></td>
					<td><select id="iptdebtsDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label style="color:red">*文件類別</label></td>
					<td><select id="iptdebtsTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label style="color:red">*文件項目</label></td>
					<td><select id="iptdebtsTypeTwo"><option value="">請選擇</option></select></td>
					<td><label style="color:red">*債權人</label></td>
					<td><select id="iptdebtsBankName" disabled><option value="">請選擇</option></select></td>
					<td><label>原債權人</label></td>
					<td><select id="iptdebtsOldBankName"><option value="">請選擇</option></select></td>
				</tr>
			</table>
			<table>
				<tr id="iptdebtsRelationPersonTr">
					<td><label style="color:red">*相對人</label></td>
					<td><select id="iptdebtsRelationPerson_0"><option value="">請選擇</option></select>
						<input id="iptdebtsRelationPersonId_0" style="display:none"></input></td>
					<td><img src="../images/plus.png" onclick="law.addDoc.debts.adddebtsRelaTd(0)"></td>
				</tr>
			</table>
			<table style="background-color:#FFEBCD;">
				<tr>
					<td><label>(換發債證)法院年字案股</label></td>
					<td><select id="iptdebtsCourtYearCourt" ><option value="">請選擇</option></select></td>
					<td><label>年度</label></td>
					<td><input id="iptdebtsCourtYearYear" style="width : 50px"></input></td>
					<td><label>字</label></td>
					<td><input id="iptdebtsCourtYearTxt" style="width : 50px"></input></td>
					<td><label>股別</label></td>
					<td><input id="iptdebtsCourtYearShare" style="width : 50px"></input></td>
					<td><label>案號</label></td>
					<td><input id="iptdebtsCourtYearCaseId" style="width : 60px"></input></td>
				</tr>
			</table>
			<table>
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
	債權文件<img alt="債權文件" src="../images/plus.png" onclick="law.addDoc.claimsDoc.addclaimsDocsubtab()" id="imgaddDocClaimsDoc">

        <div id="claimsDocsubtabs">
          <ul>
            <li><a href="#claimsDocsubtabs-0">債權文件</a></li>
          </ul>
          <div id="claimsDocsubtabs-0">
            <div>
           	 <table>
           	 	<tr style="display:none"><td><input id="iptclaimsDocDocType"></input><input id="iptclaimsDocDocId"></input></td></tr>
           	 	<tr>
					<td><label>業主調件日</label></td>
					<td><input id="iptclaimsDocBankDate" ></input></td>
					<td><label style="color:red">*收文日期</label></td>
					<td><input id="iptclaimsDocReceivedDate"></input></td>
					<td><label style="color:red">*文件狀態</label></td>
					<td><select id="iptclaimsDocDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label style="color:red">*文件類別</label></td>
					<td><select id="iptclaimsDocTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label style="color:red">*文件項目</label></td>
					<td><select id="iptclaimsDocTypeTwo"><option value="">請選擇</option></select></td>
					<td><label style="color:red">*債權人</label></td>
					<td><select id="iptclaimsDocBankName" disabled><option value="">請選擇</option></select></td>
					<td><label>原債權人</label></td>
					<td><select id="iptclaimsDocOldBankName"><option value="">請選擇</option></select></td>
				</tr>
			</table>
			<table>
				<tr id="iptclaimsDocRelationPersonTr">
					<td><label style="color:red">*相對人</label></td>
					<td><select id="iptclaimsDocRelationPerson_0"><option value="">請選擇</option></select>
						<input id="iptclaimsDocRelationPersonId_0" style="display:none"></input></td>
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
	卷宗<img alt="卷宗" src="../images/plus.png" onclick="law.addDoc.file.addfilesubtab()" id="imgaddDocFile">

        <div id="filesubtabs">
          <ul>
            <li><a href="#filesubtabs-0">卷宗</a></li>
          </ul>
          <div id="filesubtabs-0">
            <div>
           	 <table>
           	 	<tr style="display:none"><td><input id="iptfileDocType"></input><input id="iptfileDocId"></input></td></tr>
           	 	<tr>
					<td><label>業主調件日</label></td>
					<td><input id="iptfileBankDate" ></input></td>
					<td><label style="color:red">*收文日期</label></td>
					<td><input id="iptfileReceivedDate"></input></td>
					<td><label style="color:red">*文件狀態</label></td>
					<td><select id="iptfileDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label style="color:red">*文件類別</label></td>
					<td><select id="iptfileTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label style="color:red">*文件項目</label></td>
					<td><select id="iptfileTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptfileBankName" disabled><option value="">請選擇</option></select></td>
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
	其它<img alt="其它" src="../images/plus.png" onclick="law.addDoc.other.addothersubtab()" id="imgaddDocOther">

        <div id="othersubtabs">
          <ul>
            <li><a href="#othersubtabs-0">其它</a></li>
          </ul>
          <div id="othersubtabs-0">
            <div>
           	 <table>
           	 	<tr style="display:none"><td><input id="iptotherDocType"></input><input id="iptotherDocId"></input></td></tr>
           	 	<tr>
					<td><label>業主調件日</label></td>
					<td><input id="iptotherBankDate" ></input></td>
					<td><label style="color:red">*收文日期</label></td>
					<td><input id="iptotherReceivedDate"></input></td>
					<td><label>委任狀編號</label></td>
					<td><input id="iptotherAppointmentLetterCode" ></input></td>
					<td><label style="color:red">*文件狀態</label></td>
					<td><select id="iptotherDocStatus"><option value="">請選擇</option></select></td>
				</tr>
				<tr>
					<td><label style="color:red">*文件類別</label></td>
					<td><select id="iptotherTypeOne" disabled><option value="">請選擇</option></select></td>
					<td><label style="color:red">*文件項目</label></td>
					<td><select id="iptotherTypeTwo"><option value="">請選擇</option></select></td>
					<td><label>債權人</label></td>
					<td><select id="iptotherBankName" disabled><option value="">請選擇</option></select></td>
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
	
	<!-- add By Jia 2017-08-10 regex提醒輸入-->
	<div id="addDocRegex">
		<div style="overflow: auto;margin:5px 5px 5px 5px;" align="center">
			<label id="addDocRegexTxt"></label>
		</div>
	</div>
	
	<!-- add By Jia 2017-08-11 輸入完顯示儲存畫面-->
	<div id="saveEndDiv">
			<table id="docSaveEndTable" class="display" cellspacing="0" width="100%" >
				    <thead>
		            <tr>
		            	<th>序</th>
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
		                <th>(執名)發文日</th>
		                <th>(執名)最近執行日</th>
		                <th>(執名)備註</th>
		                <th>陳報</th>
		                <th>補正</th>
		                <th>繳費</th>
		                <th>登報</th>
		                <th>開庭</th>
		                <th>導往執行</th>
		            </tr>
		        </thead>
		    </table>
	</div>
</body>
</html>