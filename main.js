// bt1
var total = document.getElementById("total");
total.onclick = function () {
    var luongMotNgay = document.getElementById("luongMotNgay").value * 1;
    console.log(luongMotNgay);
    var soNgayLam = document.getElementById("soNgayLam").value * 1;
    var totalOutput = luongMotNgay * soNgayLam;

    document.getElementById("totalOutput").value = totalOutput;
}
// bt2 
var tbc = document.getElementById("tbc");
tbc.onclick = function () {
    var s1 = document.getElementById("s1").value * 1;
    var s2 = document.getElementById("s2").value * 1;
    var s3 = document.getElementById("s3").value * 1;
    var s4 = document.getElementById("s4").value * 1;
    var s5 = document.getElementById("s5").value * 1;

    var tbcOutput = (s1 + s2 + s3 + s4 + s5) / 5;
    document.getElementById("tbcOutput").value = tbcOutput;
}
// bt3
var quyDoi = document.getElementById("quyDoi");
quyDoi.onclick = function () {
    var tienUSD = document.getElementById("tienUSD").value * 1;
    var vndOutput = tienUSD * 23500;

    var VND = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(vndOutput);
    document.getElementById("vndOutput").value = vndOutput;
}
// btt4 
var btnbt4 = document.getElementById("btnbt4");
btnbt4.onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chieuRong").value * 1;
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    document.getElementById("chuVi").value = chuVi;
    document.getElementById("dienTich").value = dienTich;
}
// bt5
const btnbt5 = document.getElementById("btnbt5");
btnbt5.onclick = function () {
    const nhapSo = document.getElementById("nhapSo").value * 1;

    const hangDonVi = nhapSo % 10;
    const hangChuc = parseInt(nhapSo / 10);
    const tongKiSO = hangDonVi + hangChuc;

    document.getElementById("tongKiSO").value = tongKiSO;
}