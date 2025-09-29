const studentInfo = {
  shoaib: {
    fullName: "Shoaib Khan",
    age: 30,
    gender: "Male",
  },
  pranjal: {
    fullName: "Pranjal Sharma",
    age: 20,
    gender: "Female",
  },
};

console.log(studentInfo);
console.log("Name of Obj 1 = ", studentInfo.shoaib.fullName);
console.log("Name of Obj 1 = ", studentInfo["shoaib"]["fullName"]);
console.log("Name of Obj 2 = ", studentInfo.pranjal.fullName);
console.log("Name of Obj 2 = ", studentInfo["pranjal"]["fullName"]);
