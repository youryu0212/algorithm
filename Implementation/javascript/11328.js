const [...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((input) => input.split(" "))
  .slice(1, -1);

const answer = arr
  .map((s) => [...s[0]].sort().join("") === [...s[1]].sort().join(""))
  .map((bool) => (bool ? "Possible" : "Impossible"))
  .join("\n");

console.log(answer);
