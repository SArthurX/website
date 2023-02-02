function goPage(url, time) {
    setTimeout(() => window.location.href=url, time);
}

var password = 0000;
var input;

while(password!=input){
    input=prompt("請輸入密碼");
}

alert("登入成功")

if(password=input){
    location.href = 'https://sarthurx.tk/header.html';
}