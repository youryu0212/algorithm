let [n, m, k] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0]
  .split(" ")
  .map(Number);

while (k > 0) {
  if (n > 2 * m) {
    n--;
    k--;
    continue;
  }
  m--;
  k--;
}
console.log(Math.min(Math.floor(n / 2), m));
