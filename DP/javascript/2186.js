const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, m, k] = input[0].split(" ").map(Number);
const arr = Array.from(Array(n), () => new Array(m));
for (let i = 1; i < input.length - 2; i++) {
  for (let j = 0; j < input[i].length; j++) {
    arr[i - 1][j] = input[i][j];
  }
}
const word = input[input.length - 2];
const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const stack = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (arr[i][j] === word[0]) {
      stack.push([i, j]);
    }
  }
}

const dfs = (r, c, depth) => {
  if (depth === word.length) {
    return 1;
  }
  if (visited[r][c][depth] || visited[r][c][depth] === 0) {
    return visited[r][c][depth];
  }
  visited[r][c][depth] = 0;
  for (let move of moves) {
    let [x, y] = [r, c];
    for (let i = 0; i < k; i++) {
      let [nx, ny] = [x + move[0], y + move[1]];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
        continue;
      }
      if (arr[nx][ny] === word[depth]) {
        visited[r][c][depth] += dfs(nx, ny, depth + 1);
      }
      [x, y] = [nx, ny];
    }
  }
  return visited[r][c][depth];
};
const visited = Array.from(Array(n), () => Array.from(Array(m), () => new Array(word.length)));

let result = 0;
while (stack.length > 0) {
  let [r, c] = stack.pop();
  result += dfs(r, c, 1);
}
console.log(result);
