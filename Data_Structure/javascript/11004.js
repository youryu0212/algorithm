const [[K, _], arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) =>
    row
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  );

console.log(arr[K - 1]);
