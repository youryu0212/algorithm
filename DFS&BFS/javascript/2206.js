const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const arr = [];

for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split("").map(Number));
}

const bfs = () => {
  const q = [];
  let idx = 0;
  q.push([0, 0, 1, false]);
  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const checkRange = (r, c) => {
    if (r < 0 || c < 0 || r >= n || c >= m) {
      return false;
    }
    return true;
  };

  const trueVisited = Array.from(Array(n), () => new Array(m).fill(false));
  const falseVisited = Array.from(Array(n), () => new Array(m).fill(false));

  while (q.length > idx) {
    let [r, c, cnt, isBreak] = q[idx++];
    if (r === n - 1 && c === m - 1) {
      return cnt;
    }
    for (let [dr, dc] of moves) {
      let [nr, nc] = [r + dr, c + dc];
      if (!checkRange(nr, nc)) {
        continue;
      }
      if (isBreak && trueVisited[nr][nc]) {
        continue;
      }
      if (!isBreak && falseVisited[nr][nc]) {
        continue;
      }
      if (isBreak && arr[nr][nc] === 1) {
        continue;
      }
      if (arr[nr][nc] === 1) {
        trueVisited[nr][nc] = true;
        q.push([nr, nc, cnt + 1, true]);
        continue;
      }
      if (isBreak) {
        trueVisited[nr][nc] = true;
      } else {
        falseVisited[nr][nc] = true;
      }
      q.push([nr, nc, cnt + 1, isBreak]);
    }
  }
  return -1;
};

const result = bfs();
console.log(result);
