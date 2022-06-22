const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const answer = input.slice(1, -1).reduce(
  (answer, row) => {
    if (row === "ENTER") {
      answer.map = new Map();
      return answer;
    }
    if (!answer.map.has(row)) {
      answer.cnt++;
      answer.map.set(row, answer.map.get(row));
    }
    return answer;
  },
  { cnt: 0, map: new Map() }
).cnt;

console.log(answer);
