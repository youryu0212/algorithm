const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = [];
input.slice(1, input.length - 1).forEach((a) => {
  arr.push(a.split(" ").map(Number));
});

const result = [0, 0, 0];

const check = (x, y, n) => {
  const NUM = arr[x][y];
  let flag = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[x + i][y + j] !== NUM) {
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  if (flag) {
    const next = n / 3;
    check(x, y, n / 3);
    check(x, y + next, n / 3);
    check(x, y + next * 2, n / 3);
    check(x + next, y, n / 3);
    check(x + next, y + next, n / 3);
    check(x + next, y + next * 2, n / 3);
    check(x + next * 2, y, n / 3);
    check(x + next * 2, y + next, n / 3);
    check(x + next * 2, y + next * 2, n / 3);
  } else {
    result[NUM + 1] += 1;
  }
};
check(0, 0, n);
console.log(result.join("\n"));
