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

//-----------------------------------------------------------------------------------------------------------

// concat() dùng để nối mảng hiện tại với mảng khác và trả lại một mảng mới 
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];
// let newArr = arr1.concat(arr2, arr3);
// document.writeln(newArr);

// push() dùng để thêm một hoặc nhiều phần tử vào cuối mảng
// let arr = [1, 2, 3];
// arr.push(4, 5);
// document.writeln(arr);

// unshift() thêm một hoặc nhiều phần tử vào đầu mảng
// let arr = [1, 2, 3];
// arr.unshift(-1, 0);
// document.writeln(arr)

// pop() dùng để loại bỏ phần tử cuối cùng ở trong mảng 
// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// document.writeln(arr);

// shift() dùng để xóa một phần tử ở đầu mảng
// let arr = [1, 2, 3, 4];
// arr.shift();
// document.writeln(arr);

// slice(startIndex, endIndex) tạo một bản sao mới của mảng 
// let arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = arr.slice(3,7);
// document.writeln(newArr);

// includes() kiểm tra xem mảng có chứa giá trị cụ thể nào không
// let arr = [1, 2, 3, 4, 5, -1];
// let check = arr.includes(-1);
// document.writeln(check);

//-----------------------------------------------------------------------------------------------------------

// indexOf() trả về vị trí index đầu tiên của phần tử cần kiếm. Nếu không tìm được trả về -1
// let arr = [1, 2, 3, 4, 5, 2]
// let check = arr.indexOf(2);
// document.writeln(check)

// lastIndexOf() trả về vị trí index cuối cùng của phần tử cần kiếm. Nếu không tìm được trả về -1
// let arr = [1, 2, 3, 4, 5, 2];
// let check = arr.lastIndexOf(2);
// document.writeln(check);

// reverse() dùng để đảo ngược mảng. Sửa mảng hiện tại không tạo ra mảng mới
// let arr = [1, 2, 3, 4, 5, 2];
// arr.reverse();
// document.writeln(arr);

// Nếu bạn muốn giữ nguyên mảng gốc sau đó tạo ra 1 bản sao đảo ngược
// let arr = [1, 2, 3, 4, 5, 2];
// let arrReverse = arr.slice().reverse();
// Mảng gốc
// document.writeln(arr); 
// Mảng đảo ngược
// document.writeln(arrReverse);

// join(separator) dùng để thêm mối nối giữa các phần tử trong mảng
// Nếu trong join không viết gì thì mặc định sẽ là dấu ","
// let arr = [1, "Dat", 5,"HUMG"];
// let arrCon = arr.join(`+`);
// document.writeln(arrCon);

// splice()
// Cú pháp array.splice(start, deleteCount, item1, item2, ...)
// start: vị trí bắt đầu thay đổi mảng. Nếu là một số âm nó sẽ được tính từ cuối mảng.
// deleteCount: số nguyên chỉ định số lượng phần tử sẽ được loại bỏ từ mảng, bắt đầu từ vị trí start 
// item1, item2, ... : các phần tử mới sẽ được thêm vào mảng từ vị trí start
// let arr = [1, 4, 3, 9, 4];
// arr.splice(2,2,5,6,7);
// document.writeln(arr);

//----------------------------------------------------------------------------------------------------------

// Toán tử spread(...)  dùng để tạo clone của mảng
let arr1 = [3,7,'Dat',10,'Midnight'];
let arr2 = [...arr1];
// document.writeln(arr2);
arr2[0]=99;
document.writeln(arr2);