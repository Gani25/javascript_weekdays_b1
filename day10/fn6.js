// Higher Order Function which return a Function

function checkEvenOrOdd(statement) {
  // statement -> even / odd / anything
  if (statement.toLowerCase() == "even") {
    // return even function
    return function (num) {
      console.log(num % 2 == 0);
    };
  } else if (statement.toLowerCase() == "odd") {
    return function (num) {
      console.log(num % 2 != 0);
    };
  } else {
    return function () {
      console.log("Invalid Choice Please choose 'even' or 'odd'");
    };
  }
}

let evenFunc = checkEvenOrOdd("even");
console.log(evenFunc);
let oddFunc = checkEvenOrOdd("odd");
console.log(oddFunc);
let invalid = checkEvenOrOdd("hello");
console.log(invalid);

invalid();
evenFunc(6);
evenFunc(9);
oddFunc(6);
oddFunc(9);
