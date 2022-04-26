const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// 몇개로 가야하나??? 옆으로 쭉 돌면서
// 위,아래꺼랑 바꿔보고, 자기행 연속으로 쭉 계산
// 좌,우랑 바꿔보고, 자기 열 (세로) 연속으로 쭉 계산
const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(""));
}
const moves = [
  [1, 0],
  [0, -1],
  [-1, 0],
  [0, 1],
];
const rangeCheck = (r, c) => {
  if (r < 0 || c < 0 || r >= n || c >= n) {
    return false;
  }
  return true;
};
const handle = (move, idx, r, c) => {
  let [nr, nc] = [r + move[0], c + move[1]];
  let maxCnt = 0;
  if (!rangeCheck(nr, nc)) {
    return 0;
  }
  maxCnt = Math.max(maxCnt, rowCheck(r));
  maxCnt = Math.max(maxCnt, colCheck(c));
  swap(r, c, nr, nc);
  maxCnt = Math.max(maxCnt, rowCheck(r));
  maxCnt = Math.max(maxCnt, colCheck(c));
  swap(r, c, nr, nc);
  return maxCnt;
};

const swap = (r, c, nr, nc) => {
  [arr[r][c], arr[nr][nc]] = [arr[nr][nc], arr[r][c]];
};
const rowCheck = (r) => {
  const row = arr[r];
  let prev = row[0];
  let cnt = 1;
  let maxCnt = 1;
  for (let i = 1; i < n; i++) {
    if (row[i] === prev) {
      cnt++;
    }
    maxCnt = Math.max(maxCnt, cnt);
    if (row[i] !== prev) {
      cnt = 1;
      prev = row[i];
    }
  }
  return maxCnt;
};

const colCheck = (c) => {
  let prev = arr[0][c];
  let cnt = 1;
  let maxCnt = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i][c] === prev) {
      cnt++;
    }
    maxCnt = Math.max(maxCnt, cnt);
    if (arr[i][c] !== prev) {
      cnt = 1;
      prev = arr[i][c];
    }
  }
  return maxCnt;
};

const search = (r, c) => {
  let move;
  let maxCnt = 0;
  for (let i = 0; i < moves.length; i++) {
    move = moves[i];
    maxCnt = Math.max(maxCnt, handle(move, i, r, c));
  }
  return maxCnt;
};

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    answer = Math.max(answer, search(i, j));
  }
}

console.log(answer);
