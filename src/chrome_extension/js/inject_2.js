var inj_2 = document.createElement('script');
inj_2.src = chrome.extension.getURL('js/this_video.js');
inj_2.onload = function() {
	this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(inj_2);