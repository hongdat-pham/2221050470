// Hàm đệ quy là hàm có thể sử dụng lại chính hàm đó


// Tính giai thừa
const giaiThua = (n) =>{
    if(n===0 || n===1){
        return 1;
    } else{
        return n*giaiThua(n-1);
    }
}
let kq = giaiThua(4);
// document.writeln(kq)

// Tính dãy fibonacci
const F = (n) => {
    if(n<=2)
        return 1;
    else
        return F(n-1)+F(n-2);
}
let so = F(13);
document.writeln(so);