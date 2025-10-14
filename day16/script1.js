let image = document.querySelector("#mainImage");
// Manipulating Style with JS

console.dir(image);
image.style.borderBottom = "4px dotted red";
image.style.borderRadius = "20px";

console.log(image.style);

let h2 = document.querySelector("h2");
console.log(h2.innerHTML);
h2.style.backgroundColor = "Yellow";
h2.style.color = "red";
h2.style.textDecoration = "underline";

console.log(h2.style);

let allLists = document.querySelectorAll("li");
console.log(allLists);

for (let list of allLists) {
  list.style.textDecoration = "none";
  list.style.color = "green";
}
let allListsLinks = document.querySelectorAll(".list-item a");

for (let list of allListsLinks) {
  list.style.textDecoration = "none";
  list.style.color = "green";
}
