<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

	<div ng-app="myApp" ng-controller="customersCtrl">
		<table border="1">
			<tr>
				<th>案號</th>
				<th>送簽日期</th>
				<th>業主名稱</th>
				<th>產品名稱</th>
				<th>清償對象</th>
				<th>角色</th>
				<th>簽呈類型</th>
				<th>期數</th>
				<th>繳款起日</th>
				<th>繳款迄日</th>
				<th>每期金額</th>
				<th>總繳款金額</th>
				<th>申請人</th>
			</tr>
			<tr ng-repeat="x in scopedata">
				<td>{{x.caseId}}</td>
				<td>{{x.applyDate}}</td>
				<td>{{x.bankName}}</td>
				<td>{{x.prodName}}</td>
				<td>{{x.payer}}</td>
				<td>{{x.payerRole}}</td>
				<td>{{x.type}}</td>
				<td>{{x.periods}}</td>
				<td>{{x.paytimeStart}}</td>
				<td>{{x.paytimeEnd}}</td>
				<td>{{x.ammountP}}</td>
				<td>{{x.ammountSum}}</td>
				<td>{{x.applyUserId}}</td>
			</tr>
		</table>
	</div>
	<script>
		var app = angular.module('myApp', []);
		app	.controller(
				'customersCtrl',
				function($scope, $http) {
							$http.get("../../pages/cek/recordcheckform/recordcheckformAction!findRecordCheckform.action").then(function(response) {
								$scope.scopedata = response.data.data;
							});
			});
	</script>

</body>
</html>
