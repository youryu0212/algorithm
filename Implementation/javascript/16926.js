const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, m, r] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const solution = (n, m, r) => {
  const cnt = ~~(Math.min(n, m) / 2);
  const rotate = (i) => {
    let prev = arr[i][i];
    for (let j = i + 1; j < n - i; j++) {
      [arr[j][i], prev] = [prev, arr[j][i]];
    }
    for (let j = i + 1; j < m - i; j++) {
      [arr[n - 1 - i][j], prev] = [prev, arr[n - 1 - i][j]];
    }
    for (let j = i + 1; j < n - i; j++) {
      [arr[n - 1 - j][m - 1 - i], prev] = [prev, arr[n - 1 - j][m - 1 - i]];
    }
    for (let j = i + 1; j < m - i; j++) {
      [arr[i][m - 1 - j], prev] = [prev, arr[i][m - 1 - j]];
    }
  };
  for (let i = 0; i < cnt; i++) {
    let rotateCnt = new Array(r % ((n - i * 2) * 2 + (m - i * 2) * 2 - 4)).fill(0);
    rotateCnt.forEach(() => {
      rotate(i);
    });
  }
};
solution(n, m, r);
const answer = arr.reduce((acc, cur) => {
  return acc + cur.reduce((row, num) => row + num + " ", "") + "\n";
}, "");
console.log(answer);
