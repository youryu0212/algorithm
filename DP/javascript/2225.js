const [n, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
const dp = Array.from(Array(201), () => new Array(201).fill(1));

for (let i = 1; i <= 200; i++) {
  for (let j = 2; j <= 200; j++) {
    dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 1000000000;
  }
}
console.log(dp[n][k]);
