// setTimeout được sử dụng để thực hiện một hàm sau một khoảng thời gian delay xác định
// Cú pháp setTimeout(function, milliseconds, param1, param2, ...)

// Ôn lại 3 cách khai báo hàm
// C1: arrow function
// const arrow = () => {
//     document.writeln(`Hello World!`);
// };
// Gọi hàm
// arrow();
// setTimeout(arrow,10000);
// C2: function declaration
// function hello() {
//     document.writeln(`Xin chào`);
// }
// setTimeout(hello,10000);
// C3: function expression
// let 你好 = function () {
//     document.writeln(`我是越南人`);
// };
// Gọi hàm
// 你好();
// setTimeout(你好,10000);

// 2. Truyền trực tiếp function vào setTimeout

// arrow function
// setTimeout(() => {
//     document.writeln(`Hello World!`);
// },5000);

// 3. Sử dụng với tham số
// let helloArrow2 = (name) =>{
//     document.writeln(`Hello ${name}`)
// };
// setTimeout(helloArrow2,10000,`Đạt`)

// 4. Khi muốn hủy quá trình thực hiện hàm
// B1: Gắn setTimeout vào 1 biến để lưu giá trị
// let timeOut = setTimeout(helloArrow2,10000,`Đạt`);
// clearTimeout(timeOut);

//----------------------------------------------------------------------------------------------------------

// setInterval dùng để lặp lại hàm 
// Cú pháp giống setTimeout

// C1: Sử dụng function declaration
// function showNotification(){
//     alert(`Bạn có xx tin nhắn.`);
// }
// setInterval(showNotification,5000);

// Hủy lặp
// let counter =0;
// let count = () => {
//     document.writeln(counter++);
//     if(counter>5){
//         clearInterval(stopInterval);
//     }
// }
// let stopInterval = setInterval(count,5000)

//------------------------------------------------------------------------------------------------------------

// Bài tập:
// Nhập năm sinh và tính số tuổi
// Số nhập vào phải là số nguyên dương

// C1: Tự làm 
// const soNguyen = () => {
//     let year = new Date();
//     let currentYear = year.getFullYear();
//     let input = prompt(`Mời bạn nhập năm sinh của mình: `);
//     let tuoi = parseInt(input);
//     if(tuoi < 0){
//         alert(`Mời bạn nhập năm sinh lớn hơn 0`);
//         soNguyen();
//     } else
//     if(input.includes(".") || tuoi !== parseFloat(input)){
//         alert(`Mời bạn nhập số nguyên`);
//         soNguyen();
//     } else
//     if (isNaN(tuoi)){
//         alert(`Năm sinh không hợp lệ mời bạn nhập lại:`)
//         soNguyen();
//     } else{
//         alert(`Bạn sinh năm ${tuoi}`);
//         alert(`Bạn hiện tại ${currentYear - tuoi} tuổi`);
//     }
    
// }
// setTimeout(soNguyen,5000);

//--------------------------

// C2:
// function caculateAge(inputYear){
//     let yearOfBirth = Number(inputYear);
//     document.writeln(yearOfBirth);
//     if(!Number.isInteger(yearOfBirth) || yearOfBirth <= 0){
//         alert(`Năm sinh không hợp lệ. Là số nguyên và lớn hơn 0`);
//         return;
//     }
//     let currentYear = new Date().getFullYear();
//     let age = currentYear - currentYear;
//     let inputYear = prompt(`Nhập năm sinh của bạn`);
//     caculateAge(inputYear);

// }

//-----------------------------------------------------------------------------------------------------------

// Bài tập: 
// Viết chương trình đếm ngược thời gian theo từng giây( Countdown)
// Ví dụ: Thời gian làm bài là 1:00 thì khi đếm tới 0 sẽ thông báo hết thời gian

// const countDown = () => {
//     let timer = prompt(`Mời bạn nhập số có dạng 00:00:00`);
//     let hours = timer.slice(0,2);
//     let minutes = timer.slice(3,5);
//     let seconds = timer.slice(6);
//     let total1=1;
//     let total2=1;
//     let total3=0;
//     let finalTotal =0;
//     alert(`Thời gian bạn nhập là: ${hours}:${minutes}:${seconds}`);

//     total1=hours*60*60;
//     total2=minutes*60;
//     total3=minutes;
//     finalTotal=total1+total2+total3;
//     setInterval(giam,1000, finalTotal);
// }
// const giam = (finalTotal) => {
//     finalTotal--;
//     document.writeln(finalTotal);
//     return finalTotal;

// }
// countDown();


//---------------------------------------------------

// Bài tập
// Hiển thị thời gian online hoặc offline của người dùng

const timeSince = (timeStamp) => {
    let now = new Date();
    document.writeln(`Thời gian hiện tại là: ${now.getTime()}`);
    let timeDif = now - timeStamp;
    let seconds = Math.floor(timeDif/ 1000);
    let minutes = Math.floor(seconds/ 60);
    let hours = Math.floor(minutes/ 60);
    let days = Math.floor(hours/ 24);
    let months = Math.floor(days/ 30);
    let years = Math.floor(months/ 12);
    if(years> 0){
        return `Online ${years} năm trước`;
    } 
    else if(months>0){
        return `Online ${months} tháng trước`;
    }
    else if(days>0){
        return `Online ${days} ngày trước`;
    }
    else if(hours>0){
        return `Online ${hours} giờ trước`;
    }
    else if(minutes>0){
        return `Online ${minutes} phút trước`;
    }
    else{
        return `Online ${seconds} giây trước`;
    }
}

let timeOff = 1760191832802; // Thời điểm offline
document.writeln(timeSince(timeOff));