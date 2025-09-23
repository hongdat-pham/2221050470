let i = 8;
console.log(i>0 && i< 10);

console.log(i<0 || i>5);

let pi=Math.PI;
let r=Number(prompt("Nhập bán kính hình tròn"));
document.writeln(`Hình tròn có bán kính: ${r}`);
let cv= pi * 2* r;
let dt= pi * r**2;
document.writeln(`Chu vi hình tròn là: ${cv}`);
document.writeln(`Diện tích của hình tròn là ${dt}`);
