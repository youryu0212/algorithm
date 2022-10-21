console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .slice(1)
    .map((row) => row.split(" "))
    .map(([c, v]) => [Math.floor(c / v), c % v])
    .map(([a, b]) => `You get ${a} piece(s) and your dad gets ${b} piece(s).`)
    .join("\n")
);
