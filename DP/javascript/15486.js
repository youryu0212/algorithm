const [[N], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .slice(0, -1)
  .map((input) => input.split(" ").map(Number));

const dp = new Array(N + 1).fill(0);
let currentMax = 0;

for (const [prev, [Ti, Pi]] of input.entries()) {
  currentMax = Math.max(currentMax, dp[prev]);
  if (prev + Ti > N) {
    continue;
  }
  dp[prev + Ti] = Math.max(currentMax + Pi, dp[prev + Ti]);
}

console.log(Math.max(...dp));
