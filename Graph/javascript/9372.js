const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((row) => row.split(" ").map(Number));

let idx = 0;
const answer = [];
while (input.length > idx) {
  const [N, M] = input[idx++];
  for (let i = 0; i < M; i++) {
    idx++;
  }
  answer.push(N - 1);
}

console.log(answer.join("\n"));
