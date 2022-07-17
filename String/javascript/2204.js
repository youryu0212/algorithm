const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(0, -1);

const result = [];
for (let i = 0; i < input.length; i += 1) {
  let j = Number(input[i]);
  answer = [];

  while (j-- > 0) {
    answer.push(input[++i]);
  }
  const upperCase = answer.map((s) => s.toUpperCase());
  const s = [...upperCase].sort()[0];
  result.push(answer[upperCase.indexOf(s)]);
}

console.log(result.join("\n"));
