// let d=new Date();
// let theDay = d.getDay();
// switch(theDay){
//     case 3:
//         document.writeln("Hôm nay là thứ 3");
//         break;
//     case 4:
//         document.writeln("Hôm nay là thứ 4");
//         break;
//     default:
//         document.writeln("Hôm nay không phải thứ 3 và 4 ");
// }

//Vòng lặp for
// for(let i=1;i<=10;i++){
//     document.writeln("Anh xin lỗi! <br> ")
// }

// let arrNum = [1,2,3,4,5];
// for(let j=0;j<arrNum.length;j++){
//     document.writeln(arrNum[j] + "<br>");
// }

// let danhSach = ["Lương Ngọc	Bích ", "Dương Gia Bình ", "Nguyễn Như Thành	Danh ", "Hoàng Xuân	Duẩn ", "Hà Văn	Dũng"];
// for(let i=0; i<danhSach.length;i++){
//     document.writeln("Xin chào "+danhSach[i]+"<br>");
// }

// let i=0;
// while(i<=10){
//     document.writeln("The number is: "+i+"<br>");
//     i++;
// }

// do{
//     document.writeln("The number is: "+i+"<br>");
//     i++;
// } while(i<=10)

// alert("Xin chào bạn");

//confirm box
// let result = confirm("Press to continue");
// if(result==true){
//     document.writeln("Press OK! \n");
// } else
//     document.writeln("Press CANCEL! \n");

//prompt 
// let name = prompt("Mời bạn nhập tên:", "Tên của bạn: ");
// document.writeln("Tên của bạn là: "+ name);

// document.writeln("Hello");

// let + tên biến  = giá trị
// function + tên hàm  +(){
// code logic}

// function sayHello(){
//     document.writeln("Hello");
// }
// sayHello();

//Có tham số
// function sayHello2(name, age){
//     document.writeln("Hello "+name+" "+age+" tuổi.");
// }
// let nameP = prompt("Tên","Điền tên");
// let ageP = prompt("Tuổi","Điền tuổi");
// sayHello2(nameP, ageP);


// function sayHello3(){
//     let nameP = prompt("Tên", "Điền tên");
//     let ageP = prompt("Tuổi", "Điền tuổi");
//     document.writeln("Hello "+nameP+" "+ageP+" tuổi.");
// }

// sayHello3();

let so1 = String(prompt("Mời bạn nhập số:"));
function chanLe(number){
    let soCuoi = parseInt(so1[so1.length - 1]);
    if (soCuoi % 2 == 0) {
        document.writeln(`Số ${so1} là số chẵn`);
    } else {
        document.writeln(`Số ${so1} là số lẻ`);
    }
}
let so2= parseInt(so1);
if (!isNaN(so2)){
    chanLe(so2);
} else
    document.writeln("Mời bạn nhập số nguyên");