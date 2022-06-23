const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const m = Number(input[1]);

const dist = Array.from(Array(n + 1), () => new Array(n + 1).fill(Infinity));

for (let idx = 2; idx < m + 2; idx++) {
  const [i, j, c] = input[idx].split(" ").map(Number);
  dist[i][j] = Math.min(dist[i][j], c);
}

for (let i = 0; i <= n; i++) {
  dist[i][i] = 0;
}

const floyd = (dist, n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === j) {
        continue;
      }
      for (let k = 1; k <= n; k++) {
        if (j === k || i === k) {
          continue;
        }
        dist[j][k] = Math.min(dist[j][k], dist[j][i] + dist[i][k]);
      }
    }
  }
  return dist
    .slice(1)
    .map((row) =>
      row
        .filter((_, idx) => idx !== 0)
        .map((row) => (row === Infinity ? 0 : row))
        .join(" ")
    )
    .join("\n");
};

const answer = floyd(dist, n);
console.log(answer);
