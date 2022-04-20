const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const generate = () => {
  const answer = [];
  const combinations = (result, idx, len) => {
    if (len === m) {
      answer.push(result);
      return;
    }
    for (let i = idx; i < n; i++) {
      combinations(result + arr[i] + " ", i, len + 1);
    }
  };
  combinations("", 0, 0);
  return answer.join("\n");
};

const result = generate();
console.log(result);
