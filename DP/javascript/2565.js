const [[N], ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const getMinSubArr = (N, arr) => {
  const dp = new Array(N).fill(1);
  arr = arr.map(([, b]) => b);
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      if (arr[j] > arr[i]) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }

  return Math.max(...dp);
};

arr.sort((a, b) => a[0] - b[0]);

const answer = N - getMinSubArr(N, arr);
console.log(answer);
