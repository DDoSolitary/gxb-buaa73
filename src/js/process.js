window.onload=function(){
	document.getElementById('this_video').addEventListener('click', f_this_video, false);
	document.getElementById('quick_finish').addEventListener('click', f_quick_finish, false);
	} 
function f_quick_finish()
{
	chrome.tabs.executeScript({
          file: 'js/inject_1.js'
        })
}

function f_this_video()
{
	chrome.tabs.executeScript({
          file: 'js/inject_2.js'
        })
}