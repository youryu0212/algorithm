const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
arr.push(0);

let answer = -Infinity;
for (let i = 0; i <= n - k; i++) {
  let value = arr[i];
  for (let j = 1; j < k; j++) {
    value += arr[i + j];
  }
  answer = Math.max(answer, value);
}

console.log(answer);
