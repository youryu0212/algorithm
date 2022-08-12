const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input.slice(1).map((row) => row.split(" ").map(Number));

const search = (a, b, c) => {
  const x = a - c;
  if (x < 0) {
    return "No";
  }
  if ((b * 2 + x) % 2) {
    return "No";
  }
  if (x % 2) {
    return "No";
  }
  if (a === 0 && b % 2 && c === 0) {
    return "No";
  }
  return "Yes";
};

const answer = arr.map(([a, b, c]) => search(a, b, c)).join("\n");
console.log(answer);
