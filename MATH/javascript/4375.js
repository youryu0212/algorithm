const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
const arr = input.slice(0, input.length - 1);

const solution = (n) => {
  let num = 1;
  let cnt = 1;
  while (num % n !== 0) {
    num = num * 10 + 1;
    num %= n;
    cnt++;
  }
  return cnt;
};
result = arr.map(solution).join("\n");
console.log(result);
