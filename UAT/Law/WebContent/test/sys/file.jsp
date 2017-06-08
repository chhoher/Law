<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<body>
	<!-- Add By Jia 2017-03-07 新增file的JS功能 -->
	<script type="text/javascript" src="legaljs/sys/sysfile.js"></script>
	<style type="text/css">
#drop {
	width: 500px;
	height: 50px;
	background: #eee;
	border: 3px dashed;
	text-align: center;
	padding: 50;
}

.active {
	border: 3px dashed red !important;
}

.bar {
	height: 18px;
	background: red;
	text-align: center;
	font-weight: bold;
}
</style>

	<script type="text/javascript">
		$(document).ready(	function() {
			var opt = {
				"oLanguage" : {
					"sUrl" : "i18n/Chinese-traditional.json"
				},
				"bJQueryUI" : true,
				"ajax" : "pages/sys/file/fileAction!findFile.action",
				"columns" : [ {
					"data" : "fileName"
				} ]
			};
			
			$("#fileTable").dataTable(opt);

			$('#fileupload').fileupload({
				dropZone : $('#drop'), //拖曳上傳區域
				url : 'pages/sys/file/fileAction!fileUpload.action', //上傳處理的action
				dataType : 'json',
				//將要上傳的資料顯示
				add : function(e, data) {
					var tpl = $('<div class="working"><span class="pro" /><span class="info"></span><span class="ctrl">取消</span></div>');
					tpl.find('.info').text(data.files[0].name);
					data.context = tpl.appendTo($(".item"));
					tpl.find('.ctrl')	.click(	function() {
						tpl.fadeOut(function() {																
							tpl.remove();
						});
					});
					//執行 data.submit() 開始上傳
					$("#start").click(function() {
						var jqXHR = data.submit();
					});
				},
				//單一檔案進度
				progress : function(e, data) {
					var progress = parseInt(data.loaded	/ data.total* 100, 10);
					data.context.find('.pro')	.text(progress + "%　　").change();
					if (progress == 100) {
						data.context.removeClass('working');
					}
				},
				//整體進度
				progressall : function(e, data) {
					var progress = parseInt(data.loaded/ data.total* 100, 10);
					$('#progress .bar').css('width',	progress + '%');
					$('#progress .bar').text(progress + '%');
				},
				//上傳失敗
				fail : function(e, data) {
					data.context.addClass('error');
				},
				//單一檔案上傳完成
				done : function(e, data) {
					var r = data.result;
					alert(r);
					console.log('r = ' + r.msg);
					formatDatetime = r.msg;
					var tmp = data.context.find('.pro').text();
					data.context.find('.pro').text(tmp
						+ data.result.status
						+ "　　");
				},
				//全部上傳完畢
				stop : function(e) {
					//alert("上傳完畢");
				}
			});

			//拖曳成功讓框變色
			$("#drop").bind({
				dragenter : function() {
					$(this).addClass("active");
				},
				dragleave : function() {
					$(this).removeClass("active");
				}
			});

		});
	</script>

	<!-- 資料字典主畫面 start -->
	<div>
		<div style="overflow: auto; margin: 5px 5px 5px 5px"
			class="ui-widget-content">
			<table>
				<tr>
					<td>
						<button class="ui-button ui-widget ui-corner-all" id="btnaddfile">
							<span class="ui-icon ui-icon-gear"></span> 新增
						</button>
						<button class="ui-button ui-widget ui-corner-all"
							id="btnqueryfile">
							<span class="ui-icon ui-icon-gear"></span> 查詢
						</button>
						<button class="ui-button ui-widget ui-corner-all"
							id="btndeletefile">
							<span class="ui-icon ui-icon-gear"></span> 刪除
						</button>
					</td>
				</tr>
				<!-- 查詢條件欄位 -->
				<table>
					<tr>
						<td><label for="labsearchfileName">文件名稱: </label> <input
							id="iptsearchfileName"></input></td>
					</tr>
				</table>
				<!-- 查詢條件欄位 -->
			</table>
		</div>
		<div style="margin: 5px 5px 5px 5px">
			<table id="fileTable">
				<thead>
					<tr>
						<th>文件名稱</th>
					</tr>
				</thead>
				<tfoot>
					<tr>
						<th>文件名稱</th>
					</tr>
				</tfoot>
			</table>

		</div>
	</div>
	<!-- 資料字典主畫面 end -->

	<div id="file-dialog-form" title="新增文件">
		<p class="validateTips"></p>

		<form>
			<fieldset>
				<label for="labfileName">文件名稱</label> 
				<input type="text"name="iptaddfileName" id="iptaddfileName" value=""
					class="text ui-widget-content ui-corner-all"> <br> <br>
				<div id="drop">
					拖曳至此上傳 
				</div>
				<input id="fileupload" name="upload" type="file" multiple>
				<input id="start" value="開始上傳" type="button">
				<div id="progress">
					<div class="bar" style="width: 0%;"></div>
					<div class="item"></div>
				</div>
				<input type="submit" tabindex="-1"
					style="position: absolute; top: -1000px">
			</fieldset>
		</form>

	</div>

</body>
</html>
