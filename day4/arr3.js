// indexOf and includes
// concat and reverse
let color = ["red", "orange", "red", "blue", "violet", "blue"];

console.log(color.indexOf("blue"));
console.log(color.lastIndexOf("blue"));
console.log(color.indexOf("green"));

console.log(color.includes("blue"));
console.log(color.includes("green"));

let secondary = ["green", "purple"];

let allColor = color.concat(secondary);
console.log(color);
console.log(secondary);
console.log(allColor);

color.reverse();
console.log(color);
