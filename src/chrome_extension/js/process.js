window.onload = function () {
    document.getElementById('this_video').addEventListener('click', f_this_video, false);
    document.getElementById('quick_finish').addEventListener('click', f_quick_finish, false);
    var minus = document.getElementsByClassName('minus');
    for (i = 0; i < minus.length; i++) {
        minus[i].addEventListener('click', f_minus, false);
    }
    var plus = document.getElementsByClassName('plus');
    for (i = 0; i < plus.length; i++) {
        plus[i].addEventListener('click', f_plus, false);
    }
    document.getElementById('accelerate').addEventListener('click', f_accelerate, false);
    document.getElementById('this_quiz').addEventListener('click', f_this_quiz, false);
    document.getElementById('submit').addEventListener('click', f_submit, false);
    //document.getElementById('random_quiz').addEventListener('click', f_random_quiz, false);
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

function f_accelerate() {
    localStorage.speed = parseFloat(document.getElementById('speed').value);
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
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
    if (!localStorage.submit) {
        localStorage.submit = '0';
    }
    document.getElementById('submit').checked = Boolean(parseInt(localStorage.submit));
}

function f_minus() {
    var edit = this.parentNode.nextSibling.nextSibling.firstChild.nextSibling;
    if (parseFloat(edit.value) > 0.25) {
        edit.value = parseFloat(edit.value) - 0.25;
    }
    localStorage[edit.id] = parseFloat(edit.value);
}

function f_plus() {
    var edit = this.parentNode.previousSibling.previousSibling.firstChild.nextSibling;
    edit.value = parseFloat(edit.value) + 0.25;
    localStorage[edit.id] = parseFloat(edit.value);
}

function f_this_quiz() {
    if (document.getElementById('submit').checked) {
        chrome.tabs.executeScript({
            file: 'js/inject_4.js'
        })
    } else {
        chrome.tabs.executeScript({
            file: 'js/inject_5.js'
        })
    }
}

function f_submit() {
    localStorage.submit = Number(this.checked);
}

//function f_random_quiz() {}