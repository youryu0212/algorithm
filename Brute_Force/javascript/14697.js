const [A, B, C, N] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const solution = (A, B, C, N) => {
  const arr = new Array(301).fill(0);
  [arr[A], arr[B], arr[C]] = [1, 1, 1];
  for (let i = 0; i <= 300; i++) {
    if (!arr[i]) {
      continue;
    }
    for (const j of [A, B, C]) {
      if (i + j <= 300) {
        arr[i + j] = 1;
      }
    }
  }
  return arr[N];
};

const answer = solution(A, B, C, N);
console.log(answer);
