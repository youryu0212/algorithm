const n = Number(require('fs').readFileSync('/dev/stdin'));

const dp = Array.from(Array(n+1),()=>new Array(10).fill(0));
for (let i = 0 ; i<10 ; i++) dp[1][i] = 1;
for (let i = 2 ; i<=n ; i++){
  for (let j = 0 ; j<10 ; j++){
    for (let k = 0 ; k<=j ; k++){
      dp[i][j] += dp[i-1][k]
      dp[i][j] %= 10007
    }
  }
}
console.log(dp[n].reduce((acc,cur)=>(acc+cur)%10007,0));