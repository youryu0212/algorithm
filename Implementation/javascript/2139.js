const MONTH_ARR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const solution = ([d, m, y]) => {
  let Y = false;
  let date = 0;
  if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
    Y = true;
  }

  for (let i = 0; i < m; i++) {
    date += Y && i === 1 ? 29 : MONTH_ARR[i];
  }

  date -= Y && m === 2 ? 29 - d : MONTH_ARR[m - 1] - d;
  return date;
};

const answer = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1)
  .map((row) => solution(row.split(" ").map(Number)))
  .join("\n");

console.log(answer);
