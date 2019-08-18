window.onload = function () {
    document.getElementById('this_video').addEventListener('click', f_this_video, false);
    document.getElementById('quick_finish').addEventListener('click', f_quick_finish, false);
    document.getElementById('minus').addEventListener('click', f_minus, false);
    document.getElementById('plus').addEventListener('click', f_plus, false);
	document.getElementById('accelerate').addEventListener('click', f_accelerate, false);
    f_init();
};

function f_quick_finish() {
    chrome.tabs.executeScript({
        file: 'js/inject_1.js'
    })
}

function f_this_video() {
    chrome.tabs.executeScript({
        file: 'js/inject_2.js'
    })
}

function f_accelerate () {
	localStorage.speed = parseFloat(document.getElementById('speed').value);
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, localStorage.speed);
	});
	chrome.tabs.executeScript({
		file: 'js/inject_3.js'
	});
}

function f_init() {
    if (!localStorage.speed) {
		localStorage.speed = 2;
    }
	document.getElementById('speed').value = localStorage.speed;
}

function f_minus() {
    if (parseFloat(localStorage.speed) > 0.25) {
        localStorage.speed = parseFloat(localStorage.speed) - 0.25;
    }
    document.getElementById('speed').value = localStorage.speed;
}

function f_plus() {
    localStorage.speed = parseFloat(localStorage.speed) + 0.25;
    document.getElementById('speed').value= localStorage.speed;
}