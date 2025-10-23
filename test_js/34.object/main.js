// let student = {
//     fullName: "Pham Hong Dat",
//     birthYear: 2004,
//     address: {
//         city: "Nam Dinh",
//         country: "Viet Nam"
//     },
//     score: [8, 9, 10],
//     getAge: function (){
//         return 2025-this.birthYear;
//     },
//     getAge2: function (){
//         this.age = 2025-this.birthYear;
//         return this.age()
//     },
//     averageScore: function (){
//         sumScore = this.score.reduce((a,b)=>a+b,0);
//         return sumScore/3;
//     }
// };
// document.writeln(student.averageScore());
// let teacher = {
//     "1 name": "Jacob",
//     "@ address": {
//         city: "Ha Noi",
//         country: "Viet Nam"
//     }
// }
// document.writeln(teacher["1 name"]);
// student.getAge2();
// document.writeln(student.age)

// let inputKey = prompt(`Mời nhập key: (address, scores)`);
// if(student[inputKey]){
//     console.log(student[inputKey]);
// } else
//     console.log(`Key không tồn tại.`);

//--------------------------------------------------

// Thêm thuộc tính( Thêm cặp key value)
// C1:
// student.email = "student.gmail.com"; 
// C2:
// student["1email"] = "student1.gmail.com";

// document.writeln(student.email);
// document.writeln(student["1email"]);

// Xóa bỏ thuộc tính 
// delete student.email;
// document.writeln(student);

// Sửa thuộc tính
// student["1email"] = "Sau khi đã được sửa";
// document.writeln(student["1email"]);

//-------------------------------------------------------------

// Phương thức Object.keys(object) dùng để trả về các key của object
// let person = {
//     name: "Hong Dat", 
//     age: 21,
// }
// let keys = Object.keys(person);
// document.writeln(keys)

// Phương thức Object.values(object) dùng để trả về các value của object
// let person = {
//     name: "Hong Dat", 
//     age: 21,
// }
// let values = Object.values(person);
// document.writeln(values);

// Phương thức Object.entries(object) dùng để trả về một mảng chứa các cặp [key, value] của đối tượng dưới dạng mảng con
// let person = {
//     name: "Hong Dat", 
//     age: 21,
// }
// let entries = Object.entries(person);
// document.writeln(entries);

// Phương thức Object.assign(target, source) sử dụng để sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn (source) vào một đối tượng đích
// const target = {};
// const source1 = {a:1};
// const source2 = {b:2};
// Object.assign(target,source1,source2);
// console.log(target);

// Chúng ta có thể sử dụng toán tử spread(...) 
// const source1 = {a:1};
// const source2 = {b:2};
// const target = {...source1,...source2};
// console.log(target)

// Phương thức Object.hasOwnProperty(prop) dùng để kiểm tra xem đối tượng có một thuộc tính nào đó có hay không và trả về true nếu có
// let person = {name: "Dat", age: 21}
// console.log(person.hasOwnProperty("name"));
// Trả về true
// console.log(person.hasOwnProperty("birthYear"));
// Trả về false

// Phương thức Object.freeze(object) dùng để đóng băng đối tượng, làm cho nó không thể thêm, sửa, xóa
// let person = {name: "Dat", age:21};
// Object.freeze(person);
// Thêm năm sinh không thành công
// person.birthYear = 2004;
// Thêm email không thành công 
// person.email = "Humg.edu.com.vn";
// Xóa email không thành công 
// delete person.email;
// console.log(person);

// Phương thức Object.seal(obj) ngăn không cho thêm, xóa thuộc tính chỉ cho sửa thuộc tính 
// let person = {name:"Dat", age: 21};
// Object.seal(person);
// Thử xóa nhưng không được
// delete person.name;
// Thêm key mới cũng không được
// person.birthYear = 2004;
// Thay đổi value thì vẫn hợp lệ
// person.name = "Hong Dat";
// console.log(person)

//----------------------------------------------------------------------

let student = {
    fullName: "Pham Hong Dat",
    birthYear: 2004,
    address: {
        city: "Nam Dinh",
        country: "Viet Nam"
    },
    score: [8, 9, 10],
    getAge: function (){
        return 2025-this.birthYear;
    },
    getAge2: function (){
        this.age = 2025-this.birthYear;
        return this.age()
    },
    averageScore: function (){
        sumScore = this.score.reduce((a,b)=>a+b,0);
        return sumScore/3;
    }
};

// Hàm tạo để tạo các khuôn mẫu
// C1: function expression  
// const SinhVien = function(fullName, ID, birthYear, homeTown){
//     this.fullName = fullName;
//     this.ID = ID;
//     this.birthYear = birthYear;
//     this.homeTown = homeTown;

//     this.showInfo = function(){
//         return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown}`
//     }
// }

// C2: function declaration
// function SinhVien(fullName, ID, birthYear, homeTown){
//     this.fullName = fullName;
//     this.ID = ID;
//     this.birthYear = birthYear;
//     this.homeTown = homeTown;

//     this.showInfo = function(){
//         return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown}`
//     }
// }

// Tạo các đối tượng cụ thể
// const sv1 = new SinhVien("Hong Dat", 222, 2004, "Nam Dinh");
// const sv2 = new SinhVien("Hong Thai", 223, 2003, "Ha Noi");

//-----------------------------------------------------------------
// let M = new Array();
// console.log(typeof M)

// Khai báo ES6 classes
// C1: class expression (ít được sử dụng)
const SinhVienEx = class{
}
// C2: class decoration (thường dùng vì ngắn gọn hơn)
class SinhVien{
    constructor(fullName, ID, birthYear, homeTown){
        this.fullName = fullName;
        this.ID = ID;
        this.birthYear = birthYear;
        this.homeTown = homeTown;
        
    }
    showInfo() {
        return `${this.fullName} ${this.ID} ${this.birthYear} ${this.homeTown}`;
    };
}
