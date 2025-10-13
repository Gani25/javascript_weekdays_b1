// Modifying attributes of elements

let mainImage = document.querySelector("#mainImage");

console.log(mainImage.src);

console.log(mainImage.getAttribute("src"));
console.log(mainImage.getAttribute("id"));
console.log(mainImage.getAttribute("class"));

setTimeout(() => {
  mainImage.setAttribute(
    "src",
    "https://wallpapers.com/images/hd/1440p-batman-arkham-city-background-2560-x-1440-wb8e17c7tkeq795c.jpg"
  );
  mainImage.setAttribute("id", "newImage");
}, 2000);
