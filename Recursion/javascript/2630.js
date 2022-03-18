const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const result = [0, 0];
const arr = input.slice(1, input.length - 1).map((v) => v.split(" ").map(Number));
const search = (r, c, n) => {
  const num = arr[r][c];
  for (let i = r; i < r + n; i++) {
    for (let j = c; j < c + n; j++) {
      if (num !== arr[i][j]) {
        n = ~~(n / 2);
        search(r, c, n);
        search(r + n, c, n);
        search(r, c + n, n);
        search(r + n, c + n, n);
        return false;
      }
    }
  }
  result[num]++;
  return true;
};

search(0, 0, Number(input[0]));
console.log(result.join("\n"));
