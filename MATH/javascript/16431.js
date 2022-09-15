const [[br, bc], [dr, dc], [jr, jc]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const getAbsDiff = (a, b) => Math.abs(a - b);

const b = Math.max(getAbsDiff(br, jr), getAbsDiff(bc, jc));
const d = getAbsDiff(dr, jr) + getAbsDiff(dc, jc);
const answer = b < d ? "bessie" : b === d ? "tie" : "daisy";

console.log(answer);
