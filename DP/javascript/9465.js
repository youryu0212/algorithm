const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let result = "";
for (let i = 2 ; i<input.length-1 ; i+=3){
    const dp = [];
    dp.push(input[i].split(' ').map(Number)); // 1행
    dp.push(input[i+1].split(' ').map(Number)); // 2행
    if (dp[0].length >= 2) {
        dp[0][1] += dp[1][0];
        dp[1][1] += dp[0][0];
    }
    for (let j = 2 ; j<dp[0].length ; j++ ){
        dp[0][j] += Math.max(dp[1][j-1],dp[1][j-2]);
        dp[1][j] += Math.max(dp[0][j-1],dp[0][j-2]);
    }
    result += Math.max(dp[0][dp[0].length-1],dp[1][dp[1].length-1]) + "\n";
}
console.log(result);