const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const dp = Array.from(Array(Number(input[0])+1),()=>new Array(3).fill(0))
dp[1][1] = Number(input[1]);
for (let i = 2 ; i<input.length-1 ; i++){
  dp[i][0] = Math.max(...dp[i-1]);
  dp[i][1] = dp[i-1][0] + Number(input[i]);
  dp[i][2] = dp[i-1][1] + Number(input[i]);
}
console.log(Math.max(...dp[Number(input[0])]));