// Sử dụng querySelector để thấy thẻ a đầu tiên 
// const firstLink = document.querySelector("a");
// console.log(firstLink);
// Kiểm tra xem thẻ a có tồn tại hay không
// if(firstLink){
//     const linkHref = firstLink.getAttribute("href");
//     console.log(linkHref);
// } else{
//     alert(`Không tìm thấy thẻ a`);
// }

//-----------------------------------------------

// const links = document.querySelectorAll("ul a");
// C1: 
// for(let i = 0; i<links.length;i++){
//     if(links){
//         const linkHref = links[i].getAttribute("href");
//         console.log(linkHref);
//     } else{
//         alert(`Không tìm thấy thẻ a`);
//     }
//     links[i].setAttribute("target", "_blank");
// }

// C2: 
// links.forEach((singleLink)=>{
//     singleLink.setAttribute("target", "_blank");
// })

//------------------------------------------------

// Bài tập đổi màu của thẻ h1 từ màu đỏ sang màu xanh
// let title = document.querySelector("h1");
// title.setAttribute("style","color: blue");
// console.log(title)

//------------------------------------------------

// hasAttribute kiểm tra xem có attribute hay không
// const item1 = document.querySelector(".list");
// console.log(item1.hasAttribute("class"));

// const title1 = document.querySelector("#heading_title");
// console.log(title1.hasAttribute("style"));

//------------------------------------------------

// removeAttribute xóa thuộc tính

// const title1 = document.querySelector("#heading_title");
// title1.removeAttribute("style");

//------------------------------------------------

// Bài tập xóa toàn bộ thuộc tính href trong thẻ ul

// let removeHref = document.querySelectorAll("ul a");
// removeHref.forEach((singleA) => {
//     singleA.removeAttribute("href");
// })

//------------------------------------------------

