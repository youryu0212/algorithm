const [n, k] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

const getNumPosition = (num) => {
  let position = 0;
  let digit = 1;
  for (let left = 1; left <= num; left *= 10, digit++) {
    let right = left * 10 - 1;
    if (num < right) {
      right = num;
    }
    position += (right - left + 1) * digit;
  }

  return [position, digit - 1];
};

const solution = (n, k) => {
  let answerNum = 0;

  const binarySearch = (left, right, target) => {
    if (left > right) return;
    const mid = left + Math.floor((right - left) / 2);
    const [num, _] = getNumPosition(mid);

    if (num >= target) {
      answerNum = mid;
      binarySearch(left, mid - 1, target);
    } else {
      binarySearch(mid + 1, right, target);
    }
  };

  if (getNumPosition(n)[0] < k) {
    return -1;
  }

  binarySearch(0, n, k);
  const [pos, digit] = getNumPosition(answerNum);
  const answer = String(answerNum)[k - pos + digit - 1];
  return answer;
};

const answer = solution(n, k);
console.log(String(answer));
