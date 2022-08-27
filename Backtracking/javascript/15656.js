const [[, M], arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

arr.sort((a, b) => a - b);

const search = (arr, M) => {
  const answer = [];
  const generate = (cur) => {
    if (cur.length === M) {
      answer.push(cur.join(" "));
      return;
    }
    for (const v of arr) {
      generate([...cur, v]);
    }
  };
  generate([]);
  return answer.join("\n");
};

const answer = search(arr, M);
console.log(answer);
