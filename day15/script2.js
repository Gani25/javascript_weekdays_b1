// QUERYSELECTOR / QUERYSELECTORALL

// GENERICS -> With this we can select tags, id, classes

let header = document.querySelector("h1");

console.log(header);

let image = document.querySelector(".image");

console.log(image);
console.log(image.src);

let secondPara = document.querySelector("p#description");

console.log(secondPara);

let allLists = document.querySelectorAll(".list-item");
console.log(allLists);

for (let list of allLists) {
  console.log(list);
}
