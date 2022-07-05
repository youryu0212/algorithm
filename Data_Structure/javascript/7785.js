const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const answer = [
  ...input.slice(1, -1).reduce((answer, row) => {
    const [name_, order] = row.split(" ");
    if (order === "enter") {
      answer.add(name_);
    } else {
      answer.delete(name_);
    }
    return answer;
  }, new Set()),
]
  .sort()
  .reverse()
  .join("\n");

console.log(answer);
