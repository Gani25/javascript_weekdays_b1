// SLICE

let str = "I love programming";

console.log(`My str = ${str} -> ${str.slice(7)}`);
console.log(`My str = ${str} -> ${str.slice(str.indexOf("p"))}`);

// Start = inclusive, End = Exclusive
console.log(`My str = ${str} -> ${str.slice(2, 7)}`);

// Negative indexing
console.log(`My str = ${str} slicing with negative index -> ${str.slice(-5)}`);
console.log(`My str = ${str} slicing with negative index -> ${str.slice(-5)}`);

// Replace ->

console.log(
  `My str = ${str} replacing love with do -> ${str.replace("love", "do")}`
);
console.log(
  `My str = ${str} replacing love with do -> ${str.replace(" ", "")}`
);
console.log(
  `My str = ${str} replacing love with do -> ${str.replaceAll(" ", "")}`
);

console.log(str.repeat(3));

/*
1. WAP to check whther the string is empty or not
2. WAP to check whether the character at the given index is in lower case or not -> Hello SPRK -> index = 5 -> o -> lower case
3. Good or bad string -> If string starts with uppercase and have length more than 5 characters then display good string
*/
