const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const dp = [];
const arr = [];

const calculateNum = (arr, r, c) => {
  if (r === 0) {
    return arr[r][c];
  }
  if (c === 0) {
    return arr[r][c] + dp[r - 1][c];
  }
  if (r === c) {
    return arr[r][c] + dp[r - 1][c - 1];
  }
  return arr[r][c] + Math.max(dp[r - 1][c - 1], dp[r - 1][c]);
};

for (let i = 1; i <= n; i++) {
  dp.push(Array(i).fill(false));
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    dp[i][j] = calculateNum(arr, i, j);
  }
}

console.log(Math.max(...dp[n - 1]));
