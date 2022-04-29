const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const dp = Array.from(Array(n), () => new Array(3).fill(0));

dp[0] = arr[0];

dp[1][0] = Math.min(arr[0][1], arr[0][2]) + arr[1][0];
dp[1][1] = Math.min(arr[0][0], arr[0][2]) + arr[1][1];
dp[1][2] = Math.min(arr[0][0], arr[0][1]) + arr[1][2];

for (let i = 2; i < n; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + arr[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + arr[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + arr[i][2];
}
console.log(Math.min(...dp[n - 1]));
