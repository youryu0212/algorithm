const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = [];
let result = 10 ** 18 * 9;

for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const search = () => {
  const visited = new Array(n).fill(false);
  const dfs = (cnt, value, prev, firstIdx) => {
    if (value >= result) {
      return;
    }
    if (cnt === n) {
      if (arr[prev][firstIdx] === 0) return;
      result = Math.min(result, value + arr[prev][firstIdx]);
    }
    for (let i = 0; i < n; i++) {
      if (visited[i]) continue;
      if (arr[prev][i] === 0) continue;
      visited[i] = true;
      dfs(cnt + 1, value + arr[prev][i], i, firstIdx);
      visited[i] = false;
    }
  };
  for (let i = 0; i < n; i++) {
    visited[i] = true;
    dfs(1, 0, i, i);
    visited[i] = false;
  }
};
search();
console.log(result);
