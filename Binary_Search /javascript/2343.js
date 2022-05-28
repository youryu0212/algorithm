const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);

const calculateAcc = (acc, cur, idx) => {
  acc.push(cur + (acc[idx - 1] || 0));
  return acc;
};

const acc = nums.reduce(calculateAcc, []);
let answer = Infinity;

const binarySearch = (left, right) => {
  if (left > right) {
    return;
  }
  const half = left + Math.floor((right - left) / 2);
  let cnt = 1;
  let lastNum = 0;
  for (let i = 0; i < acc.length; i++) {
    if (half < acc[i] - lastNum) {
      cnt++;
      lastNum = acc[i - 1] || 0;
    }
  }

  if (cnt <= M) {
    answer = Math.min(answer, half);
    return binarySearch(left, half - 1);
  }
  binarySearch(half + 1, right);
};

const left = Math.max(...nums);

binarySearch(left, acc[acc.length - 1]);
console.log(answer);
