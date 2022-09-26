console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map(
      (row) =>
        row
          .split(" ")
          .map(Number)
          .sort((a, b) => b - a)[2]
    )
    .join("\n")
);
