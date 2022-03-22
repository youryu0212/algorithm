const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, s] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const numSum = new Array(n + 1).fill(0);
for (let i = 1; i <= arr.length; i++) {
  numSum[i] = numSum[i - 1] + arr[i - 1];
}

let [left, right] = [0, 1];
let answer = Infinity;
while (left < n) {
  let num = numSum[right] - numSum[left];
  if (num >= s) {
    answer = Math.min(answer, right - left);
    left++;
    continue;
  }
  if (right < n) {
    right++;
    continue;
  }
  left++;
}
if (answer === Infinity) {
  answer = 0;
}

console.log(answer);
