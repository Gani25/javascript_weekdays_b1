// Convert array into variables
// Destructuring

let names = ["JOHN", "Shubham", "Pratik", "Rohini", "Pranjali"];

let [first, second, ...remaining] = names;

console.log(first);
console.log(second);
console.log(remaining);
console.log(names);
