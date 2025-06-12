var user=document.getElementById("user");
var pass=document.getElementById("pass");
var email=document.getElementById("email");
var test=document.getElementById("retry");
if (localStorage.getItem('signup')==='true'){
    window.location.href="trang2.html";
}

class user{
    username;
    password;
    mail;
}
a=new user;
if (pass===test){
    localStorage.setItem('signup','true');
    window.location.href='trang2.html';
    a.username=user;
    a.password=pass;
    a.mail=email;
    localStorage.setItem('1',a);    
}
b=console.log('có lấy dữ liệu'+localStorage.getItem('1'));