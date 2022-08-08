const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const [r, c] = input[n + 1].split(" ").map(Number);

const a = [];
const b = [];

for (let i = 1; i <= n; i++) {
  a.push(input[i].split(" ").map(Number));
}

for (let i = n + 2; i < n + r + 2; i++) {
  b.push(input[i].split(" ").map(Number));
}

const answer = Array.from(Array(n), () => new Array(c).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < c; j++) {
    for (let k = 0; k < m; k++) {
      answer[i][j] += a[i][k] * b[k][j];
    }
  }
}

console.log(answer.map((row) => row.join(" ")).join("\n"));
