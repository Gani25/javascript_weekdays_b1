console.log("Hello");
setTimeout(() => {
  console.log("I am inside setTimeout Functions");
  setTimeout(() => {
    console.log("Nested Timeout...");
  }, 2000);
}, 3000); // 3000 ms -> 3s

console.log("After timeout");
