const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
dp = Array.from(Array(n + 1), () => new Array(2));
dp[1][0] = Number(input[1]);
dp[1][1] = 0;
if (n >= 2) {
  dp[2][0] = Number(input[2]);
  dp[2][1] = dp[1][0] + Number(input[2]);
}

const search = (n) => {
  if (dp[n][0] !== undefined) return dp[n];
  dp[n][0] = Math.max(...search(n - 2)) + Number(input[n]);
  dp[n][1] = Math.max(search(n - 1)[0]) + Number(input[n]);
  return dp[n];
};
search(n);
console.log(Math.max(...dp[n]));
