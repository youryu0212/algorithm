// 노드js는 메모리초과, 파이썬 풀이는 정답판정

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let flag = false;
const makeString = (arr) => {
  str = "";
  for (let i = 0; i < 3; i++) {
    str += arr[i].join("");
  }
  return str;
};
const moves = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const q = [];
let idx = 0;
let answer = -1;
const visited = new Set();
let s = makeString(arr);
visited.add(s);
if (s !== "123456780") {
  q.push([arr, 0]);
}

const rangeCheck = (r, c) => {
  if (r < 0 || c < 0 || r >= 3 || c >= 3) return false;
  return true;
};
const check = (arr, cnt, r, c) => {
  for (let move of moves) {
    let [nr, nc] = [r + move[0], c + move[1]];
    if (rangeCheck(nr, nc)) {
      const newArr = [[], [], []];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          newArr[i].push(arr[i][j]);
        }
      }
      [newArr[r][c], newArr[nr][nc]] = [newArr[nr][nc], newArr[r][c]];
      const s = makeString(newArr);
      if (s === "123456780") {
        flag = true;
        answer = cnt + 1;
        return true;
      }
      if (visited.has(s)) {
        continue;
      }
      visited.add(s);
      q.push([newArr, cnt + 1]);
    }
  }
};

while (q.length > idx) {
  [newArr, cnt] = q[idx++];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (newArr[i][j] === 0) {
        check(newArr, cnt, i, j);
      }
    }
    if (flag) {
      break;
    }
  }
  if (flag) {
    break;
  }
}
console.log(answer);
