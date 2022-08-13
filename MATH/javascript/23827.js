const [, arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const totalArr = arr.map((num) => BigInt(num));

for (const idx of arr.keys()) {
  totalArr[idx] += totalArr[idx - 1] || BigInt(0);
}
const total = totalArr[arr.length - 1];
const answer = String(
  arr.map((num, idx) => BigInt(num) * (total - totalArr[idx])).reduce((sum, num) => sum + num) %
    BigInt(1000000007)
);
console.log(answer);
