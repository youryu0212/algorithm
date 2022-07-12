const [_, A, B] = require("fs").readFileSync("/dev/stdin").toString().split(" ");

const search = (a, b) => {
  let cnt = 1;
  while (Math.abs(a - b) !== 1 || Math.max(a, b) % 2) {
    cnt++;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  return cnt;
};

const answer = search(A, B);
console.log(answer);
