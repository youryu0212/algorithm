const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const answer = [];
const search = (arr, currentIdx, currentDepth, maxDepth, result) => {
  if (currentDepth === maxDepth) {
    console.log(result);
    return;
  }
  for (let i = currentIdx; i < arr.length; i++) {
    search(arr, i + 1, currentDepth + 1, maxDepth, result + arr[i] + " ");
  }
  return;
};

input.forEach((row) => {
  row = row.split(" ");
  if (row[0] === 0) return;
  search(row, 1, 0, 6, "");
  console.log(" ");
});
