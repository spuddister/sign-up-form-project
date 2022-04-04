const pwd = document.getElementById('password');
const noMatch = document.getElementById('after-password');
const confirmPwd = document.getElementById('confirm-password');
console.log(noMatch);

pwd.addEventListener('input', checkPwd);
confirmPwd.addEventListener('input', checkPwd);

function checkPwd(){
    if (pwd.value != confirmPwd.value) {
        noMatch.textContent = '* Passwords do not match'
    } else {
        noMatch.textContent = ''
    }
}