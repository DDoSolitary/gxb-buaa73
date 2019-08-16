var inj_1 = document.createElement('script');
inj_1.src = chrome.extension.getURL('js/quick_finish.js');
inj_1.onload = function() {
	this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(inj_1);