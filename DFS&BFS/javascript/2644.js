const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const [start, end] = input[1].split(" ").map(Number);
const m = Number(input[2]);

const arr = Array.from(Array(n + 1), () => []);
let a, b;
for (let i = 3; i < m + 3; i++) {
  [a, b] = input[i].split(" ").map(Number);
  arr[a].push(b);
  arr[b].push(a);
}
const visited = new Array(n + 1).fill(false);
let result = Infinity;
const dfs = (node, depth) => {
  if (end === node) {
    result = Math.min(depth, result);
    return depth;
  }
  arr[node].forEach((nextNode) => {
    if (visited[nextNode]) {
      return;
    }
    visited[nextNode] = true;
    dfs(nextNode, depth + 1);
    visited[nextNode] = false;
  });
};
visited[start] = true;
dfs(start, 0);
console.log(result < Infinity ? result : -1);
