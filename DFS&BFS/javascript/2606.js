const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = Array.from(Array(n + 1), () => []);
const visited = new Array(n + 1);
for (let i = 2; i < input.length - 1; i++) {
  input[i] = input[i].split(" ");
  arr[Number(input[i][0])].push(Number(input[i][1]));
  arr[Number(input[i][1])].push(Number(input[i][0]));
}
let cnt = -1;
const dfs = (i) => {
  visited[i] = true;
  cnt++;
  arr[i].forEach((node) => {
    if (visited[node]) return;
    visited[node] = true;
    dfs(node);
  });
};

dfs(1);
console.log(cnt);
