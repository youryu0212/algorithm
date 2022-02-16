const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const dp = new Array(12).fill(0);
dp[1] = 1
dp[2] = 2
dp[3] = 4
for (let i = 4 ; i<=11 ; i++){
    dp[i] = dp[i-1]+dp[i-2]+dp[i-3];
}
let result = "";
for (let i = 1 ; i<input.length-1 ; i++){
    result += dp[Number(input[i])]+'\n';
}
console.log(result);