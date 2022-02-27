const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = input.slice(1, input.length - 1).reduce((acc, cur) => {
  acc.push(cur);
  return acc;
}, []);

const search = (x, y, n) => {
  const info = arr[x][y];
  let flag = false;
  let result = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[x + i][y + j] !== info) {
        flag = true;
        break;
      }
    }
    if (flag) {
      break;
    }
  }
  if (flag) {
    const next = n / 2;
    result += "(" + search(x, y, next);
    result += search(x, y + next, next);
    result += search(x + next, y, next);
    result += search(x + next, y + next, next) + ")";
  } else {
    return info;
  }
  return result;
};
console.log(search(0, 0, n));
