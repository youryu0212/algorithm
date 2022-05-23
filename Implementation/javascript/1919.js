const [a, b] = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const aCount = new Array(26).fill(0);
const bCount = new Array(26).fill(0);

[...a].forEach((char) => {
  aCount[char.charCodeAt(0) - 97]++;
});

[...b].forEach((char) => {
  bCount[char.charCodeAt(0) - 97]++;
});

const answer = aCount.reduce((answer, count, idx) => {
  return answer + Math.abs(bCount[idx] - count);
}, 0);

console.log(answer);
