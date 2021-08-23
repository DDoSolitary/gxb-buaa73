var inj_4 = document.createElement('script');
inj_4.src = chrome.extension.getURL('js/this_quiz_finish.js');
inj_4.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(inj_4);