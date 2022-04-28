const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const generate = () => {
  const answer = [];
  const combinations = (result, idx, depth, lastIdxNum) => {
    if (depth === m) {
      answer.push(result);
      return;
    }
    for (let i = idx; i < n; i++) {
      if (lastIdxNum === arr[i] && i !== idx) {
        continue;
      }
      if (i >= 1 && arr[i] === arr[i - 1]) {
        continue;
      }
      combinations(result + " " + arr[i], i, depth + 1, arr[i]);
    }
  };
  for (let i = 0; i < n; i++) {
    if (i >= 1 && arr[i] === arr[i - 1]) {
      continue;
    }
    combinations(String(arr[i]), i, 1, arr[i]);
  }
  return answer.join("\n");
};
const answer = generate();
console.log(answer);
