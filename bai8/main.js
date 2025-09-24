//Ép kiểu bằng cách dùng parseInt để chuyển thành số nguyên và parseFloat để chuyển thành số thập phân
let a=parseInt("12331313");
let b=parseFloat("13.5");
let name="Pham Hong Dat"
document.writeln(a);

//.length dùng để đếm ký tự của chuỗi
document.writeln(name.length);

// sử dụng [n] để in ra ký tự ở vị trí thứ n+1
let name1="Hoang Hoa Tham";
document.writeln(name1[3]);

// dùng slice(a, b) để in ra ký tự từ vị trí a đến vị trí b-1
let name2="Phan Minh Tri";
document.writeln(name2.slice(1,4));

// Dùng replace("Chuỗi 1", "Chuỗi 2") để thay thế chuỗi 1 thành chuỗi 2
let name3="Dinh Tien Hoang";
document.writeln(name3.replace("Dinh", "Tran"));

//Chuyển đổi chữ hoa thành chữ thường bằng Chuỗi.toLowerCase()
let name4="Lam Ngoc Hoa";
document.writeln(name4.toLowerCase());
//Chuyển đổi chữ thường thành chữ hoa bằng Chuỗi.toUpperCase()
document.writeln(name4.toUpperCase());

//Trả ra vị trí xuất hiện đầu tiên của ký tự
//Nếu có trả ra vị trí còn nếu không trả ra -1
document.writeln(name4.indexOf('e'));

//Dùng includes("Ký tự") để kiểm tra trong chuỗi có xuất hiện ký tự không
document.writeln(name1.includes('e'));

//Dùng split('Ký tự') để khi mỗi lần gặp "ký tự" thì sẽ tách thành array
document.writeln(name3.split(''))

//Kiểm tra trong chuỗi có bắt đầu bằng ký tự nào không
let danhSach =[
    "hdfóadfád",
    "Phạm hakjsdhfká",
    "ưoeỷwỷ",
    "yiuweỷibv",
]
document.writeln(danhSach[1].startsWith("Phạm"));

//Chuyển đổi chuỗi về số
let so="123";
document.writeln(typeof so);
document.writeln(typeof Number(so));

//toFixed dùng để định dạng số thập phân
let pi=Math.PI;
pi=pi.toFixed(3);
document.writeln(pi);

//Dùng isNaN() để kiểm tra đó có phải giá trị NaN(not a number) không
let c=isNaN(NaN);
document.writeln(c);

//Dùng isFinite() kiểm tra xem đó có phải số hữu hạn hay không
let d=isFinite(10);
document.writeln(d);

//Date
let toDay = new Date();
//In thời gian đầy đủ
document.writeln(toDay);
//In năm
document.writeln(toDay.getFullYear());
//In tháng
document.writeln(toDay.getMonth()+1);
//In ngày
document.writeln(toDay.getDate());
//In thứ
document.writeln(toDay.getDay());
//In giờ
