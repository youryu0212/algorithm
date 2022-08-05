const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, _] = input[0].split(" ").map(Number);
const titleArr = input.slice(1, n + 1).map((row) => row.split(" "));
const targetArr = input.slice(n + 1).map(Number);

const search = (arr, num) => {
  let [left, right] = [-1, arr.length - 1];
  while (left + 1 < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid][1] >= num) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return arr[right][0];
};

const solution = (titleArr, targetArr) => {
  const answer = [];

  for (const num of targetArr) {
    answer.push(search(titleArr, num));
  }
  return answer.join("\n");
};

const answer = solution(titleArr, targetArr);

console.log(answer);
