{
  let num = 10;
  console.log("Block Scope = ", num);
}

// console.log("Outside Scope = ", num);// Only accessible within {} Block Scope

{
  const num = 50;
  console.log("Block Scope = ", num);
}
// console.log("Outside Scope = ", num); // Only accessible within {} Block Scope

{
  var num = 50;
  console.log("Block Scope = ", num);
}
console.log("Outside Scope = ", num);
// Lexical Scope
// Hoisting
