// Higher Order Functions
// A function which takes another function as argument

// declaration
function sayHelloNTimes(func, num) {
  for (let i = 1; i <= num; i++) {
    func();
  }
}

// declaration
function sayHello() {
  console.log("Hello All");
}

// call
sayHelloNTimes(sayHello, 5);
