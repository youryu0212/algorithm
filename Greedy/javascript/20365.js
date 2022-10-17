const colors = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[1]
  .split("");
const cnt = [0, 0];
let lastColor = "";

for (const color of colors) {
  if (lastColor === color) {
    continue;
  }
  color === "B" ? cnt[0]++ : cnt[1]++;
  lastColor = color;
}
console.log(Math.min(...cnt) + 1);
