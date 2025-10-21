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