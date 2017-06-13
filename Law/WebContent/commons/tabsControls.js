var tabArr= [];
var tabcount = 0;
						
function addTabs(menuid, menname, menuUrl) {
var tabs = $("#tabs").tabs();

	tabcount++;
	var tabTitle = menname;
	var tabHref = menuUrl;
	var tabId = "tabs-" + menuid;
	var tabTemplate = "<li><a href='"
			+ tabHref
			+ "'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>"

	var label = tabTitle, id = tabId, li = $(tabTemplate.replace(/#\{href\}/g,
			"#" + id).replace(/#\{label\}/g, label));

	var key = menname;
	tabArr[key + "_loaded"] = 0;

	tabs.find(".ui-tabs-nav").append(li);
	tabs.tabs("refresh");
	tabs.tabs({
				active : tabcount
			});
}