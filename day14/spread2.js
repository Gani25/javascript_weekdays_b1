let student = {
  name: "Demo Demo",
  marks: [20, 30, 60, 90],
};

console.log(student);
let studentCopy = { ...student, rollNo: 30 };
console.log(student);
console.log(studentCopy);

let arr = [5, 10, 7, 9, 3];

let obj = { ...arr };
console.log(obj);

console.log({ ..."HELLO" });
