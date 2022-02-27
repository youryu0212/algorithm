const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);
const dp = new Array(n).fill(1);

for (let i = 0 ; i<nums.length-1 ; i++){
  for (let j = i+1 ; j<nums.length ; j++){
    if (nums[i]>nums[j]) dp[j] = Math.max(dp[j],dp[i]+1);
  }
}
console.log(Math.max(...dp));