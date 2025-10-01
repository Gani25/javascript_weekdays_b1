// Higher Order Functions
// A function which takes another function as argument

// declaration
function sayHelloNTimes(func, num) {
  for (let i = 1; i <= num; i++) {
    func(i);
  }
}

// declaration
function sayHello(number) {
  console.log("Hello All : ", number);
}

// call
sayHelloNTimes(sayHello, 5);
