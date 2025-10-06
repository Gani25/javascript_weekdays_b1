/*
Methods:
1. A function that is define in javascript objects are called as methods
2. Actions that can be performed on objects
*/
// SHORT HAND

let calculator = {
  division(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
  power(a, b) {
    return a ** b;
  },
};

console.log(calculator.power(4, 3));
console.log(calculator.multiply(4, 3));
console.log(calculator.division(60, 3));
