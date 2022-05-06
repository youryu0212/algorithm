const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const P = [];
const T = [];
for (let i = 1; i < input.length - 1; i++) {
  const [t, p] = input[i].split(" ").map(Number);
  P.push(p);
  T.push(t);
}

const search = () => {
  const dp = new Array(n).fill(0);
  dp[n - 1] = T[n - 1] > 1 ? 0 : P[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    const p = i + T[i] <= n ? P[i] : 0;
    const cur = i + T[i] < n ? dp[i + T[i]] : 0;
    dp[i] = Math.max(dp[i + 1], cur + p);
  }
  return dp[0];
};

const answer = search();
console.log(answer);
