// getElement By Class

let images = document.getElementsByClassName("image");

console.log(images);
console.log(typeof images);
console.dir(images);

for (let image of images) {
  console.log(image);
  console.dir(image);
}

// index
let path = "./images";
for (let i = 0; i < images.length; i++) {
  images[i].src = `${path}/batman_${i}.jpg`;
  console.log(`Image at position ${i} changed`);
}
