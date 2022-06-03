const n = Number(require("fs").readFileSync("/dev/stdin").toString());

const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n === 0) {
      return answer;
    }
    if (i > n) {
      return answer + 1;
    }
    answer += 1;
    n -= i;
  }
  return answer;
};
const answer = solution(n);
console.log(answer);
