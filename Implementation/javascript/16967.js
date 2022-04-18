const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [h, w, x, y] = input[0].split(" ").map(Number);
const arr = [];
for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const a = Array.from(Array(h), () => new Array(w).fill(0));

for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    if (i < x || j < y) {
      a[i][j] = arr[i][j];
      continue;
    }
    a[i][j] = arr[i][j] - a[i - x][j - y];
  }
}

const result = a.reduce((result, row) => {
  return result + row.join(" ") + "\n";
}, "");
console.log(result);
