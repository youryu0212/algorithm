console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((row) =>
      row
        .split(" ")
        .reduce((num, cur) =>
          cur === "@" ? num * 3 : cur === "%" ? num + 5 : num - 7
        )
        .toFixed(2)
    )
    .join("\n")
);
