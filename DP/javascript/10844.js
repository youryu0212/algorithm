const n = Number(require('fs').readFileSync('/dev/stdin'));
const dp = Array.from(Array(n+1),() => new Array(10).fill(0) );

for (let i = 1 ; i<=9 ;i++){
    dp[1][i] = 1;
}
for (let i = 2 ; i<=n ; i++){
    dp[i][0] = dp[i-1][1];
    dp[i][9] = dp[i-1][8];
    for (let j = 1 ; j<=8 ; j++){
        dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1])%1000000000;
    }
}
console.log(dp[n].reduce((acc,cur)=>(acc+cur)%1000000000));