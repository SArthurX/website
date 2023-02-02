function goPage(url, time) {
    setTimeout(() => window.location.href=url, time);
}

var pass = 0000;
function passgoPage(url, time) {
    var password = document.getElementById("password").value;
        if(pass == password&&password!=""){
            alert("登入成功");
            setTimeout(() => window.location.href=url, time);}
        else{
            alert("密碼錯誤");
        }
}

