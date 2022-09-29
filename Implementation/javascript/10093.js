const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const big = b - a > 0 ? b : a;
const small = b - a > 0 ? a : b;

if (big <= small + BigInt(1)) {
  console.log(0);
} else {
  console.log(Number(big - small - BigInt(1)));
  const answer = [];
  for (let i = small + BigInt(1); i < big; i += BigInt(1)) {
    answer.push(i);
  }
  console.log(answer.join(" "));
}
