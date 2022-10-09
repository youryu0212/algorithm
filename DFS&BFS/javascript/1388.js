const arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((row) => [...row]);

const answer = arr.reduce((answer, row, i) => {
  return (
    answer +
    row.reduce((cnt, tile, j) => {
      if (tile === 0) {
        return cnt;
      }
      if (tile === "-") {
        row[j] = 0;
        let c = j + 1;
        while (c < arr[0].length && row[c] === "-") {
          row[c] = 0;
          c++;
        }
      }
      if (tile === "|") {
        row[j] = 0;
        let r = i + 1;
        while (r < arr.length && arr[r][j] === "|") {
          arr[r][j] = 0;
          r++;
        }
      }
      return cnt + 1;
    }, 0)
  );
}, 0);

console.log(answer);
