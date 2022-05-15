const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const a = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const b = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

const result = a.reduce((acc, num, idx) => {
  return acc + b[idx] * num;
}, 0);
console.log(result);
