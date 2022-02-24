const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);
const dp = nums.reduce((acc,cur)=>{
  acc.push(cur);
  return acc;
},[]);
for (let i = 1 ; i<n ; i++){
  for (let j = 0 ; j<i ; j++){
    if (nums[i] <= nums[j]) continue;
    dp[i] = Math.max(dp[i],dp[j]+nums[i]);
  }
}
console.log(Math.max(...dp))