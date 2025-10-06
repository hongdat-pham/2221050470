// Bài toán tính tổng 2 số:
// a. 7, 5
// b. 9, 6
// c. 10, 5

// function declaration
// nếu để tinhTong(a=0, b=0) thì a và b sẽ là kiểu number còn không để gì sẽ là kiểu any khi nhập
function tinhTong(a, b){
    let tong = a+b;
    document.writeln(`Tổng của ${a} và ${b} là: ${tong}`);
}
// let a = Number(prompt("Mời bạn nhập số a:"));
// let b = Number(prompt("Mời bạn nhập số b:"));
// tinhTong(a,b);

//------------------------------------------------------------------------------------------

// funtion expression
let tich = function(a=0,b=0){
    return a*b;
}
// document.writeln(`Tích của a và b là: ${tich(3,5)}`);

//------------------------------------------------------------------------------------------

// arrow function
const multiPly = (a=0, b=0) => a*b;
// document.writeln(multiPly(3,4));

const multiplyAndAdd = (a=0, b=0) => {
    let product = a*b;
    let sum = a+b;
    return {product, sum};
}
// let c=multiplyAndAdd(6,4);
// document.writeln(`${c.product} ${c.sum}`);

//-----------------------------------------------------------------------------------------

// functions calling other functions

const cong = (a, b) => a+b;
const nhan = (x, y) => x*y; 
const congVaNhan = (num1, num2, num3) =>{
    let sum = cong(num1,num2);
    let multiply = nhan(sum,num3);
    return multiply;
} 

let result = congVaNhan(2,3,4);
// document.writeln(`${result}`);

//-----------------------------------------------------------------------------------------

// Tính n giai thừa
const giaiThua = (n) =>{
    let kq=1;
    for(let i=1;i<=n;i++){
        kq*=i;
    }
    return kq;
}
// let gt = giaiThua(Number(prompt(`Mời bạn nhập số: `)));
// document.writeln(`${gt}`);

//-----------------------------------------------------------------------------------------

// Giải phương trình bậc 2

const ptb2 = (a, b, c) =>{
    let delta = b*b - 4*a*c;
    if(delta<0){
        document.writeln(`Phương trình vô nghiệm.`);
    } else if(delta==0){
        let nghiem= -b/(2*a);
        document.writeln(`Phương trình có nghiệm kép là: ${nghiem}`);
    } else {
        let nghiem1 = (-b+Math.sqrt(delta))/(2*a);
        let nghiem2 = (-b-Math.sqrt(delta))/(2*a);
        document.writeln(`Phương trình có 2 nghiệm phân biệt: x1=${nghiem1} x2=${nghiem2}`);
    }
}
let a = parseInt(prompt(`Mời bạn nhập số a:`));
let b = parseInt(prompt(`Mời bạn nhập số b:`));
let c = parseInt(prompt(`Mời bạn nhập số c:`));

document.writeln(`Phương trình ${a}x^2 + ${b}x + ${c}:`);
ptb2(a,b,c);