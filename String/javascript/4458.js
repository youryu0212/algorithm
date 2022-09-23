console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map(([a, ...row]) => [a.toUpperCase(), ...row].join(""))
    .join("\n")
);
