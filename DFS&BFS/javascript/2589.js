const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1, -1).map((row) => row.split(""));

const checkRange = (r, c) => {
  if (r < 0 || c < 0 || r >= n || c >= m) {
    return false;
  }
  return true;
};

const getMaxDistance = (arr) => {
  return arr.reduce((maxNum, row) => {
    return Math.max(maxNum, ...row);
  }, 0);
};

const bfs = (r, c) => {
  const distance = Array.from(Array(n), () => new Array(m).fill(-1));
  const q = [[r, c, 0]];
  distance[r][c] = 0;
  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let idx = 0;

  while (q.length > idx) {
    const [r, c, cnt] = q[idx++];
    for (let [dr, dc] of moves) {
      const [nr, nc] = [r + dr, c + dc];
      if (!checkRange(nr, nc)) {
        continue;
      }

      if (arr[nr][nc] === "W") {
        continue;
      }

      if (distance[nr][nc] >= 0) {
        continue;
      }
      distance[nr][nc] = cnt + 1;
      q.push([nr, nc, cnt + 1]);
    }
  }
  return getMaxDistance(distance);
};

const answer = arr.reduce((answer, row, r) => {
  return Math.max(
    answer,
    row.reduce((maxDistance, position, c) => {
      if (position === "W") {
        return maxDistance;
      }
      return Math.max(maxDistance, bfs(r, c));
    }, 0)
  );
}, 0);

console.log(answer);
