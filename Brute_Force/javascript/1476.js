const [E, S, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
let year = S;
while (true) {
  if (
    (year % 15 || 15) === E &&
    (year % 28 || 28) === S &&
    (year % 19 || 19) === M
  ) {
    break;
  }
  year += 28;
}
console.log(year);
