const [[M], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const nums = input[0].sort((a, b) => a - b);

const getPossibleCnt = (arr, mid) => {
  let cnt = 0;
  for (const num of arr) {
    cnt += Math.floor(num / mid);
  }
  return cnt;
};

const search = (nums, N) => {
  let [left, right] = [0, nums[nums.length - 1] + 1];

  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    const cnt = getPossibleCnt(nums, mid);
    if (cnt >= N) {
      left = mid;
    } else {
      right = mid;
    }
  }
  return left;
};

const answer = search(nums, M);
console.log(answer);
