const button1 = document.querySelector("#btn1");
button1.onclick = () => {
    alert('Bạn đã click vào button')
}
let mess = document.querySelector("#message");
const mouseOver = () => {
    mess.innerHTML = "Mouse Over";
}
const mouseOut = () => {
    mess.innerHTML = "Mouse Out";
}
const button2 = document.querySelector("#btn2");
const setup = () => {
    button2.onmouseover = mouseOver;
    button2.onmouseout = mouseOut;
}

// Tất cả mọi thứ được gọi xong thì mới gọi setup
window.onload = setup;