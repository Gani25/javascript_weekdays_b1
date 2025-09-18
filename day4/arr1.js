let names = ["Arjun", "Shiva", "Abdul", "Shoiab"];
console.log(`Names are = ${names}`);
console.log(`Names are = ${typeof names}`);
console.log(`Names at index 1 = ${names[1]}`);
console.log(`Type at index 1 = ${typeof names[1]}`);

console.log(`Size of array = ${names.length}`);

let info = ["Abdul Gani", 25, "Male", 62.5];

console.log(`Name = ${info[0]}`);
console.log(`Age = ${info[1]}`);
console.log(`Gender = ${info[2]}`);
console.log(`Weight = ${info[3]}`);

// on nov -> age will change to 26
// Arrays are mutable

info[1] = 26;
console.log(`Updated Age = ${info[1]}`);
info[0] = "Aachal Tiwari";
info[2] = "Female";

console.log(`Array = ${info}`);
