const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((row) => row.split(" ").map((v, i) => (i ? Number(v) : v)));
arr.sort((a, b) => (a[0] > b[0] ? 1 : -1));
arr.sort((a, b) => b[3] - a[3]);
arr.sort((a, b) => a[2] - b[2]);
arr.sort((a, b) => b[1] - a[1]);

const answer = arr.map((row) => row[0]).join("\n");
console.log(answer);
