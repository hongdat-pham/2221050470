//Các cách xuất dữ liệu 
let soA=25;
let soB=5;
//Cách 1
console.log("Căn bậc 2 của " + soA + " là: "+soB);
//Cách 2
console.log("Căn bậc 2 của" , soA , "là:" , soB);
//Cách 3
console.log(`Căn bậc 2 của ${soA} là: ${soB}`);
//Cách 4
console.log(`Căn bậc 2 của %s là: %s`, soA, soB);

//Test
let a=4, b=3, kq= a*b;
//Cách 1
console.log("Kết quả của " +a+" * "+b+" là: "+kq);
//Cách 2
console.log("Kết quả của" , a , "*" , b , "là:" , kq);
//Cách 3
console.log(`Kết quả của ${a} * ${b} là: ${kq}`);
//Cách 4
console.log(`Kết quả của %s * %s là: %s`,a,b,kq);

//Các phép toán cơ bản
let so1=7, so2=3;
let tong= so1+so2;
let hieu= so1-so2;
let tich= so1*so2;
let thuong= so1/so2;
let du= so1%so2;

console.log(`Tổng của ${so1} và ${so2} là: ${tong}`);
console.log(`Hiệu của ${so1} và ${so2} là: ${hieu}`);
console.log(`Tích của ${so1} và ${so2} là: ${tich}`);
console.log(`Thương của ${so1} và ${so2} là: ${thuong}`);
console.log(`Số dư của ${so1} và ${so2} là: ${du}`);

//Thứ tự ưu tiên 

//Ưu tiên nhất là dấu ( )
let diemToan = 9.5,
    diemVan = 8.5,
    diemAnh = 9,
    diemTb = (diemToan + diemVan + diemAnh)/3;
console.log(diemTb);

