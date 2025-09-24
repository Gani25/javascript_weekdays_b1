// Objects using object literals
const student = {
  "roll No": 1,
  name: "SPRK Tech",
  gender: "Female",
  marks: [85, 65, 90, 30, 99],
  isActive: true,
};

console.log(student);

console.log("Name = ", student.name);
console.log("Name = ", student["name"]);
console.log("Roll No= ", student["roll No"]);

let username = "name";

console.log("Name = ", student.username); // undefined
console.log("Name with brackets= ", student[username]); // undefined
