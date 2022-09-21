const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const answer = input
  .slice(1)
  .map((row) =>
    [...row]
      .map((value, idx) => {
        if (value === "." && row[row.length - 1 - idx] !== ".") {
          return row[row.length - 1 - idx];
        }
        return value;
      })
      .join("")
  )
  .join("\n");

console.log(answer);
