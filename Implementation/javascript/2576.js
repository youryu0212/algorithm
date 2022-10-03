const answer = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .filter((num) => num % 2)
  .reduce(
    (answer, num) => [answer[0] + num, Math.min(answer[1], num)],
    [0, Infinity]
  );

console.log(answer[0] ? answer.join("\n") : -1);
