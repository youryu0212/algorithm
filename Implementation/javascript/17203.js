const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, Q] = input[0].split(" ").map(Number);
const song = input[1].split(" ").map(Number);

const arr = input.slice(2).map((row) => row.split(" ").map(Number));
const sumArr = [...song];

song.forEach((num, idx) => {
  if (idx === 0) {
    sumArr[idx] = 0;
    return;
  }
  sumArr[idx] = Math.abs(num - song[idx - 1]) + sumArr[idx - 1];
});

const solution = (i, j) => {
  if (j - 1 < i) {
    return 0;
  }
  return sumArr[j - 1] - sumArr[i - 1];
};
const answer = arr.map(([i, j]) => solution(i, j)).join("\n");
console.log(answer);
