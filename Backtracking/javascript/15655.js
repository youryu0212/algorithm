const [[_, M], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const arr = input[0].sort((a, b) => a - b);

const search = (arr) => {
  const answer = [];
  const generate = (cur, idx) => {
    if (cur.length >= M) {
      answer.push(cur.join(" "));
      return;
    }
    for (let i = idx; i < arr.length; i++) {
      generate([...cur, arr[i]], i + 1);
    }
  };
  generate([], 0);
  return answer.join("\n");
};
const answer = search(arr);
console.log(answer);
