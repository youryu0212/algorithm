const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, -1).map((row) => row.split(" ").map(Number));

const dp1 = Array.from(Array(n), () => new Array(3));
const dp2 = Array.from(Array(n), () => new Array(3));
const dp3 = Array.from(Array(n), () => new Array(3));

const search = (dp, firstHouseIdx) => {
  dp[0] = [...arr[0]];
  dp[1] = [...arr[1]];
  dp[1][firstHouseIdx] = Infinity;
  for (let i = 2; i < n; i++) {
    dp[i][0] = arr[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = arr[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = arr[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  const costs = dp[n - 1].filter((_, idx) => idx !== firstHouseIdx);
  const firstHouseCost = dp[0][firstHouseIdx];
  return Math.min(...costs) + firstHouseCost;
};

const answer = Math.min(search(dp1, 0), search(dp2, 1), search(dp3, 2));

console.log(answer);
