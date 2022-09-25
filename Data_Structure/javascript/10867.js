console.log(
  [
    ...new Set(
      require("fs")
        .readFileSync("/dev/stdin")
        .toString()
        .trim()
        .split("\n")
        .slice(1)[0]
        .split(" ")
        .map(Number)
    ),
  ]
    .sort((a, b) => a - b)
    .join(" ")
);
