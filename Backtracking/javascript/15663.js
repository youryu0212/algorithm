const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const solution = () => {
  const answer = [];
  const combinations = (result, visited, len) => {
    if (len === m) {
      answer.push(result);
      return;
    }
    let prev = 0;
    for (let i = 0; i < n; i++) {
      if (visited[i]) {
        continue;
      }
      if (prev === arr[i]) {
        continue;
      }
      prev = arr[i];
      visited[i] = true;
      combinations(result + " " + arr[i], visited, len + 1);
      visited[i] = false;
    }
  };

  let prev = 0;
  for (let i = 0; i < n; i++) {
    if (prev === arr[i]) {
      continue;
    }
    prev = arr[i];
    const visited = new Array(n).fill(false);
    visited[i] = true;
    combinations("" + arr[i], visited, 1);
    visited[i] = false;
  }
  return [...answer].sort((a, b) => a - b);
};
const result = solution().join("\n");
console.log(result);
