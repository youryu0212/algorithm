const n = Number(require("fs").readFileSync("/dev/stdin"));
const dp = [0];
for (let i = 1; i <= n; i++) {
  dp[i] = i;
  for (let j = 1; j * j <= i; j++) {
    if (dp[i] > dp[i - j * j] + 1) dp[i] = dp[i - j * j] + 1;
  }
}
console.log(dp[n]);
