const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1);
arr.pop();

const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const visited = new Array(26);
const toAsc = (a) => {
  return a.charCodeAt() - "A".charCodeAt();
};
let answer = 0;
const search = (r, c, cnt) => {
  if (cnt > answer) {
    answer = cnt;
  }
  for (move of moves) {
    let [nx, ny] = [r + move[0], c + move[1]];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (visited[toAsc(arr[nx][ny])]) continue;
    visited[toAsc(arr[nx][ny])] = true;
    search(nx, ny, cnt + 1);
    visited[toAsc(arr[nx][ny])] = false;
  }
};
visited[toAsc(arr[0][0])] = true;
search(0, 0, 1);
console.log(answer);
