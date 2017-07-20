/**
 * add By Jia 2017-03-07 regex.js 包含輸入form的格式判斷，彈跳提醒
 */
law.regex = {
	CNameRegex : '',
	ENameRegex : '',
	emailRegex : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	numberRegex : /^\d+$/
};

var tips;// 提示訊息

// 提示輸入視窗
function updateTips(tipName, t) {
	tips = tipName;
	tips.text(t).addClass("ui-state-highlight");
	setTimeout(function() {
				tips.removeClass("ui-state-highlight", 1500);
			}, 500);
}

// 查看輸入欄位的長度
function checkLength(tipName, o, n, min, max) {
	if (o.val().length > max || o.val().length < min) {
		o.addClass("ui-state-error");
		updateTips(tipName, "" + n + " ,長度必須大於 " + min + " 並小於 " + max + "。");
		return false;
	} else {
		return true;
	}
}

// 查看規則
function checkRegexp(tipName, o, regexp, n) {
	if (!(regexp.test(o.val()))) {
		o.addClass("ui-state-error");
		updateTips(tipName, n);
		return false;
	} else {
		return true;
	}
}

// 清除tip Text
function refreshTipText(tipName) {
	tips = tipName;
	tips.text('');
}
