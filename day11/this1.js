// This keyword in Js Objects
// Here we have seen this wrt to normal functions
/*
1. It refers to an object that is executing current block of code.
2. TO access any properties of object we have to use this keyword
*/
let employee = {
  name: "Abdul",
  age: 30,
  salary: 20,
  pf: 10,
  ta: 15,
  getTotalSalary() {
    console.log(this); // calling object -> employee

    totalSal = this.salary + this.pf + this.ta;
    console.log(totalSal);
  },
  getAvg: function () {
    console.log(this);
  },
};

function sayHello() {
  console.log("Hello");
  console.log(this);
}

const demoObj = {
  fn: sayHello,
};

sayHello();
employee.getAvg();
employee.getTotalSalary();
demoObj.fn();
