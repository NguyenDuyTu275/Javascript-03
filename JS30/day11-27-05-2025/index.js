const tieude='Học code cùng Tư Nhé';
document.title=tieude;
const h1=document.querySelector("h1");
const h2=document.querySelector("h2");
if (h1){
    h1.innerText=tieude;
}
if (h2){
    h2.innerText=tieude;
}
const j=document.querySelectorAll("h3.title-news");
j.forEach(function(newj){
    newj.innerText=" Học Code Js Đê";

});