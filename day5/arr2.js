// SPLICE()

color = ["red", "orange", "yellow", "blue", "purple", "green", "pink"];

console.log(`Before calling splice = ${color}`);

console.log(`Deleted elemeent from position -2 = ${color.splice(-2)}`);
console.log(`After calling splice = ${color}`);

console.log(color.splice(1, 0, "Violet", "Indigo", "Light Grey"));
console.log(
  `After calling splice and inserting colors at position 2 = \n${color}`
);

console.log("Deleted element is = ", color.splice(0, 2, "Green"));
console.log(
  `After calling splice and inserting colors at position 0 and deleting 2 = \n${color}`
);

console.log(color.splice(-1));

console.log(color);
