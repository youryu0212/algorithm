console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .split("\n")[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
    .join(" ")
);
