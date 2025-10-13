let heading = document.querySelector(".heading");

console.log(heading.innerText);

let newHeading = `I am <u><span class="heading-style">Batman</span></u>`;
console.log(newHeading);
// heading.innerText = newHeading;
heading.innerHTML = newHeading;

console.dir(heading);
