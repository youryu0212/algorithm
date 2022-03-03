const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

for (let i = 1; i < nums.length; i++) {
  nums[i] += nums[i - 1];
}

console.log(nums.reduce((acc, cur) => acc + cur));
