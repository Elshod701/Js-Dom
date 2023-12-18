const elClose = document.querySelector('#close');
const nameLableInput = document.querySelector('.nameLableInput');
const surnameLableInput = document.querySelector('.surnameLableInput');
const email = document.querySelector('.emailLableInput');
const age = document.querySelector('.ageLableInput');
const value = document.querySelector('.PasswordLableInput');
const userPanel = document.querySelector('.user-panel');
const showBtn = document.querySelector('.show-user-panel');

function hiddenscript() {
    var eye = document.getElementById("eye");
    eye.style.display = "block";
}

function Showfunction() {
    var eye = document.getElementById("eye");
    var eye2 = document.getElementById("eye2");
    var pass = document.getElementById("pass");
    var value = document.getElementById('pass').value;

    if (value.length > 0) {
        eye.style.display = "block";
    }
    if (value.length == 0) {
        eye.style.display = "none";
    }
    if (pass.type === "password") {
        pass.type = "text";
        eye.style.display = "none";
        eye2.style.display = "block";
    }
    else {
        pass.type = "password";
        eye2.style.display = "none";
        eye.style.display = "block";



    }
}

function X() {
    elClose.addEventListener('click', () => {
        userPanel.style.display = 'none'
        showBtn.style.display = 'block'
    })
}

function show() {
    showBtn.addEventListener('click', () => {
        userPanel.style.display = 'block'
        showBtn.style.display = 'none'
    })
}


