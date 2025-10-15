/*
1. Accessing element on page -> Navigating on page
Navigating On Pages -> with js we have 4 properties
1. Parent Element
2. children
3. nextElementSibling
4. previoudElementSibling 

When we want to inject element / content dynamically in that case 
we will use this properties
-> Baaju -> insert
*/

let myHeading = document.querySelector("h4");

console.log(myHeading);
console.log(myHeading.parentElement);

myHeading.parentElement.style.border = "2px solid red";

console.log(myHeading.children);
console.log(myHeading.parentElement.children);

// how many children element are there?
console.log(myHeading.parentElement.childElementCount);

// siblings
let h2 = document.querySelector("h2");

console.log(h2.nextElementSibling);

h2.nextElementSibling.style.textDecoration = "underline";
h2.nextElementSibling.style.color = "red";
h2.nextElementSibling.style.backgroundColor = "yellow";
