const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [A, B, C] = input[0].split(" ").map(Number);
const cost = [0, A, B, C];

const arr = input.slice(1).map((row) => row.split(" ").map(Number));
const time = new Array(101).fill(0);

arr.forEach(([a, b]) => {
  for (let i = a; i < b; i++) {
    time[i] += 1;
  }
});

const answer = time.reduce((answer, cnt) => answer + cnt * cost[cnt], 0);
console.log(answer);
