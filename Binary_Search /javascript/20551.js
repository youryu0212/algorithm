const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const B = input
  .slice(1, N + 1)
  .map(Number)
  .sort((a, b) => a - b);
const questionArr = input.slice(N + 1).map(Number);

const binarySearch = (arr, target) => {
  let [left, right] = [-1, arr.length - 1];
  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return arr[right] === target ? right : -1;
};

const answer = questionArr
  .map((questionNum) => binarySearch(B, questionNum))
  .join("\n");

console.log(answer);
