let number = 1000000000000001;
switch (number%2){
    case 0:
        document.writeln("Số chẵn");
        break;
    case 1:
        document.writeln("Số lẻ");
        break;
    default:
        document.writeln("Số không hợp lệ");
        break;
}

let month=2;
switch (month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.writeln("This month has 31 days");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.writeln("This month has 30 days");
        break;
    case 2:
        document.writeln("This month has 28 days");
        break;
    default:
        document.writeln("Don't exist this month");
        break;
}

let choice = Number(prompt("Chọn cách tìm kiếm: \n 1. Tìm theo tên \n 2. Tìm theo ID \n 3. Tìm theo tác phẩm"));
switch (choice){
    case 1:
        alert("Tìm theo tên");
        break;
    case 2:
        alert("Tìm theo ID");
        break;
    case 3:
        alert("Tìm theo tác phẩm");
        break;
    default:
        alert("Mời nhập số hợp lệ");
        break;
}