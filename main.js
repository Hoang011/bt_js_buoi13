// bt1
/* MÔ HÌNH 3 KHỐI
    - đầu vào: tạo biến luongMotngay để nhập vào số tiền lương nhận đc trong 1 ngày
                tạo biến soNgayLam để nhập vào số ngày làm 
    - xử lý:    công thức tính tổng lương(totalOutput)= số ngày làm nhân với số tiền lương một ngày
    - đầu ra:   số tiền lương nhận đc (totalOutput)

*/
var total = document.getElementById("total");
total.onclick = function () {
    var luongMotNgay = document.getElementById("luongMotNgay").value * 1;
    console.log(luongMotNgay);
    var soNgayLam = document.getElementById("soNgayLam").value * 1;
    var totalOutput = luongMotNgay * soNgayLam;

    document.getElementById("totalOutput").value = totalOutput;
}
// bt2 
/* MÔ HÌNH 3 KHỐI
    - đầu vào: tạo các biến s1,s2,s3,s4,s5 cho người dùng nhập vào 5 số tự nhiên
    - xử lý: tính trung bình bằng cách cộng 5 số lại rồi chia cho 5
    - đầu ra: trung bình cộng các số(tbcOutput)

*/
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
/* MÔ HÌNH 3 KHỐI
    - đầu vào: tạo biến tienUSD cho người dùng nhập vào số tiền usd cần quy đổi
    - xử lý: công thức quy đổi bằng số tiền usd nhân với 25.000
    - đầu ra: số tiền sau quy đổi(vndOutputt)

*/
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
/* MÔ HÌNH 3 KHỐI
    - đầu vào: tạo 2 beiens chieuDai, chieuRong cho người dùng nhập vào lần lượt chiều dài và chiều rộng của hình chữ nhật
    - xử lý: tạo biến chuVi để tính chu vi: chuVi= chieuDai*chieuRong
                tạo biến dienTich để tính diện tích: dienTich=(chieuDai+ chieuRong)*2
    - đầu ra: chu vi và diện tích của hình chữ nhật

*/
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
/* MÔ HÌNH 3 KHỐI
    - đầu vào: tạo biến nhapSp cho người dùng nhập vào số có 2 chữ số cần tính tổng ký số
    - xử lý: muốn tính tổng hai kí số ta cần lấy đc số hàng đơn vị và số hàng chục
                tạo biến hangDonVi để lấy đc số hàng đơn vị: hangDonVi= số nhập vào % 10
                tạo biến hangChuc để lấy đc số hàng chục: hangChuc= so nhap vào /10    
                tổng 2 ký số bằng: hangDonVi+ hangChuc        
    - đầu ra: tổng 2 ký số

*/
const btnbt5 = document.getElementById("btnbt5");
btnbt5.onclick = function () {
    const nhapSo = document.getElementById("nhapSo").value * 1;

    const hangDonVi = nhapSo % 10;
    const hangChuc = parseInt(nhapSo / 10);
    const tongKiSO = hangDonVi + hangChuc;

    document.getElementById("tongKiSO").value = tongKiSO;
}