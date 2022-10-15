const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];

for (let i = Math.ceil(Math.sqrt(a)); i <= Math.floor(Math.sqrt(b)); i++) {
  answer.push(i * i);
}

console.log(
  answer.length
    ? [answer.reduce((sum, cur) => sum + cur), answer[0]].join("\n")
    : -1
);
