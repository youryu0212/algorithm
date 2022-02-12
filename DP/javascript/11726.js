let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let dp = new Array(1001).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;
for (let i = 4 ; i<=n ; i++){
    dp[i] = (dp[i-1] + dp[i-2])%10007;
}
console.log(dp[n]%10007);