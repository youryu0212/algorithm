const [[N, M], ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const [S, X, Y] = arr.pop();

const checkRange = (r, c) => {
  if (r < 0 || c < 0 || r >= N || c >= M) {
    return false;
  }
  return true;
};

const search = (arr, X, Y) => {
  const q = [];
  let qIdx = 0;
  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  arr.forEach((row, rIdx) => {
    row.forEach((value, cIdx) => {
      if (value) {
        q.push([value, rIdx, cIdx, 0]);
      }
    });
  });
  q.sort((a, b) => a[0] - b[0]);

  while (q.length > qIdx) {
    const [value, r, c, sec] = q[qIdx++];
    if (sec === S) {
      return arr[X][Y];
    }
    for (const [dr, dc] of moves) {
      const [nr, nc] = [r + dr, c + dc];
      if (!checkRange(nr, nc)) {
        continue;
      }
      if (arr[nr][nc]) {
        continue;
      }
      arr[nr][nc] = value;
      q.push([value, nr, nc, sec + 1]);
    }
  }
  return arr[X][Y];
};

const answer = search(arr, X - 1, Y - 1);

console.log(answer);
