// Strings
// methods -> stringName.method();

// Strings are Immutable

// 1. Trim

let msg = "   Hello World Hello World  ";

console.log(`msg is: ${msg}`);
console.log(`Length of msg is: ${msg.length}`);

let newMsg = msg.trim();
console.log(`msg is: ${newMsg}`);
console.log(`Length of msg after trim is: ${newMsg.length}`);

console.log(newMsg.toUpperCase());
console.log(newMsg.toLowerCase());

// Methods with arguments

console.log(`Index of World in ${newMsg} = ${newMsg.indexOf("World")}`);
console.log(`Index of World in ${newMsg} = ${newMsg.lastIndexOf("World")}`);
console.log(
  `Index of world which is not found in ${newMsg} = ${newMsg.lastIndexOf(
    "world"
  )}`
);

// Method chaining ().().()
console.log(msg.trim().toUpperCase());
