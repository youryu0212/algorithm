const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

const search = (n, m) => {
  if (n === 1) return 1;
  if (n === 2) return Math.min(4, Math.floor((m + 1) / 2));
  if (m > 6) return m - 2;
  return Math.min(4, m);
};

console.log(search(n, m));
