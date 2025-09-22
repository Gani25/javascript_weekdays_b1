let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "";
  // space
  for (let sp = 1; sp <= n - i; sp++) {
    str = str + "  ";
  }
  // column / star
  for (let j = 1; j <= i; j++) {
    str = str + "* ";
  }
  console.log(str);
}
