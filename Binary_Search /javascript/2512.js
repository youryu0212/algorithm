const checkMoney = (arr, mid, totalMoney) => {
  return totalMoney >= arr.reduce((total, money) => total + Math.min(money, mid), 0);
};

const solution = () => {
  const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

  const arr = input[1].split(" ").map(Number);
  const totalMoney = Number(input[2]);
  const maxMoney = Math.max(...arr);
  let [left, right] = [0, maxMoney + 1];
  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    checkMoney(arr, mid, totalMoney) ? (left = mid) : (right = mid);
  }
  return left;
};

const answer = solution();
console.log(answer);
