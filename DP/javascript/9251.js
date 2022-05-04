const [a, b] = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const result = [...b].reduce(
  (acc, bChar, r) => {
    const row = [0, ...a].reduce((row, aChar, c) => {
      if (c === 0) {
        row.push(0);
        return row;
      }
      if (aChar === bChar) {
        row.push(acc[r][c - 1] + 1);
      } else {
        row.push(Math.max(acc[r][c], row[c - 1]));
      }
      return row;
    }, []);
    acc.push(row);
    return acc;
  },
  [new Array(a.length + 1).fill(0)]
);

console.log(result[b.length][a.length]);
