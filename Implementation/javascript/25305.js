const [[_, K], arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));
const answer = arr.sort((a, b) => b - a).slice(0, K);
console.log(answer[answer.length - 1]);
