const [N, K] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
const LIMIT_NUM = 1000;
const getPascalTriangle = () => {
  const dp = Array.from(Array(LIMIT_NUM + 1), () => []);
  dp[0].push(1);
  for (let i = 1; i <= LIMIT_NUM; i++) {
    dp[i].push(1);
    for (let j = 1; j < i; j++) {
      dp[i].push((dp[i - 1][j - 1] + dp[i - 1][j]) % 10007);
    }
    dp[i].push(1);
  }
  return dp;
};

const dp = getPascalTriangle();
console.log(dp[N][K] % 10007);
