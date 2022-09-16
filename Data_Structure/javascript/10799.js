const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const solution = (arr) => {
  const stack = [];
  const LAST_IDX = arr.length - 1;
  return arr.reduce((cnt, mark, idx) => {
    if (idx !== LAST_IDX && mark === "(" && arr[idx + 1] === ")") {
      return cnt + stack.length;
    }
    if (mark === ")" && arr[idx - 1] === "(") {
      return cnt;
    }
    if (mark === "(") {
      stack.push("(");
      return cnt;
    }
    if (mark === ")") {
      stack.pop();
      return cnt + 1;
    }
  }, 0);
};

const answer = solution([...input]);

console.log(answer);
