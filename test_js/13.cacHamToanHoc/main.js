//căn bậc 2
let a =Math.sqrt(4);
console.log(a);

//số mũ
let b=Math.pow(2,4);
console.log(b);

//trị tuyệt đối
let c=Math.abs(-10);
console.log(c);

//làm tròn xuống
let d=Math.ceil(5.01);
console.log(d);

// làm tròn lên
let e=Math.floor(5.30);
console.log(e);

// làm tròn ở giữa
let f=Math.round(5.59);
console.log(f);

// làm tròn x chữ số hàng đơn vị 
let g = 2.684942;
let gRounded = Number(g.toFixed(3));
console.log(gRounded);
console.log(typeof gRounded);

// tìm min và max
let h=43,
    i=13,
    j=32;
let minValue = Math.min(h,i,j);
let maxValue = Math.max(h,i,j);
console.log(`Số nhỏ nhất là ${minValue} và số lớn nhất là ${maxValue}`);