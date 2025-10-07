// .length để kiểm tra số lượng phần tử trong chuỗi

// Dùng trim() để xóa space ở đầu và cuối chuỗi
// Dùng trimEnd() dùng để xóa toàn bộ khoảng trắng ở cuối chuỗi
// Dùng trimStart() dùng để xóa toàn bộ khoảng trắng ở đầu chuỗi
// Vd: a=b.trim()

// Dùng repeat để lặp lại chuỗi n lần 
// Vd: a= a.repeat(3);

// Cắt chuỗi dùng slice 
// let s4 = "0894963216546";
// Nếu không điền end index thì sẽ ngầm định là cắt đến cuối chuỗi
// Có thể hiểu là end index = s4.length
// let s5 =s4.slice(0,6);
// document.writeln(s5);

// let s6 = prompt(`Mời nhập vào chuỗi`);
// document.writeln(`Chuỗi bạn nhập có: ${s6.length} ký tự`);
// if (s6.length>20) {
//     document.writeln(`Bạn đã nhập quá ${s6.length-20} ký tự`);
//     let s7 = s6.slice(0,20);
//     document.writeln(`Chuỗi sau xử lý là: ${s7}`)
// } else{
//     document.writeln(`Số của bạn hợp lệ`)
// }

// substring(startIndex, endIndex)
// substring giống như slice nhưng mà endIndex của substring chúng sẽ được tự động đảo ngược
// tự hiểu số nhỏ hơn là startIndex
// substring chuyển số âm thành 0
// substring(1,-5) = substring(1,0)

// slice nếu có số âm thì sẽ đếm từ cuối chuỗi 

//----------------------------------------------------------

// startWith(searchValue, index) để kiểm tra chuỗi có bắt đầu bằng searchValue hay không
// let s1="abcdef abcdef";
// document.writeln(s1.startsWith("ab"));
// Tìm từ vị trí index số 1 xem có bắt đầu bằng chuỗi bc hay không
// document.writeln(s1.startsWith("b",1))

// endWith(searchValue, index) để kiểm tra chuỗi có kết thúc bằng searchValue hay không
// let s2="011234567980";
// document.writeln(s2.endsWith("0"));
// document.writeln(s2.length);
// document.writeln(s2.endsWith("8",11));

// Kiểm tra tệp tin có phải tệp mp3 hay không
// let tepTin="nhacDo.mp3";
// let check=tepTin.endsWith("mp4");
// if(check==true){
//     document.writeln(`Tệp tin của bạn là tệp mp3`);
// } else{
//     document.writeln(`Tệp tin của bạn không phải là tệp mp3`);
// }

// split()

// let hs="Đạt, Quang, Nam, Thảo, Ngọc Anh";
// let arrHs = hs.split(",");
// document.writeln(arrHs);
// document.writeln(typeof(arrHs));
// let arrHs2 = hs.split(",",3);
// document.writeln(arrHs2);

// let str = "jsdfkals asdjlf";
// let arr =str.split("");
// document.writeln(arr);

//-------------------------------------------------------------------------------------------------------------------------------

// Bài tập : 
// Nhập vào một string bất kỳ
// 1. Đếm xem chuỗi vừa nhập có bao nhiêu ký tự viết hoa.
// 2. Đếm xem chuỗi vừa nhập có bao nhiêu ký tự viết thường.
// 3. Đếm xem chuỗi vừa nhập có bao nhiêu dấu Space.
// 4. Đếm xem chuỗi vừa nhập có bao nhiêu số.

// let chuoi = prompt(`Mời bạn nhập vào chuỗi cần kiểm tra:`);
// let thuong=0;
// let hoa=0;
// let so=0;
// let space=0;
// for (let i=0;i< chuoi.length;i++){
//     let kt=chuoi[i];
//     if(kt>="a" && kt<="z"){
//         thuong++;
//     } else if (kt>="A" && kt<="Z"){
//         hoa++;
//     } else if (kt>="0" && kt<="9"){
//         so++;
//     } else space++
// }
// document.writeln(`Chuỗi bạn nhập là: ${chuoi} có ${thuong} chữ thường, ${hoa} chữ hoa, ${so} chữ số, ${space} nút space.`);

//------------------------------------------------------------------------------------------------------------------------------

// Bài tập: 
// a. Viết chương trình kiểm tra tính hợp lệ của mật khẩu.
// 1. Có ít nhất 6 ký tự
// 2. Chứa ít nhất 1 chữ cái viết hoa
// 3. Chứa ít nhất 1 chữ cái viết thường
// 4. Chứa ít nhất một chữ số

