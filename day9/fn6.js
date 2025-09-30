function demo() {
  let number = 50;

  console.log("Value of number in function = ", number);
}
demo();
console.log("Value of number outside of function = ", number); // ERROR

// number only accessible inside function BLOCK SCOPE
