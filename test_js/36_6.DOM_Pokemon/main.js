// https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/1.png
const container = document.querySelector("#container");
let baseUrl = "https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/";

// Bài 1
// const newImg = document.createElement("img");
// newImg.src = `${baseUrl}1.png`;
// container.appendChild(newImg);

// Bài 2
// for(let i =1; i<=151; i++){
//     const newImg = document.createElement("img");
//     newImg.src = `${baseUrl}${i}.png`;
//     container.appendChild(newImg);
// }

// Bài 3
for(let i = 1; i<=151; i++){
    const newDiv = document.createElement("div");
    const parentDiv = container.appendChild(newDiv);
    const newImg = document.createElement("img");
    newImg.src = `${baseUrl}${i}.png`;
    parentDiv.appendChild(newImg); 
    const newSpan = document.createElement("span");
    newSpan.innerText = `#${i}`;
    parentDiv.appendChild(newSpan);
}
