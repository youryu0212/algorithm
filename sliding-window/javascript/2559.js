const [[N, K], arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

let answer = 0;
let current = 0;

for (let i = 0; i < K; i++) {
  answer += arr[i];
}
current = answer;

for (let i = K; i < N; i++) {
  current += arr[i] - arr[i - K];
  answer = Math.max(answer, current);
}
console.log(answer);
