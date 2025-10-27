// const DoiCheDo = () => {
//     let than = document.querySelector("body");
//     than.style.backgroundColor = "black";
//     let chu1 = document.querySelector("#vd1");
//     chu1.style.color = "white";
//     let chu2 = document.querySelector("#vd2");
//     chu2.style.color = "white";
// }
let cheDo = true;
const DoiCheDo = () => {
    if(cheDo === true){
        document.getElementsByTagName("body")[0].style = "background-color: black";
        document.getElementsByTagName("h2")[1].innerHTML = "Chế độ tối";
        document.getElementsByTagName("h2")[0].style = "color: white";
        document.getElementsByTagName("h2")[1].style = "color: white";
        document.getElementsByTagName("img")[0].src = "./moon.jpeg";
        cheDo = false;
    } else {
        document.getElementsByTagName("body")[0].style ="background-color: white";
        document.getElementsByTagName("h2")[1].innerHTML = "Chế độ sáng";
        document.getElementsByTagName("h2")[0].style = "color: black";
        document.getElementsByTagName("h2")[1].style = "color: black";
        document.getElementsByTagName("img")[0].src = "./sun.avif";
        cheDo = true;
    }
};
