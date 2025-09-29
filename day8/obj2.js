// Add values in object
student = {
  full_name: "SPRK Tech",
};

console.log(student);

student.age = 35;
let gender = "gender";
student[gender] = "Female";

student["marks"] = 50;
console.log("Adding Key : Value Pair To Object");
console.log(student);

// Update values in object
student.marks = 85;
console.log("Updating Obj ");
console.log(student);
// Delete values in object

delete student.marks;
delete student.vehicle;

console.log("After Deleting Marks ");
console.log(student);

student.marks = [65, 85, 90, 60, 30];

console.log(student);
console.log(student.marks);
console.log(student.marks[5]);
console.log(student.marks[0]);
console.log(student.marks[2]);

console.log("Student Marks");
let add = 0;
for (let mark of student.marks) {
  console.log(mark);
  add += mark;
}
avg = add / student.marks.length;

student.marksSum = add;
student.avgMarks = avg;

console.log(student);
