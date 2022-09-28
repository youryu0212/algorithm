console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("-")
    .map((word) => word[0])
    .join("")
);
