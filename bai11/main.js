// Tạo hàm JS tính điểm của sinh viên dựa vào 3 điểm a, b, c
// Biết điểm tổng bằng A*0.6+B*0.2+C*0.1
const score = (a,b,c) => {
    let total = a * 0.6 + b * 0.3 + c * 0.1;
    return total;
};
// let a = parseFloat(prompt(`Mời bạn nhập điểm A:`));
// let b = parseFloat(prompt(`Mời bạn nhập điểm B:`));
// let c = parseFloat(prompt(`Mời bạn nhập điểm C:`));

function xemKq (){
    let diemA = document.getElementById("diemA").value;
    let diemB = document.getElementById("diemB").value;
    let diemC = document.getElementById("diemC").value;
    let diem = score(diemA,diemB,diemC);
    document.getElementById("kq").value = diem;
}




