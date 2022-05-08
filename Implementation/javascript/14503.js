const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const [r, c, d] = input[1].split(" ").map(Number);
const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const rotateDirectionLeft = (d) => {
  d += 3;
  d %= 4;
  return d;
};

const checkRange = (r, c) => {
  if (r < 0 || c < 0 || r >= n || c >= m) {
    return false;
  }
  return true;
};

const getBehindDirection = (d) => {
  const behind = (d + 2) % 4;
  return behind;
};
const checkBackStepPossible = (d, r, c) => {
  const behind = getBehindDirection(d);
  const [dr, dc] = moves[behind];
  const [nr, nc] = [r + dr, c + dc];
  if (!checkRange(nr, nc)) {
    return false;
  }
  if (arr[nr][nc] === 1) {
    return false;
  }
  return true;
};

const runBackStepPosition = (d, r, c) => {
  const behind = getBehindDirection(d);
  const [dr, dc] = moves[behind];
  const [nr, nc] = [r + dr, c + dc];
  return [nr, nc];
};

const arr = [];
for (let i = 2; i < n + 2; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let answer = 0;
const visited = Array.from(Array(n), () => new Array(m).fill(false));
const stepTwo = (r, c, d) => {
  for (let i = 0; i < 4; i++) {
    d = rotateDirectionLeft(d);
    const [dr, dc] = moves[d];
    const [nr, nc] = [r + dr, c + dc];
    if (checkRange(nr, nc) && arr[nr][nc] === 0 && !visited[nr][nc]) {
      search(nr, nc, d);
      return;
    }
  }
  if (checkBackStepPossible(d, r, c)) {
    const [nr, nc] = runBackStepPosition(d, r, c);
    search(nr, nc, d);
    return;
  }
};

const search = (r, c, d) => {
  if (!visited[r][c]) {
    answer += 1;
  }
  visited[r][c] = true;
  stepTwo(r, c, d);
};
search(r, c, d);
console.log(answer);
