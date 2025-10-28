let element = document.querySelector("#myElement");

// 1. Thêm một lớp mới vào phần tử
element.classList.add("newClass");

// 2. Kiểm tra xem phần tử có chứa lớp cụ thể không
console.log(element.classList.contains("myClass"));

// 3. Xóa một lớp khỏi phần tử
// element.classList.remove("newClass")

// 4. Thay thế một lớp cũ bằng 1 lớp mới
element.classList.replace("newClass", "abc")

// 5. Nếu lớp đã tồn tại thì loại bỏ nó, nếu không thì thêm lớp vào phần tử 
element.classList.toggle("toggleClass");

// 6. Xem các class trong phần tử
console.log(element.classList);