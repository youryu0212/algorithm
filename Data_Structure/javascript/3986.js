const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").slice(1);

const answer = input
  .map((word) => {
    const stack = [];
    for (const char of word) {
      if (!stack.length) {
        stack.push(char);
        continue;
      }
      if (stack[stack.length - 1] === char) {
        stack.pop();
        continue;
      }
      stack.push(char);
    }
    return stack.length ? 0 : 1;
  })
  .reduce((answer, num) => answer + num);

console.log(answer);
