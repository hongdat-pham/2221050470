// let currentDate = new Date();
// document.writeln(currentDate);

// let year = currentDate.getFullYear();
// let month = currentDate.getMonth();
// let day = currentDate.getDate();
// let hours = currentDate.getHours();
// let minutes = currentDate.getMinutes();
// let seconds = currentDate.getSeconds();

// document.writeln(`Năm: ${year}`);
// document.writeln(`Tháng: ${month}`);
// document.writeln(`Ngày: ${day}`);
// document.writeln(`Giờ: ${hours}`);
// document.writeln(`Phút: ${minutes}`);
// document.writeln(`Giây: ${seconds}`);

// let timeStamp1 = new Date(0);
// document.writeln(timeStamp1);

// let currentTimeStamp = currentDate.getTime();
// document.writeln(currentTimeStamp);


// Set thời gian theo ý muốn
// C1:
// let myDate1 = new Date(2025, 9,7);
// document.writeln(myDate1);
// document.writeln(myDate1.toLocaleDateString());

// C2:
// let myDate2 = new Date("2025-10-07T10:00:30");
// document.writeln(myDate2);
// document.writeln(myDate2.toLocaleDateString());

// C3:
let myDate3 = new Date();
// document.writeln(myDate3);
// myDate3.setFullYear(2023);
// myDate3.setMonth(10);
// myDate3.setDate(20);
// document.writeln(myDate3);
// document.writeln(myDate3.toLocaleDateString());

// Xuất ngày tháng theo định dạng mình mong muốn
// document.writeln(`
//     Ngày ${myDate3.getDate()}/${myDate3.getMonth()+1}/${myDate3.getFullYear()}
//     `);

// Xuất ngày tháng có hiện số 0 ở ngày và tháng dưới 10 
// Ví dụ: 01/01/2001

// let prefixDate = myDate3.getDate() < 10 ? "0" : "";
// let prefixMonth = myDate3.getMonth() < 9 ? "0" : "";
// document.writeln(`
//     Ngày ${prefixDate}${myDate3.getDate()}/${prefixMonth}${myDate3.getMonth()+1}/${myDate3.getFullYear()}
//     `);

//-----------------------------------------------------------------------------------------------------------
