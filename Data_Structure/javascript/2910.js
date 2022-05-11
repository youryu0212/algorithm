const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, c] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const dict = arr.reduce((dict, num) => {
  dict.has(num) ? dict.set(num, dict.get(num) + 1) : dict.set(num, 1);
  return dict;
}, new Map());

const sortedDict = [...dict.entries()].sort((a, b) => b[1] - a[1]);
const test = sortedDict
  .map((arr) => {
    const [num, cnt] = arr;
    return new Array(cnt)
      .fill(1)
      .map(() => num)
      .join(" ");
  })
  .join(" ");
console.log(test);
