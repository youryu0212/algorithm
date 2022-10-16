const getCount = (dp, num) => dp.reduce((acc, row) => acc + row[num], 0);

const generateDp = (count) => {
  const dp = Array.from(Array(4), () => new Array(count + 1).fill(0));
  dp[1][1] = 1;
  dp[1][2] = 0;
  dp[1][3] = 1;
  dp[1][4] = 2;
  dp[2][1] = 0;
  dp[2][2] = 1;
  dp[2][3] = 1;
  dp[2][4] = 0;
  dp[3][1] = 0;
  dp[3][2] = 0;
  dp[3][3] = 1;
  dp[3][4] = 1;

  for (let i = 5; i <= count; i++) {
    dp[1][i] = (getCount(dp, i - 1) - dp[1][i - 1]) % 1000000009;
    dp[2][i] = (getCount(dp, i - 2) - dp[2][i - 2]) % 1000000009;
    dp[3][i] = (getCount(dp, i - 3) - dp[3][i - 3]) % 1000000009;
  }
  return dp;
};

const dp = generateDp(100000);
const answer = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map(Number)
  .map((num) => getCount(dp, num) % 1000000009)
  .join("\n");
console.log(answer);
