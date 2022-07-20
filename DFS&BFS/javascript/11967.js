const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const arr = [];
for (let i = 0; i <= N; i++) {
  arr.push(Array.from({ length: N + 1 }, () => new Array()));
}

for (let i = 1; i <= M; i++) {
  const [x, y, a, b] = input[i].split(" ").map(Number);
  arr[x][y].push([a, b]);
}

const checkRange = (x, y) => {
  return !(x <= 0 || y <= 0 || x > N || y > N);
};

const bfs = (arr) => {
  const q = [[1, 1]];
  const visited = Array.from(Array(N + 1), () => new Array().fill(false));
  const lightOn = Array.from(Array(N + 1), () => new Array().fill(false));
  lightOn[1][1] = true;
  visited[1][1] = true;

  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let cnt = 1;
  let idx = 0;
  while (q.length > idx) {
    const [x, y] = q[idx++];

    for (const [a, b] of arr[x][y]) {
      if (visited[a][b]) {
        continue;
      }
      if (!lightOn[a][b]) {
        cnt++;
      }
      lightOn[a][b] = true;

      for (const [dx, dy] of moves) {
        const [nx, ny] = [a + dx, b + dy];
        if (!checkRange(nx, ny)) {
          continue;
        }

        if (visited[nx][ny]) {
          visited[a][b] = true;
          q.push([a, b]);
          break;
        }
      }
    }

    for (const [dx, dy] of moves) {
      const [nx, ny] = [x + dx, y + dy];
      if (!checkRange(nx, ny)) {
        continue;
      }
      if (lightOn[nx][ny] && !visited[nx][ny]) {
        visited[nx][ny] = true;
        q.push([nx, ny]);
      }
    }
  }
  return cnt;
};

const answer = bfs(arr);
console.log(answer);
