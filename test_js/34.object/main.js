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

let inputKey = prompt(`Mời nhập key: (address, scores)`);
if(student[inputKey]){
    console.log(student[inputKey]);
} else
    console.log(`Key không tồn tại.`);

//--------------------------------------------------

