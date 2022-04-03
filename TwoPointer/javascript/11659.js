const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const arr = input[1]
  .split(" ")
  .map(Number)
  .reduce(
    (acc, cur, idx) => {
      acc.push(acc[idx] + cur);
      return acc;
    },
    [0]
  );
let result = "";
for (let i = 2; i < input.length - 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);

  result += arr[b] - arr[--a];
  result += "\n";
}

console.log(result);
