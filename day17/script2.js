// Adding Element or Removing Element
/*
1. create -> document.createElement("<tag>");
2. -> add this element to html body or to specific divs
    ADD  
    a. appendChild(element)
    b. append(element) -> Mostyle we will use this -> We can add a String as well as html element
    c. prepend(element) -> Add at the start
    d. insertAdjacent(where_position, element)
    REMOVE
    a. removeChild(element);
    element.remove()
*/

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

box.append(para);

para.append(" Hello New Text added");
