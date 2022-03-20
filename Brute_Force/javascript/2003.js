const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const numSum = new Array(n + 1).fill(0);
const arr = input[1].split(" ").map(Number);
for (let i = 1; i <= n; i++) {
  numSum[i] = numSum[i - 1] + arr[i - 1];
}

let [start, end] = [0, 1];
let result = 0;
let num;
while (start < n) {
  num = numSum[end] - numSum[start];
  if (num >= m) {
    if (num === m) result++;
    start++;
    continue;
  }
  if (end === n) {
    start++;
    continue;
  }
  end++;
}
console.log(result);
