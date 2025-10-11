// Khai báo mảng rỗng
// let arr = [];
// document.writeln(arr);

// Khai báo mảng 
// let arr = [1, 3, `Đạt`, 5, true];
// document.writeln(typeof(arr))
// document.writeln(arr);

// Sử dụng array và constructor
// Khai báo mảng rỗng sử dụng Array constructor
// let arr = new Array();
// document.writeln(arr);

// Khai báo mảng có sẵn các phần tử bên trong
// let arr = new Array(1, 3, `Đạt`, 5, true);
// document.writeln(arr);
// document.writeln(arr.length)

// Tạo mảng với độ dài xác định, các phần tử là undefined
// let arr = new Array(3);
// document.writeln(arr);
// document.writeln(arr.length);
// document.writeln(typeof(arr));

// Truy xuất phần tử của mảng qua vị trí index
// let arr = [10, 20, `Đạt`, 40];
// document.writeln(arr[2]+arr[0]);

// Gán và thay đổi giá trị của arr bằng index
// let arr = [30,true, `monkey`,20];
// document.writeln(`Mảng trước khi thay đổi ${arr}`);
// arr[1]=false;
// document.writeln(`<br> Mảng sau khi thay đổi ${arr} `);

// Duyệt mảng thông qua vị trí index
// let arr = [1,2,3,4,5];
// document.writeln(`Mảng trước khi được duyệt ${arr}`);
// for (let i = 0; i<arr.length; i++){
//     arr[i] *= 2;
// }
// document.writeln(`Mảng sau khi được duyệt ${arr}`);

// for...of: Chỉ có thể xem, không sửa được giá trị trong mảng 
// Có thể thay element bằng cái khác không quan trọng
// VD1:
// let arr = [1, 2, 3, 4, 5];
// for (let element of arr){
//     document.writeln(element)
// }
// VD2: 
// let arr = [1, 2, 8, 4, 5, 6];
// let count = 0;
// for (let i of arr){
//     if(i%2===0){
//         document.writeln(i);
//         count++;
//     }
// }
// document.writeln(`Số lượng số chia hết cho 2 là: ${count}`);