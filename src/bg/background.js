function sendLink(url, info) {
	var xhr = new XMLHttpRequest();
	if (!url) {
		alert('No address specified!');
		return;
	}

	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.send(JSON.stringify({url: info.linkUrl}));
}
chrome.contextMenus.removeAll();
chrome.contextMenus.create({
	title: "first",
	contexts: ["link"],
	onclick: function(info) {
		chrome.storage.sync.get('postAddr', function(items) {
			sendLink(items.postAddr, info)
		});
	}
});
