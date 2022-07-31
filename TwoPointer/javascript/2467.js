const [_, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const search = (arr) => {
  const answer = [0, 0];
  let [left, right] = [0, arr.length - 1];
  let diff = Infinity;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (diff > Math.abs(sum)) {
      diff = Math.abs(sum);
      answer[0] = arr[left];
      answer[1] = arr[right];
    }
    if (sum === 0) {
      break;
    }
    if (sum > 0) {
      right -= 1;
      continue;
    }
    if (sum < 0) {
      left += 1;
    }
  }
  return answer.join(" ");
};

const answer = search(arr);
console.log(answer);
