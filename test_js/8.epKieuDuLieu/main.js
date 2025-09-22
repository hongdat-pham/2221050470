//Ép kiểu dữ liệu
let a = parseInt(prompt("Mời bạn nhập số a: "));
console.log(`Số a là : ${a}`);
console.log(typeof a);
let b=5;
console.log(`Số b là : ${b}`);
console.log(typeof b);
let kq=a+b;
//Kết quả sai vì a đang ở dạng string nên khi in ra thì là nối chuỗi chứ không phải là cộng 2 số
console.log(`Kết quả của a và b là ${kq}`);
//Ép kiểu đơn giản hơn bằng cách dùng Number()


