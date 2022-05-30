const s = require("fs").readFileSync("/dev/stdin").toString().split("\n")[0];

const solution = (s) => {
  const answer = new Set();
  for (let l = 1; l <= s.length; l++) {
    for (let i = 0; i + l <= s.length; i++) {
      answer.add(s.slice(i, i + l));
    }
  }
  return answer.size;
};

const answer = solution(s);
console.log(answer);
