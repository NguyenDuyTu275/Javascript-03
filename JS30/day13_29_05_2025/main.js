    function them(){
    let row=document.createElement("tr");
    const masv=document.getElementById("masv");
    const name=document.getElementById("name");
    const mail=document.getElementById("mail");
    const sdt=document.getElementById("sdt");
    [masv,name,sdt,mail].forEach(function(input){
        let td=document.createElement("td");
        td.textContent=input.value;
        row.appendChild(td);
    })
    const tr=document.getElementById("table");
    tr.appendChild(row);
    document.getElementById("masv").value='';
    document.getElementById("name").value='';
    document.getElementById("sdt").value='';
    document.getElementById("mail").value='';
}