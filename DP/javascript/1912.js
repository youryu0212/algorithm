const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const dp = new Array(n).fill(0);
dp[0] = nums[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
}
console.log(Math.max(...dp));
