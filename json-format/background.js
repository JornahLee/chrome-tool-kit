let openerTabId = 0;
//
const jsonPageUrl = "json/index.html"
chrome.browserAction.onClicked.addListener(function (tab) {
    if (openerTabId > 0) {
        chrome.tabs.get(openerTabId, function(t) {
            if (t) {
                chrome.windows.update(t.windowId, {focused: true}); // 更新窗口
                chrome.tabs.update(openerTabId, {active: true});  // 更新tab
            } else {
                chrome.tabs.create({
                    url: chrome.extension.getURL(jsonPageUrl)
                }, function(tab) {
                    openerTabId = tab.id;
                })
            }
        });
    } else {
        chrome.tabs.create({
            url: chrome.extension.getURL(jsonPageUrl)
        }, function (t) {
            openerTabId = t.id;
        });
    }
});
