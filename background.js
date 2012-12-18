// Copyright (c) 2012 

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    var link = tab.url
	link = link.replace('?','/');
	link = link.replace('=','/');
	link = link.replace('watch/','');
	window.open(link,'_newtab');  
});

	

