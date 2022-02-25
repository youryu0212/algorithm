const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, k] = input[0].split(" ").map(Number);
let coins = [];
let dp = new Array(k + 1);
let num,
  idx = 0;
let queue = [];
for (let i = 1; i < input.length - 1; i++) {
  num = Number(input[i]);
  if (num > k) continue;
  coins.push(num);
  dp[num] = 1;
  queue.push(num);
}

if (queue.length > 0) {
  while (queue.length > idx) {
    num = queue[idx++];
    for (coin of coins) {
      if (coin + num > k) continue;
      if (dp[coin + num] !== undefined) continue;
      dp[coin + num] = dp[num] + 1;
      if (coin + num === k) break;
      queue.push(coin + num);
    }
    if (coin + num === k) break;
  }
}
if (dp[k] === undefined) dp[k] = -1;
console.log(dp[k]);
