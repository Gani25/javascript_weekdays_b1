let para = document.createElement("p");
para.innerText = "Hii I am learning JS and I am New";
para.classList.toggle("generated_para");

let body = document.querySelector("body");
// Add to the end of a body
body.appendChild(para);

console.log(body);

/*
Ek element -> Ek Parent -> thats why it changed from body to box
*/
let box = document.querySelector(".box");
// para.append(" Hello New Text added");
let copyPara = para.cloneNode(true);

box.appendChild(copyPara);
