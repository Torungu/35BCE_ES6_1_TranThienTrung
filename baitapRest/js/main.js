// let arrInput = document.querySelectorAll('input');
// function diemTrungBinh(...param) {
//     switch (param.length) {
//         case 3: {
//             dtb = Math.round((param[0] + param[1] + param[2]) / 3 * 100) / 100
//             break;
//         }
//         case 4: {
//             dtb = (param[3] + param[4] + param[5] + param[6]) / 4
//             break;
//         }
//         default: {
//             break;
//         }
//     }
// }
document.getElementById('btnKhoi1').onclick = function () {
    var a = document.getElementById('inpToan').value * 1;
    var b = document.getElementById('inpLy').value * 1;
    var c = document.getElementById('inpHoa').value * 1;
    var dtb = Math.round((a + b + c) / 3 * 100) / 100
    // for (let i of arrInput) {
    //     let { id, value } = i;
    //     arrInput[id] = value
    //     dtb = diemTrungBinh(arrInput[id])
    // }
    document.getElementById('tbKhoi1').innerHTML = dtb
}

document.getElementById('btnKhoi2').onclick = function () {
    var a = document.getElementById('inpVan').value * 1;
    var b = document.getElementById('inpSu').value * 1;
    var c = document.getElementById('inpDia').value * 1;
    var d = document.getElementById('inpEnglish').value * 1;
    var dtb = Math.round((a + b + c + d) / 4 * 100) / 100
    document.getElementById('tbKhoi2').innerHTML = dtb
}


//KHÔNG LÀM ĐC BẰNG REST PARAM, XIN GỢI Ý Ạ