const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((num) => Number(num) - 1);
console.log(
  Math.abs(Math.floor(a / 4) - Math.floor(b / 4)) + Math.abs((a % 4) - (b % 4))
);
