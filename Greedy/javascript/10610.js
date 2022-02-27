const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split("")
  .map(Number)
  .sort((a, b) => b - a);
let result = -1;
if (arr.reduce((acc, cur) => acc + cur) % 3 === 0 && arr.includes(0))
  result = arr.join("");
console.log(result);
