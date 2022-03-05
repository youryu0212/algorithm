const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const dp = new Array(101).fill(0);
let result = "";
dp[1] = dp[2] = dp[3] = 1;
for (let i = 4; i < 101; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}
for (let i = 1; i < input.length - 1; i++) {
  result += `${dp[input[i]]}\n`;
}
console.log(result);
