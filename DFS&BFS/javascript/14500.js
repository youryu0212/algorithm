const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}
let maxNum = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    maxNum = Math.max(maxNum, arr[i][j]);
  }
}

const visited = Array.from(Array(n), () => new Array(m).fill(false));
const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
let answer = 0;

const dfs = (r, c, cnt, point) => {
  if (point + (4 - cnt) * maxNum < answer) {
    return;
  }
  if (cnt === 4) {
    answer = Math.max(answer, point);
    return;
  }
  let nr, nc;
  for (let i = 0; i < moves.length; i++) {
    [nr, nc] = [moves[i][0] + r, moves[i][1] + c];
    if (nr < 0 || nc < 0 || nr > n || nc >= m) continue;
    if (visited[nr][nc]) continue;
    if (cnt === 3) {
      visited[nr][nc] = true;
      dfs(r, c, cnt + 1, point + arr[nr][nc]);
      visited[nr][nc] = false;
    }
    visited[nr][nc] = true;
    dfs(nr, nc, cnt + 1, point + arr[nr][nc]);
    visited[nr][nc] = false;
  }
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = true;
    dfs(i, j, 1, arr[i][j]);
    visited[i][j] = false;
  }
}

console.log(answer);
