/**
 * Add By Jia 2017-03-27 login.js 實作login.jsp 登入相關內容
 */

// 宣告全域變數

// 登入內容
function login(){
		var username = $("#username").val();
		var password = $("#password").val();
		
		$.ajax({
			url : '../../pages/sys/login/loginAction!login.action',
			data : {
				"username" : username,
				"password" : password
			},
			type : "POST",
			dataType : 'json',
			success : function(response){
				if (response.success == "success") {
					document.location.href='../../index.html';
				} else {
					alert(response.msg);
				}
			},
			error : function(xhr, ajaxOptions, thrownError){
				alert(xhr.status);
				alert(thrownError);
			}
		});
		
}
