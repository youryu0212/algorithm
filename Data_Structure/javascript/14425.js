const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const set = new Set();
for (let i = 1; i <= n; i++) {
  set.add(input[i]);
}
let answer = 0;

for (let i = n + 1; i < input.length - 1; i++) {
  set.has(input[i]) ? (answer += 1) : "";
}
console.log(answer);
