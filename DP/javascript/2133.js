const n = Number(require("fs").readFileSync("/dev/stdin"));
const dp = new Array(n + 1).fill(0);

if (n >= 2) {
  dp[2] = 3;
}

for (let i = 4; i <= n; i += 2) {
  dp[i] = dp[i - 2] * 3 + 2;
  for (let j = i - 4; j > 0; j -= 2) {
    dp[i] += dp[j] * 2;
  }
}
console.log(dp[n]);
