const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = Number(input[0]);
const arr = [null];
for (let i = 1; i < T + 1; i++) {
  arr.push([...input[i]]);
}
const k = Number(input[T + 1]);

const rotateCw = (idx) => {
  const target = arr[idx];
  let prev;
  [target[0], prev] = [target[7], target[0]];
  for (let i = 1; i < 8; i++) {
    [target[i], prev] = [prev, target[i]];
  }
};

const rotateCcw = (idx) => {
  const target = arr[idx];
  let prev;
  [target[7], prev] = [target[0], target[7]];
  for (let i = 6; i >= 0; i--) {
    [target[i], prev] = [prev, target[i]];
  }
};
const rotate = (idx, d) => {
  if (d === -1) {
    rotateCcw(idx);
    return;
  }
  rotateCw(idx);
};

const search = () => {
  return arr.reduce((sCnt, num) => {
    if (!num) {
      return sCnt;
    }
    if (num[0] === "1") {
      return sCnt + 1;
    }
    return sCnt;
  }, 0);
};

for (let i = 0; i < k; i++) {
  const [idx, d] = input[T + 2 + i].split(" ").map(Number);
  let [left, right] = [arr[idx][6], arr[idx][2]];
  let ld = (rd = d);
  rotate(idx, d);
  let lIdx = (rIdx = idx);
  while (lIdx !== 1) {
    lIdx--;
    if (arr[lIdx][2] === left) {
      break;
    }
    ld *= -1;
    left = arr[lIdx][6];
    rotate(lIdx, ld);
  }
  while (rIdx !== T) {
    rIdx++;
    if (arr[rIdx][6] === right) {
      break;
    }
    rd *= -1;
    right = arr[rIdx][2];
    rotate(rIdx, rd);
  }
}
console.log(search());
