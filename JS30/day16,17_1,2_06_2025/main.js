

class product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

let storage = [];

function edit() {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = storage.map(
        sp => {
            return `<tr>
                <td>${sp.id}</td>
                <td>${sp.name}</td>
                <td>${sp.price}</td>
                <td>${sp.quantity}</td>
                <td>${sp.price * sp.quantity}</td>
                <td>
                    <button onclick="sua('${sp.id}')">Sửa</button>
                    <button onclick="xoa('${sp.id}')">Xóa</button>
                </td>
                </tr>`;
        }
    ).join('');


    let tong = 0;
    for (let i = 0; i < storage.length; i++) {
        let giatri = storage[i].price * storage[i].quantity;
        tong += giatri;
    }
    document.getElementById("sum").innerText = `Tổng giá trị hàng tồn kho là: ${tong}`;


    if (storage.length > 0) {
        let pricemax = storage[0];
        for (let i = 1; i < storage.length; i++) {
            if (storage[i].price > pricemax.price) {
                pricemax = storage[i];
            }
        }
        document.getElementById("spdatnhat").innerText = `Sản phẩm đắt nhất là: ${pricemax.name}`;
    }
}
let editmode=false;
let currentEdit=null;
function them() {
    let id = document.getElementById("masp").value.trim();
    let name = document.getElementById("name").value.trim();
    let gia = parseFloat(document.getElementById("gia").value);
    let soluong = parseInt(document.getElementById("soluong").value);

    if (!id || !name || isNaN(gia) || isNaN(soluong)) {
        alert('Vui lòng nhập đầy đủ và đúng định dạng!');
        return;
    }
    let trung=storage.findIndex(sp=> sp.id===id);
    if (trung!==-1){
        if (confirm("ID đã tồn tại bạn có muốn cập nhật không?")){
            storage[trung]=new product(id,name,gia,soluong);
            edit();
        } else { return;}
        } else { 
           let sp=new product(id,name,gia,soluong);
           storage.push(sp);
           append(sp);
        }
        
   
    document.getElementById("masp").value = '';
    document.getElementById("name").value = '';
    document.getElementById("gia").value = '';
    document.getElementById("soluong").value = '';
}

function xoa(id) {
    storage = storage.filter(sp => sp.id !== id);
    edit();
}

function sua(id) {
    let sp = storage.find(sp => sp.id === id);
    if (sp) {
        document.getElementById("masp").value = sp.id;
        document.getElementById("name").value = sp.name;
        document.getElementById("gia").value = sp.price;
        document.getElementById("soluong").value = sp.quantity;
        editmode=true;
        currentEdit=id;
        document.getElementById("submit").innerText="Cập nhật"
    }
}
function append(sp){
    let tbody=getElementById('tbody');
    let row=createElement("tr");
    row.innerHTML=`
    <td>${sp.id}</td>
    <td>${sp.name}</td>
    <td>${sp.gia}</td>
    <td>${sp.soluong}</td>
    <td>${sp.price*sp.soluong}</td>
    <td>
        <button onclick="sua('${sp.id}')">Sửa</button>
        <button onclick="xoa('${sp.id}')">Xoá</button>
    </td>`;
    tbody.appendChild(row);
}