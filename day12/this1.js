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
  getSalary: () => {
    console.log("This inside Arrow\n", this);
    console.log("Salary: ", this.salary);
  },
  getAvg: function () {
    console.log(this);
  },
  getInfo1: function () {
    console.log("This of get info 1\n", this);
    setTimeout(function () {
      console.log("This of setTimeout of getInfo1\n", this); // global scope
    }, 2000);
    /*
    In set timeout of getInfo1() -> we have normal function
    Normal function creates its own this -> here this means window object
    */
  },
  getInfo2: function () {
    console.log("This of get info 2\n", this);
    setTimeout(() => {
      console.log("This of setTimeout of getInfo2\n", this);
    }, 2000);
  },
};

// employee.getSalary();
