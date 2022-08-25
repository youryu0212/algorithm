const N = Number(require("fs").readFileSync("/dev/stdin"));

let answer = 0;
let len = 1;
let cnt = 9;
while (10 ** len <= N) {
  answer += cnt * len;
  cnt *= 10;
  len += 1;
}
answer += len * (N - 10 ** (len - 1) + 1);
console.log(answer);
