const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [n, k] = input[0].split(" ").map(Number);
const coins = input
  .slice(1, input.length - 1)
  .map(Number)
  .sort((a, b) => b - a);
let cnt = 0;
for (coin of coins) {
  if (k === 0) break;
  if (coin > k) continue;
  cnt += Math.floor(k / coin);
  k %= coin;
}

console.log(cnt);
