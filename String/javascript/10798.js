const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (arr) => {
  const maxLength = arr.reduce((maxLength, row) => Math.max(maxLength, row.length), 0);
  let idx = 0;
  const answer = [];

  while (idx < maxLength) {
    arr.forEach((word) => {
      if (word.length <= idx) {
        return;
      }
      answer.push(word[idx]);
    });
    idx++;
  }
  return answer.join("");
};

const answer = solution(input);
console.log(answer);
