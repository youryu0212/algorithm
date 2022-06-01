const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const search = (arr, n) => {
  let minSum = Infinity;

  const generateSum = (answer, num, idx) => {
    let [left, right] = [idx + 1, n - 1];
    if (minSum === 0) {
      return answer;
    }
    while (left < right) {
      const total = num + arr[left] + arr[right];
      if (Math.abs(minSum) > Math.abs(total)) {
        answer = [num, arr[left], arr[right]];
        minSum = total;
      }
      if (total < 0) {
        left += 1;
      }
      if (total > 0) {
        right -= 1;
      }
      if (total === 0) {
        return answer;
      }
    }
    return answer;
  };

  return arr.reduce(generateSum, [0, 0, 0]).join(" ");
};

const answer = search(arr, n);
console.log(answer);
