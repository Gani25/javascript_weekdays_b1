let msg = "Hello Today I am learning JS";

console.log(msg);
console.log(typeof msg);

msg = "Hello Today I am 'learning JS'"; // ERROR
console.log(msg);
msg = 'Hello Today I am "learning JS"'; // ERROR
console.log(msg);
msg = `Hello Today I am "learning JS"`; // ERROR
console.log(msg);
