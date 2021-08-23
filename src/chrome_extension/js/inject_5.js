var inj_5 = document.createElement('script');
inj_5.src = chrome.extension.getURL('js/this_quiz_fill.js');
inj_5.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(inj_5);