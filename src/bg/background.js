chrome.contextMenus.removeAll();
chrome.contextMenus.create({
	title: "first",
	contexts: ["link"],
	onclick: function(info) {
		console.log('testest');
		var request = new XMLHttpRequest();
		request.open("POST", "ff-debian-pc.home");
	}
});
