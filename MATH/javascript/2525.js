const [[h, m], [cost]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const solution = (h, m, cost) => {
  const ch = Math.floor(cost / 60);
  const cm = cost - ch * 60;
  const nh = (h + ch) % 24;
  const nm = m + cm;
  return nm >= 60 ? [(nh + 1) % 24, nm - 60] : [nh, nm];
};

const answer = solution(h, m, cost);
console.log(answer.join(" "));
