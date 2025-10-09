// select element by ID
// getElementById -> returns the element as Object or null if not present

console.log(document.all);
console.log(document);

let imageObject = document.getElementById("mainImage");

console.log(imageObject);
console.dir(imageObject);
console.log(imageObject.src);
console.log(imageObject.tagName);
console.log(imageObject.id);

imageObject.src =
  "https://media.geeksforgeeks.org/wp-content/uploads/20220112104213/HTMLDOMdrawiofinal-300x270.png";

console.log(imageObject.src);

desc = document.getElementById("description");

console.log(desc);
console.dir(desc);
