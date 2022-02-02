const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let dp = [];
for (let i = 0 ; i<41 ; i++){
  dp.push([]);
}

const fib = (n) => {
  if (dp[n].length!==0) return dp[n];
  if (n === 0) dp[0] = [1,0];
  else if (n === 1) dp[1] = [0,1];
  else{
    if(dp[n-1].length===0) dp[n-1] = fib(n-1);
    if(dp[n-2].length===0) dp[n-2] = fib(n-2);
    dp[n][0] = dp[n-1][0] + dp[n-2][0];
    dp[n][1] = dp[n-1][1] + dp[n-2][1];
  }
  return dp[n]
}

for (let i=1 ; i<input.length-1 ; i++){
  console.log(fib(Number(input[i])).join(" "));
}