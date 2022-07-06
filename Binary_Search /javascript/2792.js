const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const arr = input.slice(1, -1).map(Number);

const getHeadCount = (type, arr, num) => {
  if (type === "min") {
    return arr.reduce((answer, jewel) => answer + Math.ceil(jewel / num), 0);
  } else {
    return arr.reduce(
      (answer, jewel) => {
        if (!answer.maxFlag && jewel >= num) {
          answer.cnt += 1 + (jewel - num);
          answer.maxFlag = true;
        } else {
          answer.cnt += jewel;
        }
        return answer;
      },
      { cnt: 0, maxFlag: false }
    ).cnt;
  }
};

const binarySearch = (n, arr) => {
  let [left, right] = [0, Math.max(...arr)];
  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    const min_ = getHeadCount("min", arr, mid);
    const max_ = getHeadCount("max", arr, mid);
    if (min_ <= n && max_ >= n) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return right;
};

const answer = binarySearch(n, arr);
console.log(answer);
