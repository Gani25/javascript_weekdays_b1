let letters = ["a", "b", "a", "d", "a", "b", "c", "c"];
// Count frequency of characters
// {"a":3, "b":2,"d":1,"c":2}

let frequencyObj = letters.reduce((acc, curChar) => {
  acc[curChar] = (acc[curChar] || 0) + 1;

  return acc;
}, {});

console.log(frequencyObj);
