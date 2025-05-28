const soanh = ["nui.jpg", "hieuthuhai.jpg", "anime.jpg"];
var vitri = 0;
var anhdangchieu;

window.onload = function () {
    anhdangchieu = document.getElementsByClassName('hinhchieu')[0];
};

function chieuanh() {
    anhdangchieu.style.opacity = 0;
    setTimeout(() => {
        anhdangchieu.src = soanh[vitri];
        anhdangchieu.style.opacity = 1;
    }, 200);
}

function anhsau() {
    if (vitri < soanh.length - 1) {
        vitri++;
    } else {
        vitri = 0;  // sửa ở đây
    }
    chieuanh();
}

function anhtruoc() {
    if (vitri > 0) {
        vitri--;
    } else {
        vitri = soanh.length - 1;  // sửa ở đây
    }
    chieuanh();
}
