// Add Class / Remove Class
// classList

let mainImage = document.querySelector("#mainImage");

console.log(mainImage.classList);

mainImage.classList.add("hidden"); // hide
// mainImage.classList.add("hidden");
// mainImage.classList.add("hidden");
// mainImage.classList.add("hidden");
console.log(mainImage.classList);

setTimeout(() => {
  if (mainImage.classList.contains("hidden")) {
    console.log("Removing Hidden Class");
    mainImage.classList.remove("hidden"); // remove
  } else {
    console.log("Class hidden Not Found");
  }
  console.log(mainImage.classList);
}, 2000);

setTimeout(() => {
  console.log("Toggle between hidden");
  mainImage.classList.toggle("hidden"); // hide
  console.log(mainImage.classList);
}, 2500);
setTimeout(() => {
  console.log("Toggle between hidden");
  mainImage.classList.toggle("hidden"); // show
  console.log(mainImage.classList);
}, 5500);
