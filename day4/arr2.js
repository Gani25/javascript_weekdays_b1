// Methods of array -> fucntions
/*
1. push -> Insert at the end
2. pop -> Delete from end and return the deleted element
3. unshift -> add to start
4. shift -> Delete from start and return the deleted element
*/

let names = ["Rohit", "Shruti", "Shoeb", "Lalit"];

console.log(names);

console.log("After push new lenght is: ", names.push(50));
console.log(names);

console.log("Deleted eleement is = ", names.pop());
console.log(names);

console.log("Deleted element from start = ", names.shift());
console.log(names);
console.log(names.unshift("Abdul"));
console.log(names);

/*
Task:
1. For the given start state of array change to final state
start -> ["november","march","december","july"]
final ->["july","june","december","january"]
 */
