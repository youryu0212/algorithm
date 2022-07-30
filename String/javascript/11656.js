const S = require("fs").readFileSync("/dev/stdin").toString().trim();

const answer = Array(S.length)
  .fill(0)
  .map((_, idx) => S.slice(idx))
  .sort()
  .join("\n");
console.log(answer);
