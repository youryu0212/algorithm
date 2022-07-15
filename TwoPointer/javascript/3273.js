const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, x] = [Number(input[0]), Number(input[2])];
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const search = (n, nums, x) => {
  let [left, right] = [0, n - 1];
  let cnt = 0;
  let total = nums[left] + nums[right];
  while (left < right) {
    total = nums[left] + nums[right];
    if (total === x) {
      cnt++;
      left++;
      right--;
      continue;
    }
    total < x ? left++ : right--;
  }
  return cnt;
};

const answer = search(n, nums, x);
console.log(answer);
