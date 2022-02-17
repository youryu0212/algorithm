const n = Number(require('fs').readFileSync('/dev/stdin'));

const dp = Array.from(Array(n+1),()=>new Array(2).fill(0));
dp[1][0] = BigInt(0);
dp[1][1] = BigInt(1);

for (let i = 2 ; i <= n ; i++){
  dp[i][0] = dp[i-1][0] + dp[i-1][1];
  dp[i][1] = dp[i-1][0];
}
console.log(String(dp[n].reduce((acc,cur) => acc+cur)));