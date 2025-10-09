// Destructring the object

let student = {
  name: "SPRK TECH",
  age: 30,
  class: "Full Stack Dev",
  email: "sprk@gmail.com",
  pw: "1234",
};

let userName = student.name;
console.log(`Username = ${userName}`);

let { name, pw, email } = student;

console.log(`Username = ${name}`);
console.log(`Password = ${pw}`);
console.log(`email = ${email}`);

// If I want key name to be different

let {
  name: user,
  pw: password,
  email: userEmail,
  location: city = "Kharghar",
} = student;
console.log(`Username = ${user}`);
console.log(`Password = ${password}`);
console.log(`email = ${userEmail}`);
console.log(`Location = ${city}`);