// b. Cho người dùng nhập mật khẩu để login/ so sánh, nếu đúng đăng nhập, sai quá 5 lần khóa đăng nhập, thoát chương trình.

// const isPassword = (pass) =>{
//     if(pass.length<6){
//         return false;
//     }
//     let hasUpperCase = false;
//     let hasLowerCase = false;
//     let hasDigit = false;
//     for (let i =0; i<pass.length; i++){
//         let char = pass[i];
//         if(char>="a" && char<="z"){
//             hasLowerCase=true;
//         } else 
//         if(char>="A" && char<="Z"){
//             hasUpperCase=true;
//         } else
//         if(char>="0" && char<="9"){
//             hasDigit=true;
//         }
//     }
//     return hasDigit && hasLowerCase && hasUpperCase;
// }

// const setPassword =() => {
//     let pass = prompt(`Mời thiết lập mật khẩu: `);
//     if(isPassword(pass)){
//         alert(`Đặt mật khẩu thành công! Mật khẩu là: ${pass}`);
//         return pass;
//     } else{
//         alert(`Mật khẩu không hợp lệ:
//             1. Có ít nhất 1 ký tự viết hoa.
//             2. Có ít nhất 1 ký tự viết thường.
//             3. Có ít nhất 1 ký tự số.
//             4. Có ít nhất 6 ký tự.`);
//         setPassword();
//     }
// }

// let passOk = setPassword();

// let countLogin = 0;
// while(true){
//     let passLogin = prompt(`Đăng nhập`);
//     if(passOk===passLogin){
//         alert(`Đăng nhập thành công`);
//         break;
//     } else{
//         countLogin++;
//         if(countLogin<5){
//             alert(`Bạn đã nhập sai ${countLogin} lần`);
//         } else{
//             alert(`Bạn nhập sai quá số lần cho phép`);
//             break;
//         }
//     }
// }

//--------------------------------------------------------------------------------------------------------

// Bài tập: 
// Chuyển mật mã theo bảng:
// const a = "abcdefghijklmnopqrstuvwxyz"
// const b = "zxcvbnmasdfghjklqwertyuiop"

// let chuoi = prompt(`Mời bạn nhập chuỗi cần mã hóa:`);
// chuoi=chuoi.toLowerCase();
// alert(`Chuỗi bạn nhập là: ${chuoi}`)
// const a = "abcdefghijklmnopqrstuvwxyz";
// const b = "zxcvbnmasdfghjklqwertyuiop";
// for (let i=0;i<chuoi.length;i++){
//     let char = chuoi[i];
//     for(let j=0;j<a.length;j++){
//         let charA= a[j];
//         let charB= b[j];
//         if(char==charA){
//             char=charB;
//             document.writeln(char);
//             break;
//         }
//     }
// }

// function encryptMessage(message){
//     const a = "abcdefghijklmnopqrstuvwxyz";
//     const b = "zxcvbnmasdfghjklqwertyuiop";
//     let result = "";

//     for(let i=0; i<message.length; i++){
//         let char = message[i].toLowerCase();
//         if(a.includes(char)){
//             let index = a.indexOf(char);
//             result += b[index];
//         } else
//             result += char;
//     }
//     return result;
// }
// let messageInput = prompt(`Nhập tin nhắn cần được mã hóa: `);
// let kq = encryptMessage(messageInput);
// alert(`Tin nhắn đã được mã hóa: ${kq}`);

//------------------------------------------------------------------------------------------------------------

// Bài tập:
// const a = "tôi chăm chỉ, tôi chịu khó, tôi";
// Đếm từ tôi xuất hiện trong string trên

// const a = "tôi chăm chỉ, tôi chịu khó, tôi tôi";
// target = "tôi";
// let count =0;
// for(let i =0; i<a.length;i++){
//     if(a.slice(i,i+target.length)===target){
//         count ++;
//     }
// }
// document.writeln(`Chữ tôi xuất hiện ${count} lần trong đoạn văn`);

//------------------------------------------------------------------------------------------------------------

// Bài tập 
// Tách chuỗi đã cho thành 1 đoạn chữ và 1 dãy số

// const split = (word) => {
//     let chu ="";
//     let so ="";
//     for(let i =0; i<word.length; i++){
//         let char = word[i];
//         if(isNaN(char)){
//             chu+=char;
//         } else
//             so+=char;
//     }
//     return {chu, so};
// }
// let inputW = prompt(`Mời bạn nhập chuỗi: `);
// let result = split(inputW);
// document.writeln(`Chuỗi chữ: ${result.chu}  
//     Chuỗi số: ${result.so}`)
