const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [_, k] = input[0].split(" ").map(Number);
const arr = input.slice(1, -1).map((arr) => arr.split(" ").map(Number));

const search = (arr, k) => {
  const memo = Array.from(Array(arr.length + 1), () => new Array(k + 1).fill(0));

  for (let i = 1; i <= arr.length; i++) {
    const [w, v] = arr[i - 1];

    for (let j = 1; j <= k; j++) {
      if (w > k || j < w) {
        memo[i][j] = memo[i - 1][j];
        continue;
      }
      memo[i][j] = Math.max(memo[i - 1][j - w] + v, memo[i - 1][j]);
    }
  }
  return memo[arr.length][k];
};

const answer = search(arr, k);
console.log(answer);
