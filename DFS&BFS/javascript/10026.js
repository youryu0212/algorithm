const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i].split(""));
}

const search = () => {
  const visited = Array.from(Array(n), () => new Array(n).fill(false));
  const moves = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  const answer = [0, 0];
  const vaildChecker = (nr, nc, color, visited) => {
    if (nr < 0 || nc < 0 || nr >= n || nc >= n) {
      return false;
    }
    if (visited[nr][nc]) {
      return false;
    }
    if (color !== arr[nr][nc]) {
      return false;
    }
    return true;
  };
  const dfs = (r, c, color, visited) => {
    for (let move of moves) {
      let [nr, nc] = [r + move[0], c + move[1]];
      if (!vaildChecker(nr, nc, color, visited)) continue;
      visited[nr][nc] = true;
      dfs(nr, nc, color, visited);
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) continue;
      visited[i][j] = true;
      answer[0]++;
      dfs(i, j, arr[i][j], visited);
    }
  }
  const visitedTwo = Array.from(Array(n), () => new Array(n).fill(false));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === "G") {
        arr[i][j] = "R";
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visitedTwo[i][j]) continue;
      visitedTwo[i][j] = true;
      answer[1]++;
      dfs(i, j, arr[i][j], visitedTwo);
    }
  }
  return answer;
};

console.log(...search());
