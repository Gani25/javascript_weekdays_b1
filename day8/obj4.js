// Array of Object
const studentInfo = [
  {
    fullName: "Shoaib Khan",
    age: 30,
    education: ["Diploma EXTC", "BE EXTC", "PGDM HR"],
    address: {
      city: "Mumbai",
      state: "Maharashtra",
      country: "India",
    },
  },
  {
    fullName: "Pranjal Shinde",
    age: 20,
    education: ["HSC Bifocal IT", "BSC IT", "MCA CS"],
    address: {
      city: "Pune",
      state: "Maharashtra",
      country: "India",
    },
  },
];

console.log(studentInfo);
// How to fetch education of Pranjal?
console.log("Pranjal Object = ", studentInfo[1]);
console.log("Pranjal Education = ", studentInfo[1].education);

let pranjalEdu = studentInfo[1].education;
console.log(
  "Latest Education = ",
  pranjalEdu[studentInfo[1].education.length - 1]
);
console.log("Latest Education = ", pranjalEdu[-1]);
console.log("Latest Education = ", pranjalEdu.at(-1));
