const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const [x, y, e] = input[1].split(" ").map(Number);
const arr = input.slice(2).map((row) => row.split(" ").map(Number));
let answer = 0;

for (let i = 0; i < n; i++) {
  const [nx, ny] = [arr[i][0], arr[i][1]];
  let wifi = e - Math.abs(nx - x) - Math.abs(ny - y);
  for (let j = 0; j < n; j++) {
    if (i === j) {
      wifi -= arr[j][2];
      continue;
    }
    if (wifi <= 0) {
      wifi = 0;
      break;
    }
    wifi -= Math.max(0, arr[j][2] - Math.abs(nx - arr[j][0]) - Math.abs(ny - arr[j][1]));
  }
  answer = Math.max(answer, wifi);
}
answer = answer === 0 ? "IMPOSSIBLE" : answer;
console.log(answer);
