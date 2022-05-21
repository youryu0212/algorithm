const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .slice(1, -1)
  .map(Number)
  .sort((a, b) => a - b);

const len = input.length;

const answer = input.reduce((answer, num, idx) => {
  return Math.max(answer, num * (len - idx));
}, 0);

console.log(answer);
