const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const getCount = (targetNum, num) => {
  let cnt = 0;
  while (targetNum > 0) {
    targetNum = Math.floor(targetNum / num);
    cnt += targetNum;
  }
  return cnt;
};

const twoExpoCnt = getCount(n, 2) - getCount(n - m, 2) - getCount(m, 2);
const fiveExpoCnt = getCount(n, 5) - getCount(n - m, 5) - getCount(m, 5);

console.log(Math.min(twoExpoCnt, fiveExpoCnt));
