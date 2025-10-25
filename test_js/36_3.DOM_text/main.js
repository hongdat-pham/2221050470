let element = document.querySelector("#demo");
console.log(element.textContent);
console.log(element.innerText);
console.log(element.innerHTML);

let element2 = document.querySelector("#demo2");
element2.innerHTML = "<p><i> Xin chào</i></p>";
element2.textContent = "<p><i> Xin chào</i></p>";
