let employee = {
  name: "Abdul",
  age: 30,
  salary: 20,
  pf: 10,
  ta: 15,
  address: {
    location: "Kharghar",
    state: "Maharashtra",
    country: "India",
  },
  getAddress() {
    console.log(this.address);
  },
  getAdd: () => {
    console.log(this); // window
    console.log(employee);
    console.log(employee.address);
  },
};

// employee.getSalary();
