const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const graph = Array.from(Array(n), () => []);
let path;
for (let i = 1; i <= n; i++) {
  path = input[i].split(" ").map(Number);
  path.forEach((cur, idx) => {
    if (cur === 1) {
      graph[i - 1].push(idx);
    }
  });
}

const result = Array.from(Array(n), () => new Array(n).fill(0));

const check = (i, node) => {
  if (result[i][node]) return;
  result[i][node] = 1;
  for (let nextNode of graph[node]) {
    if (result[i][nextNode] === 1) continue;
    check(i, nextNode);
  }
};
for (let i = 0; i < n; i++) {
  for (let node of graph[i]) {
    check(i, node);
  }
}
console.log(result.reduce((s, cur) => s + cur.join(" ") + "\n", ""));
