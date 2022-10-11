require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((row) => row.split(" ").map(Number))
  .map(([total, day]) => Math.ceil(total / day))
  .forEach((num) => console.log(num));
