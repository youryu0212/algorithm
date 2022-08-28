const [[, M], arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));
arr.sort((a, b) => a - b);

const search = (arr, M) => {
  const res = [];
  const generate = (cur, idx) => {
    if (cur.length === M) {
      res.push(cur.join(" "));
      return;
    }
    for (let i = idx; i < arr.length; i++) {
      generate([...cur, arr[i]], i + 1);
    }
  };
  generate([], 0);
  return [...new Set(res)].join("\n");
};

const answer = search(arr, M);

console.log(answer);
