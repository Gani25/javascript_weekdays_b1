// Map

let arr = [5, 2, 8, 10, 15];

let cubeArr = arr.map((element) => element ** 3);

console.log(arr);
console.log(cubeArr);

const students = [
  {
    rollNo: 1,
    name: "Rohit",
    percentage: 88.56,
  },
  {
    rollNo: 2,
    name: "Shoail",
    percentage: 65.22,
  },
  {
    rollNo: 3,
    name: "Nikhil",
    percentage: 95.0,
  },
];
// I want to create a new array with CGPA included -> percentage / 10
// SPREAD Operator -> For COPY (...)
const studentsWithGpa = students.map((student) => {
  //   console.log(student);
  studentCopy = { ...student }; // copy student data so original object won't be modified
  studentCopy["CGPA"] = student["percentage"] / 10;
  return studentCopy;
});

console.log("WITH GPA");
console.log(studentsWithGpa);
console.log("Only Student Arrays");
console.log(students);
