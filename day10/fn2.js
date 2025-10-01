console.log(sum);
// console.log(sum(5, 6)); // Error bcoz variable declaration is hoisted
// and not definition

var sum = function (a, b) {
  return a + b;
};

console.log(sum);
console.log(sum(2, 4));
