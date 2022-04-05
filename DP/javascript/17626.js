const n = Number(require("fs").readFileSync("/dev/stdin"));
const dp = new Array(n + 1).fill(0);
dp[1] = 1;
for (let i = 2; i <= n; i++) {
  let j = 1;
  let minNum = Infinity;
  while (j * j <= i) {
    minNum = Math.min(minNum, dp[i - j * j++]);
  }
  dp[i] = minNum + 1;
}
console.log(dp[n]);
